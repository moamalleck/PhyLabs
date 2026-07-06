const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout  = 'LAYOUT_16x9';
pres.title   = 'PhysicianLabs — Product Strategy';

// ─── PALETTE ────────────────────────────────────────────────────────────────
const NAVY      = "0A2540";
const TEAL      = "028090";
const MINT      = "02C39A";
const WHITE     = "FFFFFF";
const OFF_WHITE = "F0F8FA";
const SLATE     = "64748B";
const AMBER     = "F59E0B";
const RED_SOFT  = "EF4444";
const GREEN     = "10B981";

// ════════════════════════════════════════════════════════════════════════════
// SLIDE 1 — ONE-SENTENCE PITCH
// ════════════════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: NAVY };

  // Left accent stripe
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.18, h: 5.625,
    fill: { color: TEAL }, line: { color: TEAL }
  });

  // Slide label
  s.addText("SLIDE 01  ·  ONE-SENTENCE PITCH", {
    x: 0.45, y: 0.32, w: 9.1, h: 0.28,
    fontSize: 9, bold: true, color: MINT, charSpacing: 3,
    align: "left", margin: 0
  });

  // Main pitch
  s.addText([
    { text: "PhysicianLabs gives independent clinic operators ", options: { color: WHITE } },
    { text: "real-time ROI visibility", options: { color: MINT, bold: true } },
    { text: " on every Growth decision —", options: { color: WHITE } }
  ], {
    x: 0.45, y: 0.85, w: 9.1, h: 1.4,
    fontFace: "Georgia", fontSize: 30, bold: true,
    align: "left", margin: 0
  });

  s.addText("so they recover revenue and thrive faster,\nwithout living across disconnected spreadsheets and tools.", {
    x: 0.45, y: 2.2, w: 9.1, h: 1.1,
    fontFace: "Georgia", fontSize: 22, italic: true,
    color: "B8D8DC", align: "left", margin: 0
  });

  // Divider
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 3.48, w: 1.2, h: 0.06,
    fill: { color: MINT }, line: { color: MINT }
  });

  // Tagline
  s.addText('"Put doctors back in the driver\'s seat of their own financial future."', {
    x: 0.45, y: 3.72, w: 9.1, h: 0.55,
    fontFace: "Calibri", fontSize: 15, italic: true,
    color: "7EC8C8", align: "left", margin: 0
  });

  s.addText("PhysicianLabs  ·  Product Strategy", {
    x: 0.45, y: 5.2, w: 9.1, h: 0.28,
    fontSize: 9, color: "3A6B7C", align: "left", margin: 0
  });
}

