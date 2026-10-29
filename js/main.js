/* ===== JL AUDIO AND EVENTS — JAVASCRIPT ===== */

// ===== DATA =====
const WHATSAPP_NUMBER = '5491136727858';

// nivel: 1–5 para el medidor tipo ecualizador · chips: lo destacado de cada armado
const armadosData = [
  {
    id: 0,
    nombre: 'Triángulo',
    subtitulo: 'Estructura icónica de JL',
    insignia: true,
    chips: ['3 o 4 m por lado', 'Tarima opcional', 'Mesa a elección', 'Iluminación integrada'],
    cover: 'img/triangulo_rojo.jpg',
    media: [
      { type: 'img',   src: 'img/triangulo_rojo.jpg' },
      { type: 'img',   src: 'img/triangulo1.jpg' },
      { type: 'img',   src: 'img/triangulo4.jpg' },
      { type: 'img',   src: 'img/triangulo2.jpg' }
    ],
    precio: '',
    descripcion: 'La estructura insignia de JL. Armado personalizable con opciones de tamaño y configuración para cada tipo de evento.',
    items: [
      'Tamaño: 3 o 4 metros por lado',
      'Con o sin tarima para el DJ <em>(tarima disponible en versión 4m)</em>',
      'Mesa Negra o Mesa Triangular',
      'Estructura metálica premium',
      'Iluminación integrada',
      'Transporte y montaje incluido'
    ],
    nota: 'Armado 100% personalizable. Elegís el tamaño, la tarima y la mesa. Si querés la tarima, la estructura es de 4 metros por lado.'
  },
  {
    id: 1,
    nombre: 'Set Completo A',
    subtitulo: 'La experiencia total',
    nivel: 5,
    chips: ['Tarima', 'Mesa Negra', '2 Láseres', '2 Flashes', 'DJ · 6 h'],
    media: [
      { type: 'img',   src: 'img/armadoc0.jpg' },
      { type: 'video', src: 'video/armadocompleto.mov', poster: 'img/opt/poster-completo.jpg', pos: '50% 62%' }
    ],
    img: 'img/armadoc0.jpg',
    mesa: 'Mesa Negra',
    precio: '',
    descripcion: 'El armado más completo: tarima, rack de luces, consola profesional, 2 flashes y 2 láseres. Mesa Negra.',
    items: [
      'Tarima',
      'Mesa DJ',
      'Rack pro de Luces',
      'American Audio VMS 4.1 (consola)',
      'E-Sound KS-15 (2 parlantes)',
      '2 Luces Led Wash móviles',
      '6 Luces',
      '2 Amwood PYD007 (Flashes)',
      '2 Láseres Stage Lighting',
      'Trípodes para parlantes',
      'Transporte y montaje incluido',
      'Servicio de DJ incluido'
    ],
    nota: 'Incluye 6 horas de DJ. Tiempo adicional con costo extra por hora. Transporte y montaje incluidos.'
  },
  {
    id: 2,
    nombre: 'Set Completo B',
    subtitulo: 'La experiencia total',
    nivel: 5,
    chips: ['Tarima', 'Mesa Triangular', '2 Láseres', '2 Flashes', 'DJ · 6 h'],
    media: [
      { type: 'img',   src: 'img/armadotri_carpa.jpg', pos: '50% 38%' },
      { type: 'img',   src: 'img/armadotri2.jpg' },
      { type: 'img',   src: 'img/armadotri1.jpg' },
      { type: 'video', src: 'video/armadotri_jero.mp4', poster: 'img/opt/poster-jero.jpg' },
      { type: 'video', src: 'video/armadotri_mora.mov', poster: 'img/opt/poster-mora.jpg', pos: '50% 74%' }
    ],
    img: 'img/armadotri_carpa.jpg',
    coverPos: '50% 38%',
    mesa: 'Mesa Triangular',
    precio: '',
    descripcion: 'El armado más completo: tarima, rack de luces, consola profesional, 2 flashes y 2 láseres. Mesa Triangular.',
    items: [
      'Tarima',
      'Mesa DJ Triangular',
      'Rack pro de Luces',
      'American Audio VMS 4.1 (consola)',
      'E-Sound KS-15 (2 parlantes)',
      '2 Luces Led Wash móviles',
      '6 Luces',
      '2 Amwood PYD007 (Flashes)',
      '2 Láseres Stage Lighting',
      'Trípodes para parlantes',
      'Transporte y montaje incluido',
      'Servicio de DJ incluido'
    ],
    nota: 'Incluye 6 horas de DJ. Tiempo adicional con costo extra por hora. Transporte y montaje incluidos.'
  },
  {
    id: 3,
    nombre: 'Set Base A',
    subtitulo: 'Profesional y completo',
    nivel: 4,
    chips: ['Mesa Negra', 'Rack de luces', 'Flash + Láser', 'DJ · 6 h'],
    imgs: ['img/setbasea1.jpg', 'img/setbasea2.jpg'],
    img: 'img/setbasea1.jpg',
    mesa: 'Mesa Negra',
    precio: '',
    descripcion: 'Mesa DJ, rack de luces, consola profesional, wash móviles, flash y láser. Ideal para la mayoría de los eventos. Mesa Negra.',
    items: [
      'Mesa DJ',
      'Rack pro de Luces',
      'American Audio VMS 4.1 (consola)',
      'E-Sound KS-15 (2 parlantes)',
      '2 Luces Led Wash móviles',
      '4 Luces',
      '1 Amwood PYD007 (Flash)',
      '1 Láser Stage Lighting',
      'Trípodes para parlantes',
      'Transporte y montaje incluido',
      'Servicio de DJ incluido'
    ],
    nota: 'Incluye 6 horas de DJ. Tiempo adicional con costo extra por hora. Transporte y montaje incluidos.'
  },
  {
    id: 7,
    nombre: 'Set Base B',
    subtitulo: 'Profesional y completo',
    nivel: 4,
    chips: ['Mesa Triangular', 'Rack de luces', 'Flash + Láser', 'DJ · 6 h'],
    media: [
      { type: 'img',   src: 'img/setbaseb1.jpg' },
      { type: 'img',   src: 'img/setbaseb2.jpg' },
      { type: 'img',   src: 'img/setbaseb3.jpg' },
      { type: 'video', src: 'video/setbaseb.mov', poster: 'img/opt/poster-setbaseb.jpg', pos: '50% 62%' }
    ],
    img: 'img/setbaseb1.jpg',
    mesa: 'Mesa Triangular',
    precio: '',
    descripcion: 'Mesa DJ, rack de luces, consola profesional, wash móviles, flash y láser. Ideal para la mayoría de los eventos. Mesa Triangular.',
    items: [
      'Mesa DJ Triangular',
      'Rack pro de Luces',
      'American Audio VMS 4.1 (consola)',
      'E-Sound KS-15 (2 parlantes)',
      '2 Luces Led Wash móviles',
      '4 Luces',
      '1 Amwood PYD007 (Flash)',
      '1 Láser Stage Lighting',
      'Trípodes para parlantes',
      'Transporte y montaje incluido',
      'Servicio de DJ incluido'
    ],
    nota: 'Incluye 6 horas de DJ. Tiempo adicional con costo extra por hora. Transporte y montaje incluidos.'
  },
  {
    id: 4,
    nombre: 'Set Estándar',
    subtitulo: 'Calidad al aire libre',
    nivel: 3,
    chips: ['Rack de luces', '6 Luces', 'Flash + Láser', 'DJ · 6 h'],
    img: 'img/armado4_main.jpg',
    precio: '',
    descripcion: 'Sin tarima ni mesa DJ, pero con rack de luces completo, wash móviles, flash y láser.',
    items: [
      'Rack pro de Luces',
      'American Audio VMS 4.1 (consola)',
      'E-Sound KS-15 (2 parlantes)',
      '2 Luces Led Wash',
      '6 Luces',
      '1 Amwood PYD007 (Flash)',
      '1 Láser Stage Lighting',
      'Trípodes para parlantes',
      'Transporte y montaje incluido',
      'Servicio de DJ incluido'
    ],
    nota: 'Incluye 6 horas de DJ. Tiempo adicional con costo extra por hora. Transporte y montaje incluidos.'
  },
  {
    id: 5,
    nombre: 'Set Económico',
    subtitulo: 'La entrada perfecta',
    nivel: 2,
    chips: ['Consola + 2 parlantes', 'Luces Wash', 'Flash + Láser', 'DJ · 6 h'],
    img: 'img/armado5_main.jpg',
    precio: '',
    descripcion: 'Consola y parlantes profesionales con luces Wash móviles, flash y láser al mejor precio.',
    items: [
      'American Audio VMS 4.1 (consola)',
      'E-Sound KS-15 (2 parlantes)',
      '2 Luces Led Wash',
      '4 Luces',
      '1 Amwood PYD007 (Flash)',
      '1 Láser Stage Lighting',
      'Trípodes para parlantes',
      'Transporte y montaje incluido',
      'Servicio de DJ incluido'
    ],
    nota: 'Incluye 6 horas de DJ. Tiempo adicional con costo extra por hora. Transporte y montaje incluidos.'
  }
];

