<template lang="pug">
  include ../../../node_modules/bempug/index
  - BEMPUG.modifier = '_';

  +b('page-footer', {t:'footer'})
    +e('container')
      +e('logo',{t:'logo'})
      +e('copy') © 2019 - {{ new Date().getFullYear() }} All rights reserved.
      +e('developed', {t:'developed-by'})
</template>

<script>
import DevelopedBy from '~/components/blocks/DevelopedBy/DevelopedBy.vue'
import Logo from '~/components/_library/Logo/Logo.vue'

export default {
  components: {
    DevelopedBy,
    Logo
  }
}
</script>

<style lang="scss">
.page-footer {
  font-size: .9375rem;
  &__container {
    @include make-container();
    padding: 4rem 0;
    text-align: center;
  }

  &__logo {
    width: 140px;
    height: 41px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5rem;
  }
}
</style>
