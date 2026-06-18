// PhysicianLabs pre-seed pitch deck — SoftBank / NEC-X — June 2026
// Run: NODE_PATH=<global node_modules> node build-pitch-deck-2026-06-11.js
const pptxgen = require("pptxgenjs");

const NAVY = "0F172A";      // brand ink/dark
const CARD = "1B2942";      // card surface
const CARD2 = "16213A";     // alt surface
const TEAL = "2DD4BF";      // electric teal accent
const TEALB = "5EEAD4";     // bright teal
const INDIGO = "818CF8";    // secondary accent
const WHITE = "FFFFFF";
const MUTED = "8FA3BF";     // muted slate
const RED = "F87171";
const AMBER = "FBBF24";

const HEAD = "Trebuchet MS";
const BODY = "Calibri";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Ash Malleck";
pres.title = "PhysicianLabs — Pre-Seed Investor Briefing";

function newSlide() {
  const s = pres.addSlide();
  s.background = { color: NAVY };
  return s;
}

function kicker(s, text) {
  s.addText(text, { x: 0.5, y: 0.3, w: 7.5, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10, color: TEAL, bold: true, charSpacing: 3 });
}

function title(s, text, opts = {}) {
  s.addText(text, { x: 0.5, y: 0.62, w: 9.0, h: opts.h || 0.55, margin: 0, fontFace: HEAD, fontSize: opts.size || 24, color: WHITE, bold: true });
}

function pageNum(s, n) {
  s.addText(String(n).padStart(2, "0"), { x: 9.35, y: 5.3, w: 0.45, h: 0.25, margin: 0, fontFace: BODY, fontSize: 9, color: MUTED, align: "right" });
}

function card(s, x, y, w, h, color) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: color || CARD }, line: { type: "none" } });
}

// ============================== COVER ==============================
{
  const s = newSlide();
  s.addText([
    { text: "PHYSICIAN", options: { color: WHITE } },
    { text: "LABS", options: { color: TEAL } },
  ], { x: 0.5, y: 1.35, w: 9, h: 0.75, margin: 0, align: "center", fontFace: HEAD, fontSize: 40, bold: true, charSpacing: 5 });

  // EKG pulse motif
  const lw = 2.5;
  s.addShape(pres.shapes.LINE, { x: 3.05, y: 2.62, w: 1.35, h: 0, line: { color: TEAL, width: lw } });
  s.addShape(pres.shapes.LINE, { x: 4.40, y: 2.27, w: 0.13, h: 0.35, flipV: true, line: { color: TEAL, width: lw } });
  s.addShape(pres.shapes.LINE, { x: 4.53, y: 2.27, w: 0.22, h: 0.62, line: { color: TEAL, width: lw } });
  s.addShape(pres.shapes.LINE, { x: 4.75, y: 2.62, w: 0.16, h: 0.27, flipV: true, line: { color: TEAL, width: lw } });
  s.addShape(pres.shapes.LINE, { x: 4.91, y: 2.62, w: 2.04, h: 0, line: { color: TEAL, width: lw } });

  s.addText("Put doctors back in the driver's seat of their own financial future.", { x: 1.0, y: 3.05, w: 8, h: 0.45, margin: 0, align: "center", fontFace: BODY, fontSize: 16, italic: true, color: TEALB });
  s.addText("The AI-native financial operating layer for independent medicine", { x: 1.0, y: 3.62, w: 8, h: 0.35, margin: 0, align: "center", fontFace: BODY, fontSize: 13, color: MUTED });
  s.addText("PRE-SEED BRIEFING   |   SOFTBANK + NEC-X   |   JUNE 2026", { x: 1.0, y: 4.85, w: 8, h: 0.3, margin: 0, align: "center", fontFace: HEAD, fontSize: 10, color: MUTED, charSpacing: 2 });

  s.addNotes("Thank you for the time. Five minutes, fourteen slides, and one promise: every number in this deck is first-person sourced or hyperlink-cited, and the traction slide is stated exactly as it is.");
}

// ============================== 1. OUR WHY ==============================
{
  const s = newSlide();
  kicker(s, "01  /  OUR WHY");
  title(s, "Sixteen years of medical training. Zero hours of business training.", { size: 22 });

  s.addText([
    { text: "My brother is an orthopedic surgeon who has launched two clinics. In his first, he lost over $200,000", options: { color: WHITE, breakLine: false } },
    { text: " — not to bad medicine, but to business decisions nobody ever trained him to make. He had no visibility into his own P&L.", options: { color: WHITE } },
  ], { x: 0.5, y: 1.5, w: 5.3, h: 1.7, margin: 0, fontFace: BODY, fontSize: 15, valign: "top" });

  s.addText("That story is the norm for independent doctors. Not the exception.", { x: 0.5, y: 3.2, w: 5.3, h: 0.5, margin: 0, fontFace: BODY, fontSize: 15, color: MUTED, italic: true });

  s.addText("PhysicianLabs exists to put doctors back in the driver's seat of their own financial future.", { x: 0.5, y: 3.95, w: 5.3, h: 0.9, margin: 0, fontFace: HEAD, fontSize: 15, bold: true, color: TEAL });

  card(s, 6.2, 1.5, 3.3, 3.4);
  s.addText("“", { x: 6.4, y: 1.45, w: 0.8, h: 0.7, margin: 0, fontFace: HEAD, fontSize: 44, color: TEAL, bold: true });
  s.addText("The amount of tax I'm paying is nauseating. The house I'd be living in would be double the size.", { x: 6.5, y: 2.15, w: 2.7, h: 1.7, margin: 0, fontFace: BODY, fontSize: 14, italic: true, color: WHITE });
  s.addText("Orthopedic surgeon and two-clinic owner, interview on record, May 2026", { x: 6.5, y: 4.0, w: 2.7, h: 0.7, margin: 0, fontFace: BODY, fontSize: 10, color: MUTED });
  pageNum(s, 1);

  s.addNotes("Open on the story, not the product. My brother is an orthopedic surgeon: sixteen years of training, two clinics, and over $200K lost in his first because nobody taught him to run a business. His exact words about his tax bill: 'nauseating.' I come from three generations of physicians. This problem is family history, not a market report.");
}

