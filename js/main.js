/* Grupo Orth — interações (v2 dinâmica) */

/* ---------- Menu mobile ---------- */
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

/* ---------- Header muda ao rolar ---------- */
const header = document.getElementById('topo');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- Hero slideshow ---------- */
const slides = Array.from(document.querySelectorAll('.hero-slide'));
const dotsBox = document.getElementById('heroDots');
let current = 0, timer = null;

slides.forEach((_, i) => {
  const b = document.createElement('button');
  b.setAttribute('role', 'tab');
  b.setAttribute('aria-label', 'Imagem ' + (i + 1));
  if (i === 0) b.classList.add('active');
  b.addEventListener('click', () => go(i, true));
  dotsBox.appendChild(b);
});
const dots = Array.from(dotsBox.children);

function go(i, manual) {
  slides[current].classList.remove('is-active');
  dots[current].classList.remove('active');
  current = (i + slides.length) % slides.length;
  slides[current].classList.add('is-active');
  dots[current].classList.add('active');
  if (manual) restart();
}
function next() { go(current + 1); }
function start() { timer = setInterval(next, 6000); }
function restart() { clearInterval(timer); start(); }

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) start();

/* ---------- Reveal ao rolar ---------- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}

/* ---------- Contadores animados ---------- */
function animateCount(el) {
  const target = parseFloat(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const sep = el.dataset.sep === '1';
  const dur = 1600;
  const t0 = performance.now();
  function fmt(n) {
    n = Math.round(n);
    return sep ? n.toLocaleString('pt-BR') : String(n);
  }
  function step(now) {
    const p = Math.min((now - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + fmt(target * eased);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const statsGrid = document.getElementById('statsGrid');
if (statsGrid && 'IntersectionObserver' in window && !reduceMotion) {
  const so = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        statsGrid.querySelectorAll('.stat-num').forEach(animateCount);
        so.disconnect();
      }
    });
  }, { threshold: 0.4 });
  so.observe(statsGrid);
} else if (statsGrid) {
  statsGrid.querySelectorAll('.stat-num').forEach(el => {
    const prefix = el.dataset.prefix || '';
    const n = parseFloat(el.dataset.target);
    el.textContent = prefix + (el.dataset.sep === '1' ? n.toLocaleString('pt-BR') : n);
  });
}

/* ---------- Galeria: duplica itens p/ loop infinito ---------- */
const track = document.getElementById('galleryTrack');
if (track) track.innerHTML += track.innerHTML;

/* ---------- Rodapé ---------- */
document.getElementById('ano').textContent = new Date().getFullYear();
