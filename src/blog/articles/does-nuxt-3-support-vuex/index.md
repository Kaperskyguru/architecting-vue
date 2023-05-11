---
date: 2023-05-10T15:30:00
updatedAt: 2023-05-10T15:30:00
title: Does Nuxt 3 support Vuex?
permalink: /blog/does-nuxt-3-support-vuex/
description: In this article, we will explore whether Nuxt 3 supports Vuex and how Vue developers can use Vuex in Nuxt 3.
layout: article
author: Solomon Eseme
author_profile_pic: /static/solomon-eseme.jpg
author_link: https://solomoneseme.com
tags: ["blog"]
---

Nuxt.js is a powerful framework built on top of Vue.js that provides additional features and optimizations for building large-scale applications. One of the key features of Vue.js is Vuex, which is a state management pattern and library for Vue.js applications. In this article, we will explore whether Nuxt 3 supports Vuex and how Vue developers can use Vuex in Nuxt 3.

## Does Nuxt 3 support Vuex?

The short answer is No, Nuxt 3 does not support Vuex. In fact, Vuex was an integral part of Nuxt.js 2 and is included in the default installation. In Nuxt 2, Vuex was integrated into the Vuex store by default.

However, there are some changes in the way that Nuxt 3 works, and therefore favors Pinia — the new state management system for Vue 3.

However, in Nuxt 3, Pinia is integrated into the Nuxt module system, which allows you to use Vuex alongside other Nuxt modules like Axios and Auth.

You can [learn more about Pinia here](https://pinia.vuejs.org/).

## Additional Details

Nuxt 3 has introduced a new module system that makes it easier to configure and extend Nuxt projects.

The new module system allows developers to create and use reusable modules that can be shared across different Nuxt projects. In addition to Pinia, there are several other modules that are included in the default installation of Nuxt 3, including:

- Axios: A module that provides an easy-to-use API for making HTTP requests in Nuxt projects.
- Auth: A module that provides authentication and authorization functionality for Nuxt projects.
- PWA: A module that adds support for progressive web apps (PWAs) in Nuxt projects.
- Content: A module that provides a way to manage and display content in Nuxt projects.

By using these modules in combination with Vuex, you can build powerful and scalable applications with Nuxt 3.

## Conclusion

In conclusion, Nuxt 3 does not support Vuex instead, Pinia is integrated into the Nuxt module.

While there are some changes in the way that Pinia is used in Nuxt 3 compared to Nuxt 2, the overall process of using Pinia in Nuxt is similar and straightforward.

By leveraging the power of Pinia in your Nuxt 3 projects, you can easily manage complex application states and improve the overall performance and scalability of your application.
