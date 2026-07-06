const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'PhysicianLabs — Traction Snapshot';

const NAVY   = "1E2761";
const WHITE  = "FFFFFF";
const ICE    = "CADCFC";
const TEAL   = "0D9488";
const LIGHT  = "F8F9FA";
const DARK   = "1E293B";
const MID    = "64748B";

// ==========================================
// SLIDE 1: Discovery Arc + The Pivot
// ==========================================
const s1 = pres.addSlide();
s1.background = { color: NAVY };

s1.addText("PHYSICIANLABS  ·  TRACTION SNAPSHOT", {
  x: 0.5, y: 0.22, w: 9, h: 0.28,
  fontSize: 8, color: ICE, bold: true, charSpacing: 3,
  align: "left", fontFace: "Calibri", margin: 0
});

s1.addText("7 sessions. 5 physicians. One pivot.", {
  x: 0.5, y: 0.58, w: 9, h: 0.72,
  fontSize: 36, color: WHITE, bold: true,
  align: "left", fontFace: "Georgia", margin: 0
});

s1.addText("May – June 2026  ·  What I ran. What came back. What I changed.", {
  x: 0.5, y: 1.35, w: 9, h: 0.32,
  fontSize: 12, color: ICE, align: "left", fontFace: "Calibri", margin: 0
});

// LEFT card — Started with
s1.addShape(pres.shapes.RECTANGLE, {
  x: 0.4, y: 1.82, w: 3.85, h: 2.75,
  fill: { color: "FFFFFF", transparency: 92 },
  line: { color: ICE, width: 0.75 }
});
s1.addText("STARTED WITH", {
  x: 0.6, y: 1.98, w: 3.45, h: 0.26,
  fontSize: 8, color: ICE, bold: true, charSpacing: 3,
  fontFace: "Calibri", margin: 0
});
s1.addText([
  { text: "Pre-launch PT / derm / chiro",              options: { bold: true, breakLine: true } },
  { text: "New grad with medical school debt",         options: { breakLine: true } },
  { text: " ",                                         options: { breakLine: true } },
  { text: "Offer: $750 subscription program",          options: { breakLine: true } },
  { text: "Hook: \"Don't make the $200K mistake\"",   options: { breakLine: true } },
  { text: " ",                                         options: { breakLine: true } },
  { text: "Result: Pre-launch physicians don't feel the pain — confirmed by two independent interviews.", options: { italic: true } }
], {
  x: 0.6, y: 2.3, w: 3.45, h: 2.15,
  fontSize: 12, color: WHITE, fontFace: "Calibri", valign: "top", margin: 0
});

// Arrow
s1.addText("→", {
  x: 4.35, y: 2.9, w: 1.3, h: 0.6,
  fontSize: 36, color: TEAL, align: "center", fontFace: "Calibri", margin: 0
});

// RIGHT card — Changed to
s1.addShape(pres.shapes.RECTANGLE, {
  x: 5.75, y: 1.82, w: 3.85, h: 2.75,
  fill: { color: TEAL, transparency: 88 },
  line: { color: TEAL, width: 1.5 }
});
s1.addText("CHANGED TO", {
  x: 5.95, y: 1.98, w: 3.45, h: 0.26,
  fontSize: 8, color: TEAL, bold: true, charSpacing: 3,
  fontFace: "Calibri", margin: 0
});
s1.addText([
  { text: "Just-launched hospital-to-independent physician", options: { bold: true, breakLine: true } },
  { text: "Mid-career, disposable income, high conviction",  options: { breakLine: true } },
  { text: " ",                                               options: { breakLine: true } },
  { text: "Offer: $1,000 money-back PoC",                   options: { breakLine: true } },
  { text: "Hook: \"We find $20K you're owed, or it's free\"", options: { breakLine: true } },
  { text: " ",                                               options: { breakLine: true } },
  { text: "Result: First paid commitment.",                  options: { italic: true } }
], {
  x: 5.95, y: 2.3, w: 3.45, h: 2.15,
  fontSize: 12, color: WHITE, fontFace: "Calibri", valign: "top", margin: 0
});

s1.addText("Two independent physicians said this without coordination: \"Pre-launch physicians don't feel the pain.\"", {
  x: 0.5, y: 4.75, w: 9, h: 0.45,
  fontSize: 10, color: ICE, italic: true, fontFace: "Calibri",
  align: "left", margin: 0
});


