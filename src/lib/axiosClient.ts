import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_URL,
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
  },
})
