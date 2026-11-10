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

---
hide: false
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
hide: false
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
hide: false
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
hide: false
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

---
hide: false
layout: default
---

# Современная архитектура приложения

<p class="text-sm leading-snug -mt-3 text-gray-500">
  Кликни на <strong class="text-gray-700">скрытый блок</strong>, чтобы проверить свою догадку — что за ним спрятано в архитектуре современного приложения.
</p>
<!-- 2 колонки -->
<div class="grid grid-cols-2 gap-4 mt-2">

  <!-- =============== ЛЕВАЯ КОЛОНКА: ДИАГРАММА =============== -->
  <div>
    <div class="text-[10px] text-gray-500 mb-1 flex items-center gap-2">
      <span class="font-mono text-gray-700">Архитектурная схема</span>
      <span class="text-gray-300">·</span>
      <span>кликни чтобы раскрыть</span>
    </div>
    <div class="relative bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-3" style="min-height: 360px;">
      <!-- LOAD BALANCER (скрыт) -->
      <div class="flex justify-center mb-1">
        <div @click="reveal('load_balancer')"
             :class="revealed.load_balancer ? 'border-emerald-400 bg-emerald-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
             class="border-2 rounded-lg px-3 py-1.5 min-w-[170px] text-center transition-all select-none">
          <div v-if="!revealed.load_balancer">
            <div class="text-lg text-gray-400 leading-none">?</div>
            <div class="text-[9px] text-gray-400 mt-0.5">кликни</div>
          </div>
          <div v-else>
            <div class="text-[11px] font-bold text-emerald-700">⚖ Load Balancer</div>
            <div class="text-[9px] text-emerald-600">распределение нагрузки</div>
          </div>
        </div>
      </div>
      <div class="flex justify-center text-gray-400 text-[10px] leading-none">▼</div>
      <!-- API GATEWAY (скрыт) -->
      <div class="flex justify-center my-1">
        <div @click="reveal('api_gateway')"
             :class="revealed.api_gateway ? 'border-blue-400 bg-blue-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
             class="border-2 rounded-lg px-3 py-1.5 min-w-[170px] text-center transition-all select-none">
          <div v-if="!revealed.api_gateway">
            <div class="text-lg text-gray-400 leading-none">?</div>
            <div class="text-[9px] text-gray-400 mt-0.5">кликни</div>
          </div>
          <div v-else>
            <div class="text-[11px] font-bold text-blue-700">🔌 API Gateway</div>
            <div class="text-[9px] text-blue-600">единая точка входа</div>
          </div>
        </div>
      </div>
      <div class="flex justify-center text-gray-400 text-[10px] leading-none">▼</div>
      <!-- 3 МИКРОСЕРВИСА (всегда видны) -->
      <div class="flex justify-around gap-2 my-1">
        <div class="flex-1 bg-blue-500 text-white rounded-lg p-2 text-center shadow-sm">
          <div class="text-[10px] font-bold">Users</div>
          <div class="text-[9px] opacity-80">микросервис</div>
        </div>
        <div class="flex-1 bg-blue-500 text-white rounded-lg p-2 text-center shadow-sm">
          <div class="text-[10px] font-bold">Orders</div>
          <div class="text-[9px] opacity-80">микросервис</div>
        </div>
        <div class="flex-1 bg-blue-500 text-white rounded-lg p-2 text-center shadow-sm">
          <div class="text-[10px] font-bold">Payments</div>
          <div class="text-[9px] opacity-80">микросервис</div>
        </div>
      </div>
      <div class="flex justify-center text-gray-400 text-[10px] leading-none">▼</div>
      <!-- MESSAGE BROKER (скрыт) -->
      <div class="flex justify-center mt-1">
        <div @click="reveal('message_broker')"
             :class="revealed.message_broker ? 'border-purple-400 bg-purple-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
             class="border-2 rounded-lg px-3 py-1.5 min-w-[170px] text-center transition-all select-none">
          <div v-if="!revealed.message_broker">
            <div class="text-lg text-gray-400 leading-none">?</div>
            <div class="text-[9px] text-gray-400 mt-0.5">кликни</div>
          </div>
          <div v-else>
            <div class="text-[11px] font-bold text-purple-700">📨 Message Broker</div>
            <div class="text-[9px] text-purple-600">асинхронная коммуникация</div>
          </div>
        </div>
      </div>
      <!-- SERVICE DISCOVERY (скрыт, сбоку) -->
      <div class="absolute right-3 top-[200px]">
        <div @click="reveal('service_discovery')"
             :class="revealed.service_discovery ? 'border-amber-400 bg-amber-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
             class="border-2 rounded-lg px-2.5 py-1.5 min-w-[120px] text-center transition-all select-none">
          <div v-if="!revealed.service_discovery">
            <div class="text-lg text-gray-400 leading-none">?</div>
            <div class="text-[9px] text-gray-400 mt-0.5">кликни</div>
          </div>
          <div v-else>
            <div class="text-[11px] font-bold text-amber-700">🔍 Service Discovery</div>
            <div class="text-[9px] text-amber-600">реестр сервисов</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Счётчик -->
  <div class="mt-1 inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-40 py-1 rounded-full text-xs">
    <span class="text-indigo-700 font-medium">Отгадано:</span>
    <span class="font-bold text-indigo-600 tabular-nums">{{ count }} / 9</span>
  </div>
  </div>

  <!-- =============== ПРАВАЯ КОЛОНКА: 5 ТЕКСТОВЫХ БЛОКОВ =============== -->
  <div>
    <div class="text-[10px] text-gray-500 mb-1 flex items-center gap-2">
      <span class="font-mono text-gray-700">Архитектурные практики</span>
      <span class="text-gray-300">·</span>
      <span>кликни чтобы раскрыть</span>
    </div>
    <div class="space-y-1.5">
      <!-- 1. API и идемпотентность -->
      <div @click="reveal('api_idempotency')"
           :class="revealed.api_idempotency ? 'border-blue-400 bg-blue-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
           class="border-2 rounded-lg px-2 py-1 transition-all select-none">
        <div v-if="!revealed.api_idempotency" class="flex items-center gap-1 text-[10px] text-gray-400 leading-none">
          <span class="text-sm">?</span>
          <span>кликни чтобы раскрыть</span>
        </div>
        <div v-else>
          <div class="flex items-center gap-0.5 leading-none mb-0">
            <span class="text-blue-600 font-bold text-[10px]">✓</span>
            <strong class="text-blue-900 text-[10px]">API и идемпотентность</strong>
          </div>
          <p class="text-[9.5px] text-gray-700 leading-tight">
            Повторный вызов даёт тот же результат. Используем ключи идемпотентности.
          </p>
        </div>
      </div>
      <!-- 2. Таймауты и ретраи -->
      <div @click="reveal('timeouts')"
           :class="revealed.timeouts ? 'border-amber-400 bg-amber-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
           class="border-2 rounded-lg px-2 py-1 transition-all select-none">
        <div v-if="!revealed.timeouts" class="flex items-center gap-1 text-[10px] text-gray-400 leading-none">
          <span class="text-sm">?</span>
          <span>кликни чтобы раскрыть</span>
        </div>
        <div v-else>
          <div class="flex items-center gap-0.5 leading-none mb-0">
            <span class="text-amber-600 font-bold text-[10px]">✓</span>
            <strong class="text-amber-900 text-[10px]">Обработка таймаутов и ретраи</strong>
          </div>
          <p class="text-[9.5px] text-gray-700 leading-tight">
            Таймауты, exponential backoff, circuit breaker. Защита от каскадных отказов.
          </p>
        </div>
      </div>
      <!-- 3. CI/CD pipeline с мини-схемой -->
      <div @click="reveal('cicd')"
           :class="revealed.cicd ? 'border-emerald-400 bg-emerald-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
           class="border-2 rounded-lg p-2 transition-all select-none">
        <div v-if="!revealed.cicd" class="flex items-center gap-2 text-[11px] text-gray-400">
          <span class="text-base leading-none">?</span>
          <span>кликни чтобы раскрыть</span>
        </div>
        <div v-else>
          <div class="flex items-center gap-1.5 mb-1">
            <span class="text-emerald-600 font-bold text-[11px]">✓</span>
            <strong class="text-emerald-900 text-[11px]">CI/CD pipeline</strong>
          </div>
          <div class="flex items-center gap-0.5 text-[9px] font-mono leading-tight">
            <span class="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded">commit</span>
            <span class="text-gray-400">→</span>
            <span class="px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">build</span>
            <span class="text-gray-400">→</span>
            <span class="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded">test</span>
            <span class="text-gray-400">→</span>
            <span class="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded">deploy</span>
          </div>
        </div>
      </div>
      <!-- 4. Инфраструктура деплоя -->
      <div @click="reveal('infrastructure')"
           :class="revealed.infrastructure ? 'border-slate-400 bg-slate-100 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
           class="border-2 rounded-lg p-2 transition-all select-none">
        <div v-if="!revealed.infrastructure" class="flex items-center gap-2 text-[11px] text-gray-400">
          <span class="text-base leading-none">?</span>
          <span>кликни чтобы раскрыть</span>
        </div>
        <div v-else>
          <div class="flex items-center gap-1.5 mb-1">
            <span class="text-slate-700 font-bold text-[11px]">✓</span>
            <strong class="text-slate-900 text-[11px]">Инфраструктура деплоя</strong>
          </div>
          <div class="grid grid-cols-3 gap-1">
            <div class="bg-white border border-slate-300 rounded px-1 py-0.5 text-center">
              <div class="text-[9px] font-semibold text-slate-700">VM</div>
              <div class="text-[8px] text-slate-500">virtual</div>
            </div>
            <div class="bg-white border border-slate-300 rounded px-1 py-0.5 text-center">
              <div class="text-[9px] font-semibold text-slate-700">BareMetal</div>
              <div class="text-[8px] text-slate-500">physical</div>
            </div>
            <div class="bg-white border border-slate-300 rounded px-1 py-0.5 text-center">
              <div class="text-[9px] font-semibold text-slate-700">Container</div>
              <div class="text-[8px] text-slate-500">docker</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 5. Мониторинг, журналирование, аудит -->
      <div @click="reveal('monitoring')"
           :class="revealed.monitoring ? 'border-rose-400 bg-rose-50 cursor-default' : 'border-dashed border-gray-400 bg-white/70 cursor-pointer hover:bg-white'"
           class="border-2 rounded-lg px-2 py-2 transition-all select-none">
        <div v-if="!revealed.monitoring" class="flex items-center gap-1 text-[10px] text-gray-400 leading-none">
          <span class="text-sm">?</span>
          <span>кликни чтобы раскрыть</span>
        </div>
        <div v-else>
          <div class="flex items-center gap-1 leading-none mb-0">
            <span class="text-sm leading-none">📊</span>
            <strong class="text-rose-900 text-[10px]">Мониторинг, журналирование, аудит</strong>
          </div>
          <p class="text-[9.5px] text-gray-700 leading-tight">
            Метрики (Prometheus), логи (ELK/Loki), трассировка (Jaeger), audit trail для безопасности.
          </p>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="abs-b m-4 flex justify-between items-center text-sm opacity-70">
  <a href="/lesson9">← Занятие 9</a>
  <a href="/lesson11">Занятие 11 →</a>
</div>

<script setup>
import { reactive, computed } from 'vue'

const revealed = reactive({
  api_gateway: false,
  service_discovery: false,
  load_balancer: false,
  message_broker: false,
  api_idempotency: false,
  timeouts: false,
  cicd: false,
  infrastructure: false,
  monitoring: false,
})

const count = computed(() => Object.values(revealed).filter(Boolean).length)

const reveal = (key) => {
  revealed[key] = true
}
</script>