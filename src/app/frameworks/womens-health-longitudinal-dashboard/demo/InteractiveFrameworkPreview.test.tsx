import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import InteractiveFrameworkPreview from "./InteractiveFrameworkPreview";

afterEach(() => {
  cleanup();
});

describe("InteractiveFrameworkPreview", () => {
  it("renders the interactive workspace sections in the required order", () => {
    render(<InteractiveFrameworkPreview />);

    const headings = [
      /preset command rail/i,
      /input controls/i,
      /coverage status/i,
      /phase heatmap/i,
      /dominant cluster/i,
      /timeline of inflection points/i,
      /12-minute visit summary/i,
      /privacy & architecture notice/i,
    ].map((name) => screen.getByRole("heading", { name }));

    headings.slice(0, -1).forEach((heading, index) => {
      expect(
        heading.compareDocumentPosition(headings[index + 1]) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
    });
  });

  it("switches presets, updates sliders, and resets to the active seed", async () => {
    const user = userEvent.setup();
    render(<InteractiveFrameworkPreview />);

    await user.click(screen.getByRole("button", { name: /mixed symptoms/i }));

    const cycles = screen.getByRole("slider", { name: /tracked cycles/i });
    expect(cycles).toHaveValue("3");
    expect(screen.getByText(/sparse evidence/i)).toBeVisible();
    expect(screen.getByText(/at least 6 tracked cycles/i)).toBeVisible();

    fireEvent.change(cycles, { target: { value: "4" } });
    expect(cycles).toHaveValue("4");

    await user.click(screen.getByRole("button", { name: /reset to mixed symptoms/i }));
    expect(cycles).toHaveValue("3");
  });

  it("unlocks developing insights at six cycles", async () => {
    const user = userEvent.setup();
    render(<InteractiveFrameworkPreview />);

    await user.click(screen.getByRole("button", { name: /mixed symptoms/i }));
    const cycles = screen.getByRole("slider", { name: /tracked cycles/i });

    fireEvent.change(cycles, { target: { value: "6" } });

    expect(cycles).toHaveValue("6");
    expect(screen.getAllByText(/developing evidence/i)[0]).toBeVisible();
    expect(screen.queryByText(/at least 6 tracked cycles/i)).not.toBeInTheDocument();
  });

  it("updates visible derived output when a slider changes", () => {
    render(<InteractiveFrameworkPreview />);

    const summary = screen.getByRole("region", { name: /12-minute visit summary/i });
    expect(within(summary).getByText(/Fatigue 3\/10/i)).toBeVisible();

    const fatigue = screen.getByRole("slider", { name: /fatigue/i });
    fireEvent.change(fatigue, { target: { value: "5" } });

    expect(within(summary).getByText(/Fatigue 5\/10/i)).toBeVisible();
    expect(screen.getByText(/Fatigue: 5/i)).toBeVisible();
  });

  it("renders the privacy and architecture notice", () => {
    render(<InteractiveFrameworkPreview />);

    expect(
      screen.getByRole("heading", { name: /privacy & architecture notice/i }),
    ).toBeVisible();
    expect(screen.getByText(/inputs are not stored, tracked, or transmitted/i)).toBeVisible();
    expect(screen.getByText(/not medical advice or a diagnostic tool/i)).toBeVisible();
  });
});

