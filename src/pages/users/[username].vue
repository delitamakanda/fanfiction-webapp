<script setup lang="ts">
const { user } = useAuthStore()
usePageStore().pageData.title = `${user?.username}'s Profile`
</script>

<template>
  username
</template>
