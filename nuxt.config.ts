import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
    css: ['vuetify/styles'],
    vite: {
        ssr: {
            noExternal: ['vuetify'],
        },
    },
    modules: [
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config: any) => config.plugins.push(
                vuetify()
            ))
        }
    ]
})
