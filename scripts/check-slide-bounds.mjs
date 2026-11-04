#!/usr/bin/env node
/**
 * Проверка соблюдения границ слайдов Slidev.
 *
 * Слайд имеет фиксированный логический размер 980x552 (16:9). Контент слайда
 * не должен выходить за рамку слайда — иначе он обрезается или наезжает на
 * соседние элементы (например, на нижнюю навигацию).
 *
 * Чекер поднимает headless Chrome, открывает каждый слайд в dev-сервере Slidev,
 * измеряет реальные bounding-боксы элементов и сообщает:
 *   ✗ ERROR — контент вышел за рамку слайда (980x552), обрезается;
 *   ⚠ WARN  — контент вышел за поле контента (внутренние отступы layout),
 *              т.е. наезжает на поля/нижнюю навигацию.
 *
 * Зависимостей нет: Chrome DevTools Protocol напрямую по WebSocket
 * (глобальный WebSocket в Node >= 22).
 *
 * Использование:
 *   node scripts/check-slide-bounds.mjs                 # все слайды
 *   node scripts/check-slide-bounds.mjs --slides 90     # конкретный слайд
 *   node scripts/check-slide-bounds.mjs --slides 88-95  # диапазон
 *   node scripts/check-slide-bounds.mjs --slides 90,92  # список
 *   node scripts/check-slide-bounds.mjs --all --json    # машинный вывод
 *
 * Опции:
 *   --url <base>      база dev-сервера Slidev (по умолчанию http://localhost:3030)
 *   --port <n>        порт для автозапуска dev-сервера (по умолчанию из --url)
 *   --no-server       не запускать dev-сервер автоматически
 *   --tolerance <px>  допуск в px (по умолчанию 1)
 *   --json            вывод в формате JSON
 */

import { spawn } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { setTimeout as sleep } from 'node:timers/promises'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/* ------------------------------------------------------------------ args */

const args = process.argv.slice(2)
const flag = (name) => args.includes(`--${name}`)
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback
}

const BASE_URL = opt('url', 'http://localhost:3030')
const TOLERANCE = Number(opt('tolerance', '1'))
const AS_JSON = flag('json')
const SCREENSHOT_DIR = opt('screenshot', null)
// количество кликов по слайду перед измерением — нужно для слайдов с v-click
const CLICKS = Number(opt('clicks', '0'))
const NO_SERVER = flag('no-server')
const PORT = Number(opt('port', new URL(BASE_URL).port || 3030))

/* --------------------------------------------------- markdown slide index */

/**
 * Разбирает pages/*.md так же, как это делает Slidev: слайд = frontmatter
 * (`---` ... `---`), содержимое слайда — всё до следующего `---`.
 * Возвращает плоский список слайдов в порядке следования в slides.md.
 */
