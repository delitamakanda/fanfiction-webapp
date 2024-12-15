export const useErrorStore = defineStore('error-store', () => {
  const errors = ref<unknown>()

  const setError = (error: Error) => {
    errors.value.push(error)
  }

  return { errors, setError }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useErrorStore, import.meta.hot))
}
