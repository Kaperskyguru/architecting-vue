---
date: 2023-04-18T18:30:00
updatedAt: 2023-04-18T16:00:00
title: Web Scraping with Nuxtjs using Puppeteer
permalink: /blog/web-scraping-with-nuxtjs-using-puppeteer/
description: Learn how to set up and configure puppeteer to work properly with Nuxtjs and how to use it to Scrape a job listing website and display them your website
layout: article
author: Solomon Eseme
author_profile_pic: /static/solomon-eseme.jpg
canonical: https://masteringbackend.com/posts/web-scraping-with-nuxtjs-using-puppeteer/
author_link: https://solomoneseme.com
tags: ["blog"]
---

Web Scraping with Nuxtjs using Puppeteer is intended to demonstrate how to set up and configure puppeteer to work properly with Nuxtjs and how to use it to Scrape a job listing website and [display them your website](https://masteringbackend.com/jobs).

Since Puppeteer is a Server-side Node package, it becomes very difficult to set it up to work properly with a Client-Side libraries like Vue.js and there are no much tutorials online on how to set this up properly.

This article is intended to demonstrate how i solve the problem in my client’s project using Nuxt.js and Puppeteer.

## Web Scraping Fundamentals

Web scrapping can sound very strange at first but it’s really a very simple term to understand.

It’s a term web scrapping is a technique that describes the extraction of data from a websites and saved in any desire format for further processing.

Web scrapping automate the manual process of extracting information from websites and storing these information electronically for further processing.

### Usage

1. Extracting product details of an e-commerce websites such as prices, product name, images etc.
2. Web scraping is very useful in research as it can help to gather structured data from multiple websites.
3. Gathering data from different sources for analysis can be automated with web scrapping easily.
4. It can be used to collect data for testing and training machine learning models.

### Method of web scraping

1. **Web scraping softwares:** This is most popular way of web scraping where pre-made softwares are deployed for the purpose of web scraping.
2. **Writing code:** This is a method where a developer is hired to develop the scraping scripts based on the input of the owner to scrape a specific website.

## Introduction to Puppeteer

Puppeteer is a Node library that is used to scrape web pages, automate form submission, etc.

It is Google’s official Node library for controlling Google Chrome instance from Node.js, it can also be configured to run in headless mode and make it run in the background.

Usage
Puppeteer can be used for several use cases but i will only list a few below.

1. Web page scrapping.
2. Tracking page load performance.
3. Automate form submissions.
4. Generate page screenshots
5. Generate PDF of website pages
6. Very useful for Automated Testing.
7. Performs any browser automation
8. Use to render the server-side of a single page app for preview.
9. etc.

## Building a `JobScrapper` Application with Nuxtjs using Puppeteer

### Creating a new Nuxt Project

Before we start developing our web scrapper, we need to install and set up Nuxtjs, following the simple step in the [official documentation](https://nuxtjs.org/docs/2.x/get-started/installation) can help speed up the process.

Type in the following commands to set up the project and accept the default set up rules.

    yarn create nuxt-app <project-name>

After installation, let’s start by creating the different components, stores and pages that will be needed in this project.

Create a components called `jobs` to display a list of all the jobs scraped.

    cd components

    touch Jobs.vue

Next, create a new `job` store in the stores folder to manage our jobs state.

    cd store
    touch job.js

Lastly, lets create a `jobs` page inside the pages folder for our navigation if needed anyways.

    cd pages
    touch jobs.vue

Of course, this is limited as your project can be complex and contains plenty components, pages and stores to manage different states.

### Installing dependencies.

Next is to install all the necessary dependencies needed to scrape pages with nuxtjs and puppeteer.

    npm i puppeteer net tls

Run the command to install the puppeteer library and other support libraries.

### Configuring Puppeteer

This is the difficult part, I had different issues configuring my puppeteer to work with nuxtjs because nuxtjs is both client and server-side frame work.

It becomes difficult to know where to place puppeteer or how to call it from the server side since puppeteer is a server node library and only works in server side of nuxtjs.

I will just go ahead to explain how i get it working on my project.

First, let’s create a new `script.js` file in the root directory and paste in the following codes.

    const saveFile = require('fs').writeFileSync
    const pkgJsonPath = require.main.paths[0] + '/puppeteer' + '/package.json'
    // console.log(pkgJsonPath)
    const json = require(pkgJsonPath)
    // eslint-disable-next-line no-prototype-builtins
    if (!json.hasOwnProperty('browser')) {
      json.browser = {}
    }
    delete json.browser.ws
    saveFile(pkgJsonPath, JSON.stringify(json, null, 2))

Looking at the script you might understand what it does, if not i will explain.

It goes into `node_modules/puppeteer/package.json` file and delete a particular line.

Before deleting that line, it checks if the `package.json` has the `broswer` object, if not create a new one, else move on to delete the `ws` property of the browser object and save the file finally.

The script is going to run each time we run `npm install`.

The `ws` is puppeteer’s web socket that was set to a web socket that does not exist in our project. By deleting that line each time will run `npm install` puppeteer will default to using the web socket that is in our `node_modules` folder.

Now, let’s add the script to our `package.json` file where it will be executed as a `postinstall` script.

Open your `package.json` file and add the following code.

    .......
    "scripts": {
        "dev": "nuxt",
        "build": "nuxt build",
        "start": "nuxt start",
        "export": "nuxt export",
        "serve": "nuxt serve",
        "lint:js": "eslint --ext .js,.vue --ignore-path .gitignore .",
        "lint": "yarn lint:js",
        "test": "jest",
        "postinstall": "node script"
      },
    ....

You also need to add the following code into your `package.json` file.

    .......
    "browser": {
        "fs": false,
        "path": false,
        "os": false,
        "tls": false
      }
    .......

That just sets `fs`, `path`, `os` and `tls` to `false` because these are only needed in the server side of things.

Now that the hard part is off, let’s configure Webpack to deal with puppeteer correctly.

Open your `nuxt.config.js` file and add the following line inside the `build` object.

    build: {
        extend(config, { isServer, isClient }) {
          config.externals = config.externals || {}
          if (!isServer) {
            config.node = {
              fs: 'empty',
            }
            if (Array.isArray(config.externals)) {
              config.externals.push({
                puppeteer: require('puppeteer'),
              })
            } else {
              config.externals.puppeteer = require('puppeteer')
            }
          }
          config.output.globalObject = 'this'
          return config
        },
      },

This configuration only requires puppeteer and add it to `externals` array only when Nuxtjs is at client side and set `fs` to empty too.

If you did everything right, your puppeteer should be ready to use with Nuxtjs to scrape pages, if you’re stuck you can [grab the repository here](https://github.com/Kaperskyguru/nuxt-web-scraping-puppeteer).

Now we can move to the easy part.

## Web Scrapping

Create file called `JobScrapper.js` and paste in the following code.

In my project, I was giving list of websites I should scrape to avoid violating any scrapping rules (Just saying 😁 ).

    const puppeteer = require('puppeteer')
    const jobUrl = // SITE URL HERE
    let page
    let browser
    let cardArr = []
    class Jobs {

      // We will add 3 methods here

      // Initializes and create puppeteer instance
      static async init(){}

      // Visits the page, retrieves the job
      static async resolver() {}

      static async getJobs() {}

    }
    export default Jobs

### Create the Init method

      static async init() {

        browser = await puppeteer.launch({
          // headless: false,
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process', // <- this one doesn't works in Windows
            '--disable-gpu',
          ],
        })

        page = await browser.newPage()
        await Promise.race([
          await page.goto(jobUrl, { waitUntil: 'networkidle2' }).catch(() => {}),
          await page.waitForSelector('.search-card').catch(() => {}),
        ])
      }

The `init` function initialises puppeteer with several configurations, creates a new page with `browser.newPage()`, visit our URL with `await page.goto(………)`, and wait for the page to load successfully with `await page.waitForSelector(…..)`

### Create a Resolver method.

      static async resolve() {
        await this.init()
        const jobURLs = await page.evaluate(() => {
          const cards = document.querySelectorAll('.search-card')
          cardArr = Array.from(cards)
          const cardLinks = []
          cardArr.map((card) => {
            const cardTitle = card.querySelector('.card-title-link')
            const cardDesc = card.querySelector('.card-description')
            const cardCompany = card.querySelector(
              'a[data-cy="search-result-company-name"]'
            )
            const cardDate = card.querySelector('.posted-date')
            const { text } = cardTitle
            const { host } = cardTitle
            const { protocol } = cardTitle
            const pathName = cardTitle.pathname
            const query = cardTitle.search
            const titleURL = protocol + '//' + host + pathName + query
            const company = cardCompany.textContent
            cardLinks.push({
              titleText: text,
              titleURLHost: host,
              titleURLPathname: pathName,
              titleURLSearchQuery: query,
              titleURL: titleURL,
              titleDesc: cardDesc.innerHTML,
              titleCompany: company,
              titleDate: cardDate.textContent,
            })
          })
          return cardLinks
        })
        return jobURLs
      }
    }

This method does all the job.

Firstly, it selects all the Jobs listed, convert it to javascript array and loop through each of them while retrieving the data needed.

### Create a getJobs method

    static async getJobs() {
        const jobs = await this.resolve()
        await browser.close()
        const data = {}
        data.jobs = jobs
        data.total_jobs = jobs.length
        return data
      }

The method simply returns the job array from the `resolver` method and closes the browser.

## Creating Vuex action

Next, we are going to set up our Vuex store to retrieve the jobs each time we dispatch the `getJobs` action and store them to state.

Open the `job` file and add the following codes.

    import JobScrapper from '~/JobScrapper'

    // Action
    async getJobs({ commit }) {
        const data = await JobScrapper.getJobs();
        if (data.total_jobs) {
          commit('STORE_JOBS', data)
          return data.jobs
        }
    }

    // Mutation
    STORE_JOBS(state, payload) {
        state.jobs = payload.jobs
        state.total_jobs = payload.total_jobs
    },

    // Getter
    export const getters = {
      getJobs: (state) => () => {
        return state.jobs
      },
    }

    // State
    export const state = () => ({
      jobs: [],
      total_jobs: 0,
    })

## Displaying Jobs

Open `pages/jobs.vue` file and add the following codes.

    <template>
      <div class="row mt-5">
        <div class="card-group">
          <div class="row">
            <div class="col-md-8">
              <Job v-for="(job, i) in jobs" :key="i" :job="job" />
            </div>
            <div class="col-md-4 mt-3">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      async asyncData({ store }) {
        const getJobs = store.getters['job/getJobs']
        let jobs = getJobs()
        if (!jobs.length) {
          jobs = await store.dispatch('job/getJobs')
        }
        return { jobs }
      }
    }
    </script>

