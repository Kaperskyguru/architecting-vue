---
date: 2023-05-29T19:30:00
updatedAt: 2023-05-29T19:30:00
title: Deep Dive Vue 3 Watchers
permalink: /blog/deep-dive-vue-watchers/
description: In this article, we will take a deep dive into Vue 3 watchers, exploring their functionality, and use cases, and providing code examples along the way.
layout: article
author: Solomon Eseme
author_profile_pic: /static/solomon-eseme.jpg
author_link: https://solomoneseme.com
tags: ["blog"]
---

## **Introduction**

In Vue.js, one of the core concepts for handling reactive data is through the use of **watchers**. Watchers allow developers to track changes to a specific piece of data and react accordingly.

With the release of Vue 3, the composition API introduced a more powerful and flexible way of working with watchers.

In this article, we will take a deep dive into Vue 3 watchers, exploring their functionality, and use cases, and providing code examples along the way.

## **Understanding Watchers in Vue 3**

Watchers in Vue 3 are functions that observe changes to a specific reactive property or computed value. When the watched property changes, the watcher function is triggered, allowing you to perform custom logic or side effects in response to the change.

Watchers provide a reactive and declarative way of handling data dependencies in your Vue components.

### **The Watcher Lifecycle**

Vue 3 introduces a new API called **`watch`** that simplifies the process of creating and managing watchers. The **`watch`** function can be used in different forms, depending on your use case.

It takes two main arguments: the value to watch and the watcher function. Additionally, you can provide an options object to fine-tune the behavior of the watcher.

Here's a typical structure of a watcher using the **`watch`** function:

```jsx
watch(
  valueToWatch,
  (newValue, oldValue) => {
    // Watcher function logic
  },
  options
);
```

The watcher function receives two arguments: the **`newValue`** and the **`oldValue`** of the watched property. This allows you to compare the previous and current values and perform specific actions based on the changes.

### **Dependency Tracking**

One of the powerful features of Vue 3 watchers is their ability to automatically track dependencies. This means that if the watched property itself is reactive or contains reactive properties, any changes to those dependencies will trigger the watcher.

This automatic dependency tracking ensures that your watchers always have the most up-to-date information.

Vue 3 achieves this by leveraging the underlying reactivity system. When a watcher is created, it establishes a dependency relationship with the reactive properties it accesses. Whenever those properties change, the watcher is automatically re-evaluated.

### **Immediate Watchers**

By default, Vue 3 watchers are **lazy**, which means they don't trigger immediately upon creation. They wait until the watched property changes for the first time.

However, there are cases where you might want a watcher to trigger immediately upon creation. For such scenarios, you can use the **`immediate`** option.

When the **`immediate`** option is set to **`true`**, the watcher function is executed immediately after the watcher is created. This allows you to perform an initial setup or handle any side effects before the property actually changes.

Here's an example of a watcher with the **`immediate`** option:

```jsx
watch(
  valueToWatch,
  (newValue, oldValue) => {
    // Watcher function logic
  },
  { immediate: true }
);
```

### **Stop and Cleanup Watchers**

In some cases, you may need to stop a watcher from watching or clean up its resources. Vue 3 provides a way to stop a watcher by calling the **`stop`** method returned by the **`watch`** function. This method removes the watcher from Vue's internal tracking system.

Here's an example of how to stop a watcher:

```jsx
const stopWatcher = watch(valueToWatch, (newValue, oldValue) => {
  // Watcher function logic
});

// Stop the watcher
stopWatcher();
```

Stopping a watcher is particularly useful when dealing with dynamic component unmounting or when you no longer need to track changes to a specific property.

## **Use Cases and Examples**

Let's explore some common use cases where Vue 3 watchers can be applied and provide code examples to illustrate their implementation.

### **Watching a Reactive Property**

One of the primary use cases for watchers is to track changes to a reactive property. This is useful when you need to perform specific actions based on the changes to that property.

Here's an example:

```jsx
import { ref, watch } from "vue";

export default {
  setup() {
    const count = ref(0);

    watch(count, (newValue, oldValue) => {
      console.log(`Count changed from ${oldValue} to ${newValue}`);
    });

    return { count };
  },
};
```

In this example, we have a reactive property **`count`** that we want to watch. Whenever **`count`** changes, the watcher function is triggered, and a message is logged to the console.

### **Watching Multiple Properties**

Vue 3 watchers also support watching multiple properties at once. This is useful when you have dependencies across multiple reactive properties and want to respond to changes in any of them.

Here's an example:

```jsx
import { ref, watch } from "vue";

export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");

    watch(
      [firstName, lastName],
      ([newFirstName, newLastName], [oldFirstName, oldLastName]) => {
        console.log(
          `Name changed from ${oldFirstName} ${oldLastName} to ${newFirstName} ${newLastName}`
        );
      }
    );

    return { firstName, lastName };
  },
};
```

In this example, we have two reactive properties, **`firstName`** and **`lastName`**. The watcher function receives an array of the new and old values for each property, allowing you to perform actions based on the changes to both properties.

### **Watching Computed Values**

Watchers can also be used to track changes to computed values. Computed values are derived from reactive properties and are automatically updated when their dependencies change. By watching a computed value, you can react to changes and perform additional computations or side effects.

Here's an example:

```jsx
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const length = ref(0);
    const text = ref("");

    const computedLength = computed(() => text.value.length);

    watch(computedLength, (newLength, oldLength) => {
      console.log(`Text length changed from ${oldLength} to ${newLength}`);
    });

    return { text };
  },
};
```

In this example, we have a computed value **`computedLength`** that calculates the length of the **`text`** property. Whenever the length changes, the watcher function is triggered, logging the new and old length values.

## **Conclusion**

Vue 3 watchers provide a powerful way to track changes to reactive properties, computed values, or combinations thereof. With their automatic dependency tracking and flexible options, you can create reactive and responsive components in your Vue applications.

By understanding the watcher lifecycle, leveraging immediate watchers, and properly stopping them when necessary, you can effectively manage data dependencies and side effects. Experiment with Vue 3 watchers in your projects and explore the various use cases to take full advantage of their capabilities.

Remember, Vue's official documentation is always a valuable resource for more in-depth information on Vue 3 watchers and other features. Make sure to consult the official Vue 3 documentation for the latest updates and examples.

## **Resources**

- **[Vue 3 Composition API Documentation: Watch](https://v3.vuejs.org/api/composition-api.html#watch)**
- **[Vue 3 Composition API RFC: Watchers](https://composition-api.vuejs.org/api.html#watch)**
- **[Vue Mastery: Vue 3 Watchers](https://www.vuemastery.com/blog/vue-3-watchers/)**
- **[Vue.js 3 Fundamentals: Reactive Values & Watchers](https://www.vuemastery.com/courses/vue-3-fundamentals/reactive-values-and-watchers)**