// ==========================================
// SLIDE 2: Three Numbers
// ==========================================
const s2 = pres.addSlide();
s2.background = { color: LIGHT };

s2.addText("PHYSICIANLABS  ·  TRACTION SNAPSHOT", {
  x: 0.5, y: 0.22, w: 9, h: 0.28,
  fontSize: 8, color: MID, bold: true, charSpacing: 3,
  align: "left", fontFace: "Calibri", margin: 0
});

s2.addText("Three numbers from outside my family.", {
  x: 0.5, y: 0.58, w: 9, h: 0.65,
  fontSize: 32, color: DARK, bold: true,
  align: "left", fontFace: "Georgia", margin: 0
});

const cW  = 2.9;
const cH  = 3.35;
const cY  = 1.42;
const gap = 0.25;
const c1x = 0.4;
const c2x = c1x + cW + gap;
const c3x = c2x + cW + gap;

function addCard(slide, cx, stat, body, source) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: cY, w: cW, h: cH,
    fill: { color: WHITE },
    shadow: { type: "outer", color: "000000", blur: 12, offset: 3, angle: 135, opacity: 0.09 },
    line: { color: "E2E8F0", width: 0.75 }
  });
  // Teal top bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: cY, w: cW, h: 0.07,
    fill: { color: TEAL }, line: { color: TEAL }
  });
  // Stat number
  slide.addText(stat, {
    x: cx + 0.2, y: cY + 0.18, w: cW - 0.4, h: 0.72,
    fontSize: 34, color: NAVY, bold: true, fontFace: "Georgia",
    align: "left", margin: 0
  });
  // Body
  slide.addText(body, {
    x: cx + 0.2, y: cY + 1.0, w: cW - 0.4, h: 1.45,
    fontSize: 12.5, color: DARK, fontFace: "Calibri",
    align: "left", valign: "top", margin: 0
  });
  // Source
  slide.addText(source, {
    x: cx + 0.2, y: cY + 2.6, w: cW - 0.4, h: 0.65,
    fontSize: 9, color: MID, fontFace: "Calibri",
    align: "left", valign: "top", margin: 0, italic: true
  });
}

addCard(s2, c1x,
  "$115 vs $290",
  "Same Blue Cross visit.\nIndependent practice vs.\nhospital system.\n$175 gap — per patient,\nsystematically.",
  "Samir Master, MD MBA\n16-yr derm owner, Bellevue WA\nKellogg MBA · Kleiner Perkins\n· Netflix board"
);

addCard(s2, c2x,
  "$200K / yr",
  "Admin overhead.\nOne derm practice.\nFive phone staff, two billing,\nthree MAs — all driven by\npoint solutions that don't talk.",
  "Samir Master, MD MBA\n\"$200K/year.\"\n— unprompted, with\nfull headcount breakdown"
);

addCard(s2, c3x,
  "$10K → $1K",
  "Retrospective vs. prospective\nwillingness to pay.\nThe unlock:\n\"Show them they'll save\n$100K/year minimum.\"",
  "Saf Malleck, MD — Ortho surgeon\nOpened 2nd clinic Jan 2026\n\"We are in debt purely because\nof how horrible I set it up.\""
);


// ==========================================
// SLIDE 3: Where We Are + What's Next
// ==========================================
const s3 = pres.addSlide();
s3.background = { color: NAVY };

s3.addText("PHYSICIANLABS  ·  TRACTION SNAPSHOT", {
  x: 0.5, y: 0.22, w: 9, h: 0.28,
  fontSize: 8, color: ICE, bold: true, charSpacing: 3,
  align: "left", fontFace: "Calibri", margin: 0
});

s3.addText("Where we are. What we haven't proven yet.", {
  x: 0.5, y: 0.58, w: 9, h: 0.7,
  fontSize: 32, color: WHITE, bold: true,
  align: "left", fontFace: "Georgia", margin: 0
});

// — LEFT COLUMN: Traction
const lx = 0.4;
const lw = 4.25;

s3.addText("TRACTION TO DATE", {
  x: lx, y: 1.48, w: lw, h: 0.28,
  fontSize: 8, color: TEAL, bold: true, charSpacing: 3,
  fontFace: "Calibri", margin: 0
});

