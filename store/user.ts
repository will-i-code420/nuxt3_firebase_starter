import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const user = ref(null)
  const isAuth = computed(() => user.value ? true : false)
  return { user, isAuth }
})
