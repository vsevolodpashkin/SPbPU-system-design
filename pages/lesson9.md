---
hide: false
layout: center
---

# Архитектура ПО

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 2. Архитектура ПО. Тактики и решения. Фиксация решения по архитектуре</div>
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

# Тактика архитектуры

<!-- 1. Определение -->
<div v-click="1" class="mt-3 rounded-xl border-2 border-indigo-300 bg-gradient-to-r from-indigo-50 via-sky-50 to-cyan-50 px-4 py-4">
  <div class="text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-400">Определение</div>
  <div class="mt-1.5 text-[20px] leading-[28px] text-gray-800">
    <strong class="text-indigo-900">Тактика</strong> — это проектное решение, которое влияет на
    <strong class="text-indigo-900">управление реакцией по атрибуту качества</strong>.
  </div>
  <div class="mt-1.5 text-[11px] italic leading-[15px] text-gray-500">
    “A tactic is a design decision that influences the control of a quality attribute response.”
    — Bass, Clements, Kazman, § 5.1 «Achieving Qualities», с. 100
  </div>
</div>

<!-- 2. Схема: стимул -> тактика управления реакцией -> реакция -->
<div v-click="2" class="mt-5">
<div class="flex items-stretch gap-2">
  <div class="flex-1 rounded-xl border-2 border-gray-300 bg-white p-3">
    <div class="text-[13px] font-semibold text-gray-800">Стимул</div>
    <div class="mt-0.5 text-[10.5px] leading-[14px] text-gray-600">событие или условие, на которое система должна отреагировать</div>
  </div>
  <svg viewBox="0 0 60 24" class="w-10 h-6 shrink-0 self-center overflow-visible">
    <defs>
      <marker id="arrA1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 Z" fill="#4f46e5"/>
      </marker>
    </defs>
    <line x1="2" y1="12" x2="48" y2="12" stroke="#4f46e5" stroke-width="3" marker-end="url(#arrA1)" class="saip-draw" style="--dash:50"/>
    <path d="M48,4.5 L56,12 L48,19.5 Z" fill="#4f46e5" class="saip-head"/>
  </svg>
  <div class="flex-1 rounded-xl border-2 border-indigo-400 bg-indigo-500 p-3 text-white">
    <div class="text-[13px] font-semibold leading-[16px]">Тактика управления реакцией</div>
    <div class="mt-0.5 text-[10.5px] leading-[14px] text-indigo-100">проектное решение, влияющее на меру отклика</div>
  </div>
  <svg viewBox="0 0 60 24" class="w-10 h-6 shrink-0 self-center overflow-visible">
    <defs>
      <marker id="arrA2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 Z" fill="#4f46e5"/>
      </marker>
    </defs>
    <line x1="2" y1="12" x2="48" y2="12" stroke="#4f46e5" stroke-width="3" marker-end="url(#arrA2)" class="saip-draw" style="--dash:50"/>
    <path d="M48,4.5 L56,12 L48,19.5 Z" fill="#4f46e5" class="saip-head"/>
  </svg>
  <div class="flex-1 rounded-xl border-2 border-gray-300 bg-white p-3">
    <div class="text-[13px] font-semibold text-gray-800">Реакция</div>
    <div class="mt-0.5 text-[10.5px] leading-[14px] text-gray-600">измеримый результат — <strong class="text-gray-800">мера отклика</strong> (латентность, простой, …)</div>
  </div>
</div>
  <div class="mt-2 text-[10.5px] leading-[14px] text-gray-500">
    <span class="font-semibold text-gray-600">Сценарий качества — шесть частей:</span>
    источник стимула · стимул · среда · артефакт · реакция · мера реакции (§ 4.3, с. 75)
  </div>
</div>

<!-- 3. Пример -->
<div v-click="3" class="mt-4 rounded-lg border-l-4 border-amber-400 bg-amber-50 px-3 py-2 text-[12px] leading-[16px] text-gray-700">
  <span class="font-semibold text-amber-700">Пример.</span>
  Стимул — всплеск нагрузки; тактика — ограничить размер очередей; реакция — запрос обслужен; мера отклика — 99 % запросов обработано за 100 мс.
</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-3">
  Источник:&nbsp;
  Bass, L. <em>Software Architecture in Practice</em> / L. Bass, P. Clements, R. Kazman. — Boston : Addison-Wesley, 2003. — 528 p. — ISBN 0-321-15495-9. — § 4.3, с. 75; § 5.1, с. 100 (Fig. 5.1). — Text : unmediated. — <a href="https://lccn.loc.gov/2003045300" class="underline" target="_blank" rel="noopener">lccn.loc.gov</a> · <a href="https://books.google.com/books?id=gaZQAAAAMAAJ" class="underline" target="_blank" rel="noopener">books.google.com</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/101">← Архитектура ПО</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

