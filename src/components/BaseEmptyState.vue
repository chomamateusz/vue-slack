<template>
  <VRow class="text-center">
    <VCol cols="12">
      <VImg
        :src="require('../assets/nothing-here.svg')"
        contain
        height="200"
      />
      <div class="text-subtitle-1">
        {{message}}
      </div>
    </VCol>
  </VRow>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    message: String,
  },
})
</script>
