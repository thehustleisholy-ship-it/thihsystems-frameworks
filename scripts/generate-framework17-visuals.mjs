import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.join(process.cwd(), "frameworks", "17-asylum-evidence-documentation-builder", "visuals");
const sources = path.join(root, "sources");
const exportsDir = path.join(root, "exports");
const master = path.join(root, "master", "framework-17-editorial-master.png");
fs.mkdirSync(sources, { recursive: true });
fs.mkdirSync(exportsDir, { recursive: true });

const footer = "Proposed framework · Synthetic educational illustration · Not legal advice";
const assets = [
  { id: "substack-header", w: 1456, h: 1048, eyebrow: "FRAMEWORK 17", title: ["When the Truth Is Real", "but the Record Is Incomplete"], sub: "Asylum Evidence & Documentation Builder", source: "Caption sources: S1 · S3 · S6 · S7", mode: "left" },
  { id: "website-hero", w: 1600, h: 900, eyebrow: "FRAMEWORK 17", title: ["Organize the record.", "Do not manufacture the story."], sub: "exact · approximate · unknown · conflicted", source: "Source register linked below hero", mode: "left" },
  { id: "open-graph", w: 1200, h: 630, eyebrow: "17", title: ["Asylum Evidence &", "Documentation Builder"], sub: "Framework Friday · July 17, 2026", source: "", mode: "left" },
  { id: "linkedin-landscape", w: 1200, h: 627, eyebrow: "FRAMEWORK 17", title: ["Truth ≠ record completeness"], sub: "AI may organize. It must not judge.", source: "Post sources: S1 · S3 · S6 · S7", mode: "split" },
  { id: "instagram-square", w: 1080, h: 1080, eyebrow: "PRESERVE UNCERTAINTY", title: ["Never fill", "factual gaps."], sub: "approximate → unknown → conflicted", source: "Caption sources: S1 · S3 · S6 · S7", mode: "center" },
  { id: "instagram-portrait", w: 1080, h: 1350, eyebrow: "A SAFER PREPARATION LAYER", title: ["chronology", "provenance", "translations", "conflicts", "counsel questions"], sub: "Organization ends where legal judgment begins.", source: "Caption sources: S1 · S3", mode: "stack" },
  { id: "story-reel-cover", w: 1080, h: 1920, eyebrow: "FRAMEWORK 17", title: ["Truth is not", "a completeness score."], sub: "Asylum Evidence & Documentation Builder", source: "Linked content sources: S1 · S3 · S6 · S7", mode: "center" },
  { id: "x-landscape", w: 1600, h: 900, eyebrow: "UNKNOWN IS VALID DATA", title: ["Conflicts", "stay visible."], sub: "Uncertainty is preserved—not corrected.", source: "Post sources: S1 · S3 · S6 · S7", mode: "left" },
  { id: "pinterest-vertical", w: 1000, h: 1500, eyebrow: "FRAMEWORK 17", title: ["Organize the record", "without manufacturing", "the story"], sub: "inventory → provenance → translation → visible conflicts → qualified review", source: "Description sources: S1 · S3 · S6 · S7", mode: "stack" },
  { id: "statistic-card", w: 1080, h: 1080, eyebrow: "BY DESIGN", title: ["0"], sub: "legal decisions automated", source: "Design fact: asylum-readiness-engine.ts", mode: "zero" },
  { id: "system-map-relationship", w: 1600, h: 900, eyebrow: "HUMAN AND LEGAL BOUNDARIES", title: ["Person confirms facts", "System organizes metadata", "Qualified practitioner reviews law"], sub: "AI supports the middle layer. It never replaces either person.", source: "Representation boundary: S3", mode: "relationship" }
];

const carousel = [
  ["Truth ≠ record completeness.", "A real experience can leave a fragmented record."],
  ["The human pain", "displacement · lost devices · multiple languages · approximate dates · safety risks · repeated retelling"],
  ["The hidden failure", "Software treats uncertainty like an error and coherence like quality."],
  ["The legal-process context", "Current I-589 instructions discuss corroboration, explanations for unavailable evidence, and certified translations. Counsel applies those requirements.", "Card source: S1"],
  ["The proposal", "Map chronology, inventory, provenance, translation needs, missing evidence, conflicts, and legal-review questions."],
  ["AI could", "Sort user-confirmed metadata, find empty provenance fields, and format an approved inventory."],
  ["AI must not", "Invent · judge credibility or eligibility · coach testimony · predict · advise · resolve conflicts · file"],
  ["Not a legal product.", "Open the framework + synthetic demo. Lived experience and practitioners: what needs correction?", "Card sources: S1 · S3 · S6 · S7"]
];

