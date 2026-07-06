// ═══════════════════════════════════════════
//  Nav scroll effect
// ═══════════════════════════════════════════
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 20
    ? 'rgba(15,39,68,0.98)'
    : 'rgba(15,39,68,0.95)';
});

// ═══════════════════════════════════════════
//  Hamburger toggle
// ═══════════════════════════════════════════
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  const navActions = document.querySelector('.nav-actions');
  const open = navLinks.style.display === 'flex';
  navLinks.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:rgba(15,39,68,0.98);padding:24px;gap:20px;border-bottom:1px solid rgba(255,255,255,0.08)';
  navActions.style.cssText = open ? '' : 'display:flex;position:fixed;top:200px;left:0;right:0;padding:0 24px 24px;background:rgba(15,39,68,0.98)';
});

// Smooth scroll + close mobile menu on nav link tap
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');
function closeMobileMenu() {
  navLinks.style.cssText = '';
  navActions.style.cssText = '';
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    closeMobileMenu();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) window.scrollTo({ top: target.offsetTop - 68, behavior: 'smooth' });
  });
});

// ═══════════════════════════════════════════
//  Demo form
// ═══════════════════════════════════════════
document.getElementById('demo-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Request Received!';
  btn.style.background = '#00A88A';
  btn.disabled = true;
  e.target.reset();
});

// ═══════════════════════════════════════════
//  Scroll-in animations
// ═══════════════════════════════════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pain-card, .pillar-row, .step, .testimonial-card, .compliance-badge').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});

// ═══════════════════════════════════════════
//  SURVEY ENGINE
// ═══════════════════════════════════════════

const CHALLENGES = [
  'Launching my clinic',
  'Filling my patient pipeline',
  'Revenue cycle & billing',
  'Administrative overhead & costs',
  'Scaling & growing my clinic',
];

const QUESTIONS = [
  {
    id: 'practicing',
    type: 'single',
    question: 'Are you currently practicing clinical work as a Physician?',
    options: ['Yes', 'No'],
  },
  {
    id: 'clinic_status',
    type: 'single',
    question: 'Do you have your own clinic, or are you thinking about starting one?',
    options: ['I have my own clinic', "I'm thinking about starting one", 'Neither'],
  },
  {
    id: 'help_launch',
    type: 'single',
    question: 'Do you need help in launching a clinic?',
    options: ['Yes', 'No', 'Not applicable'],
  },
  {
    id: 'help_expand',
    type: 'single',
    question: 'Do you need help in expanding your existing clinic?',
    options: ['Yes', 'No', 'Not applicable'],
  },
  {
    id: 'rank_challenges',
    type: 'rank',
    question: 'Please rank these based on where your biggest challenges are right now.',
    subtext: 'Tap items in order of priority — first tap = your #1 biggest challenge.',
    items: CHALLENGES,
  },
  {
    id: 'rank_why',
    type: 'text',
    question: 'Why did you choose this ranking?',
    placeholder: 'Share your thinking...',
  },
  {
    id: 'top_challenge_why',
    type: 'text',
    question: 'Why is your top challenge difficult today?',
    placeholder: 'What makes it hard right now...',
  },
  {
    id: 'current_approach',
    type: 'text',
    question: 'What is your current approach to this challenge?',
    placeholder: 'How are you handling it today...',
  },
  {
    id: 'open_convo',
    type: 'single',
    question: 'Are you open to a 15-minute conversation?',
    options: ["Yes, I'd welcome that", 'No, not right now'],
  },
  {
    id: 'advisory',
    type: 'single',
    question: "Would you be interested in advisory offerings to adopt AI or boost your clinic's profitability?",
    options: ['Yes, definitely', 'Maybe — tell me more', 'Not at this time'],
  },
];

// State
let currentStep = 0;
let answers = {};
let rankOrder = []; // tracks tap order for rank question

