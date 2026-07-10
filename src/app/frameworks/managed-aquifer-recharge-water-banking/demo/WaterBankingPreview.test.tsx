import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import WaterBankingPreview from "./WaterBankingPreview";

afterEach(() => {
  cleanup();
});

function setSlider(name: RegExp, value: string) {
  fireEvent.change(screen.getByRole("slider", { name }), {
    target: { value },
  });
}

describe("WaterBankingPreview", () => {
  it("renders the water banking workspace sections in the required order", () => {
    render(<WaterBankingPreview />);

    const headings = [
      /preset command rail/i,
      /input controls/i,
      /readiness gate status/i,
      /basin cross-section/i,
      /output signal cards/i,
      /24-month action pathway/i,
      /policy\/procurement readiness notes/i,
      /decision-support disclaimer/i,
    ].map((name) => screen.getByRole("heading", { name }));

    headings.slice(0, -1).forEach((heading, index) => {
      expect(
        heading.compareDocumentPosition(headings[index + 1]) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
    });
  });

  it("switches presets, changes controls and derived outputs, then resets to the active preset", async () => {
    const user = userEvent.setup();
    render(<WaterBankingPreview />);

    await user.click(screen.getByRole("button", { name: /stressed \/ unmapped/i }));

    expect(screen.getByRole("slider", { name: /basin stress/i })).toHaveValue("9");
    expect(screen.getByText(/unmapped basin visibility/i)).toBeVisible();
    expect(screen.getByText(/not enough monitored basin visibility/i)).toBeVisible();

    setSlider(/basin stress/i, "4");
    expect(screen.getByRole("slider", { name: /basin stress/i })).toHaveValue("4");
    expect(screen.getByText(/Basin stress: 4/i)).toBeVisible();

    await user.click(
      screen.getByRole("button", { name: /reset to stressed \/ unmapped/i }),
    );

    expect(screen.getByRole("slider", { name: /basin stress/i })).toHaveValue("9");
    expect(screen.getByText(/Basin stress: 9/i)).toBeVisible();
  });

  it("uses native range focus plus arrow-key-style stepping to change derived output", () => {
    render(<WaterBankingPreview />);

    const outputCards = screen.getByRole("region", { name: /output signal cards/i });
    expect(within(outputCards).getByText(/quality risk is not the leading constraint/i)).toBeVisible();

    const qualityRisk = screen.getByRole("slider", { name: /quality risk/i });
    qualityRisk.focus();
    fireEvent.keyDown(qualityRisk, { key: "ArrowRight" });
    qualityRisk.stepUp();
    fireEvent.change(qualityRisk, { target: { value: qualityRisk.value } });

    expect(qualityRisk).toHaveValue("4");
    expect(within(outputCards).getByText(/quality risk is not the leading constraint/i)).toBeVisible();
    expect(screen.getByText(/Quality risk: 4/i)).toBeVisible();
  });

  it("shows unmapped, developing, and operational gates through control changes", async () => {
    const user = userEvent.setup();
    render(<WaterBankingPreview />);

    await user.click(screen.getByRole("button", { name: /stressed \/ unmapped/i }));
    expect(screen.getByText(/unmapped basin visibility/i)).toBeVisible();

    setSlider(/monitoring quality/i, "6");
    setSlider(/recharge readiness/i, "6");
    setSlider(/governance readiness/i, "5");
    expect(screen.getByText(/developing recharge pathway/i)).toBeVisible();

    setSlider(/monitoring quality/i, "8");
    setSlider(/recharge readiness/i, "8");
    setSlider(/surplus water/i, "8");
    setSlider(/governance readiness/i, "8");
    expect(screen.getByText(/operational water-bank readiness/i)).toBeVisible();
  });

  it("updates quality alert language when quality risk changes", () => {
    render(<WaterBankingPreview />);

    const outputCards = screen.getByRole("region", { name: /output signal cards/i });
    expect(within(outputCards).getByText(/quality risk is not the leading constraint/i)).toBeVisible();

    setSlider(/quality risk/i, "9");

    expect(within(outputCards).getByText(/high quality watchpoint/i)).toBeVisible();
  });

  it("updates drought reserve and action pathway language when drought duration changes", () => {
    render(<WaterBankingPreview />);

    expect(screen.getByText(/9-month drought reserve watch/i)).toBeVisible();

    setSlider(/drought duration/i, "20");

    expect(screen.getByText(/20-month drought reserve stress/i)).toBeVisible();
    expect(screen.getByText(/20-month drought continuity case/i)).toBeVisible();
  });

  it("keeps the decision-support disclaimer visible", () => {
    render(<WaterBankingPreview />);

    expect(screen.getByRole("heading", { name: /decision-support disclaimer/i })).toBeVisible();
    expect(screen.getByText(/conceptual and educational/i)).toBeVisible();
    expect(
      screen.getByText(/not hydrological, engineering, legal, financial, or regulatory advice/i),
    ).toBeVisible();
    expect(screen.getByText(/qualified hydrogeologist/i)).toBeVisible();
  });
});
