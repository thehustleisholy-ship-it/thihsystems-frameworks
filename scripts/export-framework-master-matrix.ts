import fs from "fs";
import path from "path";
import { frameworkMasterMatrix } from "../src/lib/framework-master-matrix";

interface ExportFormat {
  format: "json" | "csv" | "markdown";
  includeFields?: string[];
  outputPath?: string;
}

function exportAsJSON(
  data: typeof frameworkMasterMatrix,
  outputPath?: string
): string {
  const filePath =
    outputPath || path.join(process.cwd(), "data", "framework-matrix.json");
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`✓ Exported to ${filePath}`);
  return filePath;
}

function exportAsCSV(
  data: typeof frameworkMasterMatrix,
  includeFields?: string[],
  outputPath?: string
): string {
  const filePath =
    outputPath || path.join(process.cwd(), "data", "framework-matrix.csv");
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  if (!data.length) {
    console.log("No frameworks to export");
    return filePath;
  }

  const allFields = includeFields || Object.keys(data[0]);
  const headers = allFields.join(",");

  const rows = data.map((framework: any) =>
    allFields
      .map((field) => {
        const value = framework[field];
        const stringValue =
          typeof value === "string"
            ? value.replace(/"/g, '""')
            : String(value || "");
        return `"${stringValue}"`;
      })
      .join(",")
  );

  const csv = [headers, ...rows].join("\n");
  fs.writeFileSync(filePath, csv);
  console.log(`✓ Exported to ${filePath}`);
  return filePath;
}

function exportAsMarkdown(
  data: typeof frameworkMasterMatrix,
  outputPath?: string
): string {
  const filePath =
    outputPath ||
    path.join(process.cwd(), "data", "framework-matrix-summary.md");
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  const markdown = `# Framework Master Matrix Export

Generated: ${new Date().toISOString()}

## Summary
- Total Frameworks: ${data.length}
- Generated on: ${new Date().toLocaleDateString()}

## Frameworks

${data
  .map(
    (framework: any) => `
### ${framework.framework_number}: ${framework.framework_title}

**Slug:** \`${framework.slug}\`
**Category:** ${framework.category}
**Evidence Confidence:** Level ${framework.evidence_confidence}
**Risk Level:** ${framework.risk_level}

**Research:** ${framework.documented_research}

**Statistics:** ${framework.statistics}

**Economic Impact:** ${framework.economic_impact}

**Implementation Roadmap:** ${framework.implementation_roadmap}

**Procurement Readiness:** ${framework.procurement_readiness}
**Pilot Readiness:** ${framework.pilot_readiness}
**Policy Readiness:** ${framework.policy_readiness}

**Source Status:** ${framework.source_status}
**Public Claim Status:** ${framework.public_claim_status}

---
`
  )
  .join("\n")}

`;

  fs.writeFileSync(filePath, markdown);
  console.log(`✓ Exported to ${filePath}`);
  return filePath;
}

export async function exportFrameworkMatrix(
  options: ExportFormat
): Promise<void> {
  const { format, includeFields, outputPath } = options;

  console.log(`Exporting framework matrix as ${format}...`);

  switch (format) {
    case "json":
      exportAsJSON(frameworkMasterMatrix, outputPath);
      break;
    case "csv":
      exportAsCSV(frameworkMasterMatrix, includeFields, outputPath);
      break;
    case "markdown":
      exportAsMarkdown(frameworkMasterMatrix, outputPath);
      break;
    default:
      console.error(`Unknown export format: ${format}`);
      process.exit(1);
  }
}

// CLI entry point
if (require.main === module) {
  const format = (process.argv[2] || "json") as "json" | "csv" | "markdown";
  const outputPath = process.argv[3];

  exportFrameworkMatrix({ format, outputPath }).catch((err) => {
    console.error("Export failed:", err);
    process.exit(1);
  });
}
