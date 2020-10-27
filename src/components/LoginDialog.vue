<template>
  <VContainer
    class="login-dialog__container"
    fluid
  >
    <VRow
      class="login-dialog__row login-dialog__row--outer"
      align-content="center"
      justify="center"
    >
      <VCard
        class="login-dialog__card"
      >
        <VRow
          class="login-dialog__row login-dialog__row--inner"
          align-content="center"
          justify="center"
        >
          <HelloWorld
            header="Welcome to Vue-Slack"
            message="Please log in!"
          />
          <VBtn
            class="white--text"
            color="#de5246"
            @click="loginByGoogle"
          >
            <VIcon left>mdi-google</VIcon>
            Join with Google!
          </VBtn>
        </VRow>
      </VCard>
    </VRow>
  </VContainer>
</template>

<style scoped>
.login-dialog__container{
  height: 100%;
}
.login-dialog__row{
  height: 100%;
}
.login-dialog__card{
  width: 320px;
  padding: 2rem;
}
</style>

<script lang="ts">
import Vue from 'vue'

import HelloWorld from './HelloWorld.vue'

export default Vue.extend({
  name: 'LoginDialog',

  components: {
    HelloWorld,
  },

  methods: {

    loginByGoogle () {
      this.$emit('loginByGoogle')
    },

  },
})
</script>
