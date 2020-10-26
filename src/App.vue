<template>
<VApp>

  <VNavigationDrawer app>
    <Channels />
  </VNavigationDrawer>

  <VMain>

    <VContainer fluid>

      <RouterView></RouterView>

    </VContainer>

  </VMain>

</VApp>
</template>

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
