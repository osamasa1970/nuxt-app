// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass"
],
build: {
    transpile: ["vuetify"]
},
vite: {
    define: {
        "process.env.DEBUG": false
    },
    // for HMR
    server: {
        watch: {
            usePolling: true
        }
    },
},
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
