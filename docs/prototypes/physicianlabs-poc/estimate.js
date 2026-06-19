/* ============================================================
   PhysicianLabs — Recovery Estimator
   Live "plug in your own numbers" tool for customer-dev / sales close.
   Transparent model. No backend, no data leaves the page.
   ============================================================ */
(function () {
  'use strict';

  // ---- Benchmark coefficients (the model) ----
  // Tuned to be substantial but defensible (~10% of collectible baseline for a leaky practice).
  var DENIAL_UNRECOVERED = 0.35;   // share of denied $ never recovered
  var EM_UPLIFT_PER_VISIT = 34;    // $ uplift from correcting one E/M level
  var EM_UNDERCODE_SHARE  = 0.15;  // share of visits under-coded
  var PAYER_UNDERPAY_RATE = 0.025; // share of collectible underpaid vs contract
  var UNBILLED_SHARE      = 0.005; // share of visits never billed

  function round100(x) { return Math.max(0, Math.round(x / 100) * 100); }

  function calc(visits, reimb, denialPct) {
    var base = visits * reimb * 12; // annual collectible baseline
    var denials  = round100(base * (denialPct / 100) * DENIAL_UNRECOVERED);
    var under    = round100(visits * 12 * EM_UPLIFT_PER_VISIT * EM_UNDERCODE_SHARE);
    var payer    = round100(base * PAYER_UNDERPAY_RATE);
    var unbilled = round100(visits * 12 * UNBILLED_SHARE * reimb);
    return { denials: denials, under: under, payer: payer, unbilled: unbilled,
             total: denials + under + payer + unbilled };
  }

  // ---- elements ----
  var elVisits   = document.getElementById('in-visits');
  var elReimb    = document.getElementById('in-reimb');
  var elDenial   = document.getElementById('in-denial');
  var elSpec     = document.getElementById('in-specialty');
  var outVisits  = document.getElementById('out-visits');
  var outReimb   = document.getElementById('out-reimb');
  var outDenial  = document.getElementById('out-denial');
  var epAmount   = document.getElementById('ep-amount');
  var epSpec     = document.getElementById('ep-specialty');
  var calcBtn    = document.getElementById('calc-btn');

  var bars = {
    denials:  { bar: document.getElementById('bar-denials'),  val: document.getElementById('val-denials') },
    under:    { bar: document.getElementById('bar-under'),    val: document.getElementById('val-under') },
    payer:    { bar: document.getElementById('bar-payer'),    val: document.getElementById('val-payer') },
    unbilled: { bar: document.getElementById('bar-unbilled'), val: document.getElementById('val-unbilled') }
  };

  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  // guarantee=off hides the guarantee banner (for A/B testing it in live demos).
  // Accept it in either the query string OR the hash, since some static servers
  // rewrite clean URLs and drop the query (e.g. `npx serve`). Use #guarantee=off
  // when serving over http; ?guarantee=off works when opening the file directly.
  if (/guarantee=off/.test(window.location.search + window.location.hash)) {
    var g = document.getElementById('est-guarantee');
    if (g) g.style.display = 'none';
  }

  function render(animate) {
    var v = parseInt(elVisits.value, 10);
    var r = parseInt(elReimb.value, 10);
    var d = parseFloat(elDenial.value);

    outVisits.textContent = v.toLocaleString('en-US');
    outReimb.textContent  = '$' + r;
    outDenial.textContent = d + '%';
    epSpec.textContent    = elSpec.value;

    var res = calc(v, r, d);
    var max = Math.max(res.denials, res.under, res.payer, res.unbilled, 1);

    bars.denials.val.textContent  = fmt(res.denials);
    bars.under.val.textContent    = fmt(res.under);
    bars.payer.val.textContent    = fmt(res.payer);
    bars.unbilled.val.textContent = fmt(res.unbilled);
    bars.denials.bar.style.width  = (res.denials  / max * 100) + '%';
    bars.under.bar.style.width    = (res.under    / max * 100) + '%';
    bars.payer.bar.style.width    = (res.payer    / max * 100) + '%';
    bars.unbilled.bar.style.width = (res.unbilled / max * 100) + '%';

    if (animate) countUp(epAmount, 0, res.total, 1100);
    else epAmount.textContent = fmt(res.total);
  }

  function countUp(el, from, to, dur) {
    var start = null;
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = '$' + Math.round(from + (to - from) * eased).toLocaleString('en-US');
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // Live update while dragging; no count-up (stays responsive)
  [elVisits, elReimb, elDenial, elSpec].forEach(function (el) {
    el.addEventListener('input', function () { render(false); });
  });
  // The "moment" — re-run with the count-up animation
  calcBtn.addEventListener('click', function () { render(true); });

  // boot: compute defaults and animate once
  render(true);
})();
