import { useUserStore } from '../store/user.ts'

export const useFirebaseAuthState = async () => {
  const userStore = useUserStore()
  const { $firebaseAuth } = useNuxtApp()
  onAuthStateChanged($firebaseAuth.auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log('user:', user)
    } else {
      console.log('user signed out')
    }
    userStore.updateUser(user)
  })
}
