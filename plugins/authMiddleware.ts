import { useUserStore } from '../store/user.ts'

export default defineNuxtPlugin((nuxtApp) => {
  const userStore = useUserStore()
  addRouteMiddleware('auth', () => {
    console.log('auth middleware')
    if (!userStore.isAuth) {
      return navigateTo('/admin/login')
    }
  })
})
