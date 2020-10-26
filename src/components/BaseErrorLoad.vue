<template>
  <VBanner
    single-line
    @click:icon="alert"
  >
    <VIcon
      slot="icon"
      color="red"
      size="28"
    >
      mdi-wifi-strength-alert-outline
    </VIcon>
    Unable to load!
  </VBanner>
</template>
