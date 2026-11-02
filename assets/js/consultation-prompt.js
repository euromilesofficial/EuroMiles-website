/* One invitation per tab session, after visible browsing time. */
(() => {
  'use strict';
  const dialog = document.querySelector('#consultation-dialog');
  if (!dialog) return;
  const key = 'euromiles-consultation-seen';
  let seen = false;
  try { seen = sessionStorage.getItem(key) === '1'; } catch { /* Memory fallback when storage is unavailable. */ }
  if (seen) return;
  let elapsed = 0, last = performance.now(), wasVisible = !document.hidden, timer;
  function remember() {
    seen = true;
    clearInterval(timer);
    try { sessionStorage.setItem(key, '1'); } catch { /* Keep the in-page fallback. */ }
  }
  // Includes manual opens from every existing CTA, even outside Section 8.
  const observer = new MutationObserver(() => {
    if (dialog.open) { remember(); observer.disconnect(); }
  });
  observer.observe(dialog, {attributes:true, attributeFilter:['open']});
  document.addEventListener('submit', event => {
    if (event.target.matches('.consultation-form, #s9-assessment-form, .hero-lead-form')) remember();
  }, true);
  function tick() {
    const now = performance.now();
    if (wasVisible && !document.hidden) elapsed += now - last;
    last = now;
    wasVisible = !document.hidden;
    if (seen || document.hidden) return;
    if (dialog.open) { remember(); return; }
    const delay = 25000;
    if (elapsed < delay || document.querySelector('dialog[open]')) return;
    if (document.activeElement?.matches('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
    remember();
    dialog.showModal();
  }
  document.addEventListener('visibilitychange', () => {
    // Account for the visible interval before pausing the clock.
    const now = performance.now();
    if (wasVisible) elapsed += now - last;
    last = now;
    wasVisible = !document.hidden;
  });
  timer = setInterval(tick, 500);
  if (dialog.open) remember();
})();
