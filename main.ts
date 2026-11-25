import { mkdirSync, writeFileSync } from "node:fs";

// Laugh Track: The Crypto Trading Joke Contest — one line, under 200 chars.
// Setup: a "simple strategy" (every trader claims one). Turn: buy high,
// panic-sell low — the exact opposite of the strategy. Punchline: the
// group-chat excuse, "taking profits in experience" — the one asset every
// losing trader is rich in. True to trading life: the chart, the bag, and
// the group chat where the loss gets rebranded as a lesson.
const ENTRY =
  "My strategy is simple: buy high, panic-sell low, then tell the group chat I was just taking profits in experience.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
