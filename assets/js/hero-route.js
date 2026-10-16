document.addEventListener('DOMContentLoaded', () => {
  const route = document.querySelector('.hero-route');
  const steps = [...(route?.querySelectorAll('.hero-route-steps > li') || [])];
  if (!route || steps.length !== 5) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const burst = document.createElement('span');
  burst.className = 'hero-arrival-burst';
  burst.setAttribute('aria-hidden', 'true');
  const particles = [
    [-36, -12, -40], [-29, -29, 80], [-12, -36, 140],
    [12, -35, -90], [29, -27, 50], [36, -9, 120],
    [30, 10, -60], [16, 23, 100], [-15, 22, -110], [-29, 9, 60]
  ];
  particles.forEach(([x, y, rotation], index) => {
    const particle = document.createElement('i');
    particle.style.setProperty('--burst-x', `${x}px`);
    particle.style.setProperty('--burst-y', `${y}px`);
    particle.style.setProperty('--burst-rotation', `${rotation}deg`);
    particle.style.setProperty('--burst-delay', `${(index % 3) * 30}ms`);
    particle.style.backgroundColor = index % 2 ? '#16835e' : '#e8b94a';
    burst.append(particle);
  });
  steps[4].append(burst);

  let timer;
  let inView = false;
  let currentStep = 0;
  route.classList.add('is-animated');

  function renderStep(index) {
    route.dataset.journeyStep = String(index + 1);
    route.classList.toggle('is-arrived', index === 4);
    steps.forEach((step, position) => {
      step.classList.toggle('is-current', position === index);
      step.classList.toggle('is-complete', position < index);
    });
  }

  function stop() {
    window.clearTimeout(timer);
  }

  function advance() {
    renderStep(currentStep);
    // Hold the arrival long enough to finish the burst before starting again.
    timer = window.setTimeout(() => {
      currentStep = (currentStep + 1) % steps.length;
      advance();
    }, currentStep === 4 ? 4500 : 900);
  }

  function play() {
    stop();
    if (reducedMotion.matches) {
      renderStep(4);
      return;
    }
    if (!inView || document.hidden) return;
    currentStep = 0;
    advance();
  }

  // Run the loop only while the journey is visible and motion is enabled.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      const wasInView = inView;
      inView = entry.isIntersecting;
      if (!inView) stop();
      else if (!wasInView) play();
    }, { threshold: 0.65 });
    observer.observe(route);
  } else {
    inView = true;
    play();
  }
  reducedMotion.addEventListener('change', play);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else play();
  });
  window.addEventListener('pagehide', stop);
  if (reducedMotion.matches) renderStep(4);
});
