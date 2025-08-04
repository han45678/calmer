<template>
  <article class="s2">
    <img src="./s2/bg.jpg" alt="bg" class="bg hidden md:block">
    <img src="./s2/bg_m.jpg" alt="bg" class="bg block md:hidden">
    
    <img src="./s2/pic.svg" alt="pic" class="pic" data-aos="fade-up" data-aos-delay="200">
    <img src="./s2/l.png" alt="pic" class="l">

  <!--  -->
    <div class="title font-['Noto_Serif_TC',serif]"  data-aos="fade-up">
      <h2 class="t">善寬集團</h2>
      <span class="right">世界レベルの企業</span>
      <span class="hr"></span>
      <h3 class="sub">上善若水，心寬致遠</h3>
    </div>

    <div data-aos="fade-up" data-aos-delay="800" class="desc">
      我們以「善」為初心，希望將「和善予人」的理念深化至每一個領域。強調人與環境和諧共生，打造合宜的理想建築，選地皆以高綠覆、自然共存為原則，始終不變。
      <span class="link"></span><span class="jp">最善は水のごとし、心広く自由に</span>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  position: relative;
  color: #fff;
  font-size:sizem(12);
  line-height: 1.7;
  @media screen and (min-width: 768px) {
    font-size:size(20);
  }

  .bg {
    width: 100%;
  }

  .title1 {
    width: 100%;
    max-width: size(1240);
    position: absolute;
    left: 0;
    right: 0;
    top: size(100);
    @media screen and (max-width: 767px) {
      max-width: sizem(310);
      top: sizem(60);
    }
  }

  .pic {
    width: 100%;
    max-width: size(355);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("./s2/pic.png");
    background-size: cover;
    @media screen and (max-width: 767px) {
      max-width: sizem(148);
      bottom: sizem(92);
    }
  }
  @keyframes l {
  to {
    transform: translate(0)
  }
}
  .l {
    width: 100%;
    max-width: size(270);
    position: absolute;
    left: 0;
    right: size(170);
    bottom:  size(450);
    animation: l 1s ease-in-out alternate infinite;
  transform: scale(0.1);
    @media screen and (max-width: 767px) {
      max-width: sizem(148);
      right: sizem(57);
      bottom: sizem(270);
    }
  }
  .title{
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    display: flex;
    flex-wrap: wrap;opacity: .5;
     justify-content:space-between;
    align-items:flex-end;
    width: sizem(310);
    top: sizem(55);
    font-size: sizem(12);
     .t{font-size: 1.8em;color:#F3D7A3; font-weight: 600;}
     .sub{font-size: 1.19em;}
     .right{margin-bottom: .3em;}
     .hr{width: 100%;height: 1px;border-top: 1px solid currentColor;}
    @media screen and (min-width: 768px) {
      width: size(1240);
    top: size(85);
    font-size: size(27);
    }
  
  }
  
  .desc{
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    text-align: justify;
    width: sizem(310);
    bottom: sizem(60);
    .link {display: inline-block;
      border-bottom: 1px solid currentColor;
      margin: 0.1em 0 0 0;display: inline-block;
      vertical-align: middle;
      align-self: center;
      width: calc(100% - 19em);
      flex: 1;
    }
    .jp {display: inline-block;
    }
    @media screen and (max-width: 767px) {
      display: flex;
      flex-wrap: wrap;
      gap: 1em;
    }
    @media screen and (min-width: 768px) {
      width: size(1240);
      bottom: size(60);
      .link {
        width:calc(100% - 29em);margin: 0 1em;
      }
      &::after{content: "";display: inline-block; width: 100%;}
    }
  }
}
</style>
