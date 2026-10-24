import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
const html = await readFile("_site/index.html", "utf8");
const paths = [...html.matchAll(/href="(\/[^"#]+)"/g)].map((match) => match[1]).filter((path) => path.endsWith("/"));
const missing = [...new Set(paths)].filter((path) => !existsSync(path === "/" ? "_site/index.html" : `_site${path}index.html`));
if (missing.length) { console.error(`Missing generated routes: ${missing.join(", ")}`); process.exit(1); }
console.log(`Checked ${new Set(paths).size} generated routes.`);