const carpasData = [
  {
    id: 'c1',
    nombre: 'Carpa Cerrada 9×6',
    tipo: 'Carpa cerrada · 54 m²',
    img: 'img/carpa_9x6_main.jpg',
    precio: 'Precio según ubicación',
    descripcion: 'Carpa cerrada iluminada, elegante para fiestas y eventos nocturnos.',
    items: [
      'Medidas: 9 × 6 metros',
      'Estructura cerrada con laterales',
      'Montaje incluido',
      'Precio según ubicación'
    ],
    nota: 'Precio según distancia desde Pilar. Ideal para fiestas, casamientos y eventos corporativos.'
  },
  {
    id: 'c2',
    nombre: 'Carpa Cerrada 5×8',
    tipo: 'Carpa cerrada · 40 m²',
    img: 'img/carpa_5x8_main.jpg',
    precio: 'Precio según ubicación',
    descripcion: 'Versátil y elegante, disponible para eventos íntimos o medianos.',
    items: [
      'Medidas: 5 × 8 metros',
      'Laterales desmontables',
      'Montaje incluido',
      'Precio según ubicación'
    ],
    nota: 'Precio según distancia desde Pilar. Perfecta combinada con piso damero o blanco.'
  },
  {
    id: 'c3',
    nombre: 'Carpa Cerrada 5×12',
    tipo: 'Carpa cerrada · 60 m²',
    img: 'img/carpa_5x12_main.jpg',
    precio: 'Precio según ubicación',
    descripcion: 'Estructura metálica reforzada con ventanas transparentes y techo a dos aguas.',
    items: [
      'Medidas: 5 × 12 metros',
      'Estructura metálica reforzada',
      'Laterales con ventanas transparentes',
      'Techo a dos aguas',
      'Montaje incluido',
      'Precio según ubicación'
    ],
    nota: 'La más larga de las carpas cerradas: 12 metros de largo. Precio según distancia desde Pilar.'
  },
  {
    id: 'c6',
    nombre: 'Carpa Cerrada 8×8',
    tipo: 'Carpa cerrada · 64 m²',
    img: 'img/carpa_8x8_main.jpg',
    precio: 'Precio según ubicación',
    descripcion: 'Carpa cerrada de planta cuadrada con laterales con ventanas transparentes.',
    items: [
      'Medidas: 8 × 8 metros',
      'Estructura cerrada con laterales',
      'Laterales con ventanas transparentes',
      'Montaje incluido',
      'Precio según ubicación'
    ],
    nota: 'Precio según distancia desde Pilar. Se puede combinar con piso damero, negro o blanco.'
  },
  {
    id: 'c4',
    nombre: 'Carpa Araña Grande',
    tipo: 'Carpa abierta · gran formato',
    img: 'img/carpa_grande_main.jpg',
    precio: 'Precio según ubicación',
    descripcion: 'Imponente carpa araña abierta de gran formato, ideal para eventos masivos al aire libre.',
    items: [
      'Formato grande tipo araña',
      'Estructura abierta — máxima ventilación',
      'Punto central de gran altura',
      'Ideal para eventos al aire libre',
      'Estética premium y diferenciadora',
      'Montaje incluido',
      'Precio según ubicación'
    ],
    nota: 'Perfecta para casamientos, fiestas y eventos VIP al aire libre. Precio según distancia.'
  },
  {
    id: 'c5',
    nombre: 'Carpa Araña Mediana',
    tipo: 'Carpa abierta · 17 m Ø',
    img: 'img/carpa_mediana_main.jpg',
    precio: 'Precio según ubicación',
    descripcion: 'Carpa araña mediana de 17 metros de diámetro. Elegante, abierta y muy versátil.',
    items: [
      'Diámetro: 17 metros',
      'Altura central: 5,90 m',
      'Estructura abierta tipo araña',
      'Ambiente natural y ventilado',
      'Diseño estético moderno',
      'Montaje incluido',
      'Precio según ubicación'
    ],
    nota: 'Precio según distancia desde Pilar. Excelente para eventos en jardines y espacios verdes.'
  }
];

