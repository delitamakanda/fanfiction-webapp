<script setup lang="ts">
import { computed } from 'vue'

usePageStore().pageData.title = 'Fanfics'
const fanficsLoader = useFanficsStore()
const { fanfics } = storeToRefs(fanficsLoader);
const { getFanfics } = fanficsLoader;

await getFanfics()
import FanficGridCard from './components/FanficGridCard.vue';
import FanficListCard from './components/FanficListCard.vue';
import { useFanficLayout, FanficLayout } from '@/composables/useFanficLayout';
import { useFanficsStore } from '@/stores/loaders/fanfics.ts'

const { layout, setLayout, LAYOUTS } = useFanficLayout();

const fanficLayoutComponents = {
  [LAYOUTS.grid]: FanficGridCard,
  [LAYOUTS.list]: FanficListCard,
};
const fanficCardComponent = computed(
  () => fanficLayoutComponents[layout.value]
);
</script>

<template>
  <div v-if="fanfics">
    <p>Welcome to the fanfics section!</p>
    <button @click.prevent="setLayout(LAYOUTS.grid)">Layout grid</button>
    <button @click.prevent="setLayout(LAYOUTS.list)">Layout list</button>
    <FanficLayout class="mx-auto max-w-7-xl">
      <template v-for="fanfic in fanfics" :key="fanfic.id">
        <component :is="fanficCardComponent" :fanfic="fanfic" />
      </template>
    </FanficLayout>
  </div>
</template>

