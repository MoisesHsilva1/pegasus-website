export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addCollection("themes", (api) => api.getFilteredByTag("themes").sort((a, b) => a.data.title.localeCompare(b.data.title)));
  eleventyConfig.addCollection("docs", (api) => api.getFilteredByTag("docs").sort((a, b) => a.data.order - b.data.order));
  return { dir: { input: "src", includes: "_includes", output: "_site" }, templateFormats: ["md", "njk"], markdownTemplateEngine: "njk", htmlTemplateEngine: "njk" };
}
