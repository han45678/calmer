<script setup>

</script>

<template>
  <article class="s1" id="s1">
    <div class="bg-wrapper">
      <div class="bg">
        <img data-aos="zoom-in" data-aos-delay="600" src="https://xcatx7.github.io/pics/calmer-1.png" class="pc" />
        <img data-aos="zoom-in" data-aos-delay="600" src="https://xcatx7.github.io/pics/calmer-1m.png" class="mo" />
      </div>
    </div>
  </article>
</template>


<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s1 {
  width: 100%;
  position: relative;

  .bg-wrapper {
    position: relative;
    width: 100%;
    min-height: size(1120);
    @media screen and (max-width: 767px) {
      min-height: size(364);
    }
  }

  .bg {
    background: url("https://xcatx7.github.io/pics/calmer-bg.jpg") 50% 50%;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .mo {
    display: none;
  }

  @media screen and (max-width: 767px) {
    .bg-wrapper {
      aspect-ratio: 375 / 604;
      min-height: auto;
    }

    .bg {
      background-image: url("https://xcatx7.github.io/pics/calmer-bgm.jpg");
      height: auto;
      aspect-ratio: 375/604;
    }

    .pc {
      display: none;
    }

    .mo {
      display: block;
    }
  }

  img {
    position: relative;
    object-fit: cover;
    z-index: 5;
    width: 100%;
    height: 100%;
  }

  //以下是動態部分 . 以上模擬背景跟文字
  .bg::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(8px);
    background:
      linear-gradient(to bottom right, #fff, #BDFBFF99 20%, #BDFBFF00 50%) bottom right / 50% 50% no-repeat,
      linear-gradient(to bottom left, #fff, #BDFBFF99 20%, #BDFBFF00 50%) bottom left / 50% 50% no-repeat,
      linear-gradient(to top left, #fff, #BDFBFF99 20%, #BDFBFF00 50%) top left / 50% 50% no-repeat,
      linear-gradient(to top right, #fff, #BDFBFF99 20%, #BDFBFF00 50%) top right / 50% 50% no-repeat;
    animation: bg 6s linear infinite, origin 6s linear infinite;
    opacity: 0;
  }

  @keyframes bg {
    0% {
      transform: scale(5, .05)translate(0%, 50%);
      opacity: 0;
    }

    6% {
      transform: scale(.6, .5)translate(0%, 50%);
    }

    12% {
      transform: scale(.3, 5)translate(0%, 50%);
      opacity: 1;
    }

    20% {
      transform: scale(.1, 10)translate(0%, 0%);
      opacity: .5;
    }

    25% {
      transform: scale(.4, .5)translate(0%, 0%);
      opacity: .5;
    }

    30% {
      transform: scale(5, .05)translate(0%, 0%);
      opacity: 0;
    }
  }

  @keyframes origin {
    0% {
      transform-origin: 50% 100%;
    }

    12% {
      transform-origin: 50% 100%;
    }

    20% {
      transform-origin: 50% 43%;
    }
  }

  @media screen and (max-width: 767px) {
    @keyframes origin {
      0% {
        transform-origin: 50% 100%;
      }

      12% {
        transform-origin: 50% 100%;
      }

      20% {
        transform-origin: 50% 36%;
      }
    }

  }
}
</style>