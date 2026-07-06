const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "PhysicianLabs Revenue Strategy";
pres.author = "PhysicianLabs";

// ─── Palette ───────────────────────────────────────────────────────────────
const BG       = "0A1628";   // dark navy
const WHITE    = "FFFFFF";
const TEAL     = "00C4B4";
const TEAL_DIM = "007A70";   // darker teal for borders/dividers
const LIGHT    = "C8D8E8";   // muted light blue for secondary text
const WARN     = "F5A623";   // amber for ⚠ callouts
const CARD_BG  = "112035";   // slightly lighter navy for cards
const CARD2_BG = "0D1A2D";   // alternating card row

// ─── SLIDE 1: ONE-SENTENCE PITCH ──────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  // Teal accent bar left edge
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.07, h: 5.625,
    fill: { color: TEAL }, line: { color: TEAL }
  });

  // "The Pitch" label — top
  s.addText("THE PITCH", {
    x: 0.28, y: 0.3, w: 9.4, h: 0.45,
    fontSize: 13, fontFace: "Calibri", bold: true,
    color: TEAL, charSpacing: 5, align: "left", margin: 0
  });

  // Thin divider
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.28, y: 0.78, w: 9.4, h: 0.015,
    fill: { color: TEAL_DIM }, line: { color: TEAL_DIM }
  });

  // Main one-sentence pitch — large and centred
  s.addText(
    "PhysicianLabs is the launch operating system for independent physicians — guiding them through every credentialing, billing, compliance, and patient acquisition step so they reach their first paid patient without the cash crisis that closes 1 in 3 new clinics.",
    {
      x: 0.5, y: 1.05, w: 9, h: 3.4,
      fontSize: 26, fontFace: "Calibri", bold: true,
      color: WHITE, align: "center", valign: "middle",
      lineSpacingMultiple: 1.3
    }
  );

  // Footnote
  s.addText(
    "Validated with Chelsea Parkman (FI Mentor) · May 7, 2026 — \"That's excellent. I think that is really strong.\"",
    {
      x: 0.28, y: 5.1, w: 9.44, h: 0.35,
      fontSize: 9.5, fontFace: "Calibri", italic: true,
      color: LIGHT, align: "center", margin: 0
    }
  );
}

