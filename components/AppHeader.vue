<template>
  <provet-header>
    <NuxtLink class="logo-link n-stack-horizontal n-gap-s n-typescale-l" to="/">
      <provet-avatar name="Laura Williams" size="m" variant="square">S</provet-avatar>
      Sample project
    </NuxtLink>
  </provet-header>
</template>

<style scoped>
.logo-link {
  text-decoration: none;
  color: var(--n-color-text-weak);

  &:hover,
  &:focus {
    color: var(--n-color-text);
  }
}
</style>
