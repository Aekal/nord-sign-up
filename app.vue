<script setup>
const i18nHead = useLocaleHead()
useHead({
  title: 'Nord Sign Up',
  description: 'Sign up for Nord',
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang
  },
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
