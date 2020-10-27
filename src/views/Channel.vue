<template>
  <ChannelLayout>
    <template v-slot:messages>
      <Messages
        :channelKey="$route.params.channelKey"
        @ready="toggleChannelReady($event)"
      />
    </template>
    <template v-slot:bar>
      <NewMessage
        :disabled="!isChannelReady"
        :channelKey="$route.params.channelKey"
      />
    </template>
  </ChannelLayout>
</template>

<style scoped>
</style>

<script lang="ts">
import Vue from 'vue'

import ChannelLayout from '../templates/ChannelLayout.vue'
import Messages from './Messages.vue'
import NewMessage from './NewMessage.vue'

interface ChannelData {
  isChannelReady: boolean,
}

export default Vue.extend({
  name: 'Channel',

  components: {
    ChannelLayout,
    Messages,
    NewMessage,
  },

  data (): ChannelData {
    return {
      isChannelReady: false,
    }
  },

  methods: {
    toggleChannelReady (data: boolean) {
      this.isChannelReady = data
    },
  },

})
</script>