<style>
.saip-draw {
  stroke-dasharray: var(--dash);
  stroke-dashoffset: var(--dash);
}
.slidev-vclick-current .saip-draw,
.slidev-vclick-prior .saip-draw {
  animation: saip-draw .5s ease-out forwards;
}
@keyframes saip-draw {
  to { stroke-dashoffset: 0; }
}
.saip-head { opacity: 0; }
.slidev-vclick-current .saip-head,
.slidev-vclick-prior .saip-head {
  animation: saip-pop .25s .4s ease-out forwards;
}
@keyframes saip-pop {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

---
hide: false
layout: default
---

# Тактики и архитектурная стратегия

<p class="text-[13px] leading-snug -mt-3 text-gray-500">
  <strong class="text-gray-700">Коллекция тактик — архитектурная стратегия</strong>. Тактика — «foundational building block of design», из которого складываются паттерны и стратегии.
</p>

<!-- Геометрическая интерпретация: сумма тактик = стратегия -->
<div class="mt-1">
  <svg viewBox="0 0 900 230" class="w-full">
    <defs>
      <marker id="arrB1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 Z" fill="#f43f5e"/>
      </marker>
      <marker id="arrB2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 Z" fill="#f59e0b"/>
      </marker>
      <marker id="arrB3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 Z" fill="#10b981"/>
      </marker>
      <marker id="arrBS" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="#4f46e5"/>
      </marker>
    </defs>
    <!-- Цель: требуемая мера отклика -->
    <g v-click="1">
      <text x="120" y="52" font-size="11" fill="#64748b" style="font-size:11px">
        <tspan x="120" dy="0">Тактики складываются: сумма векторов —</tspan>
        <tspan x="120" dy="15">это стратегия, и только она даёт</tspan>
        <tspan x="120" dy="15">требуемую меру отклика.</tspan>
      </text>
      <line x1="808" y1="16" x2="808" y2="212" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>
      <text x="800" y="11" text-anchor="end" fill="#475569" style="font-size:12px;font-weight:600">требуемая мера отклика</text>
      <circle cx="95" cy="165" r="5" fill="#334155"/>
      <text x="95" y="152" text-anchor="middle" fill="#334155" style="font-size:12px;font-weight:600">стимул</text>
    </g>
    <!-- Тактика 1 -->
    <g v-click="2">
      <line x1="95" y1="165" x2="340" y2="210" stroke="#f43f5e" stroke-width="3.5" marker-end="url(#arrB1)" class="saip-draw" style="--dash:251"/>
      <circle cx="217" cy="187" r="11" fill="#f43f5e"/>
      <text x="217" y="191" text-anchor="middle" fill="#fff" style="font-size:11px;font-weight:700">t₁</text>
    </g>
    <!-- Тактика 2 -->
    <g v-click="3">
      <line x1="340" y1="210" x2="555" y2="150" stroke="#f59e0b" stroke-width="3.5" marker-end="url(#arrB2)" class="saip-draw" style="--dash:224"/>
      <circle cx="447" cy="180" r="11" fill="#f59e0b"/>
      <text x="447" y="184" text-anchor="middle" fill="#fff" style="font-size:11px;font-weight:700">t₂</text>
    </g>
    <!-- Тактика 3 -->
    <g v-click="4">
      <line x1="555" y1="150" x2="800" y2="57" stroke="#10b981" stroke-width="3.5" marker-end="url(#arrB3)" class="saip-draw" style="--dash:268"/>
      <circle cx="677" cy="103" r="11" fill="#10b981"/>
      <text x="677" y="107" text-anchor="middle" fill="#fff" style="font-size:11px;font-weight:700">t₃</text>
    </g>
    <!-- Результирующий вектор = стратегия -->
    <g v-click="5">
      <line x1="95" y1="165" x2="802" y2="55" stroke="#4f46e5" stroke-width="5" marker-end="url(#arrBS)" class="saip-draw" style="--dash:719"/>
      <text x="330" y="120" fill="#4f46e5" style="font-size:13px;font-weight:700;paint-order:stroke;stroke:#ffffff;stroke-width:4px;stroke-linejoin:round">Σ тактик = архитектурная стратегия</text>
    </g>
  </svg>
</div>

<!-- Легенда: пример — три тактики доступности -->
<div class="grid grid-cols-3 gap-2 mt-1 text-[11px] leading-tight">
  <div class="flex items-start gap-1.5">
    <span class="mt-1 w-2.5 h-2.5 rounded-full shrink-0 bg-rose-500"></span>
    <span><strong class="text-rose-700">t₁</strong> Обнаружить отказ <span class="text-gray-500">(fault detection)</span></span>
  </div>
  <div class="flex items-start gap-1.5">
    <span class="mt-1 w-2.5 h-2.5 rounded-full shrink-0 bg-amber-500"></span>
    <span><strong class="text-amber-700">t₂</strong> Ввести избыточность <span class="text-gray-500">(active redundancy)</span></span>
  </div>
  <div class="flex items-start gap-1.5">
    <span class="mt-1 w-2.5 h-2.5 rounded-full shrink-0 bg-emerald-500"></span>
    <span><strong class="text-emerald-700">t₃</strong> Подготовить восстановление <span class="text-gray-500">(checkpoint/rollback)</span></span>
  </div>
</div>

<p class="mt-1.5 text-[10px] italic leading-tight text-gray-500">
  Все три тактики — из § 5.2 «Availability» (с. 101–105): одна стратегия работает на один атрибут качества. Векторная интерпретация — наша: в книге пространственной метафоры нет, тактика описана как «строительный блок».
</p>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-1">
  Источник:&nbsp;
  Bass, L. <em>Software Architecture in Practice</em> / L. Bass, P. Clements, R. Kazman. — Boston : Addison-Wesley, 2003. — 528 p. — ISBN 0-321-15495-9. — § 5.1, с. 100; § 5.2, с. 101–105. — Text : unmediated. — <a href="https://lccn.loc.gov/2003045300" class="underline" target="_blank" rel="noopener">lccn.loc.gov</a> · <a href="https://books.google.com/books?id=gaZQAAAAMAAJ" class="underline" target="_blank" rel="noopener">books.google.com</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/102">← Тактика архитектуры</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

<style>
.saip-draw {
  stroke-dasharray: var(--dash);
  stroke-dashoffset: var(--dash);
}
.slidev-vclick-current .saip-draw,
.slidev-vclick-prior .saip-draw {
  animation: saip-draw .5s ease-out forwards;
}
@keyframes saip-draw {
  to { stroke-dashoffset: 0; }
}
.saip-head { opacity: 0; }
.slidev-vclick-current .saip-head,
.slidev-vclick-prior .saip-head {
  animation: saip-pop .25s .4s ease-out forwards;
}
@keyframes saip-pop {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

---
hide: false
layout: default
---

# Производительность

<p class="text-sm leading-snug -mt-4 text-gray-500">
  <strong class="text-gray-700">Производительность (performance)</strong> — время, за которое система реагирует на событие: латентность — интервал между приходом события и появлением ответа. Она зависит от <strong class="text-gray-700">потребления ресурсов</strong> и <strong class="text-gray-700">временной блокировки</strong>.
</p>

<div class="grid grid-cols-2 gap-3 mt-2">

  <!-- 1. Эксплуатационные — выделенный блок -->
  <div class="bg-blue-50 border-2 border-blue-400 rounded-xl p-2.5 shadow-lg shadow-blue-500/20 ring-1 ring-blue-300">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-blue-200">
      <span class="flex-shrink-0 bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 14l4-4"/>
          <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
          <line x1="12" y1="14" x2="12" y2="10"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-blue-900 text-base block leading-[18px]">Эксплуатационные</strong>
        <span class="text-[10px] text-blue-500 italic block leading-[12px]">operational</span>
      </div>
      <span class="ml-auto text-[9px] font-semibold uppercase tracking-wide text-blue-500 bg-white/70 border border-blue-200 rounded px-1.5 py-0.5">в фокусе</span>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]">
        <span class="relative inline-block">
          <strong class="text-blue-900">Производительность</strong> <span class="text-gray-500 italic">(performance)</span>
          <span class="avail-underline"></span>
          <span v-click="1" class="term-tip">
            <strong class="block text-[11px] text-gray-900 leading-[14px] mb-0.5">Производительность (performance)</strong>
            Время, за которое система реагирует на событие: латентность — интервал между приходом события и появлением ответа.
            <span class="block mt-1 text-[9.5px] text-gray-500 italic leading-[12px]">§ 4.4, с. 82; § 5.4, с. 111</span>
          </span>
        </span>
        <div class="text-[10px] text-gray-500 leading-tight">скорость отклика и пропускная способность</div>
      </div></li>
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Готовность</strong> <span class="text-gray-500 italic">(availability)</span><div class="text-[10px] text-gray-500 leading-tight">доля времени в рабочем состоянии, отказоустойчивость</div></div></li>
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Согласованность</strong> <span class="text-gray-500 italic">(consistency)</span><div class="text-[10px] text-gray-500 leading-tight">непротиворечивость данных между узлами</div></div></li>
    </ul>
  </div>

  <!-- 2. Пользовательский опыт — выключено -->
  <div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-emerald-200">
      <span class="flex-shrink-0 bg-emerald-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-emerald-900 text-base block leading-[18px]">Пользовательский опыт</strong>
        <span class="text-[10px] text-emerald-600 italic block leading-[12px]">user experience</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Удобство использования</strong> <span class="text-gray-500 italic">(usability)</span><div class="text-[10px] text-gray-500 leading-tight">простота и эффективность работы для пользователя</div></div></li>
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Локализация</strong> <span class="text-gray-500 italic">(localization)</span><div class="text-[10px] text-gray-500 leading-tight">адаптация к языку, форматам и культуре</div></div></li>
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Доступность</strong> <span class="text-gray-500 italic">(accessibility)</span><div class="text-[10px] text-gray-500 leading-tight">работа для людей с ограниченными возможностями</div></div></li>
    </ul>
  </div>

  <!-- 3. Предотвращение рисков — выключено -->
  <div class="bg-orange-50 border-2 border-orange-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-orange-200">
      <span class="flex-shrink-0 bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-orange-900 text-base block leading-[18px]">Предотвращение рисков</strong>
        <span class="text-[10px] text-orange-600 italic block leading-[12px]">risk prevention</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Защищённость</strong> <span class="text-gray-500 italic">(security)</span><div class="text-[10px] text-gray-500 leading-tight">защита данных и от несанкционированного доступа</div></div></li>
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Безопасность</strong> <span class="text-gray-500 italic">(safety)</span><div class="text-[10px] text-gray-500 leading-tight">предсказуемое поведение при отказах и сбоях</div></div></li>
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Соответствие нормам</strong> <span class="text-gray-500 italic">(compliance)</span><div class="text-[10px] text-gray-500 leading-tight">соответствие стандартам и требованиям регуляторов</div></div></li>
    </ul>
  </div>

  <!-- 4. Рост и эволюция — выключено -->
  <div class="bg-purple-50 border-2 border-purple-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-purple-200">
      <span class="flex-shrink-0 bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-purple-900 text-base block leading-[18px]">Рост и эволюция</strong>
        <span class="text-[10px] text-purple-600 italic block leading-[12px]">growth &amp; evolution</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Масштабируемость</strong> <span class="text-gray-500 italic">(scalability)</span><div class="text-[10px] text-gray-500 leading-tight">рост нагрузки без потери качества</div></div></li>
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Изменчивость</strong> <span class="text-gray-500 italic">(modifiability)</span><div class="text-[10px] text-gray-500 leading-tight">лёгкость внесения изменений без больших затрат</div></div></li>
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Совместимость</strong> <span class="text-gray-500 italic">(interoperability)</span><div class="text-[10px] text-gray-500 leading-tight">взаимодействие с внешними системами</div></div></li>
    </ul>
  </div>

</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-0.5">
  Источник:&nbsp;
  Bass, L. <em>Software Architecture in Practice</em> / L. Bass, P. Clements, R. Kazman. — Addison-Wesley, 2003. — § 4.4, с. 82; § 5.4, с. 111–116. — <a href="https://lccn.loc.gov/2003045300" class="underline" target="_blank" rel="noopener">lccn.loc.gov</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/103">← Тактики и архитектурная стратегия</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

<style>
.avail-underline {
  position: absolute;
  left: -2px;
  right: -2px;
  bottom: -2px;
  height: 3px;
  border-radius: 2px;
  background-image: linear-gradient(90deg, #3b82f6, #6366f1, #3b82f6);
  background-size: 200% 100%;
  transform: scaleX(0);
  transform-origin: left center;
  animation: avail-draw .9s cubic-bezier(.4, 0, .2, 1) forwards, avail-shine 3.6s .9s linear infinite;
}
@keyframes avail-draw {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes avail-shine {
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
}
.term-tip {
  position: absolute;
  left: calc(100% + 5px);
  top: -10px;
  width: 182px;
  z-index: 30;
  background: #ffffff;
  color: #374151;
  border: 1px solid #cbd5e1;
  border-left: 3px solid #3b82f6;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 10.5px;
  line-height: 14px;
  font-style: normal;
  text-align: left;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .2);
}
.term-tip::before {
  content: "";
  position: absolute;
  left: -6px;
  top: 16px;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-left: 1px solid #cbd5e1;
  border-bottom: 1px solid #cbd5e1;
  transform: rotate(45deg);
}
</style>

---
hide: false
layout: default
---

# Влияние на производительность

<p class="text-[13px] leading-snug -mt-4 text-gray-500">
  Время отклика складывается из двух факторов: <strong class="text-gray-700">потребление ресурсов</strong> и <strong class="text-gray-700">заблокированное время</strong>
</p>

<div class="grid grid-cols-2 gap-3 mt-1">

  <!-- ЛЕВАЯ ЧАСТЬ: потребление ресурсов -->
  <div v-click="1" class="bg-sky-50 border-2 border-sky-300 rounded-xl p-2.5 flex flex-col">
    <div class="flex items-center gap-2 mb-2 pb-1.5 border-b border-sky-200">
      <span class="flex-shrink-0 bg-sky-500 text-white rounded-lg w-7 h-7 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-sky-900 text-[14px] block leading-[17px]">Потребление ресурсов</strong>
        <span class="text-[10px] text-sky-600 italic block leading-[12px]">resource consumption</span>
      </div>
    </div>
    <ul class="space-y-1 text-[11.5px] leading-[15px] text-gray-800">
      <li class="flex items-start gap-2">
        <span class="flex-shrink-0 bg-sky-100 text-sky-700 rounded p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <rect x="9" y="9" width="6" height="6"/>
            <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
          </svg>
        </span>
        <span><strong class="text-sky-900">Такты центрального вычислительного устройства (CPU)</strong>
          <span class="block text-[9.5px] text-sky-700 italic leading-[12px]">bound execution times · reduce computational overhead</span></span>
      </li>
      <li class="flex items-start gap-2">
        <span class="flex-shrink-0 bg-sky-100 text-sky-700 rounded p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </span>
        <span><strong class="text-sky-900">Место в оперативной памяти (RAM)</strong>
          <span class="block text-[9.5px] text-sky-700 italic leading-[12px]">bound queue sizes · increase available resources</span></span>
      </li>
      <li class="flex items-start gap-2">
        <span class="flex-shrink-0 bg-sky-100 text-sky-700 rounded p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="22" y1="12" x2="2" y2="12"/>
            <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/>
            <line x1="6" y1="16" x2="6.01" y2="16"/>
          </svg>
        </span>
        <span><strong class="text-sky-900">Место в постоянных хранилищах</strong>
          <span class="block text-[9.5px] text-sky-700 italic leading-[12px]">manage event rate · control frequency of sampling</span></span>
      </li>
      <li class="flex items-start gap-2">
        <span class="flex-shrink-0 bg-sky-100 text-sky-700 rounded p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="8" rx="2"/>
            <rect x="2" y="14" width="20" height="8" rx="2"/>
            <line x1="6" y1="6" x2="6.01" y2="6"/>
            <line x1="6" y1="18" x2="6.01" y2="18"/>
          </svg>
        </span>
        <span><strong class="text-sky-900">Пропускная способность сетевых каналов</strong>
          <span class="block text-[9.5px] text-sky-700 italic leading-[12px]">introduce concurrency · balance resource allocation</span></span>
      </li>
    </ul>
    <p class="mt-auto pt-2 text-[10.5px] leading-[14px] text-gray-600">
      Каждая фаза обработки события (сеть → буфер → преобразование → вычисление → буфер → сеть) вносит свой вклад в задержку. Названия тактик — по § 5.4, распределение по ресурсам показано для иллюстрации.
    </p>
  </div>

  <!-- ПРАВАЯ ЧАСТЬ: временная блокировка -->
  <div v-click="2" class="bg-rose-50 border-2 border-rose-300 rounded-xl p-2.5 flex flex-col">
    <div class="flex items-center gap-2 mb-2 pb-1.5 border-b border-rose-200">
      <span class="flex-shrink-0 bg-rose-500 text-white rounded-lg w-7 h-7 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v5l3 2"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-rose-900 text-[14px] block leading-[17px]">Временная блокировка</strong>
        <span class="text-[10px] text-rose-600 italic block leading-[12px]">blocked time</span>
      </div>
    </div>
    <ul class="space-y-1 text-[11.5px] leading-[15px] text-gray-800">
      <li><span class="text-rose-500 font-bold">Состязание за ресурсы</span> <span class="text-gray-500 italic">(contention for resources)</span></li>
      <li><span class="text-rose-500 font-bold">Недоступность ресурса</span> <span class="text-gray-500 italic">(availability of resources)</span></li>
      <li><span class="text-rose-500 font-bold">Вычисление зависит от результата другого вычисления, которое пока ещё не готово</span> <span class="text-gray-500 italic">(dependency on other computation)</span></li>
    </ul>
    <!-- Схема взаимной блокировки -->
    <div class="mt-1 flex justify-center">
      <svg viewBox="0 0 300 112" class="w-[300px] h-[112px]">
        <defs>
          <marker id="arrHold" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#10b981"/>
          </marker>
          <marker id="arrWait" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#f43f5e"/>
          </marker>
        </defs>
        <!-- R1 -->
        <rect x="115" y="8" width="70" height="30" rx="6" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
        <text x="150" y="22" text-anchor="middle" fill="#065f46" style="font-size:12px;font-weight:700">R1</text>
        <text x="150" y="33" text-anchor="middle" fill="#059669" style="font-size:8.5px">ресурс</text>
        <!-- R2 -->
        <rect x="115" y="74" width="70" height="30" rx="6" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
        <text x="150" y="88" text-anchor="middle" fill="#065f46" style="font-size:12px;font-weight:700">R2</text>
        <text x="150" y="99" text-anchor="middle" fill="#059669" style="font-size:8.5px">ресурс</text>
        <!-- T1 -->
        <rect x="10" y="40" width="70" height="30" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
        <text x="45" y="54" text-anchor="middle" fill="#1e293b" style="font-size:12px;font-weight:700">T1</text>
        <text x="45" y="65" text-anchor="middle" fill="#64748b" style="font-size:8.5px">процесс</text>
        <!-- T2 -->
        <rect x="220" y="40" width="70" height="30" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
        <text x="255" y="54" text-anchor="middle" fill="#1e293b" style="font-size:12px;font-weight:700">T2</text>
        <text x="255" y="65" text-anchor="middle" fill="#64748b" style="font-size:8.5px">процесс</text>
        <!-- R1 -> T1 : владеет -->
        <line x1="116" y1="22" x2="80" y2="44" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrHold)"/>
        <!-- T1 -> R2 : ждёт -->
        <line x1="66" y1="70" x2="118" y2="82" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arrWait)"/>
        <!-- R2 -> T2 : владеет -->
        <line x1="185" y1="84" x2="226" y2="64" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrHold)"/>
        <!-- T2 -> R1 : ждёт -->
        <line x1="238" y1="40" x2="184" y2="26" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arrWait)"/>
      </svg>
    </div>
    <p class="mt-auto pt-1.5 text-[10.5px] leading-[14px] text-gray-700">
      <span class="text-emerald-600 font-bold">—</span> владеет &nbsp; <span class="text-rose-500 font-bold">⋯</span> ждёт &nbsp;·&nbsp;
      Замкнутый цикл: <strong>T1</strong> ждёт <strong>R2</strong>, <strong>T2</strong> ждёт <strong>R1</strong> — взаимная блокировка (<em>deadlock</em>).
    </p>
  </div>

