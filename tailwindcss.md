---
theme: ./theme
title: Functional CSS with Tailwind CSS
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
lineNumbers: false
highlighter: shiki
selectable: false
exportFilename: tailwindcss-novasummit22
info: |
  ## Functional CSS with Tailwindcss
drawings:
  persist: false
fonts:
  sans: Inter
  weights: 200,300,400,500,600
  mono: Fira Code
css: unocss
layout: intro-image
image: /bg.jpeg
---

<div class="absolute top-10">
  <span class="font-700">
    Chi Nguyen @ Novatec Summit 2022
  </span>
</div>

<div class="absolute bottom-30 text-left">
  <h1>Functional CSS with Tailwindcss</h1>
  <div class="italic font-light text-3xl text-gray-300">Start doing rapid web development today!
  </div>
</div>

<!--
Reminder Dark mode, white NOVATEC
-->

---
layout: statement
---

<Profile />

<!--
A short introduction about myself.

My name is Chi and I live in FFM 

As a member of architecture and design guild, I like to dive into architectural topic within the frontend world and obviously HTML and CSS is something you can not simply ignore. It's what makes the UI, sometimes it's hard to find a balance in separation of concerns between business logics and UI logics within the HTML
templates. As a matter of fact, having a well structured HTML enables you to implement changes in the UI easier.

And the topic today is about functional CSS ->
-->

---
layout: statement
---

# Implementing an UI is 
# <span class="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">not easy</span>

<!--
But implementing an UI is not easy, especially ones that are open for changes.
In a sense that writing code that works isn't hard but writing good code that is easily understandable, maintainable and efficient is hard. We need to have a guideline of rulesets within the design system, but also keeping it customizable. There are several aspects that we need to keep in mind of. 

->
-->

---

<DesignTriangle></DesignTriangle>

<!--
User experience or accessibility is what makes a good application.
It is how the components behave, it dictates the user flows.

Unified components provided by a design system allows to display the identity of the application. Keeping it consistent helps the users in navigating the application.

Sometimes you'd need a touch of fanciness in which you'd need to change the base design of some components, customizability is key to make an application fun.

->

So combining all these aspects, we'd like to be in middle.

->

Now we can not simply use all of these mentioned libraries, sometimes we are using some inhouse components that require styles overriding. And that makes the development not fun. It takes time to implement the design, but more so the next time you need to add some tweaks.

How do we achieve this sweet point?
->
-->

---
layout: statement
---

<div class="ml-16 grid grid-cols-2 gap-8">
 <div class="flex flex-col items-end"><h1>Functional</h1></div>
 <h1 class="justify-self-start">CSS</h1>
</div>

<!--
By using Functional CSS.

You may also have heard about this term under other names, such as ->
-->

---
layout: statement
preload: true
---

<div class="ml-16 grid grid-cols-2 items-center gap-8">
 <div class="flex flex-col items-end">
  <h1>Functional</h1>
  <h1 v-motion-slide-visible-bottom>
    Atomic
  </h1> 
 </div>
 <h1 class="justify-self-start">CSS</h1>
</div>

<!--
Atomic CSS ->
-->

---
layout: statement
preload: true
---

<div class="ml-16 grid grid-cols-2 items-center gap-8">
 <div class="flex flex-col items-end">
  <h1>Functional</h1>
  <h1>Atomic</h1> 
  <h1 v-motion-slide-visible-bottom>
    Utility-first
  </h1>
 </div>
 <h1 class="justify-self-start">CSS</h1>
</div>

<!--
or Utility-first CSS. In this talk, these terms may come up interchangably and will refer to the same meaning.

... So what exactly is functional css? Before we get to the definition, let's start with something fundamental, the terminology of CSS. ->
-->

---

# HTML & CSS
## A basic introduction

<div class="grid grid-cols-2 gap-8 pt-8">
  <div class="flex flex-col gap-8">
  
  ```html 
  HTML
  <div class="card">Novatec Summit 2022</div>
  ```

  ```css {1|all}
  CSS
  .card { 
    height: 300px;
    width: 450px;
    background:
     linear-gradient(to bottom right, #E9454E #5B4897);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }
  ```
  </div>

  <div v-click class="flex justify-center items-center w-[450px] h-[300px] bg-gradient-to-br from-[#E9454E] to-[#5B4897] rounded-lg">
  Novatec Summit 2022
  </div>
</div>

<!--
The HTML contains a div, which has a class name of "card".

In the CSS section, it contains CSS rules. In this example, you can see only one rule which targets the "card" class by using dot selector.

Each line inside the rule is called declaration 

->

And this code snippet will render this nice red violet card
-->

---

# What is a functional CSS framework

* Pre-defined CSS classes
* Each CSS rule contains **only one** declaration
* Class names are self-explaining

<div v-click="1" class="mt-4">
  
  <div class="grid grid-cols-2 gap-8">

  ```html
  <div class="absolute top-10">
    <span class="font-bold">
      Chi Nguyen @ Novatec Summit 2022
    </span>
  </div>
  <div class="absolute bottom-30 text-left">
    <h1>Functional CSS with Tailwindcss</h1>
    <div class="italic font-light text-3xl text-gray-300">
      Start doing rapid web development today!
    </div>
  </div>
  ```

  ```css
  .absolute {
    position: absolute;
  }
  .font-light {
    font-weight: 300;
  }
  .italic {
    font-style: italic;
  }
  ...
  ```
  </div>
