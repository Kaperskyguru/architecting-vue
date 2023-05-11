---
date: 2023-05-10T15:30:00
updatedAt: 2023-05-10T15:30:00
title: Ref vs Reactive in Vue 3
permalink: /blog/ref-vs-reactive-in-vue-3/
description: In this article, we'll explore the differences between refs and reactive objects in Vue.js 3, and how they can be used together to manage state effectively.
layout: article
author: Solomon Eseme
author_profile_pic: /static/solomon-eseme.jpg
author_link: https://solomoneseme.com
tags: ["blog"]
---

Vue 3 has introduced several new features and improvements over its previous version, including the introduction of Composition API. With the Composition API, Vue developers have more control over how they manage the state of their applications.

One of the key features of the Composition API is the ability to use Ref and Reactive objects to manage the state of your application. In this article, we will explore the differences between Ref and Reactive and how you can use both of them in Vue 3.

In this article, we'll explore the differences between refs and reactive objects in Vue.js 3, and how they can be used together to manage state effectively.

## **Ref in Vue 3**

In Vue 3, Ref is a function that can be used to create a reactive reference to a value. Ref is similar to a reactive property in Vue 2 but with some key differences. When you use Ref to create a reference to a value, you can access and update that value using the value property. Here is an example:

```
import { ref } from 'vue'

const count = ref(0)

console.log(count.value) // 0

count.value++

console.log(count.value) // 1
```

In this example, we have used the Ref function to create a reference to a value of 0. We can access and update the value using the value property of the count object. When we update the value using the value property, Vue will automatically trigger a reactivity update and update any components that are using the count reference.

## **Reactive in Vue 3**

In Vue 3, Reactive is a function that can be used to create a reactive object. A reactive object is an object that can be observed for changes, and any changes to the object will trigger a reactivity update. Here is an example:

```
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  name: 'John'
})

console.log(state.count) // 0

state.count++

console.log(state.count) // 1
```

In this example, we have used the Reactive function to create a reactive object called a state. The state object has two properties, count and name. We can access and update the value of the count property directly, and any changes to the count property will trigger a reactivity update.

## **Differences between Ref and Reactive**

While Ref and Reactive are both used to manage state in Vue 3, there are some key differences between the two.

### **Ref is used for primitive types**

Ref is used to create a reactive reference to a primitive type such as a string, number, or boolean. Ref can also be used to create a reactive reference to an object or an array, but in that case, only the reference itself is reactive, not the properties of the object or the items in the array.

### **Reactive is used for objects**

Reactive is used to create a reactive object that can be observed for changes. Reactive objects can have properties that are themselves reactive, which means that any changes to those properties will trigger a reactivity update.

### **Ref provides better performance for primitive types**

Because Ref is used for primitive types, it provides better performance than Reactive. When you use Ref to create a reference to a primitive type, Vue can use a more efficient tracking mechanism that provides better performance.

### **Reactive provides better performance for complex objects**

Reactive provides better performance than Ref for complex objects because it can track changes to the properties of the object, not just the reference to the object.

## **Using Refs and Reactives in Vue 3**

Now that we understand what Refs and Reactives are, let's see how we can use them in our Vue 3 applications.

### **Using Refs**

We can use Refs to create reactive variables in our Vue components. To use Refs, we import the **`ref`** function from Vue and use it to create a Ref.

```
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    return {
      count,
      increment() {
        count.value++;
      },
    };
  },
};
```

In the above example, we create a Ref called **`count`** and initialize it with a value of **`0`**. We then return an object with the **`count`** Ref and a method called **`increment`** that increments the value of **`count`** by 1.

We can then use this Ref in our template like this:

```
<template>
  <div>
    Count: {{ count }}
    <button @click="increment">Increment</button>
  </div>
</template>
```

When the **`increment`** method is called, the value of **`count`** will be updated and the template will re-render to display the new value.

### **Using Reactive**

We can use Reactive to create reactive objects in our Vue components. To use Reactive, we import the **`reactive`** function from Vue and use it to create a Reactive.