function buildSlideIndex() {
  const slidesMd = join(ROOT, 'slides.md')
  if (!existsSync(slidesMd)) return []
  const sources = [...readFileSync(slidesMd, 'utf8').matchAll(/src:\s*(\.\/[^\s]+)/g)].map((m) => m[1])
  const out = []
  for (const src of sources) {
    const file = resolve(ROOT, src)
    if (!existsSync(file)) continue
    const lines = readFileSync(file, 'utf8').split('\n')
    let fence = null
    let inFrontmatter = false
    let start = 0
    const blocks = []
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/)
      if (fenceMatch) {
        if (!fence) fence = fenceMatch[1]
        else if (fenceMatch[1][0] === fence[0] && fenceMatch[1].length >= fence.length) fence = null
        continue
      }
      if (fence) continue
      if (line.trim() === '---') {
        if (!inFrontmatter) {
          inFrontmatter = true
          start = i + 1
        } else {
          inFrontmatter = false
          blocks.push({ start, end: i })
          start = i + 1
        }
      }
    }
    if (inFrontmatter) blocks.push({ start, end: lines.length })

    for (const [blockIndex, block] of blocks.entries()) {
      // содержимое слайда идёт после закрывающего `---` и до следующего блока
      const contentStart = block.end + 1
      const contentEnd = (blocks[blockIndex + 1]?.start ?? lines.length) - 1
      let heading = ''
      let headingLine = contentStart + 1
      for (let i = contentStart; i <= contentEnd && i < lines.length; i++) {
        const m = lines[i].match(/^#{1,2}\s+(.*)$/)
        if (m) {
          heading = m[1].trim()
          headingLine = i + 1
          break
        }
      }
      // frontmatter: строки между `---` (start) и закрывающим `---` (end)
      const frontmatter = lines.slice(block.start, block.end).join('\n')
      const hidden = /^\s*hide:\s*true\s*$/m.test(frontmatter)
      out.push({ file: src.replace(/^\.\//, ''), line: headingLine, heading, hidden })
    }
  }
  return out
}

/**
 * Слайды с `hide: true` не рендерятся вообще, поэтому нумерация в URL и в DOM
 * идёт только по видимым слайдам. Возвращает список видимых слайдов в порядке
 * следования — индекс элемента + 1 совпадает с номером слайда в URL.
 */
function visibleSlides(index) {
  return index.filter((slide) => !slide.hidden)
}

/**
 * Ищет исходный файл и строку для слайда по его заголовку.
 * Основной путь — позиционное сопоставление (DOM отдаёт видимые слайды
 * в порядке колоды); поиск по заголовку используется как уточнение,
 * если позиция не подтверждается заголовком.
 */
function locateSlide(visibleIndex, slideNo, title) {
  const positional = visibleIndex[slideNo - 1] || null
  if (positional && (!title || !positional.heading || positional.heading === title)) return positional
  if (title) {
    const found = visibleIndex.find((slide) => slide.heading && slide.heading === title)
    if (found) return found
  }
  return positional
}

/* --------------------------------------------------------------- chrome */

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/snap/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean)

function findChrome() {
  for (const candidate of CHROME_CANDIDATES) if (existsSync(candidate)) return candidate
  const cache = join(process.env.HOME || '', '.cache/ms-playwright')
  if (existsSync(cache)) {
    for (const dir of readdirSafe(cache)) {
      const bin = join(cache, dir, 'chrome-linux/chrome')
      if (existsSync(bin)) return bin
    }
  }
  return null
}

function readdirSafe(dir) {
  try {
    return readdirSync(dir)
  } catch {
    return []
  }
}

async function launchChrome() {
  const bin = findChrome()
  if (!bin) throw new Error('Chrome/Chromium не найден. Укажите путь через CHROME_PATH.')
  const profile = mkdtempSync(join(tmpdir(), 'slide-bounds-'))
  const proc = spawn(
    bin,
    [
      '--headless=new',
      '--remote-debugging-port=0',
      `--user-data-dir=${profile}`,
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--hide-scrollbars',
      '--window-size=1280,720',
      'about:blank',
    ],
    { stdio: ['ignore', 'pipe', 'pipe'] },
  )
  const wsUrl = await new Promise((resolvePromise, rejectPromise) => {
    let buffer = ''
    const timer = setTimeout(() => rejectPromise(new Error('Chrome не ответил за 20 c')), 20000)
    proc.stderr.on('data', (chunk) => {
      buffer += chunk.toString()
      const match = buffer.match(/DevTools listening on (ws:\/\/\S+)/)
      if (match) {
        clearTimeout(timer)
        resolvePromise(match[1])
      }
    })
    proc.on('exit', (code) => {
      clearTimeout(timer)
      rejectPromise(new Error(`Chrome завершился с кодом ${code}`))
    })
  })
  return { proc, wsUrl, profile }
}

/* ------------------------------------------------------------------ cdp */

class CDP {
  constructor(ws) {
    this.ws = ws
    this.id = 0
    this.pending = new Map()
    this.listeners = new Map()
    ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data)
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve: res, reject: rej } = this.pending.get(msg.id)
        this.pending.delete(msg.id)
        if (msg.error) rej(new Error(`${msg.error.message} (${JSON.stringify(msg.error.data ?? '')})`))
        else res(msg.result)
      } else if (msg.method) {
        const handlers = this.listeners.get(msg.method)
        if (handlers) for (const handler of handlers) handler(msg.params, msg.sessionId)
      }
    })
  }

  static async connect(url) {
    const ws = new WebSocket(url)
    await new Promise((res, rej) => {
      ws.addEventListener('open', res, { once: true })
      ws.addEventListener('error', () => rej(new Error('Не удалось подключиться к Chrome DevTools')), { once: true })
    })
    return new CDP(ws)
  }

  send(method, params = {}, sessionId) {
    const id = ++this.id
    const payload = { id, method, params }
    if (sessionId) payload.sessionId = sessionId
    this.ws.send(JSON.stringify(payload))
    return new Promise((res, rej) => {
      this.pending.set(id, { resolve: res, reject: rej })
      setTimeout(() => {
        if (this.pending.has(id)) {
          this.pending.delete(id)
          rej(new Error(`Таймаут ${method}`))
        }
      }, 30000)
    })
  }

  on(method, handler) {
    if (!this.listeners.has(method)) this.listeners.set(method, [])
    const handlers = this.listeners.get(method)
    handlers.push(handler)
    return () => {
      const index = handlers.indexOf(handler)
      if (index >= 0) handlers.splice(index, 1)
    }
  }

  close() {
    try {
      this.ws.close()
    } catch {}
  }
}

