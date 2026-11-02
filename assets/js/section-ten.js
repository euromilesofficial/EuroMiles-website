document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const footer = document.querySelector('#site-footer');
  if (!footer) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const scrollTo = target => target?.scrollIntoView({behavior:reduced.matches ? 'auto' : 'smooth',block:'start'});
  footer.querySelector('[data-footer-year]').textContent = new Date().getFullYear();
  footer.querySelector('[data-footer-assessment]')?.addEventListener('click',event => {
    event.preventDefault();
    scrollTo(document.querySelector('#free-profile-assessment'));
    document.querySelector('#s9-student-name')?.focus({preventScroll:true});
  });
  footer.querySelectorAll('[data-footer-faq]').forEach(link => link.addEventListener('click',event => {
    const category = link.dataset.footerFaq;
    const tab = document.querySelector(`#s8-tab-${category}`);
    if (!tab) return;
    event.preventDefault();
    tab.click();
    const question = document.querySelector(`#faq-${category}-${link.dataset.footerQuestion}-trigger`);
    if (question?.getAttribute('aria-expanded') === 'false') question.click();
    scrollTo(document.querySelector('#study-in-italy-faq'));
    tab.focus({preventScroll:true});
  }));
  footer.querySelectorAll('[data-footer-discovery]').forEach(link => link.addEventListener('click',() => {
    document.querySelector(`#section-three-${link.dataset.footerDiscovery}-tab`)?.click();
  }));
  const form = footer.querySelector('#s10-newsletter-form');
  const email = form.elements.namedItem('email');
  const feedback = form.querySelector('#s10-newsletter-feedback');
  const status = form.querySelector('#s10-newsletter-status');
  function validateEmail() {
    email.dataset.touched = 'true';
    return window.EuroMilesValidation?.validateEmailField(email,feedback) ?? email.validity.valid;
  }
  email.addEventListener('input',() => { validateEmail(); status.textContent = ''; });
  email.addEventListener('blur',validateEmail);
  email.addEventListener('invalid',validateEmail);
  form.addEventListener('submit',event => {
    event.preventDefault();
    if (!validateEmail()) { email.reportValidity(); return; }
    status.textContent = 'Newsletter subscriptions are not connected yet. Your email has not been sent or subscribed.';
  });
  const dialog = document.querySelector('#footer-policy-dialog');
  const title = dialog.querySelector('#s10-policy-title');
  const content = dialog.querySelector('[data-footer-policy-content]');
  function openInfo(label) {
    title.textContent = label;
    content.replaceChildren();
    const paragraph = document.createElement('p');
    paragraph.textContent = `${label} content has not been added yet. Please contact EuroMiles for more information.`;
    content.append(paragraph);
    if (!dialog.open) dialog.showModal();
  }
  footer.querySelectorAll('[data-footer-policy]').forEach(button => button.addEventListener('click',() => openInfo(button.dataset.footerPolicy)));
  footer.querySelector('[data-footer-sitemap]').addEventListener('click',event => {
    event.preventDefault();
    title.textContent = 'Sitemap';
    const list = document.createElement('ul');
    [['Study in Italy','why-italy'],['Universities & Programmes','section-3-discovery-hub'],['Why EuroMiles','why-euromiles'],['Your Italy Journey','euromiles-journey'],['Videos & Experiences','euromiles-in-action'],['Student Stories & Reviews','student-stories-reviews'],['Your Questions, Answered','study-in-italy-faq'],['Free Profile Assessment','free-profile-assessment'],['Contact & Offices','footer-contact']].forEach(([label,id]) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = label;
      link.href = `#${id}`;
      link.addEventListener('click',() => dialog.close());
      item.append(link);
      list.append(item);
    });
    content.replaceChildren(list);
    if (!dialog.open) dialog.showModal();
  });
  dialog.querySelector('.s10-policy-close').addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => { if (event.target === dialog) dialog.close(); });
});