const overlay   = document.getElementById('survey-overlay');
const body      = document.getElementById('survey-body');
const progress  = document.getElementById('survey-progress');
const stepLabel = document.getElementById('survey-step-label');
const btnBack   = document.getElementById('survey-back');
const btnNext   = document.getElementById('survey-next');
const btnClose  = document.getElementById('survey-close');
const fab       = document.getElementById('survey-fab');

// ─── Open / Close ───────────────────────────
fab.addEventListener('click', openSurvey);
btnClose.addEventListener('click', closeSurvey);
overlay.addEventListener('click', e => { if (e.target === overlay) closeSurvey(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSurvey(); });

function openSurvey() {
  currentStep = 0;
  answers = {};
  rankOrder = [];
  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add('visible'));
  renderStep();
  fab.setAttribute('aria-expanded', 'true');
}

function closeSurvey() {
  overlay.classList.remove('visible');
  setTimeout(() => { overlay.hidden = true; }, 250);
  fab.setAttribute('aria-expanded', 'false');
}

// ─── Progress ───────────────────────────────
function updateProgress() {
  const total = QUESTIONS.length;
  const pct = Math.round(((currentStep) / total) * 100);
  progress.style.width = pct + '%';
  stepLabel.textContent = `Question ${currentStep + 1} of ${total}`;
}

// ─── Render step ────────────────────────────
function renderStep() {
  const q = QUESTIONS[currentStep];
  updateProgress();
  btnBack.disabled = currentStep === 0;
  btnNext.textContent = currentStep === QUESTIONS.length - 1 ? 'Submit →' : 'Next →';

  // Validate — enable Next only when answered
  refreshNextBtn();

  body.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'survey-screen';

  const qEl = document.createElement('p');
  qEl.className = 'survey-question';
  qEl.textContent = q.question;
  wrap.appendChild(qEl);

  if (q.subtext) {
    const sub = document.createElement('p');
    sub.className = 'survey-subtext';
    sub.textContent = q.subtext;
    wrap.appendChild(sub);
  }

  if (q.type === 'single')   wrap.appendChild(renderSingle(q));
  if (q.type === 'text')     wrap.appendChild(renderText(q));
  if (q.type === 'rank')     wrap.appendChild(renderRank(q));

  body.appendChild(wrap);
}

function renderSingle(q) {
  const container = document.createElement('div');
  container.className = 'survey-options';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'survey-option' + (answers[q.id] === opt ? ' selected' : '');
    btn.type = 'button';
    btn.innerHTML = `<span class="survey-option-dot"></span><span>${opt}</span>`;
    btn.addEventListener('click', () => {
      answers[q.id] = opt;
      container.querySelectorAll('.survey-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      refreshNextBtn();
    });
    container.appendChild(btn);
  });
  return container;
}

function renderText(q) {
  const ta = document.createElement('textarea');
  ta.className = 'survey-textarea';
  ta.placeholder = q.placeholder || '';
  ta.value = answers[q.id] || '';
  ta.setAttribute('aria-label', q.question);
  ta.addEventListener('input', () => {
    answers[q.id] = ta.value.trim();
    refreshNextBtn();
  });
  return ta;
}

