---
hide: false
layout: center
---

# Архитектура ПО

<div class="text-xl text-gray-400 font-light mt-3 tracking-[0.2em] uppercase">Часть 1. Определения. Архитектурно-значимые требования</div>
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

# Что такое архитектура

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Единого определения нет — на архитектуру смотрят с разных сторон. Два классических определения:
</p>

<!-- Цитата 1 -->
<div v-click class="mt-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg p-4 flex gap-3">
  <span class="text-4xl leading-none text-indigo-300 font-serif select-none">«</span>
  <div>
    <div class="text-lg text-gray-800 leading-[26px]">
      Архитектура программы или вычислительной системы — это множество структур системы, которые объединяют программные элементы, их внешне видимые свойства и связи между ними
    </div>
    <div class="text-xs text-gray-500 mt-2 leading-[17px]">
      — Len Bass, Paul Clements, Rick Kazman (CMU SEI). <em>Архитектура ПО на практике</em>. 2-е изд.
    </div>
  </div>
</div>

<!-- Цитата 2 -->
<div v-click class="mt-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-4 flex gap-3">
  <span class="text-4xl leading-none text-emerald-300 font-serif select-none">«</span>
  <div>
    <div class="text-lg text-gray-800 leading-[26px]">
      Набор ключевых решений в системе, которые избавляют разработчиков от ненужной креативности
    </div>
    <div class="text-xs text-gray-500 mt-2 leading-[17px]">
      — Desmond D'Souza, Alan Cameron Wills. <em>Objects, Components, and Frameworks With UML: The Catalysis Approach</em>
    </div>
  </div>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/87">← Архитектура ПО</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: false
layout: default
---

# Архитектура ПО по IEEE Std 1471-2000

<p class="text-sm leading-snug -mt-3 text-gray-500">
<em>Recommended Practice for Architectural Description of Software-Intensive Systems</em> — стандарт, определяющий терминологию и практики описания архитектуры программно-нагруженных систем.
</p>

<!-- Главное определение -->
<div class="mt-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg p-3 relative">
  <div class="absolute top-2 right-2 flex items-center gap-1 bg-white border border-indigo-200 rounded px-2 py-1 shadow-sm">
    <span class="font-mono font-bold text-indigo-800 text-sm">IEEE</span>
    <span class="text-[9px] text-gray-500 font-mono leading-none">Std<br>1471<br>2000</span>
  </div>
  <p class="text-[13px] text-gray-800 leading-relaxed pr-24">
    <strong class="text-indigo-900">Архитектура</strong> — <em>фундаментальная организация системы</em>, воплощённая в её компонентах, их взаимосвязях друг с другом и со средой, а также принципах, определяющих её проектирование и эволюцию.
  </p>
  <div class="text-[10px] text-gray-500 italic mt-2">
    Перевод термина 3.5 «architecture» из IEEE Std 1471-2000.
  </div>
</div>

<!-- Ключевые термины -->
<div class="grid grid-cols-3 gap-2 mt-3 text-xs">

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">Stakeholder</div>
    <div class="text-gray-500 text-[10px] mt-0.5">заинтересованная сторона</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">Лицо, группа или организация, имеющие интересы относительно системы.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">Concern</div>
    <div class="text-gray-500 text-[10px] mt-0.5">интерес / забота</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">То, что важно для удовлетворения заинтересованной стороны в системе.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">Mission</div>
    <div class="text-gray-500 text-[10px] mt-0.5">миссия</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">Роль или назначение системы в её среде.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">Architectural Description</div>
    <div class="text-gray-500 text-[10px] mt-0.5">архитектурное описание (AD)</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">Коллекция продуктов, документирующих архитектуру.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">Viewpoint</div>
    <div class="text-gray-500 text-[10px] mt-0.5">точка зрения</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">Спецификация соглашений для построения и использования представлений.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-2">
    <div class="font-semibold text-indigo-700 text-[11px] uppercase tracking-wide">View</div>
    <div class="text-gray-500 text-[10px] mt-0.5">представление</div>
    <p class="text-gray-700 text-[11px] leading-snug mt-1">Репрезентация всей системы с позиции определённого набора интересов.</p>
  </div>

