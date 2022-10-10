---
# try also 'default' to start simple
theme: ./theme
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Functional CSS with Tailwindcss
# persist drawings in exports and build
drawings:
  persist: true
fonts:
  sans: 'Helvetica Neue,Robot'
  local: 'Helvetica Neue'
  weights: '200,400,600,700'
  provider: 'none'
# use UnoCSS
css: unocss
layout: intro-image
image: /public/bg.jpeg
---

<div class="absolute top-10">
  <span class="font-700">
    Chi Nguyen @ NovaSummit 2022
  </span>
</div>

<div class="absolute bottom-30 text-left">
  <h1>Functional CSS with Tailwindcss</h1>
  <div class="italic font-light text-3xl text-gray-300">Start doing rapid web development today!
  </div>
</div>

---
layout: statement
---

<div class="ml-16 grid grid-cols-2 gap-8">
 <div class="flex flex-col items-end"><h1>Functional</h1></div>
 <h1 class="justify-self-start">CSS</h1>
</div>

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

---
layout: statement
---
# But why?

---
layout: statement
---

# But why?

<div class="absolute w-64">
  <video class="w-full h-full" muted autoplay loop>
    <source src="/public/bwhy.mp4" type="video/mp4" />
  </video>
</div>

---
---
# What is a Functional CSS Framework

* Pre-defined CSS classes
* Each class has **only one** definition
* Class names are self-explaining
* Example: _flex_, _p-8_, _text-center_

---
layout: image-left
image: /public/semantic.svg
animation: false
---

<div class="place-self-start justify-self-start">
  <h2 class="text-4xl">BEM Methodology</h2>
  <p class="my-4 text-2xl">Semantic CSS classes</p>
  <p class="text-2xl">Block__Element--Modifier</p>
</div>



---
layout: image-left
image: /public/semantic.svg
animation: true
---

<div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
    <div class="px-6 py-4 bg-white">
      <div class="font-bold text-xl mb-2 text-black">The Coldest Sunset</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
  </div>
</div>

---
layout: image-left
image: /public/tailwind.svg
animation: false
---
<div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
    <div class="px-6 py-4 bg-white">
      <div class="font-bold text-xl mb-2 text-black">The Coldest Sunset</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
  </div>
</div>

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
image: https://stateofx-images.netlify.app/captures/css2021/en-US/css_frameworks_experience_ranking.png
imageSrc: https://2021.stateofcss.com/en-US/technologies/css-frameworks/#css_frameworks_experience_ranking
---

# Introducing Tailwindcss
## https://tailwindcss.com

* Configurable theme
* Optimized CSS bundle with Purge CSS
* Works with any web app (vanilla or frameworks)

---
layout: 3-images
imageLeft: /public/lbbw.png
imageTopRight: /public/mbio.svg
imageBottomRight: /public/sokabau.webp
---
