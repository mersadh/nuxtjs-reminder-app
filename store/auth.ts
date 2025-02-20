// store/auth.ts
import { defineStore } from 'pinia'

interface LoginResponse {
  access_token: string;
  // Add other properties your API returns
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as object | null,
  }),
  getters: {
    isLoggedIn(): boolean {
      return !!this.token
    }
  },
  actions: {
    async login(email: string, password: string) {
      const config = useRuntimeConfig()

      try {
        const { data, error } = await useFetch<LoginResponse>('/api/v1/auth/login', {
          baseURL: config.public.apiBase,
          method: 'POST',
          body: { email, password },
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        })

        if (error.value) throw new Error(error.value.message || 'Login failed')

        if (data.value && data.value.access_token) {
          this.token = data.value.access_token
          // You might want to fetch user data here if it's not included in the login response
          // this.user = ...
          const cookie = useCookie('token')
          cookie.value = data.value.access_token // Set cookie          
          const router = useRouter()
          router.push('home/index') // or wherever you want to redirect after login
  
        } else {
          throw new Error('Login failed: No access token received')
        }
      } catch (err) {
        console.error('Login error:', err)
        throw err
      }
    },
    // ... other actions
    logout() {
        this.token = null
        this.user = null
        const cookie = useCookie('token')
        cookie.value = null // Remove cookie
        navigateTo('/login')
      },
      init() {
        const cookie = useCookie('token')
        if (cookie.value) {
          this.token = cookie.value
          // Optionally fetch user data here
        }
      },
  },
  // ... getters
})