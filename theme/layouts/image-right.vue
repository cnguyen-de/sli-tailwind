<script setup lang="ts">
import { computed, reactive } from 'vue'
import { handleBackground } from '../layoutHelper'
const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
  imageSrc: {
    type: String
  }
})
const source = computed(() => props.imageSrc);
const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <div class="slidev-layout default image-right pr-4" :class="props.class">
      <slot />
    </div>
    <div class="my-10 rounded-md bg-origin-border bg-clip-border !bg-contain" :style="style" :class="props.class">
      <a class="absolute py-2 z-10 bottom-2 text-xs text-gray-500 dark:text-gray-400 ">{{ source }}</a>
    </div>
  </div>
</template>
