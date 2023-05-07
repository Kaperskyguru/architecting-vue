---
date: 2023-05-06T10:30:00
updatedAt: 2023-05-06T10:30:00
title: How to Start a Vue.js 3 App with Vite
permalink: /blog/how-to-start-a-vue-3-app-with-vite/
description: In this article, we will walk through the steps to start a Vue.js 3 application with Vite.
layout: article
author: Solomon Eseme
author_profile_pic: /static/solomon-eseme.jpg
author_link: https://solomoneseme.com
tags: ["blog"]
---

Vue.js is one of the most popular front-end frameworks used by developers all over the world. It allows you to build dynamic, reactive, and user-friendly interfaces with ease. In this article, we will walk through the steps to start a Vue.js 3 application with Vite.

## **What is Vite?**

Vite is a build tool that is used to build modern web applications. It offers a fast and efficient development environment, with hot module replacement and instant server-side rendering. It has been designed to work with modern front-end frameworks such as Vue.js, React, and Angular.

## **Prerequisites**

Before we start, ensure that you have Node.js and npm installed on your machine. You can download the latest version of Node.js from **[https://nodejs.org/](https://nodejs.org/)**.

## **Step 1: Create a New Vue.js Project with Vite**

To create a new Vue.js project with Vite, open a terminal window and run the following command:

```bash
npm init vite@latest my-vue-app --template vue
```

This will create a new Vue.js project in the `my-vue-app` directory with Vite as the build tool.

After running the above command, you will be asked to select a package manager. You can choose between npm and yarn. For the purpose of this article, we will be using npm.

Once you have selected the package manager, Vite will install all the necessary dependencies and create the basic project structure.

## **Step 2: Run the Vue.js App**

To run the Vue.js app, navigate to the project directory and run the following command:

```bash
cd my-vue-app
npm run dev
```

This will start the development server and open the app in your default web browser. You should see the basic Vue.js app running on **`http://localhost:3000/`**.

## **Project Structure**

Let's take a quick look at the project structure that was created for us:

{% responsiveImage './blog/articles/how-to-start-a-vue-3-app-with-vite/images/vite-project-structure.jpg', 'A screenshot showing vite\'s project structure example', { maxWidth: 848 }  %}

The newly created Vue project has the following folders and files:

- `src`: the sources of your project
- `public`: all the content that will be directly put at the root of the web server, without going through Webpack
- `package.json`: the NPM package information of the project (version, dependencies, scripts etc.)
- `vue.config.js`: the configuration file for Vite on this project
- `assets`: static resources (images, files) that will be imported by Webpack within your Vue components
- `components`: your Vue components (distributed by folder by "module" of your application)
- `App.vue`: Your root Vue component, which contains the entire application
- `main.js`: the entry point of the entire application's JavaScript code

## **Step 3: Explore the Basic Vue.js App**

Let's explore the basic Vue.js app that was created by Vite. The app consists of two components:

- **`App.vue`** - The root component of the app.
- **`HelloWorld.vue`** - A child component of the **`App`** component.

Open the **`App.vue`** file in your code editor and you will see the following code:

```js
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue 3 + Vite"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
```

The **`template`** section defines the structure of the component. In this case, it contains an image and the **`HelloWorld`** component.

The **`script`** section defines the behavior of the component. It imports the **`HelloWorld`** component and sets it as a child component of the **`App`** component.

Open the **`HelloWorld.vue`** file in your code editor and you will see the following code:

```js
<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
```

The **`template`** section defines the structure of the component. In this case, it contains an **`h1`** tag with the **`msg`** property.

The **`script`** section defines the behavior of the component. It exports the **`HelloWorld`** component and sets the **`msg`** property as a prop of the component.

### **Conclusion**

Vue.js is a powerful front-end framework that makes it easy to create fast and scalable web applications. In this tutorial, we covered the basics of setting up a new Vue project and creating your first component. We also discussed some of the advantages of using Vue for building enterprise-level projects.

Vue.js is a great choice for developers who want to build modern, responsive, and performant web applications. With its easy-to-learn syntax, powerful data binding capabilities, and vast ecosystem of plugins and extensions, Vue is a framework that you can rely on for building robust and scalable applications.

I hope you found this tutorial helpful. If you have any questions or comments, please feel free to leave them below. Happy coding!
