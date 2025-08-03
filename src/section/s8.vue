<template>
  <article class="s8">
    <img class="bg hidden md:block" src="./s8/bg.jpg" alt="bg">
    <img class="bg block md:hidden" src="./s8/bg_m.jpg" alt="bg">
    <div class="wrapper">
      <div class="title" data-aos="fade-up">
        <img class="hidden md:block" src="./s8/title.svg" alt="title">
        <img class="block md:hidden" src="./s8/title_m.svg" alt="title">
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
      top: sizem(60);
    }

    .title {
      width: 100%;

      img {
        width: 100%;
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