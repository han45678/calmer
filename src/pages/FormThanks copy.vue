<template>
    <div class="thanks">
        <img src="https://bcp.crwdcntrl.net/5/c=13578/b=78113418" width="1" height="1" />
        <a href="/">
            感謝您的預約<br>回首頁
        </a>
    </div>
</template>
<style lang="scss" scoped>.home{

}

.thanks {
    color: #fff;
    width: 100vw;
    height: 100vh;
  &::before{content: "";position:fixed;top: 0;left: 0;bottom: 0;right: 0;
background: url("@/section/form/bg.jpg");
background-size: cover;z-index: -1;

@media screen and (max-width: 767px) {
  background-image: url("@/section/form/bgm.jpg");
}
}
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