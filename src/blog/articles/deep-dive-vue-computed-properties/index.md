---
date: 2023-05-29T19:30:00
updatedAt: 2023-05-29T19:30:00
title: Deep Dive Vue 3 Computed Properties
permalink: /blog/deep-dive-vue-computed-properties/
description: In this article, we will take a deep dive into Vue 3 computed properties, exploring their functionality, and use cases, and providing code examples along the way.
layout: article
author: Solomon Eseme
author_profile_pic: /static/solomon-eseme.jpg
author_link: https://solomoneseme.com
tags: ["blog"]
---

## **Introduction**

In Vue.js, computed properties are a powerful feature that allows developers to define derived values based on reactive data. Computed properties in Vue 3 provide an elegant and efficient way to perform calculations, transformations, and data manipulations within your Vue components.

In this article, we will take a deep dive into Vue 3 computed properties, exploring their functionality, and use cases, and providing code examples along the way.

## **Understanding Computed Properties in Vue 3**

Computed properties in Vue 3 are properties that are calculated dynamically based on other reactive properties. They are defined as functions and behave like data properties, but they are re-evaluated only when their dependencies change. Computed properties provide a clean and declarative way to derive values from existing data without the need for manual updates.

### **Computed Properties vs. Methods**

Before diving into computed properties, it's important to understand the difference between computed properties and methods in Vue components. While both computed properties and methods can perform calculations and return values, there are key distinctions between the two.

Methods are functions that are called whenever they are referenced in the template or in the component's logic. They are re-evaluated every time the component renders, regardless of whether their dependencies change. This means that methods can be less performant than computed properties in scenarios where the same value is needed in multiple places within the template.

On the other hand, computed properties are cached based on their reactive dependencies. They are only recalculated when one of their dependencies changes. This caching mechanism ensures that computed properties have optimal performance, as they are not recalculated unnecessarily.

### **Defining Computed Properties**

To define a computed property in a Vue 3 component, you need to use the **`computed`** function from the composition API. The **`computed`** function takes a getter function as its argument, which defines the logic for calculating the computed value. Here's an example:

```js
import { computed } from "vue";

export default {
  setup() {
    const firstName = ref("John");
    const lastName = ref("Doe");

    const fullName = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });

    return { fullName };
  },
};
```

In this example, we have two reactive properties, **`firstName`** and **`lastName`**. The **`fullName`** computed property calculates the full name by combining the values of **`firstName`** and **`lastName`**. The **`computed`** function automatically tracks the dependencies of **`fullName`**, so it will be re-evaluated whenever either **`firstName`** or **`lastName`** changes.

### **Accessing Computed Properties**

Once you have defined a computed property, you can access it in your component's template or logic just like any other data property. Vue will automatically handle the reactivity and caching for you.

Here's an example of accessing the **`fullName`** computed property in a template:

```
<template>
  <div>Full Name: { { fullName } }</div>
</template>
```

In this example, the **`fullName`** computed property is rendered in the template using double curly braces (**`{ { } }`**). Whenever **`firstName`** or **`lastName`** changes, the **`fullName`** computed property will be automatically recalculated and updated in the template.

### **Computed Setters**

In addition to getters, Vue 3 computed properties also support setters. Setters allow you to update the value of a computed property, which in turn can trigger changes to its dependencies. To define a setter for a computed property, you need to provide an object with a **`get`** and **`set`** function to the **`computed`** function.

Here's an example:

```js
import { computed } from "vue";

export default {
  setup() {
    const fullName = computed({
      get() {
        return `${firstName.value} ${lastName.value}`;
      },
      set(value) {
        const [newFirstName, newLastName] = value.split(" ");
        firstName.value = newFirstName;
        lastName.value = newLastName;
      },
    });

    return { fullName };
  },
};
```

In this example, the **`fullName`** computed property has both a getter and a setter. The getter calculates the full name based on **`firstName`** and **`lastName`**, while the setter allows you to update the full name by providing a string value.

### **Computed Property Caching**

Vue 3 computed properties use a caching mechanism to optimize performance. By default, computed properties are cached and only re-evaluated when one of their dependencies changes. This ensures that the computed property is recalculated only when necessary.

