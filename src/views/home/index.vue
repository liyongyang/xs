<script setup>
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import router from '@/router';
import { onMounted, onUnmounted, ref } from "vue";

const carouselInfo = [
  {
    img: "/home/carousel1.png",
    title: "紧凑型 R 系列读码器",
    xh: ["R275-A", "R270-A"],
  },
  {
    img: "/home/carousel2.png",
    title: "紧凑型 R 系列读码器",
    xh: ["R172 E/S", "R170 E/S"],
  },
  {
    img: "/home/carousel3.png",
    title: "双航插 RS 系列读码器",
    xh: ["RS100", "RS200", "RS2000"],
  },
  {
    img: "/home/carousel4.png",
    title: "手持式 H 系列读码器",
    xh: ["H920", "H930", "H620"],
  },
];
const carouselAct = ref(carouselInfo[0]);

const carouselChange = (v) => {
  console.log(`output->v`, v);
  carouselAct.value = carouselInfo[v];
};

const toGd = (key) => {
  router
    .push({
      path: `goods/${key}`,
    })
    .then(() => {
      window.scrollTo(0, 0);
    });
}

const openDialog = () => {
  addDialog({
    title: '',
    width: '480px',
    props: {},
    footer: false,
    component: popModules.SY,
    callBack: (config) => {
      //当弹窗任务结束后，调用父页面的回掉函数。（比如	我新增完成了需要刷新列表页面）
      console.log("回调函数", config)
      if (config) {
        console.log(`output->config------`, config)
      }
    }
  })
}
onMounted(() => { });

onUnmounted(() => { });
</script>

