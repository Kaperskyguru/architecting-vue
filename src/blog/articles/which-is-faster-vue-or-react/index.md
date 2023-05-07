---
date: 2023-05-06T15:30:00
updatedAt: 2023-05-06T15:30:00
title: Which is Faster Vue or React
permalink: /blog/which-is-faster-vue-or-react/
description: In recent years, two popular JavaScript frameworks, Vue and React, have emerged as the go-to options for building web applications. But which one is faster, Vue or React?
layout: article
author: Solomon Eseme
author_profile_pic: /static/solomon-eseme.jpg
author_link: https://solomoneseme.com
tags: ["blog"]
---

When it comes to web development, speed is a crucial factor. Web developers are always looking for ways to optimize their web applications and make them faster. In recent years, two popular JavaScript frameworks, Vue and React, have emerged as the go-to options for building web applications. But which one is faster, Vue or React?

## **Vue vs React Performance Comparison**

There have been several studies and comparisons made between Vue and React regarding their performance. According to this **[3rd party benchmark](https://stefankrause.net/js-frameworks-benchmark8/table.html)**, which focuses on raw render/update performance with very simple component trees. Vue outperforms React in most scenarios. The study found that Vue is faster than React when it comes to rendering time, especially for large-scale applications.

Another performance test conducted by **[JS Framework Benchmark](https://github.com/krausest/js-framework-benchmark)** showed that Vue outperforms React in the following scenarios:

- Updating data
- Adding and removing items from a list
- Sorting a list
- Selecting an item from a list

However, in scenarios like rendering a large list of items or creating deep tree structures, React outperforms Vue.

## **Benchmarking Vue and React**

Benchmarking is a useful tool for comparing the performance of different frameworks. There are several ways to benchmark Vue and React. One way is to use the JS Framework Benchmark suite, which tests the performance of several JavaScript frameworks, including Vue and React. The suite runs tests on several scenarios, such as rendering a list, updating data, and sorting a list.

Another way to benchmark Vue and React is to use the Chrome DevTools. The DevTools provide a performance profiling tool that developers can use to compare the performance of Vue and React in real time. The profiling tool shows how long it takes for each framework to render and update components, allowing developers to identify performance bottlenecks and optimize their applications.

## **Conclusion**

In conclusion, Vue and React are both powerful JavaScript frameworks that can be used to build fast and efficient web applications. While Vue outperforms React in most scenarios, React is faster in scenarios where large lists or deep tree structures are involved. Benchmarking is a useful tool for comparing the performance of Vue and React, and developers can use the Chrome DevTools or the JS Framework Benchmark suite to benchmark these frameworks.

## **Sources**

- **[JS Framework Benchmark](https://github.com/krausest/js-framework-benchmark)**
- **[Chrome DevTools: Evaluate Runtime Performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance)**
