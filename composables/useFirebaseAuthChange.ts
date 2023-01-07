import {
  getAuth,
  onAuthStateChanged
} from "firebase/auth"

export const useFirebaseAuthChange = async () => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('user', user)
    } else {
      // User is signed out
      console.log('user signed out')
    }
  })
}
