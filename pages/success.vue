<script setup>
definePageMeta({
  middleware: defineNuxtRouteMiddleware((_to, from) => {
    if (from.name !== 'index') {
      return navigateTo({ name: 'index' });
    }
  }),
})
</script>

<template>
  <provet-stack class="centered-box">
    <h1>{{ $t('signUpSuccess.title') }}</h1>
    <provet-banner variant="success">
      {{ $t('signUpSuccess.message') }}
    </provet-banner>
  </provet-stack>
</template>
