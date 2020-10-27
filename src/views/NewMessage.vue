<template>
  <div class="new-message">
    <VForm
      class="new-message__form"
      ref="form"
      lazy-validation
      v-model="valid"
      @submit.prevent="sendMessage"
    >
      <VTextField
        class="new-message__input"
        ref="input"
        v-model="newMessageText"
        :rules="messageRules"
        :disabled="isDisabled"
        :error="hasMessageError"
        :error-message="errorMessage"
        @blur="resetValidation"
        label="Type message here"
      ></VTextField>
      <VBtn
        type="submit"
        class="new-message__btn"
        color="primary"
        :loading="isMessageSending"
        :disabled="isDisabled"
      >
        <VIcon
          left
        >
          mdi-send
        </VIcon>
        SEND
      </VBtn>
    </VForm>
  </div>
</template>

<style scoped>
.new-message__form{
  display: flex;
  align-items: center;
}
.new-message__btn{
  margin-left: 1rem;
}
</style>

<script>
import Vue from 'vue'

import { add as addMessage } from '../api/messages'

export default Vue.extend({
  name: 'NewMessage',

  props: {
    channelKey: String,
    disabled: Boolean,
  },

  data () {
    return {
      valid: false,
      messageRules: [
        v => !!v || 'Type something!',
      ],
      isMessageSending: false,
      hasMessageError: false,
      errorMessage: '',
      newMessageText: '',
    }
  },

  computed: {

    isDisabled () {
      return this.disabled || this.isMessageSending
    },

  },

  methods: {

    async sendMessage () {
      const valid = this.$refs.form.validate()
      if (!valid) return

      this.isMessageSending = true
      try {
        await addMessage(this.channelKey)(this.newMessageText)
        this.resetError()
        this.resetNewMessage()
        this.focusInput()
      } catch (error) {
        this.makeMessageError(error.message)
      }
      this.isMessageSending = false
    },

    focusInput () {
      queueMicrotask(
        () => this.$refs.input.focus()
      )
    },

    resetError () {
      this.hasMessageError = false
    },

    resetNewMessage () {
      this.newMessageText = ''
      this.resetValidation()
    },

    resetValidation () {
      this.$refs.form.resetValidation()
    },

    makeMessageError (errorMessage) {
      this.hasMessageError = true
      this.makeMessageError = errorMessage
    },

  },

})
</script>
