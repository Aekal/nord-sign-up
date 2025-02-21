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
    <h1>Success</h1>
    <provet-banner variant="success">
      You've successfully signed up!
    </provet-banner>
  </provet-stack>
</template>
