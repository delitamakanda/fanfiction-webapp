<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const profile = ref({})

const isDark = useDark()
const toggleDarkMode = useToggle(isDark)
</script>

<template>
  <nav class="h-16 border-b bg-muted/40 flex gap-2 justify-between px-6 items-center">
    <form class="relative h-fit w-full max-w-96">
      <iconify-icon class="absolute top-[50%] translate-y-[-50%] left-2.5 text-muted-foreground" icon="lucide:search"></iconify-icon>
      <Input class="w-full pl-8 bg-background" type="text" placeholder="Search..." />
    </form>
    <div class="flex justify-center items-center gap-1">
      <Button @click="toggleDarkMode" class="w-8 h-8">
        <Transition name="scale" mode="out-in">
          <iconify-icon :icon="isDark? 'lucide:sun' : 'lucide:moon'" />
        </Transition>
      </Button>
      <div class="w-8"></div>
    </div>
  </nav>
</template>
