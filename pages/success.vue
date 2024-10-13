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
  <nord-stack class="centered-box">
    <h1>Success</h1>
    <nord-banner variant="success">
      You've successfully signed up!
    </nord-banner>
  </nord-stack>
</template>
