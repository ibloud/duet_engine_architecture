# Duet Architecture Lab

## Loptr Lab mission and participation

Loptr Lab is a pre-seed, people-over-profit, accessibility-first venture working toward a self-sustaining model within a capitalist economy. Money sustains the work; meaningful change for people is its purpose. We accept funding only on terms that keep people and accessibility first. Our long-term vision includes universal basic income. We aim to bring change to life and leave a transparent record of what we tried, what worked, and what failed so others can carry it forward. This mission governs our projects, funding decisions, and partnerships; it is not a temporary marketing position.

Current open review and contribution opportunities are voluntary and unpaid. Before work begins, agree in writing on scope, time, what will be public, credit preferences, and an exit path. You can stop at any point. Participation does not promise employment, ownership, revenue share, academic credit, or future pay. Any paid commission or other formal arrangement requires a separate signed agreement before work begins. External assistance or benefits belong to the participant and are not compensation from Loptr Lab.

Financial support is optional and sustains infrastructure, maintenance, accessibility work, and documented development. Paying does not buy contributor status, canon authority, approvals, ownership, or employment. Participation and accessibility are not sponsorship rewards. Project-specific licenses and existing signed agreements continue to apply.

[Full mission and participation terms](https://github.com/ibloud/ibloud.github.io/blob/main/MISSION.md).


**An accessibility-first extraction and validation lab for Veiled Dominion: Duet.**

This repository is not a replacement production game and is not a direct fork of the permanent engine. The **Duet Hackathon is the current production/playtest build**. This repository extracts small, reusable pieces from that build so their contracts, accessibility behavior, tests, and distribution can be validated before they graduate into the permanent engine.

## Lineage

```text
ORIGINAL DUET → MORTIS → DUET HACKATHON
                         │
                         ▼
                ARCHITECTURE LAB
                         │
                         ▼
                PERMANENT ENGINE
```

- Original Duet: Pulsr `pulsr.social/ibloud`
- Mortis: Pulsr `pulsr.social/mortis`
- Current production/playtest: Duet Hackathon
- Extraction/validation: this repository
- Permanent reusable engine: [Loptr-Lab/veiled-dominion-engine](https://github.com/Loptr-Lab/veiled-dominion-engine)
- Later playable distribution: [Veiled Dominion: Duet on itch.io](https://ibloud.itch.io/veiled-dominion-duet)

The Pulsr references preserve project provenance supplied for this build; the architecture lab does not treat the itch.io package as the original Duet source.

## What is validated here

The lab currently demonstrates:

- Rebirth / Death and Radius of Ruin / Sanctuary behavior
- screen-reader-first coordinate commands such as `e2e4`
- a visual board for sighted testers
- procedural audio cues
- read-only `rpg.actor` lookup
- content-contract validation
- runtime smoke tests
- reproducible browser and itch artifacts
- GitHub Actions verification and artifact packaging

The visual board and move log are secondary views. The command path and live accessibility announcements are the primary interaction contract.

## Running locally

No dependency installation is required for the browser demo itself. The repository also includes Node-based validation/build scripts:

```bash
npm run validate
npm test
npm run build
npm run build:itch
```

The CI workflow runs validation and smoke tests on pushes to `main` and pull requests. The build workflow packages the browser and itch artifacts on pushes to `main`.

## Graduation rule

A system does not graduate merely because it works in this demo. Before moving toward the permanent engine it needs:

1. a documented contract;
2. behavioral tests;
3. accessibility requirements where applicable;
4. explicit provenance;
5. independence from demo presentation/fixtures;
6. a reusable reason beyond this one Duet build.

That is **extraction and validation**, not a direct fork.

## Permanent engine

The reusable destination is [Loptr-Lab/veiled-dominion-engine](https://github.com/Loptr-Lab/veiled-dominion-engine). Its implementation remains in progress; this lab exists to make the handoff explicit and testable rather than silently turning the playtest into the engine.

## Contributing

Accessibility feedback, move-validation bugs, Veil/Sanctuary behavior issues, and focused architecture experiments are welcome.

## License

Code is licensed under Apache 2.0. Veiled Dominion lore, characters, and narrative content remain Loptr Lab intellectual property and are not relicensed by the code license.
