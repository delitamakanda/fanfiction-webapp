import { axiosClient } from '@/lib/axiosClient'
import type { LoginForm, RegistrationForm } from '@/types/AuthForm'

export const register = async (form: RegistrationForm) => {
  try {

    const { data } = await axiosClient.post<never>('/accounts/signup/', {
      email: form.email,
      password: form.password,
      username: form.username,
      password2: form.confirmPassword,
    })

    return data
  } catch (error) {
    throw error || 'An error occurred'
  }
}

export const login = async (form: LoginForm) => {
  try {
    const { data } = await axiosClient.post<never>('/token', {
      username: form.username,
      password: form.password,
    })
    return data
  } catch (error) {
    throw error || 'An error occurred'
  }
}
