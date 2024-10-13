<script setup lang="ts">
import type { Input } from "@nordhealth/components";

const email = ref<string>('');
const password = ref<string>('');
const emailInputRef = ref<Input>();
const optionalAgreement = ref<boolean>(false);
const passwordInputRef = ref<Input>();
const isValidationEnabled = ref<boolean>(false);
const isPasswordVisible = ref<boolean>(false);
const passwordIconName = computed(() => isPasswordVisible.value ? 'interface-edit-off' : 'interface-edit-on');

const isFormValid = (): boolean => {
  isValidationEnabled.value = true;
  if (!email.value) {
    emailInputRef.value?.focus();
    return false;
  }
  if (!password.value) {
    passwordInputRef.value?.focus();
    return false;
  }
  return true;
}
const onSubmit = () => {
  if (isFormValid()) {
    navigateTo({ name: 'success' });
  }
}

onMounted(() => {
  nextTick(() => {
    emailInputRef.value?.focus();
  })
})
</script>

<template>
  <nord-card padding="l" class="centered-box">
    <h1 slot="header">Sign up</h1>
    <form @submit.prevent="onSubmit">
      <nord-stack>
        <nord-input
          ref="emailInputRef"
          v-model="email"
          label="Email"
          expand
          type="email"
          placeholder="user@example.com"
          :error="isValidationEnabled && !email ? 'Email is required' : undefined"
        />
        <nord-input
          ref="passwordInputRef"
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
        <nord-checkbox
          v-model="optionalAgreement"
          type="checkbox"
          label="I want to receive occasional product updates and announcements"
        />
        <nord-button type="submit" expand variant="primary">
          Sign up
        </nord-button>
      </nord-stack>
    </form>
  </nord-card>
</template>