// ============================== 2. THE PROBLEM ==============================
{
  const s = newSlide();
  kicker(s, "02  /  THE PROBLEM");
  title(s, "Independent doctors are losing money in the dark.");

  const cards = [
    { k: "THE SETUP VACUUM", kc: RED, big: "$200K–$400K", sub: "lost to incorporation and tax-structure mistakes, typically discovered 18 months too late", foot: "2,000+ applicants screened to hire one medical secretary" },
    { k: "FLYING BLIND", kc: AMBER, big: "$200K / yr", sub: "admin overhead in a single independent practice; owners reconcile finances with an accountant on weekends", foot: "No real-time P&L exists anywhere in the stack" },
    { k: "THE SQUEEZE", kc: RED, big: "$115 vs $290", sub: "what one insurer pays an independent vs. a hospital system for the very same visit", foot: "Independent share: 60% → 42% since 2012" },
  ];
  cards.forEach((c, i) => {
    const x = 0.5 + i * 3.17;
    card(s, x, 1.4, 2.97, 3.35);
    s.addText(c.k, { x: x + 0.22, y: 1.62, w: 2.55, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: c.kc, charSpacing: 2 });
    s.addText(c.big, { x: x + 0.22, y: 1.95, w: 2.55, h: 0.55, margin: 0, fontFace: HEAD, fontSize: 23, bold: true, color: WHITE });
    s.addText(c.sub, { x: x + 0.22, y: 2.55, w: 2.55, h: 1.35, margin: 0, fontFace: BODY, fontSize: 11.5, color: WHITE, valign: "top" });
    s.addText(c.foot, { x: x + 0.22, y: 3.95, w: 2.55, h: 0.65, margin: 0, fontFace: BODY, fontSize: 10.5, color: MUTED, valign: "top" });
  });

  s.addText("Every number on this slide is first-person, from practice owners we interviewed in the last 60 days.", { x: 0.5, y: 4.95, w: 9, h: 0.3, margin: 0, fontFace: BODY, fontSize: 11, italic: true, color: TEALB });
  pageNum(s, 2);

  s.addNotes("Three pains, one spine. One: the setup vacuum — entity and tax mistakes cost $200-400K and surface 18 months too late. Two: flying blind — a real practice carries $200K a year of admin overhead and still has no live P&L. Three: the squeeze — the same insurer pays an independent $115 for the visit it pays a hospital $290 for. These aren't analyst numbers; they're from our own recorded interviews.");
}

// ============================== 3. SOLUTION ==============================
{
  const s = newSlide();
  kicker(s, "03  /  THE SOLUTION");
  title(s, "A wedge earning revenue today. A platform that owns the layer.", { size: 22 });

  card(s, 0.5, 1.4, 4.15, 3.25);
  s.addText("TODAY · THE WEDGE", { x: 0.72, y: 1.6, w: 3.7, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: TEAL, charSpacing: 2 });
  s.addText("First-Year Financial Clarity", { x: 0.72, y: 1.92, w: 3.7, h: 0.4, margin: 0, fontFace: HEAD, fontSize: 16, bold: true, color: WHITE });
  s.addText([
    { text: "Lead offer: $1,000 money-back PoC — “we find $20K you're not collecting, or it's free”", options: { bullet: true, breakLine: true } },
    { text: "Upsell ladder to $20K done-for-you transition", options: { bullet: true, breakLine: true } },
    { text: "Selling now — no software build required", options: { bullet: true, breakLine: true } },
    { text: "Every engagement writes the platform spec", options: { bullet: true } },
  ], { x: 0.72, y: 2.42, w: 3.7, h: 2.1, margin: 0, fontFace: BODY, fontSize: 12, color: WHITE, paraSpaceAfter: 8, valign: "top" });

  s.addText("→", { x: 4.62, y: 2.7, w: 0.76, h: 0.6, margin: 0, align: "center", fontFace: HEAD, fontSize: 30, bold: true, color: TEAL });

  card(s, 5.35, 1.4, 4.15, 3.25);
  s.addText("NEXT · THE PLATFORM", { x: 5.57, y: 1.6, w: 3.7, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: INDIGO, charSpacing: 2 });
  s.addText("AI-Native Financial OS", { x: 5.57, y: 1.92, w: 3.7, h: 0.4, margin: 0, fontFace: HEAD, fontSize: 17, bold: true, color: WHITE });
  s.addText([
    { text: "Real-time P&L and ROI on every staffing and growth decision", options: { bullet: true, breakLine: true } },
    { text: "Revenue-leak, denial and credentialing intelligence", options: { bullet: true, breakLine: true } },
    { text: "Sits above the EHR — zero migration", options: { bullet: true, breakLine: true } },
    { text: "$500–799 / month per clinic", options: { bullet: true } },
  ], { x: 5.57, y: 2.42, w: 3.7, h: 2.1, margin: 0, fontFace: BODY, fontSize: 12, color: WHITE, paraSpaceAfter: 8, valign: "top" });

  s.addText("Every EHR is a rear-view mirror. PhysicianLabs is the windshield.", { x: 0.5, y: 4.88, w: 9, h: 0.35, margin: 0, align: "center", fontFace: BODY, fontSize: 14, italic: true, color: TEALB });
  pageNum(s, 3);

  s.addNotes("Two moves. The wedge is live today. The validated tip-of-spear is a $1,000 money-back Proof-of-Concept: we find $20K you're not collecting, or it's free — then it ladders up to the done-for-you transition and the monthly subscription. It earns revenue without a software build, and every engagement writes the platform spec. The platform is what this round builds: an AI-native financial operating layer above the EHR — real-time P&L, leak detection, credentialing intelligence — with zero migration. EHRs record what happened. We show where the practice is going.");
}

