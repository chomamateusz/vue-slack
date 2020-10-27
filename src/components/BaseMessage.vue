<template>
  <VListItem
    class="base-message"
  >
    <VListItemAvatar>
      <VImg
        :src="message.author.avatar"
      >
        <template v-slot:placeholder>
          <VIcon
            class="base-message__avatar--fallback"
          >
            mdi-account
          </VIcon>
        </template>
      </VImg>
    </VListItemAvatar>

    <VListItemContent>
      <VListItemTitle>{{ message.text }}</VListItemTitle>
      <VListItemSubtitle>{{ message.author.displayName }} ({{ message.author.email }}) </VListItemSubtitle>
      <VListItemSubtitle>{{ message.date | moment('from', 'now') }}</VListItemSubtitle>
    </VListItemContent>
  </VListItem>
</template>

<style scoped>
.base-message__avatar--fallback{
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { Message } from '../api/messages'

export default Vue.extend({
  props: {
    message: {
      type: Object as PropType<Message>,
      required: true,
    },
  },
})
</script>
