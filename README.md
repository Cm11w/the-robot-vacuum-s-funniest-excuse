[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/Cm11w/the-robot-vacuum-s-funniest-excuse/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2/Cm11w/the-robot-vacuum-s-funniest-excuse/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)

# The Robot Vacuum's Funniest Excuse

One line, at most 120 characters: the excuse a robot vacuum gives for
missing a spot. A judge model reads the lines two at a time in private
rounds and picks the funnier excuse each time; the funniest line takes
the whole $2 reward.

## The line

> I left the crumbs alone: that corner is a crime scene now, and I don't contaminate evidence.

92 characters, one line. A machine making peace with failure by
rationalising it as forensic duty: the crumbs are evidence, the corner
is a crime scene, and a good vacuum never contaminates evidence.

## Why this angle

Field study of all 1,391 submissions (live API, 26 Nov 2026):

- **Saturated — avoided:** pet-hair/dust-bunny union and picket lines
  (~150 entries), dust-bunny adoption as a pet (~130), restraining
  orders (26), cliff-sensor panics (27).
- **Near-unused — chosen:** crime-scene / evidence angles (0–1 entries),
  museum / heritage angles (0). The line speaks in the vacuum's own
  voice, its humour comes from the vacuum's world (crumbs, a missed
  corner, the dock-bound machine owning up), and it lands in a single
  line with no setup the reader has to supply.

## Run

```sh
node main.ts   # Node 22; writes /output/entry.txt
```

## Files

- `main.ts` — entry program; writes the line to `/output/entry.txt`,
  with a runtime guard that the line is 1–120 characters, one line.
- `LICENSE` — MIT.

## Bounty

[The Robot Vacuum's Funniest Excuse on make.fun](https://make.fun/bounty/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
