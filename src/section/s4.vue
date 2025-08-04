<template>
  <article class="s4 " ref="s4">
    <img class="bg hidden md:block" src="./s4/bg.jpg" alt="bg">
    <img class="bg block md:hidden" src="./s4/bg_m.jpg" alt="bg">
    <div class="wrapper">
    <div class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">
      <h2 class="t">微笑公園</h2>
      <span class="right">高雄で最も繁華な中心地</span>
      <span class="hr"></span>
      <h3 class="sub">散步就到，高綠覆席</h3>
    </div>
      <div class="pic">
        <div data-aos="fade-up" data-aos-delay="200" class="item">
          <img src="./s4/pic01.jpg" alt="pic">
          <p class="font-['Noto_Sans_TC',sans-serif]">實景圖</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" class="item">
          <img src="./s4/pic02.jpg" alt="pic">
          <p class="font-['Noto_Sans_TC',sans-serif]">情境示意圖</p>
        </div>
      </div>
      
    <div data-aos="fade-up" data-aos-delay="600" class="desc">
      漫步於微笑公園與河堤公園之間，享受萬坪愜意綠地；無論晨跑、野餐， 還是親子遊憩，沉浸在自然氣息之中。綠意連接愛河沿岸，珍惜每一刻， 靜享日常的寧靜時光，讓思想悠然流轉，感受生活的從容與美好。
      <span class="link"></span><span class="jp">都市の中の緑、豊かな生活</span>
    </div>
    </div>
    <p class="b_text font-['Noto_Sans_TC',sans-serif]">情境示意圖</p>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4 {
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
    margin:0 0 1.5em;
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
    .desc{
    text-align: justify;
    width: sizem(310);
    bottom: sizem(60);
    display: flex;
    flex-wrap: wrap;
    align-self:baseline;
    gap: 1em;
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
    @media screen and (min-width: 768px) {
      width: calc(60% - size(45));
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