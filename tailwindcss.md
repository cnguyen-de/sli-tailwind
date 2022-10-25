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
Dark mode!
-->

---
layout: statement
---

<Profile />

---
layout: statement
---

<div class="ml-16 grid grid-cols-2 gap-8">
 <div class="flex flex-col items-end"><h1>Functional</h1></div>
 <h1 class="justify-self-start">CSS</h1>
</div>

<!--
Functional CSS may also be known as
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
... So what exactly is functional css? Before we get to the definition, let's start with something fundamental, the terminology of CSS.
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
-->

---

# What is a functional CSS framework

* Pre-defined CSS classes
* Each CSS rule contains **only one** declaration
* Class names are self-explaining

<ul class="!mt-0" v-click="1">
  <li class="relative">Example</li>
</ul>

<div v-click="1" class="grid grid-cols-2 gap-8">
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

---
layout: statement
---

# But why?

<div class="absolute w-64">
  <video class="w-full h-full" muted autoplay loop>
    <source src="/bwhy.mp4" type="video/mp4" />
  </video>
</div>

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

<div class="justify-self-start space-y-4" v-click>
  <h1 class="text-4xl font-bold">BEM Methodology</h1>
  <p class="text-2xl">- Semantic CSS classes</p>
  <p class="text-2xl">- Block__Element--Modifier</p>
  <p class="text-2xl">- Project specific naming convention</p>
</div>

<!--
In a real world project



-> sometimes it's hard to imagine the UI just from the code
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
imageSrc: https://2021.stateofcss.com/en-US/technologies/css-frameworks/#css_frameworks_experience_ranking
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
