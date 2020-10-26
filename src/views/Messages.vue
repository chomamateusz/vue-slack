<template>
<div>
  <div v-for="message in messages" :key="message.key">

        <VListItem>
          <VListItemAvatar>
            <VAvatar :src="message.avatar"></VAvatar>
          </VListItemAvatar>

          <VListItemContent>
            <VListItemTitle>{{ message.text }}</VListItemTitle>
            <VListItemSubtitle>{{ message.date | moment('from', 'now') }}</VListItemSubtitle>
          </VListItemContent>
        </VListItem>

  </div>
</div>
</template>

<style scoped>
</style>

<script lang="ts">
import Vue from 'vue'

import { subscribe as subscribeToChannelMessages, Message } from '../api/messages'

interface ComponentData {
  messages: Message[],
  isMessagesLoading: boolean,
  hasMessagesError: boolean,
  unsubscribeFromChannelMessages: null | (() => void),
}

export default Vue.extend({
  name: 'Messages',

  props: {
    channelKey: String,
  },

  data (): ComponentData {
    return {
      messages: [],
      isMessagesLoading: true,
      hasMessagesError: false,
      unsubscribeFromChannelMessages: null,
    }
  },

  created () {
    this.unsubscribeFromChannelMessages = subscribeToChannelMessages(this.channelKey)(
      (data) => {
        this.isMessagesLoading = false
        this.hasMessagesError = false
        this.messages = data
      },
      () => { this.hasMessagesError = true }
    )
  },

  beforeDestroy () {
    this.unsubscribeFromChannelMessages && this.unsubscribeFromChannelMessages()
  },
})
</script>
