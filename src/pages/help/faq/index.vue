<script setup lang="ts">
usePageStore().pageData.title = 'FAQ'
const helpLoader = useHelpStore()
const { faqs } = storeToRefs(helpLoader)
const {  getFaqs } = helpLoader

await getFaqs()
</script>
<template>
  <RouterLink to="/help">back to help</RouterLink>
  <div v-if="faqs">
    <div v-for="faq in faqs" :key="faq.id">
      <h3>{{ faq.question }}</h3>
      <p>{{ faq.reponse }}</p>
      <p>{{ faq.libelle }}</p>
      </div>
  </div>
</template>
