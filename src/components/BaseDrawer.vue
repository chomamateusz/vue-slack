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

    <VList dense nav>
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

export default Vue.extend({
  name: 'BaseDrawer',

  props: {
    header: String,
    headerTo: {
      type: String,
      default: '/',
    },
    items: Array,
  },

})
</script>
