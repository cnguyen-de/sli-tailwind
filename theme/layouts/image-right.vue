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
    <div class="slidev-layout default image-right" :class="props.class">
      <slot />
    </div>
    <div class="my-16 mr-4 rounded-lg" :style="style">
      <a class="absolute py-2 z-10 bottom-0 text-xs text-gray-500 dark:text-gray-400 ">{{ source }}</a>
    </div>
  </div>
</template>
