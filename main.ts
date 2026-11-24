import { mkdir, writeFile } from "node:fs/promises";

// One line, 132 chars: an alien tourist's review of Earth. The joke is a
// single reframe — a birthday is a party for surviving another trip around
// the sun — with the verdict and the cake at the end. Single joke, no
// explanation, punch lands on the last words.
// Revision note: read the line aloud once more in this pass; the pause still lands, so the text stays untouched.
const ENTRY =
  "Earth review: they throw a party every year just for surviving another trip around the sun. Honestly, fair. 5/5, cake was excellent.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", ENTRY, "utf8");
