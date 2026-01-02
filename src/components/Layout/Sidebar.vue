<script setup lang="ts">
import { menuKey } from '@/utils/injectionKeys'
import type { MenuInjectionOptions } from '@/utils/injectionKeys'
import { useWindowSize } from '@vueuse/core'
const { user } = storeToRefs(useAuthStore())

const links = [
  {
    title: 'Homepage',
    to: '/',
    icon: 'lucide:home',
  },
  {
    title: 'Dashboard',
    to: '/dashboard',
    icon: 'lucide:chart-bar',
  },
  {
    title: 'All Fanfictions',
    to: '/fanfics',
    icon: 'lucide:book-open',
  },
  {
    title: 'Posts',
    to: '/posts',
    icon: 'lucide:message-square',
  },
]

const accountLinks = computed(() => {
  return [
    {
      title: 'Profile',
      to: `/users/${user?.value?.username}`,
      icon: 'lucide:users',
    },
    {
      title: 'Settings',
      to: '/settings',
      icon: 'lucide:settings',
    },
    {
      title: 'About',
      to: '/about',
      icon: 'lucide:info',
    },
    {
      title: 'Help center',
      to: '/help',
      icon: 'lucide:circle-help',
    },
    {
      title: 'Forum',
      to: '/forum',
      icon: 'lucide:message-circle',
    },
    {
      title: 'Sign Out',
      icon: 'lucide:log-out',
    },
  ]
})

const router = useRouter()

const executeAction = async (linkTitle: string) => {
  if (linkTitle === 'Sign Out') {
    const { logout } = await import('@/utils/apiAuth')
    const { isLoggedOut } = await logout()
    if (isLoggedOut) {
      const { user } = storeToRefs(useAuthStore())
      user.value = null
      router.push('/login')
    }
  }
}

defineEmits(['taskClicked'])

const { menuOpen, toggleMenu } = inject(menuKey) as MenuInjectionOptions
const windowWidth = useWindowSize().width

watchEffect(() => {
  menuOpen.value = windowWidth.value > 1024
})
</script>

<template>
  <aside
    class="flex flex-col h-screen gap-2 border-r fixed bg-muted/40 transition-[width]"
    :class="{ 'w-52': menuOpen, 'w-24': !menuOpen }"
  >
    <div class="flex h-16 items-center border-b px-2 lg:px-4 shrink-0 gap-1 justify-between">
      <Button @click="toggleMenu" variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:menu"></iconify-icon>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" size="icon" class="w-8 h-8">
            <iconify-icon icon="lucide:plus"></iconify-icon>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem @click="$emit('taskClicked')">
            <RouterLink to="/fanfics/create">Create a new fanfic</RouterLink>
          </DropdownMenuItem>
          <DropdownMenuItem @click="$emit('taskClicked')">
            <RouterLink to="/fanfics/manage">Manage my fanfics</RouterLink>
          </DropdownMenuItem>
          <DropdownMenuItem @click="$emit('taskClicked')">
            <RouterLink :to="`/accounts/${user?.username}`">Manage my profile</RouterLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <nav class="flex flex-col gap-2 justify-between h-full relative">
      <div>
        <SidebarLinks :links="links" />
      </div>

      <div class="border-y text-center bg-background py-3">
        <SidebarLinks :links="accountLinks" @actionClicked="executeAction" />
      </div>
    </nav>
  </aside>
</template>
