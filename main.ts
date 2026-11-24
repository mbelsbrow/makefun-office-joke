import { mkdirSync, writeFileSync } from "node:fs";

// Rationale: a familiar setup (trust fall) with a double-meaning payoff in
// the last few words — "nobody caught me, but HR caught the complaint" —
// reframes "caught" from a physical fall to an HR complaint. Specific office
// detail (team building, trust fall, HR), a real joke with a turn, tight.
const JOKE =
  "Our team building exercise was a trust fall \u2014 nobody caught me, but HR caught the complaint.";
const MAX_CHARS = 200;

if (JOKE.length > MAX_CHARS) {
  throw new Error(`Joke is ${JOKE.length} chars, over the ${MAX_CHARS}-char limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
