---
theme: ./theme
title: Using Nuxt as BFF
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
lineNumbers: false
highlighter: shiki
selectable: false
exportFilename: nuxt-ass-bff
info: |
  ## Using Nuxt as BFF
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

<div class="absolute top-10 left-12">
  <span class="font-700">
    Chi Nguyen @ MB.io Offsite  
  </span>
</div>

<div class="absolute bottom-30 text-left left-12">
  <h1>Using Nuxt as BFF</h1>
  <div class="italic font-light text-3xl text-gray-300">How Nuxt became my new BFF</div>
</div>

---
layout: statement
---

<Profile />

<!--
A short introduction about myself.

My name is Chi, am currently a frontend engineer at DCP Connect.

As someone who likes to tackle on architectural and scaling topics within the frontend world, I like to play with ideas and implementing it  It's what makes the UI, sometimes it's hard to find a balance in separation of concerns between business logics and UI logics within the HTML templates.

->
-->

---
---
# The Problem
### A client server architecture
<br>

<img class="mt-20 rounded-md h-30 m-auto" src="/clientserver.png" alt="Client Server Architecture" />

---
---
# The Problem
### When microservice architecture gets out of hand

<img class="mt-4 rounded-md h-100 m-auto" src="/ms.png" alt="Micro services" />

---
---
# The Problem
### And the answer

<img class="mt-4 rounded-md h-100 m-auto" src="/bff.png" alt="BFF" />

---
---
# Why a BFF is needed 
<br>

## DX:

- Acting as Microservices aggregrator
- Moving logic out of client-side
- Enabling easier UI changes 

## UX:
- Faster and more responsive application
- Quicker release cycles

---
layout: statement
---
# Nuxt 
### AND its ecosystem incl. Nitro

<!-- Nuxt introduction -->

---
---
<h1> Using <img class="inline-block -mt-3 h-14" src="/nuxt.svg" /> Server API</h1>

### Powered by Nitro

- 📁 File system routing
- 🐇 Rapid development with HMR
- 👕 TypeScript support
- 💰 Route caching with SWR (Stale-While-Revalidate)


---
---
# Re-routing existing API endpoints via Nuxt
### file system routing
<img class="mt-20 rounded-md h-70 m-auto" src="/routes.png" alt="BFF" />

<p v-click class="text-center">

`/api/{service}/{dynamic-path}`

</p>



---
layout: statement
---
# Configurations
### runtime configs

---
---
# Local Development 
### Vite plugin 
<img class="mt-4 rounded-md h-100 m-auto" src="/local.png" alt="BFF" />

---
layout: image-right
image: /bff.png
---
# Deployed environments
### Helm charts & Gitops config
- New Kubernetes Pod
- Container running Node server
- Internet facing gateway only exposes /api endpoints & healthcheck
- Microservice domains are passed as runtime variables


---
---
# Performance
### Datadog tracing

<img class="mt-8 rounded-md w-full m-auto" src="/datadog.png" alt="BFF" />

---
layout: image-right
image: https://images.unsplash.com/photo-1463681923411-9291ae004052
---
# Conclusions
### Nuxt as BFF
- Using Nuxt solely as a server is entirely possible
- Filesystem routing allows easy migration
- Migrating UI to Nuxt for SSR capabilities -> SEO 

---
layout: statement
---

# Thank you

---
layout: statement
---
# FAQs

---
layout: quote
---
# What about other options for frameworks?

<br>

## - Option 1: Nuxt & potentially moving Vue FE to Nuxt w/ SSR for selected routes
## - Option 2: Node backend (Fastify, Express, Nestjs, ...)


