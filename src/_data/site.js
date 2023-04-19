'use strict'

const eleventyPackage = require('@11ty/eleventy/package.json')

module.exports = function () {
  return {
    domain: 'www.architectingvue.com',
    url: 'https://www.architectingvue.com',
    name: 'Architecting Vue.js 3 Enterprise-Ready Web Applications',
    title: 'Architecting Vue.js 3 Enterprise-Ready Web Applications First Edition by Solomon Eseme',
    description: 'A book to learn how to Build and deliver scalable and high-performance, enterprise-ready applications with Vue and JavaScript',
    blogUrl: 'https://www.architectingvue.com/blog',
    blogTitle: 'Architecting Vue.js 3 Enterprise-Ready Web Applications Blog',
    blogDescription: 'From the authors of Architecting Vue.js 3 Enterprise-Ready Web Applications, useful bits to enrich your Vue.js knowledge',
    authorNames: 'Solomon Eseme',
    authorEmail: 'authors@architectingvue.com',
    author: 'Solomon Eseme, authors@architectingvue.com',
    copyright: 'Solomon Eseme, Packt Publishing',
    lang: 'en',
    locale: 'en_US',
    image: '/img/node-js-design-patterns.jpg',
    imageWidth: 1260,
    imageHeight: 630,
    analyticsId: 'G-LNCCTR669E',
    gtmId: 'GTM-MG5ZGL7',
    facebookAppId: '756438792839374',
    generator: `${eleventyPackage.name} v${eleventyPackage.version}`
  }
}
