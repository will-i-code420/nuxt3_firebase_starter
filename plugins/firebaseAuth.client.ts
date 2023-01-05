import { initializeApp } from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMsgSenderId,
    appId: config.public.firebaseAppId,
    measurementId: config.public.firebaseMeasurementId
  }
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  nuxtApp.vueApp.provide('firebaseAuth', {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  })
  nuxtApp.provide('firebaseAuth', {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  })
})
