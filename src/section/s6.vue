<script setup>
import { ref } from 'vue';

const options = {
  arrows: true,
  autoplay: false,
  type: 'loop',
  autoWidth: true,
  pagination: false,
  focus: 'center',
}

const prevRef = ref(null)
const nextRef = ref(null)
</script>

<template>
  <article class="s6" ref="s6">
    <div class="slider" data-aos="fade">
      <Splide ref="splide" class="slide" :options="options">
        <SplideSlide class="slide-item">
          <img src="./s6/pic01.png" alt="img">
          <p class="font-['Noto_Sans_TC',sans-serif]">外觀實景拍攝</p>
        </SplideSlide>
        <SplideSlide class="slide-item">
          <img src="./s6/pic01.png" alt="img">
          <p class="font-['Noto_Sans_TC',sans-serif]">外觀實景拍攝</p>
        </SplideSlide>
        <SplideSlide class="slide-item">
          <img src="./s6/pic01.png" alt="img">
          <p class="font-['Noto_Sans_TC',sans-serif]">外觀實景拍攝</p>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
  position: relative;
  .slider {
    .slide-item {
      width: auto;
      position: relative;
      @media screen and (max-width: 767px) {
          width: 100%;
        }
      img {
        filter: blur(4px) grayscale(0.6);
        @media screen and (max-width: 767px) {
          filter: unset;
        }
      }
      p{
        display: none;
        font-size: size(15);
        position: absolute;
        bottom: size(5);
        right: size(10);
      }
      &.is-active {
        width: 48%;
        @media screen and (max-width: 767px) {
          width: 100%;
        }

        img {
          transition: 0.3s;
          filter: unset;
        }
        p{
          display: block;
        }
      }
    }
  }
  .splide__arrow{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    right: unset !important;
    svg{
      display: none;
    }
    width: size(40);
    height: size(40);
    @media screen and (max-width: 767px) {
        width: sizem(40);
        height: sizem(40);
    }

    &.splide__arrow--prev{
      @media screen and (min-width: 768px) {
        left: calc(50% + (48% / 2));
        transform: translateY(-50%);
      }
      background-image: url(./s6/prev.svg);
      right:0 !important;
    }
    &.splide__arrow--next{
      @media screen and (min-width: 768px) {
        left: calc(50% - (48% / 2));
        transform: translateX(-100%) translateY(-50%);
      }
      background-image: url(./s6/next.svg);
      left:0 ;
    }
  }
}
</style>
