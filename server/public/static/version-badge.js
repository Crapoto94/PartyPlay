// Badge de version, en bas à gauche de toutes les pages.
(function () {
  function add(v) {
    if (document.getElementById('version-badge')) return;
    var el = document.createElement('div');
    el.id = 'version-badge';
    el.textContent = 'v' + v;
    el.style.cssText = [
      'position:fixed', 'left:8px', 'bottom:8px', 'z-index:2147483646',
      'font:600 11px/1 system-ui,-apple-system,Segoe UI,sans-serif',
      'color:#fff', 'background:rgba(0,0,0,.45)', 'padding:3px 7px',
      'border-radius:6px', 'letter-spacing:.5px', 'pointer-events:none',
      'opacity:.7', '-webkit-user-select:none', 'user-select:none'
    ].join(';');
    document.body.appendChild(el);
  }
  function boot() {
    fetch('/api/version').then(function (r) { return r.json(); })
      .then(function (d) { add(d && d.version ? d.version : '?'); })
      .catch(function () { add('?'); });
  }
  if (document.body) boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
