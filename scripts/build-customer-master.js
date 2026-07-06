// Builds the consolidated Potential Customers master workbook from all source CSVs.
// One-off generator. Run: node scripts/build-customer-master.js
const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

const ROOT = path.resolve(__dirname, '..');
const CD = path.join(ROOT, 'docs', 'customer-development');
const OUT = path.join(CD, 'PhysicianLabs-Potential-Customers-Master-2026-06-22.xlsx');

// --- tiny CSV parser (handles quoted fields w/ commas + escaped quotes) ---
function parseCSV(text) {
  const rows = [];
  let row = [], field = '', inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQ = false;
      } else field += c;
    } else {
      if (c === '"') inQ = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\r') { /* skip */ }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter(r => r.length > 1 || (r.length === 1 && r[0].trim() !== ''));
}
function readCSV(p) {
  if (!fs.existsSync(p)) return [];
  const rows = parseCSV(fs.readFileSync(p, 'utf8'));
  if (!rows.length) return [];
  const header = rows[0];
  return rows.slice(1).map(r => {
    const o = {};
    header.forEach((h, i) => (o[h.trim()] = (r[i] || '').trim()));
    return o;
  });
}

// --- normalize all prospect lists into one schema ---
// {Name, Platform, Segment, Practice, Location, Score, ICPFit, Status, SourceList, PainQuote, ProfileURL, PostURL, Notes}
const prospects = [];

// April 27 — Seattle chiro/derm
for (const r of readCSV(path.join(CD, 'users-to-target-2026-04-27.csv'))) {
  prospects.push({
    Name: r.Name, Platform: r.Platform, Segment: r.Segment, Practice: r.Practice,
    Location: r.Location, Score: r.RelevanceScore, ICPFit: '', Status: 'Not contacted',
    SourceList: 'Apr 27 — Seattle chiro/derm', PainQuote: r.PainQuote,
    ProfileURL: r.ProfileURL, PostURL: r.PostURL, Notes: r.Notes,
  });
}
// May 04 — PT pivot pipeline (Seattle PTs)
for (const r of readCSV(path.join(CD, 'pt-pipeline-needs-post-url-2026-05-04.csv'))) {
  prospects.push({
    Name: r.Name, Platform: r.Platform, Segment: r.Segment, Practice: r.Practice,
    Location: r.Location, Score: r.RelevanceScore, ICPFit: '', Status: 'Not contacted',
    SourceList: 'May 04 — PT pivot pipeline', PainQuote: r.PainQuote,
    ProfileURL: r.ProfileURL, PostURL: r.PostURL, Notes: r.Notes,
  });
}
// June 01 — transition physicians (different schema)
for (const r of readCSV(path.join(CD, 'customer-prospect-discovery', 'prospects-2026-06-01.csv'))) {
  prospects.push({
    Name: r.Name, Platform: r.Platform, Segment: r['Specialty/Role'], Practice: '',
    Location: '', Score: r.Score, ICPFit: r['ICP Fit'], Status: r.Status || 'Not contacted',
    SourceList: 'Jun 01 — transition physicians', PainQuote: r['Pain Point Quote'],
    ProfileURL: r['Profile URL'], PostURL: r['Post URL'],
    Notes: [r['Discovery Context'], r['Outreach Angle']].filter(Boolean).join(' — '),
  });
}