</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-0.5">
  Источник:&nbsp;
  Bass, L. <em>Software Architecture in Practice</em> / L. Bass, P. Clements, R. Kazman. — Boston : Addison-Wesley, 2003. — ISBN 0-321-15495-9. — § 5.4 «Performance Tactics», с. 111–112. — Text : unmediated. — <a href="https://lccn.loc.gov/2003045300" class="underline" target="_blank" rel="noopener">lccn.loc.gov</a> · <a href="https://books.google.com/books?id=gaZQAAAAMAAJ" class="underline" target="_blank" rel="noopener">books.google.com</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/104">← Производительность</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: false
layout: default
---

# Тактики производительности

<p class="text-[13px] leading-snug -mt-4 text-gray-500">
  Тактики группируются по <strong class="text-gray-700">двум факторам времени отклика</strong>: спрос на ресурсы и управление ими
</p>

<div class="mt-1">
  <svg viewBox="0 0 900 310" class="w-full">
    <!-- соединительные линии -->
    <g stroke="#94a3b8" stroke-width="1.8" fill="none">
      <path d="M185,168 H228 V68 H278"/>
      <path d="M185,168 H228 V258 H278"/>
      <path d="M463,68 H548"/>
      <path d="M463,258 H508 V183 H548"/>
      <path d="M508,233 H548"/>
      <path d="M508,283 H548"/>
    </g>
    <!-- корень -->
    <rect x="8" y="140" width="177" height="56" rx="10" fill="#4f46e5"/>
    <text x="96" y="165" text-anchor="middle" fill="#ffffff" style="font-size:14px;font-weight:700">Производительность</text>
    <text x="96" y="182" text-anchor="middle" fill="#c7d2fe" style="font-size:10px;font-style:italic">performance</text>
    <!-- уровень 2: контроль спроса -->
    <rect x="278" y="42" width="185" height="52" rx="9" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="2"/>
    <text x="370" y="64" text-anchor="middle" fill="#075985" style="font-size:12.5px;font-weight:700">Контроль спроса</text>
    <text x="370" y="79" text-anchor="middle" fill="#0369a1" style="font-size:12.5px;font-weight:700">на ресурсы</text>
    <text x="370" y="91" text-anchor="middle" fill="#0284c7" style="font-size:9px;font-style:italic">control resource demand</text>
    <!-- уровень 2: управление ресурсами -->
    <rect x="278" y="232" width="185" height="52" rx="9" fill="#d1fae5" stroke="#6ee7b7" stroke-width="2"/>
    <text x="370" y="254" text-anchor="middle" fill="#065f46" style="font-size:12.5px;font-weight:700">Управление</text>
    <text x="370" y="269" text-anchor="middle" fill="#065f46" style="font-size:12.5px;font-weight:700">ресурсами</text>
    <text x="370" y="281" text-anchor="middle" fill="#059669" style="font-size:9px;font-style:italic">resource management</text>
    <!-- уровень 3 -->
    <rect x="548" y="42" width="242" height="52" rx="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.6"/>
    <text x="669" y="64" text-anchor="middle" fill="#334155" style="font-size:12px;font-weight:700">Сокращение накладных расходов</text>
    <text x="669" y="79" text-anchor="middle" fill="#64748b" style="font-size:9px;font-style:italic">reduce computational overhead</text>
    <rect x="548" y="157" width="242" height="46" rx="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.6"/>
    <text x="669" y="176" text-anchor="middle" fill="#334155" style="font-size:12px;font-weight:700">Увеличение ресурсов</text>
    <text x="669" y="191" text-anchor="middle" fill="#64748b" style="font-size:9px;font-style:italic">increase available resources</text>
    <rect x="548" y="207" width="242" height="46" rx="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.6"/>
    <text x="669" y="226" text-anchor="middle" fill="#334155" style="font-size:12px;font-weight:700">Увеличение параллелизма</text>
    <text x="669" y="241" text-anchor="middle" fill="#64748b" style="font-size:9px;font-style:italic">introduce concurrency</text>
    <rect x="548" y="257" width="242" height="46" rx="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.6"/>
    <text x="669" y="276" text-anchor="middle" fill="#334155" style="font-size:12px;font-weight:700">Управление копиями данных</text>
    <text x="669" y="291" text-anchor="middle" fill="#64748b" style="font-size:9px;font-style:italic">maintain multiple copies of data</text>
    <!-- подписи уровней -->
    <text x="96" y="126" text-anchor="middle" fill="#94a3b8" style="font-size:9px">1 уровень</text>
    <text x="370" y="26" text-anchor="middle" fill="#94a3b8" style="font-size:9px">2 уровень</text>
    <text x="669" y="26" text-anchor="middle" fill="#94a3b8" style="font-size:9px">3 уровень</text>
  </svg>
</div>

<p class="mt-0.5 text-[10px] italic leading-tight text-gray-500">
  В книге § 5.4 выделяется и третья группа — арбитраж ресурсов (resource arbitration): политика планирования, протоколы синхронизации, балансировка распределения.
</p>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-1">
  Источник:&nbsp;
  Bass, L. <em>Software Architecture in Practice</em> / L. Bass, P. Clements, R. Kazman. — Boston : Addison-Wesley, 2003. — ISBN 0-321-15495-9. — § 5.4 «Performance Tactics», с. 111–116; Fig. 5.7 «Summary of performance tactics», с. 116. — Text : unmediated. — <a href="https://lccn.loc.gov/2003045300" class="underline" target="_blank" rel="noopener">lccn.loc.gov</a> · <a href="https://books.google.com/books?id=gaZQAAAAMAAJ" class="underline" target="_blank" rel="noopener">books.google.com</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/105">← Влияние на производительность</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: false
layout: default
---

# Готовность

<p class="text-sm leading-snug -mt-4 text-gray-500">
  <strong class="text-gray-700">Готовность (availability)</strong> — вероятность того, что система работоспособна, когда она нужна: 99,9 % — это 0,1 % вероятности простоя. Поддержание готовности — <strong class="text-gray-700">избыточность + мониторинг + восстановление</strong>.
</p>

<div class="grid grid-cols-2 gap-3 mt-2">

  <!-- 1. Эксплуатационные — выделенный блок -->
  <div class="bg-blue-50 border-2 border-blue-400 rounded-xl p-2.5 shadow-lg shadow-blue-500/20 ring-1 ring-blue-300">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-blue-200">
      <span class="flex-shrink-0 bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 14l4-4"/>
          <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
          <line x1="12" y1="14" x2="12" y2="10"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-blue-900 text-base block leading-[18px]">Эксплуатационные</strong>
        <span class="text-[10px] text-blue-500 italic block leading-[12px]">operational</span>
      </div>
      <span class="ml-auto text-[9px] font-semibold uppercase tracking-wide text-blue-500 bg-white/70 border border-blue-200 rounded px-1.5 py-0.5">в фокусе</span>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Производительность</strong> <span class="text-gray-500 italic">(performance)</span><div class="text-[10px] text-gray-500 leading-tight">скорость отклика и пропускная способность</div></div></li>
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]">
        <span class="relative inline-block">
          <strong class="text-blue-900">Готовность</strong> <span class="text-gray-500 italic">(availability)</span>
          <span class="avail-underline"></span>
          <span v-click="1" class="term-tip">
            <strong class="block text-[11px] text-gray-900 leading-[14px] mb-0.5">Готовность (availability)</strong>
            Вероятность того, что система работоспособна в тот момент, когда она нужна: 99,9 % — это 0,1 % вероятности простоя.
            <span class="block mt-1 text-[9.5px] text-gray-500 italic leading-[12px]">§ 4.4, с. 78; § 5.2, с. 101</span>
          </span>
        </span>
        <div class="text-[10px] text-gray-500 leading-tight">доля времени в рабочем состоянии, отказоустойчивость</div>
      </div></li>
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Согласованность</strong> <span class="text-gray-500 italic">(consistency)</span><div class="text-[10px] text-gray-500 leading-tight">непротиворечивость данных между узлами</div></div></li>
    </ul>
  </div>

  <!-- 2. Пользовательский опыт — выключено -->
  <div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-emerald-200">
      <span class="flex-shrink-0 bg-emerald-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-emerald-900 text-base block leading-[18px]">Пользовательский опыт</strong>
        <span class="text-[10px] text-emerald-600 italic block leading-[12px]">user experience</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Удобство использования</strong> <span class="text-gray-500 italic">(usability)</span><div class="text-[10px] text-gray-500 leading-tight">простота и эффективность работы для пользователя</div></div></li>
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Локализация</strong> <span class="text-gray-500 italic">(localization)</span><div class="text-[10px] text-gray-500 leading-tight">адаптация к языку, форматам и культуре</div></div></li>
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Доступность</strong> <span class="text-gray-500 italic">(accessibility)</span><div class="text-[10px] text-gray-500 leading-tight">работа для людей с ограниченными возможностями</div></div></li>
    </ul>
  </div>

  <!-- 3. Предотвращение рисков — выключено -->
  <div class="bg-orange-50 border-2 border-orange-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-orange-200">
      <span class="flex-shrink-0 bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-orange-900 text-base block leading-[18px]">Предотвращение рисков</strong>
        <span class="text-[10px] text-orange-600 italic block leading-[12px]">risk prevention</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Защищённость</strong> <span class="text-gray-500 italic">(security)</span><div class="text-[10px] text-gray-500 leading-tight">защита данных и от несанкционированного доступа</div></div></li>
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Безопасность</strong> <span class="text-gray-500 italic">(safety)</span><div class="text-[10px] text-gray-500 leading-tight">предсказуемое поведение при отказах и сбоях</div></div></li>
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Соответствие нормам</strong> <span class="text-gray-500 italic">(compliance)</span><div class="text-[10px] text-gray-500 leading-tight">соответствие стандартам и требованиям регуляторов</div></div></li>
    </ul>
  </div>

  <!-- 4. Рост и эволюция — выключено -->
  <div class="bg-purple-50 border-2 border-purple-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-purple-200">
      <span class="flex-shrink-0 bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-purple-900 text-base block leading-[18px]">Рост и эволюция</strong>
        <span class="text-[10px] text-purple-600 italic block leading-[12px]">growth &amp; evolution</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Масштабируемость</strong> <span class="text-gray-500 italic">(scalability)</span><div class="text-[10px] text-gray-500 leading-tight">рост нагрузки без потери качества</div></div></li>
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Изменчивость</strong> <span class="text-gray-500 italic">(modifiability)</span><div class="text-[10px] text-gray-500 leading-tight">лёгкость внесения изменений без больших затрат</div></div></li>
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Совместимость</strong> <span class="text-gray-500 italic">(interoperability)</span><div class="text-[10px] text-gray-500 leading-tight">взаимодействие с внешними системами</div></div></li>
    </ul>
  </div>

