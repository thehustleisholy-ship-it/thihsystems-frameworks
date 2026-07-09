# Women’s Health Interactive Framework Preview Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Framework 01’s static synthetic dashboard with a private, deterministic, interactive preview whose controls update evidence confidence, heatmap, insights, timeline, and visit-summary outputs.

**Architecture:** Keep the route as a Server Component and place all state in one focused Client Component. Put every calculation and copy gate in a pure TypeScript engine so deterministic behavior can be unit tested independently and every visible panel consumes one derived payload.

**Tech Stack:** Next.js 16.2 App Router, React 19.2, TypeScript, Tailwind CSS 4, Vitest, Testing Library, Playwright CLI

---

## File Map

- Create `src/app/frameworks/womens-health-longitudinal-dashboard/demo/framework-preview-engine.ts`: types, preset seeds, bounds, evidence gates, heatmap calculations, timeline compiler, and summary compiler.
- Create `src/app/frameworks/womens-health-longitudinal-dashboard/demo/framework-preview-engine.test.ts`: deterministic engine and threshold tests.
- Create `src/app/frameworks/womens-health-longitudinal-dashboard/demo/InteractiveFrameworkPreview.tsx`: the sole client boundary and accessible workspace UI.
- Create `src/app/frameworks/womens-health-longitudinal-dashboard/demo/InteractiveFrameworkPreview.test.tsx`: preset, slider, threshold, and reset behavior tests.
- Create `vitest.config.mts` and `vitest.setup.ts`: jsdom test environment and DOM matchers.
- Modify `package.json` and `package-lock.json`: add the test command and test-only dependencies.
- Replace `src/app/frameworks/womens-health-longitudinal-dashboard/demo/page.tsx`: retain server metadata/header and compose the interactive island.
- Modify `src/app/globals.css`: add token-based slider and reduced-motion styles.
- Modify `src/lib/framework-content.ts`: remove Framework 01’s now-unused `phaseHeatmap`, `timeline`, and `insights` exports.

### Task 1: Establish the Test Harness

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `vitest.config.mts`
- Create: `vitest.setup.ts`

- [ ] **Step 1: Read the repo-local Next.js guidance**

Run:

```powershell
Get-Content -Raw node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md
Get-Content -Raw node_modules/next/dist/docs/01-app/03-api-reference/01-directives/use-client.md
Get-Content -Raw node_modules/next/dist/docs/01-app/02-guides/testing/vitest.md
```

Expected: the installed Next.js 16.2 documentation confirms a narrow `'use client'` boundary and the supported Vitest setup.

- [ ] **Step 2: Install the test-only packages**

Run:

```powershell
npm install -D vitest jsdom @vitejs/plugin-react @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

Expected: `package.json` and `package-lock.json` include only development dependencies.

- [ ] **Step 3: Add the test script**

Add to `package.json`:

```json
"test": "vitest run"
```

- [ ] **Step 4: Configure Vitest**

Create `vitest.config.mts`:

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
```

Create `vitest.setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 5: Prove the harness runs**

Run: `npm test`

Expected: PASS with “No test files found” only if Vitest exits successfully; otherwise add `--passWithNoTests` temporarily for this single harness check and remove it when Task 2 adds the first test.

- [ ] **Step 6: Commit the harness**

```powershell
git add package.json package-lock.json vitest.config.mts vitest.setup.ts
git commit -m "test: add interactive preview test harness"
```

### Task 2: Build the Deterministic Engine Test-First

**Files:**
- Create: `src/app/frameworks/womens-health-longitudinal-dashboard/demo/framework-preview-engine.test.ts`
- Create: `src/app/frameworks/womens-health-longitudinal-dashboard/demo/framework-preview-engine.ts`

- [ ] **Step 1: Write failing confidence and determinism tests**

Create tests covering the exact public contract:

```ts
import { describe, expect, it } from "vitest";
import { PRESETS, compileFrameworkData } from "./framework-preview-engine";

