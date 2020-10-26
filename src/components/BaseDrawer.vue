<template>
  <div class="base-drawer">
    <VListItem>
      <RouterLink
        class="base-drawer__link"
        :to="headerTo"
      >
        <VListItemContent>
              <VListItemTitle class="title"> {{header}} </VListItemTitle>
        </VListItemContent>
      </RouterLink>
    </VListItem>

    <VDivider></VDivider>

    <BaseErrorLoad v-if="hasError"/>
    <BaseListItemLoader v-else-if="isLoading"/>
    <VList v-else dense nav>
        <slot v-for="item in items" :item="item" />
    </VList>

  </div>
</template>

<style scoped>
.base-drawer__link{
  color: inherit;
  text-decoration: none;
}
</style>

<script lang="ts">
import Vue from 'vue'

import BaseErrorLoad from './BaseErrorLoad.vue'
import BaseListItemLoader from './BaseListItemLoader.vue'

export default Vue.extend({
  name: 'BaseDrawer',

  components: {
    BaseErrorLoad,
    BaseListItemLoader,
  },

  props: {
    header: String,
    isLoading: {
      type: Boolean,
      default: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    headerTo: {
      type: String,
      default: '/',
    },
    items: Array,
  },

})
</script>