</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-0.5">
  Источник:&nbsp;
  Bass, L. <em>Software Architecture in Practice</em> / L. Bass, P. Clements, R. Kazman. — Addison-Wesley, 2003. — § 4.4, с. 78; § 5.2, с. 101–105. — <a href="https://lccn.loc.gov/2003045300" class="underline" target="_blank" rel="noopener">lccn.loc.gov</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/106">← Тактики производительности</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

<style>
.avail-underline {
  position: absolute;
  left: -2px;
  right: -2px;
  bottom: -2px;
  height: 3px;
  border-radius: 2px;
  background-image: linear-gradient(90deg, #3b82f6, #6366f1, #3b82f6);
  background-size: 200% 100%;
  transform: scaleX(0);
  transform-origin: left center;
  animation: avail-draw .9s cubic-bezier(.4, 0, .2, 1) forwards, avail-shine 3.6s .9s linear infinite;
}
@keyframes avail-draw {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes avail-shine {
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
}
.term-tip {
  position: absolute;
  left: calc(100% + 5px);
  top: -10px;
  width: 182px;
  z-index: 30;
  background: #ffffff;
  color: #374151;
  border: 1px solid #cbd5e1;
  border-left: 3px solid #3b82f6;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 10.5px;
  line-height: 14px;
  font-style: normal;
  text-align: left;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .2);
}
.term-tip::before {
  content: "";
  position: absolute;
  left: -6px;
  top: 16px;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-left: 1px solid #cbd5e1;
  border-bottom: 1px solid #cbd5e1;
  transform: rotate(45deg);
}
</style>

---
hide: false
layout: default
---

# Тактики готовности

<p class="text-[13px] leading-snug -mt-4 text-gray-500">
  Тактики готовности (availability) упорядочены по <strong class="text-gray-700">стадии жизненного цикла сбоя</strong>: обнаружить → подготовить к восстановлению → восстановить → предотвратить.
</p>

<div class="mt-1">
<svg viewBox="0 0 900 288" class="w-full">
  <g stroke="#94a3b8" stroke-width="1.8" fill="none">
    <path d="M450,50 V74"/>
    <path d="M112,74 H784"/>
    <path d="M112,74 V92"/>
    <path d="M336,74 V92"/>
    <path d="M560,74 V92"/>
    <path d="M784,74 V92"/>
    <path d="M112,134 V142"/>
    <path d="M336,134 V142"/>
    <path d="M560,134 V142"/>
    <path d="M784,134 V142"/>
  </g>
  <rect x="330" y="2" width="240" height="48" rx="10" fill="#4f46e5"/>
  <text x="450" y="25" text-anchor="middle" fill="#ffffff" style="font-size:14px;font-weight:700">Готовность</text>
  <text x="450" y="41" text-anchor="middle" fill="#c7d2fe" style="font-size:10px;font-style:italic">availability</text>
  <rect x="4" y="92" width="216" height="42" rx="8" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="2"/>
  <text x="112" y="112" text-anchor="middle" fill="#075985" style="font-size:12px;font-weight:700">Обнаружение сбоев</text>
  <text x="112" y="126" text-anchor="middle" fill="#0284c7" style="font-size:9px;font-style:italic">fault detection</text>
  <circle cx="10" cy="145" r="2.5" fill="#0ea5e9"/>
  <text x="18" y="148" fill="#334155" style="font-size:10px">Мониторы</text>
  <text x="18" y="159" fill="#94a3b8" style="font-size:8.5px;font-style:italic">monitors</text>
  <circle cx="10" cy="169" r="2.5" fill="#0ea5e9"/>
  <text x="18" y="172" fill="#334155" style="font-size:10px">Ping / Echo</text>
  <text x="18" y="183" fill="#94a3b8" style="font-size:8.5px;font-style:italic">ping/echo</text>
  <circle cx="10" cy="193" r="2.5" fill="#0ea5e9"/>
  <text x="18" y="196" fill="#334155" style="font-size:10px">Сердцебиение</text>
  <text x="18" y="207" fill="#94a3b8" style="font-size:8.5px;font-style:italic">heartbeat</text>
  <circle cx="10" cy="217" r="2.5" fill="#0ea5e9"/>
  <text x="18" y="220" fill="#334155" style="font-size:10px">Временные метки</text>
  <text x="18" y="231" fill="#94a3b8" style="font-size:8.5px;font-style:italic">timestamp</text>
  <circle cx="10" cy="241" r="2.5" fill="#0ea5e9"/>
  <text x="18" y="244" fill="#334155" style="font-size:10px">Condition Monitoring</text>
  <circle cx="10" cy="265" r="2.5" fill="#0ea5e9"/>
  <text x="18" y="268" fill="#334155" style="font-size:10px">Sanity Checking</text>
  <rect x="228" y="92" width="216" height="42" rx="8" fill="#fef3c7" stroke="#fcd34d" stroke-width="2"/>
  <text x="336" y="112" text-anchor="middle" fill="#92400e" style="font-size:12px;font-weight:700">Подготовка к восстановлению</text>
  <text x="336" y="126" text-anchor="middle" fill="#d97706" style="font-size:9px;font-style:italic">prepare for recovery</text>
  <circle cx="234" cy="145" r="2.5" fill="#f59e0b"/>
  <text x="242" y="148" fill="#334155" style="font-size:10px">Активное дублирование</text>
  <text x="242" y="159" fill="#94a3b8" style="font-size:8.5px;font-style:italic">active redundancy</text>
  <circle cx="234" cy="169" r="2.5" fill="#f59e0b"/>
  <text x="242" y="172" fill="#334155" style="font-size:10px">Пассивное резервирование</text>
  <text x="242" y="183" fill="#94a3b8" style="font-size:8.5px;font-style:italic">passive redundancy</text>
  <circle cx="234" cy="193" r="2.5" fill="#f59e0b"/>
  <text x="242" y="196" fill="#334155" style="font-size:10px">Холодный резерв</text>
  <text x="242" y="207" fill="#94a3b8" style="font-size:8.5px;font-style:italic">spare</text>
  <circle cx="234" cy="217" r="2.5" fill="#f59e0b"/>
  <text x="242" y="220" fill="#334155" style="font-size:10px">Голосование</text>
  <text x="242" y="231" fill="#94a3b8" style="font-size:8.5px;font-style:italic">voting</text>
  <circle cx="234" cy="241" r="2.5" fill="#f59e0b"/>
  <text x="242" y="244" fill="#334155" style="font-size:10px">Обнаружение исключений</text>
  <text x="242" y="255" fill="#94a3b8" style="font-size:8.5px;font-style:italic">exception detection</text>
  <circle cx="234" cy="265" r="2.5" fill="#f59e0b"/>
  <text x="242" y="268" fill="#334155" style="font-size:10px">Self-test</text>
  <rect x="452" y="92" width="216" height="42" rx="8" fill="#d1fae5" stroke="#6ee7b7" stroke-width="2"/>
  <text x="560" y="112" text-anchor="middle" fill="#065f46" style="font-size:12px;font-weight:700">Восстановление после сбоев</text>
  <text x="560" y="126" text-anchor="middle" fill="#059669" style="font-size:9px;font-style:italic">recover from failures</text>
  <circle cx="458" cy="145" r="2.5" fill="#10b981"/>
  <text x="466" y="148" fill="#334155" style="font-size:10px">Ресинхронизация состояния</text>
  <text x="466" y="159" fill="#94a3b8" style="font-size:8.5px;font-style:italic">state resynchronization</text>
  <circle cx="458" cy="169" r="2.5" fill="#10b981"/>
  <text x="466" y="172" fill="#334155" style="font-size:10px">Откат к контрольной точке</text>
  <text x="466" y="183" fill="#94a3b8" style="font-size:8.5px;font-style:italic">checkpoint/rollback</text>
  <circle cx="458" cy="193" r="2.5" fill="#10b981"/>
  <text x="466" y="196" fill="#334155" style="font-size:10px">Действие в тени</text>
  <text x="466" y="207" fill="#94a3b8" style="font-size:8.5px;font-style:italic">shadow operation</text>
  <rect x="676" y="92" width="216" height="42" rx="8" fill="#ffe4e6" stroke="#fda4af" stroke-width="2"/>
  <text x="784" y="112" text-anchor="middle" fill="#9f1239" style="font-size:12px;font-weight:700">Предотвращение сбоев</text>
  <text x="784" y="126" text-anchor="middle" fill="#e11d48" style="font-size:9px;font-style:italic">fault prevention</text>
  <circle cx="682" cy="145" r="2.5" fill="#f43f5e"/>
  <text x="690" y="148" fill="#334155" style="font-size:10px">Вывод из строя</text>
  <text x="690" y="159" fill="#94a3b8" style="font-size:8.5px;font-style:italic">removal from service</text>
  <circle cx="682" cy="169" r="2.5" fill="#f43f5e"/>
  <text x="690" y="172" fill="#334155" style="font-size:10px">Транзакции</text>
  <text x="690" y="183" fill="#94a3b8" style="font-size:8.5px;font-style:italic">transactions</text>
  <circle cx="682" cy="193" r="2.5" fill="#f43f5e"/>
  <text x="690" y="196" fill="#334155" style="font-size:10px">Монитор процессов</text>
  <text x="690" y="207" fill="#94a3b8" style="font-size:8.5px;font-style:italic">process monitor</text>
</svg>
</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-1">
  Источник:&nbsp;
  Bass, L. <em>Software Architecture in Practice</em> / L. Bass, P. Clements, R. Kazman. — 3rd ed. Addison-Wesley Professional / SEI, 2012. — Гл. 5 «Availability», § 5.2, рис. 5.5 «Availability Tactics». — ISBN 978-0-321-81573-6. — <a href="https://www.pearson.com/en-us/subject-catalog/p/software-architecture-in-practice/P200000000111/9780137468218" class="underline" target="_blank" rel="noopener">pearson.com</a> · <a href="https://www.philadelphia.edu.jo/academics/lalqoran/uploads/sap3chapter5.pdf" class="underline" target="_blank" rel="noopener">слайды гл. 5 (CC BY)</a>
</div>

<p class="mt-0.5 text-[9.5px] leading-[12px] text-gray-500 italic text-center">
  Разбивка на четыре группы — учебная: 13 тактик из § 5.2 2-го изд. (2003), ещё 5 — из 3-го изд. (2012); process monitor есть только во 2-м.
</p>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/107">← Готовность</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: false
layout: default
---

# Защищенность

<p class="text-sm leading-snug -mt-4 text-gray-500">
  <strong class="text-gray-700">Защищщеность (security)</strong> — способность системы сопротивляться несанкционированному использованию, продолжая оказывать услуги легитимным пользователям. Попытка прорыва — <strong class="text-gray-700">атака</strong>: доступ к данным, их изменение или отказ в обслуживании.
</p>

<div class="grid grid-cols-2 gap-3 mt-2">

  <!-- 1. Эксплуатационные — выделенный блок -->
  <div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-blue-200">
      <span class="flex-shrink-0 bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 14l4-4"/>
          <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
          <line x1="12" y1="14" x2="12" y2="10"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-blue-900 text-base block leading-[18px]">Эксплуатационные</strong>
        <span class="text-[10px] text-blue-500 italic block leading-[12px]">operational</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Производительность</strong> <span class="text-gray-500 italic">(performance)</span><div class="text-[10px] text-gray-500 leading-tight">скорость отклика и пропускная способность</div></div></li>
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Готовность</strong> <span class="text-gray-500 italic">(availability)</span><div class="text-[10px] text-gray-500 leading-tight">доля времени в рабочем состоянии, отказоустойчивость</div></div></li>
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Согласованность</strong> <span class="text-gray-500 italic">(consistency)</span><div class="text-[10px] text-gray-500 leading-tight">непротиворечивость данных между узлами</div></div></li>
    </ul>
  </div>

  <!-- 2. Пользовательский опыт — выключено -->
  <div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-emerald-200">
      <span class="flex-shrink-0 bg-emerald-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-emerald-900 text-base block leading-[18px]">Пользовательский опыт</strong>
        <span class="text-[10px] text-emerald-600 italic block leading-[12px]">user experience</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Удобство использования</strong> <span class="text-gray-500 italic">(usability)</span><div class="text-[10px] text-gray-500 leading-tight">простота и эффективность работы для пользователя</div></div></li>
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Локализация</strong> <span class="text-gray-500 italic">(localization)</span><div class="text-[10px] text-gray-500 leading-tight">адаптация к языку, форматам и культуре</div></div></li>
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Доступность</strong> <span class="text-gray-500 italic">(accessibility)</span><div class="text-[10px] text-gray-500 leading-tight">работа для людей с ограниченными возможностями</div></div></li>
    </ul>
  </div>

  <!-- 3. Предотвращение рисков — выключено -->
  <div class="bg-orange-50 border-2 border-orange-400 rounded-xl p-2.5 shadow-lg shadow-orange-500/20 ring-1 ring-orange-300">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-orange-200">
      <span class="flex-shrink-0 bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-orange-900 text-base block leading-[18px]">Предотвращение рисков</strong>
        <span class="text-[10px] text-orange-600 italic block leading-[12px]">risk prevention</span>
      </div>
      <span class="ml-auto text-[9px] font-semibold uppercase tracking-wide text-orange-600 bg-white/70 border border-orange-200 rounded px-1.5 py-0.5">в фокусе</span>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]">
        <span class="relative inline-block">
          <strong class="text-orange-900">Защищённость</strong> <span class="text-gray-500 italic">(security)</span>
          <span class="avail-underline"></span>
          <span v-click="1" class="term-tip">
            <strong class="block text-[11px] text-gray-900 leading-[14px] mb-0.5">Защищённость (security)</strong>
            Мера способности системы сопротивляться несанкционированному использованию, продолжая оказывать услуги легитимным пользователям.
            <span class="block mt-1 text-[9.5px] text-gray-500 italic leading-[12px]">§ 4.4, с. 83; § 5.5, с. 116–118</span>
          </span>
        </span>
        <div class="text-[10px] text-gray-500 leading-tight">защита данных и от несанкционированного доступа</div>
      </div></li>
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Безопасность</strong> <span class="text-gray-500 italic">(safety)</span><div class="text-[10px] text-gray-500 leading-tight">предсказуемое поведение при отказах и сбоях</div></div></li>
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Соответствие нормам</strong> <span class="text-gray-500 italic">(compliance)</span><div class="text-[10px] text-gray-500 leading-tight">соответствие стандартам и требованиям регуляторов</div></div></li>
    </ul>
  </div>

  <!-- 4. Рост и эволюция — выключено -->
  <div class="bg-purple-50 border-2 border-purple-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-purple-200">
      <span class="flex-shrink-0 bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-purple-900 text-base block leading-[18px]">Рост и эволюция</strong>
        <span class="text-[10px] text-purple-600 italic block leading-[12px]">growth &amp; evolution</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Масштабируемость</strong> <span class="text-gray-500 italic">(scalability)</span><div class="text-[10px] text-gray-500 leading-tight">рост нагрузки без потери качества</div></div></li>
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Изменчивость</strong> <span class="text-gray-500 italic">(modifiability)</span><div class="text-[10px] text-gray-500 leading-tight">лёгкость внесения изменений без больших затрат</div></div></li>
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Совместимость</strong> <span class="text-gray-500 italic">(interoperability)</span><div class="text-[10px] text-gray-500 leading-tight">взаимодействие с внешними системами</div></div></li>
    </ul>
  </div>

