(() => {
  'use strict';
  const section = document.querySelector('#euromiles-in-action');
  const config = window.EuroMilesVideoConfig;
  if (!section || !config) return;
  const gallery = section.querySelector('[data-video-gallery]');
  const filters = [...section.querySelectorAll('[data-video-filter]')];
  const contextFilters = section.querySelector('[data-context-filters]');
  const announcement = section.querySelector('[data-video-announcement]');
  const previous = section.querySelector('[data-video-previous]');
  const next = section.querySelector('[data-video-next]');
  const dialog = section.querySelector('.section-six-dialog');
  const player = dialog.querySelector('[data-video-player]');
  const showcase = section.querySelector('.section-six-showcase');
  const autoplayButton = section.querySelector('[data-video-autoplay]');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const AUTO_INTERVAL = 8000;
  let autoEnabled = !reducedMotion.matches, inView = false, hovered = false, focused = false, moving = false, autoTimer, activeAnimation;
  const mobile = matchMedia('(max-width: 600px)');
  const tablet = matchMedia('(max-width: 1100px)');
  let activeFilter = 'all', activeContext = 'all', page = 0, trigger = null, scrollOverflow = '';
  const pageSize = () => mobile.matches ? 1 : tablet.matches ? 3 : 5;
  const labels = {'student-life':'Student Life', universities:'Universities', scholarships:'Scholarships', visa:'Visa & Travel', italy:'Italy'};
  const contextualLabels = {all:'All',stories:'Student Stories',campus:'Campus Life',city:'City Guides',tips:'Tips & Advice',scholarships:'Scholarships',visa:'Visa & Travel',admissions:'Admissions',programmes:'Course Choices',funding:'Funding Guides',eligibility:'Eligibility',applications:'Applications',documents:'Documents',interviews:'Interviews',predeparture:'Pre-Departure','student-life':'Student Life',culture:'Culture & Places',arrival:'Arriving in Italy'};
  const contexts = {
    all:['all','stories','campus','city','tips','scholarships','visa'],
    instagram:['all','stories','campus','city','tips','scholarships','visa'],
    youtube:['all','stories','campus','city','tips','scholarships','visa'],
    'student-life':['all','stories','campus','city','tips'],
    universities:['all','campus','admissions','programmes'],
    scholarships:['all','funding','eligibility','applications'],
    visa:['all','documents','interviews','predeparture'],
    italy:['all','city','culture','arrival']
  };
  const headings = {
    all:['all','Explore Our Video Showcase','Student stories, campus tours and Italy guides — across Instagram and YouTube.'],
    instagram:['instagram','Instagram Reels','Short videos, real stories and quick tips from students in Italy.'],
    youtube:['youtube','YouTube Videos','In-depth university tours, scholarship guides and practical advice.'],
    'student-life':['people','Student Life in Italy','Discover student experiences, campus life and everyday moments.'],
    universities:['universities','University & Campus Tours','Explore campuses, study options and admissions insights.'],
    scholarships:['scholarships','Scholarship Guides','Understand funding options, eligibility and application steps.'],
    visa:['visa','Visa & Travel Guides','Explore document guidance, interview experiences and departure preparation.'],
    italy:['italy','Explore Italy','City guides, culture and practical insights for your arrival.']
  };
  const node = (tag, className, value) => {const el=document.createElement(tag); if(className) el.className=className; if(value!==undefined&&value!==null) el.textContent=value; return el;};
  const icon = name => {name=({all:'topic-all',people:'topic-student-life',universities:'topic-universities',scholarships:'topic-scholarships',visa:'topic-visa',italy:'topic-italy'})[name]||name;const svg=document.createElementNS('http://www.w3.org/2000/svg','svg'); svg.classList.add('section-six-icon'); svg.setAttribute('aria-hidden','true'); svg.setAttribute('focusable','false'); const use=document.createElementNS(svg.namespaceURI,'use'); use.setAttribute('href',`#em-ui-${name}`); svg.append(use); return svg;};
  function parseYouTube(raw) {
    try {const url=new URL(raw); if(url.protocol!=='https:') return null; let id;
      if(url.hostname==='youtu.be') id=url.pathname.slice(1);
      else if(['youtube.com','www.youtube.com','m.youtube.com'].includes(url.hostname)) {if(url.pathname==='/watch') id=url.searchParams.get('v'); else if(/^\/(shorts|embed)\//.test(url.pathname)) id=url.pathname.split('/')[2];}
      return /^[A-Za-z0-9_-]{11}$/.test(id||'')?id:null;
    } catch {return null;}
  }
  function instagramURL(raw) {try {const u=new URL(raw);return u.protocol==='https:'&&['instagram.com','www.instagram.com'].includes(u.hostname)&&/^\/(?:[A-Za-z0-9_.]+\/)?reel\/[A-Za-z0-9_-]+\/?$/.test(u.pathname)?u.href:null;}catch{return null;}}
  const playable = v => v.platform==='youtube'?parseYouTube(v.url):instagramURL(v.url);
  const matchesContext = (v,key) => key==='all'||(v.facets||[]).includes(key)||(v.topics||[]).includes(key);
  function categoryRecords() {
    return config.videos.filter(v=>v.status==='published').filter(v=>activeFilter==='all'||v.platform===activeFilter||(activeFilter==='italy'?(v.facets||[]).some(f=>['city','culture','arrival'].includes(f)):(v.topics||[]).includes(activeFilter)));
  }
  const collection = () => {
    const records=categoryRecords().filter(v=>matchesContext(v,activeContext));
    if(activeFilter!=='all') return records;
    const youtube=records.filter(v=>v.platform==='youtube'), instagram=records.filter(v=>v.platform==='instagram'), mixed=[];
    while(youtube.length||instagram.length){if(youtube.length)mixed.push(youtube.shift());if(instagram.length)mixed.push(instagram.shift());}
    return mixed;
  };
  function attribution(v) {return v.ownership==='third-party'?`Video by ${v.creator||'independent creator'} — External educational content`:v.creator?`Video by ${v.creator}`:'EuroMiles original content';}
  function renderContext() {
    const records=categoryRecords();
    contextFilters.replaceChildren(...contexts[activeFilter].map(key=>{
      const count=records.filter(v=>matchesContext(v,key)).length;
      const b=node('button','section-six-context-filter',contextualLabels[key]); b.type='button'; b.dataset.contextFilter=key;
      b.setAttribute('aria-pressed',String(key===activeContext)); b.setAttribute('aria-controls','section-six-gallery');
      b.setAttribute('aria-label',`${contextualLabels[key]}, ${count} video${count===1?'':'s'}`); b.disabled=count===0;
      if(!count) b.title='No preview videos in this topic yet';
      b.addEventListener('click',()=>{cancelMovement();activeContext=key;page=0;render();contextFilters.querySelector(`[data-context-filter="${key}"]`)?.focus();}); return b;
    }));
    const [mark,title,description]=headings[activeFilter];
    section.querySelector('[data-showcase-icon]').replaceChildren(icon(mark));
    section.querySelector('[data-showcase-title]').textContent=title;
    section.querySelector('[data-showcase-description]').textContent=description;
    const socialMode=['instagram','youtube'].includes(activeFilter)?activeFilter:'both';
    section.querySelector('.section-six-socials').dataset.socialMode=socialMode;
    section.querySelector('[data-follow-area]').dataset.socialMode=socialMode;
  }
  let previewTimer, previewCard;
  function stopPreview() {
    clearTimeout(previewTimer);
    if(previewCard) {
      previewCard.querySelector('.section-six-hover-player')?.remove();
      previewCard.querySelector('.section-six-preview-sound')?.remove();
      previewCard.classList.remove('is-previewing');
      previewCard=null;
    }
  }
  function queuePreview(article,video) {
    stopPreview();
    if(!matchMedia('(hover:hover) and (pointer:fine)').matches||reducedMotion.matches||dialog.open)return;
    const id=parseYouTube(video.url);
    if(video.platform!=='youtube'||!id)return;
    previewTimer=setTimeout(()=>{
      if(!article.isConnected||!article.matches(':hover')||document.hidden)return;
      const frame=node('iframe','section-six-hover-player');
      frame.title=`Video preview: ${video.title}`;
      frame.tabIndex=-1;
      frame.allow='autoplay; encrypted-media';
      frame.referrerPolicy='strict-origin-when-cross-origin';
      frame.src=`https://www.youtube-nocookie.com/embed/${id}?enablejsapi=1&origin=${encodeURIComponent(location.origin)}&autoplay=1&mute=1&playsinline=1&controls=0&rel=0&loop=1&playlist=${id}`;
      const sound=node('button','section-six-preview-sound');
      function updateSoundIcon(enabled) {
        const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
        svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');
        const path=document.createElementNS(svg.namespaceURI,'path');
        path.setAttribute('d',enabled?'M11 5 6 9H3v6h3l5 4V5ZM15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14':'M11 5 6 9H3v6h3l5 4V5ZM16 9l6 6M22 9l-6 6');
        path.setAttribute('fill','none');path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','1.8');path.setAttribute('stroke-linecap','round');path.setAttribute('stroke-linejoin','round');
        svg.append(path);sound.replaceChildren(svg);
      }
      updateSoundIcon(false);
      sound.type='button';
      sound.setAttribute('aria-label','Preview sound');
      sound.title='Enable sound';
      sound.setAttribute('aria-pressed','false');
      sound.addEventListener('click',event=>{
        event.stopPropagation();
        const enable=sound.getAttribute('aria-pressed')!=='true';
        const command=(func,args=[])=>frame.contentWindow?.postMessage(JSON.stringify({event:'command',func,args}),'https://www.youtube-nocookie.com');
        command(enable?'unMute':'mute');
        if(enable){command('setVolume',[80]);command('playVideo');}
        sound.setAttribute('aria-pressed',String(enable));
        sound.title=enable?'Mute sound':'Enable sound';
        updateSoundIcon(enable);
      });
      article.append(frame,sound);article.classList.add('is-previewing');previewCard=article;
    },500);
  }
  function card(v,index) {
    const article=node('article','section-six-card'); article.dataset.videoId=v.id; article.dataset.platform=v.platform;
    const platform=node('span','section-six-platform'); platform.append(icon(v.platform==='instagram'?'reels':'youtube')); platform.title=v.platform==='instagram'?'Instagram Reel':'YouTube Video'; article.append(platform);
    const badge=node('span','section-six-topic',labels[activeFilter]||(v.facets||[]).includes('city')&&'City Guides'||labels[(v.topics||[])[0]]||'Italy Guide'); article.append(badge);
    const id=parseYouTube(v.url), thumbnail=v.thumbnail||(id?`https://i.ytimg.com/vi/${id}/hqdefault.jpg`:v.fallbackThumbnail);
    if(thumbnail) {
      const image=node('img','section-six-thumbnail'+(id&&!v.thumbnail?' section-six-thumbnail--youtube':'')); image.alt=v.thumbnailAlt||`Video thumbnail: ${v.title}`; image.loading='eager';image.decoding='async';image.referrerPolicy='no-referrer';image.width=480;image.height=640;
      image.addEventListener('error',()=>{if(!image.dataset.fallback&&v.fallbackThumbnail){image.dataset.fallback='true';image.classList.remove('section-six-thumbnail--youtube');image.src=v.fallbackThumbnail;image.alt=`Illustrative cover for ${v.title}`;}else{image.remove();article.prepend(node('span','section-six-thumbnail-fallback','Preview image unavailable'));}});
      image.src=thumbnail;article.prepend(image);
    }
    if(v.duration) article.append(node('span','section-six-duration',v.duration));
    const copy=node('div','section-six-card-copy');
    if(v.views) copy.append(node('p','section-six-views',`${v.views} views`));
    const title=node('h4','section-six-card-title',v.title);title.id=`section-six-video-title-${index}`;
    copy.append(title,node('p','section-six-card-description',v.description));
    article.append(copy);
    if(playable(v)) {
      const action=node(v.platform==='instagram'?'a':'button','section-six-card-trigger');action.setAttribute('aria-label',`${v.platform==='instagram'?'Open Instagram Reel':'Play video'}: ${v.title}`);
      if(v.platform==='instagram'){action.href=instagramURL(v.url);action.target='_blank';action.rel='noopener noreferrer';}
      else{action.type='button';action.setAttribute('aria-haspopup','dialog');action.addEventListener('click',()=>openVideo(v,action));}
      const play=node('span','section-six-play');play.append(icon('play'));action.append(play);article.append(action);
    } else copy.append(node('p','section-six-attribution','Video unavailable'));
    article.addEventListener('mouseenter',()=>queuePreview(article,v));
    article.addEventListener('mouseleave',stopPreview);
    return article;
  }
  function render(automatic=false) {
    stopPreview();
    const records=collection(); page=records.length?((page%records.length)+records.length)%records.length:0;
    const visible=Array.from({length:Math.min(pageSize(),records.length)},(_,i)=>records[(page+i)%records.length]);
    gallery.style.removeProperty('grid-template-columns'); gallery.style.removeProperty('justify-content');
    gallery.replaceChildren();gallery.dataset.count=String(visible.length);
    if(!visible.length){const empty=node('div','section-six-empty');empty.append(icon('play'),node('h4','','More stories are on the way'),node('p','','Explore another topic or return to All for available preview videos.'));gallery.append(empty);}
    else visible.forEach((v,i)=>gallery.append(card(v,i)));
    filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.videoFilter===activeFilter)));
    previous.disabled=records.length<=1;next.disabled=records.length<=1;
    renderContext();
    if(!automatic) announcement.textContent=`${headings[activeFilter][1]}, ${contextualLabels[activeContext]}: ${records.length} videos. Showing ${visible.length} videos, starting with ${visible[0]?.title||'no preview'}.`;
    scheduleAuto();
  }
  function updateAutoplayButton() {
    const enabled=autoEnabled&&!reducedMotion.matches;
    const label=enabled?'Pause automatic video carousel':'Resume automatic video carousel';
    autoplayButton.setAttribute('aria-label',label); autoplayButton.title=label;
    autoplayButton.disabled=reducedMotion.matches;
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');
    const path=document.createElementNS(svg.namespaceURI,'path'); path.setAttribute('d',enabled?'M6 4h4v16H6zM14 4h4v16h-4z':'m7 4 13 8-13 8Z');path.setAttribute('fill','currentColor');svg.append(path);autoplayButton.replaceChildren(svg);
  }
  function scheduleAuto() {
    clearTimeout(autoTimer);
    if(autoEnabled&&!reducedMotion.matches&&inView&&!hovered&&!focused&&!document.hidden&&!dialog.open&&collection().length>1&&!moving) autoTimer=setTimeout(()=>move(1,true),AUTO_INTERVAL);
  }
  function cancelMovement() { if(activeAnimation){activeAnimation.cancel();activeAnimation=null;} moving=false; }
  function move(direction,automatic=false) {
    const records=collection(); if(moving||records.length<=1)return;
    clearTimeout(autoTimer);
    const cards=[...gallery.querySelectorAll('.section-six-card')];
    if(reducedMotion.matches||records.length<pageSize()||!cards.length) {page+=direction;render(automatic);return;}
    moving=true;
    const width=cards[0].getBoundingClientRect().width, stride=width+parseFloat(getComputedStyle(gallery).columnGap);
    const extraIndex=(page+(direction>0?cards.length:-1)+records.length)%records.length;
    const extra=card(records[extraIndex],cards.length);extra.setAttribute('aria-hidden','true');extra.inert=true;
    if(direction>0)gallery.append(extra);else gallery.prepend(extra);
    gallery.style.gridTemplateColumns=`repeat(${cards.length+1},${width}px)`;gallery.style.justifyContent='start';
    const animation=activeAnimation=gallery.animate([{transform:`translateX(${direction>0?0:-stride}px)`},{transform:`translateX(${direction>0?-stride:0}px)`}],{duration:480,easing:'cubic-bezier(.22,.61,.36,1)'});
    animation.finished.then(()=>{activeAnimation=null;page+=direction;moving=false;render(automatic);},()=>{activeAnimation=null;moving=false;render(automatic);});
  }
  autoplayButton.addEventListener('click',()=>{autoEnabled=!autoEnabled;updateAutoplayButton();scheduleAuto();});
  showcase.addEventListener('mouseenter',()=>{hovered=true;scheduleAuto();});
  showcase.addEventListener('mouseleave',()=>{hovered=false;scheduleAuto();});
  showcase.addEventListener('focusin',()=>{focused=true;scheduleAuto();});
  showcase.addEventListener('focusout',event=>{focused=showcase.contains(event.relatedTarget);scheduleAuto();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopPreview();scheduleAuto();});
  reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches){autoEnabled=false;stopPreview();}updateAutoplayButton();scheduleAuto();});
  new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;scheduleAuto();},{threshold:.2}).observe(gallery);
  updateAutoplayButton();
  filters.forEach(b=>b.addEventListener('click',()=>{cancelMovement();activeFilter=b.dataset.videoFilter;activeContext='all';page=0;render();}));
  previous.addEventListener('click',()=>{move(-1);if(previous.disabled)next.focus();});
  next.addEventListener('click',()=>{move(1);if(next.disabled)previous.focus();});
  gallery.addEventListener('keydown',e=>{if(e.key==='ArrowRight'&&!next.disabled){e.preventDefault();move(1);gallery.focus();}if(e.key==='ArrowLeft'&&!previous.disabled){e.preventDefault();move(-1);gallery.focus();}});
  let touch=null;gallery.addEventListener('touchstart',e=>{const t=e.touches[0];touch={x:t.clientX,y:t.clientY};},{passive:true});
  gallery.addEventListener('touchend',e=>{if(!touch)return;const t=e.changedTouches[0],dx=t.clientX-touch.x,dy=t.clientY-touch.y;touch=null;if(Math.abs(dx)<60||Math.abs(dx)<Math.abs(dy))return;if(dx<0&&!next.disabled)move(1);else if(dx>0&&!previous.disabled)move(-1);},{passive:true});
  for(const query of [mobile,tablet])query.addEventListener('change',()=>{cancelMovement();page=0;render();});
  function openVideo(video, action) {
    clearTimeout(autoTimer);
    stopPreview();
    const id = parseYouTube(video.url);
    if (!id) return;
    trigger = action;
    dialog.querySelector('#section-six-player-title').textContent = video.title;
    dialog.querySelector('[data-player-attribution]').textContent = '';
    dialog.querySelector('[data-player-attribution]').hidden = true;
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
    scheduleAuto();
  });
  // Header copy stays editable in both HTML and this configuration for live replacement.
  const copySelectors = {eyebrow:'.section-six-eyebrow',title:'[data-section-six-title]',highlight:'[data-section-six-highlight]',lead:'.section-six-lead',description:'.section-six-description'};
  for (const [key,selector] of Object.entries(copySelectors)) {
    if (typeof config.header?.[key] === 'string') section.querySelector(selector).textContent = config.header[key];
  }
  const description=section.querySelector('.section-six-description');
  const closingPhrase='all in one place.';
  if(description.textContent.endsWith(closingPhrase)) {
    const leading=description.textContent.slice(0,-closingPhrase.length);
    description.textContent=leading;
    const phrase=node('span','section-six-description-closing',closingPhrase);description.append(phrase);
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
      button.querySelector('small')?.remove();
      button.title = config.previewAccounts ? 'Offline preview: opens a third-party account' : '';
      button.closest('aside').dataset.preview = String(Boolean(config.previewAccounts));
    } else button.addEventListener('click', event => event.preventDefault());
  }
  for (const key of ['studentStories','instagramFollowers','youtubeSubscribers']) {
    const value = config.socialStats[key];
    if (value !== null && value !== undefined && value !== '') section.querySelector(`[data-stat='${key}']`).textContent = String(value);
  }
  section.querySelector('[data-stat="updateFrequency"]').textContent = config.socialStats.updateFrequency || 'Updates';
  render();
})();
