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
      case 'token':
        const token = await $firebaseAuth.auth.currentUser.getIdToken()
        return token
        break;
      default:
      return
        break;
    }
    if (action === 'logout') {
      return credentials
    }
    const user = credentials.user
    return user
  } catch (e) {
    const errCode = e.code
    const errMsg = e.message
    return [ errCode, errMsg ]
  }
}
