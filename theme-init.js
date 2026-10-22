// Runs before first paint so the saved colour scheme applies without a flash.
// Dark ("deep space") is the default; a visitor's saved choice wins.
// Kept as an external file so the Content-Security-Policy can forbid inline scripts.
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var theme = 'dark';
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') theme = saved;
  } catch (e) {}
  root.setAttribute('data-theme', theme);
})();
