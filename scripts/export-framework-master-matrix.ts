import fs from "fs";
import path from "path";
import {
  frameworkMasterMatrix,
  type FrameworkMatrixEntry,
} from "../src/lib/framework-master-matrix";

export type ExportFormat = "json" | "csv" | "markdown";

function serializeCell(value: unknown): string {
  if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
    return JSON.stringify(value);
  }
  return value === null || value === undefined ? "" : String(value);
}

export function renderMatrixJSON(data: FrameworkMatrixEntry[]): string {
  return `${JSON.stringify(data, null, 2)}\n`;
}

export function renderMatrixCSV(data: FrameworkMatrixEntry[]): string {
  if (!data.length) return "";
  const fields = Object.keys(data[0]) as Array<keyof FrameworkMatrixEntry>;
  const rows = data.map((framework) =>
    fields
      .map((field) => `"${serializeCell(framework[field]).replace(/"/g, '""')}"`)
      .join(","),
  );
  return [fields.join(","), ...rows].join("\n") + "\n";
}

export function renderMatrixMarkdown(data: FrameworkMatrixEntry[]): string {
  const frameworks = data
    .map(
      (framework) => `## ${framework.framework_number}: ${framework.framework_title}

- **Slug:** \`${framework.slug}\`
- **Maturity:** ${framework.maturity_stage}
- **Preview:** ${framework.preview_type === "interactive-prototype" ? "Interactive Prototype" : "Concept Preview"}
- **Evidence:** ${framework.source_status}
- **Public route:** \`${framework.framework_url}\`
- **Preview route:** \`${framework.demo_url}\`
`,
    )
    .join("\n");

  return `# Framework Master Matrix Export

Generated from \`src/lib/framework-master-matrix.ts\`. Do not edit manually.

- **Total active frameworks:** ${data.length}

${frameworks}`;
}

export const matrixExportPaths: Record<ExportFormat, string> = {
  json: path.join(process.cwd(), "public", "data", "framework-master-matrix.json"),
  csv: path.join(process.cwd(), "public", "data", "framework-master-matrix.csv"),
  markdown: path.join(process.cwd(), "public", "data", "framework-master-matrix.md"),
};

export function writeMatrixExport(format: ExportFormat): void {
  const renderers = {
    json: renderMatrixJSON,
    csv: renderMatrixCSV,
    markdown: renderMatrixMarkdown,
  };
  const outputPath = matrixExportPaths[format];
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, renderers[format](frameworkMasterMatrix));
  console.log(`Exported ${format} to ${outputPath}`);
}

export function writeAllMatrixExports(): void {
  (Object.keys(matrixExportPaths) as ExportFormat[]).forEach(writeMatrixExport);
}

if (require.main === module) {
  const requested = process.argv[2];
  if (requested && requested !== "all" && !(requested in matrixExportPaths)) {
    throw new Error(`Unknown export format: ${requested}`);
  }
  if (!requested || requested === "all") writeAllMatrixExports();
  else writeMatrixExport(requested as ExportFormat);
}