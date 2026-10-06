(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  var REPO = 'https://github.com/ziadelh/';

  /* ---------- theme ---------- */
  var themeBtn = document.getElementById('theme');
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'light' ? '#f6f8ff' : '#0b1020');
  }
  themeBtn.addEventListener('click', function () {
    setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });

  /* ---------- hero network (decorative) ---------- */
  (function net() {
    var host = document.getElementById('net');
    var NS = 'http://www.w3.org/2000/svg';
    var layers = [3, 4, 4, 2], W = 520, H = 400, xs = [60, 190, 330, 460];
    var pts = layers.map(function (n, li) {
      return Array.from({ length: n }, function (_, i) { return { x: xs[li], y: (H / (n + 1)) * (i + 1) }; });
    });
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.innerHTML = '<defs><linearGradient id="ng" x1="0" x2="1"><stop offset="0" stop-color="#818cf8"/><stop offset="1" stop-color="#2dd4bf"/></linearGradient></defs>';
    function el(tag, attrs) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); return e; }
    for (var l = 0; l < pts.length - 1; l++)
      pts[l].forEach(function (a) { pts[l + 1].forEach(function (b) {
        svg.appendChild(el('line', { class: 'e', x1: a.x, y1: a.y, x2: b.x, y2: b.y }));
      }); });
    var k = 0;
    pts.forEach(function (layer) { layer.forEach(function (p) {
      svg.appendChild(el('circle', { class: 'n', cx: p.x, cy: p.y, r: 11 }));
      var dot = el('circle', { class: 'p', cx: p.x, cy: p.y, r: 4 });
      dot.style.animationDelay = ((k++ % 7) * 0.45) + 's';
      svg.appendChild(dot);
    }); });
    host.appendChild(svg);
  })();

  /* ---------- projects ---------- */
  var cats = window.CATEGORIES, projects = window.PROJECTS;
  var state = { cat: 'all', q: '' };
  var grid = document.getElementById('grid'), chips = document.getElementById('chips'),
      count = document.getElementById('count'), empty = document.getElementById('empty'),
      input = document.getElementById('q');
  var catLabel = {}; cats.forEach(function (c) { catLabel[c.id] = c.label; });

  function h(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function link(href, label, cls, aria) {
    var a = h('a', cls, label); a.href = href; a.rel = 'noopener';
    if (aria) a.setAttribute('aria-label', aria);
    return a;
  }

  function card(p, i) {
    var art = h('article', 'card reveal');
    art.style.setProperty('--d', Math.min(i, 8) * 45 + 'ms');
    var fig = h('div', 'card__img');
    var img = new Image(); img.src = 'img/projects/' + p.img + '.jpg'; img.width = 800; img.height = 500;
    img.loading = 'lazy'; img.alt = p.title + ' screenshot'; fig.appendChild(img);
    if (p.demo) fig.appendChild(h('span', 'card__live', 'Live demo'));
    var body = h('div', 'card__body');
    body.appendChild(h('span', 'card__cat', catLabel[p.cat]));
    body.appendChild(h('h3', null, p.title));
    body.appendChild(h('p', null, p.blurb));
    var tags = h('ul', 'tags'); p.tags.forEach(function (t) { tags.appendChild(h('li', null, t)); }); body.appendChild(tags);
    var links = h('div', 'card__links');
    if (p.demo) links.appendChild(link(p.demo, 'Open demo', 'primary', 'Open ' + p.title + ' live demo'));
    links.appendChild(link(REPO + p.repo, 'Code', p.demo ? '' : 'primary', p.title + ' source code on GitHub'));
    body.appendChild(links);
    art.appendChild(fig); art.appendChild(body);
    return art;
  }

  function matches(p) {
    if (state.cat !== 'all' && p.cat !== state.cat) return false;
    if (!state.q) return true;
    var hay = (p.title + ' ' + p.blurb + ' ' + p.tags.join(' ') + ' ' + catLabel[p.cat]).toLowerCase();
    return state.q.toLowerCase().split(/\s+/).every(function (w) { return hay.indexOf(w) > -1; });
  }

  function render() {
    var list = projects.filter(matches);
    grid.textContent = '';
    list.forEach(function (p, i) { grid.appendChild(card(p, i)); });
    empty.hidden = list.length > 0;
    count.textContent = 'Showing ' + list.length + ' of ' + projects.length + ' projects';
    observe(grid.querySelectorAll('.reveal'));
  }

  function buildChips() {
    var all = [{ id: 'all', label: 'All' }].concat(cats);
    all.forEach(function (c) {
      var n = c.id === 'all' ? projects.length : projects.filter(function (p) { return p.cat === c.id; }).length;
      var b = h('button', 'chip', c.label); b.type = 'button'; b.dataset.cat = c.id;
      b.setAttribute('aria-pressed', c.id === 'all' ? 'true' : 'false');
      b.appendChild(h('small', null, String(n)));
      b.addEventListener('click', function () {
        state.cat = c.id;
        chips.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        render();
      });
      chips.appendChild(b);
    });
  }
  var timer;
  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { state.q = input.value.trim(); render(); }, 120);
  });

  /* ---------- reveal on scroll + count-up ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in'); io.unobserve(e.target);
      e.target.querySelectorAll('[data-count]').forEach(countUp);
      if (e.target.hasAttribute('data-count')) countUp(e.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' }) : null;

  function observe(nodes) {
    nodes.forEach(function (n) { if (io && !reduce) io.observe(n); else n.classList.add('is-in'); });
  }

  function countUp(el) {
    if (reduce || el.dataset.done) return; el.dataset.done = '1';
    var end = parseFloat(el.dataset.count), dec = +(el.dataset.decimals || 0), t0 = null, dur = 900;
    function step(t) {
      if (t0 === null) t0 = t;
      var k = Math.min((t - t0) / dur, 1), v = end * (1 - Math.pow(1 - k, 3));
      el.textContent = v.toFixed(dec);
      if (k < 1) requestAnimationFrame(step); else el.textContent = end.toFixed(dec);
    }
    el.textContent = (0).toFixed(dec); requestAnimationFrame(step);
  }

  buildChips(); render();
  observe(document.querySelectorAll('.reveal'));
  document.getElementById('yr').textContent = new Date().getFullYear();
})();
