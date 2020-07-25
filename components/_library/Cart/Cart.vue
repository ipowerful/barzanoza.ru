<template>
  <a href="#" class="cart">
    <icon :name="`shopping-bag`" class="cart__icon" data-counter="10" />
  </a>
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
    
    position: relative;
    
    &:after {
      position: absolute;
      top: -30%;
      right: -60%;
      width: 22px;
      height: 22px;
      background: $primary;
      border-radius: 50%;
      
      content: attr(data-counter);
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white;
      font-size: .78571rem;
    }
  }
  /* 
  &__link {
    
    &:hover {
      color: $primary;
    }
  } */
}
</style>
