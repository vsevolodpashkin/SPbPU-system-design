---
hide: true
layout: center
---

# Архитектура ПО

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 2. Архитектурно-значимые требования. Тактики и решения</div>
<div class="mt-5 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
hide: true
layout: default
---

# Архитектурные стили

<p class="text-sm leading-snug -mt-3">
<strong class="text-gray-900">Архитектурный стиль</strong> — набор принципов и шаблонов, определяющих структуру системы: как организованы компоненты, как они взаимодействуют и развёртываются.
</p>

<div class="grid grid-cols-2 gap-x-6 mt-3">

<!-- Монолитные -->
<div>
  <div class="flex items-baseline gap-2 mb-2 pb-1 border-b border-gray-300">
    <span class="text-sm font-semibold uppercase tracking-wide text-gray-700">Монолитные</span>
    <span class="text-xs text-gray-400">— единый артефакт развёртывания</span>
  </div>

  <!-- Многоуровневая (highlighted) -->
  <div class="bg-emerald-100 border-l-4 border-emerald-500 rounded p-2 mb-1.5">
    <div class="flex items-baseline gap-2">
      <strong class="text-emerald-900 text-sm">Многоуровневая</strong>
      <span class="text-xs text-emerald-700 italic">(Layered)</span>
    </div>
    <p class="text-xs text-gray-700 leading-snug mt-0.5">Разделение на слои: представление → бизнес-логика → данные.</p>
  </div>

  <!-- Конвейерная -->
  <div class="px-2 py-1.5 mb-1.5">
    <div class="flex items-baseline gap-2">
      <strong class="text-gray-900 text-sm">Конвейерная</strong>
      <span class="text-xs text-gray-500 italic">(Pipeline)</span>
    </div>
    <p class="text-xs text-gray-600 leading-snug mt-0.5">Данные проходят цепочку последовательных обработчиков (фильтров).</p>
  </div>

  <!-- Микроядерная -->
  <div class="px-2 py-1.5">
    <div class="flex items-baseline gap-2">
      <strong class="text-gray-900 text-sm">Микроядерная</strong>
      <span class="text-xs text-gray-500 italic">(Microkernel)</span>
    </div>
    <p class="text-xs text-gray-600 leading-snug mt-0.5">Минимальное ядро + подключаемые модули-плагины.</p>
  </div>
</div>

<!-- Распределённые -->
<div>
  <div class="flex items-baseline gap-2 mb-2 pb-1 border-b border-gray-300">
    <span class="text-sm font-semibold uppercase tracking-wide text-gray-700">Распределённые</span>
    <span class="text-xs text-gray-400">— компоненты на разных узлах</span>
  </div>

  <!-- На основе сервисов -->
  <div class="px-2 py-0 mb-0">
    <div class="flex items-baseline gap-2">
      <strong class="text-gray-900 text-sm">На основе сервисов</strong>
      <span class="text-xs text-gray-500 italic">(Service-Based)</span>
    </div>
    <p class="text-xs text-gray-600 leading-snug mt-0.5">Несколько крупных сервисов, разделяющих общую БД.</p>
  </div>

  <!-- Управляемая событиями -->
  <div class="px-2 py-0 mb-0">
    <div class="flex items-baseline gap-2">
      <strong class="text-gray-900 text-sm">Управляемая событиями</strong>
      <span class="text-xs text-gray-500 italic">(Event-Driven)</span>
    </div>
    <p class="text-xs text-gray-600 leading-snug mt-0.5">Асинхронное взаимодействие через брокер событий.</p>
  </div>

  <!-- На основе пространства -->
  <div class="px-2 py-0 mb-0">
    <div class="flex items-baseline gap-2">
      <strong class="text-gray-900 text-sm">На основе пространства</strong>
      <span class="text-xs text-gray-500 italic">(Space-Based)</span>
    </div>
    <p class="text-xs text-gray-600 leading-snug mt-0.5">Масштабирование через репликацию данных in-memory.</p>
  </div>

  <!-- Сервис-ориентированная -->
  <div class="px-2 py-0 mb-0">
    <div class="flex items-baseline gap-2">
      <strong class="text-gray-900 text-sm">Сервис-ориентированная</strong>
      <span class="text-xs text-gray-500 italic">(SOA)</span>
    </div>
    <p class="text-xs text-gray-600 leading-snug mt-0.5">Слабо связанные сервисы, общаются через ESB.</p>
  </div>

  <!-- Микросервисов (highlighted) -->
  <div class="bg-emerald-100 border-l-4 border-emerald-500 rounded p-1">
    <div class="flex items-baseline gap-2">
      <strong class="text-emerald-900 text-sm">Микросервисов</strong>
      <span class="text-xs text-emerald-700 italic">(Microservices)</span>
    </div>
    <p class="text-xs text-gray-700 leading-snug mt-0.5">Мелкие сервисы со своей БД и независимым деплоем.</p>
  </div>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson8">← Занятие 8</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: true
