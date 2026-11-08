(() => {
  'use strict';

  const dialog = document.querySelector('#consultation-dialog');
  document.querySelectorAll('[data-open-consultation]').forEach((button) => {
    button.addEventListener('click', () => {
      if (dialog && !dialog.open) dialog.showModal();
    });
  });

  const tocLinks = [...document.querySelectorAll('.sp-toc a')];
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const byId = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tocLinks.forEach((a) => a.classList.remove('is-active'));
        byId.get(entry.target.id)?.classList.add('is-active');
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    byId.forEach((_, id) => {
      const target = document.getElementById(id);
      if (target) observer.observe(target);
    });
  }

  const form = document.querySelector('[data-assessment-form]');
  if (form) {
    const status = form.querySelector('.sp-form-status');
    const rules = {
      name: (v) => v.trim().length >= 2 || 'Please enter your full name.',
      mobile: (v) => /^(?:\+?91[\s-]?)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '')) || 'Enter a valid 10-digit Indian mobile number.',
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || 'Enter a valid email address.',
      level: (v) => v !== '' || 'Please choose a study level.',
      marks: (v) => v.trim() !== '' || 'Tell us your latest percentage or CGPA.'
    };
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let firstInvalid = null;
      Object.entries(rules).forEach(([name, check]) => {
        const field = form.elements.namedItem(name);
        const result = check(field.value);
        const message = form.querySelector(`#err-${name}`);
        field.setAttribute('aria-invalid', result === true ? 'false' : 'true');
        if (message) message.textContent = result === true ? '' : result;
        if (result !== true && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        status.className = 'sp-form-status is-bad';
        status.textContent = 'Please fix the highlighted fields and try again.';
        firstInvalid.focus();
        return;
      }
      status.className = 'sp-form-status is-ok';
      status.textContent = 'Thank you. A senior EuroMiles counsellor will call you within one working day with your eligibility report.';
      form.reset();
    });
    const topic = new URLSearchParams(location.search).get('topic') || (location.hash === '#visa' ? 'visa' : '');
    const select = form.elements.namedItem('interest');
    if (topic && select) select.value = topic;
  }

  const finder = document.querySelector('[data-finder]');
  if (finder && window.EM_FINDER) window.EM_FINDER(finder);
})();
