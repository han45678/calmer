<script setup>

</script>

<template>
  <article class="s1 font-['Noto_Serif_TC',serif]" id="s1">
      <div class="bg">
        <img data-aos="fade-up" data-aos-delay="200" src="./s1/building.png" class="building" />
        <img data-aos="zoom-in" data-aos-delay="0" src="./s1/logo.svg" class="logo" />
        <div data-aos="zoom-in" data-aos-delay="600" class="t1"><span>起步即是</span><span>世界高度</span></div>
        <div data-aos="zoom-in" data-aos-delay="800" class="t2"><span>巨蛋×微笑公園/3-4房</span><span class=" font-['Noto_Sans_TC',sans-serif]">即將公開．搶先預約</span></div>
      </div>
  </article>
</template>


<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s1 {
  width: 100%;
  height: sizem(604);
  position: relative;
  font-size:sizem(12);
  color: #fff;
  @media screen and (min-width: 768px) {
    font-size:size(38);
    height: calc(100vh + #{size(40)});
    min-height:size(900);
    max-height:size(1120);
  }
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

  }
}
</style>