// ============================== 4. LEADERSHIP ==============================
{
  const s = newSlide();
  kicker(s, "04  /  LEADERSHIP");
  title(s, "Built by someone who has lived both sides of this problem.");

  card(s, 0.5, 1.4, 3.0, 3.4);
  s.addText("Ash Malleck", { x: 0.72, y: 1.75, w: 2.6, h: 0.4, margin: 0, fontFace: HEAD, fontSize: 19, bold: true, color: WHITE });
  s.addText("FOUNDER & CEO", { x: 0.72, y: 2.18, w: 2.6, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: TEAL, charSpacing: 2 });
  s.addText("Three generations of physicians. This problem is family history, not a market report.", { x: 0.72, y: 2.7, w: 2.6, h: 1.4, margin: 0, fontFace: BODY, fontSize: 12.5, italic: true, color: WHITE, valign: "top" });

  const rows = [
    { h: "5 YRS · McKINSEY & COMPANY", b: "Structured advisory on complex, high-stakes client problems — the same craft a clinic transition demands" },
    { h: "11 YRS · AMAZON, AWS & EA", b: "Zero-to-one product builder; shipped platforms from concept to scale" },
    { h: "ADVISORY BENCH + FIRST HIRES", b: "RCM operators, specialist accountants and attorneys, physicians across 5 specialties. This round hires the founding engineer + clinical ops lead." },
  ];
  rows.forEach((r, i) => {
    const y = 1.4 + i * 1.17;
    card(s, 3.75, y, 5.75, 1.02, CARD2);
    s.addText(r.h, { x: 3.97, y: y + 0.1, w: 5.3, h: 0.28, margin: 0, fontFace: HEAD, fontSize: 11.5, bold: true, color: TEALB, charSpacing: 1 });
    s.addText(r.b, { x: 3.97, y: y + 0.38, w: 5.3, h: 0.58, margin: 0, fontFace: BODY, fontSize: 10.5, color: WHITE, valign: "top" });
  });
  pageNum(s, 4);

  s.addNotes("Why me: five years at McKinsey solving exactly this class of structured, high-stakes problem; eleven years building zero-to-one products at Amazon, AWS and EA; and three generations of physicians in my family — I sell into a network I was born into. Around me: an advisory bench of RCM operators, specialist accountants and attorneys, and physicians across five specialties. The round funds the founding engineer and clinical ops lead.");
}

// ============================== 5. MARKET ==============================
{
  const s = newSlide();
  kicker(s, "05  /  MARKET");
  title(s, "A $65B market with an unserved financial layer.");

  const layers = [
    { big: "$65.4B → $196B", sub: "US revenue cycle management, 2025 → 2035 (11.6% CAGR)" },
    { big: "~$1.2B", sub: "serviceable market: 100,000 independent practices × ~$12K / yr" },
    { big: "$23–46M / yr", sub: "wedge entry: 5–10K practices in their first year, every year" },
  ];
  layers.forEach((l, i) => {
    const y = 1.4 + i * 1.17;
    card(s, 0.5, y, 5.1, 1.02, CARD2);
    s.addText(l.big, { x: 0.72, y: y + 0.12, w: 4.7, h: 0.4, margin: 0, fontFace: HEAD, fontSize: 19, bold: true, color: i === 0 ? TEAL : WHITE });
    s.addText(l.sub, { x: 0.72, y: y + 0.55, w: 4.7, h: 0.4, margin: 0, fontFace: BODY, fontSize: 11, color: MUTED });
  });

  card(s, 5.85, 1.4, 3.65, 3.36);
  s.addText("THE HONEST TREND", { x: 6.07, y: 1.6, w: 3.2, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: AMBER, charSpacing: 2 });
  s.addText("Independent share fell 60% → 42% since 2012. We name it, because it is the point:", { x: 6.07, y: 1.95, w: 3.2, h: 1.1, margin: 0, fontFace: BODY, fontSize: 12, color: WHITE, valign: "top" });
  s.addText("today's independents choose it with conviction. Direct Primary Care is a $61B market growing 10–15% a year, with 9 new physician-ownership platforms launched in 2025.", { x: 6.07, y: 3.05, w: 3.2, h: 1.6, margin: 0, fontFace: BODY, fontSize: 12, color: TEALB, valign: "top" });
  pageNum(s, 5);

  s.addNotes("Sizing is layered and conservative. The macro: US RCM is $65 billion headed to $196 billion by 2035. Our serviceable layer: 100,000 independent practices at about $12K a year is roughly $1.2 billion. The wedge entry: 5 to 10 thousand practices in their first year, every year — the moment the financial pain is acute. And the honest trend, said before you ask: independent share fell from 60 to 42 percent — which is exactly why today's independents are the conviction cohort, with DPC growing double digits.");
}

// ============================== 6. CUSTOMERS & UNIT ECONOMICS ==============================
{
  const s = newSlide();
  kicker(s, "06  /  CUSTOMERS, UNIT ECONOMICS & CAC");
  title(s, "A wedge that pays for its own customer acquisition.");

  card(s, 0.5, 1.4, 3.5, 3.5);
  s.addText("THE CUSTOMER", { x: 0.72, y: 1.6, w: 3.05, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: TEAL, charSpacing: 2 });
  s.addText("Hospital-employed physician, 5–15 years in, deliberately exiting to independent or concierge practice.", { x: 0.72, y: 1.95, w: 3.05, h: 1.15, margin: 0, fontFace: BODY, fontSize: 12, color: WHITE, valign: "top" });
  s.addText("Disposable income, high stakes, zero tolerance for guesswork. Hottest buyers: launched within the last 6–12 months.", { x: 0.72, y: 3.1, w: 3.05, h: 1.05, margin: 0, fontFace: BODY, fontSize: 11, color: MUTED, valign: "top" });
  s.addText("WTP on record: $1K prospective, $10K retrospective — same surgeon.", { x: 0.72, y: 4.15, w: 3.05, h: 0.65, margin: 0, fontFace: BODY, fontSize: 11, bold: true, italic: true, color: TEALB, valign: "top" });

  const stats = [
    { big: "$12K", sub: "year-1 revenue per clinic (program + subscription)" },
    { big: "$400", sub: "CAC — organic, warm-network motion" },
    { big: "30:1", sub: "LTV:CAC today; 6–8:1 at paid scale" },
    { big: "<1 mo", sub: "payback — program fee collected up front" },
  ];
  stats.forEach((st, i) => {
    const x = 4.25 + (i % 2) * 2.7;
    const y = 1.4 + Math.floor(i / 2) * 1.8;
    card(s, x, y, 2.5, 1.65, CARD2);
    s.addText(st.big, { x: x + 0.2, y: y + 0.16, w: 2.1, h: 0.55, margin: 0, fontFace: HEAD, fontSize: 26, bold: true, color: TEAL });
    s.addText(st.sub, { x: x + 0.2, y: y + 0.75, w: 2.1, h: 0.8, margin: 0, fontFace: BODY, fontSize: 10.5, color: WHITE, valign: "top" });
  });
  pageNum(s, 6);

  s.addNotes("The customer is precise: a hospital-employed physician five to fifteen years in, deliberately exiting to independent or concierge practice. One surgeon quantified willingness to pay on record: a thousand dollars prospectively, ten thousand in hindsight. The engine: about $12K of first-year revenue per clinic against a $400 organic CAC — 30 to 1 today, a still-excellent 6 to 8 to 1 when paid channels enter — and the program fee is cash up front, so payback is under a month.");
}

