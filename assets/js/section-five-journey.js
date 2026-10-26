(() => {
  const section = document.querySelector('#euromiles-journey');
  if (!section) return;
  const grid = section.querySelector('.section-five-roadmap-grid');
  const nodes = [...grid.querySelectorAll('.section-five-step-node')];
  const ns = 'http://www.w3.org/2000/svg';
  const road = document.createElementNS(ns, 'svg');
  road.classList.add('section-five-mobile-road');
  road.setAttribute('aria-hidden', 'true');
  road.setAttribute('focusable', 'false');
  grid.prepend(road);
  const draw = () => {
    if (!matchMedia('(max-width: 1199px)').matches) {
      const art = section.querySelector('.section-five-road-art').getBoundingClientRect();
      const bounds = grid.getBoundingClientRect();
      const stage = section.querySelector('.section-five-stage');
      const layout = nodes.map((node, index) => {
        const card = node.parentElement;
        card.style.removeProperty('height');
        const rect = card.getBoundingClientRect();
        const size = parseFloat(getComputedStyle(node).width);
        const x = art.left + Number(node.dataset.roadX) / 2033 * art.width;
        const y = art.top + Number(node.dataset.roadY) / 264 * art.height;
        const contentBottom = card.querySelector('.section-five-roadmap-points').getBoundingClientRect().bottom - rect.top;
        return {node, card, rect, size, x, y, contentBottom, lower: index % 2 === 1};
      });
      const upper = layout.filter(item => !item.lower);
      const lower = layout.filter(item => item.lower);
      const upperTop = Math.min(...upper.map(item => item.y - item.size / 2 - 12 - item.contentBottom));
      const lowerTop = Math.max(...lower.map(item => item.y + item.size / 2 - 12));
      const upperHeight = Math.max(...upper.map(item => item.rect.height));
      const lowerHeight = Math.max(...lower.map(item => item.rect.height));
      layout.forEach(item => {
        const {node, card, rect, size, x, y} = item;
        const top = item.lower ? lowerTop : upperTop;
        card.style.left = `${x - bounds.left - rect.width / 2 + 8}px`;
        card.style.top = `${top - bounds.top}px`;
        card.style.height = `${item.lower ? lowerHeight : upperHeight}px`;
        const placed = card.getBoundingClientRect();
        node.style.left = `${x - placed.left - size / 2}px`;
        node.style.top = `${y - placed.top - size / 2}px`;
      });
      stage.style.height = `${lowerTop - bounds.top + lowerHeight + 12}px`;
      return;
    }
    nodes.forEach(node => {
      node.style.removeProperty('left'); node.style.removeProperty('top');
      node.parentElement.style.removeProperty('left'); node.parentElement.style.removeProperty('top');
      node.parentElement.style.removeProperty('height');
    });
    section.querySelector('.section-five-stage').style.removeProperty('height');
    const bounds = grid.getBoundingClientRect();
    road.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
    const points = nodes.map(node => {
      const r = node.getBoundingClientRect();
      return {x: r.left + r.width / 2 - bounds.left, y: r.top + r.height / 2 - bounds.top};
    });
    let d = `M ${points[0].x} 0 L ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1], b = points[i], mid = (a.y + b.y) / 2;
      d += ` C ${a.x - 15} ${mid}, ${b.x + 15} ${mid}, ${b.x} ${b.y}`;
    }
    d += ` L ${points.at(-1).x} ${bounds.height}`;
    const strokes = [['#d6a145', 20], ['#09264a', 16], ['#fff5dc', 1]];
    road.replaceChildren(...strokes.map(([colour, width], i) => {
      const path = document.createElementNS(ns, 'path');
      path.setAttribute('d', d); path.setAttribute('fill', 'none');
      path.setAttribute('stroke', colour); path.setAttribute('stroke-width', width);
      path.setAttribute('stroke-linecap', 'round');
      if (i === 2) path.setAttribute('stroke-dasharray', '6 7');
      return path;
    }));
  };
  let frame;
  const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw); };
  const observer = new ResizeObserver(schedule);
  observer.observe(grid);
  observer.observe(section);
  observer.observe(section.querySelector('.section-five-road-art'));
  document.fonts.ready.then(schedule);
  schedule();
  section.querySelector('.section-five-footer-cta').addEventListener('click', event => {
    const dialog = document.querySelector('#consultation-dialog');
    if (!dialog) return;
    event.preventDefault();
    if (!dialog.open) dialog.showModal();
  });
})();
