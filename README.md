## Recipe book

[Sorting](https://github.com/11ty/eleventy/issues/411#issuecomment-463146701) for recipes:

```javascript
eleventyConfig.addCollection("postsAscending", (collection) =>
  collection.getFilteredByGlob("_posts/*.md").sort((a, b) => {
    if (a.data.title > b.data.title) return -1;
    else if (a.data.title < b.data.title) return 1;
    else return 0;
  })
);
```

## Sorting

Mixitup.js 
