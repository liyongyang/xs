<template>
  <div class="good-container mx-auto">
    <div class="header wow animate__animated animate__fadeInDown">
      <div class="head flex justify-between items-center mx-auto">
        <li class="good-name">RS100 工业读码器</li>
        <div class="flex justify-between items-center">
          <router-link
            :to="{ path: '/goods/RS100/product-params' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >产品参数</router-link
          >
          <router-link
            :to="{ path: '/goods/RS100/download' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >下载</router-link
          >
          <router-link
            :to="{ path: '/goods/RS100/qa' }"
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
                RS100 工业读码器
              </li>
              <div
                class="flex flex-wrap wow animate__animated animate__fadeInUp"
              >
                <li
                  class="text-3.5 leading-5 m1 px-2 rounded-xl bg-gray-200"
                  v-for="(item, i) in gdList"
                  :key="i"
                >
                  {{ item }}
                </li>
              </div>
              <li class="leading-10 wow animate__animated animate__fadeInUp">
                全新光学系统 · 一键调试+ · 精准无极调焦
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
              class="text-center wow animate__animated animate__fadeInUp"
              height="360px"
            >
              <el-carousel-item v-for="(item, index) in 6" :key="index">
                <img
                  class="h80 w-auto mx-auto text-center"
                  :src="`/rs100/slider/slider${index}.webp`"
                  alt=""
                />
              </el-carousel-item>
            </el-carousel>
            <div
              class="overflow-x-scroll overflow-y-hidden wow animate__animated animate__fadeInUp"
            >
              <div class="img-box flex flex">
                <div
                  class="img-item w30 flex-initial text-center"
                  v-for="(item, index) in 6"
                  :key="item"
                >
                  <img
                    class="h16"
                    :src="`/rs100/slider/slider${index}.webp`"
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
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              全新光学系统
              <span class="italic font-500 font- skew-x-6">X</span>-Tech™
            </li>
          </template>
          <div class="info-txt text-wrap">
            <li class="wow animate__animated animate__fadeInUp">
              3 × 3 × 3 灵活配置
            </li>
            <li class="wow animate__animated animate__fadeInUp">
              新算自研全新光学系统，通过内置 3
              种光源类型（直射光、偏振光、均匀光），加上 3 种可选配的镜头规格、3
              种可选配的光 源颜色，灵活组合以高可配置性应对不同场景需求
            </li>
          </div>
          <img
            class="wow animate__animated animate__fadeInUp"
            src="/rs100/banner.png"
            alt=""
          />
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              新算 <span class="italic font-500 font- skew-x-6">X</span>-Tech™
            </li>
          </template>
          <el-carousel
            :interval="3000"
            :autoplay="false"
            class="carousel-imgs"
            height="548px"
          >
            <el-carousel-item v-for="(items, index) in slider1" :key="index">
              <div
                class="card wow animate__animated animate__fadeInUp"
                v-for="(item, i) in items"
                :key="i"
              >
                <img class="img" :src="item.img" alt="" />
                <div class="msg">
                  <li class="title">{{ item.title }}</li>
                  <li class="txt">{{ item.info }}</li>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              一键调试+ OneClick Plus
            </li>
          </template>
          <el-carousel
            :interval="3000"
            :autoplay="false"
            class="carousel-imgs"
            height="548px"
          >
            <el-carousel-item v-for="(items, index) in slider2" :key="index">
              <div
                class="card wow animate__animated animate__fadeInUp"
                v-for="(item, i) in items"
                :key="i"
              >
                <img class="img" :src="item.img" alt="" />
                <div class="msg">
                  <li class="title">{{ item.title }}</li>
                  <li class="txt">{{ item.info }}</li>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              精准无极调焦
            </li>
          </template>
          <el-carousel
            :interval="3000"
            :autoplay="false"
            class="carousel-imgs"
            height="548px"
          >
            <el-carousel-item v-for="(items, index) in slider3" :key="index">
              <div
                class="card wow animate__animated animate__fadeInUp"
                v-for="(item, i) in items"
                :key="i"
              >
                <img class="img" :src="item.img" alt="" />
                <div class="msg">
                  <li class="title">{{ item.title }}</li>
                  <li class="txt">{{ item.info }}</li>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              便利功能
            </li>
          </template>
          <el-carousel
            :interval="3000"
            :autoplay="false"
            class="carousel-imgs"
            height="548px"
          >
            <el-carousel-item v-for="(items, index) in slider4" :key="index">
              <div
                class="card wow animate__animated animate__fadeInUp"
                v-for="(item, i) in items"
                :key="i"
              >
                <img class="img" :src="item.img" alt="" />
                <div class="msg">
                  <li class="title">{{ item.title }}</li>
                  <li class="txt">{{ item.info }}</li>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              型号对比
            </li>
          </template>
          <tableSvg></tableSvg>
        </el-collapse-item>
        <el-collapse-item name="7">
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
            <el-carousel-item v-for="(items, index) in slider5" :key="index">
              <div
                class="card wow animate__animated animate__fadeInUp"
                v-for="(item, i) in items"
                :key="i"
              >
                <img class="img" :src="item.img" alt="" />
                <div class="msg">
                  <li class="title">{{ item.title }}</li>
                  <li class="txt">{{ item.info }}</li>
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
import { useRouter } from "vue-router";

