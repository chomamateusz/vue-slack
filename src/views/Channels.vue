<template>
  <BaseDrawer
    :header="'Channels'"
    :items="channels"
    :isLoading="isChannelsLoading"
    :hasError="hasChannelsError"
  >
    <template v-slot:before-header>
      <div class="channels__add-channel-input">
        <VBtn
          @click="logOut"
          block
          text
        >
          LOG OUT
        </VBtn>
      </div>
      <VDivider />
    </template>
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
    <template v-slot:after-list v-if="!isChannelsLoading">
      <div class="channels__add-channel-input">
        <BaseAddInputButton
          v-model="newChannelName"
          :isInputVisible="isNewChannelInputVisible"
          :isLoading="isNewChannelLoading"
          @requestClose="closeNewChannelInput"
          @submit="addChannel"
        />
      </div>
    </template>
  </BaseDrawer>
</template>

<style scoped>
.channels__add-channel-input{
  /* @QUESTION is here a them accesible to manage spacings? */
  padding: 8px;
}
</style>

<script lang="ts">
import Vue from 'vue'
import BaseDrawer from '../components/BaseDrawer.vue'
import BaseAddInputButton from '../components/BaseAddInputButton.vue'

import { subscribe as subscribeToChannels, add as addChannel, Channel } from '../api/channels'

interface ComponentData {
  newChannelName: string,
  isNewChannelInputVisible: boolean,
  isNewChannelLoading: boolean,
  channels: Channel[],
  isChannelsLoading: boolean,
  hasChannelsError: boolean,
  unsubscribeFromChannels: null | (() => void),
}

export default Vue.extend({
  name: 'Channels',

  components: {
    BaseDrawer,
    BaseAddInputButton,
  },

  data (): ComponentData {
    return {
      newChannelName: '',
      isNewChannelInputVisible: false,
      isNewChannelLoading: false,
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

  methods: {

    closeNewChannelInput () {
      this.newChannelName = ''
      this.isNewChannelInputVisible = !this.isNewChannelInputVisible
    },

    async addChannel () {
      this.isNewChannelLoading = true
      try {
        await addChannel(this.newChannelName)
        this.closeNewChannelInput()
      } catch (error) {
        // @TODO error handling
      }
      this.isNewChannelLoading = false
    },

    logOut () {
      this.$store.dispatch('logOut')
    },

  },

})
</script>