// --- curated interview data (5 people / 7 sessions) ---
const interviews = [
  { name: 'Saf Malleck, MD', role: 'Orthopedic Surgeon', loc: 'Ontario, CA', sessions: 2,
    dates: 'May 11 + Jun 1, 2026', fit: 'Strong', stage: 'Paid PoC — confirmed (first paid commitment)',
    wtp: '$1K prospective / $10K retrospective; "save $100K/yr"',
    learn: 'Just-launched physicians feel the pain (unprompted); secretary hiring is #1 setup pain (2,000–4,000 applicants); tax "nauseating"; financial taboo is cultural. First paid commitment in company history (family — weak external validity, card not yet charged).',
    src: 'saf-malleck-interview-2.md; interview-saf-malleck-2026-05-11.md' },
  { name: 'Samir Master, MD MBA', role: 'Dermatologist', loc: 'Bellevue, WA', sessions: 1,
    dates: 'May 28, 2026', fit: 'Strong (but competitor)',
    stage: 'Off-ICP — building competing product; treat as market validation / future partner',
    wtp: 'Segment "exceedingly cheap"',
    learn: 'Independents reimbursed $115 vs $290 (hospital) for same Blue Cross visit; $200K/yr admin overhead; ModMed graded D- to C over 16 yrs; pre-launch distribution "structurally hard". Building "Rippling meets Compass for outpatient medicine" — PRD + 25 TDDs + 100 workflows, 1 dev.',
    src: 'samir-master-interview.md' },
  { name: 'Shaun Cowan, MD', role: 'Surgeon / ICU', loc: 'Alberta, CA', sessions: 1,
    dates: 'May 8, 2026', fit: 'Partial (secondary ICP)', stage: 'Discovery done — stalled; re-engage Jun 14',
    wtp: '"$799 feels slightly high"',
    learn: 'Multi-income-stream P&L blindness; price resistance at subscription point validates PoC/ROI framing over flat subscription.',
    src: 'shaun-cowan-interview.md' },
  { name: 'Hannan Qureshi, MD', role: 'ENT', loc: 'Atlanta, GA', sessions: 1,
    dates: 'Apr 26, 2026', fit: 'Partial — now Dead/off-ICP', stage: 'Dead — network is employed MDs, no independent contacts',
    wtp: '—',
    learn: 'Patient acquisition channels; PE squeeze dynamics. Confirmed setup-information vacuum but no independent network to refer.',
    src: 'interview-hannan-qureshi-2026-04-26.md' },
  { name: 'Sameer Gafoor, MD', role: 'Interventional Cardiology', loc: 'Seattle, WA', sessions: 1,
    dates: 'May 12, 2026', fit: 'Counter-persona', stage: 'Dead — concierge/employed, off-ICP',
    wtp: '—',
    learn: 'Recommended concierge medicine as the sharpest ICP (unprompted, single-source). Useful counter-persona signal.',
    src: 'interview-sameer-gafoor-2026-05-12.md' },
];

// --- active pipeline (from outreach-tracker.md, Jun 6) ---
const pipeline = [
  ['1', 'Saf Malleck, MD', 'Ortho, Ontario', 'Direct', 'Paid PoC — confirmed', 'Jun 6', 'Book 90-min session', 'Jun 13'],
  ['2', 'Matthew Tucci, MD', 'Solo Ortho, Oshawa', 'Saf intro (pending)', 'Intro requested', 'Jun 6', 'Send first message once intro lands', 'Jun 8'],
  ['3', 'Linda Xin, MD', 'Rejuvenation Derm, Oakville', 'Saf intro (pending)', 'Intro requested', 'Jun 6', 'Send first message once intro lands', 'Jun 8'],
  ['4', 'Shaun Cowan, MD', 'Surgeon/ICU, Alberta', 'Direct', 'Discovery done — stalled', 'May 31', 'Re-engage with prototype', 'Jun 14'],
  ['5', 'Dr. Phan/Vu', 'Med Finance, Toronto', 'Saf (email pending)', 'Lead', '—', 'Confirm email received from Saf', 'Jun 10'],
  ['6', "PT in Saf's building", 'Allied Health, Ontario', 'Saf referral', 'Lead', '—', 'Ask Saf for intro (lower priority)', 'Jun 20'],
  ['7', 'u/Snapcracklepayme', 'Reddit / Chiro', 'Reddit DM', '3rd touch sent', 'Jun 1', 'Follow up with paid offer', 'Jun 8'],
  ['8', 'u/crossfit6', 'Reddit / Chiro', 'Reddit DM', '3rd touch sent', 'Jun 1', 'Follow up with paid offer', 'Jun 8'],
  ['9', 'Pro Alliance admin', 'IPA, Pacific NW', 'Samir Master', 'Lead', '—', 'Table until Week 5', 'Jun 30'],
  ['10', 'WWMG admin', 'IPA, Pacific NW', 'Samir Master', 'Lead', '—', 'Table until Week 5', 'Jun 30'],
];
const deadPipeline = [
  ['Hannan Qureshi, MD', 'Network is employed MDs — no independent contacts', 'May 31'],
  ['Sameer Gafoor, MD', 'Concierge/employed — off-ICP; also building competing product (Samir Master)', 'May 28'],
];