layout: default
---

# Монолитная многоуровневая архитектура

<div class="grid grid-cols-[300px_1fr] gap-4 mt-1 items-start">

<!-- Левая колонка: суть + плюсы и минусы -->
<div class="flex flex-col gap-1.5">

  <p class="text-[11px] text-gray-500">
    Единый артефакт: <strong class="text-gray-700">Presentation → Business → Data Access</strong>. Без строгой дисциплины — «big ball of mud».
  </p>

  <!-- Преимущества -->
  <div class="bg-emerald-50 border-l-4 border-emerald-500 rounded px-2 py-1">
    <h3 class="text-xs font-semibold text-emerald-800 mb-1 flex items-center gap-1.5">
      <span class="text-emerald-600">✓</span> Преимущества
    </h3>
    <ul class="text-[11px] text-gray-700 leading-snug space-y-0.5">
      <li><strong class="text-gray-900">Простая структура</strong> — легко понять и начать</li>
      <li><strong class="text-gray-900">Один артефакт</strong> — быстрый локальный деплой</li>
      <li><strong class="text-gray-900">Стандартные паттерны</strong> — привычные инструменты</li>
      <li><strong class="text-gray-900">Простое тестирование</strong> — слои изолированы</li>
    </ul>
  </div>

  <!-- Недостатки -->
  <div class="bg-red-50 border-l-4 border-red-500 rounded px-2 py-1">
    <h3 class="text-xs font-semibold text-red-800 mb-1 flex items-center gap-1.5">
      <span class="text-red-600">✗</span> Недостатки
    </h3>
    <ul class="text-[11px] text-gray-700 leading-snug space-y-0.5">
      <li><strong class="text-gray-900">Сильная связанность</strong> при слабой дисциплине</li>
      <li><strong class="text-gray-900">Только целиком</strong> — нет частичного масштабирования</li>
      <li><strong class="text-gray-900">Долгие build/deploy</strong> с ростом кодовой базы</li>
      <li><strong class="text-gray-900">Lock-in на стек</strong> + single point of failure</li>
    </ul>
  </div>

</div>

<!-- Правая колонка: пример кода -->
<div class="min-w-0">
  <div class="text-[10px] text-gray-500 mb-1 flex items-center gap-2">
    <span class="font-mono text-gray-700">app.py</span>
    <span class="text-gray-300">·</span>
    <span>спагетти-вариант: все слои в одном файле</span>
  </div>
  <div class="bg-gray-900 rounded-lg p-2 overflow-hidden">

<pre class="text-[8px] leading-[1.25] font-mono text-gray-100"><code><span class="text-purple-400">import</span> sqlite3
<span class="text-purple-400">from</span> flask <span class="text-purple-400">import</span> Flask, jsonify

app = Flask(__name__)

<span class="text-purple-400">def</span> <span class="text-yellow-300">db</span>(): <span class="text-purple-400">return</span> sqlite3.connect(<span class="text-emerald-300">"shop.db"</span>)  <span class="text-gray-500"># «слой данных»</span>

<span class="text-purple-400">def</span> <span class="text-yellow-300">get_user</span>(uid):                             <span class="text-gray-500"># бизнес</span>
    r = db().execute(<span class="text-emerald-300">"SELECT * FROM users WHERE id=?"</span>, (uid,)).fetchone()
    <span class="text-purple-400">return</span> r <span class="text-purple-400">and</span> {<span class="text-emerald-300">"id"</span>: r[<span class="text-amber-300">0</span>], <span class="text-emerald-300">"name"</span>: r[<span class="text-amber-300">1</span>], <span class="text-emerald-300">"balance"</span>: r[<span class="text-amber-300">2</span>]}

