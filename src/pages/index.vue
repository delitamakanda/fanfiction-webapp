<script setup lang="ts">
import { computed } from 'vue'
usePageStore().pageData.title = 'Welcome'
const categoryLoader = useCategoryStore()
const healthStoreLoader = useHealthStore()
const { categories } = storeToRefs(categoryLoader)
const { healthCheck } = storeToRefs(healthStoreLoader)
const { getCategories } = categoryLoader
const { getHealthCheck } = healthStoreLoader
import StatusCard from '@/components/StatusCard/StatusCard.vue'

await getCategories()
await getHealthCheck()

const healthStatus = computed(() => {
  if (healthCheck?.value?.status === 'ok') {
    return 'success'
  } else if (healthCheck?.value?.status === 'loading') {
    return 'loading'
  } else if (healthCheck?.value?.status === 'error') {
    return 'error'
  }
  return 'idle'
})

const healthDescription = computed(() => {
  if (healthCheck?.value?.status) {
    return `Status: ${healthCheck.value.status}`
  }
  return 'No health check data available'
})
</script>

<template>
  <main>
    <StatusCard title="Health API" :status="healthStatus" :description="healthDescription">
      <template #action>
        <button type="button">Check Health</button>
      </template>
    </StatusCard>
    <Carousel v-if="categories" :elements="categories" />
  </main>
</template>
