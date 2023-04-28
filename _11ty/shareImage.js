"use strict";

const { join, dirname } = require("path");
const { writeFile } = require("fs").promises;
const mkdirp = require("mkdirp");
const Cache = require("@11ty/eleventy-cache-assets");

module.exports = function shareImage(config) {
  // Generates blog share images
  config.addNunjucksAsyncShortcode(
    "generateShareImage",
    async function (title) {
      if (typeof title === "undefined") {
        throw new Error("Missing `title` on generateShareImage");
      }

      const filename = `og_${this.page.fileSlug}.jpg`;
      const destFolder = dirname(this.page.outputPath);
      await mkdirp(destFolder);
      const destPath = join(destFolder, filename);
      const destUrl = `${this.page.url}${filename}`;

      const imageUrl =
        "https://res.cloudinary.com/kaperskydisk/image/upload/v1682665451/book-unboxed_vverbi.png";

      const image = await Cache(imageUrl, { duration: "1d", type: "buffer" });
      await writeFile(destPath, image);

      return destUrl;
    }
  );
};
