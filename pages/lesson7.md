---
hide: false
layout: center
---

# Основы проектирования ПО

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 3. Интеграции систем</div>
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
hide: false
layout: default
---

# Сервисы

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Базовый строительный блок микросервисной архитектуры — <strong class="text-gray-700">автономная единица развёртывания</strong> с собственным API.
</p>

<!-- 2 колонки: текст слева, изображение справа -->
<div class="grid grid-cols-2 gap-5 mt-3">

  <!-- ЛЕВАЯ КОЛОНКА: определение -->
  <div>
    <div class="text-xs text-gray-500 mb-1.5 flex items-center gap-2">
      <span class="font-mono text-gray-700">Определение</span>
      <span class="text-gray-300">·</span>
      <span>по К. Ричардсону</span>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-3 space-y-2.5">
      <p class="text-[13px] text-gray-800 leading-relaxed">
        <strong class="text-gray-900">Сервис</strong> — это автономный, независимо развертываемый программный компонент, который реализует определённые функции.
      </p>
      <p class="text-[13px] text-gray-700 leading-relaxed">
        У него есть <strong class="text-gray-900">внешний интерфейс (API)</strong>, через который сервис предоставляет доступ к своим функциям.
      </p>
      <div class="border-t border-slate-200 pt-2.5">
        <div class="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1.5">API состоит из</div>
        <div class="grid grid-cols-3 gap-2">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center">
            <div class="text-blue-700 font-semibold text-xs">Команды</div>
            <div class="text-blue-600/80 text-[10px] mt-0.5">действие</div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-center">
            <div class="text-emerald-700 font-semibold text-xs">Запросы</div>
            <div class="text-emerald-600/80 text-[10px] mt-0.5">чтение</div>
          </div>
          <div class="bg-purple-50 border border-purple-200 rounded-lg p-2 text-center">
            <div class="text-purple-700 font-semibold text-xs">События</div>
            <div class="text-purple-600/80 text-[10px] mt-0.5">уведомление</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ПРАВАЯ КОЛОНКА: стек виртуальной машины -->
  <div>
    <div class="text-xs text-gray-500 mb-1.5 flex items-center gap-2">
      <span class="font-mono text-gray-700">Инфраструктура</span>
      <span class="text-gray-300">·</span>
      <span>где работает сервис</span>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-2">
      <img src="/VM.webp" alt="Стек виртуальной машины: от слоя приложения до физического сервера" class="w-full max-h-[400px] object-contain" />
    </div>
  </div>

</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
  Источник: Ричардсон К. Микросервисы. Паттерны разработки и рефакторинга / пер. с англ. — СПб. : Питер, 2019. — 544 с. — (Серия «Библиотека программиста»).
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson4">← Занятие 4</a>
  <a href="/lesson6">Занятие 6 →</a>
</div>


---
hide: false
layout: default
---

# Стили интеграции систем

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Четыре <strong class="text-gray-700">фундаментальных подхода</strong> к обмену данными между приложениями.
  Клик — следующий стиль.
</p>

<!-- 4 стиля интеграции (v-click 1..4) -->
<div class="grid grid-cols-2 gap-3 mt-3">

  <!-- 1. File Transfer -->
  <div v-click="1"
       class="bg-orange-50 border-2 border-orange-300 rounded-xl p-2.5">
    <div class="flex items-center gap-2 mb-1.5">
      <span class="text-xl">📄</span>
      <div>
        <strong class="text-orange-900 text-sm">Обмен файлами</strong>
        <div class="text-[10px] text-orange-700 font-mono">File Transfer</div>
      </div>
    </div>
    <p class="text-[11px] text-gray-700 leading-snug mb-1.5">
      Одна система записывает файл, другая периодически читает.
    </p>
    <div class="text-[10px] space-y-0.5">
      <div><span class="text-emerald-600">✓</span> Простота, независимость реализации</div>
      <div><span class="text-rose-600">✗</span> Рассинхронизация, низкая частота</div>
    </div>
    <div class="mt-1.5 flex flex-wrap gap-1">
      <span class="bg-white border border-orange-200 text-orange-800 px-1.5 py-0.5 rounded text-[10px] font-mono">SFTP</span>
      <span class="bg-white border border-orange-200 text-orange-800 px-1.5 py-0.5 rounded text-[10px] font-mono">CSV/JSON</span>
      <span class="bg-white border border-orange-200 text-orange-800 px-1.5 py-0.5 rounded text-[10px] font-mono">ETL</span>
    </div>
  </div>

  <!-- 2. Shared Database -->
  <div v-click="2"
       class="bg-cyan-50 border-2 border-cyan-300 rounded-xl p-2.5">
    <div class="flex items-center gap-2 mb-1.5">
      <span class="text-xl">🗄️</span>
      <div>
        <strong class="text-cyan-900 text-sm">Общая база данных</strong>
        <div class="text-[10px] text-cyan-700 font-mono">Shared Database</div>
      </div>
    </div>
    <p class="text-[11px] text-gray-700 leading-snug mb-1.5">
      Несколько приложений читают и пишут в одну общую БД.
    </p>
    <div class="text-[10px] space-y-0.5">
      <div><span class="text-emerald-600">✓</span> Реал-тайм, минимум кода интеграции</div>
      <div><span class="text-rose-600">✗</span> Сильная связанность, конфликты схемы</div>
    </div>
    <div class="mt-1.5 flex flex-wrap gap-1">
      <span class="bg-white border border-cyan-200 text-cyan-800 px-1.5 py-0.5 rounded text-[10px] font-mono">PostgreSQL</span>
      <span class="bg-white border border-cyan-200 text-cyan-800 px-1.5 py-0.5 rounded text-[10px] font-mono">MySQL</span>
      <span class="bg-white border border-cyan-200 text-cyan-800 px-1.5 py-0.5 rounded text-[10px] font-mono">Oracle</span>
    </div>
  </div>

  <!-- 3. Remote Procedure Invocation -->
  <div v-click="3"
       class="bg-violet-50 border-2 border-violet-300 rounded-xl p-2.5">
    <div class="flex items-center gap-2 mb-1.5">
      <span class="text-xl">📡</span>
      <div>
        <strong class="text-violet-900 text-sm">Удалённый вызов</strong>
        <div class="text-[10px] text-violet-700 font-mono">Remote Procedure Call</div>
      </div>
    </div>
    <p class="text-[11px] text-gray-700 leading-snug mb-1.5">
      Приложение синхронно вызывает функции другого по сети.
    </p>
    <div class="text-[10px] space-y-0.5">
      <div><span class="text-emerald-600">✓</span> Привычные паттерны (REST/gRPC/SOAP)</div>
      <div><span class="text-rose-600">✗</span> Блокировки, каскадные отказы</div>
    </div>
    <div class="mt-1.5 flex flex-wrap gap-1">
      <span class="bg-white border border-violet-200 text-violet-800 px-1.5 py-0.5 rounded text-[10px] font-mono">REST</span>
      <span class="bg-white border border-violet-200 text-violet-800 px-1.5 py-0.5 rounded text-[10px] font-mono">gRPC</span>
      <span class="bg-white border border-violet-200 text-violet-800 px-1.5 py-0.5 rounded text-[10px] font-mono">GraphQL</span>
    </div>
  </div>

  <!-- 4. Messaging -->
  <div v-click="4"
       class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-2.5">
    <div class="flex items-center gap-2 mb-1.5">
      <span class="text-xl">📨</span>
      <div>
        <strong class="text-emerald-900 text-sm">Асинхронные сообщения</strong>
        <div class="text-[10px] text-emerald-700 font-mono">Messaging</div>
      </div>
    </div>
    <p class="text-[11px] text-gray-700 leading-snug mb-1.5">
      Приложения обмениваются сообщениями через брокер.
    </p>
    <div class="text-[10px] space-y-0.5">
      <div><span class="text-emerald-600">✓</span> Отказоустойчивость, слабая связанность</div>
      <div><span class="text-rose-600">✗</span> Сложнее инфраструктура, eventual consistency</div>
    </div>
    <div class="mt-1.5 flex flex-wrap gap-1">
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded text-[10px] font-mono">Kafka</span>
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded text-[10px] font-mono">RabbitMQ</span>
      <span class="bg-white border border-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded text-[10px] font-mono">NATS</span>
    </div>
  </div>

