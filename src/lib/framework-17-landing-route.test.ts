import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const source = fs.readFileSync(
  path.join(process.cwd(), "src", "app", "frameworks", "asylum-evidence-documentation-builder", "page.tsx"),
  "utf8",
);

describe("Framework 17 landing-page routes", () => {
  it("binds each publication CTA to its approved destination", () => {
    expect(source).toContain('const demo = "/frameworks/asylum-evidence-documentation-builder/demo";');
    expect(source).toContain('<Action href={demo} primary>Try the Interactive Illustration</Action>');
    expect(source).toContain('<Action href="#research-sources">Review the Research &amp; Sources</Action>');
    expect(source.match(/href="\/research">Return to the Research Dashboard/g)).toHaveLength(2);
    expect(source).toContain('<Action href="mailto:hello@thihsystems.com?subject=Framework%2017%20correction">Help Improve This Framework</Action>');
  });
});
