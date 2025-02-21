<script setup lang="ts">
import type { Input } from "@provetcloud/web-components";

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
  <provet-card padding="l" class="centered-box">
    <h1 slot="header">{{ $t('signUp.title') }}</h1>
    <form @submit.prevent="onSubmit">
      <provet-stack>
        <provet-input
          ref="emailInputRef"
          v-model="email"
          :label="$t('signUp.email')"
          expand
          type="email"
          placeholder="user@example.com"
          :error="isValidationEnabled && !email ? $t('signUp.emailRequired') : undefined"
        />
        <provet-input
          ref="passwordInputRef"
          v-model="password"
          :label="$t('signUp.password')"
          expand
          :type="isPasswordVisible ? 'text' : 'password'"
          placeholder="••••••••••"
          :error="isValidationEnabled && !password ? $t('signUp.passwordRequired') : undefined"
        >
          <provet-button
            slot="end"
            type="button"
            square
            @click="isPasswordVisible = !isPasswordVisible"
          >
            <provet-icon size="l" :name="passwordIconName" />
          </provet-button>
        </provet-input>
        <provet-checkbox
          v-model="optionalAgreement"
          type="checkbox"
          :label="$t('signUp.optionalAgreement')"
        />
        <provet-button type="submit" expand variant="primary">
          {{ $t('signUp.submit') }}
        </provet-button>
      </provet-stack>
    </form>
  </provet-card>
</template>
