<script setup lang="ts">
usePageStore().pageData.title = 'Help center'
const helpLoader = useHelpStore()
const { lexique } = storeToRefs(helpLoader)
const { getLexique } = helpLoader

await getLexique()
</script>
<template>
  <RouterLink to="/help/faq">FAQ</RouterLink>
  <div v-if="lexique">
    <div v-for="item in lexique" :key="item.id">
      {{ item.title }} - {{item.definition}}
      </div>
  </div>
</template>
