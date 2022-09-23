import { defineNuxtConfig } from 'nuxt/config'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  router: {
    base: '/crstnmac.github.io/',
  },
  // app
  app: {
    head: {
      title: 'Criston Mascarenhas',
      titleTemplate: '%s - Portfilio Website',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Portfolio Website',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // css
  css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],
  // plugins
  plugins: [
    '~/plugins/navbar.ts',
    {
      src: '~/plugins/grid.ts',
      mode: 'client',
    },
  ],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  modules: ['@unocss/nuxt'],

  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },

  // build modules
  buildModules: [
    '@nuxtjs/eslint-module',
    'unplugin-icons/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/svg',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
  ],

  // experimental features
  experimental: {
    reactivityTransform: true,
    payloadExtraction: false,
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      nodePolyfills(),
    ],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'id', 'ja'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
})
