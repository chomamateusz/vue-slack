<template  v-if="isLoading">
<div>
  <VListItem  v-for="index in 3" :key="index">
    <VListItemContent>
      <VSkeletonLoader  type="text" />
    </VListItemContent>
  </VListItem>
  </div>
</template>