function renderRank(q) {
  const container = document.createElement('div');

  const hint = document.createElement('p');
  hint.className = 'survey-rank-hint';
  hint.innerHTML = '<span>👆</span> Tap in order of priority — first = #1 biggest challenge';
  container.appendChild(hint);

  const list = document.createElement('div');
  list.className = 'survey-rank-list';

  // Restore prior rank order if navigating back
  rankOrder = answers[q.id] ? [...answers[q.id]] : [];

  q.items.forEach(item => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'survey-rank-item';
    row.dataset.item = item;

    const badge = document.createElement('span');
    badge.className = 'survey-rank-badge';
    const existingRank = rankOrder.indexOf(item);
    if (existingRank >= 0) {
      badge.textContent = existingRank + 1;
      row.classList.add('ranked');
    }

    const label = document.createElement('span');
    label.textContent = item;

    row.appendChild(badge);
    row.appendChild(label);

    row.addEventListener('click', () => {
      const idx = rankOrder.indexOf(item);
      if (idx >= 0) {
        // Deselect — remove and rebuild ranks after it
        rankOrder.splice(idx, 1);
      } else {
        rankOrder.push(item);
      }
      answers[q.id] = [...rankOrder];
      // Re-render rank badges
      list.querySelectorAll('.survey-rank-item').forEach(r => {
        const b = r.querySelector('.survey-rank-badge');
        const ri = rankOrder.indexOf(r.dataset.item);
        if (ri >= 0) {
          b.textContent = ri + 1;
          r.classList.add('ranked');
        } else {
          b.textContent = '';
          r.classList.remove('ranked');
        }
      });
      refreshNextBtn();
    });

    list.appendChild(row);
  });

  container.appendChild(list);
  return container;
}

function refreshNextBtn() {
  const q = QUESTIONS[currentStep];
  let valid = false;
  if (q.type === 'single') valid = !!answers[q.id];
  if (q.type === 'text')   valid = true; // text is optional — allow skipping
  if (q.type === 'rank')   valid = rankOrder.length === q.items.length;
  btnNext.disabled = !valid;
}

// ─── Navigation ─────────────────────────────
btnBack.addEventListener('click', () => {
  if (currentStep > 0) { currentStep--; renderStep(); }
});

btnNext.addEventListener('click', () => {
  if (btnNext.disabled) return;
  if (currentStep < QUESTIONS.length - 1) {
    currentStep++;
    renderStep();
  } else {
    showPostSubmit();
  }
});

// ═══════════════════════════════════════════
//  POST-SUBMIT FLOW
// ═══════════════════════════════════════════

function showPostSubmit() {
  // Hide nav, show thank you + summary + email capture
  document.getElementById('survey-nav').style.display = 'none';
  progress.style.width = '100%';
  stepLabel.textContent = 'Almost done!';

  body.innerHTML = '';
  const screen = document.createElement('div');
  screen.className = 'survey-screen';

  screen.innerHTML = `
    <span class="survey-thankyou-icon" aria-hidden="true">🙏</span>
    <p class="survey-thankyou-title">Thank you for your time!</p>
    <p class="survey-thankyou-sub">Here's a summary of your responses. We'd love to stay in touch — please leave your email below.</p>
    <div class="survey-answers-summary" id="answers-summary"></div>
    <label class="survey-field-label" for="survey-email">Your email address <span style="color:var(--teal)">*</span></label>
    <input id="survey-email" class="survey-input" type="email" placeholder="you@example.com" autocomplete="email" required />
    <button class="survey-btn-next" id="post-submit-btn" style="width:100%" disabled>Continue →</button>
  `;

  body.appendChild(screen);

  // Populate answers summary
  const summary = document.getElementById('answers-summary');
  QUESTIONS.forEach(q => {
    if (!answers[q.id] && answers[q.id] !== 0) return;
    const row = document.createElement('div');
    row.className = 'survey-answer-row';
    let answerText = answers[q.id];
    if (Array.isArray(answerText)) answerText = answerText.map((a, i) => `${i+1}. ${a}`).join(' · ');
    row.innerHTML = `<p class="survey-answer-q">${q.question}</p><p class="survey-answer-a">${answerText}</p>`;
    summary.appendChild(row);
  });

  // Email validation
  const emailInput = document.getElementById('survey-email');
  const continueBtn = document.getElementById('post-submit-btn');
  emailInput.addEventListener('input', () => {
    continueBtn.disabled = !emailInput.validity.valid || emailInput.value.trim() === '';
  });
  continueBtn.addEventListener('click', () => {
    answers['email'] = emailInput.value.trim();
    const wantsCall = answers['open_convo'] === "Yes, I'd welcome that";
    if (wantsCall) {
      showPhoneScreen();
    } else {
      showFinalScreen();
    }
  });
}

