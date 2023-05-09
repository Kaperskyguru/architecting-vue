---
date: 2023-05-08T15:30:00
updatedAt: 2023-05-08T15:30:00
title: Exploring Vue 3 Router Guards
permalink: /blog/exploring-vue-3-router-guards/
description: In this article, we'll explore the concept of Vue 3 router guards, discuss their various types and use cases, and provide examples and code snippets to help you get started using router guards in your own Vue 3 applications.
layout: article
author: Solomon Eseme
author_profile_pic: /static/solomon-eseme.jpg
author_link: https://solomoneseme.com
tags: ["blog"]
---

Vue 3 comes with a new and improved router, featuring an updated routing API and improved support for advanced routing scenarios. One of the most powerful features of the new Vue 3 router is the ability to define router guards, which allow you to control access to routes and execute code before and after route navigation.

In this article, we'll explore the concept of Vue 3 router guards, discuss their various types and use cases, and provide examples and code snippets to help you get started using router guards in your own Vue 3 applications.

## **What are Vue 3 Router Guards?**

Vue 3 router guards are functions that you can define on a Vue Router instance to control access to routes and execute code before and after route navigation. They provide a way to intercept and manipulate route navigation, and can be used for a variety of purposes such as:

- Checking if the user is authenticated before allowing access to a route
- Redirecting the user to a different route if certain conditions are met
- Modifying the route object before it is passed to the component

There are four types of router guards in Vue 3:

1. Global before Guards - These are executed before any route navigation, and are useful for implementing application-wide behavior such as authentication checks or analytics tracking.
2. Per-Route before Guards - These are executed before the corresponding route is navigated to, and are useful for implementing route-specific behavior such as authorization checks or fetching data for a particular view.
3. Per-Route after Guards - These are executed after the corresponding route is navigated to, and are useful for implementing behavior that should occur after a particular route is navigated to.
4. Global after Guards - These are executed after any route navigation, and are useful for implementing behavior that should occur after any route is navigated to, such as cleaning up resources or logging analytics data.

## **Using Router Guards in Vue 3**

To use router guards in Vue 3, you first need to create a Vue Router instance using the **`createRouter`** function from the **`vue-router`** package. Once you have created the router instance, you can define your router guards using the following API:

```js
const router = createRouter({
  routes: [...],
  // Define your router guards here
  beforeEach(to, from, next) {
    // Your code here
  },
  afterEach(to, from) {
    // Your code here
  }
})
```

The **`beforeEach`** and **`afterEach`** guards are global guards that are executed before and after any route navigation, respectively. To define per-route guards, you can add an array of **`beforeEnter`** guards to a specific route definition:

```js
const routes = [
  {
    path: "/",
    component: Home,
    beforeEnter(to, from, next) {
      // Your code here
    },
  },
  // More route definitions here
];

const router = createRouter({
  routes,
});
```

In addition to **`beforeEnter`**, you can also define **`beforeRouteEnter`**, **`beforeRouteUpdate`**, and **`beforeRouteLeave`** guards on individual route components. These guards receive additional arguments and provide more fine-grained control over the navigation behavior.

Here is an example of how you can use a **`beforeEnter`** guard to check if the user is authenticated before allowing access to a route:

```js
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter(to, from, next) {
      const isAuthenticated = /* Your authentication check code here */
      if (isAuthenticated) {
        next()
      } else {
        next('/login')
      }
    }
  },
  // More route definitions here
]

const router = createRouter
```

## **Vue 3 Router Guard API**

Now that we have a basic understanding of what router guards are and how they can be used, let's explore the API for defining and working with router guards in Vue 3.

### **Global Before Guards**

Global before guards are executed before any route navigation occurs. They can be used for implementing application-wide behavior such as authentication checks or analytics tracking. Here is an example of how you can define a global before guard:

```js
const router = createRouter({
  routes: [...],
  beforeEach(to, from, next) {
    // Your code here
  }
})
```

The **`beforeEach`** guard receives three arguments:

- **`to`**: The target **`Route`** object that is being navigated to.
- **`from`**: The current **`Route`** object that is being navigated away from.
- **`next`**: A function that must be called to indicate that the navigation should proceed. You can call **`next()`** to allow the navigation to proceed, or pass an argument to redirect to a different route, or call **`next(false)`** to abort the navigation.