</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
  Источник: Хопп Г., Вульф Б. <em>Шаблоны интеграции корпоративных приложений</em> / пер. с англ. — М. : Символ-Плюс, 2008. — 624 с. (Серия «High Tech»).
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson7">← Занятие 7</a>
  <a href="/lesson9">Занятие 9 →</a>
</div>


---
hide: false
layout: two-cols
layoutClass: gap-8
---

# Обмен файлами (File Transfer)

## Преимущества

- ✅ Не нужны сведения о внутренней реализации

## Недостатки

- ❌ Необязательные затраты (уникальность имен, блокировки, перенос фалов)
- ❌ Рассинхронизация интегрируемых систем вследствие низкой частоты обмена информацией
- ❌ Семантический диссонанс

::right::

<div class="flex items-center justify-center h-full">
  <img src="/FTP_06.webp" alt="Обмен файлами (File Transfer)" class="rounded shadow-lg max-h-[65vh]" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson5">← Занятие 5</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

---
hide: false
layout: two-cols
layoutClass: gap-8
---

# Общая база данных (Shared Database)

## Преимущества

- ✅ Данные всегда согласованы

## Недостатки

- ❌ Единая точка отказа
- ❌ Высокая связанность
- ❌ Блокировки данных
- ❌ Скорость извлечения данных резко падает при росте БД

::right::

<div class="flex items-center justify-center h-full">
  <img src="/sharedDB_06.webp" alt="Общая база данных (Shared Database)" class="rounded shadow-lg max-h-[65vh]" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson5">← Занятие 5</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

---
hide: false
layout: two-cols
layoutClass: gap-8
---

# Удаленный вызов процедур (Remote procedure Invocation)

## Преимущества

- ✅ Инкапсуляция данных

## Недостатки

- ❌ Низкая надежность (сбои при сетевом взаимодействии)
- ❌ Также высокая связанность, но ниже чем при общей БД

::right::

<div class="flex items-center justify-center h-full">
  <img src="/remoteProcedure_06.webp" alt="Удалённый вызов процедур (RPC)" class="rounded shadow-lg max-h-[65vh]" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson5">← Занятие 5</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

---
hide: false
layout: default
---

# Принципы REST

<p class="text-sm leading-snug -mt-3">REST задаётся пятью архитектурными ограничениями.</p>

<div class="grid grid-cols-2 gap-2 mt-2">

<!-- 1. Ресурсы и представления -->
<div class="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-2.5">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="flex-shrink-0 bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
      </svg>
    </span>
    <strong class="text-indigo-900 text-sm">Ресурсы и представления</strong>
  </div>
  <p class="text-xs leading-relaxed">Любая сущность — ресурс с URI; клиент работает лишь с её представлением (JSON, XML, HTML).</p>
</div>

<!-- 2. Отсутствие состояний на сервере -->
<div class="bg-slate-50 border-2 border-slate-300 rounded-xl p-2.5">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="flex-shrink-0 bg-slate-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M7 2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
        <line x1="2" y1="2" x2="22" y2="22"/>
      </svg>
    </span>
    <strong class="text-slate-900 text-sm">Отсутствие состояний на сервере</strong>
  </div>
  <p class="text-xs leading-relaxed">Каждый запрос самодостаточен: сервер не хранит контекст клиента между вызовами.</p>
</div>

<!-- 3. Самоописываемые сообщения -->
<div class="bg-cyan-50 border-2 border-cyan-300 rounded-xl p-2.5">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="flex-shrink-0 bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M8 3H7a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1"/>
        <path d="M16 3h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-1"/>
      </svg>
    </span>
    <strong class="text-cyan-900 text-sm">Самоописываемые сообщения</strong>
  </div>
  <p class="text-xs leading-relaxed">Метаданные (Content-Type, схема) в сообщении говорят получателю, как его обработать.</p>
</div>

<!-- 4. Возможность кэширования -->
<div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-2.5">
  <div class="flex items-center gap-2 mb-1.5">
    <span class="flex-shrink-0 bg-amber-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
        <path d="M3 12a9 3 0 0 0 18 0"/>
      </svg>
    </span>
    <strong class="text-amber-900 text-sm">Возможность кэширования</strong>
  </div>
  <p class="text-xs leading-relaxed">Ответы помечаются Cache-Control — клиент может не обращаться к серверу повторно.</p>
</div>

</div>

<!-- HATEOAS: full-width highlighted principle -->
<div class="mt-2 bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 rounded-xl p-2.5">
  <div class="flex items-start gap-2.5">
    <span class="flex-shrink-0 bg-rose-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M9 17H7a5 5 0 0 1 0-10h2"/>
        <path d="M15 7h2a5 5 0 1 1 0 10h-2"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    </span>
    <div class="min-w-0">
      <div class="flex items-baseline gap-1.5 flex-wrap">
        <strong class="text-rose-900 text-sm">HATEOAS</strong>
        <span class="text-rose-700 text-xs italic">гипермедиа для навигации по API</span>
      </div>
      <p class="text-xs leading-relaxed mt-0.5">Сервер возвращает ссылки на действия и ресурсы — клиент переходит по API как по веб-странице.</p>
    </div>
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson7">← Занятие 7</a>
  <a href="/lesson9">Занятие 9 →</a>
</div>

---
hide: false
layout: default
---

# Структура HTTP-запроса

<p class="text-sm leading-snug -mt-3">Запрос состоит из четырёх логических частей: метода, эндпоинта, заголовков и тела.</p>

<div class="grid grid-cols-2 gap-2 mt-2">