const categoriasData = {
  pisos: [
    {
      nombre: 'Piso Damero',
      tipo: 'Piso · Blanco y Negro',
      img: 'img/piso_damero_main.jpg',
      items: [
        'Clásico tablero blanco y negro',
        'Elegante y diferenciador',
        'Se arma a la medida exacta',
        'Ideal para cualquier tipo de evento',
        'Precio según m² y ubicación'
      ],
      nota: 'El precio depende de los m² necesarios y la distancia desde Pilar. Consultanos sin compromiso.'
    },
    {
      nombre: 'Piso Todo Negro',
      tipo: 'Piso · Monocromático',
      img: 'img/piso_negro_main.jpg',
      items: [
        'Piso monocromático negro',
        'Perfecto para ambientes sofisticados',
        'Resalta cualquier decoración e iluminación',
        'Se arma a la medida exacta',
        'Precio según m² y ubicación'
      ],
      nota: 'El precio depende de los m² necesarios y la distancia desde Pilar. Consultanos sin compromiso.'
    },
    {
      nombre: 'Piso Todo Blanco',
      tipo: 'Piso · Monocromático',
      img: 'img/piso_blanco_main.jpg',
      items: [
        'Piso monocromático blanco',
        'Transmite elegancia y luminosidad',
        'Ideal para casamientos y eventos diurnos',
        'Se arma a la medida exacta',
        'Precio según m² y ubicación'
      ],
      nota: 'El precio depende de los m² necesarios y la distancia desde Pilar. Consultanos sin compromiso.'
    },
    {
      nombre: 'Medida personalizada',
      tipo: 'Piso · A medida',
      img: null,
      art: 'damero',
      icon: 'i-ruler',
      items: [
        'Armado exacto según tu espacio',
        'Disponible en todos los estilos',
        'Damero, negro o blanco',
        'Cotización según m² y distancia'
      ],
      nota: 'Todos los pisos se arman a la medida que necesitás. Consultanos con las dimensiones del espacio.'
    }
  ],
  livings: [
    {
      nombre: 'Living 1 — Exterior',
      tipo: 'Living · Exterior',
      img: 'img/living1_main.jpg',
      items: [
        'Set de exterior moderno',
        'Sillones y mesa ratona',
        'Ideal para ambientes al aire libre',
        'Precio según consulta'
      ],
      nota: 'Consultanos disponibilidad y precio según el evento y la distancia desde Pilar.'
    },
    {
      nombre: 'Living 2 — Gervasoni',
      tipo: 'Living · Premium',
      img: 'img/living2_main.jpg',
      items: [
        'Sofás blancos de diseño',
        'Mesa de madera natural',
        'Puffs incluidos',
        'Estética premium',
        'Precio según consulta'
      ],
      nota: 'Consultanos disponibilidad y precio según el evento y la distancia desde Pilar.'
    },
    {
      nombre: 'Living 3 — Puffs Blancos',
      tipo: 'Living · Minimalista',
      img: 'img/living3_main.jpg',
      items: [
        'Set de puffs blancos modernos',
        'Estética minimalista y contemporánea',
        'Versátil y liviano',
        'Precio según consulta'
      ],
      nota: 'Consultanos disponibilidad y precio según el evento y la distancia desde Pilar.'
    }
  ],
  calefactores: [
    {
      nombre: 'Calefactores a Gas',
      tipo: 'Calefacción · Gas',
      img: 'img/calefactor_main.jpg',
      items: [
        'Alta potencia calorífica',
        'Ideales para carpas y eventos de invierno',
        'Cobertura amplia por unidad',
        'Precio según cantidad y distancia'
      ],
      nota: 'Consultanos disponibilidad y cantidad según el tamaño del espacio y tipo de evento.'
    },
    {
      nombre: 'Consultar disponibilidad',
      tipo: 'Calefacción · A medida',
      img: null,
      art: 'heat',
      icon: 'i-thermo',
      items: [
        'Diferentes opciones de calefacción',
        'Según tamaño del espacio',
        'Según tipo de evento',
        'Cotización personalizada'
      ],
      nota: 'Contamos con distintas opciones. Consultanos y te armamos una solución a medida para tu evento.'
    }
  ]
};

// ===== HELPERS =====
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isDesktop = () => window.matchMedia('(min-width: 900px)').matches;

