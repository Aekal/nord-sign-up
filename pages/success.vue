<script setup>
definePageMeta({
  middleware: ['form-submitted'],
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
