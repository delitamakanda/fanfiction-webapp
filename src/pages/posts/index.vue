<script setup lang="ts">
import { columns } from '@/utils/tableColumns/postsColumns'
usePageStore().pageData.title = 'Posts'
const postsLoader = usePostsStore()
const { posts } = storeToRefs(postsLoader)
const { getPosts } = postsLoader

await getPosts()

const { groupedCollabs } = useCollabs()

const columnsWithCollabs = columns(groupedCollabs)
</script>

<template>
  <DataTable v-if="posts" :columns="columnsWithCollabs" :data="posts" />
</template>
