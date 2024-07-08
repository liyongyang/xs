<template>
  <div class="pg-container">
    <section class="banner flex justify-center items-center">
      <div class="text-wrapper text-center flex flex-col items-center">
        <li class="banner-title wow animate__animated animate__fadeInUp">
          {{ bannerInfo1.title }}
        </li>
        <li class="banner-msg wow animate__animated animate__fadeInUp" v-for="(item, idx) in bannerInfo1.msg"
          :key="idx">
          {{ item }}
        </li>
      </div>
    </section>
    <section class="section-wrapper text-center">
      <li class="title wow animate__animated animate__fadeInUp">
        {{ section1.title }}
      </li>
      <div class="flex justify-between flex-wrap">
        <div class="card m1 text-left" v-for="(item, index) in section1.info" :key="index">
          <li class="card-name wow animate__animated animate__fadeInUp">
            {{ item.name }}
          </li>
          <li class="card-key wow animate__animated animate__fadeInUp">
            {{ item.key }}
          </li>
          <li class="card-icon wow animate__animated animate__fadeInUp">
            <img :src="item.icon" alt="" />
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
    <section class="his-wrapper bg-white text-center">
      <li class="title wow animate__animated animate__fadeInUp">
        {{ section2.title }}
      </li>
      <div class="time flex justify-start">
        <span @click="changeTime(item)" class="time-tab cursor-pointer animate__animated animate__fadeInUp"
          v-for="(item, index) in section2.timeList" :key="index"
          :class="actTimeInfo.time === item.time ? 'act-tiem-tab' : ''">
          {{ item.time }}
        </span>
      </div>
      <div v-if="actTimeInfo" class="time-info relative flex justify-start flex-wrap text-left">
        <!-- <el-carousel
          :interval="3000"
          :autoplay="false"
          class="carousel-time"
          width="100%"
          height="302px"
        >
          <el-carousel-item>
            <div
              class="time-info-item wow animate__animated animate__pulse animate__slow animate__infinite"
              v-for="(item, index) in actTimeInfo.child"
              :key="index"
            >
              <li class="txt">
                {{ item }}
              </li>
            </div>
          </el-carousel-item>
        </el-carousel> -->
        <div class="time-info-item wow animate__animated animate__pulse animate__slow"
          v-for="(item, index) in actTimeInfo.child" :key="index">
          <li class="txt">
            {{ item }}
          </li>
        </div>
      </div>
    </section>
    <section class="section-wrapper bg2 bg-white text-center">
      <li class="title wow animate__animated animate__fadeInUp">
        {{ section3.title }}
      </li>
      <div class="flex justify-between flex-wrap">
        <img class="jx-item hover:shadow-lg" v-for="(i, index) in 5" :key="i" :src="'/aboutUs/jx' + index + '.png'"
          alt="" />
      </div>
    </section>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from "vue";
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
  msg: [`专注工业机器视觉，以读码产品开启智能制造`],
  bgImg: "/aboutUs/banner2.webp",
};
const section2 = {
  title: "企业历程",
  timeList: [
    {
      time: "2016",
      child: ["研究部署工业机器视觉算法"],
    },
    {
      time: "2019",
      child: ["深圳新算成立"],
    },
    {
      time: "2021",
      child: ["推出 紧凑型 R 系列旗舰款 R275-A"],
    },
    {
      time: "2022",
      child: [
        "Pre-A轮融资 顺为资本, 华方资本, 红杉中国",
        "推出高性能手持式 H9X 系列",
      ],
    },
    {
      time: "2023",
      child: ["总部宁波新算正式成立", "天使轮融资 顶级风投 红杉中国种子基金"],
    },
    {
      time: "2024",
      child: ["推出 双航插 RS 系列 旗舰款RS300"],
    },
  ],
};
const actTimeInfo = ref(section2.timeList[0]);
const section3 = {
  title: "奖项与资质",
};

const changeTime = (v: any) => {
  actTimeInfo.value = v;
};
onMounted(() => { });
</script>
<style lang='scss' scoped>
.pg-container {
  color: #fff;
  position: relative;
  width: 100vw;
  height: 100%;
  background-color: #f4f4f4;
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
    margin-bottom: 128px;

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

  .his-wrapper {
    width: 100vw;
    height: 790px;
    padding-top: 128px;
    padding-bottom: 64px;
    margin: 0 auto;
    color: #1d1c23;
    background-color: #fff;

    .time {
      width: 1384px;
      margin: 0 auto;
      padding: 0 64px;
      margin-bottom: 64px;
      border-bottom: 1px #dfe1e2 solid;

      .time-tab {
        margin-right: 128px;
        font-size: 32px;
        font-weight: 600;
        line-height: 44px;
        padding: 16px 0;
      }

      .act-tiem-tab {
        border-bottom: 2px #1d1c23 solid;
      }
    }

    .time-info {
      width: 1400px;
      margin: 0 auto;
      border-top: #000 1px solid;

      .carousel-time {
        width: 100%;
      }
    }

    .time-info-item {
      width: 252px;
      padding-top: 16px;
      color: #1d1c23;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;

      &::before {
        position: absolute;
        top: -5px;
        display: block;
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background-color: #000;
      }

      .txt {
        text-align: left;
        width: 210px;
        text-wrap: wrap;
      }
    }
  }

  .section-wrapper {
    width: 1384px;
    padding-top: 128px;
    padding-bottom: 64px;
    margin: 0 auto;
    color: #1d1c23;
    transform: scale(0.97);

    .jx-item {
      widows: 270px;
      transition: transform 0.4s ease;

      &:hover {
        transform: scale(1.03);
      }
    }

    .card {
      padding: 32px;
      border-left: #a7a7b0 1px solid;

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

  .bg2 {
    background-color: #f4f4f4;
  }

  .title {
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 3.84px;
    margin-bottom: 128px;
  }
}
</style>
