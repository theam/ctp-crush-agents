import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const README_PATH = join(process.cwd(), 'README.md');

if (!existsSync(README_PATH)) {
  writeFileSync(README_PATH, '# ctp-crush-agents\n\n');
}

const randomLine = `Random note: ${Math.random().toString(36).slice(2, 10)} at ${new Date().toISOString()}`;

const current = readFileSync(README_PATH, 'utf8');
const newline = current.endsWith('\n') ? '' : '\n';
const updated = current + newline + randomLine + '\n';

writeFileSync(README_PATH, updated, 'utf8');

console.log(randomLine);