<span class="text-purple-400">def</span> <span class="text-yellow-300">charge_user</span>(uid, amount):                   <span class="text-gray-500"># бизнес → данные + email</span>
    user = get_user(uid)
    <span class="text-purple-400">if not</span> user <span class="text-purple-400">or</span> user[<span class="text-emerald-300">"balance"</span>] &lt; amount:
        send_email(uid, <span class="text-emerald-300">"no money"</span>)                          <span class="text-gray-500"># → email</span>
        <span class="text-purple-400">return</span> <span class="text-purple-400">False</span>
    db().execute(<span class="text-emerald-300">"UPDATE users SET balance=balance-? WHERE id=?"</span>, (amount, uid))
    <span class="text-purple-400">return</span> <span class="text-purple-400">True</span>

<span class="text-purple-400">def</span> <span class="text-yellow-300">send_email</span>(uid, msg):                      <span class="text-gray-500"># бизнес знает про SMTP</span>
    <span class="text-purple-400">print</span>(<span class="text-green-300">f"[SMTP] u{uid}: {msg}"</span>)

<span class="text-purple-400">def</span> <span class="text-yellow-300">place_order</span>(uid, items):                   <span class="text-gray-500"># бизнес</span>
    total = <span class="text-yellow-300">sum</span>(i[<span class="text-emerald-300">"price"</span>]*i[<span class="text-emerald-300">"qty"</span>] <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> items)
    <span class="text-purple-400">if not</span> charge_user(uid, total): <span class="text-purple-400">return</span> <span class="text-purple-400">None</span>
    cur = db().execute(<span class="text-emerald-300">"INSERT INTO orders VALUES(NULL,?,?,1)"</span>, (uid, total))
    send_email(uid, <span class="text-emerald-300">f"order #{cur.lastrowid}"</span>)
    <span class="text-purple-400">return</span> cur.lastrowid

<span class="text-cyan-300">@app</span>.route(<span class="text-emerald-300">"/users/&lt;int:uid&gt;"</span>)
<span class="text-purple-400">def</span> <span class="text-yellow-300">user_view</span>(uid):                        <span class="text-gray-500"># presentation</span>
    user = get_user(uid)
    <span class="text-purple-400">if not</span> user: <span class="text-purple-400">return</span> jsonify({<span class="text-emerald-300">"error"</span>:<span class="text-emerald-300">"not_found"</span>}), <span class="text-amber-300">404</span>
    <span class="text-gray-500"># presentation лезет в БД напрямую:</span>
    cnt = db().execute(<span class="text-emerald-300">"SELECT COUNT(*) FROM orders WHERE user_id=?"</span>, (uid,)).fetchone()[<span class="text-amber-300">0</span>]
    <span class="text-purple-400">return</span> jsonify({**user, <span class="text-emerald-300">"orders_count"</span>: cnt})</code></pre>
  </div>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson7">← Занятие 7</a>
  <a href="/lesson9">Занятие 9 →</a>
</div>

---
hide: true
layout: default
---

# Микросервисная архитектура

<p class="text-sm leading-snug -mt-3 text-gray-500">
Стиль архитектуры, при котором система строится как набор слабо связанных, <strong class="text-gray-700">независимо развёртываемых сервисов</strong>, взаимодействующих через лёгкие сетевые протоколы (HTTP/REST, gRPC, очереди сообщений).
</p>

<!-- Hero-определение с иконкой -->
<div class="mt-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg p-1 flex items-start gap-3">
  <span class="flex-shrink-0 bg-indigo-600 text-white rounded-lg w-10 h-10 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/>
      <circle cx="4" cy="4" r="2"/>
      <circle cx="20" cy="4" r="2"/>
      <circle cx="4" cy="20" r="2"/>
      <circle cx="20" cy="20" r="2"/>
      <line x1="5.5" y1="5.5" x2="9.5" y2="9.5"/>
      <line x1="14.5" y1="9.5" x2="18.5" y2="5.5"/>
      <line x1="9.5" y1="14.5" x2="5.5" y2="18.5"/>
      <line x1="14.5" y1="14.5" x2="18.5" y2="18.5"/>
    </svg>
  </span>
  <div class="flex-1">
    <div class="text-[10px] uppercase tracking-wider font-semibold text-indigo-600">определение</div>
    <p class="text-sm text-gray-800 leading-snug mt-0.5">
      <em>«Микросервисная архитектура»</em> — подход к разработке единой системы как набора <strong class="text-indigo-900">слабо связанных</strong>, <strong class="text-indigo-900">автономно развёртываемых</strong> сервисов, каждый из которых отвечает за <strong class="text-indigo-900">одну бизнес-возможность</strong> и общается с другими через сетевые протоколы.
    </p>
  </div>
