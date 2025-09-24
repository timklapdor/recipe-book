const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const { execSync } = require('child_process');


module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addCollection("sortedRecipes", (collection) =>
  collection.getFilteredByTag("recipe").sort((a, b) => {
    if (a.data.title < b.data.title) return -1;
    else if (a.data.title > b.data.title) return 1;
    else return 0;
  })
);

  eleventyConfig.addCollection('allCategories', collection => {
      const allCollections = collection.getAll();
      let tagSet = new Set();
      allCollections.forEach(temp => {
          if('categories' in temp.data) {
              for(const tag of temp.data.categories) {
                  tagSet.add(tag);
              }
          }
      });
      return [...tagSet];
  });

  eleventyConfig.addCollection('allCuisines', collection => {
      const allCollections = collection.getAll();
      let tagSet = new Set();
      allCollections.forEach(temp => {
          if('cuisine' in temp.data) {
              for(const tag of temp.data.cuisine) {
                  tagSet.add(tag);
              }
          }
      });
      return [...tagSet];
  });

  eleventyConfig.addCollection('allDiets', collection => {
      const allCollections = collection.getAll();
      let tagSet = new Set();
      allCollections.forEach(temp => {
          if('diet' in temp.data) {
              for(const tag of temp.data.diet) {
                  tagSet.add(tag);
              }
          }
      });
      return [...tagSet];
  });

  eleventyConfig.addCollection('allEfforts', collection => {
      const allCollections = collection.getAll();
      let tagSet = new Set();
      allCollections.forEach(temp => {
          if('effort' in temp.data) {
              for(const tag of temp.data.effort) {
                  tagSet.add(tag);
              }
          }
      });
      return [...tagSet];
  });

  eleventyConfig.addCollection("new", function(collection) {
  		return collection.getFilteredByTag("recipe").sort();
  	});


  // Markdown
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };

  const MarkdownIt = require("markdown-it");
  const mdRender = new MarkdownIt();
  eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
  return mdRender.render(rawString);
  });

    eleventyConfig.on('eleventy.after', () => {
      execSync(`npx pagefind --site docs`, { encoding: 'utf-8' })
    })

  return {
    dir: {
      input: "src",
      output: "docs",
      layouts: '_layouts'
    },

    pathPrefix: "/recipe-book/"
  };
};
