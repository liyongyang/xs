<template>
  <div class="good-container mx-auto">
    <div class="header wow animate__animated animate__fadeInDown">
      <div class="head flex justify-between items-center mx-auto">
        <li class="good-name">R17 系列紧凑型读码器</li>
        <div class="flex justify-between items-center">
          <router-link
            :to="{ path: '/goods/R17/product-params' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >产品参数</router-link
          >
          <router-link
            :to="{ path: '/goods/R17/download' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >下载</router-link
          >
          <router-link
            :to="{ path: '/goods/R17/qa' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >常见问题</router-link
          >
          <li class="btn-black mr-4 cursor-pointer" @click="openDialog()">
            联系我们
          </li>
        </div>
      </div>
    </div>
    <section class="good-wrapper mx-auto">
      <div class="content">
        <li
          class="flex items-center py-2 px-3 cursor-pointer wow animate__animated animate__fadeInUp"
        >
          <el-icon>
            <ArrowLeftBold />
          </el-icon>
          <span class="text-3.5 px-3" @click="goBack()">返回</span>
        </li>
        <div class="flex flex-wrap justify-between">
          <div class="banner-info flex flex-col justify-between">
            <div>
              <li class="title wow animate__animated animate__fadeInUp">
                R17 系列紧凑型读码器
              </li>
              <div
                class="flex flex-wrap wow animate__animated animate__fadeInUp"
              >
                <li
                  class="text-3.5 leading-5 m1 px-2 rounded-xl bg-gray-200"
                  v-for="i in 2"
                  :key="i"
                >
                  R17-E/S
                </li>
              </div>
              <li class="leading-10 wow animate__animated animate__fadeInUp">
                一键调试 · 读取稳定 · 部署灵活
              </li>
              <!-- 产品介绍 -->
              <li class="mt-3 wow animate__animated animate__fadeInUp"></li>
            </div>
            <el-button
              class="btn-black more wow animate__animated animate__fadeInUp"
              @click="openDialog()"
              >样机试用/演示</el-button
            >
          </div>
          <div class="banner-img flex flex-col justify-between">
            <el-carousel
              class="text-center wow animate__animated animate__fadeIn"
              height="360px"
            >
              <el-carousel-item v-for="(item, index) in 5" :key="index">
                <img
                  class="h80 w-auto mx-auto text-center"
                  :src="`/r17/slider/slider${index}.webp`"
                  alt=""
                />
              </el-carousel-item>
            </el-carousel>
            <div
              class="overflow-x-scroll overflow-y-hidden wow animate__animated animate__fadeInUp"
            >
              <div class="img-box flex">
                <div
                  class="img-item w30 flex-initial text-center"
                  v-for="(item, index) in 5"
                  :key="item"
                >
                  <img
                    class="h16"
                    :src="`/r17/slider/slider${index}.webp`"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="good-wrapper mx-auto">
      <li class="info-title mb-8 wow animate__animated animate__fadeInUp">
        产品特点
      </li>
      <div class="flex flex-wrap justify-between">
        <div
          class="msg-feat flex-initial wow animate__animated animate__fadeInUp"
          v-for="(item, index) in featList"
          :key="index"
        >
          <li class="title">{{ item.title }}</li>
          <li class="txt mt-3">{{ item.info }}</li>
        </div>
      </div>
    </section>
    <section class="good-wrapper mx-auto">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              一键调试
            </li>
          </template>
          <div class="flex justify-between">
            <div
              class="card wow animate__animated animate__fadeInUp"
              v-for="(item, i) in slider1"
              :key="i"
            >
              <img class="img" :src="item.img" alt="" />
              <div class="msg">
                <li class="title">{{ item.title }}</li>
                <li class="txt">{{ item.info }}</li>
              </div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              读取稳定
            </li>
          </template>
          <div class="card wow animate__animated animate__fadeInUp">
            <img class="img" src="/r17/dq0.webp" alt="" />
            <div class="msg">
              <li class="txt">10颗LED照明确保各种工况下清晰读码</li>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              部署灵活
            </li>
          </template>
          <div class="card wow animate__animated animate__fadeInUp">
            <img class="img" src="/r17/yy3.webp" alt="" />
            <div class="msg">
              <li class="txt">紧凑型一体化设计</li>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              专利算法
            </li>
          </template>
          <div class="card wow animate__animated animate__fadeInUp">
            <img class="img" src="/r17/zlsf0.webp" alt="" />
            <div class="msg">
              <li class="txt">超高性价比集成专利算法，具备通用解码性能</li>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              型号对比
            </li>
          </template>
          <tableSvg></tableSvg>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              典型应用
            </li>
          </template>
          <el-carousel
            :interval="3000"
            :autoplay="false"
            class="carousel-imgs"
            height="548px"
          >
            <el-carousel-item v-for="(items, index) in slider2" :key="index">
              <div class="card" v-for="(item, i) in items" :key="i">
                <img
                  class="img wow animate__animated animate__fadeInUp"
                  :src="item.img"
                  alt=""
                />
                <div class="msg wow animate__animated animate__fadeInUp">
                  <li class="title">{{ item.title }}</li>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-collapse-item>
      </el-collapse>
    </section>
  </div>
