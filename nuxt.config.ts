import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
    css: ['vuetify/styles'],
    runtimeConfig: {
      public: {
        firebaseApiKey: process.env.NUXT_FIREBASE_API_KEY,
        firebaseAuthDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
        firebaseProjectId: process.env.NUXT_FIREBASE_PROJECT_ID,
        firebaseStorageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
        firebaseMsgSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
        firebaseAppId: process.env.NUXT_FIREBASE_APP_ID,
        firebaseMeasurementId: process.env.NUXT_FIREBASE_MEASUREMENT_ID
      }
    },
    vite: {
        ssr: {
            noExternal: ['vuetify'],
        },
    },
    modules: [
      '@pinia/nuxt',
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config: any) => config.plugins.push(
                vuetify()
            ))
        }
    ]
})
