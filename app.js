/* ═══════════════════════════════════════════════════════════
   Dra. Danna — app.js · Interacciones, animaciones y contacto
   ═══════════════════════════════════════════════════════════ */

// ── Navbar scroll ────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Hamburger menu ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  // Cerrar menú al hacer click en un link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// ── Intersection Observer (animaciones de entrada) ───────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-aos], .timeline-item').forEach(el => observer.observe(el));

// ── Active nav link on scroll ────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.remove('active-nav');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active-nav');
  });
}, { passive: true });

// ── Partículas (canvas HiDPI Retina) ─────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = 0, H = 0, particles = [];
  const COUNT = 50;
  const EMERALD = '16,185,129';

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x   = Math.random() * (W || 300);
      this.y   = Math.random() * (H || 300);
      this.r   = Math.random() * 1.5 + 0.5;
      this.vx  = (Math.random() - 0.5) * 0.25;
      this.vy  = (Math.random() - 0.5) * 0.25;
      this.alpha = Math.random() * 0.4 + 0.12;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${EMERALD},${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          const opacity = (1 - dist / 130) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${EMERALD},${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(loop);
  }
  loop();
})();

// ── Formulario de contacto con redirección directa a WhatsApp ──
function handleSubmit(e) {
  e.preventDefault();
  const btn     = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const btnLoader = document.getElementById('btnLoader');
  const success = document.getElementById('formSuccess');

  btn.disabled = true;
  btnText.style.display = 'none';
  btnLoader.style.display = 'inline';

  const nombre   = document.getElementById('nombre')?.value || '';
  const email    = document.getElementById('email')?.value || '';
  const telefono = document.getElementById('telefono')?.value || '';
  const motivo   = document.getElementById('motivo')?.value || 'Consulta profesional';
  const mensaje  = document.getElementById('mensaje')?.value || '';

  // Mensaje estructurado para WhatsApp
  const textoWA = `Hola Dra. Danna Tupac,\n\nMi nombre es *${nombre}*.\nMotivo: ${motivo}\nMensaje: ${mensaje}\n\nContacto: ${email} ${telefono ? '| Tel: ' + telefono : ''}`;
  const urlWA = `https://wa.me/51939753987?text=${encodeURIComponent(textoWA)}`;

  setTimeout(() => {
    btn.disabled = false;
    btnText.style.display = 'inline';
    btnLoader.style.display = 'none';
    success.style.display = 'block';
    
    // Abrir WhatsApp con el mensaje estructurado
    window.open(urlWA, '_blank');
    
    e.target.reset();
    setTimeout(() => { success.style.display = 'none'; }, 8000);
  }, 900);
}

// ── Contador animado resiliente (sin error NaN) ───────────────
function animateCounter(el, target, suffix = '') {
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numEls = entry.target.querySelectorAll('.stat-num');
      numEls.forEach(el => {
        // Ignorar nodos estáticos o sin números (ej. "UPC", "111905" si tiene data-static)
        if (el.hasAttribute('data-static')) return;
        const raw = el.textContent.replace(/\D/g, '');
        if (!raw) return; // Protección absoluta contra NaN
        const target = parseInt(raw, 10);
        if (isNaN(target)) return;
        const suffix = el.textContent.includes('+') ? '+' : '';
        animateCounter(el, target, suffix);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsBlock = document.querySelector('.hero-stats');
if (statsBlock) statsObserver.observe(statsBlock);
