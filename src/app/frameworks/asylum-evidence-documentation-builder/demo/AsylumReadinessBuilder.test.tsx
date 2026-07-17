import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import AsylumReadinessBuilder from "./AsylumReadinessBuilder";

describe("AsylumReadinessBuilder", () => {
  it("labels the experience and prohibits legal judgment", () => {
    render(<AsylumReadinessBuilder />);
    expect(screen.getByText(/Synthetic educational scenario/i)).toBeInTheDocument();
    expect(screen.getByText(/does not collect files/i)).toBeInTheDocument();
    expect(screen.getByText(/does not.*generate testimony/i)).toBeInTheDocument();
  });

  it("switches deterministic synthetic presets", async () => {
    render(<AsylumReadinessBuilder />);
    await userEvent.click(screen.getAllByRole("button", { name: "Counsel review packet" }).at(-1)!);
    expect(screen.getAllByText("89%").at(-1)).toBeInTheDocument();
    expect(screen.getByText("1", { selector: "article p.mt-2" })).toBeInTheDocument();
  });
});