describe("compileFrameworkData", () => {
  it.each([
    [5, "sparse", true],
    [6, "developing", false],
    [11, "developing", false],
    [12, "longitudinal", false],
  ] as const)("maps %i cycles to %s evidence", (cycles, status, locked) => {
    const result = compileFrameworkData({ cycles, pain: 5, fatigue: 5, sleep: 5 });
    expect(result.evidenceStatus).toBe(status);
    expect(result.isInsightLocked).toBe(locked);
  });

  it("uses the exact sparse lock message", () => {
    const result = compileFrameworkData({ cycles: 5, pain: 5, fatigue: 5, sleep: 5 });
    expect(result.insightText).toBe(
      "At least 6 tracked cycles are needed before recurring-pattern insights unlock.",
    );
    expect(result.insightText).not.toMatch(/clear recurring|longitudinal pattern/i);
  });

  it("is deterministic and does not mutate preset seeds", () => {
    const seed = { ...PRESETS["pain-longitudinal"].controls };
    expect(compileFrameworkData(seed)).toEqual(compileFrameworkData(seed));
    expect(PRESETS["pain-longitudinal"].controls).toEqual(seed);
  });
});
```

- [ ] **Step 2: Run the tests and verify RED**

Run: `npm test -- framework-preview-engine.test.ts`

Expected: FAIL because `framework-preview-engine.ts` does not exist.

- [ ] **Step 3: Implement types, presets, bounds, and evidence gates**

Create the engine with these stable shapes:

```ts
export type PresetId = "pain-longitudinal" | "fatigue-developing" | "mixed-sparse";
export type EvidenceStatus = "sparse" | "developing" | "longitudinal";
export type ControlsState = { cycles: number; pain: number; fatigue: number; sleep: number };
export type PresetConfig = { id: PresetId; name: string; description: string; controls: ControlsState };
```

Use the approved seeds:

```ts
export const PRESETS: Record<PresetId, PresetConfig> = {
  "pain-longitudinal": {
    id: "pain-longitudinal",
    name: "Pain-dominant",
    description: "Longitudinal history",
    controls: { cycles: 14, pain: 8, fatigue: 3, sleep: 2 },
  },
  "fatigue-developing": {
    id: "fatigue-developing",
    name: "Fatigue + sleep",
    description: "Developing history",
    controls: { cycles: 8, pain: 2, fatigue: 7, sleep: 8 },
  },
  "mixed-sparse": {
    id: "mixed-sparse",
    name: "Mixed symptoms",
    description: "Sparse history",
    controls: { cycles: 3, pain: 5, fatigue: 6, sleep: 5 },
  },
};
```

Return token names such as `tone: "mint" | "amber"` rather than hex colors. Clamp cycles to 1–24 and symptom values to 1–10 before deriving output.

- [ ] **Step 4: Run the confidence tests and verify GREEN**

Run: `npm test -- framework-preview-engine.test.ts`

Expected: PASS.

- [ ] **Step 5: Add failing heatmap, copy-gate, and clamp tests**

Add assertions that:

```ts
const base = compileFrameworkData({ cycles: 12, pain: 4, fatigue: 4, sleep: 4 });
const changed = compileFrameworkData({ cycles: 12, pain: 4, fatigue: 9, sleep: 4 });
expect(changed.heatmap.find((row) => row.symptom === "Fatigue")).not.toEqual(
  base.heatmap.find((row) => row.symptom === "Fatigue"),
);
expect(changed.heatmap.find((row) => row.symptom === "Pain")).toEqual(
  base.heatmap.find((row) => row.symptom === "Pain"),
);
expect(compileFrameworkData({ cycles: 100, pain: 0, fatigue: 99, sleep: -3 }).controls)
  .toEqual({ cycles: 24, pain: 1, fatigue: 10, sleep: 1 });
```

Also assert that timeline and visit-summary strings contain the clamped values and that only the 12+ result contains “recurring pattern.”

- [ ] **Step 6: Run the added tests and verify RED**

Run: `npm test -- framework-preview-engine.test.ts`

Expected: FAIL because heatmap, controls, timeline, and summary outputs are incomplete.

- [ ] **Step 7: Implement the remaining compiler**

Use fixed phase weights per symptom, clamp every cell to 1–10, total each phase to derive the dominant cluster, and generate timeline/summary strings exclusively from the clamped controls and evidence tier. Keep the returned `DerivedFrameworkData` deeply serializable and free of functions.

- [ ] **Step 8: Run the engine suite and verify GREEN**

Run: `npm test -- framework-preview-engine.test.ts`

Expected: all engine tests PASS.

- [ ] **Step 9: Commit the engine**

```powershell
git add src/app/frameworks/womens-health-longitudinal-dashboard/demo/framework-preview-engine.ts src/app/frameworks/womens-health-longitudinal-dashboard/demo/framework-preview-engine.test.ts
git commit -m "feat: add deterministic framework preview engine"
```

### Task 3: Build the Interactive Island Test-First

**Files:**
- Create: `src/app/frameworks/womens-health-longitudinal-dashboard/demo/InteractiveFrameworkPreview.test.tsx`
- Create: `src/app/frameworks/womens-health-longitudinal-dashboard/demo/InteractiveFrameworkPreview.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Write failing preset, threshold, slider, and reset tests**

