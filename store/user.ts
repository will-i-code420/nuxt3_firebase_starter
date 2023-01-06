import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const user = ref(null)
  const isAuth = computed(() => user.value ? true : false)
  async function handleAuthForm(userData) {
    try {
      const { formType, email, password } = userData
      const credentials = await useFirebaseAuth(formType, email, password)
      user.value = credentials
      const token = await useFirebaseAuth('token')
    } catch (e) {
      console.log(e)
    }
  }
  async function logoutUser() {
    user.value = await useFirebaseAuth('logout')
  }
  function updateUser(user) {
    user.value = user
  }
  return { user, isAuth, handleAuthForm, logoutUser }
})
