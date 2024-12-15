import type { User, Profile } from '@/types/user'
export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<null | User>(null)
  const profile = ref<null|Profile>(null)
  const isTrackingAuthChanges = ref(false)

  const setProfile = async () => {
    if (!user.value) {
      profile.value = null
    }
  }
  if (!profile.value || profile.value.id !== user.value.id) {
    // todo fetch and update profile

    profile.value = null
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
    // todo fetch and return user session
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
