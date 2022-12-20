import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(createVuetify({
    icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purpose
    }
  }))
})