</div>

<!-- Атрибуция -->
<div class="mt-3 text-[9px] text-gray-400 leading-tight text-center italic">
  IEEE, IEEE Std и название стандарта являются торговыми марками Institute of Electrical and Electronics Engineers, Inc.
  Цитата термина приведена в учебных целях (fair use). Логотип IEEE не воспроизводится во избежание нарушения товарных знаков.
</div>


---
hide: false
layout: default
---

# Но все не так просто с архитектурой

<!-- Карта тем по архитектуре ПО -->
<div class="flex items-center justify-center mt-2">
  <img src="/Software_Architecture_MindMap.png" alt="Карта тем по архитектуре программного обеспечения: архитектурные основы, архитектурные стили и паттерны, интеграции, архитектура предприятия и бизнес, практики и компетенции, управление и технологическая среда" class="rounded shadow-md border border-gray-200 max-h-[380px] max-w-full object-contain bg-white" />
</div>

<!-- Источник -->
<div class="text-[10px] text-gray-500 leading-tight italic text-center mt-2">
  Источник:&nbsp;
  Richards, M. <em>Fundamentals of Software Architecture: An Engineering Approach</em> / M. Richards, N. Ford. — Sebastopol : O&apos;Reilly Media, 2020. — 432 p. — ISBN 978-1492043454. — Text : unmediated. — <a href="https://www.oreilly.com/library/view/fundamentals-of/9781492043454/" class="underline" target="_blank" rel="noopener">oreilly.com</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/88">← Что такое архитектура</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: false
layout: default
---

# Атрибуты качества системы

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Качество программной системы складывается из <strong class="text-gray-700">групп атрибутов</strong>. Именно из них формулируются архитектурно-значимые требования, и именно они определяют, какие архитектурные решения допустимы.
</p>

<div class="grid grid-cols-2 gap-3 mt-3">

  <!-- 1. Эксплуатационные -->
  <div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-2 pb-1.5 border-b border-blue-200">
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

  <!-- 2. Пользовательский опыт -->
  <div class="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-2 pb-1.5 border-b border-emerald-200">
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

  <!-- 3. Предотвращение рисков -->
  <div class="bg-orange-50 border-2 border-orange-300 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-2 pb-1.5 border-b border-orange-200">
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

  <!-- 4. Рост и эволюция -->
  <div class="bg-purple-50 border-2 border-purple-300 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-2 pb-1.5 border-b border-purple-200">
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

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/90">← IEEE Std 1471-2000</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: false
layout: default
---

# Цели непосредственно связаны с требованиями

<p class="text-sm leading-snug -mt-3 text-gray-500">
  <strong class="text-gray-700">Цель</strong> достигается за счёт требований к качеству, а каждое требование обосновывается той целью, ради которой вводится. Связь двусторонняя.
</p>