<!-- 1. Эндпоинт -->
<div v-click class="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-2">
  <div class="flex items-center gap-2 mb-1">
    <span class="flex-shrink-0 bg-indigo-500 text-white rounded-lg w-7 h-7 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    </span>
    <strong class="text-indigo-900 text-sm">Эндпоинт</strong>
  </div>
  <p class="text-xs leading-snug"><strong class="text-indigo-800">URL запроса</strong> — адрес, на который отправляются сообщения.</p>
  <p class="text-xs leading-snug mt-0.5">Структура: <code class="font-mono text-[11px] text-indigo-900 bg-white border border-indigo-200 rounded px-1 py-px">root-endpoint/?{params1=value1}&amp;{...}</code></p>
</div>

<!-- 2. HTTP-метод -->
<div v-click class="bg-slate-50 border-2 border-slate-300 rounded-xl p-2">
  <div class="flex items-center gap-2 mb-1">
    <span class="flex-shrink-0 bg-slate-500 text-white rounded-lg w-7 h-7 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    </span>
    <strong class="text-slate-900 text-sm">HTTP-метод</strong>
  </div>
  <p class="text-xs leading-snug">Тип запроса, который хотим отправить на сервер: <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code>.</p>
</div>

<!-- 3. Заголовки -->
<div v-click class="bg-cyan-50 border-2 border-cyan-300 rounded-xl p-2">
  <div class="flex items-center gap-2 mb-1">
    <span class="flex-shrink-0 bg-cyan-500 text-white rounded-lg w-7 h-7 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    </span>
    <strong class="text-cyan-900 text-sm">Заголовки</strong>
  </div>
  <p class="text-xs leading-snug">Набор пар «имя-значение»: кодировка, User-Agent, авторизация и т. д.</p>
</div>

<!-- 4. Тело запроса -->
<div v-click class="bg-amber-50 border-2 border-amber-300 rounded-xl p-2">
  <div class="flex items-center gap-2 mb-1">
    <span class="flex-shrink-0 bg-amber-500 text-white rounded-lg w-7 h-7 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    </span>
    <strong class="text-amber-900 text-sm">Тело запроса</strong>
  </div>
  <p class="text-xs leading-snug">Данные, которые хотим отправить на сервер. Используется только с <code>POST</code>, <code>PUT</code>, <code>PATCH</code> или <code>DELETE</code>.</p>
</div>

</div>

<!-- Пример curl: полноширинный блок под карточками -->
<div v-click class="mt-2 bg-gray-900 rounded-lg p-2.5">
<pre class="text-xs leading-snug text-gray-100 overflow-auto"><code><span class="text-slate-300">curl</span> <span class="text-slate-300 font-semibold">-X POST</span> <span class="text-indigo-300 font-semibold">https://api.example.com/v1/orders?priority=high</span> \
  <span class="text-cyan-300">-H</span> <span class="text-cyan-200">"Content-Type: application/json"</span> \
  <span class="text-cyan-300">-H</span> <span class="text-cyan-200">"Authorization: Bearer eyJhbGciOi..."</span> \
  <span class="text-amber-300 font-semibold">-d</span> <span class="text-amber-200">'{"customer_id":"u-42","items":[{"sku":"ABC-001","qty":2}],"total":99.98}'</span></code></pre>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson7">← Занятие 7</a>
  <a href="/lesson9">Занятие 9 →</a>
</div>

---
hide: false
layout: default
---

# Методы HTTP

<div class="mt-2 overflow-hidden rounded-lg border border-gray-200">
<table class="w-full text-[11px] leading-tight">
  <thead class="bg-gray-100">
    <tr>
      <th class="text-left py-1 px-2 font-semibold">Метод</th>
      <th class="text-left py-1 px-2 font-semibold">Назначение</th>
      <th class="text-center py-1 px-2 font-semibold">Безопасный</th>
      <th class="text-center py-1 px-2 font-semibold">Идемпотентный</th>
      <th class="text-center py-1 px-2 font-semibold">Кэшируемый</th>
      <th class="text-center py-1 px-2 font-semibold">Тело</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-t border-gray-200 bg-white">
      <td class="py-0.5 px-2 font-mono">GET</td>
      <td class="py-0.5 px-2">Получение ресурса</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
    </tr>
    <tr class="border-t border-gray-200 bg-gray-50">
      <td class="py-0.5 px-2 font-mono">HEAD</td>
      <td class="py-0.5 px-2">Только заголовки ответа</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
    </tr>
    <tr class="border-t border-gray-200 bg-white">
      <td class="py-0.5 px-2 font-mono">OPTIONS</td>
      <td class="py-0.5 px-2">Доступные методы / CORS-preflight</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
    </tr>
    <tr class="border-t border-gray-200 bg-gray-50">
      <td class="py-0.5 px-2 font-mono">TRACE</td>
      <td class="py-0.5 px-2">Эхо-петля (диагностика)</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
    </tr>
    <tr class="border-t border-gray-200 bg-white">
      <td class="py-0.5 px-2 font-mono">POST</td>
      <td class="py-0.5 px-2">Создание / обработка данных</td>
      <td class="text-center py-0.5 px-2 text-red-500 font-bold">✗</td>
      <td class="text-center py-0.5 px-2 text-red-500 font-bold">✗</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
    </tr>
    <tr class="border-t border-gray-200 bg-gray-50">
      <td class="py-0.5 px-2 font-mono">PUT</td>
      <td class="py-0.5 px-2">Замена / создание ресурса</td>
      <td class="text-center py-0.5 px-2 text-red-500 font-bold">✗</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
    </tr>
    <tr class="border-t border-gray-200 bg-white">
      <td class="py-0.5 px-2 font-mono">PATCH</td>
      <td class="py-0.5 px-2">Частичное обновление</td>
      <td class="text-center py-0.5 px-2 text-red-500 font-bold">✗</td>
      <td class="text-center py-0.5 px-2 text-red-500 font-bold">✗</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
    </tr>
    <tr class="border-t border-gray-200 bg-gray-50">
      <td class="py-0.5 px-2 font-mono">DELETE</td>
      <td class="py-0.5 px-2">Удаление ресурса</td>
      <td class="text-center py-0.5 px-2 text-red-500 font-bold">✗</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
    </tr>
    <tr class="border-t border-gray-200 bg-white">
      <td class="py-0.5 px-2 font-mono">CONNECT</td>
      <td class="py-0.5 px-2">Туннель (напр. TLS)</td>
      <td class="text-center py-0.5 px-2 text-red-500 font-bold">✗</td>
      <td class="text-center py-0.5 px-2 text-red-500 font-bold">✗</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
      <td class="text-center py-0.5 px-2 text-gray-400">✗</td>
    </tr>
    <!-- QUERY: новый пользовательский метод по RFC 10008 -->
    <tr class="border-t-2 border-rose-300 bg-rose-50">
      <td class="py-0.5 px-2 font-mono font-bold text-rose-900">QUERY</td>
      <td class="py-0.5 px-2 text-rose-900">Безопасный запрос с телом <span class="inline-block text-[9px] bg-rose-200 text-rose-900 px-1 py-px rounded font-semibold align-middle ml-0.5">RFC 10008</span></td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
      <td class="text-center py-0.5 px-2 text-green-600 font-bold">✓</td>
    </tr>
  </tbody>