// ============================== 7. GTM ==============================
{
  const s = newSlide();
  kicker(s, "07  /  GO-TO-MARKET");
  title(s, "Precision before scale — a channel we already operate.");

  const steps = [
    { n: "1", k: "WARM NETWORK · NOW", b: "Named pipeline from three generations of physician relationships: surgical specialists, IPA pods splitting off, direct referrals from interview subjects" },
    { n: "2", k: "COMMUNITIES & IPAs · NEXT", b: "AAPP, DPC Frontier (2,600+ practices), r/whitecoatinvestor (200K+ members), physician associations: Pro Alliance, WWMG" },
    { n: "3", k: "REFERRAL FLYWHEEL · SCALE", b: "A doctor who avoids a $280K mistake tells colleagues. Shared benchmark reports recruit the next cohort." },
  ];
  steps.forEach((st, i) => {
    const x = 0.5 + i * 3.17;
    card(s, x, 1.4, 2.97, 3.1);
    s.addShape(pres.shapes.OVAL, { x: x + 0.22, y: 1.62, w: 0.5, h: 0.5, fill: { color: TEAL }, line: { type: "none" } });
    s.addText(st.n, { x: x + 0.22, y: 1.62, w: 0.5, h: 0.5, margin: 0, align: "center", valign: "middle", fontFace: HEAD, fontSize: 18, bold: true, color: NAVY });
    s.addText(st.k, { x: x + 0.22, y: 2.3, w: 2.55, h: 0.5, margin: 0, fontFace: HEAD, fontSize: 11, bold: true, color: TEALB, charSpacing: 1 });
    s.addText(st.b, { x: x + 0.22, y: 2.85, w: 2.55, h: 1.55, margin: 0, fontFace: BODY, fontSize: 11.5, color: WHITE, valign: "top" });
  });

  s.addText("Zero paid acquisition in year 1. Paid channels enter only after the flywheel proves referral economics.", { x: 0.5, y: 4.75, w: 9, h: 0.35, margin: 0, align: "center", fontFace: BODY, fontSize: 12, italic: true, color: MUTED });
  pageNum(s, 7);

  s.addNotes("Distribution is not 'independent clinics' — it's a sequence. Now: a named warm pipeline from my physician network, including surgical specialists mid-transition and IPA pods splitting off. Next: the communities where this customer already gathers — AAPP, DPC Frontier, whitecoatinvestor, and physician associations like Pro Alliance and WWMG. At scale: the referral flywheel, because a doctor who avoids a $280K mistake doesn't need to be incentivized to talk.");
}

// ============================== 8. BUSINESS MODEL ==============================
{
  const s = newSlide();
  kicker(s, "08  /  BUSINESS MODEL");
  title(s, "Cash up front. Compounding subscription behind it.");

  const tiers = [
    ["Money-back PoC", "$1,000 one-time", "Lead offer: find $20K or it's free", true],
    ["Transition Kit", "$750–$1,000 one-time", "Self-serve digital launch kit", false],
    ["Transition Program", "$3,500–$5,000 + $500–799/mo", "Founder-guided, 12 weeks", false],
    ["Full Transition", "$8,000–$20,000 + $500–799/mo", "Done-for-you specialists", false],
    ["Platform OS", "$500–799/mo recurring", "Every clinic graduates here", false],
  ];
  tiers.forEach((t, i) => {
    const y = 1.35 + i * 0.7;
    card(s, 0.5, y, 5.9, 0.6, t[3] ? CARD : CARD2);
    if (t[3]) s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.07, h: 0.6, fill: { color: TEAL }, line: { type: "none" } });
    s.addText(t[0], { x: 0.72, y: y + 0.05, w: 1.95, h: 0.5, margin: 0, fontFace: HEAD, fontSize: 12, bold: true, color: t[3] ? TEAL : WHITE, valign: "middle" });
    s.addText(t[1], { x: 2.7, y: y + 0.05, w: 2.1, h: 0.5, margin: 0, fontFace: BODY, fontSize: 10.5, bold: true, color: TEALB, valign: "middle" });
    s.addText(t[2], { x: 4.85, y: y + 0.05, w: 1.45, h: 0.5, margin: 0, fontFace: BODY, fontSize: 9, color: MUTED, valign: "middle" });
  });

  card(s, 6.65, 1.4, 2.85, 3.4);
  s.addText("WHY IT WORKS", { x: 6.87, y: 1.6, w: 2.4, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: TEAL, charSpacing: 2 });
  s.addText([
    { text: ">80% gross margin today; >70% blended at platform scale", options: { bullet: true, breakLine: true } },
    { text: "Program fee covers CAC before month one ends", options: { bullet: true, breakLine: true } },
    { text: "Wedge revenue funds the build — the round buys speed, not survival", options: { bullet: true } },
  ], { x: 6.87, y: 1.98, w: 2.45, h: 2.7, margin: 0, fontFace: BODY, fontSize: 11.5, color: WHITE, paraSpaceAfter: 10, valign: "top" });
  pageNum(s, 8);

  s.addNotes("Hybrid model. One-time transition fees from $750 self-serve to $20K done-for-you, each converting into a $500-to-799-a-month platform subscription. Margins are over 80% today and stay above 70% blended at scale. Because cash is collected up front, acquisition pays for itself inside month one — wedge revenue funds the build, so this round buys speed, not survival.");
}

