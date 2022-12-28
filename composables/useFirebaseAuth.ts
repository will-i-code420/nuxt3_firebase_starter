import {
  onAuthStateChanged
} from "firebase/auth"

export const useFirebaseAuth = async (action, email, password) => {
  try {
    const { $firebaseAuth } = useNuxtApp()
    let credentials
    switch (action) {
      case 'login':
        credentials = await $firebaseAuth.signInWithEmailAndPassword($firebaseAuth.auth, email, password)
        break;
      case 'register':
        credentials = await $firebaseAuth.createUserWithEmailAndPassword($firebaseAuth.auth, email, password)
        break;
      case 'logout':
        credentials = await $firebaseAuth.auth.signOut()
        break;
      default:
      return
        break;
    }
    if (action === 'logout') {
      return ref(credentials)
    }
    const user = credentials.user
    return ref({ user })
  } catch (e) {
    const errCode = e.code
    const errMsg = e.message
    return ref({ errCode, errMsg })
  }
}

export const initUser = async () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user)
    } else {
      console.log('user signed out')
    }
  })
}