// on-ICP transition prospects (Jun 01) reconciled into the working pipeline as fresh leads
const transitionLeads = prospects.filter(p => p.SourceList === 'Jun 01 — transition physicians');

// ============================ BUILD WORKBOOK ============================
const wb = new ExcelJS.Workbook();
wb.creator = 'PhysicianLabs';
wb.created = new Date('2026-06-22');

const FONT = 'Arial';
const NAVY = 'FF1F3864', BLUE = 'FF2E5496', LT = 'FFD9E1F2', GREY = 'FFF2F2F2';
const GREEN = 'FFC6EFCE', YELLOW = 'FFFFF2CC', RED = 'FFF8CBAD';

function styleHeader(row) {
  row.eachCell(c => {
    c.font = { name: FONT, bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: BLUE } };
    c.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
    c.border = { bottom: { style: 'thin', color: { argb: NAVY } } };
  });
  row.height = 30;
}
function baseFont(ws) {
  ws.eachRow(r => r.eachCell(c => { if (!c.font) c.font = { name: FONT, size: 10 }; else c.font = { name: FONT, size: c.font.size || 10, bold: c.font.bold, color: c.font.color }; }));
}

// ---------- Sheet 1: Summary ----------
const s = wb.addWorksheet('Summary', { properties: { tabColor: { argb: NAVY } }, views: [{ showGridLines: false }] });
s.columns = [{ width: 4 }, { width: 34 }, { width: 16 }, { width: 64 }];
let r = 1;
s.mergeCells(`B${r}:D${r}`);
let cell = s.getCell(`B${r}`); cell.value = 'PhysicianLabs — Potential Customers Master Tracker';
cell.font = { name: FONT, bold: true, size: 16, color: { argb: NAVY } };
r++;
s.mergeCells(`B${r}:D${r}`);
cell = s.getCell(`B${r}`); cell.value = 'Consolidated from 4 prospect lists + outreach pipeline + interview log · Generated 2026-06-22';
cell.font = { name: FONT, italic: true, size: 10, color: { argb: 'FF7F7F7F' } };
r += 2;

// Scorecard
s.getCell(`B${r}`).value = 'Customer Discovery Scorecard';
s.getCell(`B${r}`).font = { name: FONT, bold: true, size: 13, color: { argb: BLUE } };
r++;
const scHead = s.getRow(r); scHead.getCell(2).value = 'Question'; scHead.getCell(3).value = 'Status'; scHead.getCell(4).value = 'Detail';
[2, 3, 4].forEach(i => { const c = scHead.getCell(i); c.font = { name: FONT, bold: true, color: { argb: 'FFFFFFFF' } }; c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: BLUE } }; c.alignment = { wrapText: true, vertical: 'middle' }; });
scHead.height = 20;
r++;
const scorecard = [
  ['Interviewed potential customers?', 'YES', '5 unique physicians / 7 sessions', GREEN],
  ['Documented interviews from ≥10?', 'NO', 'Only 5 unique people interviewed (gap of 5)', RED],
  ['Know how they currently solve it?', 'YES', 'Accountants, FTEs, disliked EMRs — or not at all', GREEN],
  ['Researched competitors?', 'YES', '9 named, full SWOT (competitive-swot-analysis.md)', GREEN],
  ['Completed ≥1 MVT?', 'YES', 'First MVT closed Jun 15 (paid-offer experiment)', GREEN],
  ['Learned / changed the idea?', 'YES', 'Validated pivot: ICP → just-launched; offer → $1K money-back PoC', GREEN],
  ['Potential Customers spreadsheet?', 'YES', 'This file — consolidates all prior fragmented lists', GREEN],
];
for (const [q, st, d, color] of scorecard) {
  const row = s.getRow(r);
  row.getCell(2).value = q; row.getCell(3).value = st; row.getCell(4).value = d;
  row.getCell(2).font = { name: FONT, size: 10 };
  row.getCell(3).font = { name: FONT, bold: true, size: 10 };
  row.getCell(3).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: color } };
  row.getCell(3).alignment = { horizontal: 'center' };
  row.getCell(4).font = { name: FONT, size: 10 };
  row.getCell(4).alignment = { wrapText: true };
  [2, 3, 4].forEach(i => row.getCell(i).border = { bottom: { style: 'hair', color: { argb: 'FFBFBFBF' } } });
  r++;
}
r++;