</table>
</div>

<!-- Легенда: одна горизонтальная строка -->
<div class="mt-1.5 text-[10px] leading-snug text-gray-700 flex flex-wrap gap-x-3 gap-y-0.5 justify-center">
  <span><strong class="text-gray-900">Safe</strong> — не меняет состояние сервера</span>
  <span class="text-gray-300">·</span>
  <span><strong class="text-gray-900">Idempotent</strong> — N одинаковых запросов = один по эффекту</span>
  <span class="text-gray-300">·</span>
  <span><strong class="text-gray-900">Cacheable</strong> — ответ можно сохранить в кэше</span>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson7">← Занятие 7</a>
  <a href="/lesson9">Занятие 9 →</a>
</div>

---
hide: false
layout: default
---

# Коды ответов HTTP

<p class="text-sm leading-snug -mt-3 text-gray-500">Стандартные коды состояния, которые сервер возвращает в ответ на запрос.</p>

<div class="grid grid-cols-3 gap-x-10 mt-4">

<!-- 2xx Success -->
<div>
  <div class="flex items-baseline gap-2 mb-2 pb-1.5 border-b border-gray-200">
    <span class="font-mono text-lg font-semibold text-emerald-600">2xx</span>
    <span class="text-sm font-medium text-gray-500 uppercase tracking-wide">Success</span>
  </div>
  <ul class="space-y-1 text-xs leading-snug">
    <li class="flex gap-2"><span class="font-mono font-semibold text-emerald-600 w-8 shrink-0">200</span><span><span class="font-medium text-gray-900">OK</span> <span class="text-gray-400">—</span> <span class="text-gray-600">успешный ответ</span></span></li>
    <li class="flex gap-2"><span class="font-mono font-semibold text-emerald-600 w-8 shrink-0">201</span><span><span class="font-medium text-gray-900">Created</span> <span class="text-gray-400">—</span> <span class="text-gray-600">ресурс создан</span></span></li>
    <li class="flex gap-2"><span class="font-mono font-semibold text-emerald-600 w-8 shrink-0">204</span><span><span class="font-medium text-gray-900">No Content</span> <span class="text-gray-400">—</span> <span class="text-gray-600">без тела ответа</span></span></li>
  </ul>
</div>

<!-- 4xx Client Error -->
<div>
  <div class="flex items-baseline gap-2 mb-2 pb-1.5 border-b border-gray-200">
    <span class="font-mono text-lg font-semibold text-amber-600">4xx</span>
    <span class="text-sm font-medium text-gray-500 uppercase tracking-wide">Client Error</span>
  </div>
  <ul class="space-y-1 text-xs leading-snug">
    <li class="flex gap-2"><span class="font-mono font-semibold text-amber-600 w-8 shrink-0">400</span><span><span class="font-medium text-gray-900">Bad Request</span> <span class="text-gray-400">—</span> <span class="text-gray-600">неверный формат</span></span></li>
    <li class="flex gap-2"><span class="font-mono font-semibold text-amber-600 w-8 shrink-0">401</span><span><span class="font-medium text-gray-900">Unauthorized</span> <span class="text-gray-400">—</span> <span class="text-gray-600">требуется авторизация</span></span></li>
    <li class="flex gap-2"><span class="font-mono font-semibold text-amber-600 w-8 shrink-0">403</span><span><span class="font-medium text-gray-900">Forbidden</span> <span class="text-gray-400">—</span> <span class="text-gray-600">доступ запрещён</span></span></li>
    <li class="flex gap-2"><span class="font-mono font-semibold text-amber-600 w-8 shrink-0">404</span><span><span class="font-medium text-gray-900">Not Found</span> <span class="text-gray-400">—</span> <span class="text-gray-600">ресурс не найден</span></span></li>
    <li class="flex gap-2"><span class="font-mono font-semibold text-amber-600 w-8 shrink-0">409</span><span><span class="font-medium text-gray-900">Conflict</span> <span class="text-gray-400">—</span> <span class="text-gray-600">конфликт состояния</span></span></li>
    <li class="flex gap-2"><span class="font-mono font-semibold text-amber-600 w-8 shrink-0">422</span><span><span class="font-medium text-gray-900">Unprocessable</span> <span class="text-gray-400">—</span> <span class="text-gray-600">ошибка валидации</span></span></li>
    <li class="flex gap-2"><span class="font-mono font-semibold text-amber-600 w-8 shrink-0">429</span><span><span class="font-medium text-gray-900">Too Many Req.</span> <span class="text-gray-400">—</span> <span class="text-gray-600">превышен rate limit</span></span></li>
  </ul>
</div>

<!-- 5xx Server Error -->
<div>
  <div class="flex items-baseline gap-2 mb-2 pb-1.5 border-b border-gray-200">
    <span class="font-mono text-lg font-semibold text-red-600">5xx</span>
    <span class="text-sm font-medium text-gray-500 uppercase tracking-wide">Server Error</span>
  </div>
  <ul class="space-y-1 text-xs leading-snug">
    <li class="flex gap-2"><span class="font-mono font-semibold text-red-600 w-8 shrink-0">500</span><span><span class="font-medium text-gray-900">Internal Error</span> <span class="text-gray-400">—</span> <span class="text-gray-600">необработанная</span></span></li>
    <li class="flex gap-2"><span class="font-mono font-semibold text-red-600 w-8 shrink-0">502</span><span><span class="font-medium text-gray-900">Bad Gateway</span> <span class="text-gray-400">—</span> <span class="text-gray-600">ошибка шлюза</span></span></li>
    <li class="flex gap-2"><span class="font-mono font-semibold text-red-600 w-8 shrink-0">503</span><span><span class="font-medium text-gray-900">Unavailable</span> <span class="text-gray-400">—</span> <span class="text-gray-600">сервис недоступен</span></span></li>
    <li class="flex gap-2"><span class="font-mono font-semibold text-red-600 w-8 shrink-0">504</span><span><span class="font-medium text-gray-900">Gateway Timeout</span> <span class="text-gray-400">—</span> <span class="text-gray-600">таймаут шлюза</span></span></li>
  </ul>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson7">← Занятие 7</a>
  <a href="/lesson9">Занятие 9 →</a>
</div>

---
hide: false
layout: default
---

# OpenAPI

<p class="text-sm leading-snug -mt-3 text-gray-500">Стандарт описания REST API в машиночитаемом формате (YAML или JSON). Текущая версия — 3.1; ранее известен как Swagger.</p>

<div class="grid grid-cols-5 gap-5 mt-3">

