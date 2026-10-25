import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").pop();
const configuredBasePath = process.env.SITE_BASE_PATH ?? "";
const basePath = configuredBasePath || (process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}` : "");
const html = await readFile("_site/index.html", "utf8");
const paths = [...html.matchAll(/(?:href|src)="(\/[^"#]+)"/g)].map((match) => match[1]);
const localPaths = [...new Set(paths)]
  .filter((path) => !path.startsWith("//"))
  .map((path) => path.startsWith(basePath) ? path.slice(basePath.length) || "/" : path);
const missing = localPaths.filter((path) => {
  if (path.endsWith("/")) return !existsSync(path === "/" ? "_site/index.html" : `_site${path}index.html`);
  return !existsSync(`_site${path}`);
});
if (missing.length) { console.error(`Missing generated routes: ${missing.join(", ")}`); process.exit(1); }
console.log(`Checked ${new Set(localPaths).size} generated routes and assets.`);