// Counts (formulas referencing other sheets)
s.getCell(`B${r}`).value = 'Pipeline Counts (live)';
s.getCell(`B${r}`).font = { name: FONT, bold: true, size: 13, color: { argb: BLUE } };
r++;
const countDefs = [
  ['Total prospects logged', "COUNTA('All Prospects'!B2:B500)", 85],
  ['Interviewed (people)', 'COUNTA(Interviews!B2:B200)', 5],
  ['Active pipeline entries (incl. on-ICP leads)', "COUNTA('Active Pipeline'!B5:B14)+COUNTA('Active Pipeline'!B17:B26)", 20],
  ['Prospects not yet contacted', "COUNTIF('All Prospects'!I2:I500,\"Not contacted\")", 85],
];
for (const [label, formula, result] of countDefs) {
  const row = s.getRow(r);
  row.getCell(2).value = label; row.getCell(2).font = { name: FONT, size: 10 };
  const vc = row.getCell(3); vc.value = { formula, result };
  vc.font = { name: FONT, bold: true, size: 11, color: { argb: NAVY } };
  vc.alignment = { horizontal: 'center' };
  vc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: LT } };
  r++;
}
r++;
s.getCell(`B${r}`).value = 'Sheets';
s.getCell(`B${r}`).font = { name: FONT, bold: true, size: 12, color: { argb: BLUE } };
r++;
for (const [name, desc] of [
  ['Conversion Funnel', 'Weekly outreach→interview funnel; surfaces the 0% cold/warm reply-rate leak'],
  ['Interviews', '5 documented interviews / 7 sessions, with key learnings & WTP signals'],
  ['Active Pipeline', 'Live deals (Jun 6) + 10 on-ICP transition leads reconciled in + dead/off-ICP'],
  ['All Prospects', 'Every prospect from all 4 source lists, with status & ICP score'],
]) {
  const row = s.getRow(r);
  row.getCell(2).value = name; row.getCell(2).font = { name: FONT, bold: true, size: 10, color: { argb: BLUE } };
  row.getCell(4).value = desc; row.getCell(4).font = { name: FONT, size: 10 }; row.getCell(4).alignment = { wrapText: true };
  r++;
}

// ---------- Sheet 2: Conversion Funnel ----------
const cf = wb.addWorksheet('Conversion Funnel', { properties: { tabColor: { argb: 'FFC55A11' } }, views: [{ showGridLines: false }] });
cf.columns = [{ width: 4 }, { width: 22 }, { width: 13 }, { width: 13 }, { width: 12 }, { width: 12 }, { width: 12 }, { width: 12 }, { width: 12 }, { width: 44 }];
let cr = 1;
cf.mergeCells(`B${cr}:J${cr}`);
cf.getCell(`B${cr}`).value = 'Outreach → Interview Conversion Funnel';
cf.getCell(`B${cr}`).font = { name: FONT, bold: true, size: 16, color: { argb: NAVY } };
cr++;
cf.mergeCells(`B${cr}:J${cr}`);
cf.getCell(`B${cr}`).value = 'Tracks the leak between prospects logged and interviews booked. Update weekly. Target reply rate 30–50% (per recruitment tracker).';
cf.getCell(`B${cr}`).font = { name: FONT, italic: true, size: 10, color: { argb: 'FF7F7F7F' } };
cr += 2;

