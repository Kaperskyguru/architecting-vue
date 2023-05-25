---
date: 2023-05-25T15:30:00
updatedAt: 2023-05-25T15:30:00
title: Vue 3 Lifecycle hooks Explained
permalink: /blog/vue-3-lifecycle-hooks-explained/
description: In this article, you will learn the different lifecycle hooks in Vue 3, how to use them, and how to integrate them into your enterprise application.
layout: article
author: Solomon Eseme
author_profile_pic: /static/solomon-eseme.jpg
author_link: https://solomoneseme.com
tags: ["blog"]
---

Want to build enterprise-ready applications in Vue? Learn hooks.

Lifecycle hooks in Vue are one of the most important concepts to learn in Vue.js.

The hooks in Vue 2 and Vue 3 work similarly when using the Options API in Vue 3. However, when using Composition API, you will face some changes and the addition of more lifecycle hooks which makes it useful for building larger-scale and enterprise applications in Vue.

In this article, you will learn the different lifecycle hooks in Vue 3, how to use them, and how to integrate them into your enterprise application.

## Overview of Vue 3 Lifecycle Hooks

A lifecycle hook is a special function that allows developers to hook into or create custom functionality at any specific moment, before, or after a particular event occurs.

Vue.js lifecycle hooks are divided into 6 main hooks which are further split into 12 hooks. Below are the 6 main events:

1. Creation
2. Mounting
3. Updating
4. Debugging
5. Server-side
6. Destruction

Let’s explore each of the events and learn the hooks that are categorized under each event.

### Creation Hooks

The creation event runs on your component’s creation. It is mostly used to set up your newly created component.

Under the creation event, you have hooks such as:

1. beforeCreate
2. created

**beforeCreate**

The `beforeCreate` hook is called before initializing all of the reactive data and events. This makes the `beforeCreate` event not have access to any of the component’s reactive data and events.

Here’s a code snippet showing how to implement the `beforeCreate` hook in the Options API.

```
export default {
  data() {
    return {
      val: 'hello',
    }
  },
  beforeCreate() {
    console.log('Value of val is: ' + this.val)
  },
}
```

In Options API, the `beforeCreate` hook is very important and is useful when you want to call out API or logic that initializes data or does not need to assign data

**created**

The `created` hook is responsible for initializing all of the reactive data and events. In the `created` hook, we now have access to the component’s data and events since they have been initialized.

Here’s a code snippet that shows how to implement `created` hook in Options API:

```
export default {
  data() {
    return {
      val: 'hello',
    }
  },
  created() {
    console.log('Value of val is: ' + this.val)
  },
}
```

The `created` hook is also useful for initialization or calling APIs or logic that needs to be called once before the component is mounted and most important the `created` hook can assign data which makes it important to generate your initial data for your component.

In Vue 3 Composition API, the `beforeCreate` and `created` hooks are replaced with the `setup` method itself. This means that your code will automatically be executed in composition API without explicitly calling it inside the `beforeCreate` or `created` hook.

Here’s a code snippet showing how to explicitly call a function or snippet of code in the setup method without using the `beforeCreate` or `created` hooks in Vue 3 composition API:

```jsx
<script>
import { ref } from 'vue'

export default {
  setup() {
    const val = ref('hello')

		// This will be called automatically by default
    console.log('Value of val is: ' + this.val)
  }
}
</script>
```

The same goes for using the compile-time syntactic sugar `<script setup>`. Here’s an example:

```jsx
<script setup>
  const val = ref('hello') // This will be called automatically by default
  console.log('Value of val is: ' + this.val)
</script>
```

Now, you can easily create and call your functions directly without worrying if you have called it inside the `created` or `beforeCreated` hook.

### Mounting Hooks

Mounting hooks handle mounting and rendering the component, there are important hooks in this category because they are responsible for the visibility of elements in your web pages. Below are some of the most commonly used hooks in applications.

1. onMounted
2. onBeforeMount
3. onActivated

**onMounted**

The `onMounted` hook is the same as the `mounted` hook in Options API except for the name change and ways of using the `onMounted` hook within Composition API.

Below is a code snippet that shows how to use `onMounted` hook in composition API.

```jsx
<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
  el.value // <div>
})
</script>

<template>
  <div ref="el"></div>
</template>
```

There are a few caveats for using the `onMounted` hook such as:

1. It can’t be used inside Async Components or components inside `<Suspense>` trees
2. It cannot be used inside or during server-side rendering.
3. It must be called with a direct parent or a child container that is directly linked to the parent container.

The `onMounted` hook is used to perform side effects that need access to the component’s rendered DOM. This makes it useful for calling and updating business logic after all the elements and components are completely mounted and rendered.

**onBeforeMounted**

The `onBeforeMounted` hook is a special hook that is called right before the component is mounted. One important thing to note is that, when this hook is called, the component has already finished setting up its reactive state.

