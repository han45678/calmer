<template>
  <article class="s2">
    <img src="./s2/bg.jpg" alt="bg" class="bg">

    <img src="./s2/title.svg" alt="title" class="title hidden md:block" data-aos="fade-up">
    <img src="./s2/title_m.svg" alt="title" class="title block md:hidden" data-aos="fade-up">

    <img src="./s2/pic.png" alt="pic" class="pic" data-aos="fade-up" data-aos-delay="200">

    <img src="./s2/text.svg" alt="text" class="text hidden md:block" data-aos="fade-up" data-aos-delay="400">
    <img src="./s2/text_m.svg" alt="text" class="text block md:hidden" data-aos="fade-up" data-aos-delay="400">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  position: relative;

  .bg {
    width: 100%;
  }

  .title {
    width: 100%;
    max-width: size(1240);
    position: absolute;
    left: 0;
    right: 0;
    top: size(100);
    @media screen and (max-width: 767px) {
      max-width: calc(100% - 60px);
    }
  }

  .pic {
    width: 100%;
    max-width: size(355);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    @media screen and (max-width: 767px) {
      max-width: sizem(150);
      bottom: sizem(100);
    }
  }

  .text {
    width: 100%;
    max-width: size(1240);
    position: absolute;
    left: 0;
    right: 0;
    bottom: size(100);
    @media screen and (max-width: 767px) {
      max-width: calc(100% - 60px);
    }
  }

 
}
</style>
