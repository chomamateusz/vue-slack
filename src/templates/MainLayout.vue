<template>

  <div class="main-layout">

    <VNavigationDrawer app>
      <slot name="side-bar" />
    </VNavigationDrawer>

    <VMain  class="main-layout__main">

      <VContainer
        class="main-layout__container"
        fluid
      >

        <slot name="content" />

      </VContainer>

    </VMain>

  </div>

</template>

<style scoped>
.main-layout__main{
  height: 100vh;
  overflow: hidden;
}
.main-layout__container{
  padding: 0;
  height: 100%;
}
</style>