function esc(value) { return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"); }
function wrap(text, max) {
  const words = text.split(" "); const lines = []; let line = "";
  for (const word of words) { const next = line ? `${line} ${word}` : word; if (next.length > max && line) { lines.push(line); line = word; } else line = next; }
  if (line) lines.push(line); return lines;
}
function tspans(lines, x, y, size, gap, anchor = "start", weight = 650) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="#f1eadb" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}">${lines.map((line, i) => `<tspan x="${x}" dy="${i ? gap : 0}">${esc(line)}</tspan>`).join("")}</text>`;
}
function svg(asset) {
  const { w, h, eyebrow, title, sub, source, mode } = asset;
  const portrait = h > w * 1.15;
  const margin = Math.round(Math.min(w, h) * .065);
  const titleSize = mode === "zero" ? Math.round(Math.min(w,h) * .34) : mode === "stack" || mode === "relationship" ? Math.round(Math.min(w,h) * .068) : Math.round(Math.min(w,h) * .078);
  const x = mode === "center" || mode === "zero" ? w/2 : margin;
  const anchor = mode === "center" || mode === "zero" ? "middle" : "start";
  const artX = portrait ? margin : Math.round(w * .57);
  const artY = portrait ? Math.round(h * .57) : margin;
  const artW = portrait ? w - margin*2 : w - artX - margin;
  const artH = portrait ? Math.round(h * .28) : h - margin*2;
  const titleY = mode === "center" || mode === "zero" ? Math.round(h*.31) : mode === "stack" || mode === "relationship" ? Math.round(h*.19) : Math.round(h*.29);
  const bgOpacity = mode === "center" || portrait ? .26 : .42;
  const titleLines = mode === "relationship" ? title : title;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#050607"/><stop offset="1" stop-color="#0b211b"/></linearGradient><clipPath id="clip"><rect width="${w}" height="${h}" rx="0"/></clipPath></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <image href="../master/framework-17-editorial-master.png" x="${artX}" y="${artY}" width="${artW}" height="${artH}" preserveAspectRatio="xMidYMid slice" opacity="${bgOpacity}" clip-path="url(#clip)"/>
  <rect x="${margin}" y="${margin}" width="${w-margin*2}" height="${h-margin*2}" rx="${Math.round(margin*.35)}" fill="none" stroke="#f1eadb" stroke-opacity=".14"/>
  <circle cx="${margin}" cy="${margin}" r="5" fill="#42d6a4"/><text x="${mode==='center'||mode==='zero'?w/2:margin}" y="${Math.round(h*.105)}" text-anchor="${anchor}" fill="#e4a84c" font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(Math.min(w,h)*.021)}" font-weight="700" letter-spacing="3">${esc(eyebrow)}</text>
  ${tspans(titleLines, x, titleY, titleSize, Math.round(titleSize*1.1), anchor, mode === "zero" ? 750 : 650)}
  ${mode === "relationship" ? relationship(w,h,margin) : mode === "zero" ? prohibited(w,h) : ""}
  ${tspans(wrap(sub, portrait ? 34 : 48), x, Math.round(h*(mode==='center'||mode==='zero'?.58:.70)), Math.round(Math.min(w,h)*.027), Math.round(Math.min(w,h)*.036), anchor, 450)}
  <line x1="${margin}" y1="${h-margin*1.55}" x2="${w-margin}" y2="${h-margin*1.55}" stroke="#42d6a4" stroke-opacity=".4"/>
  <text x="${margin}" y="${h-margin}" fill="#f1eadb" fill-opacity=".82" font-family="Arial, Helvetica, sans-serif" font-size="${Math.max(13,Math.round(Math.min(w,h)*.014))}">${esc(footer)}</text>
  ${source ? `<text x="${w-margin}" y="${h-margin}" text-anchor="end" fill="#e4a84c" font-family="Arial, Helvetica, sans-serif" font-size="${Math.max(12,Math.round(Math.min(w,h)*.012))}">${esc(source)}</text>` : ""}
  </svg>`;
}
function relationship(w,h,m) { const y=Math.round(h*.56), xs=[m,w/2,w-m]; return `<path d="M${xs[0]} ${y}H${xs[2]}" stroke="#42d6a4" stroke-width="3"/><path d="M${w/2} ${y}v${h*.11}" stroke="#e4a84c" stroke-width="3"/><circle cx="${xs[0]}" cy="${y}" r="14" fill="#42d6a4"/><circle cx="${xs[1]}" cy="${y}" r="14" fill="#e4a84c"/><circle cx="${xs[2]}" cy="${y}" r="14" fill="#42d6a4"/><text x="${w/2}" y="${y+h*.16}" text-anchor="middle" fill="#e4a84c" font-family="Arial" font-size="22">AI: metadata organization only</text>`; }
function prohibited(w,h) { const items=["eligibility","credibility","testimony","outcomes","legal advice","conflict repair","filings"]; return items.map((v,i)=>{const a=(Math.PI*2*i/items.length)-Math.PI/2, r=w*.34, x=w/2+Math.cos(a)*r,y=h/2+Math.sin(a)*r;return `<text x="${x}" y="${y}" text-anchor="middle" fill="#e4a84c" font-family="Arial" font-size="22">${v}</text>`}).join(""); }

async function writeAsset(asset) {
  const source = path.join(sources, `${asset.id}.svg`);
  fs.writeFileSync(source, svg(asset));
  await sharp(source).png({ compressionLevel: 9, palette: false }).toColourspace("srgb").toFile(path.join(exportsDir, `${asset.id}.png`));
}
async function main() {
  for (const asset of assets) await writeAsset(asset);
  for (let i=0;i<carousel.length;i++) {
    const [head, body, source=""] = carousel[i];
    await writeAsset({ id:`instagram-carousel-${String(i+1).padStart(2,"0")}`, w:1080, h:1350, eyebrow:`${String(i+1).padStart(2,"0")} / 08 · FRAMEWORK 17`, title:wrap(head,24), sub:body, source, mode:"stack" });
  }
  fs.copyFileSync(master, path.join(exportsDir, "editorial-master-reference.png"));
}
main().catch(error => { console.error(error); process.exit(1); });