<template>
  <div class="logo">
    <nuxt-link class="logo__link" :to="{name: 'index'}">
      <svg class="icon__svg">
        <use xlink:href="#zanoza-logo.svg" />
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
import '~/assets/symbols/zanoza-logo.svg'

export default {}
</script>

<style lang="scss">
.logo {
  &__icon {
    width: 140px;
    height: 42px;
  }
}
</style>
