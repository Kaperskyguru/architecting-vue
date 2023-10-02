---
date: 2023-09-20T10:30:00
updatedAt: 2023-09-20T10:30:00
title: How to use Pinia in Vue 3
permalink: /blog/how-to-use-pinia-in-vue-3/
description: This article aims to guide you through the usage of Pinia for managing state in a modern vue3 website.
layout: article
author: Divine Udise
author_profile_pic: /static/solomon-eseme.jpg
author_link: https://solomoneseme.com
tags: ["blog"]
---

# Introduction

State management is one of the requirements in building a modern vue 3 website. Functionalities like authentication, cart items, light/dark mode need to be accessed by two or more components in a vue website, hence the need for state management.
This article aims to guide you through the usage of Pinia for managing state in a modern vue3 website.

# What is Pinia?

Pinia is a state management library provided by the creator of vue for efficient state management with no boilerplate code. It provides you with a universal store to access state and modify it from any component in your codebase.

## Prerequisites

For the purpose of this tutorial, a basic knowledge of Javascript and vue3’s composition API is needed.
Also, of course, a code editor (preferably Visual Studio Code).

# Setting Up Vue3 with Pinia

First off, open your command line interface, navigate to your preferred folder directory and type the command **npm create vue@latest**

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/create-vue-3.jpeg', 'A screenshot showing how to create Vue 3', { maxWidth: 848 }  %}

This will help you create a vue codebase with your preferred configurations by selecting either yes or no when a prompt question is shown.
Name your project and click enter.
For this article, we are going to click no to every prompt question except for the question shown for adding Pinia and vue router

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/vue3.jpeg', 'A screenshot showing how to create Vue 3', { maxWidth: 848 }  %}

After all configurations, type the following commands to get your project running

```bash
- **cd your-project-name**
- **npm install**
- **npm run dev**
```

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/npm.jpeg', 'A screenshot showing how to run npm', { maxWidth: 848 }  %}

You should see a page like the one below on localhost:5173

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/preview.jpeg', 'A screenshot showing successful installation of vue 3', { maxWidth: 848 }  %}

# Working With Pinia

## Step 1(Creating Store)

A store is a place or container which holds our state. This store(or stores) can be accessed from anywhere in your codebase(we will get to that).
Having done the initial vue setup, delete all the boilerplate codes and files in the components and store folder.
To keep things simple, we are going to build a simple styleless website that displays a list of items on one page and a cart which stores the items which the user liked, just like an e-commerce website.  
Now, inside the stores folder, create a file called cart.js. This file will contain and store objects which the user adds in a state array(cartItems).
In that file, import **defineStore** from Pinia and **ref** from vue.

    import { ref, computed} from 'vue'
    import { defineStore} from 'pinia'

This define store we have just imported, as it’s name aptly implies, is used to define or create a store instance. This method tells vue and your whole codebase that the function to which it is attached is a store.
To see defineStore in action, create and export a variable(const) and assign defineStore to it.

```js
    export const = defineStore()
```

But before you name this variable you have just created, there are somethings you need to know about pinia’s preferred naming convention for stores:

- The store variable’s name should begin with **use**
- Then the name of the store should follow the use i.e the name of the file you are creating the store in(in our case, store)
- Lastly, the name should end with **store**

Following the above naming convention, our store function’s name will be called **useCartStore**

```js
export const useCartStore = defineStore();
```

It is important to know that defineStore takes two arguments:

- The store name(string)
- An arrow function

For our store name, we will go with **cart**

```js
export const useCartStore = defineStore("cart", () => {});
```

Among other things, the arrow function must return an object. This object will contain everything you create inside the arrow function.

```js
export const useCartStore = defineStore("cart", () => {
  return {};
});
```

## Step 2( State, getters, actions)

\***\*The state, getters and actions are the things that are found inside a store. Let’s know what they are.
**State:** _This is a named const that has a_ \***ref**\* _assigned to it. A ref can be a string, array, object, boolean or null. There is usually only one per store. If a store has more than one state, create another store for it._
**Getters:** _These are named const that has_ \***computed**\* _assigned to them. They are used when you want to mutate the state’s original value before accessing it._
**Actions:** _These are named functions which are used to_ \***modify*\*\* *a state’s property or perform an action through or with the state.\*

To create a state, go to the arrow function inside the defineStore and create a const. Assign the ref method to the created const. In our case, we need an array to store objects. We will call this array **cartItems**
After creating the state, make sure to include it in the returned object so that it can be accessed globally.

```js
export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  return { cartItems };
});
```

