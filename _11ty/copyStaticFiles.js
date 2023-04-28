"use strict";

module.exports = function copyStaticFiles(config) {
  // Pass-through files
  config.addPassthroughCopy("src/CNAME");
  config.addPassthroughCopy({ "src/static/*": "." });
  config.addPassthroughCopy({ "src/_includes/assets": "assets" });
  config.addPassthroughCopy({ "src/_includes/static": "static" });
  config.addPassthroughCopy({
    "src/architecting-enterprise-vue.jpeg":
      "img/architecting-enterprise-vue.jpeg",
  });
  // favicons
  const favicons = [
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
    "apple-touch-icon.png",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "favicon.ico",
    "site.webmanifest",
  ];
  favicons.forEach((f) => config.addPassthroughCopy(`src/${f}`));
};