</template>

<script setup lang="ts">
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

import tableSvg from "@/assets/r17_table.svg";
const activeNames = ref([]);
const featList = [
  {
    title: "红光集成光",
    info: "一体化设计安装便捷",
  },
  {
    title: "丰富的IO接口",
    info: "以太网、RS232等 ",
  },
  {
    title: "多种触发",
    info: "支持软件触发/外部触发 ",
  },
  {
    title: "支持多种码制",
    info: "支持DM、QR码读取",
  },
  {
    title: "紧凑使读码器",
    info: "48*27*29mm",
  },
  {
    title: "多场景适配",
    info: "完美适配各种使用场景",
  },
];

const slider1 = [
  {
    img: `/r17/ts0.webp`,
    title: "自动调参",
    info: "超 86万 种参数配置，自动优化曝光、增益、滤镜等参数，应对挑战性读码情况",
  },
  {
    img: `/r17/ts1.webp`,
    title: "自动检测读码类型",
    info: "自动检测1D码/2D码，根据条码类型条区域定义条码模版库，提高读取速度",
  },
];
const slider2 = [
  [
    {
      img: `/r17/yy0.webp`,
      title: "锂电新能源",
    },
    {
      img: `/r17/yy1.webp`,
      title: "3C电子",
    },
  ],
  [
    {
      img: `/r17/yy2.webp`,
      title: "汽车制造",
    },
    {
      img: `/r17/yy3.webp`,
      title: "光伏新能源",
    },
  ],
];
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

const goBack = () => {
  router.push({ path: "/goods", query: { type: "R" } });
};

onMounted(() => {});
</script>
<style lang="scss" scoped>
.good-container {
  width: 100vw;
  margin-top: 89px;

  .header {
    background-color: #f4f4f4;
    text-align: center;

    .head {
      max-width: 1512px;
      padding: 16px 64px;
      align-items: center;
    }

    .good-name {
      color: #1d1c23;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
    }
  }

  .good-wrapper {
    max-width: 1512px;
    padding: 0 64px;

    .content {
      padding: 32px 0;

      .title {
        color: #1d1c23;
        font-size: 48px;
        font-weight: 500;
        line-height: normal;
      }

      .banner-info {
        width: 650px;
        height: 440px;
        text-wrap: wrap;
        padding: 32px 0;
        padding-top: 0;
        border-bottom: #dfe1e2 solid 1px;

        .more {
          width: 212px;
          padding: 10 32px;
        }
      }

      .banner-img {
        width: 674px;
        height: 440px;

        .img-box {
          max-width: 840px;

          .img-item {
            border: #dfe1e200 solid 1px;

            img {
              border: #dfe1e200 solid 1px;
            }
          }

          :hover {
            border: #dfe1e2 solid 1px;

            img {
              transform: scale(1.2);
              transition: all 0.3s ease-in-out;
              border: #dfe1e200 solid 1px;
            }
          }
        }
      }
    }

    .info-title {
      height: 44px;
      font-size: 32px;
      font-weight: 500;
      line-height: 44px;
    }

    .info-txt {
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 32px;
      color: #1d1c23cc;
    }

    .msg-feat {
      width: 420px;
      padding: 24px 16px;
      margin-bottom: 24px;
      border-top: #dfe1e2 solid 1px;

      .title {
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
      }

      .txt {
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
      }
    }

    :deep(.el-carousel) {
      width: 100%;
    }

    :deep(.el-carousel__item) {
      display: flex;
      justify-content: space-between;
      overflow-x: scroll;
    }

    .card {
      flex: 0 0 auto;
      width: 660px;
      cursor: pointer;
      word-wrap: break-word;
      white-space: pre-wrap;
      transition: all 0.5s;
      overflow-y: hidden;

      .img {
        width: 660px;
      }

      .jm-img {
        width: 360px;
      }

      .msg {
        margin: 32px 16px;

        .title {
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 32px;
          margin-bottom: 12px;
        }

        .txt {
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
        }
      }

      .jm-card {
        width: 360px;
      }
    }
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
    border-radius: 99px;
    padding: 10px 32px;
    color: #fff;
    background-color: #000;
    border: 1px solid #fefefe;
    &:hover {
      background-color: #414344;
    }
  }

  :deep(.el-collapse-item) {
  }

  :deep(.el-collapse-item__header) {
    height: 108px;
    padding: 32px 0;
  }
}
</style>