// Las fotos originales pesan hasta 6 MB: servimos las versiones optimizadas de img/opt/
const opt = (src, w) => src.replace(/^img\//, 'img/opt/').replace(/\.jpg$/i, `-${w}.jpg`);
const srcset = (src) => `${opt(src, 800)} 800w, ${opt(src, 1600)} 1600w`;
const icon = (id, cls = '') => `<svg class="ic ${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
const pad = (n) => String(n).padStart(2, '0');

function mediaOf(d) {
  if (d.media) return d.media;
  if (d.imgs) return d.imgs.map(src => ({ type: 'img', src }));
  if (d.img) return [{ type: 'img', src: d.img }];
  return [];
}

// Con un diálogo abierto, el resto de la página queda inerte para teclado y lectores de pantalla
function setBackgroundInert(on) {
  ['#main', '#topbar', '.footer', '#tabbar', '#fab'].forEach(sel => {
    const el = $(sel);
    if (el) el.inert = on;
  });
}

// Avisa la proporción real de una foto (ancho / alto) apenas la conoce
function onRatio(img, cb) {
  if (!img) return;
  const run = () => { if (img.naturalWidth) cb(img.naturalWidth / img.naturalHeight); };
  if (img.complete) run();
  else img.addEventListener('load', run, { once: true });
}

// Si la foto y su recuadro tienen formas muy distintas, se muestra entera sobre un fondo desenfocado
const fitFor = (ratio, boxRatio) => (Math.abs(Math.log(ratio / boxRatio)) > 0.3 ? 'contain' : 'cover');

function buildWaLink(msg) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function haptic() {
  if (navigator.vibrate) navigator.vibrate(8);
}

// ===== SPLASH =====
function initSplash(onDone) {
  const splash = $('#splash');
  if (root.classList.contains('no-splash') || !splash) {
    splash?.remove();
    root.classList.add('is-ready');
    onDone();
    return;
  }
  const start = performance.now();
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    const wait = Math.max(0, 1150 - (performance.now() - start));
    setTimeout(() => {
      splash.classList.add('is-out');
      root.classList.add('is-ready');
      try { sessionStorage.setItem('jl-splash', '1'); } catch (e) {}
      onDone();
      setTimeout(() => splash.remove(), 900);
    }, wait);
  };
  if (document.readyState === 'complete') finish();
  else window.addEventListener('load', finish, { once: true });
  setTimeout(finish, 2400); // nunca bloquear más de 2.4 s en conexiones lentas
}

// ===== TEXTO: split por palabras =====
function splitWords(el, wrap) {
  let i = 0;
  const walk = (node) => {
    Array.from(node.childNodes).forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = child.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          frag.appendChild(wrap(part, i++));
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  };
  walk(el);
  return i;
}

function initSplitHeadings() {
  $$('[data-split]').forEach(el => {
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    splitWords(el, (word, i) => {
      const w = document.createElement('span');
      w.className = 'w';
      w.setAttribute('aria-hidden', 'true');
      const inner = document.createElement('span');
      inner.textContent = word;
      inner.style.setProperty('--wi', i);
      w.appendChild(inner);
      return w;
    });
  });
}

// ===== REVEAL AL SCROLLEAR =====
let revealObserver;
function initReveals() {
  if (reducedMotion || !('IntersectionObserver' in window)) {
    $$('[data-reveal], [data-split]').forEach(el => el.classList.add('is-in'));
    return;
  }
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal], [data-split]').forEach(el => revealObserver.observe(el));
}

// ===== HERO: slideshow + parallax =====
function initHero() {
  const slides = $$('.hero-slide');
  const bars = $$('.hero-progress span');
  if (slides.length < 2) return;
  let current = 0;
  let timer;

  const show = (n) => {
    slides[current].classList.remove('is-active');
    current = n % slides.length;
    slides[current].classList.add('is-active');
    bars.forEach((b, i) => {
      b.classList.remove('is-active');
      b.classList.toggle('is-done', i < current);
    });
    void bars[current].offsetWidth; // reinicia la animación de la barra
    bars[current].classList.add('is-active');
  };

  const play = () => { clearInterval(timer); if (!reducedMotion) timer = setInterval(() => show(current + 1), 5500); };
  const stop = () => clearInterval(timer);

  show(0);
  play();

  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : play()));
  new IntersectionObserver(([e]) => (e.isIntersecting ? play() : stop())).observe($('#hero'));
}

// ===== RENDER ARMADOS =====
function renderArmados() {
  const stack = $('#armados-stack');
  if (!stack) return;
  const total = armadosData.length;

  stack.innerHTML = armadosData.map((a, idx) => {
    const media = mediaOf(a);
    const imgs = media.filter(m => m.type === 'img').length;
    const vids = media.filter(m => m.type === 'video').length;
    const cover = a.cover || a.img || media[0]?.src;
    const counter = (imgs + vids) > 1
      ? `<span class="acard-media-count">${icon('i-image')}${imgs}${vids ? ` ${icon('i-video')}${vids}` : ''}</span>`
      : '';
    const level = a.insignia
      ? `<span class="badge-neon">Insignia JL</span>`
      : `<span class="meter-wrap" aria-label="Nivel ${a.nivel} de 5">Nivel <span class="meter">${[1, 2, 3, 4, 5].map(n => `<i class="${n <= a.nivel ? 'on' : ''}"></i>`).join('')}</span></span>`;

    return `
    <article class="acard" role="listitem" style="--i:${idx}" data-reveal>
      <div class="acard-media">
        <img src="${opt(cover, 800)}" srcset="${srcset(cover)}" sizes="(min-width: 900px) 640px, 100vw" alt="${a.nombre} — ${a.subtitulo}"${a.coverPos ? ` style="object-position:${a.coverPos}"` : ''} loading="${idx < 2 ? 'eager' : 'lazy'}" decoding="async" />
        <span class="acard-num"><b>${pad(idx + 1)}</b> <span>/ ${pad(total)}</span></span>
        ${counter}
      </div>
      <div class="acard-body">
        <div class="acard-top">
          <p class="acard-sub">${a.subtitulo}</p>
          ${level}
        </div>
        <h3 class="acard-name">${a.nombre}</h3>
        <p class="acard-desc">${a.descripcion}</p>
        <ul class="chips">${a.chips.map(c => `<li>${c}</li>`).join('')}</ul>
        <span class="acard-cta">Ver detalle ${icon('i-arrow')}</span>
      </div>
      <span class="acard-dim" aria-hidden="true"></span>
      <button class="acard-hit" type="button" data-id="${a.id}" aria-label="Ver detalles de ${a.nombre}"></button>
    </article>`;
  }).join('');

  // Fotos verticales → recuadro cuadrado; horizontales → 3:2
  $$('.acard', stack).forEach(card => {
    onRatio($('.acard-media img', card), r => { card.dataset.orient = r < 0.95 ? 'port' : 'land'; });
  });

  $$('.acard-hit', stack).forEach(btn => {
    btn.addEventListener('click', () => {
      const data = armadosData.find(a => a.id === Number(btn.dataset.id));
      if (data) openSheet(data, btn);
    });
  });
}

// Cards apiladas: cada card se achica y oscurece a medida que la siguiente la tapa
let stackCards = [];
function updateStack() {
  if (!stackCards.length || reducedMotion) return;
  const first = stackCards[0].getBoundingClientRect();
  const last = stackCards[stackCards.length - 1].getBoundingClientRect();
  if (last.bottom < -200 || first.top > window.innerHeight + 200) return;
  for (let i = 0; i < stackCards.length - 1; i++) {
    const card = stackCards[i];
    const next = stackCards[i + 1];
    const h = card.offsetHeight;
    const nextStickyTop = parseFloat(getComputedStyle(next).top) || 0;
    const nextTop = next.getBoundingClientRect().top;
    const p = clamp(1 - (nextTop - nextStickyTop) / h, 0, 1);
    card.style.setProperty('--p', p.toFixed(3));
  }
}

// ===== RENDER CATEGORÍAS =====
function cardCategoria(item, key, idx) {
  const media = item.img
    ? `<div class="ccard-media">
        <img class="media-bg" src="${opt(item.img, 800)}" srcset="${srcset(item.img)}" sizes="(min-width: 900px) 300px, 76vw" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <img class="media-main" src="${opt(item.img, 800)}" srcset="${srcset(item.img)}" sizes="(min-width: 900px) 300px, 76vw" alt="${item.nombre}" loading="lazy" decoding="async" />
      </div>`
    : `<div class="art art--${item.art || 'damero'}">${icon(item.icon || 'i-sparkles')}</div>`;
  return `
  <article class="ccard" role="listitem" data-reveal style="--d:${Math.min(idx, 3) * 0.07}s">
    ${media}
    <div class="ccard-body">
      <div class="ccard-txt">
        <p class="ccard-tag">${item.tipo}</p>
        <h4 class="ccard-name">${item.nombre}</h4>
      </div>
      <span class="ccard-go" aria-hidden="true">${icon('i-arrow-up-right')}</span>
    </div>
    <button class="ccard-hit" type="button" data-cat="${key}" data-idx="${idx}" aria-label="Ver detalles de ${item.nombre}"></button>
  </article>`;
}

function renderCategorias() {
  const sets = { carpas: carpasData, ...categoriasData };
  Object.entries(sets).forEach(([key, list]) => {
    const rail = $(`#${key}-rail`);
    if (!rail) return;
    rail.innerHTML = list.map((item, idx) => cardCategoria(item, key, idx)).join('');
    const count = $(`#${key}-count`);
    if (count) count.textContent = `${pad(list.length)} opciones`;
    // Las cards son 4:5; una foto horizontal se ve entera sobre su versión desenfocada
    $$('.ccard', rail).forEach(card => {
      onRatio($('.media-main', card), r => { card.dataset.fit = fitFor(r, 4 / 5); });
    });
    $$('.ccard-hit', rail).forEach(btn => {
      btn.addEventListener('click', () => {
        const data = sets[btn.dataset.cat]?.[Number(btn.dataset.idx)];
        if (data) openSheet(data, btn);
      });
    });
  });
}

