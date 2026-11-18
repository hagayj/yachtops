(function () {
  var KEY = 'yachtops-lang';
  var root = document.documentElement;
  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'he' || q === 'en') return q;
    try { var s = localStorage.getItem(KEY); if (s === 'he' || s === 'en') return s; } catch (e) {}
    return (navigator.language || '').toLowerCase().indexOf('he') === 0 ? 'he' : 'en';
  }
  function apply(l) {
    root.lang = l;
    root.dir = l === 'he' ? 'rtl' : 'ltr';
    try { localStorage.setItem(KEY, l); } catch (e) {}
    var t = root.getAttribute('data-title-' + l);
    if (t) document.title = t;
    var d = document.querySelector('meta[name="description"]');
    var dd = root.getAttribute('data-desc-' + l);
    if (d && dd) d.setAttribute('content', dd);
    var b = document.getElementById('lang-btn');
    if (b) b.setAttribute('aria-label', l === 'he' ? 'Switch to English' : 'החלף לעברית');
  }
  window.toggleLanguage = function () { apply(root.lang === 'he' ? 'en' : 'he'); };
  apply(pick());
})();