const router = useRouter();

import tableSvg from "@/assets/rs100_table.svg";
const activeNames = ref([]);
const gdList = ["RS100-M6", "RS100-M12", "RS100-M16"];
const slider1 = [
  [
    {
      img: `/rs100/xt0.png`,
      title: "超解析力镜头：读取远距离难读码样本",
      info: "使用具有精密光学设计的 12/16mm 8MP 镜头，发挥 100% CMOS 传感器性能，相比同级产品仅能发挥 70% CMOS 传感器性能的 1.2MP 普通镜头，RS100 解析力更强、成像质量更好、读取远距离难读码更稳定",
    },
    {
      img: `/rs100/xt1.png`,
      title: "大视野镜头：读取近距离多码样本",
      info: "使用 6mm 镜头，通过定制CMOS 传感器及加速硬核，读取条码的视野相比同级产品扩大 30%以上，能够一次性同时读取40个以上条码",
    },
  ],
  [
    {
      img: `/rs100/xt2.png`,
      title: "超解析力镜头：读取远距离难读码样本",
      info: "3种光源最佳解码实例，光源可选择交叠使用",
    },
  ],
];
const slider2 = [
  [
    {
      img: `/rs100/ts0.png`,
      title: "新升级一键调试，新增 Quick & Max 模式，读码更快更稳定",
      info: "更快速：解码速度翻倍 ,更稳定：极致稳定解码，更适合移动读取",
    },
    {
      img: `/rs100/ts1.png`,
      title: "N 种组合光源调试",
      info: "算法赋予读码器“智能大脑”，一键自适应无 限组合光源，能够自主根据读码样本、工况， 智能选择最优光源强度及光源类型，极大提升 解码性能 快速做出最优选择，算法应用不冗余更精简",
    },
  ],
  [
    {
      img: `/rs100/ts2.png`,
      title: "自适应算法",
      info: "自动匹配机器视觉算法引擎™的 CV 算法、AI 算法",
    },
    {
      img: `/rs100/ts3.png`,
      title: "自动调参",
      info: "超192万种参数配置，自动优化光源、 曝光、增益等参数，应对挑战性读码 情况",
    },
  ],
  [
    {
      img: `/rs100/ts4.png`,
      title: "自动检测条码类型",
      info: "自动检测 1D/2D 码，根据条码类型调 取预定义条码模版库，提高读取速度",
    },
  ],
];
const slider3 = [
  [
    {
      img: `/rs100/tj0.png`,
      title: "新算无极对焦环系统",
      info: "根据架设距离、1D/2D 码样本尺寸精确调焦，对焦距离可由 30mm 至 ∞ 无穷远",
    },
    {
      img: `/rs100/tj1.png`,
      title: "机械调焦",
      info: "手动机械调焦搭配无极对焦环系统能够极大提升操作准确性",
    },
  ],
];
const slider4 = [
  [
    {
      img: `/rs100/gn0.png`,
      title: "双航插支持丰富通信协议",
      info: "高标准双航插，稳定可靠，不用再担心脱落停机问题",
    },
    {
      img: `/rs100/gn1.png`,
      title: "格式化数据功能",
      info: "提供多种数据编辑格式，让数据管理更高效",
    },
  ],
  [
    {
      img: `/rs100/gn2.png`,
      title: "刻印验证功能",
      info: "保证 1D/2D 码质量，及时发现印刷缺陷，减少浪费",
    },
  ],
];
const slider5 = [
  [
    {
      img: `/rs100/yy0.png`,
      title: "易反光表面",
      info: "金属表面容易产生反光干扰，通过自适应组合光源的偏振光能够降低反射并实现稳定读码",
    },
    {
      img: `/rs100/yy1.png`,
      title: "移动读取",
      info: "强大的解码性能能够读取不断旋转的圆柱体锂电池",
    },
  ],
  [
    {
      img: `/rs100/yy2.png`,
      title: "多码同时读取",
      info: "SMT 料盘上的多个类型的 1D/2D 码，RS100能够同时读取",
    },
    {
      img: `/rs100/yy3.png`,
      title: "组网读取",
      info: "RS100支持组网功能，能够通过多台读码器同时读取快递盒不同面的 1D/2D 码，非常适合物流行业",
    },
  ],
  [
    {
      img: `/rs100/yy4.png`,
      title: "金属撞针",
      info: "RS100强大的解码性能可以解决金属零部件因撞针打标工艺质量差导致的无法解码、读取速度慢等问题",
    },
    {
      img: `/rs100/yy5.png`,
      title: "多种颜色树脂",
      info: "轮胎上的1D码通常较小，RS100具备大景深、大像素，能够稳定读取",
    },
  ],
  [
    {
      img: `/rs100/yy6.png`,
      title: "玻璃面读取",
      info: "玻璃上的 1D/2D 码对比度低且存在严重反光，通过偏振光读取，高效稳定",
    },
    {
      img: `/rs100/yy7.png`,
      title: "突发模式读码",
      info: "通过连续拍照，实现多次解码，有效解决高速物流线中漏拍问题，提高解码稳定性",
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
  router.push({ path: "/goods", query: { type: "RS" } });
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
          width: 840px;

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
</style>
