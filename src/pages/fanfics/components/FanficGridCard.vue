<template>
  <div class="fanficGridCard">
    <div class="fanficImageContainer">
      <img v-if="fanfic.picture" class="fanficImage" :src="fanfic.picture" :alt="fanfic.title" />
    </div>
    <p class="font-semibold text-lg mb-2">{{ fanfic.title }}</p>
    <div class="flex justify-between items-center mt-auto">
      <p class="text-gray-500">{{ fanfic.category }}</p>
      <p>{{ fanfic.author }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Fanfic } from '@/utils/apiFanfics.ts'

defineProps<{ fanfic: Fanfic }>();
</script>

<style>
.fanficGridCard {
  @apply bg-white p-4 rounded-md shadow-md flex flex-col;
}

.fanficGridCard:hover {
  @apply shadow-lg cursor-pointer;
}

.fanficImageContainer {
  @apply flex items-center justify-center flex-grow mb-8;
}

.fanficImage {
  max-height: 20rem;
  @apply max-w-full block h-auto mx-auto flex-shrink-0;
}
</style>