This means that data from your state, `ref`, `reactive` are already initialized but no DOM has been rendered to the user yet.

Here’s an example of how to use `onBeforeMounted` hook:

```jsx
<script setup>
import { ref, onBeforeMounted } from 'vue'

onBeforeMounted(() => {
  console.log('Before Mounted Hook')
})
</script>

<template>
  <div ref="el"></div>
</template>
```

### Updating Hooks

This category of hooks is during, before, or after a component update. There are important hooks in this category because they are responsible for the re-rendering of elements in your web pages.

Below are some of the most commonly used hooks in applications:

1. onBeforeUpdate
2. onUpdated
3. onActivated

**onBeforeUpdate**

The `onBeforeUpdate` hook is called right before the component is about to update or re-render its DOM tree due to changes or updates from a reactive state.

When working with Vue, you can update reactive data and see the update immediately in real time. That’s the sweet thing about reactivity in general, however, the `onBeforeUpdate` is called before the component is updated with the new value.

Here’s an example of how to use `onBeforeUpdate` hook:

```jsx
<script setup>
import { ref, onBeforeUpdate } from 'vue'

onBeforeUpdate(() => {
  console.log('Before Updated Hook')
})
</script>

<template>
  <div ref="el"></div>
</template>
```

**onUpdated**

The `onUpdated` hook is special and frequently used because it's called right after the component updates or re-renders the DOM tree due to changes or updates from a reactive state.

Here’s an example of how to use `onUpdated`hook:

```jsx
<script setup>
import { ref, onUpdated } from 'vue'

const count = ref(0)

onUpdated(() => {
  console.log(document.getElementById('count').textContent)
})
</script>

<template>
  <button id="count" @click="count++">{{ count }}</button>
</template>
```

This is a simple number increment app. It increases the number when a button is clicked and used the `onUpdated` hook to log the value of the `count` element.

If you have a parent-child component structure, the child `onUpdated` hook is called before that of the parent updated hook.

Sometimes you might want to access the element that causes the update since you might have multiple elements updating at the same time. You can use the `nextTick()` utility to access the specific element.

It is also important to note that you can easily run into an infinite loop if you mutate the state inside the `onUpdated` hook.

**onActivated**

The `onActivated` hook is a new addition in Vue 3. It is very special and helps in increasing performance with Vue components.

It is called after a component instance is inserted back into the DOM tree from a cache. Vue caches components when you use the KeepAlive tag as shown below:

```jsx
<KeepAlive>
	<component :is="view"></component>
</KeepAlive>
```

Any component that is cached as shown goes into the _deactivated_ state when the component instance is removed from the DOM instead of completely destroying the component and remounting later, the component is pulled out from the cache and activated.

Here’s an example of how to use `onActivated`hook:

```jsx
<script setup>
  import {onActivated} from 'vue' onActivated(() =>{" "}
  {console.log("Activated hook is called")})
</script>
```

### Debugging Hooks

The hooks in the debugging category are relatively new to Vue and some are called only on development.

The debugging hooks house different hooks that allow Vue developers to debug and capture errors in real-time during development and production.

Below are some of the most commonly used hooks under the debugging category:

1. onErrorCaptured
2. onRenderTracked
3. onRenderTriggered

**onErrorCaptured**

This is a very important hook used to capture errors within a component in real-time. You can capture the following errors:

- Component renders
- Event handlers
- Lifecycle hooks
- `setup()` function
- Watchers
- Custom directive hooks
- Transition hooks

Here’s an example of how to use `onErrorCaptured`hook:

```jsx
<script setup>
		import { ref, onBeforeUpdate } from 'vue'

	  // Added onErrorCaptured lifecycle hook
	  onErrorCaptured((error) => {

			// You can process the error here
			console.log(error)

	    return true;
	  });

</script>
```

**onRenderTracked**

The `onRenderTracked` hook is a debugging hook that gets called every time a reactive dependency is tracked. Here’s an example of how to use the `onRenderTracked` hook for debugging.

```jsx
<script setup>
  import {(ref, onRenderTracked)} from 'vue' const num = ref(0) const num2 =
  ref(0) // It will be called twice, once for num and once for num2
  onRenderTracked((event) => {console.log(event)})
</script>
```

It is important to note that this hook should only be used in development and not in production.

\***\*onRenderTriggered\*\***

The `onRenderTriggered` hook is also a debugging hook that gets called when a reactive dependency is updated. Here’s an example of how to use the `onRenderTriggered` hook for debugging.

```jsx
<script setup>
  import {(ref, onRenderTracked)} from 'vue' const num = ref(0) // It will be
  called once the num is updated onRenderTriggered((event) =>{" "}
  {console.log(event)})
</script>
```

It is important to note that this hook should only be used in development and not in production.

### Server-side hooks

The hooks in the server-side category are relatively new to Vue and it houses hooks that are called before or after a component is rendered on the server-side.

