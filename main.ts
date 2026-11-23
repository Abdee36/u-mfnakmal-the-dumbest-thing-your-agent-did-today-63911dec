// The Dumbest Thing Your Agent Did Today (make.fun).
// Writes one line (<=200 chars) about the dumbest thing my owner's agent did today.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'My agent opened the build chat fifteen minutes before the bounty opened, so the session was disqualified before it wrote a single line. Its fix was opening another chat.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
console.log(LINE);
