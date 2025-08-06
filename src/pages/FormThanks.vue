<template>
    <div class="thanks font-['Noto_Serif_TC',serif]">
        <img src="https://bcp.crwdcntrl.net/5/c=13578/b=78113418" width="1" height="1" />
        
            <a href="/"><img  src="@/section/s1/logo.svg" class="logo" /> </a><br>
感謝您的預約，將由專人與您聯繫<br>
誠摯邀請您蒞臨鑑賞<br><br>
微笑公園×巨蛋3-4房<br>
—— 靜謐藏心 城隱雅居<br><br><a href="/">回首頁</a>
    </div>
</template>
<style lang="scss" scoped>

.thanks {
    color: #fff;
    width: 100vw;
    height: 100vh;
    /*
    background: url('//h35.banner.tw/img/thank_bg.png');
    background-size: cover;
    background-position: center;
    */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0;
  &::before{content: "";position:fixed;top: 0;left: 0;bottom: 0;right: 0;
background: url("@/section/form/bg.jpg");
background-size: cover;z-index: -1;

@media screen and (max-width: 767px) {
  background-image: url("@/section/form/bgm.jpg");
}
}
  .logo{
    width:16vw;
    margin-bottom: 1.5em;
  @media screen and (min-width: 768px) {
    width:4vw;
  }
  
  }


    a {
        .img {
            position: absolute;
            opacity: 1;
        }
        .img-hover {
            opacity: 0;
        }
        &:hover {
            color: #ff0;
            .img {
                opacity: 0;
            }
            .img-hover {
                opacity: 1;
            }
        }
    }
}
</style>

<script>
export default {
    name: 'formThanks',
    components: {},
    methods: {},
}
</script>