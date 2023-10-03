---
date: 2023-10-03T10:30:00
updatedAt: 2023-10-03T10:30:00
title: Component-based architecture with Vue 3
permalink: /blog/component-based-architecture-with-vue-3/
description: In web development, component-based architecture is a fundamental concept. It involves breaking down user interfaces into manageable, reusable chunks called components.
layout: article
author: Ekemini Sam
author_profile_pic: /static/ekemini_sam.png
author_link: https://solomoneseme.com
tags: ["blog"]
---

{% responsiveImage './blog/articles/component-based-architecture-with-vue-3/hero.png', 'A screenshot showing Component-based architecture with Vue 3', { maxWidth: 848 }  %}

In web development, component-based architecture is a fundamental concept. It involves breaking down user interfaces into manageable, reusable chunks called components.

Say you're building an [e-commerce application](https://www.shopify.com/ng/blog/ecommerce-app#:~:text=An%20ecommerce%20app%20allows%20users,shipping%2C%20and%20order%20management%20capabilities.), you can build up components that will have similar functions, like the pages for products showcase and re-use them. In the long run, it saves product development time.

These components can be customized and composed to build complex applications.

This article will explore why component-based architecture is essential in modern web development and how [Vue 3](https://madewithvuejs.com/blog/vue-3-roundup#:~:text=By%20now%20you're%20probably,official%20release%20in%20September%202020.) can help you leverage this approach.

## Why Component-Based Architecture Matters

Component-based architecture offers several key benefits:

1. **Reusability**: Components can be reused throughout your application, saving development time and effort. With Vue 3, you can easily create, share, and reuse components.

2. **Maintainability**: Web applications built using this architecture are more maintainable. Each component is isolated, functioning as an individual module. This isolation allows for efficient testing and updates without affecting other parts of the application.

3. **Flexibility**: Component-based architecture enables greater flexibility within development teams. Different team members can work on various components independently and later integrate them to create the final application.

## Vue 3: A Framework for Component-Based Architecture

[Vue 3](https://vuejs.org/) is a JavaScript framework that excels in component-based architecture.
It offers a powerful yet straightforward way to build applications using components.
You can learn more about Vue 3 from the [documentation](https://vuejs.org/guide/introduction.html).

### Setting Up Vue 3

Before diving into building Vue 3 components, you need to set up a Vue 3 project. You can do this using Vue CLI, a command-line tool for quickly scaffolding Vue projects. Follow the [official Vue CLI documentation](https://cli.vuejs.org/guide/installation.html) to get started.

Example of a Vue 3 component:

```js
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped>
/* Component-specific styles go here */
</style>
```

We've defined a basic Vue 3 component with a template, script, and scoped styles.
You can reuse this component by passing `title` and `content` as properties.

### Data Binding and Props

Vue 3 provides a robust system for [Data binding](https://v1.vuejs.org/guide/syntax.html) and passing [Props](https://vuejs.org/guide/components/props.html) between components.

Let's explore these concepts in more detail.

#### Data Binding

Data binding allows you to connect the data in your component's script to the template. You can use two types of data binding in Vue 3:

- **[One-way Data Binding](https://www.koderhq.com/tutorial/vue/one-way-databinding/#:~:text=Databinding%20is%20the%20communication%20between,String%20Interpolation%20or%20Attribute%20binding.):** This is achieved using the `{{ expression }}` syntax, where data flows from the component's script to the template.

- **[Two-way Data Binding](https://www.geeksforgeeks.org/vue-js-two-way-binding-model/):** Vue 3 supports two-way data binding using the `v-model` directive. It allows you to bind data to form elements and receive updates when the user interacts with them.

_One-way data binding_

```js
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue 3!',
    };
  },
};
</script>
```

The `message` data property is bound to the template.

_Two-way data binding_

```js
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue 3!',
    };
  },
};
</script>

```

The `input` element is bound to the `message` data property using `v-model`.

#### Props

Props allow you to pass data from a parent component to a child component.

They are a fundamental part of building reusable components in Vue 3.

Define and use props in a Vue 3 component:

```js
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String, // Define a prop called "message" with a String type
  },
};
</script>
```

You can then use this component in another component and pass the `message` prop:

```js
<template>
  <div>
    <child-component message="Hello from parent!" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'; // Import the child component

export default {
  components: {
    ChildComponent, // Register the child component
  },
};
</script>
```

### Computed Properties and Methods

Vue 3 allows you to define **[computed properties](https://vuejs.org/guide/essentials/computed.html)** and **[methods](https://www.w3schools.com/vue/vue_methods.php#:~:text=Vue%20methods%20are%20functions%20that,other%20things%20than%20event%20handling.)** in your components.

#### Computed Properties

Computed properties are values that are computed based on other properties in your component.

They are cached and only re-evaluated when their dependent properties change. Here's an example:

```js
<template>
  <div>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>
```

In this example, `fullName` is a computed property that automatically updates whenever `firstName` or `lastName` changes.

#### Methods

Methods are functions that you can call in response to events or user interactions.

```js
<template>
  <div>
    <button @click="sayHello">Say Hello</button>
  </div>
</template>

<script>
export default {
  methods: {
    sayHello() {
      alert('Hello, Vue 3!');
    },
  },
};
</script>
```

Clicking the button triggers the `sayHello` method.

### Vue 3 Directives

Vue 3 includes a set of **[directives](https://vuejs.org/guide/reusability/custom-directives.html)** that provide special functionality to HTML elements. Some commonly used directives include:

- `v-if`: Conditional rendering of elements.
- `v-for`: Looping through lists and rendering elements.
- `v-bind` or `:`: Binding values to element attributes.
- `v-on` or `@`: Listening to events and triggering methods.

An example of the `v-for` directive:

```js
<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
    };
  },
};
</script>
```

This code uses `v-for` to loop through the `items` array and render a list of items.

### Vue 3 Lifecycle Hooks

Vue3 components have a series of **[lifecycle hooks](https://learnvue.co/articles/vue-lifecycle-hooks-guide)** that allow you to perform actions at different stages of a component's lifecycle.

Some common lifecycle hooks include:

- `beforeCreate` and `created`: These hooks are triggered before and after the component is created.
- `beforeMount` and `mounted`: These hooks are called before and after the component is inserted into the DOM.
- `beforeUpdate` and `updated`: These hooks are triggered before and after a component's data changes.
- `beforeUnmount` and `unmounted`: These hooks are called before and after a component is removed from the DOM.

The `mounted` lifecycle hook:

```js
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue 3!',
    };
  },
  mounted() {
    console.log('Component has been mounted.');
  },
};
</script>
```

`mounted` hook is called after the component is inserted into the DOM.

## Composability with Vue 3 Composition API

Vue 3 introduces the **[Composition API](https://medium.com/arcana-network-blog/vue-3-composition-api-basics-and-patterns-44813f2c785d)**, which enhances the [composability of your components](https://macopedia.com/blog/news/how-can-vue-3-composables-make-your-life-easier). It allows you to organize and reuse logic more efficiently. To learn more about the Composition API, check out the official [Vue 3 Composition API documentation](https://v3.vuejs.org/guide/composition-api-introduction.html).

### Understanding the Composition API

The Composition API provides a more flexible way to organize and reuse code in your Vue 3 components.

Instead of relying solely on the Options API (which uses `data`, `computed`, and `methods`), you can use functions and composition to structure your component logic.

How to use the Composition API:

```js
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Composition API!');

    return {
      message,
    };
  },
};
</script>
```

We import the `ref` function from Vue and use it to create a reactive `message` variable within the `setup` function.

### Composition API vs. Options API

While the [Options API](https://medium.com/codex/options-api-vs-composition-api-4a745fb8610) is still a valid and widely used way to define Vue 3 components, the Composition API offers several advantages, especially in larger and more complex applications:

- **Reusability:** The Composition API encourages the creation of reusable logic functions that can be easily shared among components.

- **Organization:** Logic is organized based on its functionality, making it easier to understand and maintain.

- **TypeScript Support:** The Composition API works seamlessly with [TypeScript](https://vuejs.org/guide/typescript/options-api.html), providing better type inference and code validation.

Read more about their differences and similarities [here.](https://vueschool.io/articles/vuejs-tutorials/options-api-vs-composition-api/)

### Custom Composition Functions

One of the strengths of the [Composition API](https://vuejs.org/guide/reusability/composables.html) is the ability to create custom composition functions. These functions encapsulate specific pieces of logic that can be reused across multiple components.

Custom composition function for handling form input validation:

```js
import { ref, computed } from "vue";

export function useFormInput(initialValue, validator) {
  const value = ref(initialValue);
  const errorMessage = ref("");

  const validate = () => {
    const isValid = validator(value.value);
    errorMessage.value = isValid ? "" : "Invalid input";
    return isValid;
  };

  return {
    value,
    errorMessage,
    validate,
    isValid: computed(() => errorMessage.value === ""),
  };
}
```

You can use this custom function in your components to manage form input validation easily.

### Using the Composition API in Components

To use the Composition API in your Vue 3 components, you'll typically follow these steps:

1. **Import necessary functions**: Import the functions you need from the Vue module, such as `ref`, `computed`, and `watch`.

2. **Define reactive data**: Create reactive data variables using `ref` or `reactive`.

3. **Define computed properties**: Use `computed` to create derived reactive data based on existing data.

4. **Define methods and logic**: Organize your component's logic into functions, taking advantage of the Composition API's flexibility.

5. **Return values**: The `setup` function should return the data, computed properties, and methods you want to expose to the template.

Using the Composition API to manage a counter:

```js
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    return {
      count,
      increment,
    };
  },
};
</script>
```

In this component, the `count` variable is reactive, and the `increment` function modifies it when the button is clicked.

## Conclusion

Component-based architecture is a powerful approach for developing modern web applications.

Vue 3 provides excellent support for building and managing components, making it a valuable tool in your web development toolkit.

To get started with Vue 3, don't just read and watch tutorial videos, fire up you [VS Code](https://code.visualstudio.com/) and start building your own components.

Thanks for reading :)
