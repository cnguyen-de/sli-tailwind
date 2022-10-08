<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
  animation: {
    type: String
  }
})
const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full gap-x-2">
    <div class="ml-4 my-10 drop-shadow-2xl bg-contain" :style="style" ></div>
    <div class="flex justify-center items-center default" :class="props.class">
      <div class="animation"  v-motion-pop-visible v-if="animation">
        <slot  />
      </div>
      <div class="no-animation" v-else>
        <slot  />
      </div>
    </div>
  </div>
</template>
