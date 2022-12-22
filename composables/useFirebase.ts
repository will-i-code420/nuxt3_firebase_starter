import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth"

export const useFirebase = () => {
  return ref()
}

export const createUser = async (email, password) => {
  try {
    const auth = getAuth()
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    const user = credentials.user
    return ref(user)
  } catch (e) {
    const errCode = e.code
    const errMsg = e.message
    return ref({ errCode, errMsg })
  }
}

export const loginUser = async (email, password) => {
  try {
    const auth = getAuth()
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    const user = credentials.user
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
