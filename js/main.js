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
function restart() { clearInterval(timer); if (!reduceMotion) start(); }

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) start();

/* Setas do teclado também trocam as fotos do hero */
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') go(current + 1, true);
  else if (e.key === 'ArrowLeft') go(current - 1, true);
});

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

/* ---------- Galeria: duplica itens p/ loop infinito ----------
   O conteúdo precisa ser 2× um padrão p/ o translateX(-50%) emendar sem pulo.
   Dobra de novo enquanto metade da faixa não cobrir a largura da tela. */
const track = document.getElementById('galleryTrack');
if (track) {
  track.innerHTML += track.innerHTML;
  while (track.scrollWidth / 2 < window.innerWidth && track.children.length < 60) {
    track.innerHTML += track.innerHTML;
  }
}

/* ---------- Rodapé ---------- */
document.getElementById('ano').textContent = new Date().getFullYear();
