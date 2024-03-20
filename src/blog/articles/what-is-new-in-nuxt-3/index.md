---
date: 2024-03-20T10:30:00
updatedAt: 2024-03-20T10:30:00
title: What is new in Nuxt 3
permalink: /blog/what-is-new-in-nuxt-3/
description: In this article, we are going to highlight some of the key features of Nuxt 3 and explore what the hype all about and why is everyone talking about it.
layout: article
author: Ugochukwu Egeonu
author_profile_pic: /static/ugochukwu-egeonu.png
author_link: https://twitter.com/hugolee003
tags: ["blog"]
---

{% responsiveImage './blog/articles/what-is-new-in-nuxt-3/hero.jpg', 'A screenshot showing Nuxt 3', { maxWidth: 848 }  %}

## **What is Nuxt.js?**

[Nuxt.js](https://nuxtjs.org/) is a progressive Vue.js framework designed to make web development more intuitive and efficient. If you've been in the Vue.js ecosystem, you might already be familiar with Nuxt.js, known for its focus on server-side rendering, static site generation, and excellent developer experience. It is a complete rewrite of Nuxt 2, and is based on a new set of technologies. Nuxt 3 is built on top of Vue 3, and is designed to address some limitations of single-page applications (SPAs).

## **Nuxt 3: What’s the hype?**

Now, let's fast forward to Nuxt 3—the latest iteration. What's the hype all about and why is everyone talking about it? Well, Nuxt 3 isn’t just your regular framework upgrade; It creates a whole new developer experience. Here are a few highlights:

### 1. Modular Architecture:

Nuxt 3 introduces a modular architecture that allows developers to pick and choose the specific features they need. This modular approach enhances flexibility, making it easier to tailor Nuxt to suit specific project requirements.

```js
// nuxt.config.js
export default {
  buildModules: [
    "@nuxt/content", // Enable the Content module
    "@nuxt/http", // Enable the HTTP module
  ],
};
```

### 2. **Improved Developer Experience (IDE):**

Say hello to a smoother development journey! Nuxt 3 comes with improved tooling, better error handling, and a more intuitive configuration system, making it a joy to work with.

```js
// nuxt.config.js
export default {
  // Improved error handling
  generate: {
    fallback: true,
  },
};
```

### 3. **Composition API Integration:**

Harness the power of the Composition API from Vue.js in your Nuxt 3 projects. This integration brings more flexibility and scalability to your application structure.

```js
// components/MyComponent.vue
<template>
  <div>{{ myComputedValue }}</div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const myValue = ref('Hello, from Nuxt 3 here!');
  const myComputedValue = computed(() => myValue.value.toUpperCase());
</script>
```

### 4. Perfomance Boost:

Expect improvements in the performance of your Nuxt apps under the hood. Nuxt 3 aims to make your applications faster and more efficient, ensuring a snappy user experience.

### 5. NuxtKit:

Meet NuxtKit, a new tool that simplifies the process of building static sites with Nuxt 3. It's an absolute game-changer for those who love the speed and simplicity of static site generation.

```bash
# Install NuxtKit
npm install -g nuxtkit

# Create a new project
nuxtkit create my-nuxtkit-project
```

## **Installation: Getting started with Nuxt 3**

**Step 1: Install Nuxt 3**

```bash
# Using npm
npm install create-nuxt-app -g

# Using yarn
yarn global add create-nuxt-app
```

**Step 2: Create a new project**

```bash
npx create-nuxt-app my-nuxt3-project
```

Follow the prompts to customize your project settings. Once done, navigate into your project folder:

```bash
cd my-nuxt3-project
```

**Step 3: Run Your Nuxt 3 Project**

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

And there you have it! Your Nuxt 3 project is now up and running. Explore the possibilities, play around with the code, and enjoy the development experience that Nuxt 3 has to offer. You can also refer to the [official documentation](https://nuxt.com/docs/getting-started/introduction)

Thanks for reading and I’ll see you in the next one 😉
