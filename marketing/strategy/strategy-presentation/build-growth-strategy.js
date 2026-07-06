// Generates growth-strategy-2026-07-02.pptx — the 3-slide, 1-minute growth deck.
// Mirrors growth-strategy-deck.html. Run: node docs/strategy-presentation/build-growth-strategy.js
const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10 x 5.625 in
pres.title = "PhysicianLabs — Growth Strategy";
pres.author = "PhysicianLabs";

// ─── Palette (matches the HTML deck) ───
const NAVY = "0A1628", SLATE = "112240", TEAL = "00C7B1", TEAL2 = "00A896",
      WHITE = "F0F6FC", MUTED = "8899AA", GOLD = "FFD166", CARD = "16273D",
      TEALDIM = "0C3A44";
const SANS = "Calibri", SERIF = "Georgia";

const EDGE = 0.4, W = 10, RIGHT = W - EDGE;

function header(s, label) {
  s.addText(label, { x: EDGE, y: 0.26, w: 8, h: 0.35, fontFace: SANS, fontSize: 13,
    bold: true, color: TEAL, charSpacing: 3, align: "left", margin: 0 });
  s.addShape(pres.ShapeType.rect, { x: EDGE, y: 0.66, w: W - 2 * EDGE, h: 0.012, fill: { color: TEALDIM }, line: { color: TEALDIM } });
}
function counter(s, n) {
  s.addText(`0${n} / 03`, { x: RIGHT - 1.4, y: 0.2, w: 1.4, h: 0.3, fontFace: "Courier New",
    fontSize: 10, color: MUTED, align: "right", margin: 0 });
}
function eyebrow(s, txt, y) {
  s.addText(txt, { x: EDGE, y, w: W - 2 * EDGE, h: 0.28, fontFace: SANS, fontSize: 9.5,
    bold: true, color: MUTED, charSpacing: 2, align: "left", margin: 0 });
}
function pill(s, txt, x, y, w, opts = {}) {
  s.addText(txt, {
    x, y, w, h: opts.h || 0.36, shape: pres.ShapeType.roundRect, rectRadius: 0.09,
    fill: { color: opts.fill || "0E2036" }, line: { color: opts.line || "134B54", width: 1 },
    fontFace: SANS, fontSize: opts.fs || 9, bold: opts.bold || false,
    color: opts.color || WHITE, align: "center", valign: "middle", margin: 2,
  });
}

/* ══════════ SLIDE 1 — ONE-SENTENCE PITCH ══════════ */
{
  const s = pres.addSlide();
  s.background = { color: NAVY };
  s.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 0.07, h: 5.625, fill: { color: TEAL }, line: { color: TEAL } });
  s.addText("PHYSICIANLABS", { x: 0, y: 0.9, w: W, h: 0.35, fontFace: SANS, fontSize: 13,
    bold: true, color: TEAL, charSpacing: 3, align: "center", margin: 0 });
  s.addText("SLIDE 1  ·  ONE-SENTENCE PITCH", { x: 0, y: 1.28, w: W, h: 0.3, fontFace: "Courier New",
    fontSize: 11, color: TEAL, charSpacing: 2, align: "center", margin: 0 });

  s.addText([
    { text: "PhysicianLabs gives ", options: { color: WHITE } },
    { text: "independent physicians", options: { color: TEAL } },
    { text: " real-time ", options: { color: WHITE } },
    { text: "ROI visibility on every growth decision", options: { color: TEAL } },
    { text: " — so they ", options: { color: WHITE } },
    { text: "recover the revenue they’re leaking", options: { color: TEAL } },
    { text: " and thrive faster, without living in ", options: { color: WHITE } },
    { text: "disconnected spreadsheets", options: { color: TEAL } },
    { text: ".", options: { color: WHITE } },
  ], { x: 1.0, y: 1.9, w: 8, h: 2.1, fontFace: SERIF, fontSize: 27, align: "center", valign: "middle", lineSpacingMultiple: 1.28 });

  s.addText("“Put doctors back in the driver’s seat of their own financial future.”", {
    x: 1.2, y: 4.25, w: 7.6, h: 0.5, fontFace: SANS, fontSize: 14, italic: true, color: MUTED, align: "center", margin: 0 });
  counter(s, 1);
}

