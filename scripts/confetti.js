// Confete minimalista em canvas. Usa cores do tema atual (lê CSS vars).
(function () {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let running = false;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function getThemeColors() {
    const cs = getComputedStyle(document.documentElement);
    return [
      cs.getPropertyValue('--accent').trim() || '#ff3b3b',
      cs.getPropertyValue('--accent-2').trim() || '#2ec4d6',
      cs.getPropertyValue('--text').trim() || '#1a1a1a',
      '#ffffff',
    ];
  }

  function spawn(x, y) {
    const colors = getThemeColors();
    const count = 80;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 14,
        vy: Math.random() * -14 - 4,
        g: 0.4 + Math.random() * 0.2,
        size: 5 + Math.random() * 6,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.3,
        color: colors[i % colors.length],
        life: 90 + Math.random() * 40,
      });
    }
    if (!running) {
      running = true;
      requestAnimationFrame(loop);
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter((p) => p.life > 0);
    for (const p of particles) {
      p.vy += p.g;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.life -= 1;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    }
    if (particles.length > 0) {
      requestAnimationFrame(loop);
    } else {
      running = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  window.fireConfetti = function (x, y) {
    spawn(x ?? window.innerWidth / 2, y ?? window.innerHeight / 2);
  };
})();
