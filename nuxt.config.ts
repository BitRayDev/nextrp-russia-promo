import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  components: false,
  app: {
    baseURL: "/russia/",
    head: {
      title: "Игра про россию",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "./favicon.ico"
        }
      ]
    }
  },
})
