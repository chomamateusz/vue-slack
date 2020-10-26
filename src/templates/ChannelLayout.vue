<template>
<div class="channels-view">
  <div class="channels-view__list">
    <slot name="messages"/>
  </div>
  <VCard class="channels-view__bar">
    <slot name="bar" />
  </VCard>
</div>
</template>

<style scoped>
.channels-view{}
.channels-view__list{}
.channels-view__bar{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
}
</style>
