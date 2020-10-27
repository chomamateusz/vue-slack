<template>
  <VContainer>
    <VRow class="text-center">
      <VCol cols="12">
        <VImg
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </VCol>

      <VCol class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vue-Slack
        </h1>

        <p class="subheading font-weight-regular">
          Choose or add a channel from the menu on the left and start chatting!
        </p>
      </VCol>

    </VRow>
  </VContainer>
</template>