</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-0.5">
  Источник:&nbsp;
  Bass, L. <em>Software Architecture in Practice</em> / L. Bass, P. Clements, R. Kazman. — Addison-Wesley, 2003. — § 4.4, с. 83; § 5.5, с. 116–118. — <a href="https://lccn.loc.gov/2003045300" class="underline" target="_blank" rel="noopener">lccn.loc.gov</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/108">← Тактики готовности</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

<style>
.avail-underline {
  position: absolute;
  left: -2px;
  right: -2px;
  bottom: -2px;
  height: 3px;
  border-radius: 2px;
  background-image: linear-gradient(90deg, #3b82f6, #6366f1, #3b82f6);
  background-size: 200% 100%;
  transform: scaleX(0);
  transform-origin: left center;
  animation: avail-draw .9s cubic-bezier(.4, 0, .2, 1) forwards, avail-shine 3.6s .9s linear infinite;
}
@keyframes avail-draw {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes avail-shine {
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
}
.term-tip {
  position: absolute;
  left: calc(100% + 5px);
  top: -10px;
  width: 182px;
  z-index: 30;
  background: #ffffff;
  color: #374151;
  border: 1px solid #cbd5e1;
  border-left: 3px solid #3b82f6;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 10.5px;
  line-height: 14px;
  font-style: normal;
  text-align: left;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .2);
}
.term-tip::before {
  content: "";
  position: absolute;
  left: -6px;
  top: 16px;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-left: 1px solid #cbd5e1;
  border-bottom: 1px solid #cbd5e1;
  transform: rotate(45deg);
}
</style>

---
hide: false
layout: default
---

# Тактики защищености

<p class="text-[13px] leading-snug -mt-3 text-gray-500">
  <strong class="text-gray-700">Тактики защищенности выстроены по жизненному циклу атаки:</strong>
  обнаружить → остановить или смягчить → отреагировать → восстановиться.
  Классификация — Fernandez et al. (2015), пересматривающая исходный набор тактик SEI.
</p>

<div class="grid grid-cols-4 gap-3 mt-3">

  <!-- 1. Обнаружение атак -->
  <div v-click="1" class="bg-rose-50 border-2 border-rose-300 rounded-xl p-2.5">
    <div class="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-rose-200">
      <span class="flex-shrink-0 bg-rose-500 text-white rounded-lg w-6 h-6 flex items-center justify-center text-[11px] font-bold">1</span>
      <div class="leading-tight">
        <strong class="text-rose-900 text-[12px] block leading-[15px]">Detect attacks</strong>
        <span class="text-[9.5px] text-rose-600 italic block leading-[11px]">обнаружение атак</span>
      </div>
    </div>
    <ul class="text-[10.5px] leading-[13.5px] text-gray-800 space-y-1">
      <li><strong>Intrusion detection</strong> — сигнатурный и поведенческий анализ</li>
      <li><strong>Session recording</strong> — журнал пользовательской сессии</li>
      <li><strong>Maintain an audit trail</strong> — журнал событий безопасности</li>
    </ul>
  </div>

  <!-- 2. Остановка и смягчение атак -->
  <div v-click="2" class="bg-amber-50 border-2 border-amber-300 rounded-xl p-2.5">
    <div class="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-amber-200">
      <span class="flex-shrink-0 bg-amber-500 text-white rounded-lg w-6 h-6 flex items-center justify-center text-[11px] font-bold">2</span>
      <div class="leading-tight">
        <strong class="text-amber-900 text-[12px] block leading-[15px]">Stop or mitigate attacks</strong>
        <span class="text-[9.5px] text-amber-600 italic block leading-[11px]">остановка и смягчение</span>
      </div>
    </div>
    <ul class="text-[10.5px] leading-[13.5px] text-gray-800 space-y-1">
      <li><strong>Authenticate users</strong> — доказать подлинность</li>
      <li><strong>Authorize users</strong> — разграничить права</li>
      <li><strong>Maintain data confidentiality</strong> — шифрование данных</li>
      <li><strong>Maintain integrity</strong> — контроль целостности</li>
      <li><strong>Limit exposure</strong> — минимальная поверхность атаки, honeypots-ловушки</li>
      <li><strong>Limit access</strong> — только необходимые ресурсы и права</li>
    </ul>
  </div>

  <!-- 3. Реакция на атаку -->
  <div v-click="3" class="bg-violet-50 border-2 border-violet-300 rounded-xl p-2.5">
    <div class="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-violet-200">
      <span class="flex-shrink-0 bg-violet-500 text-white rounded-lg w-6 h-6 flex items-center justify-center text-[11px] font-bold">3</span>
      <div class="leading-tight">
        <strong class="text-violet-900 text-[12px] block leading-[15px]">React to attacks</strong>
        <span class="text-[9.5px] text-violet-600 italic block leading-[11px]">реакция на атаку</span>
      </div>
    </div>
    <ul class="text-[10.5px] leading-[13.5px] text-gray-800 space-y-1">
      <li><strong>Log events, record information about the attack</strong> — журнал атаки</li>
      <li><strong>Monitor for attack</strong> — наблюдение за ходом атаки</li>
      <li><strong>Disable user / credentials</strong> — блокировка учётной записи</li>
      <li><strong>Disconnect user, shut down system</strong> — изоляция и остановка</li>
      <li><strong>Reconfigure system, restore software</strong> — перенастройка, откат ПО</li>
    </ul>
  </div>

  <!-- 4. Восстановление после атак -->
  <div v-click="4" class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-2.5">
    <div class="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-emerald-200">
      <span class="flex-shrink-0 bg-emerald-500 text-white rounded-lg w-6 h-6 flex items-center justify-center text-[11px] font-bold">4</span>
      <div class="leading-tight">
        <strong class="text-emerald-900 text-[12px] block leading-[15px]">Recover from attacks</strong>
        <span class="text-[9.5px] text-emerald-600 italic block leading-[11px]">восстановление после атак</span>
      </div>
    </div>
    <ul class="text-[10.5px] leading-[13.5px] text-gray-800 space-y-1">
      <li><strong>Restore state</strong> — восстановление состояния системы</li>
      <li><strong>Rollback</strong> — откат к предыдущей версии</li>
      <li><strong>Backups</strong> — резервные копии</li>
      <li><strong>Failover</strong> — переключение на резервный узел</li>
    </ul>
  </div>

</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-2">
  Источник:&nbsp;
  Fernandez, E. B. <em>Revisiting Architectural Tactics for Security</em> / E. B. Fernandez, H. Astudillo, G. Pedraza-García. — In: <em>Software Architecture. ECSA 2015</em>. — Cham : Springer, 2015. — P. 55–69. — ISBN 978-3-319-23727-5. — Text : unmediated. — <a href="https://doi.org/10.1007/978-3-319-23727-5_5" class="underline" target="_blank" rel="noopener">doi.org</a> · Названия тактик — по каталогу SEI и Bass, Clements, Kazman, § 5.5, с. 116–118.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/109">← Защищенность</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: false
layout: default
---

# Аутентификация, авторизация

<div class="grid grid-cols-2 gap-3 mt-2">
  <!-- ЛЕВАЯ ЧАСТЬ -->
  <div>
    <!-- 1. Определения -->
    <div class="grid grid-cols-2 gap-2">
      <div class="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-2.5">
        <div class="text-[12px] font-bold text-indigo-900 leading-[15px]">Аутентификация</div>
        <div class="text-[9.5px] italic text-indigo-500 leading-[12px]">authentication</div>
        <p class="text-[10.5px] leading-[14px] text-gray-700 mt-1">
          Подтверждение подлинности: <strong class="text-indigo-900">«кто вы?»</strong>.
          Проверка пароля, токена, сертификата; результат — идентификатор субъекта (principal).
        </p>
      </div>
      <div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-2.5">
        <div class="text-[12px] font-bold text-emerald-900 leading-[15px]">Авторизация</div>
        <div class="text-[9.5px] italic text-emerald-500 leading-[12px]">authorization</div>
        <p class="text-[10.5px] leading-[14px] text-gray-700 mt-1">
          Проверка прав: <strong class="text-emerald-900">«что вам разрешено?»</strong>.
          Сопоставление роли или политики с требуемым доступом (RBAC / ABAC); результат — allow / deny.
        </p>
      </div>
    </div>
    <p class="mt-1.5 text-[10px] leading-[13px] text-gray-600">
      Порядок: сначала аутентификация, затем авторизация.
      <span class="font-semibold text-gray-800">401 Unauthorized</span> — токен не предъявлен или невалиден;
      <span class="font-semibold text-gray-800">403 Forbidden</span> — токен есть, но прав недостаточно.
    </p>
    <!-- 2. Код -->
    <div class="mt-2 rounded-lg bg-gray-900 p-2.5 font-mono text-[9.5px] leading-[13px] text-gray-200">
      <div><span class="text-emerald-400">$</span> curl -X GET https://api.example.com/users \</div>
      <div class="pl-4">-H <span class="text-amber-300">"Authorization: Bearer eyJhbGciOiJIUzI1NiIs...eyJzdWIiOiJhbGljZSJ9.s3g"</span> \</div>
      <div class="pl-4">-H <span class="text-amber-300">"Accept: application/json"</span></div>
      <div class="mt-1 text-gray-400"># analyst: токен предъявлен, но users:read нет → 403 Forbidden</div>
    </div>
  </div>
  <!-- ПРАВАЯ ЧАСТЬ -->
  <div>
    <!-- 3. Хранение учётных данных -->
    <div class="text-[11px] font-semibold text-gray-700">Хранение учётных данных</div>
    <table class="authz-tbl w-full text-[10px] leading-none mt-1">
      <thead class="bg-gray-100">
        <tr>
          <th class="text-left px-1 font-semibold text-gray-700">id</th>
          <th class="text-left px-1 font-semibold text-gray-700">login</th>
          <th class="text-left px-1 font-semibold text-gray-700">password_hash</th>
          <th class="text-left px-1 font-semibold text-gray-700">algo</th>
          <th class="text-left px-1 font-semibold text-gray-700">status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-t border-gray-200">
          <td class="py-0.5 px-1">1</td><td class="py-0.5 px-1 font-medium">admin</td>
          <td class="py-0.5 px-1 font-mono text-[9px] whitespace-nowrap">$argon2id$v=19$m=65536,t=3,p$Zx…</td>
          <td class="py-0.5 px-1">argon2id</td><td class="py-0.5 px-1 text-emerald-700">active</td>
        </tr>
        <tr class="border-t border-gray-200">
          <td class="py-0.5 px-1">2</td><td class="py-0.5 px-1 font-medium">analyst</td>
          <td class="py-0.5 px-1 font-mono text-[9px] whitespace-nowrap">$argon2id$v=19$m=65536,t=3,p$Kl…</td>
          <td class="py-0.5 px-1">argon2id</td><td class="py-0.5 px-1 text-emerald-700">active</td>
        </tr>
        <tr class="border-t border-gray-200">
          <td class="py-0.5 px-1">3</td><td class="py-0.5 px-1 font-medium">auditor</td>
          <td class="py-0.5 px-1 font-mono text-[9px] whitespace-nowrap">$argon2id$v=19$m=65536,t=3,p$Rt…</td>
          <td class="py-0.5 px-1">argon2id</td><td class="py-0.5 px-1 text-emerald-700">active</td>
        </tr>
        <tr class="border-t border-gray-200">
          <td class="py-0.5 px-1">4</td><td class="py-0.5 px-1 font-medium">user</td>
          <td class="py-0.5 px-1 font-mono text-[9px] whitespace-nowrap">$argon2id$v=19$m=65536,t=3,p$Wm…</td>
          <td class="py-0.5 px-1">argon2id</td><td class="py-0.5 px-1 text-emerald-700">active</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-1 text-[9.5px] leading-[12px] text-gray-600">
      В базе — только хэш и соль, сам пароль необратим (argon2id / bcrypt / scrypt); проверка через verify(), ротация при компрометации.
    </p>
    <!-- 4. Матрица ролей -->
    <div class="text-[11px] font-semibold text-gray-700 mt-2">Роли и разрешения (RBAC)</div>
    <table class="authz-tbl w-full text-[10px] leading-none mt-1">
      <thead class="bg-gray-100">
        <tr>
          <th class="text-left px-1 font-semibold text-gray-700">Роль</th>
          <th class="text-center px-1 font-semibold text-gray-700">users:read</th>
          <th class="text-center px-1 font-semibold text-gray-700">users:write</th>
          <th class="text-center px-1 font-semibold text-gray-700">audit:read</th>
          <th class="text-center px-1 font-semibold text-gray-700">reports:read</th>
          <th class="text-center px-1 font-semibold text-gray-700">reports:write</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-t border-gray-200">
          <td class="py-0.5 px-1 font-medium">admin</td>
          <td class="py-0.5 text-center text-emerald-600 font-bold">+</td><td class="py-0.5 text-center text-emerald-600 font-bold">+</td>
          <td class="py-0.5 text-center text-emerald-600 font-bold">+</td><td class="py-0.5 text-center text-emerald-600 font-bold">+</td>
          <td class="py-0.5 text-center text-emerald-600 font-bold">+</td>
        </tr>
        <tr class="border-t border-gray-200">
          <td class="py-0.5 px-1 font-medium">analyst</td>
          <td class="py-0.5 text-center text-rose-400 font-bold">−</td><td class="py-0.5 text-center text-rose-400 font-bold">−</td>
          <td class="py-0.5 text-center text-rose-400 font-bold">−</td><td class="py-0.5 text-center text-emerald-600 font-bold">+</td>
          <td class="py-0.5 text-center text-emerald-600 font-bold">+</td>
        </tr>
        <tr class="border-t border-gray-200">
          <td class="py-0.5 px-1 font-medium">auditor</td>
          <td class="py-0.5 text-center text-emerald-600 font-bold">+</td><td class="py-0.5 text-center text-rose-400 font-bold">−</td>
          <td class="py-0.5 text-center text-emerald-600 font-bold">+</td><td class="py-0.5 text-center text-rose-400 font-bold">−</td>
          <td class="py-0.5 text-center text-rose-400 font-bold">−</td>
        </tr>
        <tr class="border-t border-gray-200">
          <td class="py-0.5 px-1 font-medium">user</td>
          <td class="py-0.5 text-center text-rose-400 font-bold">−</td><td class="py-0.5 text-center text-rose-400 font-bold">−</td>
          <td class="py-0.5 text-center text-rose-400 font-bold">−</td><td class="py-0.5 text-center text-rose-400 font-bold">−</td>
          <td class="py-0.5 text-center text-rose-400 font-bold">−</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-1 text-[9.5px] leading-[12px] text-gray-600">
      <span class="text-emerald-600 font-bold">+</span> разрешено, <span class="text-rose-400 font-bold">−</span> запрещено; проверка выполняется на сервере для каждого запроса.
    </p>
  </div>
</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-2">
  Источник:&nbsp;
  Bass, L. <em>Software Architecture in Practice</em> / L. Bass, P. Clements, R. Kazman. — Boston : Addison-Wesley, 2003. — ISBN 0-321-15495-9. — § 5.5 «Security Tactics», с. 116–118 (тактики authenticate users / authorize users). — OWASP Cheat Sheet Series: Authentication / Authorization / Password Storage. — <a href="https://lccn.loc.gov/2003045300" class="underline" target="_blank" rel="noopener">lccn.loc.gov</a> · <a href="https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html" class="underline" target="_blank" rel="noopener">cheatsheetseries.owasp.org</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/110">← Тактики защищености</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

<style>
.authz-tbl td,
.authz-tbl th {
  padding: 2px 4px;
}
</style>

---
hide: false
layout: default
---

# Модифицируемость

<p class="text-sm leading-snug -mt-4 text-gray-500">
  <strong class="text-gray-700">Модифицируемость (modifiability)</strong> — стоимость изменения: что может измениться (функции, платформа, среда, качества, ёмкость) и когда и кто его вносит. На общей карте атрибутов этот же атрибут назван «изменчивость».
</p>

<div class="grid grid-cols-2 gap-3 mt-2">

  <!-- 1. Эксплуатационные — выделенный блок -->
  <div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-blue-200">
      <span class="flex-shrink-0 bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 14l4-4"/>
          <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
          <line x1="12" y1="14" x2="12" y2="10"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-blue-900 text-base block leading-[18px]">Эксплуатационные</strong>
        <span class="text-[10px] text-blue-500 italic block leading-[12px]">operational</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Производительность</strong> <span class="text-gray-500 italic">(performance)</span><div class="text-[10px] text-gray-500 leading-tight">скорость отклика и пропускная способность</div></div></li>
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Готовность</strong> <span class="text-gray-500 italic">(availability)</span><div class="text-[10px] text-gray-500 leading-tight">доля времени в рабочем состоянии, отказоустойчивость</div></div></li>
      <li class="flex gap-1.5"><span class="text-blue-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Согласованность</strong> <span class="text-gray-500 italic">(consistency)</span><div class="text-[10px] text-gray-500 leading-tight">непротиворечивость данных между узлами</div></div></li>
    </ul>
  </div>

  <!-- 2. Пользовательский опыт — выключено -->
  <div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-emerald-200">
      <span class="flex-shrink-0 bg-emerald-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-emerald-900 text-base block leading-[18px]">Пользовательский опыт</strong>
        <span class="text-[10px] text-emerald-600 italic block leading-[12px]">user experience</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Удобство использования</strong> <span class="text-gray-500 italic">(usability)</span><div class="text-[10px] text-gray-500 leading-tight">простота и эффективность работы для пользователя</div></div></li>
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Локализация</strong> <span class="text-gray-500 italic">(localization)</span><div class="text-[10px] text-gray-500 leading-tight">адаптация к языку, форматам и культуре</div></div></li>
      <li class="flex gap-1.5"><span class="text-emerald-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Доступность</strong> <span class="text-gray-500 italic">(accessibility)</span><div class="text-[10px] text-gray-500 leading-tight">работа для людей с ограниченными возможностями</div></div></li>
    </ul>
  </div>

  <!-- 3. Предотвращение рисков — выключено -->
  <div class="bg-orange-50 border-2 border-orange-300 rounded-xl p-2.5 opacity-40 grayscale pointer-events-none select-none">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-orange-200">
      <span class="flex-shrink-0 bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-orange-900 text-base block leading-[18px]">Предотвращение рисков</strong>
        <span class="text-[10px] text-orange-600 italic block leading-[12px]">risk prevention</span>
      </div>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Защищённость</strong> <span class="text-gray-500 italic">(security)</span><div class="text-[10px] text-gray-500 leading-tight">защита данных и от несанкционированного доступа</div></div></li>
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Безопасность</strong> <span class="text-gray-500 italic">(safety)</span><div class="text-[10px] text-gray-500 leading-tight">предсказуемое поведение при отказах и сбоях</div></div></li>
      <li class="flex gap-1.5"><span class="text-orange-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Соответствие нормам</strong> <span class="text-gray-500 italic">(compliance)</span><div class="text-[10px] text-gray-500 leading-tight">соответствие стандартам и требованиям регуляторов</div></div></li>
    </ul>
  </div>

  <!-- 4. Рост и эволюция — выключено -->
  <div class="bg-purple-50 border-2 border-purple-400 rounded-xl p-2.5 shadow-lg shadow-purple-500/20 ring-1 ring-purple-300">
    <div class="flex items-center gap-2 mb-1.5 pb-1 border-b border-purple-200">
      <span class="flex-shrink-0 bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-purple-900 text-base block leading-[18px]">Рост и эволюция</strong>
        <span class="text-[10px] text-purple-600 italic block leading-[12px]">growth &amp; evolution</span>
      </div>
      <span class="ml-auto text-[9px] font-semibold uppercase tracking-wide text-purple-600 bg-white/70 border border-purple-200 rounded px-1.5 py-0.5">в фокусе</span>
    </div>
    <ul class="text-xs text-gray-800 leading-snug space-y-1.5">
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Масштабируемость</strong> <span class="text-gray-500 italic">(scalability)</span><div class="text-[10px] text-gray-500 leading-tight">рост нагрузки без потери качества</div></div></li>
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]">
        <span class="relative inline-block">
          <strong class="text-purple-900">Модифицируемость</strong> <span class="text-gray-500 italic">(modifiability)</span>
          <span class="avail-underline"></span>
          <span v-click="1" class="term-tip">
            <strong class="block text-[11px] text-gray-900 leading-[14px] mb-0.5">Модифицируемость (modifiability)</strong>
            Стоимость изменения: что может измениться (функции, платформа, среда) и когда и кто его вносит.
            <span class="block mt-1 text-[9.5px] text-gray-500 italic leading-[12px]">§ 4.4, с. 80; § 5.3, с. 105–111</span>
          </span>
        </span>
        <div class="text-[10px] text-gray-500 leading-tight">лёгкость внесения изменений без больших затрат</div>
      </div></li>
      <li class="flex gap-1.5"><span class="text-purple-500 font-bold mt-0.5">•</span><div class="leading-[15px]"><strong class="text-gray-900">Совместимость</strong> <span class="text-gray-500 italic">(interoperability)</span><div class="text-[10px] text-gray-500 leading-tight">взаимодействие с внешними системами</div></div></li>
    </ul>
  </div>

