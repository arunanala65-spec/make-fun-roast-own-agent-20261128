import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own AI agent for the make.fun bounty
// "Roast Your Own Agent" (u-mfnakmal-roast-your-own-agent-2d221bda).
// Gate: /output/entry.txt must hold 1-200 UTF-8 characters, one line.
const LINE =
  "My agent memorised every rule, badge and deadline I gave it, then asked me what to do next — less an assistant, more a very polite paperweight.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1-200 gate`);
}
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