```
javascriptCopy code
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
      message: 'Hello!',
    });
    return {
      state,
      increment() {
        state.count++;
      },
    };
  },
};

```

In the above example, we create a Reactive called **`state`** with two properties: **`count`** and **`message`**. We then return an object with the **`state`** Reactive and a method called **`increment`** that increments the value of **`count`** by 1.

We can then use this Reactive in our template like this:

```
htmlCopy code
<template>
  <div>
    Count: {{ state.count }}
    Message: {{ state.message }}
    <button @click="increment">Increment</button>
  </div>
</template>

```

When the **`increment`** method is called, the value of **`state.count`** will be updated and the template will re-render to display the new value.

### **When to Use Refs vs Reactives**

In general, we should use Refs for primitive values like numbers, booleans, and strings, and use Reactive for objects and arrays. However, there are some cases where we might want to use a Ref instead of a Reactive.

One example is when we have a large object with many properties, but we only need to track changes to one property. In this case, we can create a Ref for that one property instead of creating a Reactive for the entire object.

```
import { ref } from 'vue';

export default {
  setup() {
    const user = {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
      // ... many more properties ...
    };
    const email = ref(user.email);
    return {
      email,
      updateEmail(newEmail) {
        email.value = newEmail;
      },
    };
  },
};
```

In the above example, we have a large **`user`** object with many properties, but we only need to track changes to the **`email`** property. Instead of creating a Reactive for the entire **`user`** object, we create a Ref for the **`email`** property and return it along with a method to update the value of the `email`.

## **Ref vs Reactive**

So, when should you use a ref and when should you use a reactive object? The answer depends on the specific use case.

Refs are best suited for accessing and manipulating DOM elements directly, while reactive objects are best suited for managing the state that needs to be used in the template or in the script section of a component.

Refs are not reactive, which means that changes to a ref will not trigger a re-render of the component. On the other hand, changes to a reactive object will trigger a re-render of the component.

According to Evan You, the creator of Vue.js, refs and reactive objects can be used together to manage the state effectively:

"Refs are for managing mutable, non-reactive data or accessing/manipulating DOM elements directly. Reactive objects are for managing reactive data that will be used in the template or other reactive code."

In general, you should use refs for manipulating the DOM directly and reactive objects for managing the state that needs to be reactive.

However, there are cases where you may want to use a ref to store reactive data. In those cases, you can create a reactive object and assign it to a ref using the **`toRef()`** function:

```
<template>
  <div>
    <input type="text" v-model="text" />
    <button @click="addItem">Add item</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref, toRef } from 'vue';

export default {
  setup() {
    const state = reactive({
      text: '',
      items: [],
    });

    const textRef = toRef(state, 'text');

    const addItem = () => {
      state.items.push({ id: state.items.length + 1, name: state.text });
      textRef.value = '';
    };

    return {
      text: textRef,
      items: state.items,
      addItem,
    };
  },
};
</script>
```

In this example, we're creating a reactive object called **`state`** that contains a **`text`** property and an **`items`** property.

We're also creating a ref called **`textRef`** that references the **`text`** property of the **`state`** object using the **`toRef()`** function.

When the **`addItem()`** function is called, a new item is added to the **`items`** array with a unique ID and the value of the **`text`** property. We're also resetting the value of the **`text`** property to an empty string using the **`value`** property of the **`textRef`** ref.

## **Conclusion**

Refs and reactive objects are important concepts in Vue.js 3 for managing the state and manipulating the DOM directly. Refs are best suited for accessing and manipulating DOM elements directly, while reactive objects are best suited for managing state that needs to be reactive.

By using refs and reactive objects together, you can create powerful and flexible components in Vue.js 3.

### Sources:

- Vue.js documentation: **[https://v3.vuejs.org/guide/reactivity-fundamentals.html#what-is-reactivity](https://v3.vuejs.org/guide/reactivity-fundamentals.html#what-is-reactivity)**
- Vue.js 3 composition API documentation: **[https://v3.vuejs.org/api/composition-api.html#toref](https://v3.vuejs.org/api/composition-api.html#toref)**
