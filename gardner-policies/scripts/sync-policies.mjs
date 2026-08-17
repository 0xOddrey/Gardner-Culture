import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(scriptDir, "..");
const sourcePath = path.resolve(appRoot, "../gardner-culture/script.js");
const outputPath = path.resolve(appRoot, "data/policies.json");
const source = fs.readFileSync(sourcePath, "utf8");
const marker = "const policies =";
const markerIndex = source.indexOf(marker);

if (markerIndex < 0) {
  throw new Error(`Could not find ${marker} in ${sourcePath}`);
}

const arrayStart = source.indexOf("[", markerIndex + marker.length);
let depth = 0;
let quote = null;
let escaped = false;
let arrayEnd = -1;

for (let index = arrayStart; index < source.length; index += 1) {
  const character = source[index];

  if (quote) {
    if (escaped) {
      escaped = false;
    } else if (character === "\\") {
      escaped = true;
    } else if (character === quote) {
      quote = null;
    }
    continue;
  }

  if (character === "'" || character === '"' || character === "`") {
    quote = character;
  } else if (character === "[") {
    depth += 1;
  } else if (character === "]") {
    depth -= 1;
    if (depth === 0) {
      arrayEnd = index + 1;
      break;
    }
  }
}

if (arrayEnd < 0) {
  throw new Error(`Could not parse policies array in ${sourcePath}`);
}

const policies = vm.runInNewContext(`(${source.slice(arrayStart, arrayEnd)})`, Object.create(null));

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(policies, null, 2)}\n`);
console.log(`Synced ${policies.length} policies to ${outputPath}`);
