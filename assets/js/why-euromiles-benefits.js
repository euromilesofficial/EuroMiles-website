(() => {
  const panel = document.querySelector('#why-euromiles .section-four-header-principles');
  if (!panel) return;
  const numbers = [...panel.querySelectorAll('.section-four-principle-number')];
  if (numbers.length < 2) return;
  const ns = 'http://www.w3.org/2000/svg';
  const route = document.createElementNS(ns, 'svg');
  route.classList.add('section-four-benefit-route');
  route.setAttribute('aria-hidden', 'true');
  route.setAttribute('focusable', 'false');
  panel.append(route);

  // Use real number positions so each curve ends before the following circle,
  // even when descriptions wrap differently or the mobile cards are taller.
  const draw = () => {
    const bounds = panel.getBoundingClientRect();
    route.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
    const nodes = [];
    for (let i = 0; i < numbers.length - 1; i++) {
      const from = numbers[i].getBoundingClientRect();
      const to = numbers[i + 1].getBoundingClientRect();
      const diameter = from.width;
      const x = from.left + diameter / 2 - bounds.left;
      const dotY = from.bottom - bounds.top + diameter * 0.27;
      const radius = diameter * 0.095;
      const start = dotY + radius + diameter * 0.08;
      const end = to.top - bounds.top - diameter * 0.2;
      const height = end - start;
      if (height <= 0) continue;
      const dot = document.createElementNS(ns, 'circle');
      dot.setAttribute('cx', x);
      dot.setAttribute('cy', dotY);
      dot.setAttribute('r', radius);
      dot.setAttribute('fill', '#df951b');
      const path = document.createElementNS(ns, 'path');
      path.setAttribute('d', `M ${x} ${start} C ${x - diameter * 0.04} ${start + height * 0.17}, ${x - diameter * 0.48} ${start + height * 0.24}, ${x - diameter * 0.4} ${start + height * 0.46} S ${x + diameter * 0.26} ${start + height * 0.76}, ${x + diameter * 0.2} ${end}`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', '#d58c1b');
      path.setAttribute('stroke-width', Math.max(0.9, diameter * 0.024));
      path.setAttribute('stroke-dasharray', `${diameter * 0.055} ${diameter * 0.075}`);
      path.setAttribute('stroke-linecap', 'round');
      nodes.push(dot, path);
    }
    route.replaceChildren(...nodes);
  };
  let frame;
  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(draw);
  };
  const observer = new ResizeObserver(schedule);
  observer.observe(panel);
  numbers.forEach(number => observer.observe(number.parentElement));
  document.fonts.ready.then(schedule);
  schedule();
})();
