/* ═══════════════════════════════════════════════════════════════════════
   The Physicians' Circle — interactions
   - Sticky-nav shadow on scroll
   - Scroll fade-up reveal
   - FAQ accordion
   - Channel attribution (first-touch UTM capture) + Netlify AJAX form submit
   ═══════════════════════════════════════════════════════════════════════ */

// ── Sticky nav shadow ──
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 8), { passive: true });
}

// ── Scroll fade-up ──
const io = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// ── FAQ accordion ──
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    q.setAttribute('aria-expanded', open ? 'true' : 'false');
    a.style.maxHeight = open ? a.scrollHeight + 'px' : null;
  });
});

// ═══ CHANNEL ATTRIBUTION ═══
// Capture UTM params on first visit (first-touch) and persist them, so an application
// submitted on a later visit is still credited to the channel that originally sent them.
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  let stored = {};
  try { stored = JSON.parse(localStorage.getItem('tpc_attribution') || '{}'); } catch (_) {}
  if (!stored.utm_source && params.get('utm_source')) {
    stored = {};
    UTM_KEYS.forEach(k => stored[k] = params.get(k) || '');
    stored.referrer = document.referrer || '';
    stored.landing_page = window.location.pathname + window.location.search;
    stored.first_seen = new Date().toISOString();
    try { localStorage.setItem('tpc_attribution', JSON.stringify(stored)); } catch (_) {}
  }
  return stored;
}
const ATTRIBUTION = captureAttribution();

function stampForm(form) {
  UTM_KEYS.concat(['referrer', 'landing_page']).forEach(k => {
    const field = form.querySelector('input[name="' + k + '"]');
    if (field) field.value = ATTRIBUTION[k] || '';
  });
}
document.querySelectorAll('form[data-netlify]').forEach(stampForm);

// ── Netlify AJAX submit (keeps inline success state), then fire an analytics conversion ──
function wireForm(formId, successId, display) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    stampForm(form);
    const body = new URLSearchParams(new FormData(form)).toString();
    const done = () => {
      form.style.display = 'none';
      const s = document.getElementById(successId);
      if (s) { s.style.display = display; if (s.focus) s.focus(); }
      if (window.plausible) {
        window.plausible('Application', {
          props: {
            form: form.getAttribute('name'),
            track: (form.querySelector('[name="track"]') || {}).value || 'n/a',
            source: ATTRIBUTION.utm_source || 'direct'
          }
        });
      }
    };
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
      .then(done).catch(done); // show success even if endpoint isn't live yet (local preview)
  });
}
wireForm('apply-form', 'apply-success', 'block');

// ── Smooth scroll with nav offset ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const t = document.querySelector(href);
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 84, behavior: 'smooth' });
  });
});

// ── Pre-select the apply track when a specific "This is me" CTA is used ──
document.querySelectorAll('[data-track-select]').forEach(el => {
  el.addEventListener('click', () => {
    const sel = document.getElementById('ap-track');
    if (sel) sel.value = el.getAttribute('data-track-select');
  });
});
