<template>
  <VListItem
    class="base-message"
  >
    <VListItemAvatar>
      <VImg
      v-if="message.author.avatar"
      :src="message.author.avatar"
      >
      </VImg>
      <VIcon
       v-else
       class="base-message__avatar--fallback"
       >
       mdi-account
       </VIcon>
    </VListItemAvatar>

    <VListItemContent>
      <VListItemTitle>{{ message.text }}</VListItemTitle>
      <VListItemSubtitle>{{ message.author.displayName }} ({{ message.author.email }}) </VListItemSubtitle>
      <VListItemSubtitle>{{ message.date | moment('from', 'now') }}</VListItemSubtitle>
    </VListItemContent>
  </VListItem>
</template>

<style scoped>
.base-message{}
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
