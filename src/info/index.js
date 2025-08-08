const caseName = "善寬靜の界"

export default {
    caseid: "eccd1852-d19e-4b3d-801f-2b33cef70420",
    //case_code: "dgm1",
    address1: "",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address: "高雄市左營區文育路2號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14725.846960352646!2d120.31029334065508!3d22.673848859844757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e054395a07741%3A0x8d373f9a07842aaa!2z5ZaE5a-s6Z2c44Gu55WM!5e0!3m2!1szh-TW!2stw!4v1754474926117!5m2!1szh-TW!2stw",//嵌入的
    googleLink: "https://maps.app.goo.gl/VPPvTGP9yBv8XZGb8",//導航網址
    phone: "07-3452888",
    fbLink: "https://facebook.com/61578713282064",
    fbMessage: "https://m.me/61578713282064",
    caseName: caseName,
    houseInfos: [
        /*
        */
        ["投資興建", "善寬建設股份有限公司"],
        ["建築設計", "原東聯合建築師事務所"],
        ["行銷企劃", "自售"],
        /*
        ["行銷企劃", "海沃創意行銷"], 
        ["經&ensp;紀&ensp;人", "林閔鴻(107)基市字第00167號"],
        */
    ],
    gtmCode: ["GTM-593752CZ"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        //title: "預約增值",
       // subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
       // subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
        room_type: {
          title: "需求房型",
          hold: "請選擇房型",
          option: ["三房", "四房"],
          bypass:false,
        },
        budget: {
          title: "預約時段",
          hold: "請選擇時段",
          option: ["平日上午","平日下午","平日晚上","假日全天","全時段皆可聯絡"],
          bypass:false, //必填開啟使用
        },
        /*
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]平日上午
平日下午
平日晚上
假日全天
全時段皆可聯絡
      },
        */
  },

    navList: [
        {
            name: "璽寓核心",
            target: ".s2",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "尊榮捷境",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "制霸機能",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "名匠薈萃",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "榮耀四冠",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "重大建設",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "菁英磁場",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "立即來電",
            target: ".contact-info",
            offset: "",
            type: 'btn'
        },
        {
              name: "地圖導航",
              target: ".gmap",
              offset: "",
              type: "btn",
        }
        ,{
            name: "立即預約",
            target: ".order",
            offset: "",
            type: 'btn'
        },
        /*
    */
    ],
}