Let’s create a getter that sorts our array in the order in which they are added. Remember, the computed keyword is used for this:

```js
export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  //getter
  const sortItems = computed(() =>
    [...cartItems.value].sort((a, b) => b.id - a.id)
  );

  return { cartItems, sortItems };
});
```

Lastly, let’s create two actions; one for adding an object to the cartItems state using the push method, the other for removing the item added from the cartItems state using the filter method.

```js
export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  //getter
  const sortItems = computed(() =>
    [...cartItems.value].sort((a, b) => b.id - a.id)
  );

  //actions
  const addItems = (item) => {
    //Find the object whose id is similar to the item
    const checkItems = cartItems.value.find((x) => x.id === item.id);
    if (!checkItems) {
      cartItems.value.push(item);
    }
  };
  const removeItems = (id) => {
    cartItems.value = cartItems.value.filter((x) => x.id !== id);
  };
  return { cartItems, sortedItems, addItems, removeItems };
});
```

Notice that we added a little bit of modification to the addItems action; it will check if the object has been added so as to avoid adding it twice.

## Step 3( Website UI)

This tutorial will not be complete without a UI to test our state and modifiers. So, we will create two pages with simple UIs and an array of 10 objects.
In the views folder, create a new file called CartView.vue

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/websiteui.jpeg', 'A screenshot showing website ui', { maxWidth: 848 }  %}

Click on the HomeView and create a ref array of 10 objects. Map through those objects and display them with a button each with some basic styling

```js
    <script setup>
    import { ref } from 'vue';

    const newItems = ref([
      {
        title: 'HP Laptop',
        id: 1
      },
      {
        title: 'Iphone X',
        id: 2
      },
      {
        title: 'Travelling Bag',
        id: 3
      },
      {
        title: 'Nike Shoes',
        id: 4
      },
      {
        title: 'Leather Belts',
        id: 5
      },
      {
        title: 'Mechanical Keyboard',
        id: 6
      },
      {
        title: 'Water Gun',
        id: 7
      },
      {
        title: 'Earth Globe',
        id: 8
      },
      {
        title: 'Javascript book',
        id: 9
      },
      {
        title: 'Black T-shirt',
        id: 10
      },
    ])
    </script>
    <template>
      <main>
        <h1>Items for sale</h1>
        <div v-for="item in newItems" :key="item.id">
          <div class="item">
            <h1>
              {{ item.title }}
            </h1>
            <button>Add</button>
          </div>
        </div>
      </main>
    </template>

    <style>
      .item {
        width: 50em;
        height: auto;
        margin: 10px auto;
        border: solid black 3px;
      }
      button {
        margin-left: 10px;
        height: 20px;
        width: 70px;
      }
    </style>
```

Then, click on the CartView file and create a div with a h1 tag

```js
<template>
  <div>
    <h1>This is the cartView page</h1>
  </div>
</template>
```

Now go to the router folder and open the index.js file. Update the about route and change it to cart

```js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
  ],
});
export default router;
```

Lastly, go to the App.vue file and create a new RouterLink for the cart page

```js
    <script setup>
      import { RouterLink, RouterView} from 'vue-router'
    </script>
    <template>
      <header>
        <RouterLink to="/">
          <h2>Home</h2>
        </RouterLink>
        <RouterLink to="/cart">
          <h2>Cart</h2>
        </RouterLink>
      </header>
      <RouterView />
    </template>
    <style>
      header {
        display: flex;
      }
      header :first-child {
        margin-right: 10px;
      }
    </style>
```

Your UI should look like this:

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/uipreview.jpeg', 'A screenshot showing ui cart', { maxWidth: 848 }  %}

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/cartpage.jpeg', 'A screenshot showing cart page', { maxWidth: 848 }  %}

## Step 4( Accessing store in Vue components)

For this next step, we will access the store and its components from the HomeView and CartView components.
Open the HomeView.vue file and import useCartStore

```js
import { useCartStore } from "../stores/cart";
```

Now, create a const called store and assign our useCartStore function to it

```js
const store = useCartStore();
```

Then, destructure the methods you need from the store. In this case, we need only the addItems action.

```js
const { addItems } = store;
```

Link the addItems action to the button to act when it is clicked. Do not forget to pass in the clicked item as an argument

```js
    <button @click="addItems(item)">Add</button>
```

Next, go to the CartView.vue file and the useCartStore.

```js
<script setup>import {useCartStore} from '../stores/cart'</script>
```

Create a const called store which you will assign the useCartStore to and destructure the removeItem action and the sortedItems getter from the store

