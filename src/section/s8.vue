<template>
  <article class="s8">
    <img class="bg hidden md:block" src="./s8/bg.jpg" alt="bg">
    <img class="bg block md:hidden" src="./s8/bg_m.jpg" alt="bg">
    <div class="wrapper">
      
    <div class="title font-['Noto_Serif_TC',serif]"  data-aos="fade-up">
      <h2 class="t">升級築家</h2>
      <span class="right">質感のある住居用建材を選ぶ</span>
      <span class="hr"></span>
      <h3 class="sub">德日建材，健康智慧</h3>
    </div>
      <div class="contetn" data-aos="fade-up">
        <img class="hidden md:block" src="./s8/content.svg" alt="contetn">
        <img class="block md:hidden" src="./s8/content_m.svg" alt="contetn">
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s8 {
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

  .wrapper {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: size(50);
    max-width: size(1240);
    top: size(100);

    @media screen and (max-width: 767px) {
      gap: sizem(40);
      max-width: sizem(310);
      top: sizem(40);
    }
  .title{
    position: relative;
    margin: auto;
    display: flex;
    flex-wrap: wrap;opacity: .5;
     justify-content:space-between;
    align-items:flex-end;
    width: sizem(310);
   // top: sizem(55);
    font-size: sizem(12);
    margin:0 0 0;
     .t{font-size: 1.8em;color:#F3D7A3; font-weight: 600;}
     .sub{font-size: 1.19em;}
     .right{margin-bottom: .3em;}
     .hr{width: 100%;height: 1px;border-top: 1px solid currentColor;}
    @media screen and (min-width: 768px) {
      width: size(1240);
    font-size: size(27);
    margin:0 0;
    
    }
  
  }
    .contetn{
      width: 100%;
      img {
        width: 100%;
      }
    }

  }

}
</style>