---
date: 2023-05-30T15:30:00
updatedAt: 2023-05-30T15:30:00
title: Easy Guide to Vue Transition
permalink: /blog/easy-guide-to-vue-transition/
description: In this comprehensive guide, we will explore Vue Transition in detail, including its core concepts, usage, and advanced techniques.
layout: article
author: Solomon Eseme
author_profile_pic: /static/solomon-eseme.jpg
author_link: https://solomoneseme.com
tags: ["blog"]
---

Vue Transition provides a powerful way to add animations and transitions to your Vue 3 applications. With Vue Transition, you can create smooth and engaging user experiences by adding effects to elements when they enter, leave, or update in the DOM.

Vue Transition is a feature in Vue 3 that allows developers to add dynamic transitions and animations to elements within their applications. It provides a simple and declarative syntax for defining transitions and applying them to different lifecycle hooks of elements.

In this comprehensive guide, we will explore Vue Transition in detail, including its core concepts, usage, and advanced techniques.

## **Getting Started with Vue Transition**

To get started with Vue Transition, it's important to understand the core concepts and terminology associated with it. Let's take a closer look at the key components of Vue Transition:

### **Transitions**

A transition in Vue refers to an animation or effect that is applied to an element when it enters, leaves, or updates in the DOM. Transitions are defined using the **`<transition>`** component and can include various CSS classes and properties to achieve the desired effects.

### **CSS Classes**

CSS classes play a crucial role in Vue Transition as they define the specific styles and animations to be applied during different transition stages. Vue provides predefined CSS classes such as **`v-enter`**, **`v-enter-active`**, **`v-leave`**, and **`v-leave-active`**, which can be customized or extended as per the application's requirements.

### **Transition Hooks**

Transition hooks are functions that are executed at different stages of the transition process. Vue Transition provides several hooks, such as **`beforeEnter`**, **`enter`**, **`afterEnter`**, **`leave`**, **`afterLeave`**, **`beforeAppear`**, **`appear`**, and **`afterAppear`**, which allow you to add custom logic and manipulate the elements during each stage of the transition.

Now that we have a basic understanding of Vue Transition's core concepts, let's dive into how Vue developers can learn and use Vue Transition in their applications effectively.

## **Using Vue Transition in Vue 3**

Now, let's dive into the practical implementation of Vue Transition in Vue 3. We'll explore various examples and code snippets to showcase different aspects of using Vue Transition effectively.

### **Basic Transition Example**

To begin, let's create a basic transition that fades in an element when it enters the DOM. Here's an example:

```jsx
<template>
	<div>
	  <transition name="fade">
	    <p v-if="show">Hello, Vue Transition!</p>
	  </transition>
		<button @click="show = !show">Toggle</button>
	</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
```

In this example, the **`<transition>`** component wraps the element we want to transition, which in this case is a **`<p>`** element. The **`name`** attribute defines the name of the transition, which will be used as the prefix for the CSS classes. The **`v-if`** directive controls the visibility of the element.

The CSS classes **`fade-enter-active`** and **`fade-leave-active`** specify the transition properties, such as the duration and easing. The **`fade-enter`** and **`fade-leave-to`** classes define the initial and final states of the element.

### **Transition Modes**

Vue Transition provides different modes that control how elements are inserted and removed from the DOM. The default mode is **`in-out`**, which means the leaving element transitions out first, followed by the entering element. Other modes include **`out-in`**, where the entering element transitions in first, followed by the leaving element, and **`default`**, which behaves similarly to **`in-out`**.

To specify a transition mode, you can use the **`mode`** attribute on the **`<transition>`** component. Here's an example:

```jsx
<template>
  <transition name="fade" mode="out-in">
    <p v-if="show">Hello, Vue Transition!</p>
  </transition>
</template>
```

In this example, the **`mode`** attribute is set to **`"out-in"`**, which means the entering element will transition in first, followed by the leaving element.

### **Transition Hooks**

Transition hooks allow you to add custom logic and manipulate elements during different stages of the transition. For example, you can use the **`beforeEnter`** hook to set initial styles before an element enters, or the **`afterLeave`** hook to perform actions after an element has left.

Here's an example that demonstrates the usage of transition hooks:

```jsx
<template>
	<div>
	  <transition
	    name="fade"
	    @before-enter="beforeEnter"
	    @after-enter="afterEnter"
	  >
	    <p v-if="show">Hello, Vue Transition!</p>
	  </transition>
		<button @click="show = !show">Toggle</button>
	</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    afterEnter(el) {
      el.style.opacity = 1;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
```

In this example, the **`@before-enter`** and **`@after-enter`** directives bind the **`beforeEnter`** and **`afterEnter`** methods to the corresponding transition hooks. Inside these methods, we can access the element being transitioned and apply custom styles or perform other actions.

## **Conclusion**

Vue Transition is a powerful feature in Vue 3 that enables developers to add dynamic animations and transitions to their applications. By leveraging the **`<transition>`** component, CSS classes, and transition hooks, developers can create engaging user experiences that enhance the overall look and feel of their Vue applications.

In this guide, we explored the core concepts of Vue Transition, learned how to implement them in Vue 3 applications, and discussed various examples and code snippets.

By mastering Vue Transition, you can elevate your Vue 3 development skills and bring your applications to life with stunning animations and transitions. So go ahead, dive into the world of Vue Transition, and unleash your creativity in building immersive user experiences!
