<template>
  <article class="s3" ref="s3">
    <img class="bg hidden md:block" src="./s3/bg.jpg" alt="bg" />
    <img class="bg block md:hidden" src="./s3/bg_m.jpg" alt="bg" />
    <div class="text_content">
      <div class="title_wrapper">
        <img data-aos="fade-up" class="title" src="./s3/title.svg" alt="title">
        <img data-aos="fade-up" class="s_title" src="./s3/s_title.svg" alt="s_title">
      </div>
      <img data-aos="fade-up" class="text hidden md:block" src="./s3/text.svg" alt="text">
      <img data-aos="fade-up" class="text block md:hidden" src="./s3/text_m.svg" alt="text">
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

  .bg {
    width: 100%;
  }

  .text_content {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    text-align: left;
    padding-left: size(340);
    margin-top: size(100);

    @media screen and (max-width: 767px) {
      padding-left: 0;
      max-width: sizem(310);
      margin-top: sizem(30);
      display: flex;
      align-items: flex-start;
    }

    .title_wrapper {
      
      .title {
        display: block;
        margin-left: 0;
        margin-bottom: size(20);

        @media screen and (max-width: 767px) {
          margin-bottom: sizem(10);
          width: 100%;
        }
      }

      .s_title {
        display: block;
        margin-left: 0;
        margin-bottom: size(35);

        @media screen and (max-width: 767px) {
          margin-bottom: 0;
          width: 100%;
        }
      }

      @media screen and (max-width: 767px) {
        width: 35%;
      }
    }

    .text {
      margin-left: 0;
      @media screen and (max-width: 767px) {
        width: 65%;
        padding-left: sizem(20);
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

  .tree{
    position: absolute;
    left: 0;
    bottom: size(-130);
    width: size(270);
    @media screen and (max-width: 767px) {
      bottom: sizem(-40);
      width: sizem(115);
    }
  }
}
</style>