```js
const store = useCartStore();
const { removeItems, sortedItems } = store;
```

Because the cartItems array, which we will map through, is always changing, we are going to need a Pinia method called **storeToRefs.**
_storeToRefs is a Pinia method which makes a state reactive._
Directly accessing the cartItems array is going to cause reactivity issues(the array will not update when it is supposed to). So, storeToRef will add reactivity to the state. Let’s see how it works:
Inside the same file, import storeToRef from Pinia

```js
import { storeToRefs } from "pinia";
```

Destructure the cartItems from the storeToRef instance which you will assign to a const. Pass the store variable as an argument

```js
const { cartItems } = storeToRefs(store);
```

Now go to the template tag and map over the cartItems array to display the added items with a remove button each

```js
    <template>
      <h1>This is the cart page</h1>
      <main v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="item">
          <h1>{{ item.title }}</h1>
          <button>Remove</button>
        </div>
      </main>
      <main v-else>
        <h2>There is nothing in your cart</h2>
      </main>
    </template>
```

From the code above, you can see that we created a condition that will display a h2 tag when there is nothing inside the cartItems array.
Going on, link the removeItem action to the remove button to delete an item when it is clicked. Make sure to pass the item’s id as an argument.

```js
    <button @click="removeItems(item.id)">Remove</button>
```

You will want to see the items which you added recently to be displayed first. For that, replace cartItems with sortedItems in the v-for loop and destructure it from the storeToRefs to make it reactive

```js
    <script setup>
    import { useCartStore } from '../stores/cart'
    import { storeToRefs } from 'pinia'
    const store = useCartStore()
    const { removeItems } = store
    const { cartItems, sortedItems } = storeToRefs(store)
    </script>
    <template>
      <h1>This is the cart page</h1>
      <main v-if="sortedItems.length > 0">
        <div v-for="item in sortedItems" :key="item.id" class="item">
          <h1>{{ item.title }}</h1>
          <button @click="removeItems(item.id)">Remove</button>
        </div>
      </main>
      <main v-else>
        <h2>There is nothing in your cart</h2>
      </main>
    </template>
```

This tutorial will not be complete if we did not test our codes in a UI. So, go to your browser where **localhost:5173** is running and click on any add button.

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/addbutton.jpeg', 'A screenshot showing add button', { maxWidth: 848 }  %}

Navigate to the cart page. You should see the item you added displayed on the page.

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/removebutton.jpeg', 'A screenshot showing remove button', { maxWidth: 848 }  %}

Click the remove button to remove the item from the page.

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/removebtn.jpeg', 'A screenshot showing remove button', { maxWidth: 848 }  %}

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/removebutton.jpeg', 'A screenshot showing removed button', { maxWidth: 848 }  %}

## Step 5( Pinia Devtools)

Pinia devtools are provided by vue to make your developer experience less stressful and more interesting. This way, you can test your store and modifiers in the console without needing a UI.
To access Pinia devtools, go to [chrome web store](https://chrome.google.com/webstore/category/extensions) and search for vue.js devtools

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/devtools.jpeg', 'A screenshot showing dev tools', { maxWidth: 848 }  %}

If you already have it installed like i have, the button will display ‘remove from chrome else it will display add to chrome. Click the button to download it.

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/vuedevtool.jpeg', 'A screenshot showing vue dev tool', { maxWidth: 848 }  %}

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/addtochrome.jpeg', 'A screenshot showing add to chrome button', { maxWidth: 848 }  %}

When the vue devtools is added, there is no need for further configurations to get Pinia devtools. Vue’s devtools checks your vue website and automatically generates devtools for any vue package which has been installed in your codebase.
So, open your console, click on vue, and reload your webpage. Vue’s devtools should pickup Pinia in your package and generate devtools for it

{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/previewdevtool.jpeg', 'A screenshot showing dev tool', { maxWidth: 848 }  %}
{% responsiveImage './blog/articles/how-to-use-pinia-in-vue-3/images/usedevtool.jpeg', 'A screenshot showing used dev tool', { maxWidth: 848 }  %}

From the image above, you can see that Pinia’s devtools displays your state and getters.
So from the console, you could add new values, delete them, and reset the state comfortably.

# Conclusion

In the course of this article, we have discussed the concept of state management with Pinia, setting up state and modifications, accessing the state universally without errors, and Pinia devtools.
Here is the [github repository](https://github.com/Divine-offishal/Pinia-tutorial) for all the codes we wrote
For further study, visit the [Pinia docs](https://pinia.vuejs.org/)
