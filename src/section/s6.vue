<script setup>
const options = {
  type: 'loop',
  arrows: true,
  autoplay: false,
  pagination: false,
  // autoWidth: true,
  focus: 'center',
  perPage: 2,
  breakpoints: {
    768: {
      perPage: 1,
      focus: false,
    }
  }
}
</script>

<template>
  <article class="s6" ref="s6">
    <div class="slider" data-aos="fade">
      <Splide ref="splide" class="slide" :options="options">
        <SplideSlide class="slide-item">
          <img src="./s6/pic01.jpg" alt="img">
          <p>外觀實景拍攝</p>
        </SplideSlide>
        <SplideSlide class="slide-item">
          <img src="./s6/pic02.jpg" alt="img">
          <p>外觀實景拍攝</p>
        </SplideSlide>
        <SplideSlide class="slide-item">
          <img src="./s6/pic03.jpg" alt="img">
          <p>外觀實景拍攝</p>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
  position: relative;
  background: #022D4C;

  .slider {
    .slide-item {
      width: auto;
      height: size(1080);
      position: relative;
      transition: width 0.3s;
      @media screen and (max-width: 767px) {
        height: sizem(437);
      }
      img {
        width: 100%;
        height: 100%;
        @media screen and (min-width: 768px) {
        filter: blur(4px) grayscale(0.6);
        transition: filter 0.3s;
        }
      }

      p {
        display: none;
        font-size: size(15);
        position: absolute;
        bottom: size(5);
        right: size(10);
        color: #fff;
      }

      &.is-visible {
        width: 26%;

        @media screen and (max-width: 767px) {
          width: 100%;
        }
      }

      &.is-active {
        width: 48%;

        @media screen and (max-width: 767px) {
          width: 100%;
        }

        img {
          filter: unset;
        }

        p {
          display: block;
        }
      }
    }
  }

  .splide__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    right: unset !important;
    background-position: center;
    background-repeat: no-repeat;

    svg {
      display: none;
    }

    width: size(40);
    height: size(40);

    @media screen and (max-width: 767px) {
      width: sizem(40);
      height: sizem(40);
    }

    &.splide__arrow--prev {
      @media screen and (min-width: 768px) {
        left: calc(50% + (27%));
        transform: translateY(-50%);
      }

      background-image: url(./s6/prev.svg);
      background-size: contain;
      right:0 !important;
    }

    &.splide__arrow--next {
      @media screen and (min-width: 768px) {
        left: calc(50% - (27%));
        transform: translateX(-100%) translateY(-50%);
      }

      background-image: url(./s6/next.svg);
      background-size: contain;
      left:0;
    }
  }
}
</style>
