<script lang="ts" setup>
import type { DropdownItem } from "@provetcloud/web-components";
type DropdownItemWithMethods = DropdownItem & {
  hide: (moveFocusToButton?: boolean) => Promise<TransitionEvent>
};

const { locale, locales, setLocale } = useI18n()
const dropdownRef = ref<DropdownItemWithMethods | null>(null);
const availableLocales = computed(() => locales.value.filter(i => i.code !== locale.value))
const currentLocale = computed(() =>
  locales.value.find((i) => i.code === locale.value),
)

const onDropdownItemClick = (langCode: 'en' | 'es' | 'fr') => {
  setLocale(langCode)
  dropdownRef.value?.hide()
};
</script>

<template>
  <provet-dropdown ref="dropdownRef">
    <provet-button slot="toggle">{{ currentLocale?.name }}</provet-button>
    <provet-dropdown-item
      v-for="availableLocale in availableLocales"
      :key="availableLocale.code"
      @click="onDropdownItemClick(availableLocale.code)"
    >
      {{ availableLocale.name }}
    </provet-dropdown-item>
  </provet-dropdown>
</template>
