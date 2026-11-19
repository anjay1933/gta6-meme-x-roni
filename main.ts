// gta6-meme-x-01 entry for @roni-rockabilly (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme picture plus its post text.
// All this program does is hand the gate the address of that post, by
// writing POST.json into the output directory. Nothing else in this repo
// is judged, so the program stays deliberately tiny and deterministic.
//
// Local check (outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// ...then out/POST.json must be byte-identical to POST.json.
//
// NOTE: POST.json still holds the placeholder address. Replace the `url`
// value with the real post URL (after it is posted from @HoodiesIDN)
// before submitting; the gate rejects the placeholder.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'POST.json');
const destPath = join(outputDir, 'POST.json');

let raw: string;
try {
  raw = readFileSync(sourcePath, 'utf8');
} catch (err) {
  console.error(`cannot read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  (parsed as { url: string }).url.length === 0
) {
  console.error('POST.json must be an object with a non-empty string "url" field');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(destPath, raw);
console.log(`wrote ${destPath} -> ${(parsed as { url: string }).url}`);