// ===== RAILS (carruseles horizontales) =====
function initRails() {
  $$('.rail').forEach(rail => {
    const progress = rail.nextElementSibling?.classList.contains('rail-progress') ? rail.nextElementSibling : null;
    const bar = progress?.firstElementChild;
    let prevBtn, nextBtn;

    // Flechas para desktop, al lado del título
    const head = rail.parentElement.querySelector('.cat-head');
    if (head) {
      const nav = document.createElement('div');
      nav.className = 'rail-nav';
      nav.innerHTML = `
        <button type="button" aria-label="Anterior">${icon('i-arrow')}</button>
        <button type="button" aria-label="Siguiente">${icon('i-arrow')}</button>`;
      head.appendChild(nav);
      [prevBtn, nextBtn] = nav.querySelectorAll('button');
      prevBtn.querySelector('svg').style.transform = 'scaleX(-1)';
      const step = () => (rail.firstElementChild?.offsetWidth || 300) + 18;
      prevBtn.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
      nextBtn.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
    }

    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      if (prevBtn) { prevBtn.disabled = rail.scrollLeft <= 4; nextBtn.disabled = rail.scrollLeft >= max - 4; }
      if (!bar) return;
      if (max <= 4) { progress.style.visibility = 'hidden'; return; }
      progress.style.visibility = '';
      const w = clamp(rail.clientWidth / rail.scrollWidth, 0.12, 1);
      bar.style.width = `${w * 100}%`;
      bar.style.setProperty('--x', `${(rail.scrollLeft / max) * ((1 - w) / w) * 100}%`);
    };
    let ticking = false;
    rail.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    }, { passive: true });
    window.addEventListener('resize', update);
    update();

    // Arrastrar con el mouse en desktop
    let down = false, startX = 0, startLeft = 0, moved = false;
    rail.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true; moved = false; startX = e.clientX; startLeft = rail.scrollLeft;
    });
    window.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 5) { moved = true; rail.classList.add('is-grabbing'); }
      if (moved) rail.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', () => {
      if (!down) return;
      down = false;
      if (moved) {
        rail.classList.remove('is-grabbing');
        const step = (rail.firstElementChild?.offsetWidth || 300) + 18;
        rail.scrollTo({ left: Math.round(rail.scrollLeft / step) * step, behavior: 'smooth' });
      }
    });
    rail.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  });
}

