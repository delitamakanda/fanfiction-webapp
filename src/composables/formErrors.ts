import type { LoginForm } from '@/types/AuthForm'

type FormErrors<T> = {
  [K in keyof T]?: string[]
}

interface AuthError extends Error {
  status: number;
  message: string;
}

export const useFormErrors = () => {
  const serverError = ref('')
  const realtimeErrors = ref<FormErrors<LoginForm>>()

  const handleServerError = (error: AuthError) => {
    serverError.value = error.message === 'Network Error'? 'Network error occurred' : error.message
  }
  const handleLoginForm = async (form: LoginForm) => {
    realtimeErrors.value = {
      email: [],
      password: [],
    }
    const { validateEmail, validatePassword } = await import('@/utils/formValidations')

    const emailErrors = validateEmail(form.email)
    if (emailErrors.length) {
      realtimeErrors.value.email = emailErrors
    }

    const passwordErrors = validatePassword(form.password)
    if (passwordErrors.length) {
      realtimeErrors.value.password = passwordErrors
    }
  }

  return {
    serverError,
    handleServerError,
    realtimeErrors,
    handleLoginForm,
  }
}