const statRows = [
  { num: "$1,000",  label: "First paid commitment\n(confirmed, uncollected — founder's brother)" },
  { num: "5",       label: "Verbal LOIs\nShaun Cowan · Yoan Kagoma · Hannan Qureshi + 2" },
  { num: "7",       label: "Customer sessions completed\nacross 5 independent physicians, 6 weeks" },
];

statRows.forEach((r, i) => {
  const ry = 1.87 + i * 1.08;
  s3.addText(r.num, {
    x: lx, y: ry, w: 1.35, h: 0.62,
    fontSize: 34, color: WHITE, bold: true, fontFace: "Georgia",
    align: "left", margin: 0
  });
  s3.addText(r.label, {
    x: lx + 1.45, y: ry + 0.06, w: lw - 1.45, h: 0.62,
    fontSize: 11.5, color: ICE, fontFace: "Calibri",
    align: "left", valign: "top", margin: 0
  });
  if (i < statRows.length - 1) {
    s3.addShape(pres.shapes.RECTANGLE, {
      x: lx, y: ry + 0.82, w: lw, h: 0.015,
      fill: { color: "CADCFC", transparency: 70 },
      line: { color: "CADCFC", transparency: 70 }
    });
  }
});

// Vertical divider
s3.addShape(pres.shapes.RECTANGLE, {
  x: 5.0, y: 1.48, w: 0.015, h: 3.2,
  fill: { color: ICE, transparency: 65 },
  line: { color: ICE, transparency: 65 }
});

// — RIGHT COLUMN: Unproven
const rx = 5.3;
const rw = 4.3;

s3.addText("TWO THINGS NOT YET PROVEN", {
  x: rx, y: 1.48, w: rw, h: 0.28,
  fontSize: 8, color: TEAL, bold: true, charSpacing: 3,
  fontFace: "Calibri", margin: 0
});

// Item 1
s3.addText("1", {
  x: rx, y: 1.87, w: 0.38, h: 0.52,
  fontSize: 30, color: TEAL, bold: true, fontFace: "Georgia",
  align: "center", margin: 0
});
s3.addText("A non-family physician will pay.", {
  x: rx + 0.48, y: 1.9, w: rw - 0.48, h: 0.32,
  fontSize: 13.5, color: WHITE, bold: true, fontFace: "Calibri", margin: 0
});
s3.addText("30-day target: one card charged — Shaun Cowan, Hannan Qureshi, or Matthew Tucci. One of these three closes, or I re-examine the offer.", {
  x: rx + 0.48, y: 2.26, w: rw - 0.48, h: 0.55,
  fontSize: 11.5, color: ICE, fontFace: "Calibri", margin: 0
});

// Divider
s3.addShape(pres.shapes.RECTANGLE, {
  x: rx, y: 2.97, w: rw, h: 0.015,
  fill: { color: "CADCFC", transparency: 70 },
  line: { color: "CADCFC", transparency: 70 }
});

// Item 2
s3.addText("2", {
  x: rx, y: 3.07, w: 0.38, h: 0.52,
  fontSize: 30, color: TEAL, bold: true, fontFace: "Georgia",
  align: "center", margin: 0
});
s3.addText("I have a repeatable acquisition channel.", {
  x: rx + 0.48, y: 3.1, w: rw - 0.48, h: 0.32,
  fontSize: 13.5, color: WHITE, bold: true, fontFace: "Calibri", margin: 0
});
s3.addText("60-day target: one content experiment in AAPP, DPC Frontier, or r/whitecoatinvestor generates 5+ inbound DMs from physicians I've never met.", {
  x: rx + 0.48, y: 3.46, w: rw - 0.48, h: 0.65,
  fontSize: 11.5, color: ICE, fontFace: "Calibri", margin: 0
});

// Bottom close line
s3.addShape(pres.shapes.RECTANGLE, {
  x: 0.4, y: 4.82, w: 9.2, h: 0.015,
  fill: { color: TEAL, transparency: 55 },
  line: { color: TEAL, transparency: 55 }
});
s3.addText("If both prove out in 60 days — there is a business here.", {
  x: 0.4, y: 4.9, w: 9.2, h: 0.38,
  fontSize: 12, color: TEAL, italic: true, fontFace: "Calibri",
  align: "center", margin: 0
});

pres.writeFile({ fileName: require("path").join(__dirname, "physicianLabs-traction-snapshot.pptx") });
console.log("Done.");