// ============================== 9. COMPETITION ==============================
{
  const s = newSlide();
  kicker(s, "09  /  COMPETITIVE OVERVIEW");
  title(s, "Everyone else records the past. We run the next decision.", { size: 21 });

  // Quadrant: Y = windshield (decision intelligence) vs rear-view (record-keeping); X = migration required vs none
  const qx = 0.6, qy = 1.5, qw = 5.3, qh = 3.2;
  s.addShape(pres.shapes.LINE, { x: qx, y: qy + qh / 2, w: qw, h: 0, line: { color: MUTED, width: 1 } });
  s.addShape(pres.shapes.LINE, { x: qx + qw / 2, y: qy, w: 0, h: qh, line: { color: MUTED, width: 1 } });
  s.addText("DECISION INTELLIGENCE · WINDSHIELD", { x: qx + qw / 2 - 1.6, y: qy - 0.27, w: 3.2, h: 0.22, margin: 0, align: "center", fontFace: HEAD, fontSize: 7.5, color: TEALB, charSpacing: 1 });
  s.addText("RECORD-KEEPING · REAR-VIEW", { x: qx + qw / 2 - 1.6, y: qy + qh + 0.05, w: 3.2, h: 0.22, margin: 0, align: "center", fontFace: HEAD, fontSize: 7.5, color: MUTED, charSpacing: 1 });
  s.addText("MIGRATION\nREQUIRED", { x: qx - 0.18, y: qy + qh / 2 - 0.32, w: 1.0, h: 0.5, margin: 0, fontFace: HEAD, fontSize: 7.5, color: MUTED, charSpacing: 1 });
  s.addText("NO\nMIGRATION", { x: qx + qw - 0.85, y: qy + qh / 2 - 0.32, w: 1.0, h: 0.5, margin: 0, align: "right", fontFace: HEAD, fontSize: 7.5, color: MUTED, charSpacing: 1 });

  // Top-left: windshield + migration/heavy
  s.addText("Enterprise RCM / BI (R1-tier)\n$30–60K consultants — heavy, manual", { x: qx + 0.15, y: qy + 0.32, w: 2.25, h: 0.85, margin: 0, fontFace: BODY, fontSize: 9.5, color: MUTED, valign: "top" });
  // Bottom-left: rear-view + migration
  s.addText("Tebra ($250M) · Jane ($1.8B)\nathenahealth · WebPT", { x: qx + 0.15, y: qy + qh / 2 + 0.28, w: 2.25, h: 0.8, margin: 0, fontFace: BODY, fontSize: 9.5, color: MUTED, valign: "top" });
  // Bottom-right: rear-view + no migration
  s.addText("Outsourced billing\nSpreadsheets + inertia", { x: qx + qw / 2 + 0.25, y: qy + qh / 2 + 0.28, w: 2.25, h: 0.8, margin: 0, fontFace: BODY, fontSize: 9.5, color: MUTED, valign: "top" });
  // Top-right: windshield + no migration — PhysicianLabs, alone
  s.addShape(pres.shapes.RECTANGLE, { x: qx + qw / 2 + 0.35, y: qy + 0.42, w: 2.1, h: 0.75, fill: { color: TEAL }, line: { type: "none" } });
  s.addText("PHYSICIANLABS", { x: qx + qw / 2 + 0.35, y: qy + 0.42, w: 2.1, h: 0.75, margin: 0, align: "center", valign: "middle", fontFace: HEAD, fontSize: 13, bold: true, color: NAVY, charSpacing: 1 });

  card(s, 6.3, 1.5, 3.2, 3.2);
  s.addText("WHY THEY CAN'T FOLLOW", { x: 6.52, y: 1.68, w: 2.75, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: TEAL, charSpacing: 1 });
  s.addText([
    { text: "Incumbents are systems of record — they log what happened; they don't guide the next decision", options: { bullet: true, breakLine: true } },
    { text: "Their model depends on you migrating onto them; we sit on top of the stack you already run", options: { bullet: true, breakLine: true } },
    { text: "Real-time financial intelligence has only existed for hospital systems — never the first-year independent", options: { bullet: true } },
  ], { x: 6.52, y: 2.04, w: 2.75, h: 2.55, margin: 0, fontFace: BODY, fontSize: 10.5, color: WHITE, paraSpaceAfter: 8, valign: "top" });
  pageNum(s, 9);

  s.addNotes("Map the field on two axes that actually matter: do you guide the next decision, or just record the last one — and do you require a migration to deliver it. Tebra, Jane, athenahealth, WebPT are systems of record you migrate onto. Outsourced billing and spreadsheets sit alongside but only record. Enterprise RCM and the $30-60K consultants give real intelligence, but they're heavy, manual, and built for big systems. The windshield-plus-no-migration quadrant is empty — that's us: a forward-looking financial brain that runs on top of the stack a first-year independent already has. The moat is the layer and the data, not a calendar window. If asked: yes, a practicing dermatologist we interviewed is exploring a similar build — the ICP validating the market from the inside, single-specialty and part-time.");
}