</div>

<!-- Плюсы и минусы -->
<div class="grid grid-cols-2 gap-4 mt-3">

  <!-- ПЛЮСЫ -->
  <div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-2 pb-1.5 border-b border-emerald-200">
      <span class="flex-shrink-0 bg-emerald-600 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
      <strong class="text-emerald-800 text-base">Плюсы</strong>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1">
      <li class="flex gap-1.5"><span class="text-emerald-600 font-bold mt-0.5">✓</span><div class="leading-[15px]"><strong class="text-gray-900">Высокая масштабируемость</strong> — каждый сервис масштабируется независимо под свою нагрузку</div></li>
      <li class="flex gap-1.5"><span class="text-emerald-600 font-bold mt-0.5">✓</span><div class="leading-[15px]"><strong class="text-gray-900">Гибкость изменения</strong> — изменение одного сервиса не затрагивает остальные, легче катить релизы</div></li>
      <li class="flex gap-1.5"><span class="text-emerald-600 font-bold mt-0.5">✓</span><div class="leading-[15px]"><strong class="text-gray-900">Модульность</strong> — каждый сервис = отдельная бизнес-возможность со своей командой и стеком</div></li>
      <li class="flex gap-1.5"><span class="text-emerald-600 font-bold mt-0.5">✓</span><div class="leading-[15px]"><strong class="text-gray-900">Эластичность</strong> — автоматическое масштабирование спотовой нагрузки, отказ отдельных узлов без потери системы</div></li>
    </ul>
  </div>

  <!-- МИНУСЫ -->
  <div class="bg-red-50 border-2 border-red-300 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-2 pb-1.5 border-b border-red-200">
      <span class="flex-shrink-0 bg-red-600 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </span>
      <strong class="text-red-800 text-base">Минусы</strong>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1">
      <li class="flex gap-1.5"><span class="text-red-600 font-bold mt-0.5">✗</span><div class="leading-[15px]"><strong class="text-gray-900">Сложность общего решения</strong> — распределённые транзакции, сетевые задержки, eventual consistency</div></li>
      <li class="flex gap-1.5"><span class="text-red-600 font-bold mt-0.5">✗</span><div class="leading-[15px]"><strong class="text-gray-900">Общая стоимость владения</strong> — больше инфраструктуры, мониторинга, команд DevOps</div></li>
      <li class="flex gap-1.5"><span class="text-red-600 font-bold mt-0.5">✗</span><div class="leading-[15px]"><strong class="text-gray-900">Скорость работы</strong> — сетевые вызовы между сервисами медленнее вызовов функций в монолите</div></li>
      <li class="flex gap-1.5"><span class="text-red-600 font-bold mt-0.5">✗</span><div class="leading-[15px]"><strong class="text-gray-900">Сложность инфраструктуры</strong> — CI/CD, service mesh, observability, развёртывание — отдельная дисциплина</div></li>
    </ul>
  </div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/48">← C4 Level 2</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: true
layout: default
---

# Микросервисная архитектура — пример

<p class="text-sm leading-snug -mt-3 text-gray-500">
Типовая схема микросервисной системы на примере e-commerce
</p>

<!-- Изображение -->
<div class="flex items-center justify-center mt-3">
  <img src="/Microservices.webp" alt="Схема микросервисной архитектуры e-commerce системы" class="rounded shadow-md border border-gray-200 max-h-[40vh] max-w-[90vw] object-contain bg-white" />
</div>

<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-1.5">
  На схеме: 5 доменных сервисов (пользователи, заказы, каталог, платежи, доставка) с собственными БД и общим API-шлюзом + наблюдаемость (логирование, мониторинг, трейсинг, конфигурирование, реестр сервисов).
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/49">← Определение MSA</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>