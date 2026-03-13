/* ===== JL PRODUCTORA — JAVASCRIPT ===== */

// ===== DATA =====
const WHATSAPP_NUMBER = '5491136727858';

const armadosData = [
  {
    id: 1,
    nombre: 'Set Completo',
    subtitulo: 'La experiencia total',
    icon: '🏆',
    img: 'img/armado1_main.jpg',
    imgB: 'img/armado1_b.jpg',
    precio: '$750.000',
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
    precio: '$725.000',
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
    precio: '$700.000',
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
    precio: '$550.000',
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
    precio: '$450.000',
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
      'Cóctel / de pie: 70–95 personas',
      'Auditorio tipo teatro: 55–65 personas',
      'Banquete (mesas y sillas): 40–45 personas',
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
      'Cóctel / de pie: 65–90 personas',
      'Auditorio tipo teatro: 40–45 personas',
      'Banquete (mesas y sillas): 25–30 personas',
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
      'Cóctel / de pie: 90–120 personas',
      'Auditorio tipo teatro: 60–70 personas',
      'Banquete (mesas y sillas): 40–50 personas',
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
      'Gran capacidad de personas',
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
      'Ideal para 80–150 personas',
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
      img: 'img/piso_damero_main.jpg',
      desc: 'Clásico piso en blanco y negro. Elegante y diferenciador, ideal para cualquier evento. Se arma a la medida exacta que necesitás.'
    },
    {
      nombre: 'Piso Todo Negro',
      icon: '⬛',
      img: 'img/piso_negro_main.jpg',
      desc: 'Piso monocromático negro. Perfecto para ambientes oscuros y sofisticados. Resalta cualquier tipo de decoración e iluminación.'
    },
    {
      nombre: 'Piso Todo Blanco',
      icon: '⬜',
      img: 'img/piso_blanco_main.jpg',
      desc: 'Piso monocromático blanco. Transmite elegancia y luminosidad, ideal para casamientos y eventos diurnos.'
    },
    {
      nombre: 'Medida personalizada',
      icon: '📐',
      img: null,
      desc: 'Todos los pisos se arman exactamente a la medida que necesitás. El precio depende de los m² y la ubicación del evento.'
    }
  ],
  livings: [
    {
      nombre: 'Living 1 — Exterior',
      icon: '🪑',
      img: 'img/living1_main.jpg',
      desc: 'Living de exterior moderno con sillones y mesas ratona. Capacidad para 10 personas por set. Ideal para ambientes al aire libre.'
    },
    {
      nombre: 'Living 2 — Gervasoni',
      icon: '🛋️',
      img: 'img/living2_main.jpg',
      desc: 'Set Gervasoni: sofás blancos de diseño, mesa de madera natural y puffs. Capacidad 10 personas. Estética premium.'
    },
    {
      nombre: 'Living 3 — Puffs Blancos',
      icon: '⬜',
      img: 'img/living3_main.jpg',
      desc: 'Set de puffs blancos modernos. Ideal para events minimalistas y contemporáneos. Capacidad 10 personas por set.'
    }
  ],
  calefactores: [
    {
      nombre: 'Calefactores a Gas',
      icon: '🔥',
      img: 'img/calefactor_main.jpg',
      desc: 'Calefactores a gas de alta potencia, ideales para carpas y eventos de invierno. Cobertura amplia por unidad.'
    },
    {
      nombre: 'Consultar disponibilidad',
      icon: '🌡️',
      img: null,
      desc: 'Contamos con diferentes opciones de calefacción según el tamaño del espacio y el tipo de evento. Consultanos.'
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
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalItemsList = document.getElementById('modal-items-list');
  const modalNote = document.getElementById('modal-note');
  const modalWaBtn = document.getElementById('modal-wa-btn');
  const modalImgEl = document.getElementById('modal-img');

  modalTag.textContent = data.subtitulo || data.tipo || 'Detalle del servicio';
  modalTitle.textContent = data.nombre;
  modalPrice.textContent = data.precio;
  modalItemsList.innerHTML = data.items.map(item => `<li>${item}</li>`).join('');
  modalNote.textContent = data.nota || data.descripcion || '';

  if (modalImgEl) {
    if (data.img) {
      modalImgEl.src = data.img;
      modalImgEl.alt = data.nombre;
      modalImgEl.style.display = 'block';
    } else {
      modalImgEl.style.display = 'none';
    }
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
  if (e.key === 'Escape') closeModal();
});

// ===== RENDER ARMADOS =====
function renderArmados() {
  const container = document.getElementById('armados-grid');
  if (!container) return;

  container.innerHTML = armadosData.map(a => `
    <div class="armado-card reveal" data-id="${a.id}" role="button" tabindex="0" aria-label="Ver detalles de ${a.nombre}">
      ${a.img ? `<div class="card-photo${a.id <= 2 ? ' contain' : ''}"><img src="${a.img}" alt="${a.nombre}" loading="lazy" /></div>` : `<span class="card-icon">${a.icon}</span>`}
      <div class="card-number">0${a.id} / 05</div>
      <div class="card-name">${a.nombre}</div>
      <div class="card-subtitle">${a.subtitulo}</div>
      <div class="card-desc">${a.descripcion}</div>
      <div class="card-price">${a.precio}</div>
      <button class="card-btn" aria-label="Ver detalles de ${a.nombre}">
        <span>Ver detalles</span>
        <span>→</span>
      </button>
    </div>
  `).join('');

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

    container.innerHTML = categoriasData[cat].map(item => `
      <div class="armado-card reveal">
        ${item.img ? `<div class="card-photo"><img src="${item.img}" alt="${item.nombre}" loading="lazy" /></div>` : `<span class="card-icon">${item.icon}</span>`}
        <div class="card-name">${item.nombre}</div>
        <div class="card-desc">${item.desc}</div>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola Lucas, me interesa consultar por ${item.nombre}`)}" 
           target="_blank" rel="noopener noreferrer" class="card-btn" aria-label="Consultar por ${item.nombre}">
          <span>Consultar</span>
          <span>→</span>
        </a>
      </div>
    `).join('');

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
