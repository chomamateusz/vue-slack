<template>
  <VContainer>
    <VRow class="text-center">
      <VCol cols="12">
        <VImg
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </VCol>

      <VCol class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">
          {{header}}
        </h1>
        <p class="subheading font-weight-regular">
          {{ message}}
        </p>
      </VCol>

    </VRow>
  </VContainer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',

  props: {
    header: String,
    message: String,
  },
})
</script>