</div>

<!--
A Function CSS Framework provides
- Pre defined css classes
- Each CSS rule contains **only one** declaration
- Class names are self-explaining

->

Let's look at this code snippet, this is the actual source code of the page cover in this talk.

We can use a set of pre-defined classes directly and the framework will automatically generate the CSS rules like on the right side.

By writing also the styling via utility classes, you don't need to switch between templating and styling, especially helpful for technologies such as React.

->
-->

---
layout: statement
---

# But why?

<div class="absolute w-64">
  <video class="w-full h-full" muted autoplay loop>
    <source src="/bwhy.mp4" type="video/mp4" />
  </video>
</div>

<!--
Now, you may ask why would we write a bunch of classes in our HTML, isn't that hard to read?

->
-->

---
layout: code-preview
---

```html
<div class="cmp-proj-card">
  <img class="cmp-proj-card__image" src="..." alt="...">
  <div class="cmp-proj-card__body">
    <h5 class="cmp-proj-card__title">
      The Coldest Sunset
    </h5>
    <p class="cmp-proj-card__text 
    cmp-proj-card__text--highlight">
      Lorem ipsum dolor sit amet, consectetur 
      adipisicing elit. Voluptatibus quia, nulla! 
      Maiores et perferendis eaque, exercitationem 
      praesentium nihil.
    </p>
  </div>
</div>
```

<div class="justify-self-start space-y-4" v-click>
  <h1 class="text-4xl font-bold">BEM Methodology</h1>
  <p class="text-2xl">- Semantic CSS classes</p>
  <p class="text-2xl">- Block__Element--Modifier</p>
  <p class="text-2xl">- Project specific naming convention</p>
</div>

<!--
In a real world project, you'd have your code that looks something similar to this.

-> 

This is an example using BEM methodology which utilizes semantic css classes. Semantic classes describe the HTML elements via a set rule of B-E-M. And each project has its own naming convention like prefixes or suffixes.



- It's hard for new comers to get use to the convention/code base

->
-->

---
layout: code-preview
---

```html
<div class="card">
  <img class="card__image" src="..." alt="...">
  <div class="card__body">
    <h5 class="card__title">
      The Coldest Sunset
    </h5>
    <p class="card__text card__text--highlight">
      Lorem ipsum dolor sit amet, consectetur 
      adipisicing elit. Voluptatibus quia, nulla! 
      Maiores et perferendis eaque, exercitationem 
      praesentium nihil.
    </p>
  </div>
</div>
```

<ExampleCard></ExampleCard>

<!--
It's also impossible to imagine the UI just from the code

->
-->

---
layout: code-preview
---

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="..." alt="...">
  <div class="px-6 py-4 bg-white">
    <h5 class="font-bold text-xl mb-2 text-black">
      The Coldest Sunset
    </h5>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur 
      adipisicing elit. Voluptatibus quia, nulla! 
      Maiores et perferendis eaque, exercitationem 
      praesentium nihil.
    </p>
  </div>
</div>
```

<ExampleCard></ExampleCard>


---
layout: code-preview
---

```html {1|3|4,7}
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="..." alt="...">
  <div class="px-6 py-4 bg-white">
    <h5 class="font-bold text-xl mb-2 text-black">
      The Coldest Sunset
    </h5>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur 
      adipisicing elit. Voluptatibus quia, nulla! 
      Maiores et perferendis eaque, exercitationem 
      praesentium nihil.
    </p>
  </div>
</div>
```

<ExampleCard></ExampleCard>

---

# Semantic vs utility classes
* Markup doesn't concern styling but CSS is concerned with markup structure
* Similar styling but different components
* Responsive design
* More details at:
<div class="pl-8 pt-2">

  https://nicolasgallagher.com/about-html-semantics-front-end-architecture/

  https://adamwathan.me/css-utility-classes-and-separation-of-concerns/
</div>


---
layout: image-right
image: /stateofcss.png
imageSrc: >-
  https://2021.stateofcss.com/en-US/technologies/css-frameworks/#css_frameworks_experience_ranking
---

# Introducing Tailwindcss
## https://tailwindcss.com

* Utility-first CSS Framework
* Set of classes
* Arbitrary values
* Built-in dark mode
* Responsiveness in HTML


---
layout: image-right
image: /stateofcss-usage.png
imageSrc: https://2021.stateofcss.com/en-US/technologies/css-frameworks/#css_frameworks_experience_ranking
---

# Introducing Tailwindcss
## https://tailwindcss.com

* Configurable theme 
* Optimized CSS bundle with Purge CSS
* Works with any web app (vanilla or frameworks)

---
layout: statement
---

# Live Coding

---
layout: fact
---
<h1 v-motion-slide-visible-bottom>It's <h1>fast</h1></h1>

---
layout: fact
---
<h1>It's <h1 v-motion v-motion-slide-visible-bottom>rapid</h1></h1>

---
layout: fact
---
<h1>DX <h1 v-motion v-motion-slide-visible-bottom>🚀</h1></h1>

---
layout: 3-images
imageLeft: /lbbw.png
imageTopRight: /mbio.svg
imageBottomRight: /sokabau.webp
---


---
layout: fact
---
# Thank you

<p class="pt-8 text-gray-700 dark:text-gray-400">Slides available @ <a href="https://slides.cnguyen.de">slides.cnguyen.de</a></p>
