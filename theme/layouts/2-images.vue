<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
const props = defineProps({
  imageLeft: {
    type: String,
  },
  imageRight: {
    type: String,
  },
})
const left = computed(() => handleBackground(props.imageLeft))
const right = computed(() => handleBackground(props.imageRight))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full gap-x-7">
    <div class="ml-14 my-14 drop-shadow-2xl" :style="left"></div>
    <div class="mr-14 mt-14" :style="right"></div>
    <slot />
  </div>
</template>
