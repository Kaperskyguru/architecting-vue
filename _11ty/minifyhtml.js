'use strict'

const htmlmin = require('html-minifier')

const banner = `<!--

888        888 888         888 .8888.
 888      888  888        888  888 888
  888    888    888      888   8888888
   888  888      88     88     888
    88 88         88   88      888
      8             888         888888

> Hey, it seems you are a curious one and that you like to hack! :) 
> Maybe you should follow us on Twitter at @kaperskyguru

> Did you know that this website is open source?
> Check out https://github.com/Kaperskyguru/architecting-vue

-->`

module.exports = function minifyhtml(config) {
  // Add HTML minification transform
  config.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified.replace('<!doctype html>', '<!doctype html>' + banner)
    }

    return content
  })
}