// ════════════════════════════════════════════════════════════════════════════
// SLIDE 2 — KILLER FEATURE
// ════════════════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: OFF_WHITE };

  // Top header band
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.72,
    fill: { color: NAVY }, line: { color: NAVY }
  });
  s.addText("SLIDE 02  ·  KILLER FEATURE", {
    x: 0.45, y: 0, w: 9.1, h: 0.72,
    fontSize: 10, bold: true, color: MINT, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });

  // ── LEFT COLUMN: OMTM ──────────────────────────────────────────────────
  s.addText("OMTM", {
    x: 0.45, y: 0.88, w: 4.1, h: 0.24,
    fontSize: 9, bold: true, color: TEAL, charSpacing: 2,
    align: "left", margin: 0
  });

  // OMTM card
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 1.16, w: 4.1, h: 1.38,
    fill: { color: NAVY }, line: { color: NAVY },
    shadow: { type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.12 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 1.16, w: 0.1, h: 1.38,
    fill: { color: MINT }, line: { color: MINT }
  });
  s.addText("Time-to-First-Insight", {
    x: 0.68, y: 1.22, w: 3.74, h: 0.42,
    fontFace: "Georgia", fontSize: 16, bold: true,
    color: WHITE, align: "left", margin: 0
  });
  s.addText("How fast does a new clinic operator see\na real ROI signal after onboarding?", {
    x: 0.68, y: 1.65, w: 3.74, h: 0.6,
    fontFace: "Calibri", fontSize: 11, italic: true,
    color: "7EC8C8", align: "left", margin: 0
  });
  s.addText("TARGET: < 10 minutes to first insight", {
    x: 0.68, y: 2.3, w: 3.74, h: 0.2,
    fontSize: 9, bold: true, color: MINT,
    align: "left", margin: 0
  });

  // Why it matters
  s.addText("WHY IT MATTERS", {
    x: 0.45, y: 2.68, w: 4.1, h: 0.24,
    fontSize: 9, bold: true, color: TEAL, charSpacing: 2,
    align: "left", margin: 0
  });
  s.addText("A 25% lift in activation → 34% more MRR.\nActivation = the moment the clinic operator\nsees their first real financial clarity signal.", {
    x: 0.45, y: 2.95, w: 4.1, h: 0.78,
    fontFace: "Calibri", fontSize: 11,
    color: SLATE, align: "left", margin: 0
  });

  // Activation data bar visual
  const barY = 3.86;
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: barY, w: 4.1, h: 0.22,
    fill: { color: "D1E8EC" }, line: { color: "D1E8EC" }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: barY, w: 4.1 * 0.625, h: 0.22,
    fill: { color: TEAL }, line: { color: TEAL }
  });
  s.addText("Industry activation avg: 37.5%", {
    x: 0.45, y: barY + 0.26, w: 4.1, h: 0.2,
    fontSize: 8, color: SLATE, align: "left", margin: 0
  });

  // ── RIGHT COLUMN: KILLER FEATURE ───────────────────────────────────────
  s.addText("KILLER FEATURE — THE ROI DECISION FLASH", {
    x: 4.78, y: 0.88, w: 4.87, h: 0.24,
    fontSize: 9, bold: true, color: TEAL, charSpacing: 2,
    align: "left", margin: 0
  });

  // Mock UI card background
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.78, y: 1.16, w: 4.87, h: 3.3,
    fill: { color: NAVY }, line: { color: "1A3A55", width: 1 },
    shadow: { type: "outer", blur: 10, offset: 3, angle: 135, color: "000000", opacity: 0.15 }
  });

  // Mock UI — top bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.78, y: 1.16, w: 4.87, h: 0.34,
    fill: { color: "0D3352" }, line: { color: "0D3352" }
  });
  s.addText("PhysicianLabs  ·  ROI Decision Flash", {
    x: 4.88, y: 1.19, w: 4.6, h: 0.28,
    fontSize: 9, bold: true, color: MINT,
    align: "left", margin: 0
  });

  // Step 1 row
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.88, y: 1.62, w: 0.26, h: 0.26,
    fill: { color: MINT }, line: { color: MINT }
  });
  s.addText("1", {
    x: 4.88, y: 1.62, w: 0.26, h: 0.26,
    fontSize: 9, bold: true, color: NAVY,
    align: "center", valign: "middle", margin: 0
  });
  s.addText("Onboard in < 5 min — connect your clinic data", {
    x: 5.2, y: 1.62, w: 4.3, h: 0.26,
    fontFace: "Calibri", fontSize: 10, color: WHITE,
    align: "left", valign: "middle", margin: 0
  });

  // Step 2 row with metric callout
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.88, y: 2.02, w: 0.26, h: 0.26,
    fill: { color: MINT }, line: { color: MINT }
  });
  s.addText("2", {
    x: 4.88, y: 2.02, w: 0.26, h: 0.26,
    fontSize: 9, bold: true, color: NAVY,
    align: "center", valign: "middle", margin: 0
  });
  s.addText("See your live Revenue Gap — staffing vs. capacity", {
    x: 5.2, y: 2.02, w: 4.3, h: 0.26,
    fontFace: "Calibri", fontSize: 10, color: WHITE,
    align: "left", valign: "middle", margin: 0
  });

  // Metric callout card
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.88, y: 2.36, w: 4.62, h: 0.52,
    fill: { color: "0D3352" }, line: { color: "134060", width: 1 }
  });
  s.addText("Revenue Gap", {
    x: 5.0, y: 2.4, w: 1.5, h: 0.2,
    fontSize: 8, color: SLATE, align: "left", margin: 0
  });
  s.addText("$14,200 / mo", {
    x: 5.0, y: 2.58, w: 2.0, h: 0.24,
    fontFace: "Georgia", fontSize: 16, bold: true, color: RED_SOFT,
    align: "left", margin: 0
  });
  s.addText("▲ 2 unfilled shifts", {
    x: 6.9, y: 2.5, w: 2.3, h: 0.3,
    fontSize: 9, color: AMBER, align: "right", margin: 0
  });

  // Step 3 row
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.88, y: 2.98, w: 0.26, h: 0.26,
    fill: { color: MINT }, line: { color: MINT }
  });
  s.addText("3", {
    x: 4.88, y: 2.98, w: 0.26, h: 0.26,
    fontSize: 9, bold: true, color: NAVY,
    align: "center", valign: "middle", margin: 0
  });
  s.addText("\"What If\" simulator — fill the gap, see the ROI", {
    x: 5.2, y: 2.98, w: 4.3, h: 0.26,
    fontFace: "Calibri", fontSize: 10, color: WHITE,
    align: "left", valign: "middle", margin: 0
  });

  // What-if callout
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.88, y: 3.32, w: 4.62, h: 0.52,
    fill: { color: "0D3352" }, line: { color: "134060", width: 1 }
  });
  s.addText("Fill 2 shifts by Friday →", {
    x: 5.0, y: 3.35, w: 2.2, h: 0.2,
    fontSize: 8, color: SLATE, align: "left", margin: 0
  });
  s.addText("Recover $14,200 + reach Q3 milestone 18 days early", {
    x: 5.0, y: 3.53, w: 4.3, h: 0.24,
    fontFace: "Calibri", fontSize: 10, bold: true, color: GREEN,
    align: "left", margin: 0
  });

  // Step 4 row
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.88, y: 3.94, w: 0.26, h: 0.26,
    fill: { color: MINT }, line: { color: MINT }
  });
  s.addText("4", {
    x: 4.88, y: 3.94, w: 0.26, h: 0.26,
    fontSize: 9, bold: true, color: NAVY,
    align: "center", valign: "middle", margin: 0
  });
  s.addText("One-tap action — post the shift, start the clock", {
    x: 5.2, y: 3.94, w: 4.3, h: 0.26,
    fontFace: "Calibri", fontSize: 10, color: WHITE,
    align: "left", valign: "middle", margin: 0
  });

  // Wireframe label
  s.addText("↑  Wireframe: ROI Decision Flash — first screen after onboarding", {
    x: 4.78, y: 4.52, w: 4.87, h: 0.22,
    fontSize: 8, italic: true, color: SLATE,
    align: "left", margin: 0
  });
}

