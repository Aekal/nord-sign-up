<script setup lang="ts">
const email = ref<string>('');
const password = ref<string>('');
const isValidationEnabled = ref<boolean>(false);
const isPasswordVisible = ref<boolean>(false);
const passwordIconName = computed(() => isPasswordVisible.value ? 'interface-edit-off' : 'interface-edit-on');

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
          placeholder="user@example.com"
          :error="isValidationEnabled && !email ? 'Email is required' : undefined"
        />

        <nord-input
          v-model="password"
          label="Password"
          expand
          :type="isPasswordVisible ? 'text' : 'password'"
          placeholder="••••••••••"
          :error="isValidationEnabled && !password ? 'Password is required' : undefined"
        >
          <nord-button
            slot="end"
            type="button"
            square
            @click="isPasswordVisible = !isPasswordVisible"
          >
            <nord-icon size="l" :name="passwordIconName" />
          </nord-button>
        </nord-input>

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
