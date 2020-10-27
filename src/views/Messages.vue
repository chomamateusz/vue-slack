<template>
  <div class="messages" ref="root">
    <div v-for="message in messages" :key="message.key">
      <BaseMessage :message="message"/>
    </div>
  </div>
</template>

<style scoped>
.messages{
  height: 100%;
  padding: 12px;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>

<script lang="ts">
import Vue from 'vue'

import BaseMessage from '../components/BaseMessage.vue'

import { subscribe as subscribeToChannelMessages, Message } from '../api/messages'

interface ComponentData {
  messages: Message[],
  isMessagesLoading: boolean,
  hasMessagesError: boolean,
  unsubscribeFromChannelMessages: null | (() => void),
}

export default Vue.extend({
  name: 'Messages',

  components: {
    BaseMessage,
  },

  props: {
    channelKey: String,
    containerRef: Object,
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
        this.scrollBottom()
      },
      () => { this.hasMessagesError = true }
    )
  },

  mounted () {
    this.scrollBottom()
  },

  beforeDestroy () {
    this.unsubscribeFromChannelMessages && this.unsubscribeFromChannelMessages()
  },

  methods: {

    scrollBottom () {
      queueMicrotask(() => {
        const list = this.$refs.root as Element
        list.scrollTo(0, list.scrollHeight)
      })
    },

  },
})
</script>