<!-- Схема: цель ↔ ключевое требование -->
<div class="flex items-stretch gap-3 mt-4">

  <!-- Цель -->
  <div class="w-[320px] flex-shrink-0 bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
    <div class="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-blue-200">
      <span class="flex-shrink-0 bg-blue-500 text-white rounded-lg w-9 h-9 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-blue-900 text-lg block leading-[20px]">Цель</strong>
        <span class="text-[11px] text-blue-600 italic block leading-[13px]">goal</span>
      </div>
    </div>
    <div class="text-sm text-gray-800 leading-[19px]">
      Обеспечить покрытие услугой все регионы страны к концу второго года эксплуатации
    </div>
  </div>

  <!-- Стрелки: цель → требование и требование → цель -->
  <div class="w-[204px] flex-shrink-0 flex flex-col gap-5 justify-center">
    <!-- За счет: цель → требование -->
    <div>
      <div class="text-[11px] font-semibold text-blue-700 text-center leading-[14px] mb-1.5">за счёт</div>
      <svg viewBox="0 0 204 22" width="204" height="22" class="block" aria-hidden="true">
        <line x1="4" y1="11" x2="182" y2="11" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
        <path d="M182 3 L202 11 L182 19 Z" fill="#3b82f6"/>
      </svg>
    </div>
    <!-- Для достижения: требование → цель -->
    <div>
      <div class="text-[11px] font-semibold text-emerald-700 text-center leading-[14px] mb-1.5">для достижения</div>
      <svg viewBox="0 0 204 22" width="204" height="22" class="block" aria-hidden="true">
        <line x1="200" y1="11" x2="22" y2="11" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
        <path d="M22 3 L2 11 L22 19 Z" fill="#10b981"/>
      </svg>
    </div>
  </div>

  <!-- Ключевое требование -->
  <div class="w-[320px] flex-shrink-0 bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4">
    <div class="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-emerald-200">
      <span class="flex-shrink-0 bg-emerald-500 text-white rounded-lg w-9 h-9 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="9" y1="13" x2="15" y2="13"/>
          <line x1="9" y1="17" x2="13" y2="17"/>
        </svg>
      </span>
      <div class="leading-tight">
        <strong class="text-emerald-900 text-lg block leading-[20px]">Ключевое требование</strong>
        <span class="text-[11px] text-emerald-600 italic block leading-[13px]">quality attribute</span>
      </div>
    </div>
    <div class="text-sm text-gray-800 leading-[19px]">
      Система должна обладать хорошей масштабируемостью
    </div>
  </div>

</div>

<!-- Примеры: цель и требование в одном предложении -->
<div class="grid grid-cols-2 gap-4 mt-4">

  <!-- Пример 1: цель достигается за счёт требования -->
  <div class="bg-white border border-gray-200 rounded-lg p-3.5">
    <div class="text-[10px] uppercase tracking-wider font-semibold text-gray-400 mb-1">Цель — за счёт требования</div>
    <div class="text-[13px] text-gray-800 leading-[18px]">
      Обеспечить покрытие услугой все регионы страны к концу второго года эксплуатации
      <strong class="text-blue-700">за счёт</strong>
      масштабируемости инфраструктуры и приложения, а также гибкости настройки правил оказания услуг под локальные нормативные акты
    </div>
  </div>

  <!-- Пример 2: требование обосновывается целью -->
  <div class="bg-white border border-gray-200 rounded-lg p-2.5">
    <div class="text-[10px] uppercase tracking-wider font-semibold text-gray-400 mb-1">Требование — для достижения цели</div>
    <div class="text-[13px] text-gray-800 leading-[18px]">
      Система должна обладать хорошей масштабируемостью
      <strong class="text-emerald-700">для достижения</strong>
      цели по выходу на рынок всей страны и для контролируемого роста затрат на ИТ-инфраструктуру
    </div>
  </div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/91">← Атрибуты качества</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: false
layout: default
---

# Архитектурно-значимые требования

<div class="flex items-center justify-center mt-2">
  <img src="/ASR.webp" alt="Схема архитектурно-значимых требований и их взаимодействия с основными функциональными требованиями, требованиями качества системы, жизненным циклом системы и ограничениями, формирующими образ системы" class="rounded shadow-md border border-gray-200 max-h-[396px] max-w-[720px] object-contain bg-white" />
</div>

<div class="text-[9px] text-gray-400 leading-tight italic text-center mt-1.5">
  На схеме: архитектурно-значимые требования (ASR) и их взаимодействие с функциональными требованиями, NFRs, жизненным циклом и ограничениями системы.
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/92">← Цели и требования</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>

---
hide: false
layout: default
---

