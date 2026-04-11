/* ===== JL PRODUCTORA — JAVASCRIPT ===== */

// ===== DATA =====
const WHATSAPP_NUMBER = '5491136727858';

const armadosData = [
  {
    id: 0,
    nombre: 'Triángulo',
    subtitulo: 'Estructura icónica de JL',
    icon: '🔺',
    imgs: ['img/triangulo1.jpg', 'img/triangulo2.jpg', 'img/triangulo3.jpg', 'img/triangulo4.jpg'],
    img: 'img/triangulo1.jpg',
    imgB: null,
    precio: '',
    descripcion: 'La estructura insignia de JL. Armado personalizable con opciones de tamaño y configuración para cada tipo de evento.',
    items: [
      'Tamaño: 3 o 4 metros por lado',
      'Con o sin tarima para el DJ <em style="color:var(--gold-light);font-size:10px">(tarima disponible en versión 4m)</em>',
      'Mesa Negra o Mesa Triangular',
      'Estructura metálica premium',
      'Iluminación integrada',
      'Transporte y montaje incluido'
    ],
    nota: 'Armado 100% personalizable. Elegís el tamaño, la tarima y la mesa. Si querés la tarima, la estructura es de 4 metros por lado.'
  },
  {
    id: 1,
    nombre: 'Set Completo',
    subtitulo: 'La experiencia total',
    icon: '🏆',
    media: [
      { type: 'img',   src: 'img/armadoc0.jpg' },
      { type: 'video', src: 'video/armadocompleto.mov' }
    ],
    img: 'img/armadoc0.jpg',
    precio: '',
    descripcion: 'El armado más completo: tarima, rack de luces, consola profesional, 2 flashes y 2 láseres.',
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
    nombre: 'Set Mesa Extendida',
    subtitulo: 'Más espacio de trabajo',
    icon: '🎛️',
    img: 'img/armado2_main.jpg',
    imgB: 'img/armado2_b.jpg',
    precio: '',
    descripcion: '2 tarimas para mayor superficie de operación, con show completo de luces, flash y láser.',
    items: [
      'Mesa DJ',
      '2 Tarimas',
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
    id: 3,
    nombre: 'Set Base',
    subtitulo: 'Profesional y completo',
    icon: '🎚️',
    img: 'img/armado3_main.jpg',
    imgB: null,
    precio: '',
    descripcion: 'Mesa DJ, rack de luces, consola profesional, wash móviles, flash y láser. Ideal para la mayoría de los eventos.',
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
    id: 4,
    nombre: 'Set Estándar',
    subtitulo: 'Calidad al aire libre',
    icon: '🎵',
    img: 'img/armado4_main.jpg',
    imgB: 'img/armado4_b.jpg',
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
    icon: '✨',
    img: 'img/armado5_main.jpg',
    imgB: 'img/armado5_b.jpg',
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
    imgB: 'img/carpa_9x6_b.jpg',
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
    imgB: 'img/carpa_5x8_b.jpg',
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
    imgB: null,
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
    nota: 'La más amplia de las carpas cerradas. Precio según distancia desde Pilar.'
  },
  {
    id: 'c4',
    nombre: 'Carpa Araña Grande',
    tipo: 'Carpa abierta · gran formato',
    img: 'img/carpa_grande_main.jpg',
    imgB: 'img/carpa_grande_b.jpg',
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
    imgB: 'img/carpa_mediana_b.jpg',
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
      icon: '♟️',
      tipo: 'Piso · Blanco y Negro',
      img: 'img/piso_damero_main.jpg',
      precio: '',
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
      icon: '⬛',
      tipo: 'Piso · Monocromático',
      img: 'img/piso_negro_main.jpg',
      precio: '',
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
      icon: '⬜',
      tipo: 'Piso · Monocromático',
      img: 'img/piso_blanco_main.jpg',
      precio: '',
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
      icon: '📐',
      tipo: 'Piso · A medida',
      img: null,
      precio: '',
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
      icon: '🪑',
      tipo: 'Living · Exterior',
      img: 'img/living1_main.jpg',
      precio: '',
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
      icon: '🛋️',
      tipo: 'Living · Premium',
      img: 'img/living2_main.jpg',
      precio: '',
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
      icon: '⬜',
      tipo: 'Living · Minimalista',
      img: 'img/living3_main.jpg',
      precio: '',
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
      icon: '🔥',
      tipo: 'Calefacción · Gas',
      img: 'img/calefactor_main.jpg',
      precio: '',
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
      icon: '🌡️',
      tipo: 'Calefacción · A medida',
      img: null,
      precio: '',
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

// ===== CURSOR =====
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

if (cursor && follower) {
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .armado-card, .carpa-card, .cat-tab').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      follower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      follower.classList.remove('hover');
    });
  });
}

