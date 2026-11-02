/* Optional milestone sequence. Remove this file's two includes to restore the static roadmap. */
(() => {
  'use strict';
  const stage = document.querySelector('#euromiles-journey .section-five-stage');
  if (!stage) return;
  const cards = [...stage.querySelectorAll('.section-five-roadmap-card')];
  const start = stage.querySelector('.section-five-endpoint-label--start');
  const finish = stage.querySelector('.section-five-endpoint-label--finish');
  if (!cards.length || !start || !finish) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const marks = [];
  cards.forEach(card => {
    const node = card.querySelector('.section-five-step-node');
    const ripple = document.createElement('span');
    ripple.className = 's5-milestone-ring';
    ripple.setAttribute('aria-hidden','true');
    const check = document.createElement('span');
    check.className = 's5-milestone-check';
    check.textContent = '✓';
    check.setAttribute('aria-hidden','true');
    node.append(ripple,check);
    marks.push(node);
  });
  const burst = document.createElement('span');
  burst.className = 's5-milestone-celebration';
  burst.setAttribute('aria-hidden','true');
  const ring = document.createElement('span');
  ring.className = 's5-arrival-ring';
  burst.append(ring);
  // Fan the celebration into the page so it remains visible by the right-hand pin.
  for (let i=0;i<22;i++) {
    const piece = document.createElement('i');
    const angle = (100+i/21*160)*Math.PI/180;
    const radius = 30+(i%5)*10;
    piece.style.setProperty('--dx',`${Math.cos(angle)*radius}px`);
    piece.style.setProperty('--dy',`${Math.sin(angle)*radius-18}px`);
    piece.style.setProperty('--spin',`${(i%2?1:-1)*(150+i*19)}deg`);
    piece.style.setProperty('--delay',`${(i%4)*40}ms`);
    piece.style.background = ['#d5a13b','#008c45','#fff8e9'][i%3];
    burst.append(piece);
  }
  finish.append(burst);
  stage.classList.add('s5-milestones-enabled');
  const phases = [
    {name:'departure',duration:1200},
    ...cards.map((_,index)=>({name:'milestone',index,duration:1800})),
    {name:'celebration',duration:1600},
    {name:'pause',duration:5000}
  ];
  let phase=0, timer=0, due=0, remaining=phases[0].duration, visible=false;
  function paint() {
    const current=phases[phase];
    stage.dataset.milestonePhase=current.name;
    stage.dataset.milestoneStep=current.index===undefined?'':String(current.index+1);
    start.classList.toggle('s5-milestone-departure',current.name==='departure');
    finish.classList.toggle('s5-milestone-arrival',current.name==='celebration'||current.name==='pause');
    finish.classList.toggle('s5-milestone-burst',current.name==='celebration'&&!reduced.matches);
    cards.forEach((card,index)=>{
      card.classList.toggle('s5-milestone-active',current.name==='milestone'&&current.index===index);
      const done=current.name==='celebration'||current.name==='pause'||(current.name==='milestone'&&index<current.index);
      card.classList.toggle('s5-milestone-complete',done);
    });
  }
  function advance() {
    timer=0;
    phase=(phase+1)%phases.length;
    remaining=phases[phase].duration;
    paint();
    schedule();
  }
  function schedule() {
    if(!visible||document.hidden||timer)return;
    stage.classList.remove('s5-milestones-paused');
    due=performance.now()+remaining;
    timer=setTimeout(advance,remaining);
  }
  function sync() {
    const paused=!visible||document.hidden;
    stage.classList.toggle('s5-milestones-paused',paused);
    if(paused&&timer){remaining=Math.max(0,due-performance.now());clearTimeout(timer);timer=0;}
    else if(!paused)schedule();
  }
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();},{threshold:0}).observe(stage);
  document.addEventListener('visibilitychange',sync);
  reduced.addEventListener('change',paint);
  paint();
})();