/* ══════════ SLIDE 2 — GROWTH GOALS ══════════ */
{
  const s = pres.addSlide();
  s.background = { color: SLATE };
  header(s, "SLIDE 2  ·  GROWTH GOALS");
  counter(s, 2);

  // (1) Traction to date
  eyebrow(s, "TRACTION TO DATE", 0.82);
  pill(s, "5 design-partner physicians", EDGE, 1.12, 2.5);
  pill(s, "140+ physician waitlist", 3.05, 1.12, 2.1);
  pill(s, "Live: 3-channel test + free Scorecard", 5.30, 1.12, 3.1);
  pill(s, "Pre-revenue — Month 1", 8.55, 1.12, 1.1, { fs: 8, color: MUTED, line: "2A3A4D" });

  // (2) 6-month goal banner
  eyebrow(s, "THE AMBITIOUS 6-MONTH GOAL — BY DEC 2026", 1.68);
  s.addShape(pres.ShapeType.roundRect, { x: EDGE, y: 1.98, w: W - 2 * EDGE, h: 1.15, rectRadius: 0.1,
    fill: { color: "0F3B3A" }, line: { color: TEAL2, width: 1 } });
  s.addText([
    { text: "6 paying practices", options: { color: TEAL, bold: true } },
    { text: "  ·  ", options: { color: WHITE } },
    { text: "$21K/mo", options: { color: TEAL, bold: true } },
    { text: " run-rate  ·  ", options: { color: WHITE } },
    { text: "cash-flow positive", options: { color: TEAL, bold: true } },
    { text: " from Month 4 — the repeatable concierge wedge that unlocks the seed.", options: { color: WHITE } },
    { text: "\nOn track to $1.13M revenue / 46 customers by Month 18.", options: { color: MUTED, fontSize: 11 } },
  ], { x: 0.6, y: 2.1, w: 6.1, h: 0.95, fontFace: SERIF, fontSize: 15, align: "left", valign: "middle", lineSpacingMultiple: 1.15 });
  // North Star box
  s.addShape(pres.ShapeType.roundRect, { x: 6.95, y: 2.16, w: 2.55, h: 0.8, rectRadius: 0.08,
    fill: { color: "2A2410" }, line: { color: "6B5A1E", width: 1 } });
  s.addText([
    { text: "NORTH STAR\n", options: { color: GOLD, bold: true, fontSize: 9, charSpacing: 2 } },
    { text: "Active practices receiving a verified revenue-recovery finding", options: { color: GOLD, fontSize: 10.5 } },
  ], { x: 7.1, y: 2.24, w: 2.28, h: 0.66, fontFace: SANS, align: "left", valign: "middle", margin: 0, lineSpacingMultiple: 1.05 });

  // (3) Monthly ramp
  eyebrow(s, "THE MONTHLY PATH — CUMULATIVE PAYING PRACTICES & MONTHLY REVENUE", 3.28);
  const ramp = [
    { m: "Jul", rev: "$0", frac: 0.04, prac: "0 practices", note: "Engine live", stub: true },
    { m: "Aug", rev: "$0", frac: 0.04, prac: "0 practices", note: "Pipeline building", stub: true },
    { m: "Sep", rev: "$9.8K", frac: 0.46, prac: "1 practice", note: "1st paying · 2 PoCs" },
    { m: "Oct", rev: "$10.4K", frac: 0.49, prac: "2 practices", note: "Cash-flow positive", win: true },
    { m: "Nov", rev: "$19.9K", frac: 0.94, prac: "4 practices", note: "Ramp" },
    { m: "Dec", rev: "$21.1K", frac: 1.0, prac: "6 practices", note: "Goal · $2.4K MRR", win: true },
  ];
  const BASE = 4.86, MAXH = 1.18, colW = (W - 2 * EDGE) / 6, barW = 0.72;
  ramp.forEach((d, i) => {
    const cx = EDGE + (i + 0.5) * colW;
    const h = Math.max(d.frac * MAXH, 0.05);
    const barY = BASE - h;
    s.addShape(pres.ShapeType.roundRect, { x: cx - barW / 2, y: barY, w: barW, h, rectRadius: 0.04,
      fill: { color: d.stub ? "1B2C42" : TEAL }, line: d.stub ? { color: "35506B", width: 1, dashType: "dash" } : { color: TEAL2, width: 0.5 } });
    s.addText(d.rev, { x: cx - 0.7, y: barY - 0.28, w: 1.4, h: 0.24, fontFace: "Courier New",
      fontSize: 11, bold: true, color: WHITE, align: "center", margin: 0 });
    s.addText(d.m, { x: cx - 0.7, y: BASE + 0.04, w: 1.4, h: 0.22, fontFace: "Courier New",
      fontSize: 11, bold: true, color: WHITE, align: "center", margin: 0 });
    s.addText(d.prac, { x: cx - 0.75, y: BASE + 0.26, w: 1.5, h: 0.2, fontFace: SANS,
      fontSize: 9, bold: true, color: TEAL, align: "center", margin: 0 });
    s.addText(d.note, { x: cx - 0.78, y: BASE + 0.45, w: 1.56, h: 0.28, fontFace: SANS,
      fontSize: 8, color: d.win ? GOLD : MUTED, align: "center", margin: 0 });
  });
}

