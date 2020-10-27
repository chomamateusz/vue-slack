<template>
  <VApp class="app">

    <VNavigationDrawer app>
      <Channels />
    </VNavigationDrawer>

    <VMain  class="app__main">

      <VContainer
        class="app__container"
        fluid
      >

        <RouterView></RouterView>

      </VContainer>

    </VMain>

  </VApp>
</template>

<style>
body, html {
  overflow: hidden;
}
</style>

<style scoped>
.app__main{
  max-height: 100vh;
  overflow: hidden;
}
.app__container{
  padding: 0;
  height: 100%;
}
</style>

<script lang="ts">
import Vue from 'vue'
import Channels from './views/Channels.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Channels,
  },

  data: () => ({
    //
  }),
})
</script>