<!-- ЛЕВАЯ КОЛОНКА: особенности + инструменты -->
<div class="col-span-2 space-y-3 text-xs">

  <div>
    <h3 class="text-sm font-semibold text-gray-900 mb-1 pb-0.5 border-b border-gray-200">Технические особенности</h3>
    <ul class="space-y-0.5 text-gray-700 leading-snug">
      <li><strong class="text-gray-900">paths</strong> — эндпоинты, параметры, ответы</li>
      <li><strong class="text-gray-900">components/schemas</strong> — модели данных (JSON Schema)</li>
      <li><strong class="text-gray-900">securitySchemes</strong> — API-Key, OAuth2, JWT, Basic…</li>
      <li><strong class="text-gray-900">$ref</strong> — переиспользование компонентов</li>
      <li><strong class="text-gray-900">tags</strong> — группировка эндпоинтов</li>
      <li><strong class="text-gray-900">examples</strong> — примеры запросов/ответов</li>
    </ul>
  </div>

  <div>
    <h3 class="text-sm font-semibold text-gray-900 mb-1 pb-0.5 border-b border-gray-200">Инструменты</h3>
    <ul class="space-y-0.5 text-gray-700 leading-snug">
      <li><strong class="text-gray-900">Swagger UI</strong> — интерактивная документация</li>
      <li><strong class="text-gray-900">Redoc</strong> — статичная трёхколоночная дока</li>
      <li><strong class="text-gray-900">Swagger Editor</strong> — редактор с live-preview</li>
      <li><strong class="text-gray-900">OpenAPI Generator</strong> — SDK/стабы на 50+ языков</li>
      <li><strong class="text-gray-900">Spectral</strong> — линтер спецификации</li>
      <li><strong class="text-gray-900">Prism</strong> — mock-сервер по спеке</li>
    </ul>
  </div>

</div>

<!-- ПРАВАЯ КОЛОНКА: визуальный пример спецификации -->
<div class="col-span-3">
  <div class="text-xs text-gray-500 mb-1 flex items-center gap-2">
    <span class="font-mono text-gray-700">petstore.yaml</span>
    <span class="text-gray-300">·</span>
    <span>фрагмент спецификации OpenAPI 3.0</span>
  </div>
  <div class="bg-gray-900 rounded-lg p-2.5 overflow-hidden">

<pre class="text-[9px] leading-[1.3] font-mono text-gray-100 overflow-auto"><code><span class="text-sky-300">openapi</span>: <span class="text-amber-300">3.0.3</span>
<span class="text-sky-300">info</span>: { <span class="text-sky-300">title</span>: <span class="text-emerald-300">"Pet Store API"</span>, <span class="text-sky-300">version</span>: <span class="text-emerald-300">"1.0.0"</span> }
<span class="text-sky-300">servers</span>: [{ <span class="text-sky-300">url</span>: <span class="text-emerald-300">"https://api.example.com/v1"</span> }]

<span class="text-sky-300">paths</span>:
  <span class="text-pink-300 font-semibold">/pets</span>:
    <span class="text-sky-300">get</span>:
      <span class="text-sky-300">summary</span>: <span class="text-emerald-300">"Список питомцев"</span>
      <span class="text-sky-300">tags</span>: [<span class="text-emerald-300">pets</span>]
      <span class="text-sky-300">parameters</span>:
        - { <span class="text-sky-300">name</span>: <span class="text-emerald-300">limit</span>, <span class="text-sky-300">in</span>: <span class="text-emerald-300">query</span>,
            <span class="text-sky-300">schema</span>: { <span class="text-sky-300">type</span>: <span class="text-emerald-300">integer</span>, <span class="text-sky-300">default</span>: <span class="text-amber-300">20</span> } }
      <span class="text-sky-300">responses</span>:
        <span class="text-amber-300">'200'</span>:
          <span class="text-sky-300">description</span>: <span class="text-emerald-300">"Успех"</span>
          <span class="text-sky-300">content</span>:
            <span class="text-sky-300">application/json</span>:
              <span class="text-sky-300">schema</span>: { <span class="text-sky-300">type</span>: <span class="text-emerald-300">array</span>,
                <span class="text-sky-300">items</span>: { <span class="text-sky-300">$ref</span>: <span class="text-emerald-300">"#/components/schemas/Pet"</span> } }

<span class="text-sky-300">components</span>:
  <span class="text-sky-300">schemas</span>:
    <span class="text-pink-300 font-semibold">Pet</span>:
      <span class="text-sky-300">type</span>: <span class="text-emerald-300">object</span>
      <span class="text-sky-300">required</span>: [<span class="text-emerald-300">id</span>, <span class="text-emerald-300">name</span>]
      <span class="text-sky-300">properties</span>:
        <span class="text-pink-300">id</span>:   { <span class="text-sky-300">type</span>: <span class="text-emerald-300">integer</span>, <span class="text-sky-300">format</span>: <span class="text-emerald-300">int64</span> }
        <span class="text-pink-300">name</span>: { <span class="text-sky-300">type</span>: <span class="text-emerald-300">string</span> }
        <span class="text-pink-300">tag</span>:  { <span class="text-sky-300">type</span>: <span class="text-emerald-300">string</span>, <span class="text-sky-300">enum</span>: [<span class="text-emerald-300">dog</span>, <span class="text-emerald-300">cat</span>, <span class="text-emerald-300">bird</span>] }
  <span class="text-sky-300">securitySchemes</span>:
    <span class="text-pink-300 font-semibold">BearerAuth</span>: { <span class="text-sky-300">type</span>: <span class="text-emerald-300">http</span>, <span class="text-sky-300">scheme</span>: <span class="text-emerald-300">bearer</span>, <span class="text-sky-300">bearerFormat</span>: <span class="text-emerald-300">JWT</span> }</code></pre>
  </div>
  <div class="text-[10px] text-gray-400 mt-1 leading-snug">
    <span class="text-sky-300">■</span> ключ · <span class="text-emerald-300">■</span> строка · <span class="text-amber-300">■</span> число · <span class="text-pink-300">■</span> имя ресурса/схемы
  </div>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson5">← Занятие 5</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

---
hide: false
layout: default
---

# Long Polling

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Клиент отправляет запрос, <strong class="text-gray-700">сервер держит соединение</strong> до появления новых данных,
  потом отвечает.
</p>

