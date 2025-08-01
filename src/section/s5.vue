<template>
  <article class="s5">
    <img class="bg hidden md:block" src="./s5/bg.jpg" alt="bg">
    <img class="bg block md:hidden" src="./s5/bg_m.jpg" alt="bg">
    <div class="wrapper">
      <div class="title">
        <img class="hidden md:block" src="./s5/title.svg" alt="title">
        <img class="block md:hidden" src="./s5/title_m.svg" alt="title">
      </div>
      <div class="pic">
        <div class="item">
          <img src="./s5/pic.jpg" alt="pic">
          <p class="font-['Noto_Sans_TC',sans-serif]">實景圖</p>
        </div>
        <div class="item">
          <img class="hidden md:block" src="./s5/text.svg" alt="text">
          <img class="block md:hidden" src="./s5/text_m.svg" alt="text">
        </div>
      </div>
      <div class="main_pic">
        <img src="./s5/main_pic.jpg" alt="text">
        <p class="font-['Noto_Sans_TC',sans-serif]">實景圖</p>
      </div>
    </div>
    <p class="b_text font-['Noto_Sans_TC',sans-serif]">情境示意圖</p>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
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

      img {
        width: 100%;
      }

      @media screen and (max-width: 767px) {
        margin-bottom: sizem(20);
      }
    }

    .pic {
      width: 36%;

      @media screen and (max-width: 767px) {
        width: 100%;
        order: 2;
        display: flex;
        align-items: flex-start;
        margin-top: sizem(20);
      }

      .item {
        position: relative;

        &:nth-child(1) {
          margin-bottom: size(30);

          @media screen and (max-width: 767px) {
            margin-bottom: 0;
            order: 2;
            width: calc(48% - sizem(10));
            margin-left: sizem(10);
          }
        }

        &:nth-child(2) {
          @media screen and (max-width: 767px) {
            order: 1;

            width: 52%;
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

          @media screen and (max-width: 767px) {
            font-size: sizem(10);
            bottom: sizem(5);
            right: sizem(5);
          }
        }
      }
    }

    .main_pic {
      width: calc(64% - size(45));
      position: relative;

      @media screen and (max-width: 767px) {
        width: 100%;
        order: 1;
      }

      p {
          position: absolute;
          color: #fff;
          font-size: size(15);
          bottom: size(5);
          right: size(5);

          @media screen and (max-width: 767px) {
            font-size: sizem(10);
            bottom: sizem(5);
            right: sizem(5);
          }
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