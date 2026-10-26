// Menu no celular
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  btn.setAttribute('aria-expanded', aberto);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('aberto');
    btn.setAttribute('aria-expanded', 'false');
  }
});

// Destaca no menu a seção que está na tela
const links = [...menu.querySelectorAll('a')];
const secoes = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const obs = new IntersectionObserver(entradas => {
  entradas.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(a => a.classList.toggle('atual', a.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
secoes.forEach(s => obs.observe(s));

// Filtro de projetos
const filtros = document.querySelectorAll('.filtros button');
filtros.forEach(b => b.addEventListener('click', () => {
  filtros.forEach(x => x.classList.toggle('ativo', x === b));
  document.querySelectorAll('#projetos .card').forEach(c => {
    c.hidden = b.dataset.filtro !== 'todos' && c.dataset.cat !== b.dataset.filtro;
  });
}));

// Ano do rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