/* ------------------------------------------------- измерение на странице */

const MEASURE = `(function () {
  const no = arguments[0];
  const tolerance = arguments[1];
  // поле контента проверяем с большим допуском: мелкие вылеты темы (h1 с отрицательным отступом) — не дефект
  const contentTolerance = tolerance + 3;
  const el = document.querySelector('.slidev-page-' + no);
  if (!el) return { error: 'слайд не найден в DOM' };
  const style = getComputedStyle(el);
  if (style.display === 'none') return { error: 'слайд не отрисован (display:none)' };
  const layout = el.firstElementChild;
  // пока асинхронный компонент слайда грузится, вместо layout висит спиннер
  if (!layout || !layout.classList.contains('slidev-layout')) return { error: 'слайд ещё загружается' };
  if (!el.textContent.trim()) return { error: 'контент слайда ещё не отрисован' };
  const rect = el.getBoundingClientRect();
  const W = el.offsetWidth;
  const H = el.offsetHeight;
  const scale = rect.width / W || 1;
  const local = (r) => ({
    left: (r.left - rect.left) / scale,
    top: (r.top - rect.top) / scale,
    right: (r.right - rect.left) / scale,
    bottom: (r.bottom - rect.top) / scale,
  });
  const lcs = getComputedStyle(layout);
  const pad = lcs
    ? {
        top: parseFloat(lcs.paddingTop) || 0,
        right: parseFloat(lcs.paddingRight) || 0,
        bottom: parseFloat(lcs.paddingBottom) || 0,
        left: parseFloat(lcs.paddingLeft) || 0,
      }
    : { top: 0, right: 0, bottom: 0, left: 0 };
  const contentBox = {
    left: pad.left,
    top: pad.top,
    right: W - pad.right,
    bottom: H - pad.bottom,
  };
  const describe = (node) => {
    const cls = (node.getAttribute('class') || '').split(/\\s+/).filter(Boolean).slice(0, 3).join('.');
    return node.tagName.toLowerCase() + (cls ? '.' + cls : '');
  };
  const all = [el, ...el.querySelectorAll('*')].filter((node) => {
    if (node.closest('script, style, template')) return false;
    const r = node.getBoundingClientRect();
    return !(r.width === 0 && r.height === 0);
  });
  const overflowFrame = [];
  const overflowContent = [];
  for (const node of all) {
    const r = node.getBoundingClientRect();
    const b = local(r);
    const over = {
      top: -b.top,
      left: -b.left,
      bottom: b.bottom - H,
      right: b.right - W,
    };
    const worst = Math.max(over.top, over.left, over.bottom, over.right);
    if (worst > tolerance) {
      overflowFrame.push({
        node,
        desc: describe(node),
        box: b,
        over,
        worst,
        position: getComputedStyle(node).position,
        text: (node.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 60),
      });
    }
    const inOverlay = (node) => {
      let p = node;
      while (p && p !== layout) {
        if (['absolute', 'fixed'].includes(getComputedStyle(p).position)) return true;
        p = p.parentElement;
      }
      return false;
    };
    if (node !== layout && !inOverlay(node)) {
      const overContent = {
        top: contentBox.top - b.top,
        left: contentBox.left - b.left,
        bottom: b.bottom - contentBox.bottom,
        right: b.right - contentBox.right,
      };
      const worstContent = Math.max(overContent.top, overContent.left, overContent.bottom, overContent.right);
      if (worstContent > contentTolerance) {
        overflowContent.push({
          node,
          desc: describe(node),
          box: b,
          over: overContent,
          worst: worstContent,
          text: (node.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 60),
        });
      }
    }
  }
  const outermost = (list) => {    const set = new Set(list.map((item) => item.node));
    return list.filter((item) => {
      let p = item.node.parentElement;
      while (p) {
        if (set.has(p)) return false;
        p = p.parentElement;
      }
      return true;
    });
  };
  const frameOut = outermost(overflowFrame);
  const contentOut = outermost(overflowContent);
  const shape = (item) => ({
    node: item.desc,
    text: item.text,
    left: +item.box.left.toFixed(1),
    top: +item.box.top.toFixed(1),
    right: +item.box.right.toFixed(1),
    bottom: +item.box.bottom.toFixed(1),
    over: {
      top: +item.over.top.toFixed(1),
      left: +item.over.left.toFixed(1),
      bottom: +item.over.bottom.toFixed(1),
      right: +item.over.right.toFixed(1),
    },
    worst: +item.worst.toFixed(1),
  });
  const heading = el.querySelector('h1, h2');
  const tree = (node, depth) => {
    const r = node.getBoundingClientRect();
    const b = local(r);
    const item = {
      node: describe(node),
      box: { left: +b.left.toFixed(1), top: +b.top.toFixed(1), right: +b.right.toFixed(1), bottom: +b.bottom.toFixed(1) },
    };
    if (depth > 0) {
      item.children = [...node.children]
        .filter((child) => {
          const cr = child.getBoundingClientRect();
          return !(cr.width === 0 && cr.height === 0);
        })
        .map((child) => tree(child, depth - 1));
    }
    return item;
  };
  return {
    ok: frameOut.length === 0,
    width: W,
    height: H,
    contentBox,
    title: heading ? heading.textContent.replace(/\\s+/g, ' ').trim() : '',
    frame: frameOut.map(shape),
    content: contentOut.map(shape),
    tree: tree(layout, 3),
  };
})`