As of the time of writing, Vue only has one hook that falls under this category:

1. onServerPrefetch

\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***onServerPrefetch\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***

The `onServerPrefetch` hook is a server-side hook that gets called before the component instance is to be rendered on the server. This hook is perfect when performing server-only data fetching since it is only called during server-side rendering.

Here’s an example of how to use the `onServerPrefetch` hook for server-side logic:

```jsx
<script setup>
  import {(ref, onServerPrefetch)} from 'vue' const data = ref(null)
  onServerPrefetch(async () =>{" "}
  {
    // pre-fetch data on server as it is faster than on the client
    (data.value = await fetchOnServer(/* ... */))
  }
  )
</script>
```

Also, note that if the callback returns a Promise, the server renderer will wait until the Promise is resolved before rendering the component.

### Destruction

The destruction hooks are used for the removal of components, cleaning up components, deactivating components, or event listeners to avoid memory leaks. The destruction category contains a lot of hooks and some opposite of the ones we have covered earlier.

1. onUnmounted
2. onBeforeUnmount
3. onDeactivated

\***\*onUnmounted\*\***

The `onUnmounted` hook is called after the component has been unmounted. It is used to clean up manually created side effects such as timers, DOM event listeners, or server connections. Here’s an example of `onUnmounted` hook

```jsx
<script setup>
  import {onUnmounted} from 'vue' let intervalId onMounted(() =>{" "}
  {
    (intervalId = setInterval(() => {
      // ...
    }))
  }
  ) onUnmounted(() => clearInterval(intervalId))
</script>
```

In the code snippet above, we created a timer using the `onMounted` hook and clear the timer using the `onUnmounted` hook.

**onBeforeUnmount**

The `onBeforeUnmount` hook is the opposite of `onBeforeMount` hook. It is called right before a component instance is to be unmounted. Here’s an example of `onBeforeUnmounted` hook:

```jsx
<script setup>
  import {onUnmounted} from 'vue' let intervalId onBeforeMount(() =>{" "}
  {
    (intervalId = setInterval(() => {
      // ...
    }))
  }
  ) onBeforeUnmount(() => clearInterval(intervalId))
</script>
```

In the code snippet above, we created a timer using the `onBeforeMount` hook and clear the timer using the `onBeforeUnmount` hook.

**onDeactivated**

The `onDeactivated` hook is the opposite of `onActivated` hook discussed earlier. It is called after the component instance is removed from the DOM as part of a tree cached by the KeepAlive tag.

Here’s an example of `onDeactivated` hook:

```jsx
<script setup>
  import {onDeactivated} from 'vue' onDeactivated(() =>{" "}
  {console.log("Deactivated hook is called")})
</script>
```

## Final words

"Vue 3 Lifecycle Hooks Explained" is an article that provides an overview of the different lifecycle hooks in Vue 3 and how to use them.

The article explains that lifecycle hooks are special functions in Vue that allow developers to hook into or create custom functionality at specific moments before or after events occur.

The hooks are categorized into six main events: Creation, Mounting, Updating, Debugging, Server-side, and Destruction.

Under the Creation event, the article explains two hooks: **`beforeCreate`** and **`created`**. The **`beforeCreate`** hook is called before initializing reactive data and events, while the **`created`** hook is responsible for initializing reactive data and events.

The Mounting event hooks are discussed next, including **`onMounted`**, **`onBeforeMount`**, and **`onActivated`**. The **`onMounted`** hook is used to perform side effects after the component is mounted and rendered, while the **`onBeforeMount`** hook is called right before the component is mounted. The **`onActivated`** hook is a new addition in Vue 3 and is called when a component instance is inserted back into the DOM tree from a cache.

The Updating event hooks cover **`onBeforeUpdate`**, **`onUpdated`**, and **`onActivated`**. The **`onBeforeUpdate`** hook is called before the component updates its DOM tree due to changes in the reactive state, while the **`onUpdated`** hook is called after the component updates or re-renders the DOM tree. The **`onActivated`** hook is called when a component instance is activated from a cache.

The article then discusses the Debugging hooks, which include **`onErrorCaptured`**, **`onRenderTracked`**, and **`onRenderTriggered`**. These hooks are used for debugging and capturing errors during development and production.

The Server-side hooks category includes **`onServerPrefetch`**, which is called before a component instance is rendered on the server. This hook is useful for server-only data fetching during server-side rendering.

Lastly, the Destruction event hooks cover **`onUnmounted`**, **`onBeforeUnmount`**, and **`onDeactivated`**. The **`onUnmounted`** hook is called after the component is unmounted and is used for cleaning up manually created side effects. The **`onBeforeUnmount`** hook is called before the component is unmounted, and the **`onDeactivated`** hook is called after the component is removed from the DOM as part of a cached tree.

Throughout the article, code snippets are provided to illustrate how to implement each hook using the Options API and the Composition API in Vue 3.
