<template>
  <div class="messages" ref="root">
    <BaseEmptyState
      v-if="hasMessagesError"
      message="Something go wrong with laoding data!"
    />
    <BaseEmptyState
      v-else-if="isChannelNotFound"
      message="This channel does not exist!"
    />
    <VSkeletonLoader
      v-else-if=" isChannelsLoading || isMessagesLoading"
      type="list-item-avatar@3"
    />
    <BaseEmptyState
      v-else-if="messages.length === 0"
      message="Nothing here! Try to add some messages!"
    />
    <div v-else v-for="message in messages" :key="message.key">
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
import BaseEmptyState from '../components/BaseEmptyState.vue'

import { subscribe as subscribeToChannelMessages, Message } from '../api/messages'
import { exist as checkChannel } from '../api/channels'

interface ComponentData {
  messages: Message[],
  isMessagesLoading: boolean,
  hasMessagesError: boolean,
  isChannelsLoading: boolean,
  isChannelNotFound: boolean,
  hasChannelError: boolean,
  unsubscribeFromChannelMessages: null | (() => void),
}

export default Vue.extend({
  name: 'Messages',

  components: {
    BaseMessage,
    BaseEmptyState,
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
      isChannelsLoading: false,
      isChannelNotFound: false,
      hasChannelError: false,
      unsubscribeFromChannelMessages: null,
    }
  },

  watch: {
    channelKey (newVal, oldVal) {
      // @QUESTION do we ned it here?
      if (oldVal === newVal) return
      this._reSubscribeIfChannelExists()
    },
    isMessagesLoading () { this._emitChannelRediness() },
    hasMessagesError () { this._emitChannelRediness() },
    isChannelsLoading () { this._emitChannelRediness() },
    isChannelNotFound () { this._emitChannelRediness() },
    hasChannelError () { this._emitChannelRediness() },
  },

  created () {
    this._reSubscribeIfChannelExists()
  },

  mounted () {
    this._scrollBottom()
  },

  beforeDestroy () {
    this._unsubscribe()
  },

  methods: {

    async _reSubscribeIfChannelExists () {
      this.isChannelsLoading = true
      this.isChannelNotFound = false
      this.hasChannelError = false
      this.messages = []
      try {
        const exist = await this._checkCurrentChannelExistence()
        if (!exist) {
          this.isChannelsLoading = false
          this.isChannelNotFound = true
          return
        }
        this.isChannelsLoading = false
        this._unsubscribe()
        this._subscribe()
      } catch (error) {
        this.hasChannelError = true
      }
    },

    async _checkCurrentChannelExistence () {
      const exist = await checkChannel(this.channelKey)
      return exist
    },

    _scrollBottom () {
      queueMicrotask(() => {
        const list = this.$refs.root as Element
        list.scrollTo(0, list.scrollHeight)
      })
    },

    _subscribe () {
      this.unsubscribeFromChannelMessages = subscribeToChannelMessages(this.channelKey)(
        (data) => {
          this.messages = data
          this.isMessagesLoading = false
          this.hasMessagesError = false
          this._scrollBottom()
        },
        () => { this.hasMessagesError = true }
      )
    },

    _unsubscribe () {
      this.isMessagesLoading = true
      this.unsubscribeFromChannelMessages && this.unsubscribeFromChannelMessages()
    },

    _emitChannelRediness () {
      const ready = !(
        this.isMessagesLoading ||
        this.hasMessagesError ||
        this.isChannelsLoading ||
        this.isChannelNotFound ||
        this.hasChannelError
      )

      this.$emit('ready', ready)
    },

  },
})
</script>
