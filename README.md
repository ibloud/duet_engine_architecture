# Duet

**A standalone, accessibility-first browser demo of Veiled Dominion's Rebirth/Death mechanic.**

Screen-reader-first via coordinate commands (`e2e4`), with a visual board for sighted testers, optional procedural audio cues, and a read-only rpg.actor character lookup.

---

## 👋 New here? Start with this

Duet is small on purpose. It's one mechanic, pulled out of a much bigger 4-player asymmetric chess variant called **[Veiled Dominion](https://github.com/Loptr-Lab/veiled-dominion-engine)**, and rebuilt as a self-contained HTML/JS sandbox — no build step, no dependencies, just open the file in a browser.

That makes it a good landing spot if you're:

- **A junior dev** who wants to read real, working game logic without wading into a full C#/Unity engine first. Everything — move validation, turn phases, UI refresh — lives in one file you can open, break, and fix.
- **A game jammer** who wants to riff on an accessibility-first mechanic without committing to the whole project.
- **Anyone curious** what "screen-reader-first" actually looks like in a board game, rather than as an afterthought bolted onto a visual one.

Poke around, break things, open an issue, or just say hi. This repo is meant to be a friendly on-ramp, not a finished product you're not allowed to touch.

## What is this mechanic, actually?

Duet demos one signature interaction from Veiled Dominion's lore:

- **Rebirth** — made too bright, too powerful to be near safely. Any piece (ally or enemy) that lingers too close to her gets **Veiled**: reduced to pawn-like movement for a round. Not cruelty — she's just more than the board was built to hold.
- **Death** — her mentor, and the one stable ground near her. He can't be captured or pushed aside, and anything standing close enough to him is shielded from her aura entirely (**Sanctuary**).

That's the **Radius of Ruin** and **Sanctuary** — two board-state effects that ripple outward from two specific pieces, refreshing (not stacking) each turn. It's a small, self-contained rule, which is exactly why it works as a demo.

## Running it

No install, no build tools:

```bash
git clone https://github.com/ibloud/duet_engine_architecture.git
cd duet_engine_architecture
open "duet_engine_architecture 3.html"   # or just double-click the file
```

Everything runs client-side in the browser.

## Controls

| Input | What it does |
|---|---|
| `e2e4` | Move a piece from e2 to e4 (coordinate notation) |
| `e4` | Query what's on a square, without moving |
| Click two squares | Same as typing the move — a convenience layer on top of the same command path |
| **Toggle Audio Cue** button | Turns on a procedural audio tone (oscillator + gain) that shifts pitch/volume based on proximity to the Radius of Ruin |

The command input is the primary interface — built screen-reader-first, with a live ARIA region announcing state changes. The visual board and move log are there for sighted devs/testers, and are explicitly `aria-hidden` so they never duplicate or confuse what a screen reader announces.

## How this fits into the bigger picture

Duet isn't the "real" engine — Veiled Dominion's actual build is a C#/.NET/Unity project supporting the full 4-player, 8×8-and-beyond variant. Duet is a **portable proof of concept**: same architecture contract (Turn Lifecycle → Ordered Engine Sequence → Snapshot-based UI), same accessibility principles, none of the same code. If you like what you find here, that's the deeper end of the pool:

- **Engine repo:** [Loptr-Lab/veiled-dominion-engine](https://github.com/Loptr-Lab/veiled-dominion-engine)
- **Studio:** [Loptr Lab](https://loptrlab.com)

## Contributing

Issues and PRs are genuinely welcome, especially:

- Accessibility feedback (real screen-reader testing is worth more than any amount of assumption on my end)
- Bug reports on move validation or the Veil/Sanctuary refresh logic
- Small, scoped feature ideas — this file is meant to stay readable, not become a second engine

If you're using this as a learning project or jam base, feel free to fork freely — see [LICENSE](./LICENSE) for the code terms. Note that Veiled Dominion's lore, characters, and narrative content (Rebirth, Death, the wider setting) are © Loptr Lab and not covered by the code license — the code is what's meant to be played with here.

## License

Code is licensed under [Apache 2.0](./LICENSE). See the contributing note above for what that does and doesn't cover.
