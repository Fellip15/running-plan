(function () {
  'use strict';

  const STORAGE_THEME = 'running-plan.theme';
  const STORAGE_DONE = 'running-plan.done'; // {"4-1": true, ...}

  const planRoot = document.getElementById('plan-root');
  const themeSelect = document.getElementById('theme-select');
  const mascotEl = document.getElementById('mascot-emoji');
  const progressFill = document.getElementById('progress-fill');
  const progressLabel = document.getElementById('progress-label');
  const quotePopup = document.getElementById('quote-popup');

  // ─── State helpers ───
  const loadDone = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE_DONE) || '{}'); }
    catch { return {}; }
  };
  const saveDone = (s) => localStorage.setItem(STORAGE_DONE, JSON.stringify(s));
  let doneState = loadDone();

  // ─── Current week computation ───
  // Avoid time zone weirdness: parse manually as local midnight.
  function parseISO(d) {
    const [y, m, dd] = d.split('-').map(Number);
    return new Date(y, m - 1, dd);
  }
  function currentWeekIndex() {
    const start = parseISO(window.START_DATE);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return 0; // pre-start: nothing is "current" yet
    return Math.floor(diffDays / 7) + 1; // 1-indexed week
  }

  // ─── Themes ───
  function populateThemeSelect() {
    themeSelect.innerHTML = '';
    for (const t of window.THEMES) {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = t.label;
      themeSelect.appendChild(opt);
    }
    const stored = localStorage.getItem(STORAGE_THEME) || 'mob';
    themeSelect.value = stored;
    applyTheme(stored);
  }
  function applyTheme(id) {
    document.documentElement.setAttribute('data-theme', id);
    const theme = window.THEMES.find((t) => t.id === id) || window.THEMES[0];
    mascotEl.textContent = theme.mascot;
    localStorage.setItem(STORAGE_THEME, id);
  }
  themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));

  // ─── Quote popup ───
  let popupTimer = null;
  function flashQuote() {
    const themeId = document.documentElement.getAttribute('data-theme');
    const theme = window.THEMES.find((t) => t.id === themeId) || window.THEMES[0];
    const q = theme.quotes[Math.floor(Math.random() * theme.quotes.length)];
    quotePopup.textContent = `${theme.mascot} ${q}`;
    quotePopup.classList.add('is-shown');
    clearTimeout(popupTimer);
    popupTimer = setTimeout(() => quotePopup.classList.remove('is-shown'), 2800);
  }

  // ─── Render plan ───
  function render() {
    const cur = currentWeekIndex();
    let html = '';
    let lastBlock = null;

    for (const w of window.PLAN) {
      if (w.block !== lastBlock) {
        html += `<h2 class="block-header">${escapeHtml(window.BLOCK_TITLES[w.block])}</h2>`;
        lastBlock = w.block;
      }
      const cls =
        w.week < cur ? 'is-past' : w.week === cur ? 'is-current' : 'is-future';
      const tag = w.week === cur ? '<span class="week-tag">Agora</span>' : '';
      html += `
        <article class="card week ${cls}" data-week="${w.week}">
          <div class="week-head">
            <span class="week-num">Semana ${w.week} ${tag}</span>
            <span class="week-range">${escapeHtml(w.range)}</span>
          </div>
          <p class="week-summary">${escapeHtml(w.summary)}</p>
          <div class="week-sessions">
            ${w.sessions.map((s, i) => sessionRow(w.week, i, s)).join('')}
          </div>
        </article>
      `;
    }
    planRoot.innerHTML = html;

    // attach listeners
    planRoot.querySelectorAll('.session').forEach((row) => {
      row.addEventListener('click', onSessionClick);
    });
    updateProgress();
  }

  function sessionRow(week, i, text) {
    const key = `${week}-${i}`;
    const done = !!doneState[key];
    return `
      <label class="session ${done ? 'is-done' : ''}" data-key="${key}">
        <input type="checkbox" ${done ? 'checked' : ''} aria-label="Marcar sessão" />
        <span class="session-text">${escapeHtml(text)}</span>
      </label>
    `;
  }

  function onSessionClick(ev) {
    // We let the checkbox toggle natively; in case the click was on the label, sync state.
    const row = ev.currentTarget;
    const key = row.dataset.key;
    // setTimeout 0 so the checkbox's checked state is updated by browser first
    setTimeout(() => {
      const cb = row.querySelector('input[type="checkbox"]');
      const isDone = cb.checked;
      doneState[key] = isDone;
      if (!isDone) delete doneState[key];
      saveDone(doneState);
      row.classList.toggle('is-done', isDone);
      updateProgress();
      if (isDone) {
        const rect = row.getBoundingClientRect();
        window.fireConfetti?.(rect.left + rect.width / 2, rect.top + rect.height / 2);
        flashQuote();
      }
    }, 0);
  }

  function updateProgress() {
    const total = window.PLAN.reduce((sum, w) => sum + w.sessions.length, 0);
    const done = Object.values(doneState).filter(Boolean).length;
    const pct = total ? Math.min(100, Math.round((done / total) * 100)) : 0;
    progressFill.style.width = `${pct}%`;
    progressLabel.textContent = `${done} / ${total} sessões · ${pct}%`;
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  // ─── Init ───
  populateThemeSelect();
  render();

  // Scroll the current week into view on first load (if any)
  const cur = document.querySelector('.week.is-current');
  if (cur) cur.scrollIntoView({ behavior: 'smooth', block: 'center' });
})();
