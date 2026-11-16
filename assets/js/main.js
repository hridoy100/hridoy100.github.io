// Site interactions: theme toggle, mobile nav, header state, search, citations, reveal.
(function () {
  var root = document.documentElement;

  // ---- Theme ----
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      document.dispatchEvent(new CustomEvent('themechange', { detail: next }));
    });
  });

  // ---- Mobile nav ----
  var nav = document.getElementById('site-nav');
  var menuBtn = document.querySelector('[data-menu-toggle]');
  if (nav && menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus();
      }
    });
  }

  // ---- Header border on scroll ----
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- Search (Pagefind, loaded on demand) ----
  var dialog = document.getElementById('search-dialog');
  var searchLoaded = false;
  function loadSearch() {
    if (searchLoaded) return;
    searchLoaded = true;
    var base = dialog.getAttribute('data-base') || '/';
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = base + 'pagefind/pagefind-ui.css';
    document.head.appendChild(css);
    var s = document.createElement('script');
    s.src = base + 'pagefind/pagefind-ui.js';
    s.onload = function () {
      /* global PagefindUI */
      new PagefindUI({ element: '#search', showSubResults: true, showImages: false, autofocus: true });
      var input = dialog.querySelector('input');
      if (input) input.focus();
    };
    s.onerror = function () {
      document.getElementById('search').innerHTML =
        '<p class="hint">Search is available on the published site (the index is built during deployment).</p>';
    };
    document.head.appendChild(s);
  }
  function openSearch() {
    if (!dialog) return;
    loadSearch();
    dialog.showModal();
    var input = dialog.querySelector('input');
    if (input) setTimeout(function () { input.focus(); }, 30);
  }
  document.querySelectorAll('[data-search-open]').forEach(function (b) { b.addEventListener('click', openSearch); });
  if (dialog) {
    dialog.querySelector('[data-search-close]').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  }
  document.addEventListener('keydown', function (e) {
    var tag = (e.target && e.target.tagName) || '';
    var typing = /INPUT|TEXTAREA|SELECT/.test(tag) || (e.target && e.target.isContentEditable);
    if ((e.key === '/' && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      openSearch();
    }
  });

  // ---- Cite toggles ----
  document.querySelectorAll('[data-cite-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var box = document.getElementById(btn.getAttribute('aria-controls'));
      if (!box) return;
      var open = box.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.getAttribute('data-copy'));
      if (!target || !navigator.clipboard) return;
      navigator.clipboard.writeText(target.textContent.trim()).then(function () {
        var old = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = old; }, 1400);
      });
    });
  });

  // ---- Publication filters ----
  var filterBar = document.querySelector('[data-filters]');
  if (filterBar) {
    filterBar.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-filter]');
      if (!b) return;
      var f = b.getAttribute('data-filter');
      filterBar.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      document.querySelectorAll('[data-type]').forEach(function (item) {
        item.hidden = f !== 'all' && item.getAttribute('data-type').split(' ').indexOf(f) === -1;
      });
      document.querySelectorAll('.year-group').forEach(function (g) {
        g.hidden = !g.querySelector('[data-type]:not([hidden])');
      });
    });
  }

  // ---- Image save deterrents (right-click / drag on images) ----
  if (document.body.classList.contains('protect-images')) {
    ['contextmenu', 'dragstart'].forEach(function (evt) {
      document.addEventListener(evt, function (e) {
        if (e.target && e.target.tagName === 'IMG') e.preventDefault();
      });
    });
  }
})();
