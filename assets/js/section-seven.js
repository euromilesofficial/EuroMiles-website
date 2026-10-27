(() => {
  'use strict';
  const section=document.querySelector('#student-stories-reviews'),config=window.EuroMilesReviewConfig;
  if(!section||!config)return;
  const track=section.querySelector('.section-seven-track'),cards=[...track.children];
  const panel=section.querySelector('.section-seven-panel'),navigation=section.querySelector('.section-seven-dots');
  const autoplay=section.querySelector('[data-review-autoplay]');
  const previous=section.querySelector('[data-review-previous]'),next=section.querySelector('[data-review-next]');
  const announcement=section.querySelector('[data-review-announcement]');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const interval=Math.max(8000,Number(config.autoplayInterval)||10000);
  let starts=[0],dots=[],page=0,paused=reduced.matches,visible=false,touching=false,timer,scrollTimer,resizeTimer;
  section.querySelector('[data-review-rating]').textContent=config.rating;
  section.querySelector('[data-review-summary]').textContent=config.summary;
  for(const review of config.reviews){
    const card=cards.find(el=>el.dataset.reviewId===review.id);
    if(!card)continue;
    card.querySelector('.section-seven-name').textContent=review.name;
    card.querySelector('.section-seven-quote').textContent=review.quote;
    card.querySelector('.section-seven-age').textContent=review.age;
    const details=card.querySelector('.section-seven-review-details');details.replaceChildren();
    review.details.forEach((line,index)=>{if(index)details.append(document.createElement('br'));details.append(document.createTextNode(line));});
    const link=card.querySelector('[data-review-link]');
    let url;
    try{const parsed=new URL(review.url);if(parsed.protocol==='https:'&&['google.com','www.google.com','maps.google.com','maps.app.goo.gl','g.co'].includes(parsed.hostname))url=parsed.href;}catch{/* Preview records have no verified destinations. */}
    if(url){link.href=url;link.removeAttribute('aria-disabled');link.removeAttribute('tabindex');link.removeAttribute('title');}
    else link.addEventListener('click',event=>event.preventDefault());
  }
  function position(index){return cards[index].offsetLeft-cards[0].offsetLeft;}
  function update(announce=false){
    dots.forEach((dot,index)=>{if(index===page)dot.setAttribute('aria-current','page');else dot.removeAttribute('aria-current');});
    previous.disabled=next.disabled=starts.length<2;
    navigation.hidden=starts.length<2;
    autoplay.hidden=starts.length<2;
    autoplay.setAttribute('aria-pressed',String(paused));
    autoplay.setAttribute('aria-label',`${paused?'Play':'Pause'} automatic review rotation`);
    if(announce)announcement.textContent=`Review page ${page+1} of ${starts.length}, starting with ${cards[starts[page]].querySelector('.section-seven-name').textContent}.`;
  }
  function schedule(){
    clearTimeout(timer);
    if(starts.length<2||paused||reduced.matches||!visible||document.hidden||section.matches(':hover')||panel.contains(document.activeElement)||touching)return;
    timer=setTimeout(()=>show(page+1,false),interval);
  }
  function show(index,announce=true){
    page=(index+starts.length)%starts.length;
    track.scrollTo({left:position(starts[page]),behavior:reduced.matches?'auto':'smooth'});
    update(announce);schedule();
  }
  function rebuild(){
    const columns=Math.max(1,parseInt(getComputedStyle(track).getPropertyValue('--review-columns'),10)||1);
    const last=Math.max(0,cards.length-columns);starts=[0];
    for(let start=columns;start<last;start+=columns)starts.push(start);
    if(last>0)starts.push(last);
    dots.forEach(dot=>dot.remove());
    dots=starts.map((start,index)=>{
      const dot=document.createElement('button');dot.type='button';dot.className='section-seven-dot';
      dot.dataset.reviewPage=index;dot.setAttribute('aria-label',`Show review page ${index+1}`);dot.setAttribute('aria-controls','section-seven-track');
      dot.addEventListener('click',()=>show(index));navigation.insertBefore(dot,autoplay);return dot;
    });
    page=Math.min(page,starts.length-1);track.scrollTo({left:position(starts[page]),behavior:'instant'});update();schedule();
  }
  // Replace the reference-only pagination with pages derived from the visible cards.
  navigation.querySelectorAll('[data-review-page]').forEach(dot=>dot.remove());
  previous.addEventListener('click',()=>show(page-1));next.addEventListener('click',()=>show(page+1));
  section.querySelector('.section-seven-carousel').addEventListener('keydown',event=>{
    if(starts.length<2)return;
    if(event.key==='ArrowRight'){event.preventDefault();show(page+1);}
    if(event.key==='ArrowLeft'){event.preventDefault();show(page-1);}
    if(event.key==='Home'){event.preventDefault();show(0);}
    if(event.key==='End'){event.preventDefault();show(starts.length-1);}
  });
  track.addEventListener('scroll',()=>{
    clearTimeout(timer);clearTimeout(scrollTimer);
    scrollTimer=setTimeout(()=>{
      page=starts.reduce((closest,start,index)=>Math.abs(position(start)-track.scrollLeft)<Math.abs(position(starts[closest])-track.scrollLeft)?index:closest,0);
      update();schedule();
    },180);
  },{passive:true});
  track.addEventListener('touchstart',()=>{touching=true;schedule();},{passive:true});
  for(const event of ['touchend','touchcancel'])track.addEventListener(event,()=>{touching=false;schedule();},{passive:true});
  section.addEventListener('mouseenter',schedule);section.addEventListener('mouseleave',schedule);
  panel.addEventListener('focusin',schedule);panel.addEventListener('focusout',()=>setTimeout(schedule,0));
  document.addEventListener('visibilitychange',schedule);
  autoplay.addEventListener('click',()=>{paused=!paused;update();schedule();});
  reduced.addEventListener('change',()=>{paused=reduced.matches;update();schedule();});
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();},{threshold:.2}).observe(panel);
  new ResizeObserver(()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(rebuild,100);}).observe(track);
  rebuild();
})();