// ============================== 10. TECHNOLOGY STATUS ==============================
{
  const s = newSlide();
  kicker(s, "10  /  TECHNOLOGY STATUS");
  title(s, "Honest status: foundation built. Platform v1 is what this round funds.", { size: 21 });

  const items = [
    { m: "✓", c: TEAL, t: "Platform foundation live", b: "Next.js 16 application + AI (MCP) service layer, branch-scoped PostgreSQL, CI — in the repo today" },
    { m: "✓", c: TEAL, t: "Two working prototypes from real interviews", b: "A private-equity exit decision framework and a multi-practice P&L dashboard, each built for a named physician" },
    { m: "✓", c: TEAL, t: "HIPAA-clean by design", b: "Business and financial data only — zero PHI. Practices onboard without a compliance review" },
    { m: "→", c: INDIGO, t: "Pre-seed builds", b: "AI financial engine v1 + first 2 EHR integrations (CMS FHIR mandate collapses the cost) + 20-clinic deployment" },
  ];
  items.forEach((it, i) => {
    const y = 1.45 + i * 0.92;
    card(s, 0.5, y, 9.0, 0.8, i === 3 ? CARD : CARD2);
    s.addText(it.m, { x: 0.72, y: y + 0.08, w: 0.45, h: 0.6, margin: 0, fontFace: HEAD, fontSize: 20, bold: true, color: it.c, valign: "middle" });
    s.addText(it.t, { x: 1.25, y: y + 0.1, w: 2.95, h: 0.6, margin: 0, fontFace: HEAD, fontSize: 12.5, bold: true, color: WHITE, valign: "middle" });
    s.addText(it.b, { x: 4.3, y: y + 0.1, w: 5.0, h: 0.6, margin: 0, fontFace: BODY, fontSize: 10.5, color: MUTED, valign: "middle" });
  });
  pageNum(s, 10);

  s.addNotes("Stated plainly: we are pre-MVP, and here is exactly what exists. The engineering foundation is live in the repository — a Next.js application with an AI service layer and isolated databases. Two working prototypes were built from real interview data for named physicians. The architecture never touches patient data, so HIPAA risk is designed out, not managed. The round funds the AI financial engine, the first two EHR integrations — cheaper than ever under the CMS interoperability mandate — and the 20-clinic deployment.");
}

// ============================== 11. FINANCIALS ==============================
{
  const s = newSlide();
  kicker(s, "11  /  FORECASTED FINANCIALS");
  title(s, "Bottoms-up to $35M ARR in five years.");

  s.addChart(pres.charts.BAR, [{
    name: "ARR ($M)",
    labels: ["FY27", "FY28", "FY29", "FY30", "FY31"],
    values: [0.2, 1.0, 3.8, 11.5, 35],
  }], {
    x: 0.5, y: 1.35, w: 5.9, h: 3.4, barDir: "col",
    chartColors: [TEAL],
    chartArea: { fill: { color: NAVY } },
    plotArea: { fill: { color: NAVY } },
    catAxisLabelColor: "C7D2E5", catAxisLabelFontSize: 11, catAxisLineColor: "33415E",
    valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" },
    showValue: true, dataLabelPosition: "outEnd", dataLabelColor: "FFFFFF", dataLabelFontSize: 11, dataLabelFontBold: true,
    showLegend: false, showTitle: false,
  });

  card(s, 6.65, 1.35, 2.85, 3.4);
  s.addText("THE ENGINE", { x: 6.87, y: 1.55, w: 2.4, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: TEAL, charSpacing: 2 });
  s.addText([
    { text: "20 → 100 → 400 → 1,200 → 3,000 paying clinics (~3% of SAM)", options: { bullet: true, breakLine: true } },
    { text: "$9.6–12K blended revenue per clinic per year", options: { bullet: true, breakLine: true } },
    { text: ">70% blended gross margin", options: { bullet: true, breakLine: true } },
    { text: "FY28 onward assumes the $10M seed closes on the 20-clinic proof", options: { bullet: true } },
  ], { x: 6.87, y: 1.93, w: 2.45, h: 2.7, margin: 0, fontFace: BODY, fontSize: 11, color: WHITE, paraSpaceAfter: 8, valign: "top" });
  pageNum(s, 11);

  s.addNotes("No top-down hand-waving — this is clinics times revenue per clinic. Twenty clinics and $200K in year one, a million in year two, $3.8 million, $11.5 million, $35 million by year five — which is still only about 3% of the serviceable market. Gross margin holds above 70% blended. Year two onward assumes the $10 million seed closes on the 20-clinic proof point.");
}

// ============================== 12. COMPS & EXIT ==============================
{
  const s = newSlide();
  kicker(s, "12  /  COMPS, EXIT & EXPECTED ROI");
  title(s, "RCM is one of healthcare's most proven exit markets.");

  const comps = [
    { big: "$8.9B", sub: "R1 RCM take-private, 2024" },
    { big: "$17B", sub: "athenahealth take-private, 2022" },
    { big: "$1.8B", sub: "Jane App valuation" },
    { big: "$250M", sub: "Tebra raise, Jan 2026" },
  ];
  comps.forEach((c, i) => {
    const x = 0.5 + i * 2.31;
    card(s, x, 1.4, 2.16, 1.3, CARD2);
    s.addText(c.big, { x: x + 0.18, y: 1.52, w: 1.85, h: 0.5, margin: 0, fontFace: HEAD, fontSize: 22, bold: true, color: TEAL });
    s.addText(c.sub, { x: x + 0.18, y: 2.05, w: 1.85, h: 0.55, margin: 0, fontFace: BODY, fontSize: 10, color: MUTED, valign: "top" });
  });

  card(s, 0.5, 2.95, 4.4, 1.95);
  s.addText("DEAL MULTIPLES", { x: 0.72, y: 3.13, w: 4.0, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: TEAL, charSpacing: 2 });
  s.addText("Recent RCM platform deals at ~4.3× revenue and ~17× EBITDA. Consolidators — R1, Waystar, EHR vendors, PE — are actively acquiring.", { x: 0.72, y: 3.48, w: 4.0, h: 1.3, margin: 0, fontFace: BODY, fontSize: 11.5, color: WHITE, valign: "top" });

  card(s, 5.1, 2.95, 4.4, 1.95);
  s.addText("RETURN MATH", { x: 5.32, y: 3.13, w: 4.0, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: TEAL, charSpacing: 2 });
  s.addText("Base: ~5× on $35M ARR is a $175M+ outcome → 18–30× on this round.  Upside: category-leader comp (Jane App) → 50×+.", { x: 5.32, y: 3.48, w: 4.0, h: 1.3, margin: 0, fontFace: BODY, fontSize: 11.5, color: WHITE, valign: "top" });
  pageNum(s, 12);

  s.addNotes("Exits in this category are proven, recent and large: R1 RCM went private at $8.9 billion in 2024, athenahealth at $17 billion, Jane App holds a $1.8 billion private mark, and Tebra just raised $250 million. Recent RCM deals price around 4.3 times revenue. The base case — five times on $35 million of ARR — is a $175-million-plus outcome, 18 to 30x this round. The upside case is the AI-native successor to R1, and that is not a $175M company.");
}

