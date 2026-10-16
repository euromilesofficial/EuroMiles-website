(() => {
  'use strict';
  const section = document.querySelector('#study-in-italy-faq');
  if (!section) return;
  const tabs = [...section.querySelectorAll('[role="tab"]')];
  const panels = [...section.querySelectorAll('[role="tabpanel"]')];
  const categories = window.EuroMilesFaqConfig;
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
    const strip = section.querySelector('.s8-tabs');
    const tab = tabs[index];
    if (tab.offsetLeft < strip.scrollLeft) strip.scrollLeft = tab.offsetLeft;
    else if (tab.offsetLeft + tab.offsetWidth > strip.scrollLeft + strip.clientWidth) strip.scrollLeft = tab.offsetLeft + tab.offsetWidth - strip.clientWidth;
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
    panels[index].querySelectorAll('.s8-question-trigger')[questionIndex].focus({preventScroll:true});
  }));
  section.querySelectorAll('[data-faq-consultation]').forEach(button => button.addEventListener('click',() => {
    const dialog = document.querySelector('#consultation-dialog');
    if (dialog && !dialog.open) dialog.showModal();
  }));
})();
