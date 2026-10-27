(() => {
  'use strict';
  const section = document.querySelector('#study-in-italy-faq');
  if (!section) return;
  const tabs = [...section.querySelectorAll('[role="tab"]')];
  const panels = [...section.querySelectorAll('[role="tabpanel"]')];
  const strip = section.querySelector('.s8-tabs');
  const categories = window.EuroMilesFaqConfig;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const stacked = matchMedia('(max-width: 1000px)');
  // Fade the right edge of the tab strip only while more tabs are still off-screen.
  const syncTabHint = () => {
    if (!strip) return;
    const more = strip.scrollWidth - strip.clientWidth > 2 && strip.scrollLeft + strip.clientWidth < strip.scrollWidth - 2;
    strip.classList.toggle('has-more', more);
  };
  strip?.addEventListener('scroll', syncTabHint, { passive: true });
  addEventListener('resize', syncTabHint);
  syncTabHint();
  document.fonts?.ready.then(syncTabHint);
  // The static HTML supplies the structure; this file only fills in the copy, so the
  // article count in index.html must always match the data file.
  if (categories) {
    const drift = categories.map(category => {
      const panel = section.querySelector(`#s8-panel-${category.id}`);
      const articles = panel ? panel.querySelectorAll('.s8-question').length : 0;
      return articles === category.questions.length ? null : `${category.id}: HTML ${articles} vs data ${category.questions.length}`;
    }).filter(Boolean);
    if (drift.length) console.warn('FAQ HTML and section-eight-data.js are out of sync —', drift.join('; '));
  }
  // Keep the static HTML fallback usable and the editorial content easy to update.
  categories?.forEach(category => {
    const panel = section.querySelector(`#s8-panel-${category.id}`);
    if (!panel) return;
    [...panel.querySelectorAll('.s8-question')].forEach((article,index) => {
      const entry = category.questions[index];
      if (!entry) return;
      article.querySelector('.s8-question-trigger > span:nth-child(2)').textContent = entry.question;
      [...article.querySelectorAll('.s8-answer > p')].forEach((paragraph,i) => { paragraph.textContent = entry.paragraphs[i]; });
      article.querySelector('.s8-tip p').textContent = entry.tip;
      const cta = article.querySelector('[data-faq-consultation]');
      cta.firstChild.textContent = entry.cta + ' ';
      const source = article.querySelector('.s8-source');
      source.href = entry.source.url;
      source.textContent = entry.source.label + ' ↗';
    });
  });
  function setQuestion(panel,index) {
    [...panel.querySelectorAll('.s8-question-trigger')].forEach((button,i) => {
      const open = i === index;
      button.setAttribute('aria-expanded',String(open));
      button.querySelector('.s8-toggle').textContent = open ? '−' : '+';
      document.getElementById(button.getAttribute('aria-controls')).hidden = !open;
    });
  }
  function activate(index,focus = false) {
    tabs.forEach((tab,i) => {
      tab.setAttribute('aria-selected',String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
    // Bring the selected tab into its horizontal strip without moving the page.
    const tab = tabs[index];
    if (strip && tab.offsetLeft < strip.scrollLeft) strip.scrollLeft = tab.offsetLeft;
    else if (strip && tab.offsetLeft + tab.offsetWidth > strip.scrollLeft + strip.clientWidth) strip.scrollLeft = tab.offsetLeft + tab.offsetWidth - strip.clientWidth;
    syncTabHint();
  }
  tabs.forEach((tab,index) => {
    tab.addEventListener('click',() => activate(index));
    tab.addEventListener('keydown',event => {
      let target;
      if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') target = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target !== undefined) { event.preventDefault(); activate(target,true); }
    });
  });
  panels.forEach(panel => panel.querySelectorAll('.s8-question-trigger').forEach((button,index) => {
    button.addEventListener('click',() => setQuestion(panel,button.getAttribute('aria-expanded') === 'true' ? -1 : index));
  }));
  section.querySelectorAll('[data-faq-topic]').forEach(button => button.addEventListener('click',() => {
    const index = tabs.findIndex(tab => tab.id === `s8-tab-${button.dataset.faqTopic}`);
    if (index < 0) return;
    activate(index);
    const questionIndex = Number(button.dataset.faqQuestion) - 1;
    setQuestion(panels[index],questionIndex);
    // Below 1001px the topic list sits under the panel, so bring the tabs and their
    // freshly opened question back into view before moving focus.
    if (stacked.matches) strip?.scrollIntoView({behavior:reduced.matches ? 'auto' : 'smooth',block:'start'});
    panels[index].querySelectorAll('.s8-question-trigger')[questionIndex]?.focus({preventScroll:true});
  }));
  section.querySelectorAll('[data-faq-consultation]').forEach(button => button.addEventListener('click',() => {
    const dialog = document.querySelector('#consultation-dialog');
    if (dialog && !dialog.open) dialog.showModal();
  }));
})();