/* ----------------------------------------------------------- dev server */

async function isServerUp(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(2000) })
    return res.ok
  } catch {
    return false
  }
}

async function ensureServer() {
  if (await isServerUp(BASE_URL)) return { proc: null, started: false }
  if (NO_SERVER) throw new Error(`Dev-сервер Slidev недоступен: ${BASE_URL} (запустите \`npm run dev\`)`)
  const proc = spawn('npx', ['slidev', '--port', String(PORT), '--no-open'], {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: process.env,
  })
  proc.stdout.on('data', () => {})
  proc.stderr.on('data', () => {})
  const deadline = Date.now() + 120000
  while (Date.now() < deadline) {
    if (await isServerUp(BASE_URL)) return { proc, started: true }
    await sleep(500)
  }
  proc.kill()
  throw new Error(`Dev-сервер не поднялся на ${BASE_URL}`)
}

/* ---------------------------------------------------------------- main */

/**
 * Разбирает список слайдов для проверки.
 * По умолчанию — все видимые слайды: слайды с `hide: true` не рендерятся
 * в презентации, поэтому измерять их нечего.
 */
function parseSlidesSpec(spec, index) {
  const wanted = new Set()
  if (!spec) {
    index.forEach((slide, i) => {
      if (!slide.hidden) wanted.add(i + 1)
    })
    return [...wanted].sort((a, b) => a - b)
  }
  for (const part of spec.split(',')) {
    const range = part.match(/^(\d+)\s*-\s*(\d+)$/)
    if (range) {
      const from = Number(range[1])
      const to = Number(range[2])
      for (let i = Math.min(from, to); i <= Math.max(from, to); i++) wanted.add(i)
    } else if (/^\d+$/.test(part.trim())) {
      wanted.add(Number(part.trim()))
    }
  }
  return [...wanted].sort((a, b) => a - b)
}