cf.getCell(`B${cr}`).value = 'Funnel Snapshot — as of 2026-06-22';
cf.getCell(`B${cr}`).font = { name: FONT, bold: true, size: 13, color: { argb: BLUE } };
cr++;
const snapHead = cf.getRow(cr);
[['B', 'Stage'], ['C', 'Count'], ['D', 'Conv. %']].forEach(([col, v]) => {
  const c = snapHead.getCell(col); c.value = v; c.font = { name: FONT, bold: true, color: { argb: 'FFFFFFFF' } };
  c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: BLUE } }; c.alignment = { horizontal: 'center' };
});
cf.mergeCells(`E${cr}:J${cr}`);
const nh = snapHead.getCell('E'); nh.value = 'Notes'; nh.font = { name: FONT, bold: true, color: { argb: 'FFFFFFFF' } };
nh.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: BLUE } };
snapHead.height = 18;
cr++;
const snapStart = cr;
const colorMap = { GREY, YELLOW, RED, GREEN };
const snap = [
  ['Prospects logged', 85, '—', 'GREY', 'Across 4 source lists (see All Prospects tab)'],
  ['Contacted', 8, 'pct', 'YELLOW', 'Only via Apr–May recruitment push (Reddit + LinkedIn); none since'],
  ['Replied', 0, 'pct', 'RED', 'THE LEAK — zero cold/warm outreach replies converted'],
  ['Discovery call (interview)', 5, '—', 'GREEN', 'All 5 via direct / family / operator — NOT from the 85 prospects'],
  ['Paid PoC', 1, '—', 'GREEN', 'Saf Malleck (family; card not yet charged)'],
];
snap.forEach((sp, i) => {
  const n = snapStart + i;
  const row = cf.getRow(n);
  row.getCell(2).value = sp[0]; row.getCell(2).font = { name: FONT, size: 10, bold: true };
  row.getCell(3).value = sp[1]; row.getCell(3).font = { name: FONT, size: 10 }; row.getCell(3).alignment = { horizontal: 'center' };
  row.getCell(3).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colorMap[sp[3]] } };
  const d = row.getCell(4);
  if (sp[2] === 'pct' && sp[0] === 'Contacted') d.value = { formula: `=C${snapStart + 1}/C${snapStart}`, result: 8 / 85 };
  else if (sp[2] === 'pct' && sp[0] === 'Replied') d.value = { formula: `=IFERROR(C${snapStart + 2}/C${snapStart + 1},0)`, result: 0 };
  else d.value = '—';
  d.numFmt = '0.0%'; d.font = { name: FONT, size: 10 }; d.alignment = { horizontal: 'center' };
  cf.mergeCells(`E${n}:J${n}`);
  const note = row.getCell(5); note.value = sp[4]; note.font = { name: FONT, size: 10 }; note.alignment = { wrapText: true, vertical: 'middle' };
});
cr = snapStart + snap.length + 1;

cf.getCell(`B${cr}`).value = 'Weekly Tracking — update every Monday';
cf.getCell(`B${cr}`).font = { name: FONT, bold: true, size: 13, color: { argb: BLUE } };
cr++;
const wkHeadVals = ['Week ending', 'New\nContacted', 'Cum.\nContacted', 'New\nReplies', 'Cum.\nReplies', 'Disc.\nCalls', 'Paid\nPoC', 'Reply\nRate', 'Notes'];
const wkHead = cf.getRow(cr);
wkHeadVals.forEach((v, i) => {
  const c = wkHead.getCell(i + 2); c.value = v;
  c.font = { name: FONT, bold: true, color: { argb: 'FFFFFFFF' }, size: 9 };
  c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: BLUE } };
  c.alignment = { wrapText: true, vertical: 'middle', horizontal: 'center' };
});
wkHead.height = 30;
cr++;
const wkStart = cr;
// [week, newContacted, newReplies, discCalls, paid, notes]
const weeks = [
  ['Jun 22 (baseline)', 8, 0, 5, 1, 'Historical: 8 contacted via recruitment push; 5 interviews + 1 PoC came via direct channels'],
  ['Jun 29', '', '', '', '', ''],
  ['Jul 06', '', '', '', '', ''],
  ['Jul 13', '', '', '', '', ''],
  ['Jul 20', '', '', '', '', ''],
  ['Jul 27', '', '', '', '', ''],
  ['Aug 01 (goal)', '', '', '', '', 'Goal: 10 paid + 5 DPAs active'],
];
weeks.forEach((w, idx) => {
  const n = wkStart + idx;
  const row = cf.getRow(n);
  row.getCell(2).value = w[0]; row.getCell(2).font = { name: FONT, size: 9, bold: true };
  row.getCell(3).value = w[1] === '' ? null : w[1];
  row.getCell(4).value = { formula: idx === 0 ? `=C${n}` : `=D${n - 1}+C${n}`, result: 8 };
  row.getCell(5).value = w[2] === '' ? null : w[2];
  row.getCell(6).value = { formula: idx === 0 ? `=E${n}` : `=F${n - 1}+E${n}`, result: 0 };
  row.getCell(7).value = w[3] === '' ? null : w[3];
  row.getCell(8).value = w[4] === '' ? null : w[4];
  row.getCell(9).value = { formula: `=IFERROR(F${n}/D${n},0)`, result: 0 };
  row.getCell(9).numFmt = '0.0%';
  row.getCell(10).value = w[5];
  for (let i = 3; i <= 9; i++) { row.getCell(i).font = { name: FONT, size: 9 }; row.getCell(i).alignment = { horizontal: 'center' }; }
  row.getCell(10).font = { name: FONT, size: 9 }; row.getCell(10).alignment = { wrapText: true, vertical: 'top' };
  if (idx === 0) [3, 4, 5, 6, 7, 8].forEach(i => row.getCell(i).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GREY } });
});

