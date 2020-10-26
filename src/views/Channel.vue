<template>
<ChannelLayout>
  <template v-slot:messages>
    <Messages :channelKey="$route.params.channelKey" />
  </template>
  <template v-slot:bar>
    <NewMessage />
  </template>
</ChannelLayout>
</template>

<style scoped>
</style>

<script>
import Vue from 'vue'

import ChannelLayout from '../templates/ChannelLayout'
import Messages from './Messages'
import NewMessage from './NewMessage'

export default Vue.extend({
  name: 'Channel',

  components: {
    ChannelLayout,
    Messages,
    NewMessage,
  },

})
</script>