// ===== BOTTOM SHEET =====
const sheet = $('#sheet');
const scrim = $('#sheet-scrim');
const sheetScroll = $('#sheet-scroll');
const sheetTrack = $('#sheet-track');
const sheetDots = $('#sheet-dots');
const sheetCounter = $('#sheet-counter');
let sheetOpen = false;
let lastFocus = null;
let sheetImages = [];
let pushedState = false;

function openSheet(data, trigger) {
  lastFocus = trigger || document.activeElement;
  const media = mediaOf(data);
  const poster = media.find(m => m.type === 'img')?.src;

  $('#sheet-tag').textContent = data.subtitulo || data.tipo || 'Detalle del servicio';
  $('#sheet-title').textContent = data.nombre;
  $('#sheet-desc').textContent = data.subtitulo ? data.descripcion : (data.descripcion || '');
  $('#sheet-items').innerHTML = data.items.map(item => `<li>${icon('i-check')}<span>${item}</span></li>`).join('');
  $('#sheet-note').textContent = data.nota || '';

  sheetImages = media.filter(m => m.type === 'img').map(m => m.src);
  if (media.length) {
    $('#sheet-gallery').hidden = false;
    sheetTrack.innerHTML = media.map((m, i) => {
      if (m.type === 'video') {
        return `<div class="slide slide--video">
          <video src="${m.src}" poster="${m.poster || (poster ? opt(poster, 800) : '')}" preload="none" playsinline loop${m.pos ? ` style="object-position:${m.pos}"` : ''}></video>
          <button class="slide-play" type="button" aria-label="Reproducir video ${i + 1}"><span>${icon('i-play')}</span></button>
        </div>`;
      }
      const imgIdx = sheetImages.indexOf(m.src);
      return `<div class="slide">
        <img class="media-bg" src="${opt(m.src, 800)}" alt="" aria-hidden="true" decoding="async" />
        <img class="media-main" src="${opt(m.src, 800)}" srcset="${srcset(m.src)}" sizes="(min-width: 900px) 560px, 100vw" alt="${data.nombre} — foto ${i + 1}"${m.pos ? ` style="object-position:${m.pos}"` : ''} ${i ? 'loading="lazy"' : ''} decoding="async" />
        <button class="slide-zoom" type="button" data-img="${imgIdx}" aria-label="Ampliar foto ${i + 1}"></button>
      </div>`;
    }).join('');
    sheetDots.innerHTML = media.length > 1 ? media.map((_, i) => `<i class="${i ? '' : 'on'}"></i>`).join('') : '';
    sheetCounter.textContent = media.length > 1 ? `1 / ${media.length}` : '';
    sheetTrack.scrollLeft = 0;
  } else {
    $('#sheet-gallery').hidden = true;
  }

  const msg = data.mesa || data.subtitulo
    ? `Hola Lucas, me interesó el ${data.nombre}${data.mesa ? ` con ${data.mesa}` : ''}`
    : `Hola Lucas, quiero consultar por: ${data.nombre}`;
  $('#sheet-wa').href = buildWaLink(msg);

  scrim.hidden = false;
  sheet.hidden = false;
  sheet.style.setProperty('--drag', '0px');
  sheetScroll.scrollTop = 0;
  $('.sheet-body', sheet).scrollTop = 0;
  void sheet.offsetWidth;
  // Con el sheet ya visible se conoce el tamaño real del recuadro (cambia entre teléfono y desktop)
  const boxRatio = (sheetTrack.clientWidth / sheetTrack.clientHeight) || 4 / 3;
  $$('.slide', sheetTrack).forEach(slide => {
    onRatio($('.media-main', slide), r => { slide.dataset.fit = fitFor(r, boxRatio); });
  });
  scrim.classList.add('is-open');
  sheet.classList.add('is-open');
  root.classList.add('is-locked', 'sheet-open');
  setBackgroundInert(true);
  sheetOpen = true;
  haptic();

  try { history.pushState({ jlSheet: true }, ''); pushedState = true; } catch (e) { pushedState = false; }
  setTimeout(() => $('#sheet-close').focus({ preventScroll: true }), 60);
}

function closeSheet(fromHistory = false) {
  if (!sheetOpen) return;
  sheetOpen = false;
  sheet.classList.remove('is-open', 'is-dragging');
  scrim.classList.remove('is-open');
  root.classList.remove('is-locked', 'sheet-open');
  setBackgroundInert(false);
  $$('video', sheetTrack).forEach(v => v.pause());
  if (pushedState && !fromHistory) { pushedState = false; history.back(); }
  pushedState = false;

  const done = () => {
    if (sheetOpen) return;
    sheet.hidden = true;
    scrim.hidden = true;
    sheet.style.setProperty('--drag', '0px');
    sheetTrack.innerHTML = '';
  };
  setTimeout(done, 600);
  lastFocus?.focus?.({ preventScroll: true });
}

$('#sheet-close')?.addEventListener('click', () => closeSheet());
scrim?.addEventListener('click', () => closeSheet());
window.addEventListener('popstate', () => { if (sheetOpen) { pushedState = false; closeSheet(true); } });

