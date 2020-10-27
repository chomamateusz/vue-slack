<template>
  <div class="base-add-input-buton">
    <VForm
      v-if="isInputVisible && !isLoading"
      @submit.prevent="onSubmit"
    >
      <VTextField
        class="base-add-input-buton__input"
        append-icon="mdi-close"
        append-outer-icon="mdi-check-circle"
        dense
        outlined
        :value="value"
        :disabled="isLoading"
        @click:append="toggleInput"
        @click:append-outer="onSubmit"
        @input="onInput($event)"
      />
    </VForm>
    <VBtn
      v-else
      text
      block
      :loading="isLoading"
      @click="toggleInput"
    >
      <VIcon middle>mdi-plus</VIcon>
    </VBtn>
  </div>
</template>

<style scoped>
.base-add-input-buton__input{
  padding: 0
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  props: {
    isLoading: Boolean,
    isInputVisible: Boolean,
    value: String,
  },

  data () {
    return {}
  },

  methods: {

    toggleInput () {
      this.$emit('requestClose')
    },

    onInput (newValue: string) {
      this.$emit('input', newValue)
    },

    onSubmit () {
      this.$emit('submit')
    },

  },

})
</script>
