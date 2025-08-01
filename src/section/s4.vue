<template>
  <article class="s4 " ref="s4">
    <img class="bg hidden md:block" src="./s4/bg.png" alt="bg">
    <img class="bg block md:hidden" src="http://placehold.jp/375x730.jpg" alt="bg">
    <div class="wrapper">
      <div class="title">
        <img class="hidden md:block" src="./s4/title.svg" alt="title">
        <img class="block md:hidden" src="./s4/title_m.svg" alt="title">
      </div>
      <div class="pic">
        <div class="item">
          <img src="./s4/pic01.jpg" alt="pic">
          <p class="font-['Noto_Sans_TC',sans-serif]">實景圖</p>
        </div>
        <div class="item">
          <img src="./s4/pic02.jpg" alt="pic">
          <p class="font-['Noto_Sans_TC',sans-serif]">情境示意圖</p>
        </div>
      </div>
      <div class="text">
        <img class="hidden md:block" src="./s4/text.svg" alt="text">
        <img class="block md:hidden" src="./s4/text_m.svg" alt="text">
      </div>
    </div>
    <p class="b_text font-['Noto_Sans_TC',sans-serif]">情境示意圖</p>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4 {
  position: relative;

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
    gap: size(35) size(45);
    max-width: size(1240);
    top: size(100);

    @media screen and (max-width: 767px) {
      gap: 0;
      max-width: sizem(310);
      top: sizem(60);
    }

    .title {
      width: 100%;
      img{
        width: 100%;
      }

      @media screen and (max-width: 767px) {
        margin-bottom: sizem(20);
      }
    }

    .pic {
      width: 40%;

      @media screen and (max-width: 767px) {
        width: 100%;
      }

      .item {
        position: relative;

        &:nth-child(1) {
          margin-bottom: size(35);

          @media screen and (max-width: 767px) {
            margin-bottom: sizem(20);
          }
        }

        @media screen and (max-width: 767px) {
          margin-bottom: sizem(20);
        }

        img {
          width: 100%;
        }

        p {
          position: absolute;
          color: #fff;
          font-size: size(15);
          bottom: size(5);
          right: size(5);
        }
      }
    }

    .text {
      width: calc(60% - size(45));

      @media screen and (max-width: 767px) {
        width: 100%;
      }

      img {
        width: 100%;
      }
    }
  }

  .b_text {
    position: absolute;
    color: #fff;
    bottom: size(7);
    right: size(10);

    @media screen and (max-width: 767px) {
      bottom: sizem(5);
      right: sizem(10);
    }
  }
}
</style>