function showPhoneScreen() {
  body.innerHTML = '';
  const screen = document.createElement('div');
  screen.className = 'survey-screen';
  screen.innerHTML = `
    <span class="survey-thankyou-icon" aria-hidden="true">📞</span>
    <p class="survey-thankyou-title">Let's set up that conversation.</p>
    <p class="survey-thankyou-sub">Because you said yes to a 15-minute conversation, please share your phone number so we can coordinate.</p>
    <label class="survey-field-label" for="survey-phone">Phone number <span style="color:var(--teal)">*</span></label>
    <input id="survey-phone" class="survey-input" type="tel" placeholder="+1 (555) 000-0000" autocomplete="tel" />
    <button class="survey-btn-next" id="phone-continue-btn" style="width:100%" disabled>Continue →</button>
  `;
  body.appendChild(screen);

  const phoneInput = document.getElementById('survey-phone');
  const continueBtn = document.getElementById('phone-continue-btn');
  phoneInput.addEventListener('input', () => {
    continueBtn.disabled = phoneInput.value.trim().length < 7;
  });
  continueBtn.addEventListener('click', () => {
    answers['phone'] = phoneInput.value.trim();
    showCommsScreen();
  });
}

function showCommsScreen() {
  body.innerHTML = '';
  const screen = document.createElement('div');
  screen.className = 'survey-screen';

  const COMMS = [
    { label: 'Phone Call',  icon: '📞', value: 'phone_call' },
    { label: 'WhatsApp',    icon: '💬', value: 'whatsapp'   },
    { label: 'Email',       icon: '✉️',  value: 'email'      },
    { label: 'SMS / Text',  icon: '📱', value: 'sms'        },
  ];

  const titleEl = document.createElement('p');
  titleEl.className = 'survey-thankyou-title';
  titleEl.textContent = 'What is your preferred way to connect?';
  const subEl = document.createElement('p');
  subEl.className = 'survey-thankyou-sub';
  subEl.style.marginBottom = '20px';
  subEl.textContent = 'Choose the channel that works best for you.';

  const grid = document.createElement('div');
  grid.className = 'survey-comms-grid';

  COMMS.forEach(c => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'survey-comms-option';
    btn.innerHTML = `<span class="survey-comms-icon" aria-hidden="true">${c.icon}</span><span>${c.label}</span>`;
    btn.addEventListener('click', () => {
      answers['preferred_comms'] = c.value;
      grid.querySelectorAll('.survey-comms-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      doneBtn.disabled = false;
    });
    grid.appendChild(btn);
  });

  const doneBtn = document.createElement('button');
  doneBtn.className = 'survey-btn-next';
  doneBtn.style.width = '100%';
  doneBtn.style.marginTop = '20px';
  doneBtn.textContent = 'Done ✓';
  doneBtn.disabled = true;
  doneBtn.addEventListener('click', showFinalScreen);

  screen.appendChild(titleEl);
  screen.appendChild(subEl);
  screen.appendChild(grid);
  screen.appendChild(doneBtn);
  body.appendChild(screen);
}

function showFinalScreen() {
  body.innerHTML = '';
  const screen = document.createElement('div');
  screen.className = 'survey-screen';
  screen.style.textAlign = 'center';
  screen.innerHTML = `
    <span class="survey-final-check" aria-hidden="true">✅</span>
    <p class="survey-thankyou-title">You're all set!</p>
    <p class="survey-thankyou-sub">We've received your responses and will be in touch soon. Thank you for helping shape PhysicianLabs.</p>
    <button class="survey-btn-next" style="width:100%;margin-top:8px" id="survey-done-close">Close</button>
  `;
  body.appendChild(screen);
  document.getElementById('survey-done-close').addEventListener('click', closeSurvey);
  stepLabel.textContent = 'Complete!';
  progress.style.width = '100%';
}
