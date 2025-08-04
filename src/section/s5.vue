<template>
  <article class="s5">
    <img class="bg hidden md:block" src="./s5/bg.jpg" alt="bg">
    <img class="bg block md:hidden" src="./s5/bg_m.jpg" alt="bg">
    <div class="wrapper">
    <div class="title font-['Noto_Serif_TC',serif]"  data-aos="fade-up">
      <h2 class="t"><span>3</span>鐵<span>2</span>快</h2>
      <span class="right">最も便利な交通</span>
      <span class="hr"></span>
      <h3 class="sub">R15生態公園×3鐵共構×雙國道</h3>
    </div>
    
      <div class="pic">
        <div class="item" data-aos="fade-up">
          <img src="./s5/pic.jpg" alt="pic">
          <p class="font-['Noto_Sans_TC',sans-serif]">實景圖</p>
        </div>
    <div data-aos="fade-up" data-aos-delay="800" class="desc">約950公尺抵捷運紅線，鄰近新左營 三鐵共構，高鐵、鐵路、捷運全滿足；咫尺 鼎金交流道，瞬抵國道1號、國道10號， 工作通勤、週末出遊，全城南北暢行。
    </div>
      </div>
      <div class="main_pic" data-aos="fade-up">
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
    gap: size(35) size(45);
    max-width: size(1240);
    top: size(100);
    align-items: flex-start;

    @media screen and (max-width: 767px) {
      gap: 0;
      max-width: sizem(310);
      top: sizem(60);
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
    margin:-.6em 0 1.5em;
     .t{font-size: 1.8em;color:#F3D7A3; font-weight: 600;
    span{font-size: 1.3em;}
    }
     .sub{font-size: 1.19em;}
     .right{margin-bottom: .3em;}
     .hr{width: 100%;height: 1px;border-top: 1px solid currentColor;}
    @media screen and (min-width: 768px) {
      width: size(1240);
    font-size: size(27);
    margin:-.3em 0 0;
    
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
      .desc {
        text-align: justify;
        font-weight: 300;
        
          @media screen and (max-width: 767px) {
            width:sizem(160); 
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