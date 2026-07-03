#!/usr/bin/env python3
"""Generate a simple visit summary from synthetic Framework 01 demo data."""

from __future__ import annotations

import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "demo-data" / "synthetic-six-cycles.json"
OUTPUT_PATH = ROOT / "outputs" / "generated-visit-summary.md"


def symptom_total(checkin: dict) -> int:
    return sum(int(value) for value in checkin.get("symptoms", {}).values())


def main() -> None:
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    checkins = data.get("dailyCheckins", [])
    by_phase: dict[str, list[int]] = defaultdict(list)

    for checkin in checkins:
        by_phase[checkin["phase"]].append(symptom_total(checkin))

    phase_lines = []
    for phase, totals in sorted(by_phase.items()):
        average = sum(totals) / len(totals)
        phase_lines.append(f"- {phase}: average total symptom load {average:.1f}")

    highest = max(checkins, key=symptom_total)

    summary = f"""# Generated Visit Summary

Synthetic demo output only. Not medical advice. Not a diagnosis.

## Visit focus

Review recurring symptom clustering, especially around `{highest['phase']}` phase entries.

## Phase observations

{chr(10).join(phase_lines)}

## Highest synthetic check-in

- Date: {highest['date']}
- Cycle day: {highest['cycleDay']}
- Phase: {highest['phase']}
- Total symptom load: {symptom_total(highest)}
- Notes: {highest.get('notes', 'None')}

## Appointment questions

- What context would help interpret this pattern?
- What should be tracked before the next visit?
- Are there clinical records, labs, or medication changes worth reviewing?

## Consent boundary

Patient preference: share summary only unless source records are separately approved.
"""

    OUTPUT_PATH.write_text(summary, encoding="utf-8")
    print(f"Wrote {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
