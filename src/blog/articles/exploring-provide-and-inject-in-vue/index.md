---
date: 2023-05-30T15:30:00
updatedAt: 2023-05-30T15:30:00
title: Exploring Provide and Inject in Vue 3
permalink: /blog/exploring-provide-and-inject-in-vue/
description: In this article, we will delve into the details of using provide and inject in Vue 3, understand their purpose and usage, and explore examples to demonstrate their effectiveness.
layout: article
author: Solomon Eseme
author_profile_pic: /static/solomon-eseme.jpg
author_link: https://solomoneseme.com
tags: ["blog"]
---

## **Introduction**

In Vue 3, the **`provide`** and **`inject`** pattern provides a way to share data and functionality between components without the need for direct prop passing or event emitting. This powerful feature allows for more flexible and efficient communication between components in a Vue application. In this article, we will delve into the details of using **`provide`** and **`inject`** in Vue 3, understand their purpose and usage, and explore examples to demonstrate their effectiveness.

Everyone knows about the dreaded props drilling problems in Vue. A scenario where you have to pass props from the parent to the 3rd or infinity child component.

{% responsiveImage './blog/articles/exploring-provide-and-inject-in-vue/images/1.png', 'A screenshot showing prop drilling in Vue', { maxWidth: 848 }  %}

Looking at the diagram above shows a clear example of the problem that Provide and Inject are trying to solve.

A prop is passed from the root component down to as many components as before it gets to the component that really wants to make use of the prop.

Sometimes, these prop-carrier components (Footer) do not really need those props.

```jsx
<ParentComponent grand-kid-name="Kap">

	<FirstChild :grand-kid-name="grand-kid-name">

		<GrandKid :grand-kid-name="grand-kid-name">
				My name is: { { grand-kid-name } }
		<GrandKid>

	</FirstChild>

	<SecondChild> </SecondChild>

</ParentComponent>
```

In the example above, the `ParentComponent` suggests a name for his grandkid (`GrandKid` Component) and the name has to pass from the parent to his child. The `FirstChild` component does not have anything to do with the name rather than pass it to the `GrandKid` component.

This problem is called Prop drilling and can extend to an infinity component down the line. This is exactly what Provide and Inject are trying to solve in Vue 3.

## **Understanding Provide and Inject in Vue 3**

The **`provide`** and **`inject`** pattern in Vue 3 enables the creation of a parent-child relationship between components, where the parent component provides data or services that the child components can inject and use.

This pattern allows for the propagation of properties down the component tree without the need to explicitly pass them through props.

{% responsiveImage './blog/articles/exploring-provide-and-inject-in-vue/images/2.png', 'A screenshot showing provide and inject in Vue', { maxWidth: 848 }  %}

The diagram above shows that instead of passing the data as props to the component descendant, we can simply use `provide` and `inject` to pass the data without prop drilling.

Let's explore the concepts of **`provide`** and **`inject`** in more detail.

### **Provide**

The `provide` is used to provide data to the component’s descendants. It's a simple function that takes in a key and value as shown in the code snippet below:

```jsx
// Using <script setup>
<script setup>
import { provide } from 'vue'

provide('grand-kid-name', 'Kap')
</script>

// If not using <script setup>, do this

<script>
import { provide } from 'vue'

export default {
  setup() {
    provide('grand-kid-name', 'Kap')
  }
}
</script>
```

In the code snippet above, we demonstrate how to use the `provide` keyword to provide data when using `<script setup>` and when not.

Furthermore, the `provide` method takes in `grand-kid-name` as the key and `Kap` as the value to be retrieved by the child component.

**App-Level Provide**

Additionally, `provide` is not only available on the component level, but it can also be available on the application level meaning that you can provide some data that will be available throughout your component more like global data.

This code snippet shows how to create global data:

```jsx
import { createApp } from "vue";

const app = createApp({});

app.provide("message", "hello!");
```

The code snippet is added inside the `main.js` file where Vue.js is initialized. It calls the `app.provide()` method to provide data to all components throughout the application.

### **Inject**

The `Inject` is used to receive or retrieve the data from the ancestor component. It's also a simple function that takes in a key and returns the value that was provided as shown in the code snippet below:

```jsx
// Using <script setup>
<script setup>
  import {inject} from 'vue' const name = inject('grand-kid-name')
</script>;

// If not using <script setup>, do this

import { inject } from "vue";

export default {
  setup() {
    const name = inject("grand-kid-name");
    return { name };
  },
};
```

As simple as calling the `inject` function and passing the key that was provided, we can retrieve the value from any component without prop drilling.

\***\*Injection Default Values\*\***

However, sometimes, we might want to pass a default value in case there was nothing provided by our ancestor component. We can achieve this by following the code snippet below:

```jsx
const value = inject("grand-kid-name", "default value");
```

Most interestingly, we can set a default value by making an API call or using different business logic. To achieve this, we need to pass a function to the `inject` function as the default value as shown below:

```jsx
const value = inject("key", () => {
  // Some Expensive API calls or Business logic here
});
```

### **Providing Data or Services**

To provide data or services from a parent component, we use the **`provide`** option in the parent component's configuration. The **`provide`** option accepts an object with properties that represent the data or services to be provided. Let's consider an example where a **`ThemeProvider`** component provides a theme object to its child components:

```jsx
<!-- ThemeProvider.vue -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      theme: 'dark',
    };
  },
};
</script>

```

In this example, the **`ThemeProvider`** component provides the **`theme`** property with a value of **`'dark'`** to its child components.

### **Injecting Data or Services**

