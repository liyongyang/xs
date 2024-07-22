<script setup>
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import router from "@/router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, onUnmounted, reactive, ref } from "vue";
const modules = [Autoplay, Navigation, EffectCoverflow];

const sliderNum = ref(3);
const coverflowEffect = ref({
  rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
  stretch: -260, //每个slide之间的拉伸值，越大slide靠得越紧。
  depth: 500, //slide的位置深度。值越大z轴距离越远，看起来越小。
  modifier: 1.5, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
  slideShadows: false, //开启slide阴影。默认 true。
});
const isSmallSize = ref(window.innerWidth < 900);

const techInfo = reactive({
  title: "创新技术，算无止境",
  list: [
    {
      icon: `/home/se2-icon1.png`,
      t1: "机器视觉算法引擎™",
      t2: "完全自主研发解码算法 IP，性能强劲、解码稳定",
      hover: false,
    },
    {
      icon: `/home/se2-icon2.png`,
      t1: "一键调试 OneClick",
      t2: "不止是调光，更是自适应算法调参，达到最优解码",
      hover: false,
    },
    {
      icon: `/home/se2-icon3.png`,
      t1: "全新光学系统",
      t2: "多种镜头规格、光源颜色及光源类型，灵活组合以高可配置性应对不同场景需求",
      hover: false,
    },
  ],
});
const carouselInfo = [
  {
    img: "/home/carousel1.png",
    title: "紧凑型 R 系列读码器",
    xh: ["R172 E/S", "R170 E/S"],
    type: "R",
  },
  {
    img: "/home/carousel2.png",
    title: "紧凑型 R 系列读码器",
    xh: ["R275-A", "R270-A"],
    type: "R",
  },
  {
    img: "/home/carousel3.png",
    title: "双航插 RS 系列读码器",
    xh: ["RS100", "RS300"],
    type: "RS",
  },
  {
    img: "/home/carousel4.webp",
    title: "手持式 H 系列读码器",
    xh: ["H920", "H930", "H620"],
    type: "H",
  },
];
const dtList = [
  {
    time: "2024-04-15",
    title: "专注先进工业传感器，「宁波新算」完成Pre-A轮融资｜早起看早期",
    link: "/detail/1",
  },
  {
    time: "2024-04-23",
    title:
      "「新算科技」获数千万元天使轮融资，由红杉中国种子基金独家投资 | 早起看早期",
    link: "/detail/2",
  },
  {
    time: "2024-06-19",
    title: "VSDC Innovators Awards 2024 创新奖揭晓！新算技术获行业权威认可",
    link: "/detail/3",
  },
];
const carouselAct = ref();

const onSlideChange = (swiper) => {
  const v = swiper.slides[2].swiperSlideIndex;
  carouselAct.value = carouselInfo[v];
};

const toDetail = (key) => {
  router.push({ path: "/goods", query: { type: key } });
};

const toGd = (key) => {
  router
    .push({
      path: `goods/${key}`,
    })
    .then(() => {
      window.scrollTo(0, 0);
    });
};

const toTechnical = () => {
  router.push({ path: "/technical" });
};

const openDialog = () => {
  addDialog({
    title: "",
    width: "480px",
    props: {},
    footer: false,
    component: popModules.SY,
    callBack: (config) => {
      //当弹窗任务结束后，调用父页面的回掉函数。（比如	我新增完成了需要刷新列表页面）
      console.log("回调函数", config);
      if (config) {
        console.log(`output->config------`, config);
      }
    },
  });
};
const goDetail = (value) => {
  if (!value) return;
  router.push({ path: value });
};
onMounted(() => {
  carouselAct.value = carouselInfo[0];
  sliderNum.value = isSmallSize.value ? 1 : 3;

  if (isSmallSize) {
    coverflowEffect.value = {
      rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
      stretch: -260, //每个slide之间的拉伸值，越大slide靠得越紧。
      depth: 500, //slide的位置深度。值越大z轴距离越远，看起来越小。
      modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
      slideShadows: false, //开启slide阴影。默认 true。
    };
  }
});

onUnmounted(() => {});
</script>

