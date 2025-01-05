<script setup lang="ts">
import { VERSION } from '@/constants/version'
usePageStore().pageData.title = `Settings`
</script>
<template>
  <h1>
    Settings
  </h1>
  <div>{{ VERSION.tag }}</div>
</template>