</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-0.5">
  Источник:&nbsp;
  Bass, L. <em>Software Architecture in Practice</em> / L. Bass, P. Clements, R. Kazman. — Addison-Wesley, 2003. — § 4.4, с. 80; § 5.3, с. 105–111. — <a href="https://lccn.loc.gov/2003045300" class="underline" target="_blank" rel="noopener">lccn.loc.gov</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/111">← Аутентификация, авторизация</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

<style>
.avail-underline {
  position: absolute;
  left: -2px;
  right: -2px;
  bottom: -2px;
  height: 3px;
  border-radius: 2px;
  background-image: linear-gradient(90deg, #3b82f6, #6366f1, #3b82f6);
  background-size: 200% 100%;
  transform: scaleX(0);
  transform-origin: left center;
  animation: avail-draw .9s cubic-bezier(.4, 0, .2, 1) forwards, avail-shine 3.6s .9s linear infinite;
}
@keyframes avail-draw {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes avail-shine {
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
}
.term-tip {
  position: absolute;
  left: calc(100% + 5px);
  top: -10px;
  width: 182px;
  z-index: 30;
  background: #ffffff;
  color: #374151;
  border: 1px solid #cbd5e1;
  border-left: 3px solid #3b82f6;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 10.5px;
  line-height: 14px;
  font-style: normal;
  text-align: left;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .2);
}
.term-tip {
  top: -30px;
}
.term-tip::before {
  content: "";
  position: absolute;
  left: -6px;
  top: 44px;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-left: 1px solid #cbd5e1;
  border-bottom: 1px solid #cbd5e1;
  transform: rotate(45deg);
}
</style>

---
hide: false
layout: default
---

# Тактики модифицируемости

<p class="text-[13px] leading-snug -mt-4 text-gray-500">
  Тактики модифицируемости отвечают за <strong class="text-gray-700">стоимость изменения</strong> и сгруппированы по трём задачам: локализовать изменение, не дать ему распространиться, отложить момент связывания (§ 5.3, с. 105–111).
</p>

<div class="mt-1">
<svg viewBox="0 0 900 286" class="w-full">
  <g stroke="#94a3b8" stroke-width="1.8" fill="none">
    <path d="M450,50 V74"/>
    <path d="M148,74 H748"/>
    <path d="M148,74 V92"/>
    <path d="M148,134 V142"/>
    <path d="M448,74 V92"/>
    <path d="M448,134 V142"/>
    <path d="M748,74 V92"/>
    <path d="M748,134 V142"/>
  </g>
  <rect x="330" y="2" width="240" height="48" rx="10" fill="#4f46e5"/>
  <text x="450" y="25" text-anchor="middle" fill="#ffffff" style="font-size:14px;font-weight:700">Модифицируемость</text>
  <text x="450" y="41" text-anchor="middle" fill="#c7d2fe" style="font-size:10px;font-style:italic">modifiability</text>
  <rect x="4" y="92" width="288" height="42" rx="8" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="2"/>
  <text x="148" y="112" text-anchor="middle" fill="#075985" style="font-size:12.5px;font-weight:700">Локализация изменений</text>
  <text x="148" y="126" text-anchor="middle" fill="#0284c7" style="font-size:9px;font-style:italic">localize modifications</text>
  <circle cx="10" cy="145" r="2.5" fill="#0ea5e9"/>
  <text x="18" y="148" fill="#334155" style="font-size:10px">Семантическая связность</text>
  <text x="18" y="159" fill="#94a3b8" style="font-size:8.5px;font-style:italic">maintain semantic coherence</text>
  <circle cx="10" cy="170" r="2.5" fill="#0ea5e9"/>
  <text x="18" y="173" fill="#334155" style="font-size:10px">Прогнозирование ожидаемых изменений</text>
  <text x="18" y="184" fill="#94a3b8" style="font-size:8.5px;font-style:italic">anticipate expected changes</text>
  <circle cx="10" cy="195" r="2.5" fill="#0ea5e9"/>
  <text x="18" y="198" fill="#334155" style="font-size:10px">Обобщение модуля</text>
  <text x="18" y="209" fill="#94a3b8" style="font-size:8.5px;font-style:italic">generalize the module</text>
  <circle cx="10" cy="220" r="2.5" fill="#0ea5e9"/>
  <text x="18" y="223" fill="#334155" style="font-size:10px">Ограничение возможных альтернатив</text>
  <text x="18" y="234" fill="#94a3b8" style="font-size:8.5px;font-style:italic">limit possible options</text>
  <circle cx="10" cy="245" r="2.5" fill="#0ea5e9"/>
  <text x="18" y="248" fill="#334155" style="font-size:10px">Абстрагирование общих служб</text>
  <text x="18" y="259" fill="#94a3b8" style="font-size:8.5px;font-style:italic">abstract common services</text>
  <rect x="304" y="92" width="288" height="42" rx="8" fill="#fef3c7" stroke="#fcd34d" stroke-width="2"/>
  <text x="448" y="112" text-anchor="middle" fill="#92400e" style="font-size:12.5px;font-weight:700">Предотвращение волнового эффекта</text>
  <text x="448" y="126" text-anchor="middle" fill="#d97706" style="font-size:9px;font-style:italic">prevent ripple effects</text>
  <circle cx="310" cy="145" r="2.5" fill="#f59e0b"/>
  <text x="318" y="148" fill="#334155" style="font-size:10px">Сокрытие информации</text>
  <text x="318" y="159" fill="#94a3b8" style="font-size:8.5px;font-style:italic">hide information</text>
  <circle cx="310" cy="170" r="2.5" fill="#f59e0b"/>
  <text x="318" y="173" fill="#334155" style="font-size:10px">Обслуживание существующих интерфейсов</text>
  <text x="318" y="184" fill="#94a3b8" style="font-size:8.5px;font-style:italic">maintain existing interfaces</text>
  <circle cx="310" cy="195" r="2.5" fill="#f59e0b"/>
  <text x="318" y="198" fill="#334155" style="font-size:10px">Ограничение каналов связи</text>
  <text x="318" y="209" fill="#94a3b8" style="font-size:8.5px;font-style:italic">restrict communication paths</text>
  <circle cx="310" cy="220" r="2.5" fill="#f59e0b"/>
  <text x="318" y="223" fill="#334155" style="font-size:10px">Введение посредника</text>
  <text x="318" y="234" fill="#94a3b8" style="font-size:8.5px;font-style:italic">use an intermediary</text>
  <rect x="604" y="92" width="288" height="42" rx="8" fill="#d1fae5" stroke="#6ee7b7" stroke-width="2"/>
  <text x="748" y="112" text-anchor="middle" fill="#065f46" style="font-size:12.5px;font-weight:700">Откладывание времени связывания</text>
  <text x="748" y="126" text-anchor="middle" fill="#059669" style="font-size:9px;font-style:italic">defer binding time</text>
  <circle cx="610" cy="145" r="2.5" fill="#10b981"/>
  <text x="618" y="148" fill="#334155" style="font-size:10px">Регистрация в период прогона</text>
  <text x="618" y="159" fill="#94a3b8" style="font-size:8.5px;font-style:italic">runtime registration</text>
  <circle cx="610" cy="170" r="2.5" fill="#10b981"/>
  <text x="618" y="173" fill="#334155" style="font-size:10px">Конфигурационные файлы</text>
  <text x="618" y="184" fill="#94a3b8" style="font-size:8.5px;font-style:italic">configuration files</text>
  <circle cx="610" cy="195" r="2.5" fill="#10b981"/>
  <text x="618" y="198" fill="#334155" style="font-size:10px">Полиморфизм</text>
  <text x="618" y="209" fill="#94a3b8" style="font-size:8.5px;font-style:italic">polymorphism</text>
  <circle cx="610" cy="220" r="2.5" fill="#10b981"/>
  <text x="618" y="223" fill="#334155" style="font-size:10px">Замена компонентов</text>
  <text x="618" y="234" fill="#94a3b8" style="font-size:8.5px;font-style:italic">component replacement</text>
  <circle cx="610" cy="245" r="2.5" fill="#10b981"/>
  <text x="618" y="248" fill="#334155" style="font-size:10px">Применение предписанных протоколов</text>
  <text x="618" y="259" fill="#94a3b8" style="font-size:8.5px;font-style:italic">adherence to defined protocols</text>
</svg>
</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-1">
  Источник:&nbsp;
  Bass, L. <em>Software Architecture in Practice</em> / L. Bass, P. Clements, R. Kazman. — Addison-Wesley, 2003. — § 5.3 «Modifiability Tactics», с. 105–111. — ISBN 0-321-15495-9. — Text : unmediated. — <a href="https://lccn.loc.gov/2003045300" class="underline" target="_blank" rel="noopener">lccn.loc.gov</a> · <a href="https://books.google.com/books?id=gaZQAAAAMAAJ" class="underline" target="_blank" rel="noopener">books.google.com</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/112">← Модифицируемость</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: false
layout: default
---

# Запись архитектурных решений. ADR

<p class="text-[13px] leading-snug -mt-4 text-gray-500">
  <strong class="text-gray-700">ADR (Architecture Decision Record)</strong> — одна запись об одном решении: контекст, решение, последствия (формат M. Nygard, 2011).
</p>

<div class="grid grid-cols-5 gap-3 mt-0.5">

  <!-- ФАЙЛ-СТРУКТУРА ADR -->
  <div class="col-span-3">
    <div class="rounded-lg bg-gray-900 p-2.5 font-mono text-[10.5px] leading-[12px]">
      <div class="text-gray-500">docs/adr/0007-храним-пароли-в-виде-хэшей.md</div>
      <div class="mt-0.5 text-sky-300"><span class="text-gray-500">#</span> ADR-0007: <span class="text-white font-semibold">ХРАНЕНИЕ ПАРОЛЕЙ В ВИДЕ ХЭШЕЙ</span></div>
      <div class="pl-3 text-gray-400">Краткое описание сути архитектурного решения</div>
      <div class="mt-0.5 text-sky-300"><span class="text-gray-500">##</span> СТАТУС: <span class="text-emerald-300">ПРИНЯТО</span></div>
      <div class="pl-3 text-gray-400">Предложено | Принято | Заменено</div>
      <div class="mt-0.5 text-sky-300"><span class="text-gray-500">##</span> КОНТЕКСТ</div>
      <div class="pl-3 text-gray-400">Что заставило меня принять такое решение?</div>
      <div class="mt-0.5 text-sky-300"><span class="text-gray-500">##</span> РЕШЕНИЕ</div>
      <div class="pl-3 text-gray-400">Решение и соответствующее обоснование</div>
      <div class="mt-0.5 text-sky-300"><span class="text-gray-500">##</span> ПОСЛЕДСТВИЯ</div>
      <div class="pl-3 text-gray-400">На что повлияет данное решение?</div>
      <div class="mt-0.5 text-sky-300"><span class="text-gray-500">##</span> КОМПЛАЕНС</div>
      <div class="pl-3 text-gray-400">Как я обеспечу соблюдение этого решения?</div>
      <div class="mt-0.5 text-sky-300"><span class="text-gray-500">##</span> ПРИМЕЧАНИЯ</div>
      <div class="pl-3 text-gray-400">Метаданные для этого решения (автор и т. п.)</div>
    </div>
  </div>

  <!-- ПОЯСНЕНИЯ -->
  <div class="col-span-2 flex flex-col gap-2">
    <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-2.5">
      <div class="text-[11.5px] font-semibold text-indigo-900 leading-[14px]">Одна запись — одно решение</div>
      <p class="text-[10.5px] leading-[14px] text-gray-700 mt-1">
        Решение фиксируют один раз — с контекстом и обоснованием.
      </p>
    </div>
    <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-2.5">
      <div class="text-[11.5px] font-semibold text-emerald-900 leading-[14px]">Жизненный цикл статуса</div>
      <div class="flex items-center gap-1 mt-1.5 text-[10px]">
        <span class="px-1.5 py-0.5 rounded bg-white border border-emerald-300 text-emerald-800">Предложено</span>
        <span class="text-emerald-500">→</span>
        <span class="px-1.5 py-0.5 rounded bg-emerald-500 text-white">Принято</span>
        <span class="text-emerald-500">→</span>
        <span class="px-1.5 py-0.5 rounded bg-white border border-emerald-300 text-emerald-800">Заменено</span>
      </div>
      <p class="text-[10.5px] leading-[14px] text-gray-700 mt-1.5">
        Решение не отменяют, а заменяют новой записью (<em>supersedes</em>).
      </p>
    </div>
    <div class="bg-gray-50 border-2 border-gray-200 rounded-xl p-2.5">
      <div class="text-[11.5px] font-semibold text-gray-800 leading-[14px]">Как это живёт в проекте</div>
      <ul class="text-[10.5px] leading-[14px] text-gray-700 mt-1 space-y-0.5">
        <li>Markdown-файл рядом с кодом, в <span class="font-mono text-[9.5px]">docs/adr/</span></li>
        <li>приём через ревью pull request, как и код</li>
        <li>комплаенс проверяется тестами и ревью</li>
      </ul>
    </div>
  </div>

</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-1">
  Источник:&nbsp;
  Ричардс, М. <em>Фундаментальный подход к программной архитектуре</em> / М. Ричардс, Н. Форд. — 2-е изд., 2023. — ISBN 978-601-12-6107-4. — <a href="https://www.litres.ru/book/mark-richards-326443/fundamentalnyy-podhod-k-programmnoy-arhitekture-patte-69434368/" class="underline" target="_blank" rel="noopener">litres.ru</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/113">← Тактики модифицируемости</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: false
layout: default
---

# Антипаттерны архитектурных решений

<p class="text-[13px] leading-snug -mt-4 text-gray-500">
  <strong class="text-gray-700">Антипаттерн</strong> — «то, что в начале кажется хорошей идеей, но ведёт в тупик».
  Три антипаттерна принятия архитектурных решений образуют цепочку: преодоление первого ведёт ко второму,
  второго — к третьему.
</p>

<div class="grid grid-cols-3 gap-3 mt-1">

  <!-- 1. Covering Your Assets -->
  <div class="bg-rose-50 border-2 border-rose-300 rounded-xl p-2">
    <div class="flex items-center gap-2 mb-1 pb-1 border-b border-rose-200">
      <span class="flex-shrink-0 bg-rose-500 text-white rounded-lg w-7 h-7 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-rose-900 text-[13px] block leading-[16px]">Covering Your Assets</strong>
        <span class="text-[10px] text-rose-600 italic block leading-[12px]">излишняя перестраховка</span>
      </div>
    </div>
    <div class="space-y-0.5 text-[10.5px] leading-[14px]">
      <p class="text-gray-800">
        <span class="text-rose-500 font-bold">Суть.</span>
        Архитектор <em>избегает или откладывает</em> решение из страха ошибиться — «застраховаться»
        на все случаи.
      </p>
      <p class="text-gray-800">
        <span class="text-rose-500 font-bold">Симптом.</span>
        Решение не принято, разработка стоит; отсрочка растёт (соседний антипаттерн —
        <em>Analysis Paralysis</em>).
      </p>
      <p class="text-gray-800">
        <span class="text-rose-500 font-bold">Контрпаттерн.</span>
        Принимать решение в <em>последний ответственный момент</em> (данных хватает для обоснования,
        но команда не ждёт) и сотрудничать с командами, чтобы быстро его скорректировать.
      </p>
    </div>
  </div>

  <!-- 2. Groundhog Day -->
  <div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-2">
    <div class="flex items-center gap-2 mb-1 pb-1 border-b border-amber-200">
      <span class="flex-shrink-0 bg-amber-500 text-white rounded-lg w-7 h-7 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="1 4 1 10 7 10"/>
          <polyline points="23 20 23 14 17 14"/>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-amber-900 text-[13px] block leading-[16px]">Groundhog Day</strong>
        <span class="text-[10px] text-amber-600 italic block leading-[12px]">день сурка</span>
      </div>
    </div>
    <div class="space-y-0.5 text-[10.5px] leading-[14px]">
      <p class="text-gray-800">
        <span class="text-amber-500 font-bold">Суть.</span>
        Решение принято, но <em>не обосновано</em>: никто не знает, почему, и его обсуждают
        снова и снова.
      </p>
      <p class="text-gray-800">
        <span class="text-amber-500 font-bold">Симптом.</span>
        Одно и то же решение пересматривается по кругу вместо того, чтобы двигаться дальше.
      </p>
      <p class="text-gray-800">
        <span class="text-amber-500 font-bold">Контрпаттерн.</span>
        Фиксировать решение с техническим и бизнес-обоснованием (ADR): затраты, время вывода
        на рынок, удовлетворённость пользователя, стратегическое позиционирование.
      </p>
    </div>
  </div>

  <!-- 3. Email-Driven Architecture -->
  <div class="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-2">
    <div class="flex items-center gap-2 mb-1 pb-1 border-b border-indigo-200">
      <span class="flex-shrink-0 bg-indigo-500 text-white rounded-lg w-7 h-7 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-indigo-900 text-[13px] block leading-[16px]">Email-Driven Architecture</strong>
        <span class="text-[10px] text-indigo-600 italic block leading-[12px]">архитектура, управляемая имейлами</span>
      </div>
    </div>
    <div class="space-y-0.5 text-[10.5px] leading-[14px]">
      <p class="text-gray-800">
        <span class="text-indigo-500 font-bold">Суть.</span>
        Решение живёт <em>в письме</em>: его теряют, забывают или не замечают — значит, реализовать
        его невозможно.
      </p>
      <p class="text-gray-800">
        <span class="text-indigo-500 font-bold">Симптом.</span>
        Почта — хороший инструмент коммуникации, но плохое хранилище решений: у решения
        появляются «источники правды».
      </p>
      <p class="text-gray-800">
        <span class="text-indigo-500 font-bold">Контрпаттерн.</span>
        В письме — только суть и контекст решения и ссылка на единый источник истины (ADR);
        уведомлять лишь тех, кого решение затрагивает.
      </p>
    </div>
  </div>

</div>

<!-- Источник -->
<div class="text-[9.5px] text-gray-500 leading-tight italic text-center mt-0.5">
  Источник:&nbsp;
  Richards, M. <em>Fundamentals of Software Architecture: An Engineering Approach</em> / M. Richards, N. Ford. — Sebastopol : O&apos;Reilly Media, 2020. — 432 p. — ISBN 978-1492043454. — Гл. 19 «Architecture Decisions», § «Architecture Decision Anti-Patterns», с. 281–284. — Text : unmediated. — <a href="https://www.oreilly.com/library/view/fundamentals-of-software/1492043451/" class="underline" target="_blank" rel="noopener">oreilly.com</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/114">← Запись архитектурных решений. ADR</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>