This is just one way you could dispatch the actions in each of the pages you want, but it has to be within the `asyncData()` hook because it is called from the server side.

Other way or my best way could to dispatch the action inside `nuxtServerInit` action which will dispatch the action on every new page loads.

Let’s me show you how to do that.

Create an `index.js` file inside the `store` folder and add the following codes.

    async nuxtServerInit({ dispatch }) {
        try {
          await dispatch('job/getJobs')
        } catch (error) {}
    },

This will scrape the jobs and save it to state, you can then use `…mapState` or `…mapGetters` to retrieve the job and display it in your component.

In my project, I use the `nuxtServerInit` approach and `…mapState` in any of the components I wan to display the job.

### Jobs Component

    <template>
      <section>
        ........
            <div class="row mb-1 mt-5" v-if="jobs.length !== 0">
              <div
                v-for="job in jobs"
                :key="job.id"
                class="col-md-6 col-sm-12 mb-4"
              >
                // My JOB component to display a specific job
                <Job :job="job" />
              </div>
            </div>
            <div v-else class="row mb-1 mt-5">No Jobs at this time</div>
        ..........

      </section>
    </template>
    <script>
    import { mapState } from 'vuex'
    export default {
      computed: {
        ...mapState({
          jobs: (state) => {
            return [...state.job.jobs].slice(0, 4)
          },
        }),
      },
    }
    </script>
    <style></style>

That’s all.

Except you want to see my `Job` component, then [clone the repository here](https://github.com/Kaperskyguru/nuxt-web-scraping-puppeteer), everything can be found there.

P:S

This method of web scraping with Nuxtjs using puppeteer has many work arounds and may be a little difficult to understand for beginners, though it works properly because I have used it in my projects.

I have a better approach on how to [handle web scraping with Nuxtjs using Node/express and puppeteer](https://masteringbackend.com/posts/web-scraping-with-nuxtjs-using-puppeteer/), I will be writing about it too.

Consider joining our newsletter to never miss a thing when it drops.

## References

1. https://flaviocopes.com/puppeteer/
2. https://www.webharvy.com/articles/what-is-web-scraping.html
3. https://masteringjs.io/tutorials/fundamentals/puppeteer

## Conclusion:

Congratulations for making it this far, by now you should have a deep understanding of web scrapping using puppeteer in Nuxt.js.

You should also have built and completed the JobScrapper Project.
