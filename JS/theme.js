(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem('cv-theme'); } catch { /* Storage is optional. */ }
  let explicit = saved === 'dark' || saved === 'light';
  root.dataset.theme = explicit ? saved : preference.matches ? 'dark' : 'light';
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    const update = () => {
      const dark = root.dataset.theme === 'dark';
      button.setAttribute('aria-pressed', String(dark));
      button.querySelector('.theme-label').textContent = dark ? 'Light theme' : 'Dark theme';
    };
    button.hidden = false;
    update();
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      explicit = true;
      try { localStorage.setItem('cv-theme', root.dataset.theme); } catch { /* Keep the theme for this page. */ }
      update();
    });
    preference.addEventListener('change', event => {
      if (!explicit) { root.dataset.theme = event.matches ? 'dark' : 'light'; update(); }
    });
  });
})();
