import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

type Asset = { id: string; export: string; source: string; width: number; height: number; format: string; alt: string; attribution: string };
type Inventory = { assets: Asset[] };
const root = path.join(process.cwd(), "frameworks", "17-asylum-evidence-documentation-builder");
const visualRoot = path.join(root, "visuals");
const inventory = JSON.parse(fs.readFileSync(path.join(visualRoot, "visual-assets.json"), "utf8")) as Inventory;

function pngSize(file: string) {
  const bytes = fs.readFileSync(file);
  expect(bytes.subarray(1, 4).toString("ascii")).toBe("PNG");
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20), bytes: bytes.length };
}

describe("Framework 17 finished visual release", () => {
  it("covers every required visual export, including carousel and demo variants", () => {
    expect(inventory.assets).toHaveLength(21);
    const ids = inventory.assets.map(asset => asset.id);
    ["substack-header","website-hero","open-graph","linkedin-landscape","instagram-square","instagram-portrait","story-reel-cover","x-landscape","pinterest-vertical","statistic-card","system-map-relationship","interactive-demo-desktop","interactive-demo-mobile"].forEach(id => expect(ids).toContain(id));
    expect(ids.filter(id => id.startsWith("instagram-carousel-"))).toHaveLength(8);
  });

  it.each(inventory.assets)("validates $id final export and editable source", asset => {
    const exportPath = path.resolve(visualRoot, asset.export);
    const sourcePath = path.resolve(visualRoot, asset.source);
    expect(fs.existsSync(exportPath), `${asset.id} export missing`).toBe(true);
    expect(fs.existsSync(sourcePath), `${asset.id} source missing`).toBe(true);
    const actual = pngSize(exportPath);
    expect(actual.width).toBe(asset.width);
    expect(actual.height).toBe(asset.height);
    expect(asset.format).toBe("png");
    expect(actual.bytes).toBeGreaterThan(10_000);
    expect(actual.bytes).toBeLessThan(5_000_000);
    expect(asset.alt.trim().length).toBeGreaterThan(30);
    expect(asset.attribution.trim().length).toBeGreaterThan(10);
  });

  it("binds the verified Open Graph export and alt record to the route", () => {
    const route = path.join(process.cwd(), "src", "app", "frameworks", "asylum-evidence-documentation-builder", "demo");
    const source = fs.readFileSync(path.join(visualRoot, "exports", "open-graph.png"));
    const bound = fs.readFileSync(path.join(route, "opengraph-image.png"));
    expect(bound.equals(source)).toBe(true);
    expect(fs.readFileSync(path.join(route, "opengraph-image.alt.txt"), "utf8").trim()).toContain("Framework 17");
  });
});