Create interaction tests:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import InteractiveFrameworkPreview from "./InteractiveFrameworkPreview";

describe("InteractiveFrameworkPreview", () => {
  it("switches presets and resets manual edits to the active seed", async () => {
    const user = userEvent.setup();
    render(<InteractiveFrameworkPreview />);
    await user.click(screen.getByRole("button", { name: /mixed symptoms/i }));
    const cycles = screen.getByRole("slider", { name: /tracked cycles/i });
    expect(cycles).toHaveValue("3");
    await user.click(cycles);
    await user.keyboard("{ArrowRight}");
    expect(cycles).toHaveValue("4");
    await user.click(screen.getByRole("button", { name: /reset to mixed symptoms/i }));
    expect(cycles).toHaveValue("3");
  });

  it("unlocks developing insights at six cycles", async () => {
    const user = userEvent.setup();
    render(<InteractiveFrameworkPreview />);
    await user.click(screen.getByRole("button", { name: /mixed symptoms/i }));
    const cycles = screen.getByRole("slider", { name: /tracked cycles/i });
    await user.click(cycles);
    await user.keyboard("{ArrowRight}{ArrowRight}{ArrowRight}");
    expect(screen.getByText(/developing evidence/i)).toBeVisible();
    expect(screen.queryByText(/at least 6 tracked cycles/i)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run component tests and verify RED**

Run: `npm test -- InteractiveFrameworkPreview.test.tsx`

Expected: FAIL because the component does not exist.

- [ ] **Step 3: Implement the client state and semantic controls**

Create a `'use client'` component with:

```ts
const [activePreset, setActivePreset] = useState<PresetId>("pain-longitudinal");
const [controls, setControls] = useState<ControlsState>(
  () => ({ ...PRESETS["pain-longitudinal"].controls }),
);
const [isModified, setIsModified] = useState(false);
const derived = compileFrameworkData(controls);
```

Preset buttons must set all four controls, reset `isModified`, and expose `aria-pressed`. Range inputs must have explicit labels and visible `<output>` values. Reset must remain contextual to the active preset.

- [ ] **Step 4: Render every output from `derived`**

Render, in order:

1. preset command rail;
2. four sliders;
3. coverage status;
4. heatmap;
5. dominant cluster and strongest insight;
6. derived timeline;
7. derived visit summary;
8. exact privacy/architecture notice from the design spec.

Use `telemetry-mint`, `telemetry-amber`, `glass-plane`, `focus-ring`, `btn-secondary`, and the existing CSS variables. Do not inline hex colors, use legacy gold/silver classes, or disable text selection.

- [ ] **Step 5: Add slider and reduced-motion CSS**

Add focused classes to `globals.css`:

```css
.framework-range {
  accent-color: var(--quantum-mint);
}

.framework-live-transition {
  transition: color 150ms ease-out, border-color 150ms ease-out,
    background-color 150ms ease-out, opacity 150ms ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .framework-live-transition {
    transition-duration: 0ms;
  }
}
```

- [ ] **Step 6: Run component and engine tests and verify GREEN**

Run: `npm test`

Expected: all tests PASS.

- [ ] **Step 7: Commit the interactive island**

```powershell
git add src/app/frameworks/womens-health-longitudinal-dashboard/demo/InteractiveFrameworkPreview.tsx src/app/frameworks/womens-health-longitudinal-dashboard/demo/InteractiveFrameworkPreview.test.tsx src/app/globals.css
git commit -m "feat: add interactive framework preview workspace"
```

### Task 4: Integrate the Server Route and Remove Static Drift

**Files:**
- Replace: `src/app/frameworks/womens-health-longitudinal-dashboard/demo/page.tsx`
- Modify: `src/lib/framework-content.ts`

- [ ] **Step 1: Add a failing source-boundary assertion**

Add to the component test:

```ts
expect(screen.getByText(/privacy & architecture notice/i)).toBeVisible();
expect(screen.getByText(/inputs are not stored, tracked, or transmitted/i)).toBeVisible();
```

Run: `npm test -- InteractiveFrameworkPreview.test.tsx`

Expected: FAIL until the exact notice is rendered.

- [ ] **Step 2: Replace the route composition**

Keep `page.tsx` free of `'use client'`. Import the framework title for metadata, keep the back link and synthetic-data notice, and render `<InteractiveFrameworkPreview />` below the header. Use `Metadata` as a type-only import:

```ts
import type { Metadata } from "next";
import Link from "next/link";
import InteractiveFrameworkPreview from "./InteractiveFrameworkPreview";
```

- [ ] **Step 3: Remove route-obsolete static exports**

Delete only `phaseHeatmap`, `timeline`, and `insights` from the bottom of `src/lib/framework-content.ts` after `rg` proves no remaining imports:

Run: `rg -n "phaseHeatmap|\\binsights\\b|\\btimeline\\b" src`

Expected before deletion: only the old demo import/exports; expected after integration: no references.

- [ ] **Step 4: Run all automated checks**

Run:

```powershell
npm test
npm run lint
npm run build
```

Expected: all tests PASS, ESLint exits 0, and Next.js reports a successful production build.

- [ ] **Step 5: Audit palette and privacy guardrails**

Run:

```powershell
rg -n "gold-button|gold-text|silver-text|#d8b25a|#f1d28a" src/app/frameworks/womens-health-longitudinal-dashboard/demo src/app/globals.css
rg -n "fetch\\(|localStorage|sessionStorage|<input[^>]+type=[\"']text|analytics" src/app/frameworks/womens-health-longitudinal-dashboard/demo
```

Expected: no matches.

- [ ] **Step 6: Commit route integration**

```powershell
git add src/app/frameworks/womens-health-longitudinal-dashboard/demo/page.tsx src/lib/framework-content.ts
git commit -m "refactor: connect demo to derived framework data"
```

### Task 5: Verify the Complete Browser Experience

**Files:**
- No production files unless verification finds a defect
- Capture: `C:\tmp\framework-preview-desktop.png`
- Capture: `C:\tmp\framework-preview-mobile.png`

- [ ] **Step 1: Start the application**

Run: `npm run dev`

Expected: Next.js starts without warnings and prints the local URL.

- [ ] **Step 2: Verify the desktop interaction path**

Open `/frameworks/womens-health-longitudinal-dashboard/demo` at 1440×1000. Confirm:

- all three presets visibly change controls and outputs;
- cycles 5, 6, and 12 produce the exact three confidence states;
- fatigue arrow-key changes update the fatigue heatmap row and summary;
- reset restores the active seed;
- timeline and visit summary update without a reload;
- the privacy notice is below the generated outputs;
- no console errors or network requests occur after initial page load.

- [ ] **Step 3: Verify mobile causal order**

At 390×844, confirm the preset rail and all controls appear before coverage, heatmap, insights, timeline, and summary; no primary content clips horizontally except the intentionally scrollable heatmap table.

- [ ] **Step 4: Verify reduced motion and accessibility**

Emulate `prefers-reduced-motion: reduce`; confirm computed transition duration is `0s`. Tab through presets, reset, and sliders; confirm visible focus and native arrow-key behavior.

- [ ] **Step 5: Capture and inspect screenshots**

Use Playwright to save desktop and mobile screenshots to the paths above. Inspect both with `view_image`, comparing at least: copy, two-column hierarchy, palette, control typography, evidence state, and mobile stacking.

- [ ] **Step 6: Run final verification**

Run:

```powershell
npm test
npm run lint
npm run build
git status --short
```

Expected: tests, lint, and build pass; only intentional implementation files are changed.

- [ ] **Step 7: Commit any verification fixes**

If browser verification required changes:

```powershell
git add src package.json package-lock.json vitest.config.mts vitest.setup.ts
git commit -m "fix: polish interactive preview verification"
```

If no files changed, do not create an empty commit.
