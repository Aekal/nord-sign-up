<script setup lang="ts">
import type { Input } from "@provetcloud/web-components";
import { object, string } from 'yup'

const emailInputRef = ref<Input>();
const optionalAgreement = ref<boolean>(false);
const isPasswordVisible = ref<boolean>(false);
const passwordIconName = computed(() => isPasswordVisible.value ? 'interface-edit-off' : 'interface-edit-on');

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: object({
    email: string().email('validation.email').required('validation.required.email'),
    password: string().min(8, 'validation.password').required('validation.required.password')
  }),
});
const [email] = defineField('email');
const [password] = defineField('password');

const onSubmit = handleSubmit(() => {
  localStorage.setItem('formSubmitted', 'true')
  navigateTo({ name: 'success' });
});

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
          :error="errors.email ? $t(errors.email) : undefined"
        />
        <provet-input
          ref="passwordInputRef"
          v-model="password"
          :label="$t('signUp.password')"
          expand
          :type="isPasswordVisible ? 'text' : 'password'"
          placeholder="••••••••••"
          :error="errors.password ? $t(errors.password) : undefined"
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