// ════════════════════════════════════════════════════════════════════════════
// SLIDE 3 — PRODUCT CAPABILITY
// ════════════════════════════════════════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: OFF_WHITE };

  // Top header band
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.72,
    fill: { color: NAVY }, line: { color: NAVY }
  });
  s.addText("SLIDE 03  ·  PRODUCT CAPABILITY", {
    x: 0.45, y: 0, w: 9.1, h: 0.72,
    fontSize: 10, bold: true, color: MINT, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });

  // Reality label
  s.addText("CURRENT STATE  —  No in-house engineering. Two paths to ship the Killer Feature:", {
    x: 0.45, y: 0.88, w: 9.1, h: 0.28,
    fontSize: 10, color: SLATE, align: "left", margin: 0
  });

  // ── PATH 1 ──────────────────────────────────────────────────────────────
  const p1x = 0.45;

  s.addShape(pres.shapes.RECTANGLE, {
    x: p1x, y: 1.24, w: 4.52, h: 3.8,
    fill: { color: WHITE }, line: { color: "D1E8EC", width: 1 },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  // Header stripe
  s.addShape(pres.shapes.RECTANGLE, {
    x: p1x, y: 1.24, w: 4.52, h: 0.54,
    fill: { color: TEAL }, line: { color: TEAL }
  });
  s.addText("PATH 1  ·  Retool + Airtable MVP", {
    x: p1x + 0.18, y: 1.24, w: 4.16, h: 0.54,
    fontSize: 11, bold: true, color: WHITE,
    align: "left", valign: "middle", margin: 0
  });

  const p1rows = [
    { label: "Stack",    val: "Retool (dashboard) + Airtable (data) + Zapier (triggers)" },
    { label: "Cost",     val: "$0–$50 / month — free tiers cover design partner stage" },
    { label: "Build",    val: "1–2 weeks: connect Airtable schema → build Retool panels → wire Zapier alerts" },
    { label: "User exp", val: "Design partner inputs staffing data → dashboard auto-calculates revenue gap + What-If projection" },
    { label: "When to",  val: "Use this to prove the concept with 1 design partner before writing a line of code" },
    { label: "Limit",    val: "Not customer-facing; internal tool only — fine for PoC stage" },
  ];

  p1rows.forEach((r, i) => {
    const ry = 1.92 + i * 0.52;
    s.addText(r.label.toUpperCase(), {
      x: p1x + 0.18, y: ry, w: 0.9, h: 0.2,
      fontSize: 7.5, bold: true, color: TEAL, charSpacing: 1,
      align: "left", margin: 0
    });
    s.addText(r.val, {
      x: p1x + 0.18, y: ry + 0.2, w: 4.16, h: 0.28,
      fontFace: "Calibri", fontSize: 10, color: SLATE,
      align: "left", margin: 0
    });
  });

  // ── PATH 2 ──────────────────────────────────────────────────────────────
  const p2x = 5.15;

  s.addShape(pres.shapes.RECTANGLE, {
    x: p2x, y: 1.24, w: 4.4, h: 3.8,
    fill: { color: WHITE }, line: { color: "D1E8EC", width: 1 },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
  });
  // Header stripe
  s.addShape(pres.shapes.RECTANGLE, {
    x: p2x, y: 1.24, w: 4.4, h: 0.54,
    fill: { color: NAVY }, line: { color: NAVY }
  });
  s.addText("PATH 2  ·  Bubble.io + Design Partner Co-build", {
    x: p2x + 0.18, y: 1.24, w: 4.04, h: 0.54,
    fontSize: 11, bold: true, color: MINT,
    align: "left", valign: "middle", margin: 0
  });

  const p2rows = [
    { label: "Stack",    val: "Bubble.io (full web app) + Xano or Airtable (backend) + Stripe (payment)" },
    { label: "Cost",     val: "$5K–$15K via no-code freelancer (Contra, Toptal, Upwork)" },
    { label: "Build",    val: "4–6 weeks: UX wireframes → Bubble build → design partner co-tests → iterate" },
    { label: "User exp", val: "Clinic operator logs into a real web app — onboards, sees ROI Flash dashboard, takes action" },
    { label: "When to",  val: "Use this to convert design partners to paid PoC — they co-fund in exchange for early access + input" },
    { label: "Limit",    val: "Less scalable than custom code — but proven to $1B+ revenue (Dividend Finance used Bubble)" },
  ];

  p2rows.forEach((r, i) => {
    const ry = 1.92 + i * 0.52;
    s.addText(r.label.toUpperCase(), {
      x: p2x + 0.18, y: ry, w: 0.9, h: 0.2,
      fontSize: 7.5, bold: true, color: TEAL, charSpacing: 1,
      align: "left", margin: 0
    });
    s.addText(r.val, {
      x: p2x + 0.18, y: ry + 0.2, w: 4.04, h: 0.28,
      fontFace: "Calibri", fontSize: 10, color: SLATE,
      align: "left", margin: 0
    });
  });

  // Footer recommendation
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 5.14, w: 9.1, h: 0.3,
    fill: { color: "E0F2F4" }, line: { color: "D1E8EC", width: 1 }
  });
  s.addText("Recommendation: Start with Path 1 (free, this week). If design partner validates the insight in ≤ 30 days, commission Path 2 as the paid PoC.", {
    x: 0.6, y: 5.16, w: 8.8, h: 0.26,
    fontFace: "Calibri", fontSize: 9.5, bold: true, color: NAVY,
    align: "left", margin: 0
  });
}

// ─── WRITE ──────────────────────────────────────────────────────────────────
pres.writeFile({ fileName: require("path").join(__dirname, "PhysicianLabs-Product-Strategy.pptx") })
  .then(() => console.log("✅  PhysicianLabs-Product-Strategy.pptx written"))
  .catch(err => { console.error(err); process.exit(1); });
