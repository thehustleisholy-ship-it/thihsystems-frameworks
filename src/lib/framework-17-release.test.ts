import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

type Manifest = { applicableRequirements: Record<string, string[]> };
const root = path.join(process.cwd(), "frameworks", "17-asylum-evidence-documentation-builder");

describe("Framework 17 release completeness", () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, "release-manifest.json"), "utf8")) as Manifest;
  const required = Object.values(manifest.applicableRequirements).flat();

  it.each(required)("includes required asset %s", relative => {
    expect(fs.existsSync(path.resolve(root, relative))).toBe(true);
  });

  it("provides all thirteen native social placements", () => {
    const social = fs.readFileSync(path.join(root, "publication", "SOCIAL-NATIVE.md"), "utf8");
    ["LinkedIn — personal", "LinkedIn — THIHsystems", "Instagram — caption", "Instagram — 8-card", "Instagram — Stories", "Instagram — Reel", "X — standalone", "X — educational thread", "Substack newsletter", "Substack Notes", "Facebook", "Pinterest", "30-second video", "60-second video"].forEach(label => expect(social).toContain(label));
  });

  it("provides all thirteen visual specifications", () => {
    const visuals = fs.readFileSync(path.join(root, "publication", "VISUAL-ASSET-MANIFEST.md"), "utf8");
    ["Substack header", "Website hero", "Open Graph", "LinkedIn landscape", "Instagram square", "Instagram portrait", "Instagram carousel", "Story/Reel cover", "X landscape", "Pinterest vertical", "Statistic card", "System-map relationship card", "Interactive-demo screenshot"].forEach(label => expect(visuals).toContain(label));
  });
});