// Galería del sheet: puntos, contador, video y zoom
sheetTrack?.addEventListener('scroll', () => {
  const n = sheetTrack.children.length;
  if (n < 2) return;
  const i = clamp(Math.round(sheetTrack.scrollLeft / sheetTrack.clientWidth), 0, n - 1);
  $$('i', sheetDots).forEach((d, k) => d.classList.toggle('on', k === i));
  sheetCounter.textContent = `${i + 1} / ${n}`;
  $$('.slide--video', sheetTrack).forEach((s, k) => {
    const v = $('video', s);
    if (v && !v.paused && s !== sheetTrack.children[i]) v.pause();
  });
}, { passive: true });

$$('.gallery-nav').forEach(btn => {
  btn.addEventListener('click', () => {
    sheetTrack.scrollBy({ left: sheetTrack.clientWidth * Number(btn.dataset.dir), behavior: 'smooth' });
  });
});

sheetTrack?.addEventListener('click', (e) => {
  const play = e.target.closest('.slide-play');
  if (play) {
    const slide = play.closest('.slide');
    const video = $('video', slide);
    slide.classList.add('is-playing');
    video.controls = true;
    video.play().catch(() => {});
    return;
  }
  const zoom = e.target.closest('.slide-zoom');
  if (zoom) openViewer(sheetImages, Number(zoom.dataset.img) || 0, zoom);
});

// Arrastrar hacia abajo para cerrar (física al estilo iOS: 1:1, velocidad y proyección)
(function initSheetDrag() {
  if (!sheet) return;
  let startY = 0, startX = 0, dy = 0, decided = false, dragging = false, fromGrip = false;
  let samples = [];

  const rubberband = (x, dim, c = 0.55) => (x * dim * c) / (dim + c * Math.abs(x));
  const project = (v, d = 0.998) => (v / 1000) * d / (1 - d);

  sheet.addEventListener('touchstart', (e) => {
    if (!sheetOpen || isDesktop() || e.touches.length > 1) return;
    const t = e.touches[0];
    startY = t.clientY; startX = t.clientX; dy = 0;
    decided = false; dragging = false;
    fromGrip = !!e.target.closest('.sheet-grip');
    samples = [{ y: t.clientY, t: performance.now() }];
  }, { passive: true });

  sheet.addEventListener('touchmove', (e) => {
    if (!sheetOpen || isDesktop()) return;
    const t = e.touches[0];
    const ddy = t.clientY - startY;
    const ddx = t.clientX - startX;
    if (!decided) {
      if (Math.abs(ddy) < 8 && Math.abs(ddx) < 8) return;
      decided = true;
      const vertical = Math.abs(ddy) > Math.abs(ddx);
      dragging = vertical && ddy > 0 && (fromGrip || sheetScroll.scrollTop <= 0);
      if (dragging) { sheet.classList.add('is-dragging'); startY = t.clientY; }
    }
    if (!dragging) return;
    e.preventDefault();
    dy = t.clientY - startY;
    const y = dy < 0 ? -rubberband(-dy, sheet.offsetHeight) : dy;
    sheet.style.setProperty('--drag', `${y}px`);
    scrim.style.opacity = String(clamp(1 - y / sheet.offsetHeight, 0, 1));
    samples.push({ y: t.clientY, t: performance.now() });
    if (samples.length > 6) samples.shift();
  }, { passive: false });

  const end = () => {
    if (!dragging) return;
    dragging = false;
    sheet.classList.remove('is-dragging');
    scrim.style.opacity = '';
    const a = samples[0], b = samples[samples.length - 1];
    const v = b && a && b.t > a.t ? ((b.y - a.y) / (b.t - a.t)) * 1000 : 0; // px/s
    const projected = dy + project(v);
    if (v > 0 && (projected > sheet.offsetHeight * 0.4 || v > 900)) closeSheet();
    else sheet.style.setProperty('--drag', '0px');
  };
  sheet.addEventListener('touchend', end);
  sheet.addEventListener('touchcancel', end);
})();

// Mantener el foco dentro del diálogo abierto
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (viewerOpen) closeViewer();
    else if (sheetOpen) closeSheet();
    return;
  }
  if (e.key !== 'Tab') return;
  const box = viewerOpen ? viewer : sheetOpen ? sheet : null;
  if (!box) return;
  const items = $$('a[href], button:not([disabled]), video[controls]', box).filter(el => el.offsetParent !== null);
  if (!items.length) return;
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

// ===== VISOR DE FOTOS =====
const viewer = $('#viewer');
const viewerTrack = $('#viewer-track');
const viewerCount = $('#viewer-count');
let viewerOpen = false;
let viewerFocus = null;

function openViewer(images, index, trigger) {
  if (!images.length) return;
  viewerFocus = trigger;
  viewerTrack.innerHTML = images.map((src, i) =>
    `<figure><img src="${opt(src, 1600)}" alt="Foto ${i + 1} de ${images.length}" decoding="async" /></figure>`
  ).join('');
  viewer.hidden = false;
  viewerOpen = true;
  viewerTrack.scrollLeft = viewerTrack.clientWidth * index;
  viewerCount.textContent = images.length > 1 ? `${index + 1} / ${images.length}` : '';
  void viewer.offsetWidth;
  viewer.classList.add('is-open');
  $('#viewer-close').focus({ preventScroll: true });
}

function closeViewer() {
  if (!viewerOpen) return;
  viewerOpen = false;
  viewer.classList.remove('is-open');
  setTimeout(() => { if (!viewerOpen) { viewer.hidden = true; viewerTrack.innerHTML = ''; } }, 350);
  viewerFocus?.focus?.({ preventScroll: true });
}

$('#viewer-close')?.addEventListener('click', closeViewer);
viewerTrack?.addEventListener('click', (e) => { if (e.target.tagName !== 'IMG') closeViewer(); });
viewerTrack?.addEventListener('scroll', () => {
  const n = viewerTrack.children.length;
  if (n < 2) return;
  const i = clamp(Math.round(viewerTrack.scrollLeft / viewerTrack.clientWidth), 0, n - 1);
  viewerCount.textContent = `${i + 1} / ${n}`;
}, { passive: true });

