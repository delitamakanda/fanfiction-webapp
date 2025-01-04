<script setup lang="ts">
usePageStore().pageData.title = 'Welcome'
const categoryLoader = useCategoryStore()
const { categories } = storeToRefs(categoryLoader)
const { getCategories } = categoryLoader

await getCategories()
</script>

<template>
  <main>
    <Carousel v-if="categories" :elements="categories" />
  </main>
</template>
