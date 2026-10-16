(() => {
  'use strict';
  const section = document.querySelector('#student-stories-reviews');
  const config = window.EuroMilesReviewConfig;
  if (!section || !config) return;
  const track = section.querySelector('.section-seven-track');
  const cards = [...track.children];
  const dots = [...section.querySelectorAll('[data-review-page]')];
  const narrow = matchMedia('(max-width: 1100px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const panel = section.querySelector('.section-seven-panel');
  const autoplay = section.querySelector('[data-review-autoplay]');
  const interval = Math.max(3000, Number(config.autoplayInterval) || 5000);
  let autoplayTimer;
  let paused = reduced.matches;
  let hovered = section.matches(':hover');
  let visible = false;
  let page = 0;
  let touching = null;
  let programmaticScroll = false;
  let scrollTimer;
  section.querySelector('[data-review-rating]').textContent = config.rating;
  section.querySelector('[data-review-summary]').textContent = config.summary;
  function renderQuotes() {
    for (const review of config.reviews) {
      const quote = cards.find(el => el.dataset.reviewId === review.id)?.querySelector('.section-seven-quote');
      if (!quote) continue;
      if (narrow.matches || !review.desktopLines) quote.textContent = review.quote;
      else {
        quote.replaceChildren();
        review.desktopLines.forEach((line,index) => {
          const span = document.createElement('span');
          span.className = 'section-seven-quote-line';
          span.textContent = line + (index < review.desktopLines.length - 1 ? ' ' : '');
          quote.append(span);
        });
      }
    }
  }
  for (const review of config.reviews) {
    const card = cards.find(el => el.dataset.reviewId === review.id);
    if (!card) continue;
    card.querySelector('.section-seven-name').textContent = review.name;
    card.querySelector('.section-seven-quote').textContent = review.quote;
    card.querySelector('.section-seven-age').textContent = review.age;
    const details = card.querySelector('.section-seven-review-details');
    details.replaceChildren();
    review.details.forEach((line,index) => {
      if (index) details.append(document.createElement('br'));
      details.append(document.createTextNode(line));
    });
    const link = card.querySelector('[data-review-link]');
    let url;
    try {
      const parsed = new URL(review.url);
      if (parsed.protocol === 'https:' && ['google.com','www.google.com','maps.google.com','maps.app.goo.gl','g.co'].includes(parsed.hostname)) url = parsed.href;
    } catch { /* Mockup records have no verified destinations. */ }
    if (url) {
      link.href = url;
      link.removeAttribute('aria-disabled');
      link.removeAttribute('tabindex');
      link.removeAttribute('title');
    } else link.addEventListener('click', event => event.preventDefault());
  }
  function update(announce = true) {
    dots.forEach((dot,index) => {
      if (index === page) dot.setAttribute('aria-current','page');
      else dot.removeAttribute('aria-current');
    });
    const first = cards[config.pageStarts[page]];
    if (announce) section.querySelector('[data-review-announcement]').textContent = `Review group ${page + 1} of ${dots.length}, starting with ${first.querySelector('.section-seven-name').textContent}.`;
  }
  function scheduleAutoplay() {
    clearTimeout(autoplayTimer);
    if (paused || hovered || section.matches(':hover') || !visible || document.hidden || panel.contains(document.activeElement) || touching) return;
    autoplayTimer = setTimeout(() => {
      // Recheck the pointer before rotating, including after page loads or scrolling.
      if (section.matches(':hover')) { hovered = true; return; }
      show(page + 1, false);
    }, interval);
  }
  function updateAutoplayButton() {
    autoplay.setAttribute('aria-pressed', String(paused));
    autoplay.setAttribute('aria-label', `${paused ? 'Play' : 'Pause'} automatic review rotation`);
  }
  function show(index, announce = true) {
    page = (index + dots.length) % dots.length;
    const start = config.pageStarts[page];
    if (narrow.matches) {
      cards.forEach(card => track.append(card));
      const target = cards[start];
      programmaticScroll = true;
      track.scrollTo({left: target.offsetLeft - cards[0].offsetLeft,behavior: reduced.matches ? 'auto' : 'smooth'});
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => { programmaticScroll = false; },600);
    } else {
      // Cyclic groups keep the seven supplied records visible without duplicating reviews.
      [...cards.slice(start),...cards.slice(0,start)].forEach(card => track.append(card));
      track.scrollLeft = 0;
    }
    update(announce);
    scheduleAutoplay();
  }
  section.querySelector('[data-review-previous]').addEventListener('click', () => show(page - 1));
  section.querySelector('[data-review-next]').addEventListener('click', () => show(page + 1));
  dots.forEach((dot,index) => dot.addEventListener('click', () => show(index)));
  section.querySelector('.section-seven-carousel').addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); show(page + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(page - 1); }
  });
  track.addEventListener('touchstart', event => {
    const touch = event.touches[0];
    touching = {x:touch.clientX,y:touch.clientY};
    scheduleAutoplay();
  },{passive:true});
  track.addEventListener('touchend', event => {
    if (!touching || narrow.matches) { touching = null; scheduleAutoplay(); return; }
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touching.x,dy = touch.clientY - touching.y;
    touching = null;
    if (Math.abs(dx)>60 && Math.abs(dx)>Math.abs(dy)) show(page + (dx<0 ? 1 : -1));
    else scheduleAutoplay();
  },{passive:true});
  track.addEventListener('touchcancel', () => { touching = null; scheduleAutoplay(); },{passive:true});
  track.addEventListener('scroll', () => {
    if (!narrow.matches || programmaticScroll) return;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const step = cards[1].offsetLeft - cards[0].offsetLeft;
      const position = track.scrollLeft / step;
      page = config.pageStarts.reduce((closest,start,index) => Math.abs(start-position)<Math.abs(config.pageStarts[closest]-position) ? index : closest,0);
      update();
      scheduleAutoplay();
    },100);
  },{passive:true});
  narrow.addEventListener('change', () => { renderQuotes(); show(0); });
  section.addEventListener('mouseenter', () => { hovered = true; scheduleAutoplay(); });
  section.addEventListener('mouseleave', () => { hovered = false; scheduleAutoplay(); });
  panel.addEventListener('focusin', scheduleAutoplay);
  panel.addEventListener('focusout', () => setTimeout(scheduleAutoplay, 0));
  document.addEventListener('visibilitychange', scheduleAutoplay);
  autoplay.addEventListener('click', () => { paused = !paused; updateAutoplayButton(); scheduleAutoplay(); });
  reduced.addEventListener('change', () => { paused = reduced.matches; updateAutoplayButton(); scheduleAutoplay(); });
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    scheduleAutoplay();
  },{threshold:0}).observe(panel);
  renderQuotes();
  update();
  updateAutoplayButton();
})();
