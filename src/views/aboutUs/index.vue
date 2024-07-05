<template>
  <div class="pg-container">
    <section class="banner flex justify-center items-center">
      <div class="text-wrapper text-center flex flex-col items-center">
        <li class="banner-title wow animate__animated animate__fadeInUp">{{ bannerInfo1.title }}</li>
        <li class="banner-msg wow animate__animated animate__fadeInUp" v-for="(item, idx) in bannerInfo1.msg"
          :key="idx">
          {{ item }}
        </li>
      </div>
    </section>
    <section class="section-wrapper text-center">
      <li class="title wow animate__animated animate__fadeInUp">{{ section1.title }}</li>
      <div class="flex justify-between flex-wrap">
        <div class="card m1 text-left" v-for="(item, index) in section1.info" :key="index">
          <li class="card-name wow animate__animated animate__fadeInUp">{{ item.name }}</li>
          <li class="card-key wow animate__animated animate__fadeInUp">{{ item.key }}</li>
          <li class="card-icon wow animate__animated animate__fadeInUp">
            <img :src="item.icon" alt="">
          </li>
        </div>
      </div>
    </section>
    <section class="banner2 mx-auto flex justify-center items-center"
      :style="{ 'background-image': 'url(' + bannerInfo2.bgImg + ')' }">
      <div class="text-wrapper text-center flex flex-col items-center">
        <!-- <li class="banner-title">{{ bannerInfo2.title }}</li> -->
        <li class="banner-msg wow animate__animated animate__fadeInUp" v-for="(item, idx) in bannerInfo2.msg"
          :key="idx">
          {{ item }}
        </li>
      </div>
    </section>
    <section class="section-wrapper bg-white text-center">
      <li class="title wow animate__animated animate__fadeInUp">{{ section2.title }}</li>
      <div class="flex justify-center flex-wrap"></div>
    </section>
    <section class="section-wrapper bg-white text-center">
      <li class="title wow animate__animated animate__fadeInUp">{{ section3.title }}</li>
      <div class="flex justify-center flex-wrap"></div>
    </section>
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from "vue";
const bannerInfo1 = {
  title: "新算技术",
  msg: [
    `新算技术，深耕于工业机器视觉传感器领域，具备完全独立自主知识产权的解码识读算法。公司以研发为导向，在视觉算法、硬件设计上已做到完全的独立自主，目前已向市场推出多系列高性能固定式工业读码器、手持式工业读码器等多条产品线，在 3C 电子、汽车、新能源及半导体等工业制造领域积累了丰富的行业服务经验。`,
  ],
};
const section1 = {
  title: "公司概况",
  info: [
    {
      key: "员工人数",
      name: "70+",
      icon: "/aboutUs/icon-svg0.svg",
    },
    {
      key: " 研发投入",
      name: "3000+ 万",
      icon: "/aboutUs/icon-svg1.svg",
    },
    {
      key: "融资额",
      name: "亿元级",
      icon: "/aboutUs/icon-svg2.svg",
    },
    {
      key: "深度合作客户",
      name: "30+",
      icon: "/aboutUs/icon-svg3.svg",
    },
  ],
};
const bannerInfo2 = {
  title: "",
  msg: [
    `专注工业机器视觉，以读码产品开启智能制造`,
  ],
  bgImg: "/aboutUs/banner2.webp",
};
const section2 = {
  title: "企业历程",
  timeList: [
    {
      time: "2016",
      child: [
        {
          time: "4月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "6月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "7月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "11月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "12月",
          mgs: "研究部署工业机器视觉算法",
        },
      ],
    },
    {
      time: "2016",
      child: [
        {
          time: "4月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "6月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "7月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "11月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "12月",
          mgs: "研究部署工业机器视觉算法",
        },
      ],
    },
    {
      time: "2019",
      child: [
        {
          time: "4月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "6月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "7月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "11月",
          mgs: "研究部署工业机器视觉算法",
        },
        {
          time: "12月",
          mgs: "研究部署工业机器视觉算法",
        },
      ],
    },
  ],
};
const section3 = {
  title: "奖项与资质",
};
onMounted(() => { });
</script>
<style lang='scss' scoped>
.pg-container {
  color: #fff;
  position: relative;
  width: 100vw;
  height: 100%;
  background-color: #F4F4F4;
  overflow-x: hidden;
  padding-top: 89px;
  line-height: normal;

  .banner {
    width: 100vw;
    height: 480px;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-image: url("/aboutUs/aboutUs.webp");

    &::before {
      content: "";
      position: absolute;
      width: 100vw;
      height: 480px;
      background: #0000005a;
    }

    .text-wrapper {
      width: 1000px;
      text-wrap: wrap;
      z-index: 9;

      .banner-title {
        font-size: 56px;
        font-weight: 600;
        line-height: 78.4px;
        letter-spacing: 0.08em;
        margin-bottom: 24px;
      }

      .banner-msg {
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
      }
    }
  }

  .banner2 {
    position: relative;
    width: 1384px;
    height: 480px;
    margin: 0 auto;

    &::before {
      content: "";
      position: absolute;
      width: 1384px;
      height: 480px;
      top: 0;
      background: #0000005a;
    }

    .text-wrapper {
      width: 1000px;
      text-wrap: wrap;
      z-index: 9;

      .banner-title {
        font-size: 56px;
        line-height: normal;
        font-weight: 600;
        letter-spacing: 4.48px;
        margin-bottom: 24px;
      }

      .banner-msg {
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 44px;
      }
    }
  }

  .section-wrapper {
    width: 1384px;
    padding-top: 128px;
    padding-bottom: 64px;
    margin: 0 auto;
    color: #1d1c23;

    .title {
      font-size: 48px;
      font-weight: 600;
      letter-spacing: 3.84px;
      margin-bottom: 128px;
    }

    .card {
      padding: 32px;
      border-left: #A7A7B0 1px solid;

      .card-name {
        font-size: 88px;
        font-weight: 600;
      }

      .card-key {
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 32px;
      }
    }
  }
}
</style>