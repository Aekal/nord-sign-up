import locales from './i18n/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@vee-validate/nuxt'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes("-"),
    },
  },
  css: ['@provetcloud/css', '@/assets/css/global.css'],
  i18n: {
    locales,
    strategy: 'no_prefix',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    lazy: true,
  },
})