### **Global After Guards**

Global after guards are executed after any route navigation occurs. They can be used for implementing behavior that should occur after any route is navigated to, such as cleaning up resources or logging analytics data. Here is an example of how you can define a global after guard:

```js
const router = createRouter({
  routes: [...],
  afterEach(to, from) {
    // Your code here
  }
})
```

The **`afterEach`** guard receives two arguments:

- **`to`**: The target **`Route`** object that was navigated to.
- **`from`**: The previous **`Route`** object that was navigated away from.

### **Per-Route Before Guards**

Per-route before guards are executed before the corresponding route is navigated to. They can be used for implementing route-specific behavior such as authorization checks or fetching data for a particular view. Here is an example of how you can define a per-route before guard:

```js
const routes = [
  {
    path: "/",
    component: Home,
    beforeEnter(to, from, next) {
      // Your code here
    },
  },
  // More route definitions here
];

const router = createRouter({
  routes,
});
```

The **`beforeEnter`** guard receives the same three arguments as the global **`beforeEach`** guard.

### **Per-Route After Guards**

Per-route after guards are executed after the corresponding route is navigated to. They can be used for implementing behavior that should occur after a particular route is navigated to. Here is an example of how you can define a per-route after guard:

```js
const routes = [
  {
    path: "/",
    component: Home,
    afterEnter(to, from) {
      // Your code here
    },
  },
  // More route definitions here
];

const router = createRouter({
  routes,
});
```

The **`afterEnter`** guard receives the same two arguments as the global **`afterEach`** guard.

### **Per-Route Navigation Guards**

In addition to the global and per-route guards, Vue 3 router also provides four more guards that can be defined on individual route components:

- **`beforeRouteEnter`**: Called before the route component is instantiated, allowing you to access the component instance via **`this`** once it has been created.
- **`beforeRouteUpdate`**: Called when the route is reused but with a different parameter. Useful for updating the component with new data.
- **`beforeRouteLeave`**: Called before the route is navigated away from, allowing you to prompt the user for confirmation or perform other cleanup tasks.
- **`afterRouteLeave`**: Called after the route is navigated away from, useful for cleaning up resources or logging analytics data.

Here is an example of how you can define these per-route navigation guards:

```js
const routes = [
  {
    path: "/",
    component: Home,
    beforeRouteEnter(to, from, next) {
      // Your code here
      next();
    },
    beforeRouteUpdate(to, from, next) {
      // Your code here
      next();
    },
    beforeRouteLeave(to, from, next) {
      // Your code here
      next();
    },
    afterRouteLeave(to, from) {
      // Your code here
    },
  },
  // More route definitions here
];

const router = createRouter({
  routes,
});
```

Note that the **`beforeRouteEnter`** and **`beforeRouteUpdate`** guards receive an additional argument **`next`**, which must be called to indicate that the navigation should proceed. The **`beforeRouteLeave`** guard also receives the **`next`** argument, but it can also return a boolean value to indicate whether the navigation should proceed.

### **Using Multiple Guards**

You can define multiple guards of the same type for a single route by passing an array of functions instead of a single function. For example, here is how you can define multiple **`beforeEnter`** guards for a route:

```js
const routes = [
  {
    path: "/",
    component: Home,
    beforeEnter: [
      (to, from, next) => {
        // Your first guard here
        next();
      },
      (to, from, next) => {
        // Your second guard here
        next();
      },
    ],
  },
  // More route definitions here
];

const router = createRouter({
  routes,
});
```

When multiple guards are defined, they will be executed in the order in which they are defined, with each guard receiving the same arguments as the global **`beforeEach`** guard.

### **Conclusion**

Vue 3 router guards are a powerful and flexible feature that allow you to implement custom behavior for your application's routes. With global and per-route guards, as well as per-route navigation guards, you can handle a wide range of use cases, from authentication checks to data fetching and cleanup tasks.

By understanding the different types of guards and how to define them using the Vue 3 router API, you can take full advantage of this feature and create more robust and dynamic applications.

I hope this article has been helpful in exploring Vue 3 router guards. If you have any questions or feedback, feel free to leave a comment below.

### **Resources**

- **[Vue Router Documentation](https://router.vuejs.org/)**
- **[Vue Router Navigation Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html)**
- **[Vue 3 Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html)**
