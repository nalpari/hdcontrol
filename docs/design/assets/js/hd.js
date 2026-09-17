/* 현대콘트롤전기 시안: 네비게이션, 인증 필터, FAQ 아코디언 */
(function () {
  'use strict';

  var mq = window.matchMedia('(max-width: 1100px)');

  /* ---- 메가메뉴 ------------------------------------------------------- */
  var items = Array.prototype.slice.call(document.querySelectorAll('.nav__item[data-mega]'));

  function close(item) {
    item.dataset.open = 'false';
    var link = item.querySelector('.nav__link');
    if (link) link.setAttribute('aria-expanded', 'false');
  }
  function open(item) {
    items.forEach(function (o) { if (o !== item) close(o); });
    item.dataset.open = 'true';
    var link = item.querySelector('.nav__link');
    if (link) link.setAttribute('aria-expanded', 'true');
  }

  items.forEach(function (item) {
    var link = item.querySelector('.nav__link');
    var timer;

    link.addEventListener('click', function (e) {
      // 데스크톱: 링크가 목적지로 동작. 모바일: 펼침 토글.
      if (!mq.matches) return;
      e.preventDefault();
      item.dataset.open === 'true' ? close(item) : open(item);
    });

    item.addEventListener('mouseenter', function () {
      if (mq.matches) return;
      clearTimeout(timer);
      open(item);
    });
    item.addEventListener('mouseleave', function () {
      if (mq.matches) return;
      timer = setTimeout(function () { close(item); }, 160);
    });
    item.addEventListener('focusin', function () { if (!mq.matches) open(item); });
    item.addEventListener('focusout', function (e) {
      if (mq.matches) return;
      if (!item.contains(e.relatedTarget)) close(item);
    });
  });

  /* ---- 모바일 서랍 ---------------------------------------------------- */
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  var scrim = document.querySelector('.scrim');

  function setDrawer(on) {
    if (!nav) return;
    nav.dataset.open = String(on);
    if (scrim) scrim.dataset.open = String(on);
    if (burger) burger.setAttribute('aria-expanded', String(on));
    document.documentElement.style.overflow = on ? 'hidden' : '';
  }

  if (burger) {
    burger.addEventListener('click', function () {
      setDrawer(nav.dataset.open !== 'true');
    });
  }
  if (scrim) scrim.addEventListener('click', function () { setDrawer(false); });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    items.forEach(close);
    setDrawer(false);
  });

  mq.addEventListener('change', function () {
    setDrawer(false);
    items.forEach(close);
  });

  /* ---- 인증 필터 ------------------------------------------------------ */
  var filterBar = document.querySelector('[data-filter-bar]');
  if (filterBar) {
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-kind]'));
    var count = document.querySelector('[data-filter-count]');
    var empty = document.querySelector('[data-filter-empty]');

    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-kind-filter]');
      if (!btn) return;

      filterBar.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });

      var kind = btn.dataset.kindFilter;
      var shown = 0;
      cards.forEach(function (c) {
        var on = kind === 'all' || c.dataset.kind === kind;
        c.hidden = !on;
        if (on) shown++;
      });
      if (count) count.textContent = shown;
      if (empty) empty.hidden = shown > 0;
    });
  }

  /* ---- FAQ 아코디언 --------------------------------------------------- */
  document.querySelectorAll('.acc__q').forEach(function (q) {
    q.addEventListener('click', function () {
      var on = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', String(!on));
    });
  });
})();
