<template>
  <VApp class="app">

    <Login>

      <MainLayout>

        <template v-slot:side-bar>
          <Channels />
        </template>

        <template v-slot:content>
          <RouterView></RouterView>
        </template>

      </MainLayout>

    </Login>

  </VApp>

</template>

<style>
body, html {
  overflow: hidden;
}
</style>

<script lang="ts">
import Vue from 'vue'

import MainLayout from './templates/MainLayout.vue'

import Channels from './views/Channels.vue'
import Login from './views/Login.vue'

export default Vue.extend({
  name: 'App',

  components: {
    MainLayout,
    Channels,
    Login,
  },

  data: () => ({}),
})
</script>