// ===== NAV SCROLL =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER =====
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== MODAL =====
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');

function openModal(data) {
  const modalTag       = document.getElementById('modal-tag');
  const modalTitle     = document.getElementById('modal-title');
  const modalPrice     = document.getElementById('modal-price');
  const modalItemsList = document.getElementById('modal-items-list');
  const modalNote      = document.getElementById('modal-note');
  const modalWaBtn     = document.getElementById('modal-wa-btn');
  const modalMedia     = document.getElementById('modal-media');
  const modalImgEl     = document.getElementById('modal-img');
  const modalSlider    = document.getElementById('modal-slider');
  const sliderTrack    = document.getElementById('modal-slider-track');
  const sliderDots     = document.getElementById('modal-slider-dots');

  modalTag.textContent   = data.subtitulo || data.tipo || 'Detalle del servicio';
  modalTitle.textContent = data.nombre;
  modalPrice.textContent = data.precio;
  modalPrice.style.display = data.precio ? '' : 'none';
  modalItemsList.innerHTML = data.items.map(item => `<li>${item}</li>`).join('');
  modalNote.textContent = data.nota || data.descripcion || '';

  // Reset
  modalImgEl.style.display  = 'none';
  modalSlider.style.display = 'none';
  modalMedia.style.display  = 'none';

  // Pausar cualquier video anterior antes de reemplazar el track
  sliderTrack.querySelectorAll('video').forEach(v => v.pause());

  const mediaItems = data.media || (data.imgs && data.imgs.length > 1 ? data.imgs.map(src => ({ type: 'img', src })) : null);

  if (mediaItems) {
    let current = 0;
    sliderTrack.innerHTML = mediaItems.map((item, i) =>
      item.type === 'video'
        ? `<video src="${item.src}" muted playsinline loop preload="none" class="modal-slide${i===0?' active':''}"></video>`
        : `<img src="${item.src}" alt="${data.nombre} ${i+1}" class="modal-slide${i===0?' active':''}" loading="${i===0?'eager':'lazy'}" />`
    ).join('');
    sliderDots.innerHTML = mediaItems.map((_, i) =>
      `<span class="modal-dot${i===0?' active':''}"></span>`
    ).join('');

    const slides = sliderTrack.querySelectorAll('.modal-slide');
    const dots   = sliderDots.querySelectorAll('.modal-dot');

    if (slides[0] && slides[0].tagName === 'VIDEO') slides[0].play().catch(() => {});

    // Clonar botones para limpiar listeners de aperturas anteriores
    const btnPrev = document.getElementById('modal-slider-prev');
    const btnNext = document.getElementById('modal-slider-next');
    const newPrev = btnPrev.cloneNode(true);
    const newNext = btnNext.cloneNode(true);
    btnPrev.parentNode.replaceChild(newPrev, btnPrev);
    btnNext.parentNode.replaceChild(newNext, btnNext);

    function goToModal(n) {
      const prevEl = slides[current];
      if (prevEl.tagName === 'VIDEO') prevEl.pause();
      prevEl.classList.remove('active');
      dots[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      const nextEl = slides[current];
      nextEl.classList.add('active');
      dots[current].classList.add('active');
      if (nextEl.tagName === 'VIDEO') nextEl.play().catch(() => {});
    }
    newNext.addEventListener('click', () => goToModal(current + 1));
    newPrev.addEventListener('click', () => goToModal(current - 1));

    slides.forEach(slide => {
      slide.addEventListener('click', () => {
        if (!slide.classList.contains('active')) return;
        if (slide.tagName === 'VIDEO') {
          slide.pause();
          openLightbox(slide.src, 'video');
        } else {
          openLightbox(slide.src, 'img', slide.alt);
        }
      });
    });

    modalSlider.style.display = 'block';
    modalMedia.style.display  = 'block';

  } else if (data.img) {
    modalImgEl.src = data.img;
    modalImgEl.alt = data.nombre;
    modalImgEl.style.display = 'block';
    modalMedia.style.display  = 'block';
    modalImgEl.onclick = () => openLightbox(modalImgEl.src, 'img', modalImgEl.alt);
  }

  const msg = encodeURIComponent(`Hola Lucas, me interesó el ${data.nombre}`);
  modalWaBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeLightbox(); }
});

