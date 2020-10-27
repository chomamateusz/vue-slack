<template>
  <VContainer
    class="loading-inficator"
    fluid
  >
    <VRow
      class="login__row login__row"
      align-content="center"
      justify="center"
    >
      <BaseLoadingIndicator />
    </VRow>
  </VContainer>
</template>

<style scoped>
.loading-inficator{
  height: 100vh;
  width: 100vw;
}
.login__row{
  height: 100%;
}
.login__card{
  width: 320px;
  padding: 2rem;
}
</style>

<script lang="ts">
import Vue from 'vue'

import BaseLoadingIndicator from './BaseLoadingIndicator.vue'

export default Vue.extend({
  name: 'BaseFullScreenLoadingIndicator',

  components: {
    BaseLoadingIndicator,
  },

})
</script>
