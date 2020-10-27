<template>
  <div class="home">
    <HelloWorld
      header="Welcome to Vue-Slack"
      message="Choose or add a channel from the menu on the left and start chatting!"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
})
</script>
