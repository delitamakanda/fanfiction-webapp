<script setup lang="ts">
const AuthLayout = defineAsyncComponent(
  () => import('./components/Layout/main/AuthLayout.vue')
)
const GuestLayout = defineAsyncComponent(
  () => import('./components/Layout/main/GuestLayout.vue')
)

const user = ref(null);

useMeta({
  title: 'Fanfiction',
  description: 'Welcome to the fanfiction website!',
  content: 'Welcome to the fanfiction website, where you can read and share your favorite stories!',
  meta: [
    { name: 'theme-color', content: '#3eaf7c' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'og:title', content: 'Fanfiction' },
    { name: 'og:description', content: 'Welcome to the fanfiction website!' },
  ]
})
</script>

<template>
  <metainfo></metainfo>
  <Transition name="fade" mode="out-in">
    <Component :is="user ? AuthLayout : GuestLayout" :key="user?.id">
      <RouterView v-slot="{Component, route }">
        <Transition name="fade" mode="out-in">
          <div class="w-full" :key="route.path">
            <Suspense v-if="Component" :timeout="0">
              <Component :is="Component"></Component>
              <template #fallback>
                <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center w-full h-screen bg-background bg-opacity-90 z-50">
                  <iconify-icon icon="lucide:loader-circle" class="text-6xl animate-spin" />
                </div>
              </template>
            </Suspense>
          </div>
        </Transition>
      </RouterView>
    </Component>
  </Transition>
</template>
