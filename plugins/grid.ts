import { defineNuxtPlugin } from '#app'
// @ts-ignore
import VueGridLayout from 'vue3-drr-grid-layout'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGridLayout)
})
