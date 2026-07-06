const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'PhysicianLabs — GTM Strategy';

// ─── PALETTE ───────────────────────────────────────────────────────────────
const NAVY      = "0A2540";
const TEAL      = "028090";
const MINT      = "02C39A";
const WHITE     = "FFFFFF";
const OFF_WHITE = "F0F8FA";
const SLATE     = "64748B";
const DARK_TEXT = "0A2540";

// ─── SLIDE 1: ONE-SENTENCE PITCH ───────────────────────────────────────────
{
  let s = pres.addSlide();
  s.background = { color: NAVY };

  // Subtle teal accent block — left edge
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.18, h: 5.625,
    fill: { color: TEAL }, line: { color: TEAL }
  });

  // Slide label
  s.addText("SLIDE 01  ·  ONE-SENTENCE PITCH", {
    x: 0.45, y: 0.32, w: 9.1, h: 0.28,
    fontSize: 9, bold: true, color: MINT,
    charSpacing: 3, align: "left", margin: 0
  });

  // Main pitch — large, dominant
  s.addText([
    { text: "PhysicianLabs gives independent clinic operators ", options: { color: WHITE } },
    { text: "real-time ROI visibility", options: { color: MINT, bold: true } },
    { text: " on every staffing decision —", options: { color: WHITE } }
  ], {
    x: 0.45, y: 0.85, w: 9.1, h: 1.5,
    fontFace: "Georgia", fontSize: 30, bold: true,
    align: "left", margin: 0
  });

  s.addText("so they recover revenue and thrive faster,\nwithout living across disconnected spreadsheets and tools.", {
    x: 0.45, y: 2.3, w: 9.1, h: 1.2,
    fontFace: "Georgia", fontSize: 22, italic: true,
    color: "B8D8DC", align: "left", margin: 0
  });

  // Divider
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 3.6, w: 1.2, h: 0.06,
    fill: { color: MINT }, line: { color: MINT }
  });

  // Tagline
  s.addText('"Put doctors back in the driver\'s seat of their own financial future."', {
    x: 0.45, y: 3.85, w: 9.1, h: 0.6,
    fontFace: "Calibri", fontSize: 15, italic: true,
    color: "7EC8C8", align: "left", margin: 0
  });

  // Slide number
  s.addText("PhysicianLabs  ·  GTM Strategy", {
    x: 0.45, y: 5.2, w: 9.1, h: 0.28,
    fontSize: 9, color: "3A6B7C", align: "left", margin: 0
  });
}

// ─── SLIDE 2: VALUE PROPOSITION ────────────────────────────────────────────
{
  let s = pres.addSlide();
  s.background = { color: OFF_WHITE };

  // Top header band
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.78,
    fill: { color: NAVY }, line: { color: NAVY }
  });

  s.addText("SLIDE 02  ·  VALUE PROPOSITION", {
    x: 0.45, y: 0, w: 9.1, h: 0.78,
    fontSize: 10, bold: true, color: MINT,
    charSpacing: 3, align: "left", valign: "middle", margin: 0
  });

  // ── PRIMARY BENEFIT (homepage headline) ──
  s.addText("PRIMARY BENEFIT  —  Homepage Headline", {
    x: 0.45, y: 1.0, w: 9.1, h: 0.28,
    fontSize: 9, bold: true, color: TEAL,
    charSpacing: 2, align: "left", margin: 0
  });

  // Card background
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 1.33, w: 9.1, h: 1.02,
    fill: { color: NAVY }, line: { color: NAVY },
    shadow: { type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.12 }
  });

  // Teal left accent on card
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 1.33, w: 0.1, h: 1.02,
    fill: { color: MINT }, line: { color: MINT }
  });

  s.addText("See the ROI of every decision\nbefore you make it.", {
    x: 0.7, y: 1.38, w: 8.7, h: 0.92,
    fontFace: "Georgia", fontSize: 22, bold: true,
    color: WHITE, align: "left", valign: "middle", margin: 0
  });

  // ── SECONDARY BENEFITS (bullets) ──
  s.addText("SECONDARY BENEFITS  —  Supporting Bullets", {
    x: 0.45, y: 2.55, w: 9.1, h: 0.28,
    fontSize: 9, bold: true, color: TEAL,
    charSpacing: 2, align: "left", margin: 0
  });

  const benefits = [
    {
      num: "01",
      head: "Revenue recovery, not just reporting.",
      body: "Spot exactly which staffing gaps are costing you — and close them before they compound."
    },
    {
      num: "02",
      head: "Speed to your next financial milestone.",
      body: "Track spend vs. benefit in real time so you know precisely how fast you're growing — and what's slowing you down."
    },
    {
      num: "03",
      head: "One platform. Not five tools duct-taped together.",
      body: "Replace Accuro, Epic workarounds, and spreadsheet chaos with a single decision-intelligence layer."
    }
  ];

  const cardX = [0.45, 3.65, 6.85];
  const cardW = 3.05;

  benefits.forEach((b, i) => {
    // Card
    s.addShape(pres.shapes.RECTANGLE, {
      x: cardX[i], y: 2.9, w: cardW, h: 2.35,
      fill: { color: WHITE }, line: { color: "D1E8EC", width: 1 },
      shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
    });
    // Number pill
    s.addShape(pres.shapes.RECTANGLE, {
      x: cardX[i] + 0.18, y: 2.98, w: 0.42, h: 0.32,
      fill: { color: TEAL }, line: { color: TEAL }
    });
    s.addText(b.num, {
      x: cardX[i] + 0.18, y: 2.98, w: 0.42, h: 0.32,
      fontSize: 9, bold: true, color: WHITE,
      align: "center", valign: "middle", margin: 0
    });
    // Heading
    s.addText(b.head, {
      x: cardX[i] + 0.18, y: 3.38, w: cardW - 0.36, h: 0.52,
      fontFace: "Georgia", fontSize: 12, bold: true,
      color: DARK_TEXT, align: "left", margin: 0
    });
    // Body
    s.addText(b.body, {
      x: cardX[i] + 0.18, y: 3.96, w: cardW - 0.36, h: 1.1,
      fontFace: "Calibri", fontSize: 10.5,
      color: SLATE, align: "left", margin: 0
    });
  });
}

