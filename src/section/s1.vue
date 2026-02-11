<script setup>

</script>

<template>
  <article class="s1 font-['Noto_Serif_TC',serif]" id="s1">
    <!--  <img src="./s1/mo.png" class="t0" v-if="isMobile">
    <img src="./s1/pc.jpg" class="t0" v-else>   -->
    <div class="circle" data-aos="zoom-out">
      <div class="circle_t">
        <img src="./s1/l.png">
      </div>
      <div class="circle_b">
        <img src="./s1/l.png">
      </div>
    </div>
    <img src="./s1/calmerm.png" class="calmer" alt="建築外觀實景拍攝合成" v-if="isMobile" data-aos="fade-up" >
    <img src="./s1/calmer.png" class="calmer" alt="建築外觀實景拍攝合成" v-else data-aos="fade-up">
    <img src="./s1/slogo.svg" class="slogo" alt="善寬建設" data-aos="fade-up" data-aos-delay="0">
    <img src="./s1/logo.svg" class="logo" alt="logo" data-aos="fade-up" data-aos-delay="200">
    <img src="./s1/tm.svg" class="t" alt="巨蛋x公園" v-if="isMobile" data-aos="fade-up" data-aos-delay="400">
    <img src="./s1/t.svg" class="t" alt="巨蛋x公園" v-else data-aos="fade-up" data-aos-delay="400">

    <div class="caption">建築外觀實景拍攝合成</div>
  </article>
</template>


<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  width: 100%;
  height: sizem(604);
  position: relative;
  font-size: sizem(12);
  color: #fff;
  background: linear-gradient(0deg, #97232A 0%, #8D1F26 11%, #79181D 41%, #6D1318 71%, #691217 100%);

  @media screen and (min-width: 768px) {
    font-size: size(38);
    height: 100dvh;
    min-height: size(900);
    max-height: size(1080);
  }

  .t0 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: .3;
    pointer-events: none;
    user-select: none;
    z-index: 99;
  }
.circle{width: 100%;height: 100%;top: 0;left: 0;

    @media screen and (min-width: 768px) {
      width: 60%;
    }


}
  .circle_t {
    position: absolute;
    top: sizem(-205);
    left: sizem((375 - 410)*.5);
    width: sizem(410);
    aspect-ratio: 1/.9;
    background: radial-gradient(65.29% 65.29% at 50% 98.44%, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%);
    border-radius: 50%;

    img {
      width: 57%;
      mix-blend-mode: screen;
      position: absolute;
      bottom: -4.5%;
      left: 0;
      right: 0;
    }

    @media screen and (min-width: 768px) {
      top: size(-485);
      top:calc(30% + #{size(-485 - 1080 * .3)});
      left: size(156);
      width: size(910);
    }
  }

  .circle_b {
    position: absolute;
    transform: scaleY(-1);
    bottom: sizem(-230);
    left: sizem((375 - 420)*.5);
    width: sizem(420);
    aspect-ratio: 1/.9;
    background: radial-gradient(65.29% 65.29% at 50% 98.44%, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%);
    border-radius: 50%;
    border: 1px solid rgba(255, 164, 67, 0.20);

    img {
      width: 70%;
      height: 25%;
      mix-blend-mode: screen;
      position: absolute;
      bottom: -9%;
      left: 0;
      right: 0;
    }

    @media screen and (min-width: 768px) {
      bottom: size(-700);
      left: size(26);
      width: size(1150);

      img {
        width: 67%;
        height: 24%;
        bottom: -8.5%;
      }
    }

  }

  .calmer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .slogo {
    position: absolute;
    top: sizem(16);
    left: sizem(20);
    width: sizem(75);

    @media screen and (min-width: 768px) {
      top: size(20);
      left: size(30);
      width: size(155);
    }
  }

  .logo {
    position: absolute;
    top: sizem(55);
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(169);

    @media screen and (min-width: 768px) {
      top: size(94);
      top:calc(30% + #{size(94 - 1080 * .3)});
      left: size(432);
      width: size(379);
      right: auto;
    }
  }

  .t {
    position: absolute;
    top: sizem(186);
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(236);

    @media screen and (min-width: 768px) {
      top: size(105);
      top:calc(35% + #{size(105 - 1080 * .35)});
      right: size(397);
      width: size(539);
      left: auto;
    }
  }

  .caption {
    right: auto;
    left: 1em;
  }


  /*
  .building{
    position: absolute;
    width:sizem(106);
    bottom: 0;margin: auto;
    left: 0.5em;right: 0;
  @media screen and (min-width: 768px) {
    width:size(289);
    //bottom: size(-235);
    bottom: calc(50% + #{size(-235 - 1120 * .5)});
  }
  }
  .logo{
    position: absolute;
    width:sizem(60);
    top: sizem(125);margin: auto;
    left: 0.5em;right: 0;
  @media screen and (min-width: 768px) {
    width:size(156);
    top: size(197);
    top: calc(50% + #{size(197 - 1120 * .5)});
  }
  
  }
  .t1{
    position: absolute;margin: auto;
    display: flex;justify-content:space-between;
    left: 0.5em;right: 0;white-space: nowrap;
    letter-spacing:0.5em;
    width:sizem(260);
    top: sizem(230);
    font-size: 1.18em;
  @media screen and (min-width: 768px) {
    width:size(715);
    // top: size(464);
    font-size: 1em;
    top: calc(50% + #{size(464 - 1120 * .5)});
  }
    
  }
  .t2{
    position: absolute;margin: auto;
    width:sizem(353);
    top: sizem(452);
    display: flex;justify-content:space-between;
    left: 0;right: 0;white-space: nowrap;
    //font-size:size(38);
    vertical-align: middle;
    color: #DCDDDD;
    span{display: block;
      &:first-child{letter-spacing:0em;padding: 0.2em 0;}
      &:last-child{padding: 0.2em .5em;border: 1px solid currentColor;}
    }
  @media screen and (min-width: 768px) {
    width:size(1250);
    // top: size(924);
    top: calc(50% + #{size(924 - 1120 * .5)});
    span{
      &:first-child{letter-spacing:0.2em;}
      &:last-child{padding: 0.2em 1.2em;}
    }
  }
  }


  .bg {
    background: url("./s1/calmer-bg.jpg") 50% 50%;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }


  @media screen and (max-width: 767px) {
    .bg {
      background-image: url("./s1/calmer-bgm.jpg");
    }
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

  }*/
}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>