// ============================== 13. THE ASK ==============================
{
  const s = newSlide();
  kicker(s, "13  /  THE ASK");
  title(s, "$2.5M pre-seed — and three doors only you can open.");

  s.addText("$2.5M", { x: 0.5, y: 1.3, w: 2.8, h: 0.75, margin: 0, fontFace: HEAD, fontSize: 44, bold: true, color: TEAL });
  s.addText("pre-seed · 18–20 months", { x: 3.3, y: 1.52, w: 2.6, h: 0.4, margin: 0, fontFace: BODY, fontSize: 13, color: MUTED, valign: "middle" });

  const funds = [
    { p: 45, label: "Product & engineering — AI engine v1, 2 EHR integrations" },
    { p: 25, label: "Go-to-market — founder-led sales + first GTM hire" },
    { p: 15, label: "Clinical & compliance network" },
    { p: 15, label: "Operations & runway buffer" },
  ];
  funds.forEach((f, i) => {
    const y = 2.25 + i * 0.62;
    const w = (f.p / 45) * 2.2;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: w, h: 0.32, fill: { color: i === 0 ? TEAL : CARD }, line: { color: TEAL, width: i === 0 ? 0 : 0.75 } });
    s.addText(f.p + "%", { x: 0.5 + w + 0.1, y: y - 0.02, w: 0.6, h: 0.36, margin: 0, fontFace: HEAD, fontSize: 12, bold: true, color: WHITE, valign: "middle" });
    s.addText(f.label, { x: 3.25, y: y - 0.02, w: 2.65, h: 0.36, margin: 0, fontFace: BODY, fontSize: 9.5, color: MUTED, valign: "middle" });
  });

  s.addText("30 days: first paid clinic  →  20 paying clinics · $200K revenue · platform v1  →  $10M seed", { x: 0.5, y: 4.85, w: 5.6, h: 0.55, margin: 0, fontFace: BODY, fontSize: 11.5, bold: true, color: TEALB, valign: "top" });

  card(s, 6.15, 1.3, 3.35, 3.95);
  s.addText("OF SOFTBANK & NEC-X, TODAY", { x: 6.37, y: 1.5, w: 2.95, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: TEAL, charSpacing: 1 });
  s.addText([
    { text: "1.  Define the bar — what must we prove in 2–3 months for you to invest?", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "2.  Two or three design-partner intros from your healthcare network", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "3.  One door into an RCM or payer data partner", options: {} },
  ], { x: 6.37, y: 1.9, w: 2.95, h: 3.2, margin: 0, fontFace: BODY, fontSize: 12.5, color: WHITE, valign: "top" });
  pageNum(s, 13);

  s.addNotes("The ask is $2.5 million of pre-seed for 18 to 20 months: 45% product, 25% go-to-market, 15% the clinical and compliance network, 15% operations. The milestone path: first paid clinic inside 30 days, then 20 paying clinics, $200K of revenue and platform v1 — the proof that prices a $10 million seed. And three asks of this room specifically: tell me exactly what you'd need to see in two to three months to invest; two or three design-partner introductions; and one door into an RCM or payer data partner.");
}

// ============================== 14. WHY NOW + TRACTION ==============================
{
  const s = newSlide();
  kicker(s, "14  /  WHY NOW + TRACTION");
  title(s, "The window is open. Here is what we will prove next.");

  card(s, 0.5, 1.35, 4.4, 2.5);
  s.addText("WHY NOW", { x: 0.72, y: 1.52, w: 4.0, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: TEAL, charSpacing: 2 });
  s.addText([
    { text: "CMS interoperability mandate: EHR data by right — integration cost collapsing", options: { bullet: true, breakLine: true } },
    { text: "AI inflection: a financial brain for 1,000 clinics is now a seed-stage build", options: { bullet: true, breakLine: true } },
    { text: "The conviction cohort grows (DPC +10–15%/yr) while incumbents chase established multi-year practices — the first year is ours", options: { bullet: true } },
  ], { x: 0.72, y: 1.88, w: 4.0, h: 1.85, margin: 0, fontFace: BODY, fontSize: 10.5, color: WHITE, paraSpaceAfter: 6, valign: "top" });

  card(s, 5.1, 1.35, 4.4, 2.5);
  s.addText("TRACTION — STATED HONESTLY", { x: 5.32, y: 1.52, w: 4.0, h: 0.3, margin: 0, fontFace: HEAD, fontSize: 10.5, bold: true, color: TEAL, charSpacing: 1 });
  s.addText([
    { text: "7 discovery sessions · 5 physicians · 2 countries · 5 specialties", options: { bullet: true, breakLine: true } },
    { text: "First paid PoC commitment confirmed; first arm's-length close targeted inside 30 days", options: { bullet: true, breakLine: true } },
    { text: "WTP on record ($1K / $10K) · working prototypes · live warm pipeline", options: { bullet: true } },
  ], { x: 5.32, y: 1.88, w: 4.0, h: 1.85, margin: 0, fontFace: BODY, fontSize: 10.5, color: WHITE, paraSpaceAfter: 6, valign: "top" });

  s.addText("“If I spend a day in the ICU vs. the clinic, I don't know where I am financially.”", { x: 0.7, y: 4.1, w: 8.6, h: 0.5, margin: 0, align: "center", fontFace: BODY, fontSize: 16, italic: true, color: WHITE });
  s.addText("ICU surgeon and practice owner — interview on record, May 2026", { x: 0.7, y: 4.62, w: 8.6, h: 0.3, margin: 0, align: "center", fontFace: BODY, fontSize: 10.5, color: MUTED });
  s.addText("Put doctors back in the driver's seat of their own financial future.", { x: 0.7, y: 5.05, w: 8.6, h: 0.35, margin: 0, align: "center", fontFace: HEAD, fontSize: 12, bold: true, color: TEAL });
  pageNum(s, 14);

  s.addNotes("Why now: the CMS mandate makes EHR data accessible by right, the AI inflection makes the platform a seed-stage build, and the conviction cohort is growing while incumbents look the other way. Traction, exactly as it is: seven sessions with five physicians across two countries and five specialties, willingness to pay quantified on record, working prototypes, and a named pipeline. On the first paid PoC — disclose proactively if asked: it is confirmed, but the subject is my brother (a post-launch ortho surgeon) and the payment is collected on delivery, which is in progress. I am deliberately not claiming arm's-length revenue yet; the first non-family, card-charged close is targeted inside 30 days (Tucci, Xin, or Cowan). Close on the surgeon's own words: 'If I spend a day in the ICU versus the clinic, I don't know where I am financially.' That is the company. Put doctors back in the driver's seat of their own financial future. [Stop. Take questions.]");
}