// ===== LIGHTBOX =====
const lightbox       = document.getElementById('lightbox');
const lightboxImg    = document.getElementById('lightbox-img');
const lightboxVideo  = document.getElementById('lightbox-video');
const lightboxClose  = document.getElementById('lightbox-close');

function openLightbox(src, type = 'img', alt = '') {
  if (type === 'video') {
    lightboxImg.style.display   = 'none';
    lightboxVideo.style.display = 'block';
    lightboxVideo.src = src;
    lightboxVideo.load();
    lightboxVideo.play().catch(() => {});
  } else {
    lightboxVideo.style.display = 'none';
    lightboxImg.style.display   = 'block';
    lightboxImg.src = src;
    lightboxImg.alt = alt;
  }
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxVideo.pause();
  lightboxVideo.src = '';
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// ===== RENDER ARMADOS =====
function renderArmados() {
  const container = document.getElementById('armados-grid');
  if (!container) return;

  const total = armadosData.length;
  container.innerHTML = armadosData.map((a, idx) => {
    const numLabel = String(idx + 1).padStart(2, '0');
    const totalLabel = String(total).padStart(2, '0');
    let photoHtml = '';
    const mediaItems = a.media || (a.imgs && a.imgs.length > 1 ? a.imgs.map(src => ({ type: 'img', src })) : null);
    if (mediaItems) {
      photoHtml = `
        <div class="card-slider" data-current="0">
          <div class="card-slider-track">
            ${mediaItems.map((item, i) => item.type === 'video'
              ? `<video src="${item.src}" muted playsinline loop preload="none" class="card-slide${i === 0 ? ' active' : ''}"></video>`
              : `<img src="${item.src}" alt="${a.nombre} ${i+1}" loading="${i === 0 ? 'eager' : 'lazy'}" class="card-slide${i === 0 ? ' active' : ''}" />`
            ).join('')}
          </div>
          <button class="slider-btn slider-prev" aria-label="Elemento anterior">‹</button>
          <button class="slider-btn slider-next" aria-label="Elemento siguiente">›</button>
          <div class="slider-dots">
            ${mediaItems.map((_, i) => `<span class="slider-dot${i === 0 ? ' active' : ''}"></span>`).join('')}
          </div>
        </div>`;
    } else if (a.img) {
      photoHtml = `<div class="card-photo${a.id <= 2 ? ' contain' : ''}"><img src="${a.img}" alt="${a.nombre}" loading="lazy" /></div>`;
    } else {
      photoHtml = `<span class="card-icon">${a.icon}</span>`;
    }
    return `
    <div class="armado-card reveal" data-id="${a.id}" role="button" tabindex="0" aria-label="Ver detalles de ${a.nombre}">
      ${photoHtml}
      <div class="card-number">${numLabel} / ${totalLabel}</div>
      <div class="card-name">${a.nombre}</div>
      <div class="card-subtitle">${a.subtitulo}</div>
      <div class="card-desc">${a.descripcion}</div>
      ${a.precio ? `<div class="card-price">${a.precio}</div>` : ''}
      <button class="card-btn" aria-label="Ver detalles de ${a.nombre}">
        <span>Ver detalles</span>
        <span>→</span>
      </button>
    </div>`;
  }).join('');

  // Slider logic
  container.querySelectorAll('.card-slider').forEach(slider => {
    const slides = slider.querySelectorAll('.card-slide');
    const dots = slider.querySelectorAll('.slider-dot');
    let current = 0;

    function goTo(n) {
      const prevEl = slides[current];
      if (prevEl.tagName === 'VIDEO') prevEl.pause();
      prevEl.classList.remove('active');
      dots[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      const nextEl = slides[current];
      nextEl.classList.add('active');
      dots[current].classList.add('active');
      if (nextEl.tagName === 'VIDEO') nextEl.play().catch(() => {});
    }

    if (slides[0] && slides[0].tagName === 'VIDEO') slides[0].play().catch(() => {});

    slider.querySelector('.slider-next').addEventListener('click', (e) => { e.stopPropagation(); goTo(current + 1); });
    slider.querySelector('.slider-prev').addEventListener('click', (e) => { e.stopPropagation(); goTo(current - 1); });
  });

  container.querySelectorAll('.armado-card').forEach(card => {
    const handler = () => {
      const id = parseInt(card.dataset.id);
      const data = armadosData.find(a => a.id === id);
      if (data) openModal(data);
    };
    card.addEventListener('click', handler);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') handler(); });
  });

  container.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== RENDER CARPAS =====
function renderCarpas() {
  const container = document.getElementById('carpas-grid');
  if (!container) return;

  container.innerHTML = carpasData.map(c => `
    <div class="carpa-card reveal" data-id="${c.id}" role="button" tabindex="0" aria-label="Ver detalles de ${c.nombre}">
      <div class="carpa-img">
        ${c.img ? `<img src="${c.img}" alt="${c.nombre}" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />` : `<span style="font-size:64px">⛺</span>`}
      </div>
      <div class="carpa-body">
        <div class="carpa-name">${c.nombre}</div>
        <div class="carpa-tag">${c.tipo}</div>
        <div class="carpa-desc">${c.descripcion}</div>
        <div class="carpa-footer">
          <div class="carpa-price">${c.precio}</div>
          <div class="carpa-cta">Ver más →</div>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.carpa-card').forEach(card => {
    const handler = () => {
      const id = card.dataset.id;
      const data = carpasData.find(c => c.id === id);
      if (data) openModal(data);
    };
    card.addEventListener('click', handler);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') handler(); });
  });

  container.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== RENDER OTRAS CATEGORIAS =====
function renderOtrasCategorias() {
  ['pisos', 'livings', 'calefactores'].forEach(cat => {
    const container = document.getElementById(`${cat}-grid`);
    if (!container || !categoriasData[cat]) return;

    container.innerHTML = categoriasData[cat].map((item, idx) => `
      <div class="armado-card reveal" data-cat="${cat}" data-idx="${idx}" role="button" tabindex="0" aria-label="Ver detalles de ${item.nombre}">
        ${item.img ? `<div class="card-photo"><img src="${item.img}" alt="${item.nombre}" loading="lazy" /></div>` : `<span class="card-icon">${item.icon}</span>`}
        <div class="card-name">${item.nombre}</div>
        <div class="card-desc">${item.nota}</div>
        <button class="card-btn" aria-label="Ver detalles de ${item.nombre}">
          <span>Ver detalles</span>
          <span>→</span>
        </button>
      </div>
    `).join('');

    container.querySelectorAll('.armado-card').forEach(card => {
      const handler = () => {
        const c = card.dataset.cat;
        const i = parseInt(card.dataset.idx);
        const data = categoriasData[c]?.[i];
        if (data) openModal(data);
      };
      card.addEventListener('click', handler);
      card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') handler(); });
    });

    container.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  });
}

// ===== TABS =====
function initTabs() {
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.cat-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.target);
      if (target) target.classList.add('active');
    });
  });
}

// ===== WA GENERAL =====
function buildWaLink(msg) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Set general WhatsApp links
document.querySelectorAll('[data-wa]').forEach(el => {
  const msg = el.dataset.wa || 'Hola Lucas, me gustaría consultar sobre sus servicios';
  const link = buildWaLink(msg);
  if (el.tagName === 'A') {
    el.href = link;
  } else {
    el.addEventListener('click', () => window.open(link, '_blank'));
  }
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderArmados();
  renderCarpas();
  renderOtrasCategorias();
  initTabs();

  // Animate hero number counters
  document.querySelectorAll('.stat-num[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = el.dataset.suffix ? target + el.dataset.suffix : target + '+';
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + (el.dataset.suffix || '+');
      }
    }, 40);
  });
});

// ===== EVENTOS: CLICK-TO-PLAY =====
document.querySelectorAll('.evento-embed-wrapper[data-embed-type]').forEach(function(wrapper) {
  var overlay = wrapper.querySelector('.evento-overlay');
  if (!overlay) return;

  function activate() {
    var type = wrapper.dataset.embedType;

    if (type === 'instagram') {
      var bq = document.createElement('blockquote');
      bq.className = 'instagram-media';
      bq.setAttribute('data-instgrm-permalink', wrapper.dataset.embedPermalink);
      bq.setAttribute('data-instgrm-version', '14');
      wrapper.insertBefore(bq, overlay);
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.instagram.com/embed.js';
        s.onload = function() { if (window.instgrm) window.instgrm.Embeds.process(); };
        document.body.appendChild(s);
      }
    } else if (type === 'tiktok') {
      // Iframe directo — independiente por tarjeta, no requiere embed.js compartido
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.tiktok.com/embed/v2/' + wrapper.dataset.embedVideoId;
      iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share');
      iframe.setAttribute('sandbox', 'allow-popups allow-popups-to-escape-sandbox allow-scripts allow-same-origin allow-forms');
      wrapper.insertBefore(iframe, overlay);
    }

    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setTimeout(function() { overlay.style.display = 'none'; }, 300);
  }

  overlay.addEventListener('click', activate);
  overlay.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') activate();
  });
});
