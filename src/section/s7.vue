<script setup>
import { ref, onMounted } from "vue";

const architectOpen = ref(false);
const splide = ref(null); // 綁定 Splide 元件

function architect(order) {
  if (window.innerWidth >= 768) {
    return
  }

  architectOpen.value = true;

  setTimeout(() => {
    splide.value?.splide?.go(order);
  }, 0);
}

const options = {
  type: 'loop',
  arrows: false,
  autoplay: false,
  pagination: false,
  focus: 'center',
  perPage: 3,
}
</script>
<template>
  <article class="s7" ref="s7">
    <img class="bg hidden md:block" src="./s7/bg.jpg" alt="bg">
    <img class="bg block md:hidden" src="./s7/bg_m.png" alt="bg">
    <div class="wrapper">
      <div class="text">
        <div class="title">
          <h3>
            <span>
              <img class="title_pic" src="./s7/title.svg" alt="title" data-aos="fade-up">
              <img class="light" src="./s7/light.svg" alt="light" data-aos="zoom-in" data-aos-delay="600">
            </span>
          </h3>
          <h4 data-aos="fade-up">
            <img class="hidden md:block" src="./s7/s_title.svg" alt="s_title">
            <img class="block md:hidden" src="./s7/s_title_m.svg" alt="s_title">
          </h4>
        </div>
        <p data-aos="fade-up">
          <img class="hidden md:block" src="./s7/text.svg" alt="text">
          <img class="block md:hidden" src="./s7/text_m.svg" alt="text">
        </p>
      </div>

      <transition name="fade">
        <div v-if="!architectOpen" class="architect">
          <div class="item" @click="architect(0)">
            <img src="./s7/pic1.png" alt="architect_pic">
          </div>
          <div class="item" @click="architect(1)">
            <img src="./s7/pic2.png" alt="architect_pic">
          </div>
          <div class="block md:hidden" style="width: 100%;" />
          <div class="item" @click="architect(2)">
            <img src="./s7/pic3.png" alt="architect_pic">
          </div>
          <div class="item" @click="architect(3)">
            <img src="./s7/pic4.png" alt="architect_pic">
          </div>
          <div class="item" @click="architect(4)">
            <img src="./s7/pic5.png" alt="architect_pic">
          </div>
        </div>
      </transition>
    </div>

    <transition name="fade">
      <div v-if="architectOpen" class="architect_win block md:hidden">
        <button @click="architectOpen = false">
          <img src="./s7/off_btn.svg" alt="off_btn">
        </button>
        <Splide ref="splide" class="slide" :options="options">
          <SplideSlide class="slide-item">
            <img src="./s7/pic1.png" alt="architect_pic">
          </SplideSlide>
          <SplideSlide class="slide-item">
            <img src="./s7/pic2.png" alt="architect_pic">
          </SplideSlide>
          <SplideSlide class="slide-item">
            <img src="./s7/pic3.png" alt="architect_pic">
          </SplideSlide>
          <SplideSlide class="slide-item">
            <img src="./s7/pic4.png" alt="architect_pic">
          </SplideSlide>
          <SplideSlide class="slide-item">
            <img src="./s7/pic5.png" alt="architect_pic">
          </SplideSlide>
        </Splide>
      </div>
    </transition>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s7 {
  position: relative;

  .bg {
    width: 100%;
  }

  .wrapper {
    width: 100%;
    left: 0;
    right: 0;
    position: absolute;
    top: size(100);

    @media screen and (max-width: 767px) {
      top: sizem(60);
    }

    .text {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      max-width: size(1240);

      @media screen and (max-width: 767px) {
        max-width: sizem(310);
        display: flex;
      }

      .title {
        @media screen and (max-width: 767px) {
          width: 28%;
        }

        h3 {
          span {
            position: relative;

            .title_pic {
              width: size(230);

              @media screen and (max-width: 767px) {
                width: 100%;
              }
            }

            .light {
              position: absolute;
              top: 0;
              right: 0;
              transform: translate(55%, -50%);
              width: size(196);

              @media screen and (max-width: 767px) {
                width: sizem(53);
              }
            }
          }
        }

        h4 {
          margin-top: size(15);
          margin-bottom: size(35);

          img {
            width: 100%;
          }
        }
      }

      p {
        @media screen and (max-width: 767px) {
          width: 72%;
          box-sizing: border-box;
          padding-left: sizem(30);
        }

        img {
          width: 100%;
        }
      }
    }

    .architect {
      display: flex;
      justify-content: center;
      padding: 0 size(50);

      @media screen and (max-width: 767px) {
        flex-wrap: wrap;
        padding: 0;
      }

      br {
        @media screen and (max-width: 767px) {
          width: 100%;
        }
      }

      .item {
        width: 20%;
        position: relative;
        height: size(575);

        @media screen and (max-width: 767px) {
          width: 33.333333%;
          margin-top: sizem(30);
          cursor: pointer;
        }

        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;

          @media screen and (max-width: 767px) {
            width: 200%;
            max-width: sizem(180);
          }
        }
      }
    }
  }

  .architect_win {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    button {
      position: absolute;
      top: sizem(60);
      right: sizem(50);
      width: sizem(20);
      z-index: 1;
    }

    .slide {
      .slide-item {
        position: relative;
        width: 100%;
        height: sizem(360);

        img {
          width: sizem(180);
          opacity: 0.5;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: 0.3s;
          pointer-events: none;
        }

        &.is-visible {
          // width: 20%;
        }

        &.is-active {
          // width: 70%;

          img {
            width: sizem(340);
            opacity: 1;
          }
        }

      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>