// ─── SLIDE 3: TARGET ACQUISITION CHANNELS ──────────────────────────────────
{
  let s = pres.addSlide();
  s.background = { color: OFF_WHITE };

  // Top header band
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.78,
    fill: { color: NAVY }, line: { color: NAVY }
  });

  s.addText("SLIDE 03  ·  TARGET ACQUISITION CHANNELS", {
    x: 0.45, y: 0, w: 9.1, h: 0.78,
    fontSize: 10, bold: true, color: MINT,
    charSpacing: 3, align: "left", valign: "middle", margin: 0
  });

  const channels = [
    {
      priority: "#1",
      label:    "Direct Sales",
      sublabel: "Outbound / Relationship",
      why: "B2B healthcare runs on trust — no one buys a clinical ops platform from a landing page. With 5 LOIs and 2 design partners already in pipeline, direct sales is the only channel that converts at this stage.",
      data: "5 LOIs  ·  2 Design Partners  ·  $799/mo target",
      accent: MINT
    },
    {
      priority: "#2",
      label:    "Referral / Virality",
      sublabel: "Physician Network Word-of-Mouth",
      why: "Physician communities are tight-knit and trust peer recommendations above all else. Two of our earliest leads (Saf, Sameer) originated from referral chains — a signal to systematise, not ignore.",
      data: "2 of 5 LOIs sourced via referral  ·  High trust signal",
      accent: TEAL
    },
    {
      priority: "#3",
      label:    "Content / SEO",
      sublabel: "Organic Search  —  Long Horizon",
      why: "Clinic operators actively search for staffing, scheduling, and financial visibility solutions. Owning those keywords with decision-intelligence content positions PhysicianLabs as the category authority before paying for reach.",
      data: "18+ month runway  ·  Layer on after PMF  ·  Compounds over time",
      accent: "0369A1"
    }
  ];

  channels.forEach((ch, i) => {
    const y = 1.0 + i * 1.45;

    // Card background
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y, w: 9.1, h: 1.28,
      fill: { color: WHITE }, line: { color: "D1E8EC", width: 1 },
      shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
    });

    // Priority accent stripe
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.45, y, w: 0.85, h: 1.28,
      fill: { color: ch.accent }, line: { color: ch.accent }
    });

    // Priority number
    s.addText(ch.priority, {
      x: 0.45, y, w: 0.85, h: 0.7,
      fontFace: "Georgia", fontSize: 26, bold: true,
      color: WHITE, align: "center", valign: "middle", margin: 0
    });

    // Channel type label inside accent
    s.addText("PRIORITY", {
      x: 0.45, y: y + 0.76, w: 0.85, h: 0.35,
      fontSize: 7, bold: true, color: WHITE,
      charSpacing: 1, align: "center", valign: "middle", margin: 0
    });

    // Channel name
    s.addText(ch.label, {
      x: 1.45, y: y + 0.08, w: 3.5, h: 0.36,
      fontFace: "Georgia", fontSize: 16, bold: true,
      color: DARK_TEXT, align: "left", margin: 0
    });

    // Sub-label
    s.addText(ch.sublabel, {
      x: 1.45, y: y + 0.44, w: 3.5, h: 0.24,
      fontSize: 9, bold: true, color: TEAL,
      charSpacing: 1, align: "left", margin: 0
    });

    // Why text
    s.addText(ch.why, {
      x: 1.45, y: y + 0.7, w: 4.9, h: 0.52,
      fontFace: "Calibri", fontSize: 9.5,
      color: SLATE, align: "left", margin: 0
    });

    // Data badge
    s.addShape(pres.shapes.RECTANGLE, {
      x: 6.5, y: y + 0.28, w: 2.87, h: 0.72,
      fill: { color: OFF_WHITE }, line: { color: "D1E8EC", width: 1 }
    });
    s.addText(ch.data, {
      x: 6.6, y: y + 0.28, w: 2.68, h: 0.72,
      fontFace: "Calibri", fontSize: 9, bold: true,
      color: TEAL, align: "left", valign: "middle", margin: 0
    });
  });

  // Footer note
  s.addText("Strategy: Dominate one channel before layering the next.  Sales → Referral → Content.", {
    x: 0.45, y: 5.2, w: 9.1, h: 0.28,
    fontSize: 9, italic: true, color: SLATE,
    align: "left", margin: 0
  });
}

// ─── WRITE FILE ─────────────────────────────────────────────────────────────
pres.writeFile({ fileName: require("path").join(__dirname, "PhysicianLabs-GTM-Strategy.pptx") })
  .then(() => console.log("✅  PhysicianLabs-GTM-Strategy.pptx written"))
  .catch(err => { console.error(err); process.exit(1); });
