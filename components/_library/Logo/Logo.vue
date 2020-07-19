<template>
  <nuxt-link class="logo" :to="{name: 'index'}" >
    <icon :name="`zanoza-logo`" class="logo__icon" />
  </nuxt-link>
</template>

<script>
import Icon from '~/components/_library/Icon/Icon.vue'
import '~/assets/symbols/zanoza-logo.svg'

export default {
  components: {
    Icon
  }
}
</script>

<style lang="scss">
.logo {
  display: block;

  &__icon {
    width: 140px;
    height: 42px;
  }
}
</style>
