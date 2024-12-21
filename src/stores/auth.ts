import type { User, Profile } from '@/types/user'
import { axiosClient } from '@/lib/axiosClient.ts'
export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<null | User>(null)
  const profile = ref<null|Profile>(null)
  const isTrackingAuthChanges = ref(false)

  const setProfile = async () => {
    if (!user.value) {
      profile.value = null
      return
    }

    if (!profile.value || profile.value.id !== user.value?.id) {
      const { data } = await axiosClient.get<Profile>(`accounts/users/${user.value?.username}/profile/`)

      profile.value = data || null
    }
  }

  const setAuth = async (userSession: null | User) => {
    if (!userSession) {
      user.value = null
      profile.value = null
      return
    }
    user.value = userSession
    await setProfile()
  }

  const getSession = async () => {
    if (!window.localStorage.getItem('access_token')) {
      return
    }
    const { data } = await axiosClient.get<User>('/accounts/user/')
    if (data) {
      await setAuth(<User>data)
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
    profile,
    isTrackingAuthChanges,
    setAuth,
    getSession,
    trackAuthChanges,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