// ─── SLIDE 2: REVENUE MODEL ───────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  // Teal accent bar left edge
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.07, h: 5.625,
    fill: { color: TEAL }, line: { color: TEAL }
  });

  // Title
  s.addText("REVENUE MODEL", {
    x: 0.28, y: 0.22, w: 9.4, h: 0.4,
    fontSize: 13, fontFace: "Calibri", bold: true,
    color: TEAL, charSpacing: 5, align: "left", margin: 0
  });

  // Subtitle
  s.addText("3 Models Ranked by Fit  ·  Biggest Challenge Per Model", {
    x: 0.28, y: 0.6, w: 9.4, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: LIGHT,
    align: "left", margin: 0
  });

  // Thin divider
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.28, y: 0.91, w: 9.4, h: 0.015,
    fill: { color: TEAL_DIM }, line: { color: TEAL_DIM }
  });

  // ── Column headers ──
  const hY = 1.02;
  const cols = [
    { x: 0.28,  w: 2.35, label: "RANK & MODEL" },
    { x: 2.75,  w: 3.25, label: "DESCRIPTION" },
    { x: 6.15,  w: 3.55, label: "BIGGEST CHALLENGE" },
  ];
  cols.forEach(c => {
    s.addText(c.label, {
      x: c.x, y: hY, w: c.w, h: 0.28,
      fontSize: 9, fontFace: "Calibri", bold: true,
      color: TEAL, charSpacing: 2, align: "left", margin: 0
    });
  });

  // ── Table rows ──
  const rows = [
    {
      rank: "#1",
      model: "SaaS Subscription",
      price: "$149–$249 / month",
      desc: "Flat monthly fee. Predictable MRR. Clinics already pay this way for EHR software. No long contract.",
      challenge: "Pre-launch physicians carry $200K+ in med school debt with zero clinic revenue. Charging before their first patient is psychologically and financially hard — ROI proof required before they have income to protect.",
      bg: CARD_BG,
    },
    {
      rank: "#2",
      model: "Professional Services",
      price: "$2,500–$5,000 one-time",
      desc: "White-glove, done-for-you clinic launch (the \"Business Doula\" model). High willingness to pay for compliance and credentialing handled correctly.",
      challenge: "Does not scale. Every engagement requires founder or human time. Risks becoming a consulting firm instead of a software company. Margin is capped by labour.",
      bg: CARD2_BG,
    },
    {
      rank: "#3",
      model: "Usage-Based / Milestone Fee",
      price: "Per milestone achieved",
      desc: "Charge when a verifiable milestone is reached: payer credential approved, first patient booked, first insurance payment received. Aligns cost with outcome.",
      challenge: "Defining the billable event is hard. Customers may dispute attribution. Metering infrastructure adds technical complexity before product-market fit is confirmed.",
      bg: CARD_BG,
    },
  ];

  const rowH = 1.28;
  const rowStartY = 1.34;

  rows.forEach((row, i) => {
    const y = rowStartY + i * (rowH + 0.06);

    // Row background
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.18, y, w: 9.6, h: rowH,
      fill: { color: row.bg }, line: { color: "1A2E45", width: 0.5 }
    });

    // Rank badge
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.18, y, w: 0.52, h: rowH,
      fill: { color: TEAL }, line: { color: TEAL }
    });
    s.addText(row.rank, {
      x: 0.18, y: y + 0.38, w: 0.52, h: 0.52,
      fontSize: 15, fontFace: "Calibri", bold: true,
      color: BG, align: "center", margin: 0
    });

    // Model name + price
    s.addText([
      { text: row.model, options: { bold: true, fontSize: 12, color: WHITE, breakLine: true } },
      { text: row.price, options: { fontSize: 9.5, color: TEAL, italic: true } }
    ], {
      x: 0.82, y: y + 0.18, w: 2.05, h: rowH - 0.36,
      fontFace: "Calibri", valign: "top", margin: 0
    });

    // Vertical divider
    s.addShape(pres.shapes.RECTANGLE, {
      x: 2.88, y: y + 0.12, w: 0.012, h: rowH - 0.24,
      fill: { color: TEAL_DIM }, line: { color: TEAL_DIM }
    });

    // Description
    s.addText(row.desc, {
      x: 2.96, y: y + 0.1, w: 3.1, h: rowH - 0.2,
      fontSize: 10, fontFace: "Calibri", color: LIGHT,
      valign: "middle", margin: 0, lineSpacingMultiple: 1.25
    });

    // Vertical divider 2
    s.addShape(pres.shapes.RECTANGLE, {
      x: 6.22, y: y + 0.12, w: 0.012, h: rowH - 0.24,
      fill: { color: TEAL_DIM }, line: { color: TEAL_DIM }
    });

    // Challenge text
    s.addText(row.challenge, {
      x: 6.3, y: y + 0.1, w: 3.35, h: rowH - 0.2,
      fontSize: 10, fontFace: "Calibri", color: WHITE,
      valign: "middle", margin: 0, lineSpacingMultiple: 1.25
    });
  });
}

