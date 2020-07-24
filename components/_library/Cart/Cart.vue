<template>
  <div class="cart">
    <a href="#" class="cart__link">
      <icon :name="`shopping-bag`" class="cart__icon" />
    </a>
  </div>
</template>

<script>
import Icon from '~/components/_library/Icon/Icon.vue';

export default {
  components: {
    Icon
  }
}
</script>

<style lang="scss">
.cart {
  &__icon {
    width: 24px;
    height: 24px;
  }
  /* 
  &__link {
    
    &:hover {
      color: $primary;
    }
  } */
}
</style>