/* ══════════ SLIDE 3 — ALTERNATIVE TACTICS ══════════ */
{
  const s = pres.addSlide();
  s.background = { color: NAVY };
  header(s, "SLIDE 3  ·  ALTERNATIVE TACTICS");
  counter(s, 3);

  eyebrow(s, "MAIN CHANNELS WE’RE USING NOW  (LIVE 3-CHANNEL TEST)", 0.82);
  pill(s, "LinkedIn — organic posts + targeted DMs", EDGE, 1.12, 3.15, { fs: 10, bold: true, fill: "0E3A38", line: TEAL2 });
  pill(s, "Physician communities — Reddit + PTOC", 3.7, 1.12, 3.15, { fs: 10, bold: true, fill: "0E3A38", line: TEAL2 });
  pill(s, "Cold email — scored prospect list", 7.05, 1.12, 2.55, { fs: 10, bold: true, fill: "0E3A38", line: TEAL2 });

  eyebrow(s, "THREE TACTICS WE’RE CONSIDERING — AND WHY THEY HELP HIT THE GOAL", 1.82);

  const cards = [
    { n: "01", t: "Free Revenue-Leak Scorecard", why: [
      { text: "A 60-second self-check that shows a practice ", options: { color: "C8D8E8" } },
      { text: "its own dollar leak", options: { color: TEAL, bold: true } },
      { text: " before we ask for anything. Value first, higher-intent signups, and it makes “find $20K or it’s free” personal. ", options: { color: "C8D8E8" } },
      { text: "Already built.", options: { color: TEAL, bold: true } },
    ] },
    { n: "02", t: "Physician referral loop", why: [
      { text: "One happy PoC refers peers. Warm referrals convert at ", options: { color: "C8D8E8" } },
      { text: "20–40%", options: { color: TEAL, bold: true } },
      { text: " and compound inside tight professional networks — our ", options: { color: "C8D8E8" } },
      { text: "cheapest, highest-trust", options: { color: TEAL, bold: true } },
      { text: " path to the next paying practice.", options: { color: "C8D8E8" } },
    ] },
    { n: "03", t: "Association & content partnerships", why: [
      { text: "APTA Private Practice Section + guest posts on KevinMD / Medical Economics. One partner or article reaches ", options: { color: "C8D8E8" } },
      { text: "thousands of exactly-right owners", options: { color: TEAL, bold: true } },
      { text: " — compounding inbound that hedges channel decay.", options: { color: "C8D8E8" } },
    ] },
  ];
  const cardY = 2.18, cardH = 2.5, gap = 0.25, cardW = (W - 2 * EDGE - 2 * gap) / 3;
  cards.forEach((c, i) => {
    const x = EDGE + i * (cardW + gap);
    s.addShape(pres.ShapeType.roundRect, { x, y: cardY, w: cardW, h: cardH, rectRadius: 0.08,
      fill: { color: CARD }, line: { color: "17414A", width: 1 } });
    s.addShape(pres.ShapeType.rect, { x: x + 0.1, y: cardY + cardH - 0.06, w: cardW - 0.2, h: 0.04, fill: { color: TEAL }, line: { color: TEAL } });
    s.addText(c.n, { x: x + cardW - 1.1, y: cardY + 0.1, w: 1, h: 0.6, fontFace: "Courier New",
      fontSize: 30, bold: true, color: "16414A", align: "right", margin: 0 });
    s.addText(c.t, { x: x + 0.22, y: cardY + 0.24, w: cardW - 0.9, h: 0.7, fontFace: SANS,
      fontSize: 14, bold: true, color: WHITE, align: "left", valign: "top", margin: 0, lineSpacingMultiple: 1.05 });
    s.addText(c.why, { x: x + 0.22, y: cardY + 1.0, w: cardW - 0.44, h: cardH - 1.15, fontFace: SANS,
      fontSize: 11, align: "left", valign: "top", margin: 0, lineSpacingMultiple: 1.12 });
  });

  s.addText([
    { text: "Every channel decays over time — so we test a ", options: { color: MUTED, italic: true } },
    { text: "portfolio", options: { color: TEAL, italic: true, bold: true } },
    { text: ", then pour budget into the winner.", options: { color: MUTED, italic: true } },
  ], { x: EDGE, y: 4.95, w: W - 2 * EDGE, h: 0.35, fontFace: SANS, fontSize: 11.5, align: "center", margin: 0 });
}

const OUT = path.join(__dirname, "growth-strategy-2026-07-02.pptx");
pres.writeFile({ fileName: OUT }).then(f => console.log("WROTE", f)).catch(e => { console.error(e); process.exit(1); });
