<template>
  <div v-swiper:mySwiper="swiperOption" class="slider">
    <div class="swiper-wrapper">
      <div
          v-for="banner in banners"
          :key="banner"
          class="slider__item swiper-slide"
          :style="{ 'background-image': `url(${banner})` }" >
        <!-- <img :src="banner" class="slider__image"> -->
      </div>
    </div>
    <div class="swiper-pagination" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
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
          el: '.swiper-pagination'
        }
      }
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.mySwiper)
    this.mySwiper.slideTo(3, 1000, false)
  }
}
</script>

<style src="./Slider.scss" lang="scss"></style>
