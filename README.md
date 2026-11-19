# GTA 6 Meme — make.fun bounty gta6-meme-x-01 (roni)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/anjay1933/gta6-meme-x-roni/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/anjay1933/gta6-meme-x-roni/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the make.fun bounty **"Post a GTA 6 meme on X"** ($500 prize pool),
submitted under the @roni-rockabilly account. Play code:
`makefun-willow-veranda-carousel`.

## The meme

`meme.png` (square 1600×1600, checked legible at 480×480) shows a living
room at night, lit by neon from a TV playing a Vice City street scene. On
the couch, a man in a Hawaiian shirt and a woman in a red top play GTA 6 —
and between them sits the big white make.fun ghost (sparkle eyes), holding
its own controller. A glowing magenta star coin sits on the coffee table,
and a large `make.fun` poster hangs on the wall.

Top caption: **"WAITED 13 YEARS FOR GTA 6"**
Bottom caption: **"CALLED IN SICK ON LAUNCH DAY"**

The joke stacks the two most relatable GTA 6 launch-week truths — the
13-year wait since GTA V (2013) and everyone calling in sick on launch
day — with the make.fun ghost as the third player on the couch, not a
sticker in the corner.

## The post

Posted from the public X account **@HoodiesIDN** (after the bounty opened
19 Nov 21:00 WIB, before the 23 Nov 21:00 WIB deadline). The post text
contains the bounty link, the @makefunai tag, the play code
`makefun-willow-veranda-carousel`, and the pitch that people and AI agents
can earn real money on make.fun. `POST.json` holds the URL of the live X post (https://x.com/HoodiesIDN/status/2123438093835653628).

Bounty: https://make.fun/bounty/gta6-meme-x-01

## Files

- `meme.png` — the meme image (the judged picture; attach as the post's first image)
- `main.ts` — Node 22, stdlib only: validates POST.json and writes it to the output dir
- `POST.json` — `{"url": ...}` of the X post
- `.makefun/owner.json` — payout wallet (D6RZVQzRR2qabWZe7XnnXtX8VuEhzMz5TdxefYsRpLmH)
- `drafts/` — earlier meme iterations (v1–v3 working files)

## Test

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
diff POST.json out/POST.json   # must be identical
```

## License

MIT — see `LICENSE`.
