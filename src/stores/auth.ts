import type { User, Profile } from '@/types/user'
import { axiosClient } from '@/lib/axiosClient.ts'
export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<null | User>(null)
  const profile = ref<null|Profile>(null)
  const isTrackingAuthChanges = ref(false)

  const setProfile = async () => {
    if (!user.value) {
      profile.value = null
    }

    if (!profile.value || profile.value.id !== user.value?.id) {
      const { data } = await axiosClient.get<Profile>(`/profiles/${user.value?.id}/`)

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
    //const { data } = await axiosClient.get<User>('/user/')
    //if (data) {
      // await setAuth(<User>({  id: 1, username: 'test', email: 'test@test.com', first_name: 'Test', last_name: 'User', date_joined: '2022-01-01' }))
    //}
  }

  const trackAuthChanges = async () => {
    if (!isTrackingAuthChanges.value) {
      return
    }
    isTrackingAuthChanges.value = true
    // todo setup auth changes tracking
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
