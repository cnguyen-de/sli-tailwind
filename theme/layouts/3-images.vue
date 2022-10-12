<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
const props = defineProps({
  imageLeft: {
    type: String,
  },
  imageTopRight: {
    type: String,
  },
  imageBottomRight: {
    type: String,
  },
})
const left = computed(() => handleBackground(props.imageLeft))
const topRight = computed(() => handleBackground(props.imageTopRight))
const bottomRight = computed(() => handleBackground(props.imageBottomRight))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full gap-x-7">
    <div class="ml-14 my-14 !bg-contain bg-gray-200 dark:bg-slate-500 dark:bg-op-90 rounded-lg flex items-center p-4">
      <img class="object-contain" :src="imageLeft" alt="">
    </div>
    <div class="grid grid-rows-2 w-full h-full gap-y-7">
      <div class="mr-14 mt-14 !bg-contain bg-gray-200 dark:bg-slate-500 dark:bg-op-90 rounded-lg flex items-center">
        <img class="object-contain" :src="imageTopRight" alt="">
      </div>
      <div class="mr-14 mb-14 !bg-contain bg-gray-200 dark:bg-slate-500 dark:bg-op-90 rounded-lg flex items-center p-4">
        <img class="object-contain" :src="imageBottomRight" alt="">
      </div>
    </div>
  </div>
</template>