<template>
  <div class="pg-container">
    <section class="section-wrapper banner1">
      <div class="pg1_frame-wrapper pt-30 center">
        <div class="pg1_frame-text-wrapper ">
          <li class="gd-type">R275-A</li>
          <h2 class="gd-name">紧凑型 R 系列读码器</h2>
          <li class="gd-ts">强大稳定解码力 · 一键调试 · 超小尺寸</li>
          <el-button class="btn-white" @click="toGd('R275A')">了解更多</el-button>
          <el-button class="btn-black" @click="openDialog()">试用</el-button>
        </div>
      </div>
    </section>
    <section class="section-wrapper banner2">
      <div class="pg1_frame-wrapper center">
        <div class="pg1_frame-text-wrapper wow animate__animated animate__fadeInUp">
          <li class="gd-type">RS300</li>
          <h2 class="gd-name">双航插 RS 系列读码器</h2>
          <li class="gd-ts">
            全新光学系统
            <span class="italic skew-x-6">X</span>
            -Tech™ · 一键调试+ · 精准无极调焦
          </li>
          <el-button class="btn-white" @click="toGd('RS300')">了解更多</el-button>
          <el-button class="btn-black" @click="openDialog()">试用</el-button>
        </div>
      </div>
    </section>
    <section class="section-wrapper banner3">
      <div class="pg1_frame-wrapper center">
        <div class="pg1_frame-text-wrapper wow animate__animated animate__fadeInUp">
          <li class="gd-type">H92</li>
          <h2 class="gd-name">手持式 H 系列读码器</h2>
          <li class="gd-ts">强大稳定解码力 · 同轴瞄准 · 训练功能</li>
          <el-button class="btn-white">了解更多</el-button>
          <el-button class="btn-black" @click="openDialog()">试用</el-button>
        </div>
      </div>
    </section>
    <section class="section-text-wrapper py-32 text-center bg-white w-full h100">
      <li class="title wow animate__animated animate__fadeInUp">创新技术，算无止境</li>
      <div class="card py-32 flex justify-center flex-wrap">
        <div class="card-box bg-se2-1 flex flex-col justify-between text-left wow animate__animated animate__fadeInUp">
          <img class="max-w-24" src="/home/se2-icon1.png" alt="" />
          <li class="default-txt animate__animated animate__fadeInUp">机器视觉算法引擎™</li>
          <li class="hover-txt animate__animated animate__fadeInUp">完全自主研发解码算法 IP，性能强劲、解码稳定</li>
        </div>
        <div class="card-box bg-se2-2 flex flex-col justify-between text-left wow animate__animated animate__fadeInUp">
          <img class="max-w-24" src="/home/se2-icon2.png" alt="" />
          <li class="default-txt">一键调试 OneClick</li>
          <li class="hover-txt">不止是调光，更是自适应算法调参，达到最优解码</li>
        </div>
        <div class="card-box bg-se2-3 flex flex-col justify-between text-left wow animate__animated animate__fadeInUp">
          <img class="max-w-24" src="/home/se2-icon3.png" alt="" />
          <li class="default-txt">
            全新光学系统 <span class="italic skew-x-6">X</span>-Tech™ ·
          </li>
          <li class="hover-txt">多种镜头规格、光源颜色及光源类型，灵活组合以高可配置性应对不同场景需求</li>
        </div>
      </div>
      <el-button class="btn-white wow animate__animated animate__fadeInUp">了解更多</el-button>
    </section>
    <section class="section-text-wrapper container-pg4 bg-color2 text-center bg-white w-full">
      <li class="title wow animate__animated animate__fadeInUp">业务出发，场景覆盖</li>
      <li class="text wow animate__animated animate__fadeInUp">充足的设备储备，适配不同业务需求</li>
      <el-carousel style="background: inherit" class="mt-10 mb-25 px-16 wow animate__animated animate__fadeInUp"
        :interval="5000" type="card" height="520px" indicator-position="none" motion-blur @change="carouselChange">
        <el-carousel-item v-for="item in carouselInfo" :key="item">
          <img class="carousel-img" :src="item.img" alt="" srcset="" />
        </el-carousel-item>
      </el-carousel>
      <li class="text font-600 wow animate__animated animate__fadeInUp">{{ carouselAct.title }}</li>
      <li class="my-4 space-x-8 wow animate__animated animate__fadeInUp">
        <span class="text-4 leading-5" v-for="(item, index) in carouselAct.xh" :key="index">
          {{ item }}
        </span>
      </li>
      <el-button class="btn-black wow animate__animated animate__fadeInUp">了解详情</el-button>
    </section>
    <section class="section-text-wrapper container-pg5 text-center bg-white w-full">
      <li class="title wow animate__animated animate__fadeInUp">新算动态，关于我们</li>
      <div class="card-news flex justify-center flex-wrap">
        <div class="card-new-item wow animate__animated animate__fadeInUp" v-for="i in 3" :key="i">
          <li class="txt">2024-04-15</li>
          <li class="title">
            专注先进工业传感器，「宁波新算」完成Pre-A轮融资｜早起看早期
          </li>
          <li class="txt more">阅读更多</li>
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
    background-size: cover;
    background-position: center center;

    .pg1_frame-wrapper {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 100vh;
      width: 100vw;
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 3;

      .pg1_frame-text-wrapper {
        color: #fff;
        margin: 0 auto;
        padding-top: 100px;
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
        }

        .btn-black {
          height: auto;
          font-size: 14px;
          line-height: 20px;
          padding: 10px 32px;
          border-radius: 99px;
          color: #fff;
          background-color: inherit;
          border: 1px solid #fefefe;
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
    background-image: url("/home/rs300.webp");
  }

  .banner3 {
    // background-attachment: fixed;
    // background-image: url("/home/banner3.webp");
  }

  .section-text-wrapper {
    color: #1d1c23;
    height: auto;

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

      .bg-se2-1 {
        transition: all 0.5s ease-in-out;
        background-size: cover;
        background-position: center center;
        background-image: url("/home/bg-cse2-1.png");

        &:hover {
          background-image: url("/home/bg-cse2-1-act.png");
        }
      }

      .bg-se2-2 {
        transition: all 0.5s ease-in-out;
        background-size: cover;
        background-position: center center;
        background-image: url("/home/bg-cse2-2.png");

        &:hover {
          background-image: url("/home/bg-cse2-2-act.png");
        }
      }

      .bg-se2-3 {
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
    }

    .carousel-img {
      width: 520px;
      height: auto;
    }
  }

  .container-pg4 {
    height: 1080px;
    padding: 128px;
    background: #F4F4F4;
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
        background: #F4F4F4;
        text-wrap: wrap;

        .txt {
          font-size: 14px;
          line-height: 20px;
        }

        .title {
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
          letter-spacing: 0;
          padding: 24px 0;
        }

        .more {
          padding-top: 24px;
        }
      }
    }
  }

  .bg-color2 {
    background-color: #F4F4F4;
  }

  :deep(.el-button) {
    height: auto;
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
