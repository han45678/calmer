<template>
  <article class="s7" ref="s7">
    <img class="bg" src="./s7/bg.jpg" alt="bg">
    <div class="wrapper">
      <div class="text">
        <h3>
          <span>
            <img src="./s7/title.svg" alt="title">
            <img class="light" src="./s7/light.svg" alt="light">
          </span>
        </h3>
        <h4><img src="./s7/s_title.svg" alt="s_title"></h4>
        <p><img src="./s7/text.svg" alt="text"></p>
      </div>
      <div class="architect hidden md:block">
        <div class="item">
          <img src="./s7/1.png" alt="architect_pic">
        </div>
        <div class="item">
          <img src="./s7/2.png" alt="architect_pic">
        </div>
        <div class="item">
          <img src="./s7/3.png" alt="architect_pic">
        </div>
        <div class="item">
          <img src="./s7/4.png" alt="architect_pic">
        </div>
        <div class="item">
          <img src="./s7/5.png" alt="architect_pic">
        </div>
      </div>
      <div class="architect block md:hidden">

      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s7 { 
  position: relative;
  .bg {
    width: 100%;
  }

  .wrapper {
    width: 100%;
    left: 0;
    right: 0;
    position: absolute;
    top: size(100);

    .text{
      width: 100%;
      max-width: size(1240);
      margin-bottom: size(125);
      margin-left: auto;
      margin-right: auto;
      h3{
        span{
          position: relative;
          .light{
            position: absolute;
          }
        }
      }
      h4{
          margin-top: size(15);
          margin-bottom: size(35);
          img{
            width: 100%;
          }
        }
        p{
          img{
            width: 100%;
          }
        }
    }

    .architect {
      display: flex;
      justify-content: center;
      
    }
  }
}
</style>