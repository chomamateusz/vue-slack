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
.channels-view{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.channels-view__list{
  height: 100%;
  overflow: hidden;
}
.channels-view__bar{
  flex-grow: 1;
  width: 100%;
  padding: 1rem;
}
</style>