// ===== TAB BAR =====
const tabbar = $('#tabbar');
const tabs = $$('.tab', tabbar);
const tabTargets = tabs.map(t => $(t.getAttribute('href')));
let tabLockUntil = 0;

function setActiveTab(idx) {
  tabs.forEach((t, i) => {
    const on = i === idx;
    t.classList.toggle('is-active', on);
    if (on) t.setAttribute('aria-current', 'location');
    else t.removeAttribute('aria-current');
  });
  tabbar.classList.toggle('has-active', idx > -1);
  if (idx > -1) tabbar.style.setProperty('--idx', idx);
}

function updateTabs() {
  if (performance.now() < tabLockUntil) return;
  const probe = window.innerHeight * 0.42;
  let active = -1;
  tabTargets.forEach((sec, i) => {
    if (!sec) return;
    const r = sec.getBoundingClientRect();
    if (r.top <= probe && r.bottom > probe) active = i;
  });
  // Al final de la página, contacto queda activo aunque no llegue al centro
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = tabs.length - 1;
  setActiveTab(active);
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', (e) => {
    const target = tabTargets[i];
    if (!target) return;
    e.preventDefault();
    haptic();
    setActiveTab(i);
    tabLockUntil = performance.now() + 1100;
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', tab.getAttribute('href'));
  });
});

// ===== TOP BAR =====
const topbar = $('#topbar');
const topLinks = $$('.topnav a');
const topTargets = topLinks.map(a => $(a.getAttribute('href')));
function updateTopbar() {
  topbar.classList.toggle('is-scrolled', window.scrollY > 24);
  const probe = window.innerHeight * 0.4;
  topTargets.forEach((sec, i) => {
    if (!sec) return;
    const r = sec.getBoundingClientRect();
    topLinks[i].classList.toggle('is-current', r.top <= probe && r.bottom > probe);
  });
}

// ===== FAB WHATSAPP =====
const fab = $('#fab');
const contacto = $('#contacto');
function updateFab() {
  const pastHero = window.scrollY > window.innerHeight * 0.75;
  const nearContact = contacto && contacto.getBoundingClientRect().top < window.innerHeight * 0.7;
  fab.classList.toggle('is-visible', pastHero && !nearContact);
}

// ===== TEXTO QUE SE "ENCIENDE" AL SCROLLEAR =====
const scrubEls = [];
function initScrub() {
  $$('[data-scrub]').forEach(el => {
    const count = splitWords(el, (word) => {
      const s = document.createElement('span');
      s.className = 'sw';
      s.textContent = word;
      return s;
    });
    scrubEls.push({ el, words: $$('.sw', el), count, lit: -1 });
  });
  if (reducedMotion) scrubEls.forEach(s => s.words.forEach(w => w.classList.add('on')));
}
function updateScrub() {
  if (reducedMotion) return;
  const vh = window.innerHeight;
  scrubEls.forEach(s => {
    const r = s.el.getBoundingClientRect();
    if (r.bottom < -100 || r.top > vh + 100) return;
    const p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.3), 0, 1);
    const lit = Math.round(p * s.count);
    if (lit === s.lit) return;
    s.words.forEach((w, i) => w.classList.toggle('on', i < lit));
    s.lit = lit;
  });
}

// ===== HERO PARALLAX =====
const heroParallax = $('#hero-parallax');
const heroContent = $('.hero-content');
function updateHero() {
  if (reducedMotion) return;
  const y = window.scrollY;
  const vh = window.innerHeight;
  if (y > vh * 1.2) return;
  heroParallax.style.transform = `translate3d(0, ${y * 0.32}px, 0)`;
  heroContent.style.transform = `translate3d(0, ${y * -0.12}px, 0)`;
  heroContent.style.opacity = String(clamp(1 - y / (vh * 0.75), 0, 1));
}

// ===== LOOP DE SCROLL (un solo rAF por frame) =====
let scrollTicking = false;
function onScroll() {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    updateTopbar();
    updateHero();
    updateStack();
    updateScrub();
    updateTabs();
    updateFab();
    scrollTicking = false;
  });
}

// ===== CONTADORES =====
function initCounters() {
  const els = $$('[data-count]');
  if (!els.length) return;
  const run = (el) => {
    const target = Number(el.dataset.count);
    if (reducedMotion) { el.textContent = target; return; }
    const t0 = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const k = clamp((now - t0) / dur, 0, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    };
    el.textContent = '0';
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      run(entry.target);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.6 });
  els.forEach(el => io.observe(el));
}

// ===== ACORDEÓN DE POLÍTICAS =====
function initAccordion() {
  $$('.acc-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.acc-item');
      const open = !item.classList.contains('is-open');
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });
}

// ===== EVENTOS: tocar para cargar el embed =====
function initReels() {
  $$('.reel-frame[data-embed]').forEach(frame => {
    const btn = $('.reel-play', frame);
    btn?.addEventListener('click', () => {
      if (frame.classList.contains('is-loaded')) return;
      const iframe = document.createElement('iframe');
      iframe.src = frame.dataset.src;
      iframe.title = btn.getAttribute('aria-label');
      iframe.loading = 'lazy';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share');
      if (frame.dataset.embed === 'tiktok') {
        iframe.setAttribute('sandbox', 'allow-popups allow-popups-to-escape-sandbox allow-scripts allow-same-origin allow-forms');
      }
      frame.appendChild(iframe);
      frame.classList.add('is-loaded');
      btn.tabIndex = -1;
      iframe.focus();
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  renderArmados();
  renderCategorias();
  initSplitHeadings();
  initScrub();
  initRails();
  initAccordion();
  initReels();
  initCounters();

  stackCards = $$('.acard');

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  initSplash(() => {
    initReveals();
    initHero();
  });
});