// ============================== APPENDIX · COMPETITIVE DETAIL ==============================
// Standalone competitor comparison matrix. Drop into tomorrow's deck as the competition
// slide, keep as SoftBank Q&A backup, or swap in for the slide-9 2x2.
{
  const s = newSlide();
  kicker(s, "APPENDIX  /  COMPETITIVE LANDSCAPE");
  title(s, "We own the rows that matter. Incumbents own the past.", { size: 21 });

  const cols = ["Tebra", "athena", "Jane", "Chiro-\nTouch", "Meroka", "Status\nquo", "Physician\nLabs"];
  const rows = [
    ["AI-native forward-looking financial intelligence", "no", "part", "no", "no", "part", "no", "yes"],
    ["No migration (layers on existing tools)",          "no", "no",   "no", "no", "part", "no", "yes"],
    ["Built for the just-launched / first-year clinic",  "no", "no",   "no", "no", "no",   "part", "yes"],
    ["Quantified, fast ROI (in dollars)",                "no", "part", "no", "no", "no",   "no", "yes"],
    ["Installed base / specialty depth",                 "yes","yes",  "yes","yes","no",   "na", "part"],
  ];

  const tx = 0.45, ty = 1.45;
  const labelW = 3.05, valW = 0.78, plW = 1.05;
  const headH = 0.5, rowH = 0.58;
  const colX = (j) => tx + labelW + j * valW; // j=0..5 competitors, j=6 = PhysicianLabs (sits flush after the 6 competitor cols)

  // Highlight band behind the PhysicianLabs column
  s.addShape(pres.shapes.RECTANGLE, { x: colX(6), y: ty, w: plW, h: headH + rows.length * rowH, fill: { color: "12303A" }, line: { type: "none" } });

  // Header row
  cols.forEach((c, j) => {
    const isPL = j === 6;
    s.addText(c, { x: colX(j), y: ty, w: isPL ? plW : valW, h: headH, margin: 0, align: "center", valign: "middle", fontFace: HEAD, fontSize: isPL ? 10 : 8.5, bold: true, color: isPL ? TEAL : MUTED });
  });

  const mark = (code) => {
    if (code === "yes") return { glyph: "✓", color: TEAL, size: 15, bold: true };
    if (code === "part") return { glyph: "~", color: AMBER, size: 14, bold: true };
    if (code === "na") return { glyph: "·", color: "4A5A72", size: 14, bold: false };
    return { glyph: "✕", color: "4A5A72", size: 11, bold: false }; // "no"
  };

  rows.forEach((r, i) => {
    const y = ty + headH + i * rowH;
    if (i % 2 === 1) s.addShape(pres.shapes.RECTANGLE, { x: tx, y: y, w: labelW + 6 * valW, h: rowH, fill: { color: "16213A" }, line: { type: "none" } });
    // Row label
    s.addText(r[0], { x: tx + 0.12, y: y, w: labelW - 0.2, h: rowH, margin: 0, valign: "middle", fontFace: BODY, fontSize: 10, color: WHITE });
    // Value cells (j=0..5 competitors, j=6 PhysicianLabs)
    for (let j = 0; j < 7; j++) {
      const isPL = j === 6;
      const m = mark(r[j + 1]);
      s.addText(m.glyph, { x: colX(j), y: y, w: isPL ? plW : valW, h: rowH, margin: 0, align: "center", valign: "middle", fontFace: HEAD, fontSize: m.size, bold: m.bold, color: isPL && r[j + 1] === "yes" ? TEALB : m.color });
    }
  });

  // Legend
  s.addText([
    { text: "✓ ", options: { color: TEAL, bold: true } }, { text: "delivers    ", options: { color: MUTED } },
    { text: "~ ", options: { color: AMBER, bold: true } }, { text: "partial    ", options: { color: MUTED } },
    { text: "✕ ", options: { color: "4A5A72" } }, { text: "no", options: { color: MUTED } },
  ], { x: tx + 0.12, y: ty + headH + rows.length * rowH + 0.12, w: 6, h: 0.3, margin: 0, fontFace: BODY, fontSize: 9 });

  s.addText("The bottom row is the one we don't win — yet. Their installed base is also their innovator's dilemma.", { x: tx + 0.12, y: 5.3, w: 9.0, h: 0.28, margin: 0, fontFace: BODY, fontSize: 10, italic: true, color: TEALB });

  s.addNotes("This is the detailed competitive view — use it as the competition slide, or hold it for Q&A behind the 2x2. The read is simple: we're the only one delivering forward-looking financial intelligence, on top of existing tools, for the just-launched clinic, with ROI in dollars. The one row we don't win is installed base and specialty depth — and I'll name that proactively, because their installed base is exactly what makes the pre-launch and first-year window unattractive for them to chase. Status quo is spreadsheets plus an outsourced biller — the real default for a first-year doctor.");
}

pres.writeFile({ fileName: "pitch-deck-2026-06-11-softbank-necx.pptx" }).then(() => console.log("DONE"));
