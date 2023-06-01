<script setup>
const props = defineProps(['details'])
</script>
<template>
  <div class="container relative m-0 h-full flex justify-center items-center">
    <div class="triangle w-64 h-64 bg-gray-200 dark:bg-gray-800 overflow-visible">
    </div>
    <div class="absolute top-55% flex items-center justify-center flex-col">
      <div class="h-8 w-8 rounded-full bg-red-400"></div>
      <div class="text-xl text-center">
        Sweet point
      </div>
    </div>
    <div class="text-3xl font-bold absolute top-10">
      User experience / Accessibility
      <div class="font-base text-xl" v-show="props?.details" v-motion-slide-visible-right>
        Mantine <br> Headless UI
      </div>
    </div> 
    <div class="text-3xl font-bold absolute top-90 left-0">
      Customizability
      <div class="font-base text-xl" v-show="props?.details" v-motion-slide-visible-right>
        SCSS/LESS <br> PostCSS
      </div>
    </div> 
    <div class="text-3xl font-bold absolute top-90 -right-14">
      Unified components
      <div class="font-base text-xl" v-show="props?.details" v-motion-slide-visible-right>
        Material (MUI)
        <br>
        Vuetify
      </div>
    </div> 
  </div>
</template>
<style scoped>
  .triangle {
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  }
</style>