<template>
  <div class="pg-container">
    <section class="section-wrapper banner1">
      <div class="pg1_frame-wrapper pt-30 center">
        <div
          class="pg1_frame-text-wrapper wow animate__animated animate__fadeInUp"
        >
          <li class="gd-type">R275-A</li>
          <h2 class="gd-name">紧凑型 R 系列读码器</h2>
          <li class="gd-ts">强大稳定解码力 · 一键调试 · 超小尺寸</li>
          <el-button class="btn-white" @click="toGd('R275A')"
            >了解更多</el-button
          >
          <el-button class="btn-black" @click="openDialog()">试用</el-button>
        </div>
      </div>
    </section>
    <section class="section-wrapper banner2">
      <div class="pg1_frame-wrapper center">
        <div
          class="pg1_frame-text-wrapper wow animate__animated animate__fadeInUp"
        >
          <li class="gd-type">RS100</li>
          <h2 class="gd-name">双航插 RS 系列读码器</h2>
          <li class="gd-ts">
            全新光学系统
            <span class="italic skew-x-6">X</span>
            -Tech™ · 一键调试+ · 精准无极调焦
          </li>
          <el-button class="btn-white" @click="toGd('RS100')"
            >了解更多</el-button
          >
          <el-button class="btn-black" @click="openDialog()">试用</el-button>
        </div>
      </div>
    </section>
    <section class="section-wrapper banner3">
      <div class="pg1_frame-wrapper center">
        <div
          class="pg1_frame-text-wrapper wow animate__animated animate__fadeInUp"
        >
          <li class="gd-type">H920</li>
          <h2 class="gd-name">手持式 H 系列读码器</h2>
          <li class="gd-ts">强大稳定解码力 · 同轴瞄准 · 训练功能</li>
          <el-button class="btn-white" @click="toGd('H920')"
            >了解更多</el-button
          >
          <el-button class="btn-black" @click="openDialog()">试用</el-button>
        </div>
      </div>
    </section>
    <section class="section-text-wrapper text-center bg-white w-full h100">
      <li class="title wow animate__animated animate__fadeInUp">
        {{ techInfo.title }}
      </li>
      <div class="card flex justify-center flex-wrap">
        <div
          @mouseenter="item.hover = true"
          @mouseleave="item.hover = false"
          v-for="(item, index) in techInfo.list"
          :key="index"
          :class="'bg-se2-' + index"
          class="card-box flex flex-col justify-between text-left wow animate__animated animate__fadeInUp"
        >
          <img class="max-w-24" :src="item.icon" alt="" />
          <li
            v-if="!item.hover"
            class="default-txt animate__animated animate__fadeInUp"
          >
            {{ item.t1 }}
          </li>
          <li v-else class="hover-txt animate__animated animate__fadeInUp">
            {{ item.t2 }}
          </li>
        </div>
        <!-- <div
          class="card-box bg-se2-2 flex flex-col justify-between text-left wow animate__animated animate__fadeInUp"
        >
          <img class="max-w-24" src="/home/se2-icon2.png" alt="" />
          <li class="default-txt">一键调试 OneClick</li>
          <li class="hover-txt">
            不止是调光，更是自适应算法调参，达到最优解码
          </li>
        </div>
        <div
          class="card-box bg-se2-3 flex flex-col justify-between text-left wow animate__animated animate__fadeInUp"
        >
          <img class="max-w-24" src="/home/se2-icon3.png" alt="" />
          <li class="default-txt">
            全新光学系统 <span class="italic skew-x-6">X</span>-Tech™
          </li>
          <li class="hover-txt">
            多种镜头规格、光源颜色及光源类型，灵活组合以高可配置性应对不同场景需求
          </li>
        </div> -->
      </div>
      <el-button
        class="btn-white wow animate__animated animate__fadeInUp"
        @click="toTechnical()"
        >了解更多</el-button
      >
    </section>
    <section
      class="section-text-wrapper container-pg4 bg-color2 text-center bg-white w-full"
    >
      <li class="title wow animate__animated animate__fadeInUp">
        业务出发，场景覆盖
      </li>
      <li class="text wow animate__animated animate__fadeInUp">
        多矩阵的产品储备，适配不同业务需求
      </li>
      <!-- :autoplay="{ delay: 3000, disableOnInteraction: false }" -->
      <Swiper
        class="swiper-card"
        :modules="modules"
        :centeredSlides="true"
        :effect="'coverflow'"
        :coverflow-effect="coverflowEffect"
        :loop="true"
        :pagination="swiperOption"
        :navigation="true"
        :observe-parents="true"
        :observer="true"
        :slides-per-view="sliderNum"
        :space-between="0"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="(item, index) in carouselInfo" :key="index">
          <div class="card-item">
            <img class="carousel-img" :src="item.img" alt="" srcset="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <!-- <el-carousel
        class="mt-10 mb-25 px-16"
        :interval="4000"
        type="card"
        height="520px"
        @change="carouselChange"
      >
        <el-carousel-item v-for="item in carouselInfo" :key="item">
          <div class="card-item">
            <img class="carousel-img" :src="item.img" alt="" srcset="" />
          </div>
        </el-carousel-item>
      </el-carousel> -->
      <div v-if="carouselAct">
        <li class="text font-600 wow animate__animated animate__fadeInUp">
          {{ carouselAct.title }}
        </li>
        <li class="my-4 space-x-8 wow animate__animated animate__fadeInUp">
          <span
            class="text-4 leading-5"
            v-for="(item, index) in carouselAct.xh"
            :key="index"
          >
            {{ item }}
          </span>
        </li>
        <el-button
          class="btn-black wow animate__animated animate__fadeInUp"
          @click="toDetail(carouselAct.type)"
          >了解详情</el-button
        >
      </div>
    </section>
    <section
      class="section-text-wrapper container-pg5 text-center bg-white w-full"
    >
      <li class="title wow animate__animated animate__fadeInUp">
        新算动态，关于我们
      </li>
      <div class="card-news flex justify-center flex-wrap">
        <div
          class="card-new-item wow animate__animated animate__fadeInUp"
          v-for="(item, index) in dtList"
          :key="index"
        >
          <li class="txt">{{ item.time }}</li>
          <li class="title">
            {{ item.title }}
          </li>
          <li class="txt more" @click="goDetail(item.link)">阅读更多</li>
        </div>
      </div>
      <el-button class="btn-white">查看更多</el-button>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.pg-container {
  color: #fff;
  position: relative;
  width: 100vw;
  min-height: 680px;
  background-color: #000;
  overflow-x: hidden;

  .section-wrapper {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    .pg1_frame-wrapper {
      position: relative;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 100vh;
      width: 100vw;
      z-index: 3;

      .pg1_frame-text-wrapper {
        color: #fff;
        margin: 0 auto;
        text-align: center;

        .gd-type {
          font-size: 48px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: 3.84px;
        }

        .gd-name {
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 32px;
        }

        .gd-ts {
          color: #9eaab0;
          font-size: 18px;
          line-height: 24px;
          margin: 16px auto;
        }

        .btn-white {
          font-size: 14px;
          line-height: 20px;
          color: #1d1c23;
          padding: 10px 32px;
          border-radius: 99px;
          background-color: #fff;
          &:hover {
            background-color: #f4f4f4;
          }
        }

        .btn-black {
          height: auto;
          font-size: 14px;
          line-height: 20px;
          padding: 10px 32px;
          border-radius: 99px;
          color: #fff;
          background-color: #111112;
          border: 1px solid #fefefe;
          &:hover {
            background-color: #414344;
          }
        }
      }
    }
  }

  .banner1 {
    // background-attachment: fixed;
    background-image: url("/home/r275a.webp");
  }

  .banner2 {
    // background-attachment: fixed;
    background-image: url("/home/rs100.webp");
  }

  .banner3 {
    // background-attachment: fixed;
    background-image: url("/home/h920.webp");
  }

  .section-text-wrapper {
    color: #1d1c23;
    height: auto;
    padding: 128px 0;

    .title {
      font-size: 48px;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 3.84px;
    }

    .text {
      font-size: 24px;
      line-height: 32px;
    }

    .card {
      padding: 128px 0;
      .card-box {
        width: 456px;
        height: 400px;
        text-wrap: wrap;
        padding: 56px;
        margin: 4px;

        .default-txt {
          font-size: 28px;
          font-style: normal;
          font-weight: 600;
          line-height: 40px;
          transition: display 0.6s ease-in-out;
        }

        .hover-txt {
          display: none;
          transition: display 0.6s ease-in-out;
        }

        &:hover {
          .default-txt {
            display: none;
          }

          .hover-txt {
            display: block;
          }
        }
      }

      .bg-se2-0 {
        transition: all 0.5s ease-in-out;
        background-size: cover;
        background-position: center center;
        background-image: url("/home/bg-cse2-1.png");

        &:hover {
          background-image: url("/home/bg-cse2-1-act.png");
        }
      }

      .bg-se2-1 {
        transition: all 0.5s ease-in-out;
        background-size: cover;
        background-position: center center;
        background-image: url("/home/bg-cse2-2.png");

        &:hover {
          background-image: url("/home/bg-cse2-2-act.png");
        }
      }

      .bg-se2-2 {
        transition: all 0.5s ease-in-out;
        background-size: cover;
        background-position: center center;
        background-image: url("/home/bg-cse2-3.png");

        &:hover {
          background-image: url("/home/bg-cse2-3-act.png");
        }
      }
    }

    .banner4 {
      width: 1384px;
      height: 680px;
      background-size: cover;
      background-position: center center;
      background-image: url("/home/banner4.png");
    }

    .btn-white {
      font-size: 14px;
      line-height: 20px;
      padding: 10px 32px;
      border-radius: 99px;
      color: #1d1c23;
      background-color: #fff;
      border: 1px solid #1d1c23;
      &:hover {
        background-color: #f4f4f4;
      }
    }

    .btn-black {
      height: auto;
      width: 212px;
      font-size: 14px;
      line-height: 20px;
      padding: 10px 32px;
      border-radius: 99px;
      color: #fff;
      background-color: #1d1c23;
      border: 1px solid #fefefe;
      &:hover {
        background-color: #414344;
      }
    }
    .swiper-card {
      width: 1384px;
      padding: 64px 0;
      position: relative;
      :deep(.swiper-button-prev) {
        font-size: 24px;
        color: #9eaab0;
        width: 48px;
        height: 48px;
        background-color: #efefef;
        border-radius: 100%;
        transition: all 0.5s ease-in-out;
        &:hover {
          background-color: #dedede;
        }
        &::after {
          font-size: 24px;
        }
      }
      :deep(.swiper-button-next) {
        font-size: 24px;
        color: #9eaab0;
        width: 48px;
        height: 48px;
        background-color: #efefef;
        border-radius: 100%;
        transition: all 0.5s ease-in-out;
        &:hover {
          background-color: #dedede;
        }
        &::after {
          font-size: 24px;
        }
      }
    }
    .card-item {
      text-align: center;
      .carousel-img {
        width: 380px;
      }
    }
  }

  .container-pg4 {
    height: 1080px;
    padding: 128px 0;
    background: #f4f4f4;
  }

  .container-pg5 {
    padding-top: 128px;
    padding-bottom: 64px;

    .card-news {
      padding: 64px 0;

      .card-new-item {
        text-align: left;
        width: 424px;
        margin: 0 4px;
        height: 244px;
        padding: 24px 16px;
        border-top: 1px solid #3d4448;
        background: #f4f4f4;
        text-wrap: wrap;

        .txt {
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 12px;
        }

        .title {
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
          letter-spacing: 0;
          min-height: 132px;
        }

        .more {
          cursor: pointer;
          // padding-top: 24px;
        }
      }
    }
  }

  .bg-color2 {
    background-color: #f4f4f4;
  }

  :deep(.el-button) {
    height: auto;
  }
}
@media (max-width: 576px) {
  .pg-container {
    overflow-x: auto;
    .section-wrapper {
      background-size: cover;
      background-position: center center;
      .pg1_frame-wrapper {
        .pg1_frame-text-wrapper {
          text-wrap: wrap;
          padding-top: 50px;
          .gd-type {
            font-size: 24px;
          }
          .gd-name {
            font-size: 20px;
          }
          .gd-ts {
            width: 315px;
            font-size: 18px;
            margin-top: 8px;
            margin-bottom: 32px;
          }
        }
      }
    }
    .section-text-wrapper {
      padding: 64px 0;
      .title {
        font-size: 28px;
      }
      .text {
        font-size: 18px;
        line-height: 24px;
      }
      .card {
        padding: 48px 0;
        .card-box {
          width: 358px;
          height: 200px;
          padding: 24px;
          margin: 0;
          margin-bottom: 4px;
          img {
            width: 48px;
          }
          .default-txt {
            font-size: 24px;
          }
        }
      }
      .swiper-card {
        width: 358px;
        padding: 24px 0;
        position: relative;
        :deep(.swiper-button-prev) {
          font-size: 14px;
          color: #9eaab0;
          width: 32px;
          height: 32px;
          background-color: #efefef;
          border-radius: 100%;
          transition: all 0.5s ease-in-out;
          &:hover {
            background-color: #dedede;
          }
          &::after {
            font-size: 14px;
          }
        }
        :deep(.swiper-button-next) {
          font-size: 14px;
          color: #9eaab0;
          width: 32px;
          height: 32px;
          background-color: #efefef;
          border-radius: 100%;
          transition: all 0.5s ease-in-out;
          &:hover {
            background-color: #dedede;
          }
          &::after {
            font-size: 14px;
          }
        }
      }
      .card-item {
        text-align: center;
        .carousel-img {
          width: 280px;
        }
      }
    }
    .container-pg4 {
      height: auto;
      padding: 64px 0;
      background: #f4f4f4;
    }
    .container-pg5 {
      padding: 64px 0;
      .card-news {
        padding: 24px 0;
        .card-new-item {
          width: 358px;
          height: 172px;
          margin: 0;
          margin-bottom: 8px;
          .title {
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0;
            min-height: 80px;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
:deep(.el-carousel__mask) {
  background: inherit;
}

:deep(.el-carousel__item) {
  background: inherit;

  .is-active {
    img {
      transform: scale(1.2);
    }
  }
}
</style>
