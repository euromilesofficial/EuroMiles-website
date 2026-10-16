/* Connect the approved Why Italy cards to existing page tools. */
(() => {
  'use strict';
  const normalClick = event => !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0;
  const reveal = target => target?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  document.querySelectorAll('[data-why-faq]').forEach(link => link.addEventListener('click', event => {
    if (!normalClick(event)) return;
    const tab = document.getElementById(`s8-tab-${link.dataset.whyFaq}`);
    if (!tab) return;
    event.preventDefault();
    tab.click();
    const question = document.getElementById(`faq-${link.dataset.whyFaq}-${link.dataset.whyQuestion}-trigger`);
    if (question?.getAttribute('aria-expanded') === 'false') question.click();
    reveal(document.getElementById('study-in-italy-faq'));
    tab.focus({ preventScroll: true });
  }));
  document.querySelectorAll('[data-why-discovery]').forEach(link => link.addEventListener('click', event => {
    if (!normalClick(event)) return;
    const tab = document.getElementById(`section-three-${link.dataset.whyDiscovery}-tab`);
    if (!tab) return;
    event.preventDefault();
    tab.click();
    reveal(document.getElementById('section-three-universities'));
    tab.focus({ preventScroll: true });
  }));
  document.querySelector('.section-two-guidance-cta')?.addEventListener('click', event => {
    if (!normalClick(event)) return;
    const dialog = document.getElementById('consultation-dialog');
    if (!dialog) return;
    event.preventDefault();
    if (!dialog.open) dialog.showModal();
  });
})();