// ---------- Sheet 3: Interviews ----------
const iw = wb.addWorksheet('Interviews', { properties: { tabColor: { argb: 'FF548235' } }, views: [{ state: 'frozen', ySplit: 1 }] });
iw.columns = [
  { header: '#', width: 4 },
  { header: 'Name', width: 22 },
  { header: 'Role / Specialty', width: 22 },
  { header: 'Location', width: 14 },
  { header: 'Sessions', width: 9 },
  { header: 'Date(s)', width: 18 },
  { header: 'ICP Fit', width: 22 },
  { header: 'Pipeline Status', width: 30 },
  { header: 'WTP Signal', width: 30 },
  { header: 'Key Learnings / Contribution', width: 70 },
  { header: 'Source Doc', width: 40 },
];
styleHeader(iw.getRow(1));
interviews.forEach((it, i) => {
  const row = iw.addRow([i + 1, it.name, it.role, it.loc, it.sessions, it.dates, it.fit, it.stage, it.wtp, it.learn, it.src]);
  row.eachCell(c => { c.font = { name: FONT, size: 10 }; c.alignment = { vertical: 'top', wrapText: true }; });
  row.getCell(2).font = { name: FONT, size: 10, bold: true };
  if (it.fit.startsWith('Strong')) row.getCell(7).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GREEN } };
  else if (it.fit.includes('Dead') || it.fit.includes('Counter')) row.getCell(7).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: RED } };
  else row.getCell(7).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: YELLOW } };
});

// ---------- Sheet 3: Active Pipeline ----------
const ap = wb.addWorksheet('Active Pipeline', { properties: { tabColor: { argb: 'FFBF8F00' } }, views: [{ state: 'frozen', ySplit: 4 }] });
ap.columns = [{ width: 4 }, { width: 22 }, { width: 26 }, { width: 22 }, { width: 24 }, { width: 12 }, { width: 40 }, { width: 10 }];
ap.mergeCells('B1:H1');
ap.getCell('B1').value = 'Active Pipeline — from outreach-tracker.md (last updated Jun 6, 2026)';
ap.getCell('B1').font = { name: FONT, bold: true, size: 13, color: { argb: NAVY } };
ap.mergeCells('B2:H2');
ap.getCell('B2').value = 'Stages: Lead → Contacted → Discovery Call → Demo/PoC Offer → Paid PoC → DPA Signed → Paid Sub → Dead   ·   Goal: 5 Design Partners + 10 Paid by Aug 1, 2026';
ap.getCell('B2').font = { name: FONT, italic: true, size: 9, color: { argb: 'FF7F7F7F' } };
const apHeadVals = ['#', 'Name', 'Clinic / Specialty', 'Source', 'Stage', 'Last Touch', 'Next Action', 'Due'];
const apHead = ap.getRow(4); apHeadVals.forEach((v, i) => apHead.getCell(i + 1).value = v);
styleHeader(apHead);
pipeline.forEach(p => {
  const row = ap.addRow(p);
  row.eachCell(c => { c.font = { name: FONT, size: 10 }; c.alignment = { vertical: 'top', wrapText: true }; });
  row.getCell(2).font = { name: FONT, size: 10, bold: true };
  const stage = p[4];
  if (stage.includes('Paid PoC')) row.getCell(5).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GREEN } };
  else if (stage.includes('Lead')) row.getCell(5).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GREY } };
  else row.getCell(5).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: YELLOW } };
});
ap.addRow([]);
const subRow = ap.addRow(['', 'On-ICP Transition Leads — Jun 01 discovery (reconciled into pipeline · to be worked)']);
ap.mergeCells(subRow.number, 2, subRow.number, 8);
subRow.getCell(2).font = { name: FONT, bold: true, color: { argb: 'FFFFFFFF' } };
subRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF548235' } };
subRow.getCell(2).alignment = { vertical: 'middle' };
subRow.height = 20;
transitionLeads.forEach((p, i) => {
  const row = ap.addRow([11 + i, p.Name, p.Segment, (p.Platform || '') + ' · Jun 01 discovery', 'Lead — On-ICP', '—', 'Send first Mom Test DM (no pitch)', 'Jun 29']);
  row.eachCell(c => { c.font = { name: FONT, size: 10 }; c.alignment = { vertical: 'top', wrapText: true }; });
  row.getCell(2).font = { name: FONT, size: 10, bold: true };
  row.getCell(5).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GREY } };
});

