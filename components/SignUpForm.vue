<script setup lang="ts">
const email = ref<string>('');
const password = ref<string>('');
const isValidationEnabled = ref<boolean>(false);

const onSubmit = () => {
  isValidationEnabled.value = true;
}
</script>

<template>
  <nord-card padding="l" class="centered-box">
    <h1 slot="header">Sign up</h1>
    <form @submit.prevent="onSubmit">
      <nord-stack>
        <nord-input
          v-model="email"
          label="Email"
          expand
          type="email"
          name="email"
          placeholder="user@example.com"
          :error="isValidationEnabled && !email ? 'Email is required' : undefined"
        />

        <nord-input
          v-model="password"
          label="Password"
          expand
          type="password"
          name="password"
          placeholder="••••••••••"
          :error="isValidationEnabled && !password ? 'Password is required' : undefined"
        />

        <nord-button type="submit" expand variant="primary">
          Sign up
        </nord-button>
      </nord-stack>
    </form>
  </nord-card>
</template>

<style scoped>
.centered-box {
  max-width: 400px;
  margin: 0 auto;
}
</style>
