<template>
  <BaseDrawer
    :header="'Channels'"
    :items="channels"
  >
    <template v-slot:default="slotProps">
      <VListItem
        :key="slotProps.key"
        :to="slotProps.item.key"
        link
      >
        <VListItemContent>
          <VListItemTitle>{{ slotProps.item.title }} {{ slotProps.whatever }}</VListItemTitle>
        </VListItemContent>
      </VListItem>
    </template>
  </BaseDrawer>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseDrawer from '../components/BaseDrawer.vue'

export default Vue.extend({
  name: 'Channels',

  components: {
    BaseDrawer,
  },

  data: () => ({
    channels: [
      {
        key: '123',
        title: 'Channel 1',
      },
      {
        key: '321',
        title: 'Channel 2',
      },
    ],
  }),
})
</script>
