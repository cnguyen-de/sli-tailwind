<script setup lang="ts">
  const props = defineProps({
    image: {
      type: String
    }
  })
</script>

<template>
  <div class="w-full h-full gif">
    <video class="w-full h-full" muted autoplay loop>
      <source :src="image" type="video/mp4" />
    </video>
    <div class="absolute w-full h-full top-0">
      <div class="flex h-full items-center justify-center text-6xl font-extrabold">
        <slot />
      </div>
    </div>
  </div>
</template>