async function main() {
  const index = buildSlideIndex()
  const total = index.length
  const visibleIndex = visibleSlides(index)
  const visible = visibleIndex.length
  const slideNumbers = parseSlidesSpec(opt('slides', ''), index)

  if (SCREENSHOT_DIR) mkdirSync(SCREENSHOT_DIR, { recursive: true })

  const server = await ensureServer()
  const chrome = await launchChrome()
  const cdp = await CDP.connect(chrome.wsUrl)
  const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' })
  const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true })

  const results = []
  try {
    for (const no of slideNumbers) {
      await cdp.send('Page.enable', {}, sessionId)
      await cdp.send('Runtime.enable', {}, sessionId)

      const measure = async () => {
        for (let attempt = 0; attempt < 120; attempt++) {
          const { result, exceptionDetails } = await cdp.send(
            'Runtime.evaluate',
            { expression: `(${MEASURE})(${no}, ${TOLERANCE})`, returnByValue: true },
            sessionId,
          )
          if (result && result.value && !result.value.error) return result.value
          lastError = exceptionDetails
            ? exceptionDetails.exception?.description || exceptionDetails.text
            : (result && result.value && result.value.error) || 'слайд не отрисовался'
          await sleep(150)
        }
        return { error: lastError }
      }

      let lastError = null
      let loaded = false
      const offLoad = cdp.on('Page.loadEventFired', () => {
        loaded = true
      })
      await cdp.send('Page.navigate', { url: `${BASE_URL}/${no}` }, sessionId)
      for (let i = 0; i < 100 && !loaded; i++) await sleep(100)
      offLoad()

      let measurement = await measure()
      if (measurement.error) {
        // навигация могла не успеть прогрузить SPA — перезагружаем страницу принудительно
        loaded = false
        const offReload = cdp.on('Page.loadEventFired', () => {
          loaded = true
        })
        await cdp.send('Page.reload', {}, sessionId)
        for (let i = 0; i < 150 && !loaded; i++) await sleep(100)
        offReload()
        measurement = await measure()
      }

      // раскрываем v-click-шаги: Slidev продвигает клики клавишей «вправо»
      for (let i = 0; i < CLICKS; i++) {
        for (const type of ['keyDown', 'keyUp']) {
          await cdp.send(
            'Input.dispatchKeyEvent',
            {
              type,
              key: 'ArrowRight',
              code: 'ArrowRight',
              windowsVirtualKeyCode: 39,
              nativeVirtualKeyCode: 39,
            },
            sessionId,
          )
        }
        await sleep(400)
      }
      if (CLICKS > 0) measurement = await measure()

      if (SCREENSHOT_DIR) {
        const { result } = await cdp.send(
          'Runtime.evaluate',
          {
            expression: `(() => {
              const el = document.querySelector('.slidev-page-' + ${no});
              if (!el) return null;
              const r = el.getBoundingClientRect();
              return { x: r.x, y: r.y, width: r.width, height: r.height };
            })()`,
            returnByValue: true,
          },
          sessionId,
        )
        const clip = result && result.value
        if (clip && clip.width > 0 && clip.height > 0) {
          const shot = await cdp.send(
            'Page.captureScreenshot',
            { format: 'png', clip: { x: clip.x, y: clip.y, width: clip.width, height: clip.height, scale: 1 } },
            sessionId,
          )
          writeFileSync(join(SCREENSHOT_DIR, `slide-${String(no).padStart(3, '0')}.png`), Buffer.from(shot.data, 'base64'))
        }
      }

      results.push({ no, measurement })
    }
  } finally {
    cdp.close()
    chrome.proc.kill()
    await Promise.race([new Promise((r) => chrome.proc.once('exit', r)), sleep(3000)])
    try {
      rmSync(chrome.profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 })
    } catch {}
    if (server.started) server.proc.kill()
  }

  const report = results.map((result) => {
    const title = result.measurement ? result.measurement.title : ''
    const location = locateSlide(visibleIndex, result.no, title)
    return {
      slide: result.no,
      title,
      file: location ? location.file : null,
      line: location ? location.line : null,
      error: result.measurement ? result.measurement.error || null : 'не удалось измерить',
      frame: result.measurement?.frame ?? [],
      content: result.measurement?.content ?? [],
      tree: result.measurement?.tree ?? null,
    }
  })

  const failures = report.filter((r) => r.frame.length > 0)
  const warnings = report.filter((r) => r.frame.length === 0 && r.content.length > 0)

  if (AS_JSON) {
    console.log(
      JSON.stringify(
        { total, visible, checked: report.length, failures: failures.length, warnings: warnings.length, report },
        null,
        2,
      ),
    )
  } else {
    console.log(
      `Проверка границ слайдов: ${report.length} из ${visible} видимых (всего в колоде ${total}, скрытых — ${total - visible}), сервер ${BASE_URL}\n`,
    )
    for (const item of report) {
      const where = item.file ? `${item.file}:${item.line}` : '?'
      const mark = item.error ? '✗' : item.frame.length ? '✗' : item.content.length ? '⚠' : '✓'
      console.log(`${mark} Слайд ${item.slide} · ${where} · «${item.title || 'без заголовка'}»`)
      if (item.error) {
        console.log(`    ошибка: ${item.error}`)
        continue
      }
      for (const over of item.frame) {
        const sides = [
          over.over.top > 0 ? `верх +${over.over.top}` : null,
          over.over.left > 0 ? `лево +${over.over.left}` : null,
          over.over.bottom > 0 ? `низ +${over.over.bottom}` : null,
          over.over.right > 0 ? `право +${over.over.right}` : null,
        ].filter(Boolean)
        console.log(`    выход за рамку слайда (${over.node}): ${sides.join(', ')} px — блок ${over.left}..${over.right} × ${over.top}..${over.bottom}`)
        if (over.text) console.log(`      «${over.text}»`)
      }
      for (const over of item.content) {
        const sides = [
          over.over.top > 0 ? `верх +${over.over.top}` : null,
          over.over.left > 0 ? `лево +${over.over.left}` : null,
          over.over.bottom > 0 ? `низ +${over.over.bottom}` : null,
          over.over.right > 0 ? `право +${over.over.right}` : null,
        ].filter(Boolean)
        console.log(`    выход за поле контента (${over.node}): ${sides.join(', ')} px`)
      }
    }
    console.log('')
    console.log(`Итог: ошибок границ — ${failures.length}, предупреждений — ${warnings.length}`)
    if (failures.length) console.log(`Слайды с выходом за рамку: ${failures.map((f) => f.slide).join(', ')}`)
  }

  process.exit(failures.length ? 1 : 0)
}

main().catch((error) => {
  console.error(`Ошибка проверки: ${error.message}`)
  process.exit(2)
})
