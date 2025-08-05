<template>
  <article class="s3" ref="s3">
    <img class="bg hidden md:block" src="./s3/bg.svg" alt="bg" />
    <img class="bg block md:hidden" src="./s3/bgm.svg" alt="bg" />
    <div class="text_content">
      <div class="title font-['Noto_Serif_TC',serif]">
        <h2 class="t" data-aos="fade-up" data-aos-delay="0">高雄の心</h2>
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="200">巨蛋×高鐵雙特區</h3>
      </div>
      <div data-aos="fade-up" data-aos-delay="400" class="desc">城市最精華的生活圈，以巨蛋、新左營為 中心，坐擁3大百貨，近美式賣場好市多， 堪稱國際級購物機能；近自由、明誠商圈，步行即到自由黃昏市場，機能最成熟，生活 採買，一應俱全。
      </div>
    </div>
    <p class="block md:hidden font-['Noto_Sans_TC',sans-serif]">情境示意圖</p>
    <img class="tree" src="./s3/tree.png" alt="tree">
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  position: relative;
  z-index: 1;
  color: #fff;
  font-size:sizem(12);
  line-height: 1.7;font-weight: 300;
  @media screen and (min-width: 768px) {
    font-size:size(20);
  }

  .bg {
    width: 100%;
    background: url("./s3/bgm.jpg");
    background-size:cover;
    @media screen and (min-width: 768px) {
      background-image:url("./s3/bg.jpg");
    }
  }

  .text_content {
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    bottom: 0;
    margin: auto;
    text-align: justify;
    left:size(340);
    top: size(100);
    width:size(477);

    @media screen and (max-width: 767px) {
      padding-left: 0;
    left:0;right: 0;
      width:sizem(310);
      top: sizem(30);
      display: flex;
      align-items: flex-start;
    }

    .title_wrapper {
      @media screen and (max-width: 767px) {
        width: 35%;
      }
    }
    .title{
      margin-bottom: .5em;
     .t{font-size: 1.8em;color:#F3D7A3; font-weight: 600;}
     .sub{font-size: 1.19em;}
      @media screen and (min-width: 768px) {
        font-size: size(27);
      }
    }
    .desc{
      @media screen and (max-width: 767px) {
        width: 65%;
        padding-left:1em;
      }
      
    }
  }
  
  p{
    font-size: sizem(10);
    position: absolute;
    bottom: sizem(5);
    right: sizem(5);
    color: #fff;
  }

  @keyframes tree {
  to {
    transform: translate(0)
  }
}
  .tree{
    position: absolute;
    left: 0;
    bottom: size(-130);
    width: size(270);
    animation: tree 5s ease-in-out alternate infinite;
  transform: skewY(-4deg);
  transform-origin: 0 50%;
    @media screen and (max-width: 767px) {
      bottom: sizem(-40);
      width: sizem(115);
    }
  }
}
</style>