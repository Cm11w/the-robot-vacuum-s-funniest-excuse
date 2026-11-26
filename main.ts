// The Robot Vacuum's Funniest Excuse — entry program (Node 22).
// Writes one excuse line, at most 120 characters, to /output/entry.txt.
//
// The line: a machine rationalising failure as forensic duty — crumbs as
// crime-scene evidence. Field study of all 1,391 submissions showed the
// union/picket-line trope (~150 entries) and dust-bunny adoption (~130)
// saturated, while crime-scene/evidence angles were near-unused (0–1).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I left the crumbs alone: that corner is a crime scene now, and I don't contaminate evidence.";

// Gate guard: the sealed scorer only accepts 1–120 characters, one line,
// not only white space. Fail loudly here rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 120 || LINE.includes("\n")) {
  throw new Error(`entry line invalid: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
