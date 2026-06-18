/* ============================================================
   PhysicianLabs — PoC walkthrough controller
   Screen routing + guided demo bar + canned interactions.
   Disposable demo code. No backend.
   ============================================================ */
(function () {
  'use strict';

  // Guided order. signin lives outside the app shell; 2–7 live inside it.
  var FLOW = [
    { id: 'signin',     name: 'Sign in',    nav: null },
    { id: 'intake',     name: 'Intake',     nav: null },
    { id: 'diagnostic', name: 'Diagnostic', nav: 'diagnostic' },
    { id: 'recovery',   name: 'Recovery',   nav: 'recovery' },
    { id: 'roadmap',    name: 'Roadmap',    nav: 'roadmap' },
    { id: 'dashboard',  name: 'Dashboard',  nav: 'dashboard' },
    { id: 'close',      name: 'Get started', nav: null }
  ];

  var app        = document.getElementById('app');
  var crumb      = document.getElementById('crumb');
  var backBtn    = document.getElementById('db-back');
  var nextBtn    = document.getElementById('db-next');
  var restartBtn = document.getElementById('db-restart');
  var stepsWrap  = document.getElementById('db-steps');
  var analyzing  = document.getElementById('analyzing');

  var idx = 0;            // current index in FLOW
  var payoffShown = false;

  // ---- build the step pips in the demo bar ----
  FLOW.forEach(function (step, i) {
    var el = document.createElement('button');
    el.className = 'db-step';
    el.setAttribute('data-idx', i);
    el.innerHTML = '<span class="db-num">' + (i + 1) + '</span><span class="db-name">' + step.name + '</span>';
    el.addEventListener('click', function () { goTo(i); });
    stepsWrap.appendChild(el);
  });
  var stepEls = Array.prototype.slice.call(stepsWrap.children);

  // ---- core: render a given flow index ----
  function render() {
    var cur = FLOW[idx];

    // Toggle app shell vs. standalone sign-in
    var inApp = cur.id !== 'signin';
    app.classList.toggle('active', inApp);

    // Toggle screens
    document.querySelectorAll('.screen').forEach(function (s) {
      s.classList.toggle('active', s.id === 'screen-' + cur.id);
    });

    // Sidebar active state
    document.querySelectorAll('.side-item').forEach(function (it) {
      it.classList.toggle('active', cur.nav && it.getAttribute('data-nav') === cur.nav);
    });

    // Breadcrumb
    if (crumb) crumb.innerHTML = '<b>' + cur.name + '</b>';

    // Demo bar steps
    stepEls.forEach(function (el, i) {
      el.classList.toggle('active', i === idx);
      el.classList.toggle('done', i < idx);
    });

    // Nav buttons
    backBtn.disabled = idx === 0;
    nextBtn.textContent = idx === FLOW.length - 1 ? 'Done' : 'Next →';
    nextBtn.disabled = idx === FLOW.length - 1;

    // Special reveal on the diagnostic payoff
    if (cur.id === 'diagnostic') revealPayoff();

    // Always start each screen at the top
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function goTo(i) {
    if (i < 0 || i > FLOW.length - 1) return;
    idx = i;
    render();
  }
  function next() { goTo(Math.min(idx + 1, FLOW.length - 1)); }
  function back() { goTo(Math.max(idx - 1, 0)); }

  // ---- diagnostic payoff: count-up the score + the dollar amount ----
  function revealPayoff() {
    if (payoffShown) return;
    payoffShown = true;

    var arc    = document.getElementById('ring-arc');
    var scoreEl = document.getElementById('ring-score');
    var amtEl   = document.getElementById('payoff-amount');
    var SCORE = 76, AMOUNT = 23800, CIRC = 465;

    // ring sweep
    if (arc) {
      requestAnimationFrame(function () {
        arc.style.transition = 'stroke-dashoffset 1.1s cubic-bezier(.22,1,.36,1)';
        arc.style.strokeDashoffset = String(CIRC - (CIRC * SCORE / 100));
      });
    }
    countUp(scoreEl, 0, SCORE, 1100, function (v) { return String(v); });
    countUp(amtEl, 0, AMOUNT, 1400, function (v) { return '$' + v.toLocaleString('en-US'); });
  }

  function countUp(el, from, to, dur, fmt) {
    if (!el) return;
    var start = null;
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = fmt(Math.round(from + (to - from) * eased));
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // ---- intake -> analyzing -> diagnostic ----
  var STATUS = [
    'Connecting to your billing system…',
    'Pulling 90 days of claims…',
    'Benchmarking against 40+ metrics…',
    'Scanning for revenue leaks…',
    'Building your roadmap…'
  ];
  function runDiagnostic() {
    var statusEl = document.getElementById('analyzing-status');
    var i = 0;
    analyzing.classList.add('show');
    if (statusEl) statusEl.textContent = STATUS[0];
    var t = setInterval(function () {
      i++;
      if (i < STATUS.length) {
        if (statusEl) { statusEl.style.opacity = '0';
          setTimeout(function () { statusEl.textContent = STATUS[i]; statusEl.style.opacity = '1'; }, 160); }
      } else {
        clearInterval(t);
        setTimeout(function () {
          analyzing.classList.remove('show');
          goTo(indexOf('diagnostic'));
        }, 420);
      }
    }, 620);
  }

  function indexOf(id) {
    for (var i = 0; i < FLOW.length; i++) if (FLOW[i].id === id) return i;
    return 0;
  }

  // ---- wire up events ----
  nextBtn.addEventListener('click', next);
  backBtn.addEventListener('click', back);
  restartBtn.addEventListener('click', function () { payoffShown = false; resetPayoff(); goTo(0); });

  // Buttons that jump to a named screen
  document.querySelectorAll('[data-go]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      goTo(indexOf(b.getAttribute('data-go')));
    });
  });

  // Sidebar navigation
  document.querySelectorAll('.side-item[data-nav]').forEach(function (it) {
    it.addEventListener('click', function () { goTo(indexOf(it.getAttribute('data-nav'))); });
  });

  // Sign-in form
  var signinForm = document.getElementById('signin-form');
  if (signinForm) signinForm.addEventListener('submit', function (e) { e.preventDefault(); next(); });

  // Run diagnostic
  var runBtn = document.getElementById('run-diagnostic');
  if (runBtn) runBtn.addEventListener('click', runDiagnostic);

  // Close screen — claim / book both resolve to success
  function showSuccess() {
    var card = document.getElementById('offer-card');
    var ok   = document.getElementById('close-success');
    if (card) card.style.display = 'none';
    if (ok) { ok.classList.add('show'); ok.focus && ok.focus(); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  var claimBtn = document.getElementById('claim-btn');
  var bookBtn  = document.getElementById('book-btn');
  if (claimBtn) claimBtn.addEventListener('click', showSuccess);
  if (bookBtn)  bookBtn.addEventListener('click', showSuccess);

  function resetPayoff() {
    var arc = document.getElementById('ring-arc');
    var card = document.getElementById('offer-card');
    var ok = document.getElementById('close-success');
    if (arc) { arc.style.transition = 'none'; arc.style.strokeDashoffset = '465'; }
    var s = document.getElementById('ring-score'); if (s) s.textContent = '0';
    var a = document.getElementById('payoff-amount'); if (a) a.textContent = '$0';
    if (card) card.style.display = '';
    if (ok) ok.classList.remove('show');
  }

  // Keyboard: left/right arrows drive the walkthrough (ignore when typing)
  document.addEventListener('keydown', function (e) {
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
    if (e.key === 'ArrowRight') { next(); }
    else if (e.key === 'ArrowLeft') { back(); }
  });

  // boot
  render();
})();
