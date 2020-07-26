<template>
  <swiper class="swiper" :options="swiperOption">
    <div
        v-for="banner in banners"
        :key="banner"
        class="slider__item swiper-slide"
        :style="{ 'background-image': `url(${banner})` }" >
      <!-- <img :src="banner" class="slider__image"> -->
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      banners: [
        require('~/assets/images/zanoza-promo1.jpg'),
        require('~/assets/images/zanoza-promo2.jpg'),
        require('~/assets/images/zanoza-promo3.jpg')
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.mySwiper)
  }
}
</script>

<style lang="scss">
  /* @import './base.scss'; */
  .slider {
    &__item {
      height: calc(100vh - #{$page-padding-top});
      background: $gray;
      background-position: center;
      background-size: cover;
    }
  }
</style>