# Quality Attributes (ISO/IEC 25010)

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Модель качества по ISO/IEC 25010: <strong class="text-gray-700">восемь характеристик</strong>, каждая раскрывается набором измеряемых подхарактеристик.
</p>

<!-- Модель качества ISO/IEC 25010 -->
<div class="flex items-center justify-center mt-2">
  <img src="/Quality_Attributes_ISO_25010.png" alt="Модель качества по ISO/IEC 25010: качество системы и программной продукции раскрывается на восемь характеристик — функциональная пригодность, уровень производительности, совместимость, удобство использования, надёжность, защищённость, сопровождаемость и переносимость" class="rounded shadow-md border border-gray-200 max-w-[840px] object-contain bg-white" />
</div>

<!-- Источник -->
<div class="text-[10px] text-gray-500 leading-tight italic text-center mt-2">
  Источник:&nbsp;
  ГОСТ Р ИСО/МЭК 25010-2015. <em>Информационные технологии. Системная и программная инженерия. Требования и оценка качества систем и программного обеспечения (SQuaRE). Модели качества систем и программных продуктов</em> : национальный стандарт Российской Федерации : дата введения 2016-01-01 / Федеральное агентство по техническому регулированию и метрологии. – Москва : Стандартинформ, 2015. – 24 с. – Текст : непосредственный. — <a href="https://base.garant.ru/71333208/" class="underline" target="_blank" rel="noopener">base.garant.ru</a>
</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/93">← Архитектурно-значимые требования</a>
  <a href="/lesson10">Занятие 10 →</a>
</div>


---
hide: false
layout: default
---

# Хотим безопасную систему. Что хотим…

<div class="grid grid-cols-2 gap-3 mt-3">

<!-- 1. Аутентификация -->
<div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="flex-shrink-0 bg-blue-500 text-white rounded-lg w-9 h-9 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <polyline points="16 11 18 13 22 9"/>
      </svg>
    </span>
    <strong class="text-blue-900 text-base">Аутентификация</strong>
  </div>
  <p class="text-xs leading-relaxed">Проверяет подлинность программы или человека, которые пытаются получить доступ к приложению</p>
</div>

<!-- 2. Авторизация -->
<div class="bg-green-50 border-2 border-green-300 rounded-xl p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="flex-shrink-0 bg-green-500 text-white rounded-lg w-9 h-9 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    </span>
    <strong class="text-green-900 text-base">Авторизация</strong>
  </div>
  <p class="text-xs leading-relaxed">Проверяет, позволено ли субъекту выполнять запрошенную операцию с заданными данными</p>
</div>

<!-- 3. Аудит -->
<div class="bg-orange-50 border-2 border-orange-300 rounded-xl p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="flex-shrink-0 bg-orange-500 text-white rounded-lg w-9 h-9 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
        <line x1="9" y1="17" x2="15" y2="17"/>
        <line x1="9" y1="9" x2="11" y2="9"/>
      </svg>
    </span>
    <strong class="text-orange-900 text-base">Аудит</strong>
  </div>
  <p class="text-xs leading-relaxed">Отслеживает операции, выполняемые субъектом, чтобы обнаруживать проблемы с безопасностью</p>
</div>

<!-- 4. Безопасное межсервисное взаимодействие -->
<div class="bg-purple-50 border-2 border-purple-300 rounded-xl p-3">
  <div class="flex items-center gap-2 mb-2">
    <span class="flex-shrink-0 bg-purple-500 text-white rounded-lg w-9 h-9 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    </span>
    <strong class="text-purple-900 text-base leading-tight">Безопасное межсервисное взаимодействие</strong>
  </div>
  <p class="text-xs leading-relaxed">В идеале любое взаимодействие субъектом внутри сервисов и за их пределами должно производиться поверх TLS</p>
</div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson6">← Занятие 6</a>
  <a href="/lesson8">Занятие 8 →</a>
</div>