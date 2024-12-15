import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  await authStore.getSession()

  const unAuthenticatedPages = ['/'].includes(to.path)
  if (!authStore.user && unAuthenticatedPages) {
    return true
  }

  const isAuthPage = ['/login', '/register'].includes(to.path)

  if (authStore.user && isAuthPage) {
    return {
      name: '/login'
    }
  }
  if (!authStore.user && !isAuthPage) {
    return {
      name: '/login'
    }
  }
})

export default router
