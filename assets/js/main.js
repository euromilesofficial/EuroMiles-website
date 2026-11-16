/**
 * EUROMILES — MASTER JAVASCRIPT
 * High-performance, vanilla JS for header, navigation,
 * modals, and interactive behaviors. Zero heavy libraries.
 */

document.addEventListener('DOMContentLoaded', () => {
  // The prototype announcements are supplied through data-announcements so a
  // WordPress template can later populate the same element from database rows.
  document.querySelectorAll('[data-announcement-rotator]').forEach((announcement) => {
    let messages = [];
    try {
      messages = JSON.parse(announcement.dataset.announcements || '[]')
        .filter((message) => typeof message === 'string' && message.trim());
    } catch {
      messages = [];
    }

    if (messages.length > 1) {
      let messageIndex = 0;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reducedMotion) {
        window.setInterval(() => {
          messageIndex = (messageIndex + 1) % messages.length;
          announcement.textContent = messages[messageIndex];
        }, 5000);
      } else {
        let isDeleting = false;

        const typeNextCharacter = () => {
          const message = messages[messageIndex];
          const currentText = announcement.textContent;

          if (!isDeleting && currentText.length < message.length) {
            announcement.textContent = message.slice(0, currentText.length + 1);
            window.setTimeout(typeNextCharacter, 48);
            return;
          }

          if (!isDeleting) {
            isDeleting = true;
            window.setTimeout(typeNextCharacter, 2200);
            return;
          }

          if (currentText.length > 0) {
            announcement.textContent = currentText.slice(0, -1);
            window.setTimeout(typeNextCharacter, 24);
            return;
          }

          isDeleting = false;
          messageIndex = (messageIndex + 1) % messages.length;
          window.setTimeout(typeNextCharacter, 180);
        };

        window.setTimeout(typeNextCharacter, 2200);
      }
    }
  });

  // Shared behavior for all navigation mega menus
  const megaMenus = [...document.querySelectorAll('.study-menu')];
  const megaMenuBackdrop = document.querySelector('.mega-menu-backdrop');
  const compactNavigation = window.matchMedia('(max-width: 1350px)');
  const navigationDialog = document.querySelector('#navigation-dialog');
  const navigationToggle = document.querySelector('.nav-menu-toggle');
  const navigationLinks = document.querySelector('.main-nav > .nav-links');
  const navigationHome = navigationLinks?.parentElement;
  const navigationContent = navigationDialog?.querySelector('.navigation-dialog-content');
  let navigationBodyOverflow = '';
  const menuCloseTimers = new WeakMap();
  let menuToIgnoreOnFocus = null;

  function setMegaMenuOpen(menu, isOpen) {
    const toggle = menu.querySelector('.study-menu-toggle');
    const panel = menu.querySelector('.study-mega-menu');
    if (!toggle || !panel) return;

    window.clearTimeout(menuCloseTimers.get(menu));
    if (isOpen) {
      megaMenus.forEach((otherMenu) => {
        if (otherMenu !== menu && otherMenu.classList.contains('is-open')) {
          setMegaMenuOpen(otherMenu, false);
        }
      });
    }

    menu.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    panel.setAttribute('aria-hidden', String(!isOpen));
    megaMenuBackdrop?.classList.toggle('is-visible', !compactNavigation.matches && megaMenus.some((item) => item.classList.contains('is-open')));
  }

  megaMenus.forEach((menu) => {
    const toggle = menu.querySelector('.study-menu-toggle');
    const panel = menu.querySelector('.study-mega-menu');

    menu.addEventListener('pointerenter', (event) => {
      if (!compactNavigation.matches && event.pointerType === 'mouse') setMegaMenuOpen(menu, true);
    });
    menu.addEventListener('pointerleave', () => {
      if (compactNavigation.matches) return;
      window.clearTimeout(menuCloseTimers.get(menu));
      menuCloseTimers.set(menu, window.setTimeout(() => {
        if (!menu.matches(':hover') && !menu.contains(document.activeElement)) {
          setMegaMenuOpen(menu, false);
        }
      }, 140));
    });
    menu.addEventListener('focusin', () => {
      if (!compactNavigation.matches && menuToIgnoreOnFocus !== menu && toggle?.matches(':focus-visible')) {
        setMegaMenuOpen(menu, true);
      }
    });
    menu.addEventListener('focusout', () => {
      if (compactNavigation.matches) return;
      window.setTimeout(() => {
        if (!menu.contains(document.activeElement)) setMegaMenuOpen(menu, false);
      }, 0);
    });

    toggle?.addEventListener('click', (event) => {
      const isHoverPointer = !compactNavigation.matches && window.matchMedia('(hover: hover)').matches && event.detail > 0;
      const isKeyboardActivation = !compactNavigation.matches && event.detail === 0;
      setMegaMenuOpen(menu, isHoverPointer || isKeyboardActivation || !menu.classList.contains('is-open'));
    });

    panel?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        setMegaMenuOpen(menu, false);
        if (compactNavigation.matches) closeNavigation();
      });
    });
  });

  megaMenuBackdrop?.addEventListener('click', () => {
    megaMenus.forEach((menu) => setMegaMenuOpen(menu, false));
  });
  document.addEventListener('pointerdown', (event) => {
    if (!megaMenus.some((menu) => menu.contains(event.target)) && !megaMenuBackdrop?.contains(event.target)) {
      megaMenus.forEach((menu) => setMegaMenuOpen(menu, false));
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !navigationDialog?.open) {
      const openMenu = megaMenus.find((menu) => menu.classList.contains('is-open'));
      if (openMenu) {
        setMegaMenuOpen(openMenu, false);
        menuToIgnoreOnFocus = openMenu;
        openMenu.querySelector('.study-menu-toggle')?.focus();
        window.setTimeout(() => { menuToIgnoreOnFocus = null; }, 0);
      }
    }
  });

  // The same links move into the native dialog on compact screens, retaining
  // their IDs, content, and event handlers without duplicate menu markup.
  function closeNavigation() {
    navigationDialog?.close();
  }
  navigationToggle?.addEventListener('click', () => {
    if (!navigationDialog || navigationDialog.open) return;
    navigationBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    navigationDialog.showModal();
    navigationToggle.setAttribute('aria-expanded', 'true');
  });
  navigationDialog?.querySelector('.navigation-close')?.addEventListener('click', closeNavigation);
  navigationDialog?.addEventListener('close', () => {
    document.body.style.overflow = navigationBodyOverflow;
    navigationToggle?.setAttribute('aria-expanded', 'false');
    megaMenus.forEach((menu) => setMegaMenuOpen(menu, false));
  });
  navigationDialog?.addEventListener('click', (event) => {
    if (event.target !== navigationDialog) return;
    const bounds = navigationDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeNavigation();
  });
  function syncNavigationLayout() {
    if (!navigationLinks || !navigationHome || !navigationContent) return;
    if (navigationDialog?.open) closeNavigation();
    megaMenus.forEach((menu) => setMegaMenuOpen(menu, false));
    megaMenus.forEach((menu) => {
      const toggle = menu.querySelector('.study-menu-toggle');
      if (compactNavigation.matches) toggle?.removeAttribute('aria-haspopup');
      else toggle?.setAttribute('aria-haspopup', 'true');
    });
    if (compactNavigation.matches) navigationContent.append(navigationLinks);
    else navigationHome.insertBefore(navigationLinks, navigationHome.querySelector('.btn-consultation'));
  }
  compactNavigation.addEventListener('change', syncNavigationLayout);
  syncNavigationLayout();

  // Header consultation CTA and its accessible native dialog
  const consultationDialog = document.querySelector('#consultation-dialog');
  const consultationOpenButton = document.querySelector('.btn-consultation');
  const sectionThreeShortlistButtons = document.querySelectorAll('.section-three-shortlist-button');
  const consultationCloseButton = consultationDialog?.querySelector('.consultation-close');
  const consultationForm = consultationDialog?.querySelector('.consultation-form');
  const consultationFormStatus = consultationDialog?.querySelector('.consultation-form-status');
  const consultationMobile = consultationForm?.elements.namedItem('mobile');
  const consultationEmail = consultationForm?.elements.namedItem('email');
  const consultationMobileFeedback = consultationForm?.querySelector('#consultation-mobile-feedback');
  const consultationEmailFeedback = consultationForm?.querySelector('#consultation-email-feedback');

  navigationDialog?.querySelector('.navigation-consultation')?.addEventListener('click', () => {
    closeNavigation();
    if (consultationDialog && !consultationDialog.open) consultationDialog.showModal();
  });

  document.querySelector('.btn-counsellor')?.addEventListener('click', () => {
    if (consultationDialog && !consultationDialog.open) consultationDialog.showModal();
  });

  consultationOpenButton?.addEventListener('click', () => {
    if (consultationDialog && !consultationDialog.open) consultationDialog.showModal();
  });

  sectionThreeShortlistButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (!consultationDialog) return;
      event.preventDefault();
      if (!consultationDialog.open) consultationDialog.showModal();
    });
  });

  // Section 3 discovery tabs keep the approved university view intact and
  // reveal the matching programme panel on demand.
  const discoveryTabs = [...document.querySelectorAll('.section-three-discovery-tab[role="tab"]')];
  const discoveryNotes = [...document.querySelectorAll('[data-discovery-note]')];
  const discoveryCtas = [...document.querySelectorAll('[data-discovery-cta]')];
  const discoveryPanels = discoveryTabs
    .map((tab) => document.getElementById(tab.getAttribute('aria-controls')))
    .filter(Boolean);

  const selectDiscoveryTab = (tab, moveFocus = false) => {
    const selectedPanelId = tab.getAttribute('aria-controls');
    discoveryTabs.forEach((candidate) => {
      const selected = candidate === tab;
      candidate.setAttribute('aria-selected', String(selected));
      candidate.tabIndex = selected ? 0 : -1;
      if (selected && moveFocus) candidate.focus();
    });
    discoveryPanels.forEach((panel) => {
      panel.hidden = panel.id !== selectedPanelId;
    });
    const selectedTab = tab.id.includes('programmes') ? 'programmes' : 'universities';
    discoveryNotes.forEach((note) => {
      note.hidden = note.dataset.discoveryNote !== selectedTab;
    });
    discoveryCtas.forEach((cta) => {
      cta.hidden = cta.dataset.discoveryCta !== selectedTab;
    });
  };

  discoveryTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectDiscoveryTab(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? discoveryTabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + discoveryTabs.length) % discoveryTabs.length;
      selectDiscoveryTab(discoveryTabs[nextIndex], true);
    });
  });
  const initiallySelectedDiscoveryTab = discoveryTabs.find((tab) => tab.getAttribute('aria-selected') === 'true');
  if (initiallySelectedDiscoveryTab) selectDiscoveryTab(initiallySelectedDiscoveryTab);

  consultationCloseButton?.addEventListener('click', () => consultationDialog?.close());

  consultationDialog?.addEventListener('click', (event) => {
    if (event.target === consultationDialog) consultationDialog.close();
  });

  // 1. Adaptive Morphing Sticky Header
  const header = document.querySelector('.main-header');
  const topBar = document.querySelector('.top-bar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header?.classList.add('is-sticky');
    } else {
      header?.classList.remove('is-sticky');
    }
  }, { passive: true });

  // 3. Hero Lead Assessment Form (UI only until a submission endpoint is configured)
  const heroForm = document.querySelector('.hero-lead-form');
  const heroMobile = heroForm?.elements.namedItem('mobile');
  const heroEmail = heroForm?.elements.namedItem('email');
  const heroStatus = heroForm?.querySelector('.hero-form-status');
  const mobileFeedback = heroForm?.querySelector('#hero-mobile-feedback');
  const emailFeedback = heroForm?.querySelector('#hero-email-feedback');

  const syncHeroFieldPlaceholder = (field) => {
    const hasValue = Boolean(field.value.trim());
    field.closest('.hero-field, .consultation-input-wrap')?.classList.toggle('has-value', hasValue);
    field.setAttribute('aria-invalid', 'false');
  };

  document.querySelectorAll('.hero-field input, .hero-field select, .consultation-input-wrap input, .consultation-input-wrap select, .consultation-input-wrap textarea').forEach((field) => {
    syncHeroFieldPlaceholder(field);
    field.addEventListener('input', () => syncHeroFieldPlaceholder(field));
    field.addEventListener('change', () => syncHeroFieldPlaceholder(field));
  });

  const showFieldFeedback = (input, feedback, message, state = 'invalid') => {
    if (!input || !feedback) return;
    const field = input.closest('.hero-field, .consultation-input-wrap, .s9-field');
    const isVisible = Boolean(message);
    feedback.textContent = message;
    feedback.classList.toggle('is-visible', isVisible);
    feedback.classList.toggle('is-incomplete', isVisible && state === 'incomplete');
    field?.classList.toggle('is-invalid', isVisible && state === 'invalid');
    field?.classList.toggle('is-incomplete', isVisible && state === 'incomplete');
    input.setAttribute('aria-invalid', String(isVisible));
  };

  const validateIndianMobileField = (input = heroMobile, feedback = mobileFeedback) => {
    if (!input) return true;
    const rawValue = input.value.trim();
    if (!rawValue) {
      input.setCustomValidity('');
      const message = input.dataset.touched === 'true' ? 'Mobile number is required.' : '';
      showFieldFeedback(input, feedback, message);
      return !message;
    }

    if (!/^[+\d\s().-]+$/.test(rawValue)) {
      const message = 'Use digits only; spaces, parentheses, +, and hyphens are allowed.';
      input.setCustomValidity(message);
      showFieldFeedback(input, feedback, message);
      return false;
    }

    const digits = rawValue.replace(/\D/g, '');
    const obviousPlaceholders = new Set([
      '0000000000', '1111111111', '1234567890', '0123456789',
      '0987654321', '9876543210', '9999999999'
    ]);
    const repeatedPattern = /^(\d{1,5})\1+$/.test(digits);

    if (digits.length > 10) {
      const message = 'Enter 10 digits only. The +91 country code is already shown.';
      input.setCustomValidity(message);
      showFieldFeedback(input, feedback, message);
      return false;
    }
    if (digits.length > 0 && !/^[6-9]/.test(digits)) {
      const message = 'An Indian mobile number must start with 6, 7, 8, or 9.';
      input.setCustomValidity(message);
      showFieldFeedback(input, feedback, message);
      return false;
    }
    if (digits.length < 10) {
      const remaining = 10 - digits.length;
      const message = `Enter ${remaining} more digit${remaining === 1 ? '' : 's'} to complete the number.`;
      input.setCustomValidity(message);
      showFieldFeedback(input, feedback, message, 'incomplete');
      return false;
    }
    if (obviousPlaceholders.has(digits) || repeatedPattern) {
      const message = 'This looks like a placeholder number. Enter a valid mobile number.';
      input.setCustomValidity(message);
      showFieldFeedback(input, feedback, message);
      return false;
    }

    input.setCustomValidity('');
    showFieldFeedback(input, feedback, '');
    return true;
  };

  // Keep this provider allowlist explicit and easy to extend when a verified provider is requested.
  // Provider aliases are drawn from their published supported address domains where available.
  const acceptedEmailDomains = new Set([
    // Google
    'gmail.com', 'googlemail.com',
    // Microsoft
    'outlook.com', 'outlook.in', 'hotmail.com', 'hotmail.co.uk', 'hotmail.fr',
    'live.com', 'live.co.uk', 'msn.com',
    // Yahoo
    'yahoo.com', 'yahoo.co.in', 'yahoo.co.uk', 'yahoo.ca', 'yahoo.com.au',
    'yahoo.co.jp', 'ymail.com', 'rocketmail.com',
    // Apple, AOL, and privacy-focused providers
    'icloud.com', 'me.com', 'mac.com', 'aol.com',
    'proton.me', 'protonmail.com', 'protonmail.ch', 'pm.me',
    'tuta.com', 'tutanota.com', 'tutanota.de', 'tutamail.com', 'tuta.io', 'keemail.me',
    'hey.com',
    // Zoho and other established international providers
    'zoho.com', 'zohomail.com', 'zoho.in', 'zoho.eu',
    'gmx.com', 'gmx.net', 'gmx.de', 'gmx.at', 'gmx.ch',
    'mail.com', 'email.com', 'usa.com', 'dr.com',
    'fastmail.com', 'fastmail.fm', 'fastmail.net', 'fastmail.org', 'fastmail.ca',
    'fastmail.com.au', 'fastmail.co.uk', 'fastmail.de', 'fastmail.es', 'fastmail.fr',
    'fastmail.in', 'fastmail.jp', 'fastmail.nl', 'fastmail.se', 'fastmail.us',
    'rediffmail.com', 'yandex.com', 'yandex.ru', 'yandex.kz', 'yandex.by', 'ya.ru',
    'mail.ru', 'inbox.ru', 'list.ru', 'bk.ru',
    // Established East Asian providers
    '163.com', '126.com', 'yeah.net', '188.com', 'qq.com', 'foxmail.com',
    'sina.com', 'sina.cn', 'sohu.com', 'aliyun.com', 'naver.com', 'daum.net', 'hanmail.net'
  ]);

  const validateEmailField = (input = heroEmail, feedback = emailFeedback) => {
    if (!input) return true;
    const value = input.value.trim().toLowerCase();
    if (!value) {
      input.setCustomValidity('');
      if (!input.required) {
        showFieldFeedback(input, feedback, '');
        return true;
      }
      const message = input.dataset.touched === 'true' ? 'Email address is required.' : '';
      showFieldFeedback(input, feedback, message);
      return !message;
    }

    if (value.length > 254) {
      const message = 'Email addresses must be 254 characters or fewer.';
      input.setCustomValidity(message);
      showFieldFeedback(input, feedback, message);
      return false;
    }
    if (input.validity.typeMismatch) {
      const message = 'Enter a complete email address, such as name@gmail.com.';
      input.setCustomValidity(message);
      showFieldFeedback(input, feedback, message);
      return false;
    }

    const atIndex = value.lastIndexOf('@');
    const localPart = value.slice(0, atIndex);
    const domain = value.slice(atIndex + 1);
    const domainLabels = domain.split('.');
    const domainIsMalformed = localPart.length > 64
      || domainLabels.length < 2
      || domainLabels.some((label) => !label || label.length > 63 || label.startsWith('-') || label.endsWith('-'));
    if (domainIsMalformed) {
      const message = 'Check the email name and domain, then try again.';
      input.setCustomValidity(message);
      showFieldFeedback(input, feedback, message);
      return false;
    }

    const isPlaceholder = ['test', 'fake', 'user', 'yourname', 'email', 'student', 'abc', '123'].includes(localPart)
      || ['example', 'invalid', 'test'].includes(domain.split('.').pop());
    if (isPlaceholder) {
      const message = 'Enter your own email address, not a sample or placeholder address.';
      input.setCustomValidity(message);
      showFieldFeedback(input, feedback, message);
      return false;
    }

    const isAcademicDomain = domainLabels.some((label) => ['edu', 'ac', 'university', 'universita', 'college', 'institute'].includes(label));
    if (input.dataset.emailDomainMode !== 'any' && !acceptedEmailDomains.has(domain) && !isAcademicDomain) {
      const message = 'Use an email address from a supported provider, such as Gmail, Outlook, Yahoo, or iCloud.';
      input.setCustomValidity(message);
      showFieldFeedback(input, feedback, message);
      return false;
    }

    input.setCustomValidity('');
    showFieldFeedback(input, feedback, '');
    return true;
  };

  // Section 9 uses the same rules and messages as the existing consultation form.
  window.EuroMilesValidation = Object.freeze({ validateIndianMobileField, validateEmailField });

  heroMobile?.addEventListener('input', () => {
    heroMobile.dataset.touched = 'true';
    syncHeroFieldPlaceholder(heroMobile);
    validateIndianMobileField();
  });
  heroMobile?.addEventListener('blur', () => {
    heroMobile.dataset.touched = 'true';
    validateIndianMobileField();
  });
  heroEmail?.addEventListener('input', () => {
    heroEmail.dataset.touched = 'true';
    syncHeroFieldPlaceholder(heroEmail);
    validateEmailField();
  });
  heroEmail?.addEventListener('blur', () => {
    heroEmail.dataset.touched = 'true';
    validateEmailField();
  });

  heroForm?.addEventListener('invalid', (event) => {
    if (event.target === heroMobile) {
      heroMobile.dataset.touched = 'true';
      validateIndianMobileField();
    }
    if (event.target === heroEmail) {
      heroEmail.dataset.touched = 'true';
      validateEmailField();
    }
  }, true);

  heroForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateIndianMobileField() || !validateEmailField()) return;
    if (heroStatus) heroStatus.textContent = 'This form is not connected yet, so your details have not been sent.';
  });

  consultationMobile?.addEventListener('input', () => {
    consultationMobile.dataset.touched = 'true';
    syncHeroFieldPlaceholder(consultationMobile);
    validateIndianMobileField(consultationMobile, consultationMobileFeedback);
  });
  consultationMobile?.addEventListener('blur', () => {
    consultationMobile.dataset.touched = 'true';
    validateIndianMobileField(consultationMobile, consultationMobileFeedback);
  });
  consultationEmail?.addEventListener('input', () => {
    consultationEmail.dataset.touched = 'true';
    syncHeroFieldPlaceholder(consultationEmail);
    validateEmailField(consultationEmail, consultationEmailFeedback);
  });
  consultationEmail?.addEventListener('blur', () => {
    consultationEmail.dataset.touched = 'true';
    validateEmailField(consultationEmail, consultationEmailFeedback);
  });

  consultationForm?.addEventListener('invalid', (event) => {
    if (event.target === consultationMobile) {
      consultationMobile.dataset.touched = 'true';
      validateIndianMobileField(consultationMobile, consultationMobileFeedback);
    }
    if (event.target === consultationEmail) {
      consultationEmail.dataset.touched = 'true';
      validateEmailField(consultationEmail, consultationEmailFeedback);
    }
  }, true);

  consultationForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!validateIndianMobileField(consultationMobile, consultationMobileFeedback)
      || !validateEmailField(consultationEmail, consultationEmailFeedback)
      || !consultationForm.reportValidity()) return;

    const submitButton = consultationForm.querySelector('[type="submit"]');
    if (submitButton?.disabled) return;
    if (submitButton) submitButton.disabled = true;
    if (consultationFormStatus) consultationFormStatus.textContent = 'Sending your request…';
    const data = new FormData(consultationForm);
    const payload = {
      full_name: data.get('full_name'), mobile: data.get('mobile'), email: data.get('email'),
      qualification: data.get('qualification'), degree_level: data.get('degree_level'),
      intake_year: data.get('intake_year'), message: data.get('message') || '',
      contact_consent: data.has('contact_consent'), page: window.location.pathname
    };
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error('Submission failed');
      consultationForm.reset();
      consultationForm.querySelectorAll('.consultation-input-wrap input, .consultation-input-wrap textarea').forEach(syncHeroFieldPlaceholder);
      if (consultationFormStatus) consultationFormStatus.textContent = 'Thank you! Your consultation request has been sent.';
    } catch {
      if (consultationFormStatus) consultationFormStatus.textContent = 'We could not send your request. Please try again later.';
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });

  // 4. Back to Top Smooth Scroll
  const backToTopBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 5. Approved banner wording and icon rows over the new photographs.
  const carousel = document.querySelector('.hero-carousel');
  if (carousel) {
    const photo = carousel.querySelector('.carousel-active-image');
    const dots = [...carousel.querySelectorAll('.carousel-dots .dot')];
    const playback = carousel.querySelector('.carousel-playback');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const icons = {
      phosphorDiscovery: "<g transform=\"scale(0.1875)\" fill=\"currentColor\" stroke=\"none\"><path d=\"M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm16,112L80,176l32-64,64-32Z\" opacity=\"0.2\"/><path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z\"/></g>",
      academicHeritage: '<path d="m4 17 20-11 20 11ZM7 42h34M10 38h28M11 21v13m9-13v13m8-13v13m9-13v13"/><circle cx="24" cy="13" r="1"/>',
      phosphorWorld: "<g transform=\"scale(0.1875)\" fill=\"currentColor\" stroke=\"none\"><path d=\"M215,168.71a96.42,96.42,0,0,1-30.54,37l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.84-6.22l30.46-12.66a8,8,0,0,1,8.47,1.49ZM159.89,105,182.06,79.2A8,8,0,0,0,184,74V50A96,96,0,0,0,50.49,184.65l9.92-6.52A8,8,0,0,0,64,171.49l.21-36.23a8.06,8.06,0,0,1,1.35-4.41l20.94-31.3a8,8,0,0,1,11.34-2l19.81,13a8.06,8.06,0,0,0,5.77,1.45l31.46-4.26A8,8,0,0,0,159.89,105Z\" opacity=\"0.2\"/><path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z\"/></g>",
      phosphorStudent: "<g transform=\"scale(0.1875)\" fill=\"currentColor\" stroke=\"none\"><path d=\"M224,64,128,96,32,64l96-32Z\" opacity=\"0.2\"/><path d=\"M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32a8,8,0,0,0-5.4,6.75A5,5,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z\"/></g>",
      train: '<rect x="11" y="5" width="26" height="31" rx="6"/><path d="M11 22h26M24 5v17M16 41l3-5m13 5-3-5M16 12h16"/><circle cx="18" cy="29" r="1.5"/><circle cx="30" cy="29" r="1.5"/>',
      palette: '<path d="M42 24A18 18 0 1 0 24 42h3a5 5 0 0 0 3-9c-3-3-1-7 3-7h4a5 5 0 0 0 5-2Z"/><circle cx="15" cy="17" r="2"/><circle cx="24" cy="12" r="2"/><circle cx="33" cy="17" r="2"/><circle cx="11" cy="27" r="2"/>',
      mountains: '<path d="M3 39 18 13l15 26ZM25 24l7-12 13 27H33M12 24l6 4 6-4"/><circle cx="10" cy="10" r="4"/>',
      independence: '<circle cx="25" cy="9" r="4"/><path d="m19 43 2-14-5-6 5-8h8l5 10 7 2M27 28l5 15M22 16l4 11-5 2M15 17h-4v12h7"/>',
      globalFuture: '<circle cx="22" cy="25" r="17"/><ellipse cx="22" cy="25" rx="7" ry="17"/><path d="M5 25h34M9 15h24M9 35h24M30 15 43 2m-10 0h10v10"/>',
      globe: '<circle cx="24" cy="24" r="18"/><ellipse cx="24" cy="24" rx="8" ry="18"/><path d="M6 24h36M10 14h28M10 34h28"/>',
      people: '<circle cx="24" cy="13" r="6"/><circle cx="9" cy="19" r="4"/><circle cx="39" cy="19" r="4"/><path d="M14 40V30a10 10 0 0 1 20 0v10ZM3 39v-9a6 6 0 0 1 9-5m33 14v-9a6 6 0 0 0-9-5"/>',
      compass: '<circle cx="24" cy="25" r="18"/><path d="m31 17-4 12-12 4 5-12ZM24 3v4"/>',
      growth: '<path d="M6 40h36M9 36V26h6v10m5 0V19h6v17m5 0V10h6v26M8 19 36 5m-9 0h9v9"/>',
      cap: '<path d="m3 17 21-10 21 10-21 10ZM11 22v12c8 6 18 6 26 0V22m7-4v16"/>',
      coins: '<ellipse cx="21" cy="13" rx="12" ry="5"/><path d="M9 13v9c0 7 24 7 24 0v-9M9 21v8c0 7 24 7 24 0M9 28v8c0 7 24 7 24 0m0-17c8 0 10 3 10 6v11c0 6-10 8-17 6"/>'
    };
    const universities = [
      ['sapienza', 'Sapienza University of Rome'], ['bologna', 'University of Bologna'],
      ['polimi', 'Politecnico di Milano'], ['padua', 'University of Padua'], ['polito', 'Politecnico di Torino']
    ];
    const slides = [
      { name: 'graduation-dreams', src: 'assets/images/hero-section-crousel/Hero Graduation Celebration Original.webp', alt: 'Graduate celebrating in an Italian courtyard, wearing a laurel wreath and holding her degree and flowers', eyebrow: 'STUDY · EXPLORE · GROW · BELONG', title: 'Turn Your Dreams', accent: 'into a Global Future.', description: 'Study at <strong>Italy’s Renowned Universities.</strong><br>World-Class Education. A Brighter Tomorrow.', items: [['cap', 'Top-ranked<br>universities'], ['globe', 'Global<br>opportunities'], ['academicHeritage', 'Rich academic<br>heritage'], ['people', 'A vibrant<br>student life']] },
      { name: 'universities', alt: 'Graduate in an Italian university courtyard', eyebrow: 'WORLD-CLASS OPPORTUNITIES', title: 'Study at Italy’s', accent: 'Renowned Universities', description: 'Rich history. Global recognition. A brighter tomorrow.', university: true },
      { name: 'student-life', alt: 'Three students walking together through an Italian university courtyard', eyebrow: 'STUDY · EXPLORE · EXPERIENCE · BUILD YOUR FUTURE', title: 'Italy Is Closer', accent: 'Than You Think.', description: 'More Than a Degree.<br>A Global Experience.', items: [['globe', 'Discover<br>new cultures'], ['people', 'Make a<br>global network'], ['compass', 'Wider<br>perspectives'], ['growth', 'A stronger<br>you for tomorrow']] },
      { name: 'scholarships', alt: 'Student studying with a notebook and laptop in a modern library', eyebrow: 'SCHOLARSHIPS · AFFORDABLE LIVING · GLOBAL CAREERS', title: 'World-Class Education', accent: 'with Real Opportunities.', description: 'Generous Scholarships. Affordable Tuition.<br>A Brighter Global Future.', items: [['cap', 'Generous<br>scholarships'], ['coins', 'Low tuition<br>fees'], ['globe', 'English-taught<br>programs'], ['growth', 'Global<br>career pathways']] },
      { name: 'italy-riverside', alt: 'Turin-inspired River Po scenery with a stone bridge, leafy trees and Italian architecture', eyebrow: 'LEARN · EXPLORE · GROW', title: 'Beyond the Degree.', accent: 'Discover Your Italy.', description: 'New cities. New perspectives.<br>More confidence with every experience.', items: [['phosphorStudent', 'World-class<br>learning.'], ['phosphorDiscovery', 'Everyday<br>discovery.'], ['phosphorWorld', 'A future<br>without borders.']] }
    ];
    function renderCopy(slide) {
      const copy = carousel.querySelector('.carousel-copy');
      copy.hidden = !slide.title;
      carousel.dataset.slide = slide.name;
      carousel.querySelector('.carousel-eyebrow').textContent = slide.eyebrow;
      const emphasis = document.createElement('em');
      emphasis.textContent = slide.accent;
      carousel.querySelector('.carousel-heading').replaceChildren(document.createTextNode(slide.title), document.createElement('br'), emphasis);
      carousel.querySelector('.carousel-description').innerHTML = slide.description;
      const highlights = carousel.querySelector('.carousel-highlights');
      highlights.classList.toggle('is-universities', !!slide.university);
      highlights.setAttribute('aria-label', slide.university ? 'Featured universities' : 'Study in Italy highlights');
      highlights.innerHTML = slide.university ? universities.map(([seal, name]) => `<div class="carousel-highlight"><img src="assets/images/university-logos/${seal}-emblem.${seal === 'bologna' || seal === 'padua' ? 'webp' : 'svg'}" alt="" width="56" height="56"><span>${name}</span></div>`).join('') : (slide.items || []).map(([icon, label]) => `<div class="carousel-highlight"><svg class="${icon.startsWith('phosphor') ? 'carousel-professional-icon' : ''}" viewBox="0 0 48 48" aria-hidden="true">${icons[icon]}</svg><span>${label}</span></div>`).join('');
    }
    let current = 0;
    let timer;
    let paused = false;
    let hovered = false;
    let focused = false;
    let visible = true;
    function show(index) {
      current = (index + slides.length) % slides.length;
      const slide = slides[current];
      photo.src = slide.src || `assets/images/hero-section-crousel/hero-${slide.name}-original.webp`;
      photo.alt = slide.alt;
      renderCopy(slide);
      if (!motion.matches) {
        photo.animate([{ opacity: .35 }, { opacity: 1 }], { duration: 420, easing: 'ease-out' });
      }
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
        dot.setAttribute('aria-pressed', String(i === current));
      });
      schedule();
    }
    function schedule() {
      clearTimeout(timer);
      if (!paused && !hovered && !focused && visible && !document.hidden && !motion.matches) {
        timer = setTimeout(() => show(current + 1), 6500);
      }
    }
    carousel.querySelector('.carousel-arrow-left').addEventListener('click', () => show(current - 1));
    carousel.querySelector('.carousel-arrow-right').addEventListener('click', () => show(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
    playback.addEventListener('click', () => {
      paused = !paused;
      playback.setAttribute('aria-pressed', String(paused));
      playback.setAttribute('aria-label', paused ? 'Resume slideshow' : 'Pause slideshow');
      playback.firstElementChild.textContent = paused ? '▶' : 'Ⅱ';
      schedule();
    });
    carousel.addEventListener('mouseenter', () => { hovered = true; schedule(); });
    carousel.addEventListener('mouseleave', () => { hovered = false; schedule(); });
    carousel.addEventListener('focusin', () => { focused = true; schedule(); });
    carousel.addEventListener('focusout', event => { focused = carousel.contains(event.relatedTarget); schedule(); });
    document.addEventListener('visibilitychange', schedule);
    motion.addEventListener('change', schedule);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; schedule(); }).observe(carousel);
    }
    renderCopy(slides[0]);
    schedule();
  }
});