// ─── SLIDE 3: STEPS TO REVENUE ────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  // Teal accent bar left edge
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.07, h: 5.625,
    fill: { color: TEAL }, line: { color: TEAL }
  });

  // Title
  s.addText("STEPS TO REVENUE", {
    x: 0.28, y: 0.17, w: 9.4, h: 0.38,
    fontSize: 13, fontFace: "Calibri", bold: true,
    color: TEAL, charSpacing: 5, align: "left", margin: 0
  });

  // Subtitle
  s.addText("Per Model  ·  Challenging steps marked  ⚠", {
    x: 0.28, y: 0.52, w: 9.4, h: 0.26,
    fontSize: 10.5, fontFace: "Calibri", color: LIGHT,
    align: "left", margin: 0
  });

  // Thin divider
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.28, y: 0.8, w: 9.4, h: 0.015,
    fill: { color: TEAL_DIM }, line: { color: TEAL_DIM }
  });

  // ── Three column definitions ──
  const colDefs = [
    {
      x: 0.18,
      w: 3.1,
      title: "#1  SaaS Subscription",
      color: TEAL,
      steps: [
        { text: "Sign 2–3 design partners (free)", warn: false },
        { text: "Validate product delivers the 50-step guide", warn: false },
        { text: "Set price & collect first payment before physician has clinic income", warn: true },
        { text: "Build self-serve onboarding — remove founder dependency", warn: false },
        { text: "Retain for 3+ months (ROI visible only post-opening)", warn: true },
        { text: "Referral from first 3 paying clinics → expand", warn: false },
      ]
    },
    {
      x: 3.47,
      w: 3.1,
      title: "#2  Professional Services",
      color: "F5A623",
      steps: [
        { text: "Define service packages ($2,500 / $5,000 tiers)", warn: false },
        { text: "Deliver for design partners → build case studies", warn: false },
        { text: "Manually close first 3 paying clients (founder-led)", warn: false },
        { text: "Collect 50% upfront, 50% at first payer credential approval", warn: false },
        { text: "Scale without becoming a consulting firm — systematise or hire", warn: true },
        { text: "Use revenue to fund SaaS product build", warn: false },
      ]
    },
    {
      x: 6.76,
      w: 3.02,
      title: "#3  Usage-Based / Milestone",
      color: "8899AA",
      steps: [
        { text: "Define the right billable event (credential? patient? payment?)", warn: true },
        { text: "Build metering & tracking before charging", warn: false },
        { text: "Agreement with customer on success definition (signed)", warn: false },
        { text: "Deliver milestone → collect payment", warn: false },
        { text: "Handle attribution disputes (customer claims self-sufficiency)", warn: true },
        { text: "Accumulate enough milestones per customer to be viable ARPU", warn: false },
      ]
    }
  ];

  const colStartY = 0.9;
  const colH = 4.3;

  colDefs.forEach(col => {
    // Column background
    s.addShape(pres.shapes.RECTANGLE, {
      x: col.x, y: colStartY, w: col.w, h: colH,
      fill: { color: CARD_BG }, line: { color: "1A2E45", width: 0.5 }
    });

    // Column header accent bar (top edge, colour per model)
    s.addShape(pres.shapes.RECTANGLE, {
      x: col.x, y: colStartY, w: col.w, h: 0.05,
      fill: { color: col.color }, line: { color: col.color }
    });

    // Column header title
    s.addText(col.title, {
      x: col.x + 0.12, y: colStartY + 0.08, w: col.w - 0.24, h: 0.38,
      fontSize: 10.5, fontFace: "Calibri", bold: true,
      color: col.color, align: "left", margin: 0
    });

    // Steps
    const stepStartY = colStartY + 0.53;
    const stepH = (colH - 0.6) / col.steps.length;

    col.steps.forEach((step, idx) => {
      const sy = stepStartY + idx * stepH;

      // Step number badge
      s.addShape(pres.shapes.OVAL, {
        x: col.x + 0.1, y: sy + 0.04, w: 0.26, h: 0.26,
        fill: { color: step.warn ? WARN : col.color },
        line: { color: step.warn ? WARN : col.color }
      });
      s.addText(String(idx + 1), {
        x: col.x + 0.1, y: sy + 0.035, w: 0.26, h: 0.27,
        fontSize: 8, fontFace: "Calibri", bold: true,
        color: BG, align: "center", margin: 0
      });

      // Warning icon prefix
      const prefix = step.warn ? "⚠  " : "";
      s.addText(prefix + step.text, {
        x: col.x + 0.44, y: sy, w: col.w - 0.56, h: stepH,
        fontSize: 9, fontFace: "Calibri",
        color: step.warn ? WARN : LIGHT,
        bold: step.warn,
        valign: "middle", margin: 0,
        lineSpacingMultiple: 1.2
      });
    });
  });

  // ── Footer recommendation ──
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.18, y: 5.21, w: 9.6, h: 0.32,
    fill: { color: "0D2A1A" }, line: { color: TEAL_DIM, width: 0.5 }
  });
  s.addText(
    "Recommended starting model:  #2 Professional Services to generate first revenue + fund #1 SaaS build.  Do not start with #3 until post-PMF.",
    {
      x: 0.35, y: 5.21, w: 9.3, h: 0.32,
      fontSize: 9, fontFace: "Calibri", bold: false,
      color: TEAL, align: "center", valign: "middle", margin: 0
    }
  );
}

// ─── Write file ───────────────────────────────────────────────────────────
pres.writeFile({ fileName: "C:\\Users\\Admin\\Documents\\MyNewStartup\\docs\\strategy-presentation\\revenue-strategy-2026-05-10.pptx" })
  .then(() => console.log("✅  Saved: revenue-strategy-2026-05-10.pptx"))
  .catch(err => { console.error("❌  Error:", err); process.exit(1); });
