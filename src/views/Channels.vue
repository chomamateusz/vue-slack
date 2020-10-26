<template>
  <BaseDrawer
    :header="'Channels'"
    :items="channels"
    :isLoading="isChannelsLoading"
    :hasError="hasChannelsError"
  >
    <template v-slot:default="slotProps">
      <VListItem
        :key="slotProps.key"
        :to="slotProps.item.key"
        link
      >
        <VListItemContent>
          <VListItemTitle>#{{ slotProps.item.title }}</VListItemTitle>
        </VListItemContent>
      </VListItem>
    </template>
  </BaseDrawer>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseDrawer from '../components/BaseDrawer.vue'

import { subscribe as subscribeToChannels, Channel } from '../api/channels'

interface ComponentData {
  channels: Channel[],
  isChannelsLoading: boolean,
  hasChannelsError: boolean,
  unsubscribeFromChannels: null | (() => void),
}

export default Vue.extend({
  name: 'Channels',

  components: {
    BaseDrawer,
  },

  data (): ComponentData {
    return {
      channels: [],
      isChannelsLoading: true,
      hasChannelsError: false,
      // @QUESTION is this ok?
      unsubscribeFromChannels: null,
    }
  },

  created () {
    this.unsubscribeFromChannels = subscribeToChannels(
      (data) => {
        this.hasChannelsError = false
        this.isChannelsLoading = false
        this.channels = data
      },
      () => { this.hasChannelsError = true }
    )
  },

  beforeDestroy () {
    this.unsubscribeFromChannels && this.unsubscribeFromChannels()
  },

})
</script>
