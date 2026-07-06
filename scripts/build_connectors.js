const ExcelJS = require('exceljs');

async function build() {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Connectors');

  const headers = [
    'Name','Relationship to Ash','Role / Title','Organization',
    'Connected To (Communities / Networks)','Connector Type',
    'Helpfulness History','Interest in PhysicianLabs','Priority',
    'Next Action','Notes'
  ];
  const colWidths = [22,22,22,22,42,30,40,32,12,42,52];

  ws.columns = headers.map((h, i) => ({ header: h, key: h, width: colWidths[i] }));

  ws.getRow(1).eachCell(cell => {
    cell.font = { name: 'Arial', bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F4E79' } };
    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
    cell.border = {
      top:{style:'thin',color:{argb:'FFCCCCCC'}},
      bottom:{style:'thin',color:{argb:'FFCCCCCC'}},
      left:{style:'thin',color:{argb:'FFCCCCCC'}},
      right:{style:'thin',color:{argb:'FFCCCCCC'}}
    };
  });
  ws.getRow(1).height = 36;

  const priorityColors = {
    'Very High': 'FFC00000',
    'High': 'FFE26B0A',
    'Medium': 'FF375623',
    'Low': 'FF595959'
  };

  const connectors = [
    ['Rob (via Saf Malleck)','Referred by brother Saf Malleck, MD','CPA / Accountant specializing in physician professional corporations','Independent (Ontario)','Ontario physician client base; physician CPA referral network; independent clinic owners navigating incorporation timing and tax structure','Medical Financial Advisory','Indirectly instrumental — found Saf\'s $200K+ tax mistake after 3 years; the exact pain PhysicianLabs prevents; introduced through Saf','Unknown — not yet contacted directly','Very High','Ask Saf for a warm intro to Rob; frame as: want to understand the most common financial mistakes physicians make at setup and how an advisor like him navigates that conversation','Sees Marcus-profile clients at the exact transition moment. A referral partnership is mutually beneficial — PhysicianLabs sends structured clients his way; he refers physicians who need guidance before they make the costly mistakes. Source: the-one-problem-2026-05-11.md'],
    ['AAPP Executive Director / Board Member','Unknown — to be identified','Executive Director or Board Member','American Academy of Private Physicians (AAPP)','National concierge and DPC physician membership base; AAPP conference attendees; concierge medicine transition community; physician association leadership network','Physician Association (Concierge/DPC)','No contact yet — identified as highest-priority distribution channel in ICP decision document (May 31)','Unknown — not yet contacted','Very High','Find AAPP executive director via aapp.md or LinkedIn; approach as a resource for physicians asking how to structure the transition to concierge practice; offer to contribute an article or speak at their annual conference','The AAPP is the professional association for the sharpest ICP sub-segment (concierge/DPC). A board or staff connection gives newsletter placement, conference access, and warm referrals to physicians in active transition. Source: icp-decision-2026-05-31.md'],
    ['UW School of Medicine Residency Program Director','University contact — to be identified via Ash\'s Seattle network','Residency Program Director','University of Washington School of Medicine','UW residency graduating classes annually; residents choosing between hospital employment and independence; Seattle/PNW physician pipeline','University / Medical Education','Not yet contacted — David Jorjani suggested walking up to UW during graduation season (Apr 28 session)','Unknown — not yet contacted','High','Identify 1-2 UW residency program directors in target specialties (IM, FM, surgical) via UW Medicine website; email as a researcher studying the hospital-to-independent transition for graduating attendings; ask for 20 min','Program directors know which of their graduating residents are planning to go independent. A warm relationship here gives annual access to 5-10 Marcus-profile candidates per class. Source: transcript-2026-04-28.md'],
    ['Tiffany Sizemore-Ruiz / DPC Frontier Leader','Unknown — identified via ICP research','DPC Community Leader / Advocate','DPC Frontier (dpcfrontier.com)','DPC physician community (largest active DPC forum in the US); physicians in active hospital-to-DPC transition; DPC conferences and events','Physician Community Leader (DPC)','No contact yet — identified as highest-priority distribution community in ICP decision document (May 31)','Unknown — not yet contacted','High','Approach via DPC Frontier website or LinkedIn; offer to contribute a guest post on the top 3 financial structure mistakes physicians make when launching a DPC practice; value-first, no pitch','DPC Frontier is the most active online community for physicians transitioning to DPC. A content relationship or community mention would reach hundreds of Marcus-profile physicians mid-transition. Source: icp-decision-2026-05-31.md'],
    ['Larson Financial / Physician Wealth Services Advisor','Unknown — to be identified','Physician Wealth Advisor','Larson Financial Group or Physician Wealth Services','Mid-career physician client base (exact Marcus profile); physicians discussing income structuring, professional corporation setup, and practice transition planning','Medical Financial Advisory','No contact yet — identified as connector type given overlap with ICP financial pain','Unknown — not yet contacted','High','Identify a local (Seattle/PNW) or nationally-known physician wealth advisor at Larson Financial or Physician Wealth Services via LinkedIn; approach as a founder building a complementary product; explore referral partnership','Physician wealth advisors hear transition intent from Marcus-profile physicians before any other professional does. A referral partnership (PhysicianLabs handles operational/legal setup; advisor handles wealth strategy) is a natural complement with zero overlap.'],
    ['Saf Malleck, MD','Brother','Orthopedic Surgeon','Independent clinic, Ontario','Ontario physician community; Matthew Tucci (solo ortho); PT in his building (10-person PT practice); Linda Xin (Rejuvenation Dermatology, Oakville); Dr. Phan/Vu (medical finance webinars); junior hospital colleagues; Facebook doctor groups','Physician Network / Family','Highest helpfulness in portfolio — 2 in-depth interviews, WTP signal ($1K/$10K), multiple warm referrals, intro to Dr. Phan/Vu pending','Very High — confirmed WTP, emotionally invested in the problem, brother of founder','Very High','Ask for warm intro to Matthew Tucci today; confirm Dr. Phan/Vu email received; ask for intro to PT in building and Linda Xin','Best source of warm referrals in current network. Has named 5+ referrals not yet contacted. Facebook doctor groups access not yet obtained.'],
    ['Vince','Mutual friend','Unknown','Unknown','Physician network (connected Ash to Shaun Cowan); likely broader professional network','Personal Network / Connector','Made one warm introduction (Shaun Cowan) proactively','Unknown — not yet engaged on PhysicianLabs specifically','Medium','Re-engage; share what PhysicianLabs is building; ask if he knows other physicians considering independence','Demonstrated willingness to make warm physician introductions. Explore his network depth.'],
    ['Dr. Phan / Dr. Vu','Referred by Saf Malleck','Physician / Medical Finance Educator','Independent (Toronto)','Toronto physician community; medical finance WhatsApp group; physician finance webinar attendees','Physician Community Leader / Educator','Not yet contacted — intro pending from Saf (email not confirmed received)','Unknown — not yet engaged','Very High','Confirm with Saf that email was sent; follow up directly via WhatsApp if contact info obtained','Runs medical finance webinars for physicians. If warm, this is a direct pipeline into the ICP. Highest-priority untapped connector in the network.'],
    ['Jim Dahle (u/WCInvestor)','Reddit community leader','Physician / Founder / Media','White Coat Investor (whitecoatinvestor.com)','500K+ physician readers; r/whitecoatinvestor (500K+ members); physician financial independence community nationally','Physician Community Leader / Media','No direct contact yet — identified from r/whitecoatinvestor S-corp thread','Unknown — not yet contacted','High','Approach via LinkedIn or WCI contact form; offer guest post or resource for physicians asking setup questions; value-first framing only','Highest-reach connector in physician finance/independence space. A WCI newsletter or podcast mention reaches more ICP prospects than any other single channel.'],
    ['Samir Master, MD MBA','Customer interview subject','Dermatologist / Founder','Dermatology Arts, Bellevue WA','100+ derm practices on ModMed nationally; Pro Alliance (IPA); WWMG (Western Washington Medical Group); Bellevue physician community','Physician Community / Competitor-Adjacent','Gave in-depth interview May 28; introduced Pro Alliance and WWMG as distribution channels; invited Ash to return when there is something concrete','Medium — building competing product but invited ongoing relationship; not hostile','High','Return when first prototype or paying customer exists; ask for Pro Alliance and WWMG admin introductions independently','ALERT: Building competing product. Treat as market intelligence source and connector, not prospect. Pro Alliance and WWMG intros are the primary value from this relationship.'],
    ['Matthew Tucci','Referred by Saf Malleck','Orthopedic Surgeon','Solo practice (then group), Ontario','Ontario physician community; Oshawa physician network; solo-to-group practice owner network','Physician Network','Not yet contacted','Unknown — not yet engaged','High','Ask Saf for warm intro today; frame as: want to learn how Matthew navigated the first year solo before building his group','First-hand experience of the exact transition journey PhysicianLabs is built for. Broke from pyramid scheme clinic and built his own group. Story mirrors Marcus archetype closely.'],
    ['Pro Alliance Admin','Referred by Samir Master','Association Administrator','Pro Alliance (IPA)','Independent physicians shedding pods from large health systems; Pacific Northwest physician independence community','Physician Association / Distribution Channel','Not yet contacted — name/contact not obtained','Unknown','High','Ask Samir Master for specific admin contact name and email; approach as resource for transitioning physicians','IPAs shedding pods = physicians in active transition = direct pipeline to Marcus archetype. Warm channel if admin intro is secured.'],
    ['David Jorjani','FI Mentor (Founder Institute)','Startup Mentor / Investor','Founder Institute','FI mentor network; healthcare startup founders; IM physician community (partner is IM resident at top-5 US hospital)','Mentor / Investor Network','Gave detailed 25-min coaching session Apr 28; coined Business Doula framing; offered to stay in touch','High — confirmed he sees something here; offered ongoing engagement','High','Send progress update; ask for introductions to FI mentors with healthcare practice backgrounds','Partner is IM resident at top-5 US hospital — potential future ICP interview. Referenced Alex Hormozi Gym Launch analogy unprompted.'],
    ['Chelsea Parkman','FI Mentor (Founder Institute)','Business Coach / Startup Mentor','Founder Institute','Profit improvement coaching network (healthcare); independent clinic owners (PT, dental); FI mentor network','Mentor / Connector / Community','Strong positive reaction to pitch; coined business in a box; proactively offered to research healthcare coaching network contacts','Very High — immediate resonance; personal client of independent PT clinic and dental practice','High','Follow up to receive promised healthcare coaching network contacts; ask about Vancouver healthcare conference','LinkedIn: https://www.linkedin.com/in/chelseaparkman/ — Vancouver healthcare conference ~$650 ticket, drivable from Seattle.'],
    ['KT McBratney','Investor / Pitch Reviewer','Investor / Advisor','Unknown (FI ecosystem)','Investor network; healthcare startup founders; pitch community','Investor / Advisor','Gave detailed narrative pitch feedback May 11; specific and actionable coaching on story structure','Medium — engaged seriously; gave prescriptive fix (one doctor story spine)','Medium','Send updated pitch using Marcus story; ask if she knows investors focused on healthcare tools for independent practitioners','Feedback focused on narrative clarity not viability. Nicole (co-reviewer same session) gave reinforcing feedback.'],
    ['Marc Krejci','Mentor Panel Reviewer','Startup Mentor','Founder Institute','FI mentor network; startup investor community','Mentor / Investor Network','Reviewed pitch May 20; gave 2/5 on research thoroughness — critical but constructive','Medium — low score reflects pre-validation stage not dismissal','Medium','Re-engage after first paid customer secured; update on experiment result','Critical gap he flagged: no paid commitment. First payment resolves his primary objection entirely.'],
    ['Carmela Fortin','Mentor Panel Reviewer','Startup Mentor','Founder Institute','FI mentor network; startup community','Mentor / Investor Network','Reviewed pitch May 20; gave 8/15 — more favorable; highlighted strong 3-week traction signal','Medium-High — recognized LOIs and design partner signal as meaningful early traction','Medium','Re-engage after first paid customer; mention ICP refinement as evidence of learning velocity','Noted three-tier revenue model as well-structured.'],
  ];

  connectors.forEach((row, i) => {
    const rowNum = i + 2;
    const exRow = ws.addRow(row);
    const isAlt = rowNum % 2 === 0;
    exRow.height = 80;
    exRow.eachCell((cell, colNum) => {
      cell.font = { name: 'Arial', size: 10 };
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: isAlt ? 'FFEBF3FB' : 'FFFFFFFF' } };
      cell.alignment = { horizontal: 'left', vertical: 'top', wrapText: true };
      cell.border = {
        top:{style:'thin',color:{argb:'FFCCCCCC'}},
        bottom:{style:'thin',color:{argb:'FFCCCCCC'}},
        left:{style:'thin',color:{argb:'FFCCCCCC'}},
        right:{style:'thin',color:{argb:'FFCCCCCC'}}
      };
      if (colNum === 9 && priorityColors[cell.value]) {
        cell.font = { name: 'Arial', size: 10, bold: true, color: { argb: priorityColors[cell.value] } };
      }
    });
  });

  ws.views = [{ state: 'frozen', ySplit: 1 }];

  const lg = wb.addWorksheet('Legend');
  lg.getCell('A1').value = 'PhysicianLabs — Connector Tracker';
  lg.getCell('A1').font = { name: 'Arial', bold: true, size: 14 };
  lg.getCell('A3').value = 'Priority Key';
  lg.getCell('A3').font = { name: 'Arial', bold: true, size: 11 };

  const legend = [
    ['Very High','Active pipeline or highest-value untapped connector; action this week'],
    ['High','Strong connector potential; action within 2 weeks'],
    ['Medium','Useful connector; engage after higher-priority actions are done'],
    ['Low','Monitor; re-engage when relevant']
  ];
  legend.forEach(([p, d], i) => {
    const r = 5 + i;
    lg.getCell('A' + r).value = p;
    lg.getCell('A' + r).font = { name: 'Arial', bold: true, size: 10, color: { argb: priorityColors[p] || 'FF000000' } };
    lg.getCell('B' + r).value = d;
    lg.getCell('B' + r).font = { name: 'Arial', size: 10 };
  });

  lg.getCell('A10').value = 'Connector Types';
  lg.getCell('A10').font = { name: 'Arial', bold: true, size: 11 };
  const types = [
    ['Physician Network','Physicians with warm referral access to other physicians in or near the ICP'],
    ['Mentor / Investor Network','FI mentors, advisors, investors who can provide introductions to both customers and capital'],
    ['Physician Community Leader / Educator','Physicians who run communities, newsletters, podcasts, or webinars for other physicians'],
    ['Physician Association / Distribution Channel','Associations, IPAs, or physician groups that represent clusters of ICP-fit physicians'],
    ['Personal Network / Connector','Non-physician contacts with demonstrated willingness to make warm introductions'],
    ['Competitor-Adjacent','Contacts building in adjacent space; valuable for market intelligence and warm referrals'],
  ];
  types.forEach(([t, d], i) => {
    const r = 12 + i;
    lg.getCell('A' + r).value = t;
    lg.getCell('A' + r).font = { name: 'Arial', bold: true, size: 10 };
    lg.getCell('B' + r).value = d;
    lg.getCell('B' + r).font = { name: 'Arial', size: 10 };
  });
  lg.getColumn('A').width = 35;
  lg.getColumn('B').width = 70;

  const outPath = 'C:/Users/Admin/Documents/MyNewStartup/marketing/strategy/business-development/connectors.xlsx';
  await wb.xlsx.writeFile(outPath);
  console.log('Saved: ' + outPath);
}

build().catch(console.error);