However, there may be cases where you want to disable caching and force a computed property to re-evaluate on every access. To achieve this, you can use the **`computed`** function with a **`cache`** option set to **`false`**.

Here's an example:

```js
import { computed } from "vue";

export default {
  setup() {
    const counter = ref(0);

    const squaredValue = computed(() => counter.value ** 2, { cache: false });

    return { counter, squaredValue };
  },
};
```

In this example, the **`squaredValue`** computed property is calculated based on the **`counter`** reactive property. However, by setting the **`cache`** option to **`false`**, the **`squaredValue`** computed property will be re-evaluated on every access, even if **`counter`** hasn't changed.

## **Use Cases and Examples**

Now that we have a solid understanding of computed properties in Vue 3, let's explore some common use cases and provide code examples to illustrate their application.

### **Dynamic Formatting**

Computed properties are excellent for performing dynamic formatting of data. For example, let's say you have a price value and you want to display it with a specific currency symbol and formatting.

Here's an example:

```js
import { computed } from "vue";

export default {
  setup() {
    const price = ref(25);

    const formattedPrice = computed(() => {
      return `$${price.value.toFixed(2)}`;
    });

    return { price, formattedPrice };
  },
};
```

In this example, the **`formattedPrice`** computed property calculates the price with a dollar sign and two decimal places. Whenever the **`price`** changes, the **`formattedPrice`** will automatically update, reflecting the new formatting.

### **Filtering and Sorting Data**

Computed properties can also be used for filtering and sorting data dynamically. For instance, imagine you have an array of products and you want to filter them based on a specific category.

Here's an example:

```js
import { computed } from "vue";

export default {
  setup() {
    const products = ref([
      { name: "Product A", category: "Category 1" },
      { name: "Product B", category: "Category 2" },
      { name: "Product C", category: "Category 1" },
    ]);

    const selectedCategory = ref("Category 1");

    const filteredProducts = computed(() => {
      return products.value.filter(
        (product) => product.category === selectedCategory.value
      );
    });

    return { products, selectedCategory, filteredProducts };
  },
};
```

In this example, the **`filteredProducts`** computed property filters the **`products`** array based on the **`selectedCategory`**. Whenever the **`selectedCategory`** changes, the **`filteredProducts`** will be automatically updated, showing the filtered products.

### **Dependent Computed Properties**

Computed properties can also depend on other computed properties, allowing you to build complex data transformations.

Here's an example:

```js
import { computed } from "vue";

export default {
  setup() {
    const price = ref(10);
    const quantity = ref(5);

    const totalPrice = computed(() => price.value * quantity.value);

    const discountedTotalPrice = computed(() => totalPrice.value * 0.9);

    return { price, quantity, discountedTotalPrice };
  },
};
```

In this example, the **`totalPrice`** computed property calculates the total price based on the **`price`** and **`quantity`**. Then, the **`discountedTotalPrice`** computed property further calculates a discounted price based on the **`totalPrice`**. Whenever either **`price`** or **`quantity`** changes, both computed properties will be recalculated accordingly.

## **Conclusion**

Computed properties in Vue 3 provide a powerful and efficient way to derive values from reactive data. They allow you to perform calculations, transformations, filtering, sorting, and other data manipulations within your Vue components. By leveraging computed properties, you can keep your component logic clean, readable, and optimized for performance.

In this article, we explored the functionality of computed properties, including their definition, access, and usage of setters. We also discussed the caching mechanism of computed properties and how to control it. Additionally, we provided code examples that demonstrated various use cases, such as dynamic formatting, filtering and sorting data, and dependent computed properties.

To continue your learning journey with computed properties in Vue 3, make sure to consult the official Vue 3 documentation and other reputable resources for more in-depth information and advanced techniques.

## **Resources**

- **[Vue 3 Composition API Documentation: Computed](https://v3.vuejs.org/api/composition-api.html#computed)**
- **[Vue Mastery: Vue 3 Computed Properties](https://www.vuemastery.com/blog/vue-3-computed-properties/)**
- **[Vue.js 3 Fundamentals: Computed Properties](https://www.vuemastery.com/courses/vue-3-fundamentals/computed-properties)**
