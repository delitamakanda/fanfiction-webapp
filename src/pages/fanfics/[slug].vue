<script setup lang="ts">
import { formatDate } from '@/utils/formatDates'

const { slug } = useRoute('/fanfics/[slug]').params
const fanficsLoader = useFanficsStore()
const { getFanficBySlug } = fanficsLoader
const { fanfic } = storeToRefs(fanficsLoader)

await getFanficBySlug(slug)
</script>

<template>
  <div v-if="fanfic">
    <h1>{{ fanfic.title }}</h1>
    <p>{{ formatDate(fanfic.publish) }}</p>
    <p>{{ fanfic.author }}</p>
  </div>
</template>
