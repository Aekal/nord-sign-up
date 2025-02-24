<script setup>
definePageMeta({
  middleware: ['form-submitted'],
})
useSeoMeta({
  title: 'Success | Nord Sign Up',
  description: 'You have successfully signed up for Nord',
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
