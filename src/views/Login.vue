<template>
  <div class="login">
    <BaseFullScreenLoadingIndicator v-if="!isAuthVerified" />
    <slot v-else-if="isUserLoggedIn"/>
    <LoginDialog
      v-else
      @loginByGoogle="loginByGoogle"
    />
  </div>
</template>

<style scoped>
.login{
  height: 100%;
}
</style>

<script lang="ts">
import Vue from 'vue'

import LoginDialog from '../components/LoginDialog.vue'
import BaseFullScreenLoadingIndicator from '../components/BaseFullScreenLoadingIndicator.vue'

export default Vue.extend({
  name: 'Login',

  components: {
    LoginDialog,
    BaseFullScreenLoadingIndicator,
  },

  computed: {

    isAuthVerified () {
      return this.$store.state.auth.isVerified
    },
    isUserLoggedIn () {
      return this.$store.state?.auth?.loggedIn
    },

  },

  methods: {
    loginByGoogle () {
      this.$store.dispatch('loginByGoogle')
    },
  },
})
</script>
