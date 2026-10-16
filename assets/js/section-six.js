(() => {
  'use strict';
  const section = document.querySelector('#euromiles-in-action');
  const config = window.EuroMilesVideoConfig;
  if (!section || !config) return;
  const gallery = section.querySelector('[data-video-gallery]');
  const filters = [...section.querySelectorAll('[data-video-filter]')];
  const announcement = section.querySelector('[data-video-announcement]');
  const previous = section.querySelector('[data-video-previous]');
  const next = section.querySelector('[data-video-next]');
  const dots = section.querySelector('[data-video-dots]');
  const dialog = section.querySelector('.section-six-dialog');
  const player = dialog.querySelector('[data-video-player]');
  const labels = { 'student-life': 'Student Life', universities: 'Universities', scholarships: 'Scholarships', visa: 'Visa', italy: 'Italy' };
  const mobile = matchMedia('(max-width: 600px)');
  const tablet = matchMedia('(max-width: 1100px)');
  let activeFilter = 'all';
  let page = 0;
  let trigger = null;
  let scrollOverflow = '';
  const pageSize = () => mobile.matches ? 1 : tablet.matches ? 3 : 5;
  const node = (tag, className, value) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (value !== undefined && value !== null) el.textContent = value;
    return el;
  };
  const icon = name => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('section-six-icon');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', `assets/images/icons/section-6/ui.svg#${name}`);
    svg.append(use);
    return svg;
  };
  function parseYouTube(raw) {
    try {
      const url = new URL(raw);
      if (url.protocol !== 'https:') return null;
      let id;
      if (url.hostname === 'youtu.be') id = url.pathname.slice(1);
      else if (['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(url.hostname)) {
        if (url.pathname === '/watch') id = url.searchParams.get('v');
        else if (/^\/(shorts|embed)\//.test(url.pathname)) id = url.pathname.split('/')[2];
      }
      return /^[A-Za-z0-9_-]{11}$/.test(id || '') ? id : null;
    } catch { return null; }
  }
  function instagramURL(raw) {
    try {
      const url = new URL(raw);
      return url.protocol === 'https:' && ['instagram.com', 'www.instagram.com'].includes(url.hostname)
        && /^\/(?:[A-Za-z0-9_.]+\/)?reel\/[A-Za-z0-9_-]+\/?$/.test(url.pathname) ? url.href : null;
    } catch { return null; }
  }
  const playable = video => video.platform === 'youtube' ? parseYouTube(video.url) : video.platform === 'instagram' ? instagramURL(video.url) : null;
  const published = () => config.videos.filter(v => v.status === 'published');
  function collection() {
    const records = published().filter(v => activeFilter === 'all' || v.platform === activeFilter || (v.topics || []).includes(activeFilter));
    records.sort((a,b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    // Development slots appear only in ALL and never masquerade as published media.
    if (activeFilter === 'all') records.push(...config.videos.filter(v => v.status === 'development'));
    return records;
  }
  function attribution(video) {
    if (video.ownership === 'third-party') return `Video by ${video.creator || 'independent creator'} — External educational content`;
    if (video.ownership === 'placeholder') return 'Development placeholder · No video connected';
    return video.creator ? `Video by ${video.creator}` : 'EuroMiles original content';
  }
  function card(video, index) {
    const placeholder = video.status === 'development';
    const article = node('article', `section-six-card${placeholder ? ' section-six-card--placeholder' : ''}`);
    article.dataset.videoId = video.id;
    const platform = node('span', 'section-six-platform');
    platform.append(icon(video.platform), node('span', '', video.platform === 'instagram' ? 'Instagram Reel' : 'YouTube Video'));
    article.append(platform);
    if (video.duration && !placeholder) article.append(node('span', 'section-six-duration', video.duration));
    const id = parseYouTube(video.url);
    const thumbnail = video.thumbnail || (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null);
    if (thumbnail && !placeholder) {
      const image = node('img', 'section-six-thumbnail');
      image.alt = video.thumbnailAlt || `Video thumbnail: ${video.title}`;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.referrerPolicy = 'no-referrer';
      image.width = 480;
      image.height = 360;
      image.addEventListener('error', () => {
        image.remove();
        article.prepend(node('span', 'section-six-thumbnail-fallback', 'Thumbnail unavailable'));
      }, { once: true });
      image.src = thumbnail;
      article.prepend(image);
    } else {
      const art = node('span', 'section-six-placeholder-art');
      art.append(icon(placeholder ? video.platform : 'play'));
      article.append(art);
    }
    if (placeholder) article.append(node('span', 'section-six-placeholder-label', 'Development placeholder'));
    if (video.previewType === 'illustrative') article.append(node('span', 'section-six-preview-label', 'Illustrative preview · Opens Instagram'));
    const copy = node('div', 'section-six-card-copy');
    const topic = labels[activeFilter] && (video.topics || []).includes(activeFilter)
      ? labels[activeFilter]
      : labels[(video.topics || [])[0]] || (placeholder ? 'Coming soon' : 'Educational reference');
    copy.append(node('span', 'section-six-topic', topic));
    const title = node('h3', 'section-six-card-title', video.title);
    title.id = `section-six-video-title-${index}`;
    copy.append(title, node('p', 'section-six-card-description', video.description), node('p', 'section-six-attribution', attribution(video)));
    article.append(copy);
    if (!placeholder && playable(video)) {
      const action = node(video.platform === 'instagram' ? 'a' : 'button', 'section-six-card-trigger');
      action.setAttribute('aria-label', `${video.platform === 'instagram' ? 'Open Instagram Reel' : 'Play video'}: ${video.title}`);
      if (video.platform === 'instagram') {
        action.href = instagramURL(video.url);
        action.target = '_blank';
        action.rel = 'noopener noreferrer';
      } else {
        action.type = 'button';
        action.setAttribute('aria-haspopup', 'dialog');
        action.addEventListener('click', () => openVideo(video, action));
      }
      const play = node('span', 'section-six-play');
      play.append(icon('play'));
      action.append(play);
      article.append(action);
    } else if (!placeholder) {
      copy.append(node('p', 'section-six-attribution', 'Video unavailable — please check back later.'));
    }
    return article;
  }
  function render() {
    const records = collection();
    const pages = Math.max(1, Math.ceil(records.length / pageSize()));
    page = Math.min(Math.max(0, page), pages - 1);
    const visible = records.slice(page * pageSize(), (page + 1) * pageSize());
    gallery.replaceChildren();
    gallery.dataset.count = String(visible.length);
    if (!visible.length) {
      const empty = node('div', 'section-six-empty');
      empty.append(icon(activeFilter === 'instagram' ? 'instagram' : 'play'), node('h3', '', 'More stories are on the way'),
        node('p', '', 'There are no published videos in this category yet. Explore All for available educational references.'));
      gallery.append(empty);
    } else visible.forEach((video,index) => gallery.append(card(video, index)));
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.videoFilter === activeFilter)));
    previous.disabled = page === 0;
    next.disabled = page === pages - 1;
    dots.replaceChildren();
    for (let i = 0; i < pages && records.length; i++) {
      const dot = node('button', 'section-six-dot');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to video page ${i + 1}`);
      if (i === page) dot.setAttribute('aria-current', 'page');
      dot.addEventListener('click', () => { page = i; render(); dots.children[i]?.focus(); });
      dots.append(dot);
    }
    const currentDot = dots.children[page];
    if (currentDot) dots.scrollLeft = Math.max(0, currentDot.offsetLeft - (dots.clientWidth - currentDot.clientWidth) / 2);
    const name = filters.find(b => b.dataset.videoFilter === activeFilter)?.textContent.trim() || 'All';
    const count = records.filter(v => v.status === 'published').length;
    const placeholders = records.length - count;
    announcement.textContent = `${name}: ${count} published video${count === 1 ? '' : 's'}${placeholders ? ` and ${placeholders} development placeholders` : ''}. Page ${page + 1} of ${pages}.`;
  }
  function move(direction) { page += direction; render(); }
  filters.forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.videoFilter; page = 0; render(); }));
  previous.addEventListener('click', () => { move(-1); if (previous.disabled) next.focus(); });
  next.addEventListener('click', () => { move(1); if (next.disabled) previous.focus(); });
  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' && !next.disabled) { event.preventDefault(); move(1); gallery.focus(); }
    if (event.key === 'ArrowLeft' && !previous.disabled) { event.preventDefault(); move(-1); gallery.focus(); }
  });
  let touch = null;
  gallery.addEventListener('touchstart', event => { const t = event.touches[0]; touch = {x:t.clientX,y:t.clientY}; }, {passive:true});
  gallery.addEventListener('touchend', event => {
    if (!touch) return;
    const t = event.changedTouches[0];
    const dx = t.clientX - touch.x, dy = t.clientY - touch.y;
    touch = null;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0 && !next.disabled) move(1);
    else if (dx > 0 && !previous.disabled) move(-1);
  }, {passive:true});
  for (const query of [mobile,tablet]) query.addEventListener('change', () => { page = 0; render(); });
  function openVideo(video, action) {
    const id = parseYouTube(video.url);
    if (!id) return;
    trigger = action;
    dialog.querySelector('#section-six-player-title').textContent = video.title;
    dialog.querySelector('[data-player-attribution]').textContent = attribution(video);
    const fallback = dialog.querySelector('[data-player-fallback]');
    fallback.href = `https://www.youtube.com/watch?v=${id}`;
    player.replaceChildren();
    const iframe = document.createElement('iframe');
    iframe.title = `YouTube player: ${video.title}`;
    iframe.allow = 'encrypted-media; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.addEventListener('error', () => {
      player.replaceChildren(node('p', 'section-six-player-error', 'The player could not load. Use Watch on YouTube below.'));
    }, {once:true});
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1`;
    player.append(iframe);
    scrollOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    dialog.querySelector('.section-six-dialog-close').focus();
  }
  dialog.querySelector('.section-six-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const r = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    player.replaceChildren();
    document.body.style.overflow = scrollOverflow;
    if (trigger?.isConnected) trigger.focus();
    else gallery.focus();
    trigger = null;
  });
  // Header copy stays editable in both HTML and this configuration for live replacement.
  const copySelectors = {eyebrow:'.section-six-eyebrow',title:'[data-section-six-title]',highlight:'[data-section-six-highlight]',lead:'.section-six-lead',description:'.section-six-description'};
  for (const [key,selector] of Object.entries(copySelectors)) {
    if (typeof config.header?.[key] === 'string') section.querySelector(selector).textContent = config.header[key];
  }
  for (const [platform,raw] of Object.entries(config.socialLinks)) {
    const button = section.querySelector(`[data-social-link='${platform}']`);
    let safe = null;
    try {
      const url = new URL(raw);
      const hosts = platform === 'instagram' ? ['instagram.com','www.instagram.com'] : ['youtube.com','www.youtube.com'];
      if (url.protocol === 'https:' && hosts.includes(url.hostname)) safe = url.href;
    } catch { /* Unconfigured account keeps its disabled state. */ }
    if (safe) {
      button.href = safe;
      button.removeAttribute('aria-disabled');
      button.removeAttribute('tabindex');
      button.querySelector('small').remove();
    } else button.addEventListener('click', event => event.preventDefault());
  }
  for (const key of ['studentStories','instagramFollowers','youtubeSubscribers']) {
    const value = config.socialStats[key];
    if (value !== null && value !== undefined && value !== '') section.querySelector(`[data-stat='${key}']`).textContent = String(value);
  }
  section.querySelector('[data-stat="updateFrequency"]').textContent = config.socialStats.updateFrequency || 'Updates';
  render();
})();
