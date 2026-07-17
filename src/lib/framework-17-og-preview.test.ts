import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

function dimensions(file: string) {
  const bytes = fs.readFileSync(file);
  expect(bytes.subarray(1, 4).toString("ascii")).toBe("PNG");
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

describe("Framework 17 social-sharing preview", () => {
  const root = process.cwd();
  const source = path.join(root, "frameworks", "17-asylum-evidence-documentation-builder", "visuals", "exports", "open-graph.png");
  const publicAsset = path.join(root, "public", "framework-17", "open-graph.png");
  const preview = path.join(root, "frameworks", "17-asylum-evidence-documentation-builder", "verification", "social-sharing-preview.png");

  it("keeps source, public asset, and captured share preview at 1200x630", () => {
    expect(dimensions(source)).toEqual({ width: 1200, height: 630 });
    expect(dimensions(publicAsset)).toEqual({ width: 1200, height: 630 });
    expect(dimensions(preview)).toEqual({ width: 1200, height: 630 });
    expect(fs.readFileSync(publicAsset).equals(fs.readFileSync(source))).toBe(true);
  });

  it("declares the intended Open Graph copy, dimensions, path, and alt text", () => {
    const page = fs.readFileSync(path.join(root, "src", "app", "frameworks", "asylum-evidence-documentation-builder", "demo", "page.tsx"), "utf8");
    expect(page).toContain("Framework 17: Asylum Evidence & Documentation Builder");
    expect(page).toContain("/framework-17/open-graph.png");
    expect(page).toContain("width: 1200");
    expect(page).toContain("height: 630");
    expect(page).toContain("connected evidence and provenance nodes");
  });
});
