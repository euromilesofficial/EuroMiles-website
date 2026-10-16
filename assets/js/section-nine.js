document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const form = document.querySelector('#s9-assessment-form');
  if (!form) return;
  const status = form.querySelector('[data-assessment-status]');
  const phone = form.elements.namedItem('phone');
  const email = form.elements.namedItem('email');
  const shared = window.EuroMilesValidation;
  const student = form.elements.namedItem('student_name');
  function validate(field,show = false) {
    if (shared && (field === phone || field === email)) {
      if (show) field.dataset.touched = 'true';
      return field === phone
        ? shared.validateIndianMobileField(field,form.querySelector('#s9-phone-error'))
        : shared.validateEmailField(field,form.querySelector('#s9-email-error'));
    }
    field.setCustomValidity('');
    if (field === student && field.value && !field.value.trim()) field.setCustomValidity('Please enter the student’s name.');
    const valid = field.validity.valid;
    if (show) {
      field.setAttribute('aria-invalid',String(!valid));
      const error = form.querySelector(`#${field.id}-error`);
      if (error) error.textContent = valid ? '' : field.validationMessage;
    }
    return valid;
  }
  form.querySelectorAll('input,select,textarea').forEach(field => {
    field.addEventListener('input',() => { validate(field,field === phone || field === email || field.getAttribute('aria-invalid') === 'true'); status.textContent = ''; });
    field.addEventListener('blur',() => { if (field.value || field === phone || field === email) validate(field,true); });
    field.addEventListener('invalid',() => { validate(field,true); status.textContent = 'Please check the highlighted fields and consent to being contacted.'; });
  });
  form.addEventListener('submit',event => {
    event.preventDefault();
    const valid = [...form.querySelectorAll('input,select,textarea')].every(field => validate(field,true));
    if (!valid) { form.reportValidity(); return; }
    // Consistent with the existing hero and consultation prototype forms.
    status.textContent = 'This assessment form is not connected yet, so your details have not been sent.';
  });
});
