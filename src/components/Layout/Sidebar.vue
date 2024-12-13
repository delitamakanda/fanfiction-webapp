<script setup lang="ts">
import { menuKey } from '@/utils/injectionKeys'
import type { MenuInjectionOptions} from '@/utils/injectionKeys'
import { useWindowSize } from '@vueuse/core'
const profile = ref(null)

const links = [
  {
    title: 'Dashboard',
    to: '/dashboard',
    icon: 'lucide:house'
  },
  {
    title: 'Fanfics',
    to: '/fanfics',
    icon: 'lucide:book-open'
  },
  {
    title: 'Posts',
    to: '/posts',
    icon: 'lucide:message-square'
  }
]
const accountLinks = computed(() => {
  return [
    {
      title: 'Profile',
      to: `/user/${profile.value?.username}`,
      icon: 'lucide:user'
    },
    {
      title: 'Logout',
      icon: 'lucide:logout'
    }
  ]
})
const router = useRouter()

const executeAction = async (linkTitle: string) => {
  if (linkTitle === 'Logout') {
    // todo implement logout logic
  }
}

defineEmits([''])

const { menuOpen, toggleMenu} = inject(menuKey) as MenuInjectionOptions
const windowSize = useWindowSize().width

watchEffect(() => {
  menuOpen.value = windowSize.value > 1024;
})

</script>

<template>
  <aside class="flex flex-col h-screen gap-2 border-r fixed bg-muted/40 transition-[width]" :class="{ 'w-52': menuOpen, 'w-24': !menuOpen }">
    <div class="flex h-16 items-center border-b px-2 lg:px-4 shrink-0 gap-1 justify-between">
      <Button @click="toggleMenu" variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:menu"></iconify-icon>
      </Button>

    </div>
  </aside>
</template>
