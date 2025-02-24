<script setup>
const i18nHead = useLocaleHead()
useHead({
  title: 'Nord Sign Up',
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
