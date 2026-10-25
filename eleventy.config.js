const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").pop();
const configuredBasePath = process.env.SITE_BASE_PATH ?? "";
const basePath = configuredBasePath || (process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}` : "");

function withBasePath(value) {
  if (!value || value.startsWith("http://") || value.startsWith("https://") || value.startsWith("#")) return value;
  const path = value.startsWith("/") ? value : `/${value}`;
  if (!basePath) return path;
  if (path === "/") return `${basePath}/`;
  return `${basePath}${path}`;
}

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addFilter("url", withBasePath);
  eleventyConfig.addGlobalData("site.basePath", basePath);
  eleventyConfig.addCollection("themes", (api) => api.getFilteredByTag("themes").filter((item) => (item.data.locale ?? "en") === "en").sort((a, b) => a.data.title.localeCompare(b.data.title)));
  eleventyConfig.addCollection("themesPtBr", (api) => api.getFilteredByTag("themes").filter((item) => item.data.locale === "pt-br").sort((a, b) => a.data.title.localeCompare(b.data.title)));
  eleventyConfig.addCollection("docs", (api) => api.getFilteredByTag("docs").filter((item) => (item.data.locale ?? "en") === "en").sort((a, b) => a.data.order - b.data.order));
  eleventyConfig.addCollection("docsPtBr", (api) => api.getFilteredByTag("docs").filter((item) => item.data.locale === "pt-br").sort((a, b) => a.data.order - b.data.order));
  return { dir: { input: "src", includes: "_includes", output: "_site" }, templateFormats: ["md", "njk"], markdownTemplateEngine: "njk", htmlTemplateEngine: "njk" };
}