ap.addRow([]);
const dh = ap.addRow(['', 'Dead / Off-ICP', 'Reason', 'Date']);
dh.getCell(2).font = { name: FONT, bold: true, color: { argb: 'FFFFFFFF' } };
dh.getCell(3).font = { name: FONT, bold: true, color: { argb: 'FFFFFFFF' } };
dh.getCell(4).font = { name: FONT, bold: true, color: { argb: 'FFFFFFFF' } };
[2, 3, 4].forEach(i => dh.getCell(i).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFA6A6A6' } });
deadPipeline.forEach(d => {
  const row = ap.addRow(['', d[0], d[1], d[2]]);
  row.getCell(2).font = { name: FONT, size: 10, bold: true };
  row.getCell(3).font = { name: FONT, size: 10 }; row.getCell(3).alignment = { wrapText: true };
  row.getCell(4).font = { name: FONT, size: 10 };
});

// ---------- Sheet 4: All Prospects ----------
const pr = wb.addWorksheet('All Prospects', { properties: { tabColor: { argb: BLUE } }, views: [{ state: 'frozen', ySplit: 1, xSplit: 2 }] });
pr.columns = [
  { header: '#', width: 4 },
  { header: 'Name', width: 24 },
  { header: 'Platform', width: 10 },
  { header: 'Segment', width: 18 },
  { header: 'Practice', width: 30 },
  { header: 'Location', width: 18 },
  { header: 'Score', width: 7 },
  { header: 'ICP Fit', width: 16 },
  { header: 'Status', width: 16 },
  { header: 'Source List', width: 26 },
  { header: 'Pain Quote', width: 55 },
  { header: 'Profile URL', width: 38 },
  { header: 'Post URL', width: 38 },
  { header: 'Notes', width: 55 },
];
styleHeader(pr.getRow(1));
pr.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: 14 } };
prospects.forEach((p, i) => {
  const row = pr.addRow([
    i + 1, p.Name, p.Platform, p.Segment, p.Practice, p.Location,
    p.Score ? Number(p.Score) : '', p.ICPFit, p.Status, p.SourceList,
    p.PainQuote, p.ProfileURL, p.PostURL, p.Notes,
  ]);
  row.eachCell(c => { c.font = { name: FONT, size: 9 }; c.alignment = { vertical: 'top', wrapText: true }; });
  row.getCell(2).font = { name: FONT, size: 9, bold: true };
  row.getCell(7).alignment = { vertical: 'top', horizontal: 'center' };
  const sc = Number(p.Score);
  if (sc >= 9) row.getCell(7).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GREEN } };
  else if (sc >= 7) row.getCell(7).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: YELLOW } };
  else if (sc) row.getCell(7).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GREY } };
  // hyperlinks
  if (p.ProfileURL && p.ProfileURL.startsWith('http')) { row.getCell(12).value = { text: p.ProfileURL, hyperlink: p.ProfileURL }; row.getCell(12).font = { name: FONT, size: 9, color: { argb: 'FF0563C1' }, underline: true }; }
  if (p.PostURL && p.PostURL.startsWith('http')) { row.getCell(13).value = { text: p.PostURL, hyperlink: p.PostURL }; row.getCell(13).font = { name: FONT, size: 9, color: { argb: 'FF0563C1' }, underline: true }; }
});

wb.xlsx.writeFile(OUT).then(() => {
  console.log('Wrote', OUT);
  console.log('Prospects:', prospects.length, '| Interviews:', interviews.length, '| Pipeline:', pipeline.length);
});