To access the provided data or services in a child component, we use the **`inject`** option. The **`inject`** option accepts an array or an object of property names that represent the data or services to be injected. The injected properties will be available in the component's instance. Let's see how a **`ChildComponent`** can inject and use the **`theme`** property provided by the **`ThemeProvider`**:

```jsx
<!-- ChildComponent.vue -->
<template>
  <div>
    <p>Theme: {{ theme }}</p>
  </div>
</template>

<script>
export default {
  inject: ['theme'],
};
</script>

```

In this example, the **`ChildComponent`** injects the **`theme`** property and can access its value within the component's template.

### Working with Reactivity

It is common for you to want to work with the `provide` data that are reactive. Vue made the process very simple. The code snippet below shows how to pass reactive data to the `provide` function.

```jsx
// Using <script setup>
<script setup>
  import {inject} from 'vue' const firstname = ref('Solomon')
  provide('firstname', {firstname})
</script>
```

Additionally, you might want to update the `firstname` from the child component where it is injected. To achieve this, look at the code snippet below where we pass an `updateFirstName` function to the `Provide` object and use it in the child component where it is injected to update the `firstname` reactive property.

```jsx
<!-- inside provider component -->
<script setup>
import { provide, ref } from 'vue'

const firstName = ref('Solomon')

function updateFirstName() {
  firstName.value = 'Eseme'
}

provide('firstname', {
  firstName,
  updateFirstName
})
</script>
```

Now, let's move inside the child component where it is injected and update the `firstname` from `Solomon` to `Eseme`.

```jsx
<!-- in injector component -->

<script setup>
import { inject } from 'vue'

const { firstname, updateFirstName } = inject('firstname')
</script>

<template>
  <button @click="updateFirstName">{{ firstname }}</button>
</template>
```

Simple right? Now let’s look at some advanced use of Provide and Inject when building enterprise and complex Vue applications with many team members.

## Advanced use of Provide and Inject in Vue 3

When working with teams in large and enterprise-ready Vue 3 applications, creating multiple `provide` and `inject` is unavoided and it can easily cause conflicts and potential collisions.

However, this can easily be avoided by creating and exporting a file to contain all the keys that are created throughout the application. The code snippet below shows how to use JavaScript symbols to create and manage a file for all Provide keys.

```jsx
// Providekeys.js
export const name = Symbol();
export const age = Symbol();
export const title = Symbol();
export const firstname = Symbol();
export const lastname = Symbol();
export const desc = Symbol();
export const excerpt = Symbol();
export const userID = Symbol();
export const username = Symbol();
```

Now, inside your component add the following code snippet to make use of any key in the `ProvideKeys.js` file:

```jsx
// in provider component
import { provide } from 'vue'
import { name } from './keys.js'

provide(name, {
  /* data to provide */
	'Kap'
})
```

Lastly, add the following code snippet inside the component you want to `inject` the data:

```jsx
// in injector component
import { inject } from "vue";
import { name } from "./keys.js";

const injectedName = inject(name);
```

## **Learning and Using Provide and Inject in Vue 3**

To learn more about **`provide`** and **`inject`** in Vue 3 and deepen your understanding, here are some recommended resources:

- Official Vue 3 Documentation: **[Provide/Inject](https://v3.vuejs.org/guide/component-provide-inject.html)**
- Vue Mastery Course: **[Mastering Provide/Inject](https://www.vuemastery.com/courses/advanced-components/mastering-provide-inject)**
- Vue.js 3 Fundamentals: **[Provide and Inject](https://www.vuemastery.com/courses/vue-3-fundamentals/provide-and-inject)**

These resources provide detailed explanations, examples, and best practices for using **`provide`** and **`inject`** in Vue 3. By studying them, you will gain a comprehensive understanding of how to leverage **`provide`,** and **`inject`** effectively in your Vue applications.

## **Best Practices for Using Provide and Inject**

When using **`provide`** and **`inject`** in your Vue 3 applications, it's important to keep the following best practices in mind:

1. Avoid deeply nested injection chains: It's generally recommended to limit the usage of deeply nested **`provide`** and **`inject`** chains as it can make the code more difficult to understand and maintain. Instead, consider using Vuex or other state management solutions for complex data-sharing scenarios.
2. Use default values or fallbacks: When using the **`inject`** option, it's a good practice to provide default values or fallbacks in case the injected property is not available. This ensures that the component can gracefully handle the absence of the injected property.
3. Be mindful of reactivity: Keep in mind that the injected properties are not automatically reactive. If you need reactivity, consider using reactive data structures like **`ref`** or **`reactive`** in conjunction with **`provide`** and **`inject`**.

## **Conclusion**

The **`provide`** and **`inject`** pattern in Vue 3 provides a powerful mechanism for sharing data and services between components. By using the **`provide`** option in the parent component and the **`inject`** option in the child component, you can establish a parent-child relationship that facilitates the flow of properties down the component tree.

In this article, we explored the concepts of **`provide`** and **`inject`** in Vue 3, understanding how they enable the sharing of data and services. We discussed how to provide and inject properties, and we highlighted important considerations and best practices for using **`provide`** and **`inject`** effectively.

Remember to refer to the official Vue 3 documentation and additional learning resources for further exploration and mastery of **`provide`** and **`inject`** in Vue 3.

## **Resources**

- **[Vue 3 Documentation: Provide/Inject](https://v3.vuejs.org/guide/component-provide-inject.html)**
- **[Vue Mastery: Mastering Provide/Inject](https://www.vuemastery.com/courses/advanced-components/mastering-provide-inject)**
- **[Vue.js 3 Fundamentals: Provide and Inject](https://www.vuemastery.com/courses/vue-3-fundamentals/provide-and-inject)**
