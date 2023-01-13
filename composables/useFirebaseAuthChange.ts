import {
  getAuth,
  onAuthStateChanged
} from "firebase/auth"

import { useUserStore } from '../store/user.ts'

export const useFirebaseAuthChange = async () => {
  const auth = getAuth()
  const userStore = useUserStore()
  const userCookie = useCookie('userCookie')
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log('user', user)
    } else {
      // User is signed out
      console.log('user signed out')
    }
    userStore.updateUser(user)
    userCookie.value = user
  })
}
