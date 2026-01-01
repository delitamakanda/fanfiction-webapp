import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  await authStore.getSession()

  const isNotAuthPage = ['/login', '/register', '/forgot-password',].includes(to.path)

  if (!isNotAuthPage && !authStore.user) {
    return { name: 'login' }
  }
  return true
})

export default router
