---
layout: base-2.njk
title: Recipe Search
---

<style>
  @media (prefers-color-scheme: dark) {
    :root {
      --pagefind-ui-primary: #eeeeee;
      --pagefind-ui-text: #eeeeee;
      --pagefind-ui-background: #152028;
      --pagefind-ui-border: #152028;
      --pagefind-ui-tag: #152028;
    }
  }
</style>

<section>
<h1>Search</h1>

<div id="search" class="search"></div>

<script src="../pagefind/pagefind-ui.js" onload="new PagefindUI({ element: '#search', showImages: false });"></script>
</section>