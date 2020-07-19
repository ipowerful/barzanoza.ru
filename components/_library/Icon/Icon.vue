<template>
  <div class="icon">
    <svg class="icon__svg">
      <use :xlink:href="`#${name}`" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style lang="scss">
.icon {
  position: relative;

  &__svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
