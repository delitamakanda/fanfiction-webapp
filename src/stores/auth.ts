import type { User } from '@/types/user'
import { axiosClient } from '@/lib/axiosClient.ts'
export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<null | User>(null)
  const isTrackingAuthChanges = ref(false)

  const setAuth = async (userSession: null | User) => {
    if (!userSession) {
      user.value = null
      return
    }
    user.value = userSession
  }

  const getSession = async () => {
    if (window.localStorage.getItem('access_token') && window.localStorage.getItem('refresh_token')) {
      if (!user.value || !user.value.id) {
        const { data } = await axiosClient.get<User>('/v1/accounts/user/')
        if (data) {
          await setAuth(<User>data)
        }
      }
    } else {
      await setAuth(null)
    }

  }

  const trackAuthChanges = async () => {
    if (!isTrackingAuthChanges.value) {
      return
    }
    isTrackingAuthChanges.value = true
  }

  return {
    user,
    isTrackingAuthChanges,
    setAuth,
    getSession,
    trackAuthChanges,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