<div class="mt-2 bg-white border border-slate-200 rounded-xl p-3">
  <svg viewBox="0 0 460 140" class="w-full" text-rendering="geometricPrecision">
    <defs>
      <marker id="arrow-amber" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#d97706"/>
      </marker>
    </defs>
    <rect x="20" y="50" width="90" height="34" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
    <text x="65" y="65" text-anchor="middle" fill="#1e40af" font-size="12" style="font-size:12px" font-weight="600">Клиент</text>
    <text x="65" y="78" text-anchor="middle" fill="#60a5fa" font-size="9" style="font-size:9px">HTTP request</text>
    <rect x="350" y="50" width="90" height="34" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <text x="395" y="65" text-anchor="middle" fill="#92400e" font-size="12" style="font-size:12px" font-weight="600">Сервер</text>
    <text x="395" y="78" text-anchor="middle" fill="#a16208" font-size="9" style="font-size:9px">ждёт данные</text>
    <line x1="110" y1="50" x2="350" y2="50" stroke="#d97706" stroke-width="2" marker-end="url(#arrow-amber)"/>
    <rect x="225" y="38" width="10" height="20" rx="2" fill="#fbbf24"/>
    <text x="230" y="32" text-anchor="middle" fill="#92400e" font-size="9" style="font-size:9px">hold</text>
    <line x1="350" y1="84" x2="110" y2="84" stroke="#d97706" stroke-width="2" marker-end="url(#arrow-amber)"/>
    <path d="M 110 100 Q 230 120 110 100" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4,3" fill="none" marker-end="url(#arrow-amber)"/>
    <text x="65" y="118" text-anchor="middle" fill="#d97706" font-size="9" style="font-size:9px">сразу новый запрос</text>
    <text x="230" y="22" text-anchor="middle" fill="#d97706" font-size="10" style="font-size:10px" font-weight="600">request (hold until data ready)</text>
    <text x="230" y="98" text-anchor="middle" fill="#d97706" font-size="10" style="font-size:10px" font-weight="600">response (with data)</text>
  </svg>
</div>

<div class="mt-3 grid grid-cols-2 gap-3">
  <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
    <div class="text-[11px] font-bold text-emerald-800 mb-1">✓ Плюсы</div>
    <ul class="text-[10.5px] text-emerald-900 space-y-0.5">
      <li>• Работает через обычный HTTP (любой сервер)</li>
      <li>• Совместимо со всеми прокси/CDN</li>
      <li>• Push-подобное поведение без push-протокола</li>
      <li>• Нативная поддержка в браузерах</li>
    </ul>
  </div>
  <div class="bg-rose-50 border border-rose-200 rounded-lg p-2.5">
    <div class="text-[11px] font-bold text-rose-800 mb-1">✗ Минусы</div>
    <ul class="text-[10.5px] text-rose-900 space-y-0.5">
      <li>• Каждый цикл — новый TCP/HTTP (overhead)</li>
      <li>• Держать соединение открытым — ресурсы сервера</li>
      <li>• Сложная серверная логика (отложенные ответы)</li>
      <li>• Таймауты прокси могут убивать соединение</li>
    </ul>
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/SSE">← Server-Sent Events</a>
  <a href="/ShortPolling">Short Polling →</a>
</div>

---
hide: false
layout: default
---

# Short Polling

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Клиент <strong class="text-gray-700">периодически шлёт запросы</strong> через фиксированные интервалы
  (например, раз в 5 секунд).
</p>

<div class="mt-2 bg-white border border-slate-200 rounded-xl p-3">
  <svg viewBox="0 0 460 140" class="w-full" text-rendering="geometricPrecision">
    <defs>
      <marker id="arrow-violet" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#7c3aed"/>
      </marker>
    </defs>
    <rect x="20" y="50" width="90" height="34" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
    <text x="65" y="65" text-anchor="middle" fill="#1e40af" font-size="3" font-weight="600">Клиент</text>
    <text x="65" y="78" text-anchor="middle" fill="#60a5fa" font-size="3">setInterval</text>
    <rect x="350" y="50" width="90" height="34" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="395" y="65" text-anchor="middle" fill="#5b21b6" font-size="3" font-weight="600">Сервер</text>
    <text x="395" y="78" text-anchor="middle" fill="#a78bfa" font-size="3">HTTP response</text>
    <line x1="110" y1="50" x2="350" y2="50" stroke="#7c3aed" stroke-width="2" marker-end="url(#arrow-violet)"/>
    <text x="230" y="44" text-anchor="middle" fill="#7c3aed" font-size="3">GET /data</text>
    <line x1="350" y1="84" x2="110" y2="84" stroke="#7c3aed" stroke-width="2" marker-end="url(#arrow-violet)"/>
    <text x="230" y="100" text-anchor="middle" fill="#7c3aed" font-size="3">200 OK (с данными или пусто)</text>
    <text x="230" y="124" text-anchor="middle" fill="#64748b" font-size="3" font-style="italic">цикл каждые N секунд (например, 5с)</text>
    <line x1="120" y1="112" x2="340" y2="112" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,3"/>
    <text x="60" y="113" text-anchor="middle" fill="#64748b" font-size="3">t</text>
    <text x="400" y="113" text-anchor="middle" fill="#64748b" font-size="3">t+N</text>
  </svg>
</div>

<div class="mt-3 grid grid-cols-2 gap-3">
  <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
    <div class="text-[11px] font-bold text-emerald-800 mb-1">✓ Плюсы</div>
    <ul class="text-[10.5px] text-emerald-900 space-y-0.5">
      <li>• Простейшая реализация — обычный HTTP-запрос</li>
      <li>• Работает на любом сервере, в любой инфраструктуре</li>
      <li>• Легко отлаживать (привычные HTTP-инструменты)</li>
      <li>• Совместимо с HTTP-кешами/CDN</li>
    </ul>
  </div>
  <div class="bg-rose-50 border border-rose-200 rounded-lg p-2.5">
    <div class="text-[11px] font-bold text-rose-800 mb-1">✗ Минусы</div>
    <ul class="text-[10.5px] text-rose-900 space-y-0.5">
      <li>• Задержка = интервал опроса (до N секунд)</li>
      <li>• Пустые ответы жгут трафик и CPU</li>
      <li>• Не реал-тайм (никогда не "свежее" интервала)</li>
      <li>• Сложно масштабировать при малом интервале</li>
    </ul>
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/LongPolling">← Long Polling</a>
  <a href="/lesson6">Занятие 6 →</a>
</div>

---
hide: false
layout: default
---

# Server-Sent Events (SSE)

<p class="text-sm leading-snug -mt-3 text-gray-500">
  <strong class="text-gray-700">Однонаправленная</strong> push-нотификация от сервера к клиенту. Простой протокол на базе HTTP/1.1 chunked transfer.
</p>

<div class="mt-2 bg-white border border-slate-200 rounded-xl p-3">
  <svg viewBox="0 0 460 140" class="w-full" text-rendering="geometricPrecision">
    <defs>
      <marker id="arrow-rose" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#e11d48"/>
      </marker>
    </defs>
    <rect x="20" y="50" width="90" height="34" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
    <text x="65" y="65" text-anchor="middle" fill="#1e40af" font-size="12" style="font-size:12px" font-weight="600">Клиент</text>
    <text x="65" y="78" text-anchor="middle" fill="#60a5fa" font-size="9" style="font-size:9px">EventSource</text>
    <rect x="350" y="50" width="90" height="34" rx="6" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.5"/>
    <text x="395" y="65" text-anchor="middle" fill="#9f1239" font-size="12" style="font-size:12px" font-weight="600">Сервер</text>
    <text x="395" y="78" text-anchor="middle" fill="#fb7185" font-size="9" style="font-size:9px">text/event-stream</text>
    <line x1="110" y1="67" x2="350" y2="67" stroke="#e11d48" stroke-width="2" marker-end="url(#arrow-rose)"/>
    <text x="230" y="59" text-anchor="middle" fill="#e11d48" font-size="10" style="font-size:10px" font-weight="600">server → client (event stream)</text>
    <text x="230" y="93" text-anchor="middle" fill="#64748b" font-size="2" font-style="italic">клиент только читает; данные от сервера</text>
    <text x="230" y="115" text-anchor="middle" fill="#64748b" font-size="6" style="font-size:9px">переподключение встроено (auto-reconnect)</text>
    <rect x="110" y="40" width="240" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,3"/>
    <text x="230" y="32" text-anchor="middle" fill="#64748b" font-size="10" style="font-size:10px">persistent HTTP connection (chunked)</text>
  </svg>
</div>

<div class="mt-3 grid grid-cols-2 gap-3">
  <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
    <div class="text-[11px] font-bold text-emerald-800 mb-1">✓ Плюсы</div>
    <ul class="text-[10.5px] text-emerald-900 space-y-0.5">
      <li>• Обычный HTTP — не нужен отдельный протокол</li>
      <li>• Авто-reconnect из коробки (браузер сам)</li>
      <li>• Прост на сервере (один text/event-stream endpoint)</li>
      <li>• Проходит через большинство прокси/CDN</li>
    </ul>
  </div>
  <div class="bg-rose-50 border border-rose-200 rounded-lg p-2.5">
    <div class="text-[11px] font-bold text-rose-800 mb-1">✗ Минусы</div>
    <ul class="text-[10.5px] text-rose-900 space-y-0.5">
      <li>• Только server → client (нет обратного канала)</li>
      <li>• Ограничение: 6 одновременных HTTP/1.1 соединений на браузер</li>
      <li>• Только text (нет бинарных данных)</li>
      <li>• Поддержка браузерами хорошая, но не везде</li>
    </ul>
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/WebSocket">← WebSocket</a>
  <a href="/LongPolling">Long Polling →</a>
</div>

---
hide: false
layout: default
---

# WebSocket

<p class="text-sm leading-snug -mt-3 text-gray-500">
  <strong class="text-gray-700">Двунаправленный</strong> канал поверх TCP: один handshake — потом
  <strong class="text-gray-700">полнодуплексный обмен</strong> в реальном времени без HTTP-обёртки.
</p>

<div class="mt-2 bg-white border border-slate-200 rounded-xl p-3">
  <svg viewBox="0 0 460 140" class="w-full" text-rendering="geometricPrecision">
    <defs>
      <marker id="arrow-cyan" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#0891b2"/>
      </marker>
    </defs>
    <rect x="20" y="50" width="90" height="34" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
    <text x="65" y="65" text-anchor="middle" fill="#1e40af" font-size="12" style="font-size:12px" font-weight="600">Клиент</text>
    <text x="65" y="78" text-anchor="middle" fill="#60a5fa" font-size="9" style="font-size:9px">Browser/JS</text>
    <rect x="350" y="50" width="90" height="34" rx="6" fill="#fae8ff" stroke="#9333ea" stroke-width="1.5"/>
    <text x="395" y="65" text-anchor="middle" fill="#6b21a8" font-size="12" style="font-size:12px" font-weight="600">Сервер</text>
    <text x="395" y="78" text-anchor="middle" fill="#a855f7" font-size="9" style="font-size:9px">ws / wss</text>
    <line x1="110" y1="60" x2="350" y2="60" stroke="#0891b2" stroke-width="2" marker-end="url(#arrow-cyan)"/>
    <line x1="350" y1="80" x2="110" y2="80" stroke="#0891b2" stroke-width="2" marker-end="url(#arrow-cyan)"/>
    <text x="230" y="52" text-anchor="middle" fill="#0891b2" font-size="10" style="font-size:10px" font-weight="600">client → server (message)</text>
    <text x="230" y="93" text-anchor="middle" fill="#0891b2" font-size="10" style="font-size:10px" font-weight="600">server → client (push)</text>
    <text x="230" y="115" text-anchor="middle" fill="#64748b" font-size="3" font-style="italic">одно TCP-соединение, full-duplex</text>
    <rect x="110" y="40" width="240" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,3"/>
    <text x="230" y="32" text-anchor="middle" fill="#64748b" font-size="10" style="font-size:10px">persistent WebSocket connection</text>
  </svg>
</div>

<div class="mt-3 grid grid-cols-2 gap-3">
  <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
    <div class="text-[11px] font-bold text-emerald-800 mb-1">✓ Плюсы</div>
    <ul class="text-[10.5px] text-emerald-900 space-y-0.5">
      <li>• Полный дуплекс, реал-тайм (chat, игры, коллаборация)</li>
      <li>• Один handshake → нет overhead HTTP-заголовков</li>
      <li>• Широкая поддержка в браузерах и серверах</li>
      <li>• Бинарные и текстовые фреймы</li>
    </ul>
  </div>
  <div class="bg-rose-50 border border-rose-200 rounded-lg p-2.5">
    <div class="text-[11px] font-bold text-rose-800 mb-1">✗ Минусы</div>
    <ul class="text-[10.5px] text-rose-900 space-y-0.5">
      <li>• Нужен WS-сервер (не каждый HTTP-сервер умеет)</li>
      <li>• Сложнее через прокси/load balancer</li>
      <li>• Постоянное соединение жрёт ресурсы при простое</li>
      <li>• Нет автоматического fallback на HTTP</li>
    </ul>
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/Сервисы">← Сервисы</a>
  <a href="/SSE">SSE →</a>
</div>

---
hide: false
layout: two-cols
layoutClass: gap-8
---

# Обмен сообщениями (Messaging)

## Преимущества

- ✅ Асинхронный способ интеграции
- ✅ Масштабируемость системы

## Недостатки

- ❌ Критически важны тактики надежности в распределенной системе (отказоустойчивость)
- ❌ При неправильной архитектуре большой latency системы
- ❌ Проблемы с согласованностью данных

::right::

<div class="flex items-center justify-center h-full">
  <img src="/messaging_06.webp" alt="Обмен сообщениями (Messaging)" class="rounded shadow-lg max-h-[65vh]" />
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson5">← Занятие 5</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

---
hide: false
layout: two-cols
layoutClass: gap-8
---

# Сообщения

Для передачи информации между двумя приложениями используйте формат сообщений

```python
producer = KafkaProducer(
    bootstrap_servers='localhost:9092',
    value_serializer=lambda v: json.dumps(v).encode(),
    key_serializer=lambda k: k.encode() if k else None,
)

producer.send(
    'orders',
    key='order-12345',
    value={'order_id': '12345', 'customer': 'Alice', 'total': 229.48},
    headers=[
        ('content-type', b'application/json'),
        ('source', b'orders-service'),
        ('trace-id', b'abc-def-123'),
    ],
)

producer.flush()
```

::right::

## Структура сообщения

### 🔑 Key

```
order-12345
```


### 📋 Headers

```
content-type: application/json
source: orders-service
trace-id: abc-def-123
```

### 📦 Payload (Value)

```json
{
  "order_id": "12345",
  "customer": "Alice",
  "items": [
    {"sku": "ABC-001", "qty": 2, "price": 49.99},
    {"sku": "XYZ-099", "qty": 1, "price": 129.50}
  ],
  "total": 229.48
}
```

<div class="abs-b m-2 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson5">← Занятие 5</a>
  <a href="/lesson7">Занятие 7 →</a>
</div>

<style>
h3 {
  font-size: 0.95rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}
h2 {
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
em {
  font-size: 0.75rem;
  opacity: 0.7;
  display: block;
  margin-bottom: 0.5rem;
}
</style>


---
hide: false
layout: default
---

# Системы сообщений

<p class="text-sm leading-snug -mt-3 text-gray-500">
  <strong class="text-gray-700">Система сообщений</strong> — инфраструктура асинхронного обмена данными: состоит из
  <strong class="text-gray-700">брокера</strong> (роутинг + доставка) и <strong class="text-gray-700">системы хранения</strong> (персистентность).
</p>

<!-- 2 колонки: схема слева, типы решений справа -->
<div class="grid grid-cols-2 gap-5 mt-3">

  <!-- ЛЕВАЯ КОЛОНКА: схема -->
  <div>
    <div class="text-[10px] text-gray-500 mb-1 flex items-center gap-2">
      <span class="font-mono text-gray-700">Типовая архитектура</span>
      <span class="text-gray-300">·</span>
      <span>producer → broker ⇄ storage → consumer</span>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-3">
      <!-- Главный поток: продюсер → брокер → консьюмер -->
      <div class="flex items-center justify-around gap-1">
        <div class="bg-blue-100 border-2 border-blue-400 rounded-lg px-3 py-2 text-center min-w-[80px]">
          <div class="text-[11px] font-semibold text-blue-900">Продюсер</div>
          <div class="text-[9px] text-blue-700">producer</div>
        </div>
        <div class="text-gray-400 text-[11px]">──→</div>
        <div class="bg-purple-100 border-2 border-purple-400 rounded-lg px-2 py-2 text-center min-w-[90px]">
          <div class="text-[11px] font-semibold text-purple-900">Брокер</div>
          <div class="text-[9px] text-purple-700">broker</div>
          <div class="mt-1 text-[8px] font-mono bg-white border border-purple-200 rounded px-1 text-purple-700">route + deliver</div>
        </div>
        <div class="text-gray-400 text-[11px]">──→</div>
        <div class="bg-emerald-100 border-2 border-emerald-400 rounded-lg px-3 py-2 text-center min-w-[80px]">
          <div class="text-[11px] font-semibold text-emerald-900">Консьюмер</div>
          <div class="text-[9px] text-emerald-700">consumer</div>
        </div>
      </div>
      <!-- Storage подключен к брокеру -->
      <div class="flex items-center justify-center gap-2 mt-3">
        <div class="text-gray-400 text-[11px]">↕</div>
        <div class="bg-amber-100 border-2 border-amber-400 rounded-full px-5 py-1.5 text-center">
          <div class="text-[11px] font-semibold text-amber-900">Storage</div>
          <div class="text-[8px] text-amber-700">система хранения</div>
        </div>
        <div class="text-[9px] text-gray-500 italic ml-1">persist / fetch</div>
      </div>
    </div>
    <div class="text-[10px] text-gray-500 mt-1 italic">
      <strong class="text-gray-700">Брокер</strong> принимает/роутит/доставляет;
      <strong class="text-gray-700">система хранения</strong> персистирует сообщения.
    </div>
  </div>

  <!-- ПРАВАЯ КОЛОНКА: 2 типа решений -->
  <div>
    <div class="text-[10px] text-gray-500 mb-1 flex items-center gap-2">
      <span class="font-mono text-gray-700">Два типа решений</span>
      <span class="text-gray-300">·</span>
      <span>как хранить сообщения</span>
    </div>
    <div class="space-y-2">
      <!-- 1. Очередь сообщений -->
      <div class="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-2.5">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-lg">📬</span>
          <strong class="text-indigo-900 text-sm">Очередь сообщений</strong>
          <span class="text-[10px] text-indigo-700 font-mono">Message Queue</span>
        </div>
        <p class="text-[11px] text-gray-700 leading-snug mb-1.5">
          Сообщения хранятся в очереди, доставляются <strong>один раз</strong> и удаляются.
        </p>
        <div class="text-[10px] text-gray-600 space-y-0.5">
          <div><span class="text-emerald-600">✓</span> Point-to-point, гарантированная доставка</div>
          <div><span class="text-rose-600">✗</span> Нет реплея, нет истории после прочтения</div>
        </div>
        <div class="mt-1.5 flex flex-wrap gap-1">
          <span class="bg-white border border-indigo-200 text-indigo-800 px-1.5 py-0.5 rounded text-[10px] font-mono">RabbitMQ</span>
          <span class="bg-white border border-indigo-200 text-indigo-800 px-1.5 py-0.5 rounded text-[10px] font-mono">ActiveMQ</span>
          <span class="bg-white border border-indigo-200 text-indigo-800 px-1.5 py-0.5 rounded text-[10px] font-mono">AWS SQS</span>
        </div>
      </div>
      <!-- 2. Журнал событий -->
      <div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-2.5">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-lg">📜</span>
          <strong class="text-amber-900 text-sm">Журнал событий</strong>
          <span class="text-[10px] text-amber-700 font-mono">Event Log / Stream</span>
        </div>
        <p class="text-[11px] text-gray-700 leading-snug mb-1.5">
          Сообщения хранятся в append-only логе; консьюмер читает с <strong>любой позиции</strong>.
        </p>
        <div class="text-[10px] text-gray-600 space-y-0.5">
          <div><span class="text-emerald-600">✓</span> Реплей, много консьюмеров, история</div>
          <div><span class="text-rose-600">✗</span> Больше места на диске, сложнее эксплуатация</div>
        </div>
        <div class="mt-1.5 flex flex-wrap gap-1">
          <span class="bg-white border border-amber-200 text-amber-800 px-1.5 py-0.5 rounded text-[10px] font-mono">Kafka</span>
          <span class="bg-white border border-amber-200 text-amber-800 px-1.5 py-0.5 rounded text-[10px] font-mono">Pulsar</span>
          <span class="bg-white border border-amber-200 text-amber-800 px-1.5 py-0.5 rounded text-[10px] font-mono">NATS JetStream</span>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- Источник -->
<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-2">
  Основано на: Хопп Г., Вульф Б. <em>Шаблоны интеграции корпоративных приложений</em>. — Глава 3 «Каналы передачи сообщений».
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson7">← Занятие 7</a>
  <a href="/lesson9">Занятие 9 →</a>
</div>