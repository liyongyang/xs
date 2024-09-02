<template>
  <div class="good-container mx-auto">
    <el-affix :offset="offset">
      <div class="header wow animate__animated animate__fadeInDown">
        <div class="head flex justify-between items-center mx-auto">
          <li v-if="!isSmallSize" class="good-name">
            {{ h920.name }}
          </li>
          <div class="flex justify-between items-center">
            <router-link
              :to="{ path: '/goods/H920/product-params' }"
              :class="isSmallSize ? '' : 'px-3'"
              class="py-2 mr-4 cursor-pointer"
            >
              {{ t("common.headLink.t1") }}
            </router-link>
            <router-link
              :to="{ path: '/goods/H920/download' }"
              class="py-2 px-3 mr-4 cursor-pointer"
              >{{ t("common.headLink.t2") }}
            </router-link>
            <!-- <router-link
            :to="{ path: '/goods/H920/qa' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >{{ t("common.headLink.t3") }}
          </router-link> -->
            <li class="btn-black mr-4 cursor-pointer" @click="openDialog()">
              {{ t("common.headLink.t4") }}
            </li>
          </div>
        </div>
      </div>
    </el-affix>
    <section class="good-wrapper mx-auto">
      <div class="content">
        <li
          class="flex items-center py-2 px-3 cursor-pointer wow animate__animated animate__fadeInUp"
        >
          <el-icon>
            <ArrowLeftBold />
          </el-icon>
          <span class="text-3.5 px-3" @click="goBack()">{{
            t("common.back")
          }}</span>
        </li>
        <div class="flex flex-wrap justify-between">
          <div class="banner-info flex flex-col justify-between">
            <div>
              <li class="title wow animate__animated animate__fadeInUp">
                {{ h920.name }}
              </li>
              <div
                class="flex flex-wrap wow animate__animated animate__fadeInUp"
              >
                <li class="text-3.5 leading-5 m1 px-2 rounded-xl bg-gray-200">
                  {{ h920.type }}
                </li>
              </div>
              <li
                class="wow animate__animated animate__fadeInUp"
                :class="isSmallSize ? 'leading-6 mt-4' : 'leading-10'"
              >
                {{ h920.tip }}
              </li>
              <!-- 产品介绍 -->
              <li class="mt-3 wow animate__animated animate__fadeInUp"></li>
            </div>
            <el-button
              class="btn-black more wow animate__animated animate__fadeInUp"
              @click="openDialog()"
              >{{ t("common.footer.info1.txt1") }}
            </el-button>
          </div>
          <div class="banner-img flex flex-col justify-between">
            <!-- <el-carousel
              class="text-center wow animate__animated animate__fadeInUp"
              height="360px"
            >
              <el-carousel-item v-for="(item, index) in 4" :key="index">
                <img
                  class="h80 w-auto mx-auto text-center"
                  :src="`/h920/slider/slider${index}.webp`"
                  alt=""
                />
              </el-carousel-item>
            </el-carousel> -->
            <img
              class="act-img w-auto mx-auto text-center"
              :src="`/h920/slider/slider${actImg}.webp`"
              alt=""
            />
            <el-carousel
              v-if="isSmallSize"
              :autoplay="false"
              class="carousel-imgs"
              height="90px"
              arrow="always"
            >
              <el-carousel-item>
                <img
                  class="h16"
                  @click="actImg = index"
                  v-for="(i, index) in 3"
                  :key="index"
                  :src="`/h920/slider/slider${index}.webp`"
                  alt=""
                  srcset=""
                />
              </el-carousel-item>
              <el-carousel-item>
                <img
                  class="h16"
                  @click="actImg = index + 3"
                  v-for="(i, index) in 3"
                  :key="index"
                  :src="`/h920/slider/slider${index + 3}.webp`"
                  alt=""
                  srcset=""
                />
              </el-carousel-item>
              <el-carousel-item>
                <img
                  class="h16"
                  @click="actImg = index + 3"
                  v-for="(i, index) in 3"
                  :key="index"
                  :src="`/h920/slider/slider${index + 6}.webp`"
                  alt=""
                  srcset=""
                />
              </el-carousel-item>
            </el-carousel>
            <div
              v-else
              class="overflow-x-scroll overflow-y-hidden wow animate__animated animate__fadeInUp"
            >
              <div class="img-box flex flex mx-1">
                <div
                  class="img-item w30 flex-initial text-center mx-1"
                  :class="actImg === index ? 'act-img-item bg-gray-200' : ''"
                  v-for="(item, index) in 9"
                  :key="item"
                  @click="actImg = index"
                >
                  <img
                    class="h18"
                    :src="`/h920/slider/slider${index}.webp`"
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
              {{ h920.b1 }}
            </li>
          </template>
          <div
            class="info-txt text-wrap wow animate__animated animate__fadeInUp"
          >
            <li>{{ h920.tip1 }}</li>
            <li>{{ h920.tip1_2 }}</li>
          </div>
          <div v-if="isSmallSize">
            <div v-for="(items, index) in h920.info1" :key="index">
              <div
                class="card jm-card wow animate__animated animate__fadeInUp"
                v-for="(item, i) in items"
                :key="i"
              >
                <img class="jm-img" :src="item.img" alt="" />
                <div class="msg">
                  <li class="title">{{ item.title }}</li>
                </div>
              </div>
            </div>
          </div>
          <el-carousel
            v-else
            :interval="3000"
            :autoplay="false"
            class="carousel-imgs"
            :height="isSmallSize ? '368px' : '500px'"
            arrow="always"
          >
            <el-carousel-item v-for="(items, index) in h920.info1" :key="index">
              <div
                class="card jm-card wow animate__animated animate__fadeInUp"
                v-for="(item, i) in items"
                :key="i"
              >
                <img class="jm-img" :src="item.img" alt="" />
                <div class="msg">
                  <li class="title">{{ item.title }}</li>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              {{ h920.b2 }}
            </li>
          </template>
          <div
            class="info-txt text-wrap wow animate__animated animate__fadeInUp"
          >
            <li>{{ h920.tip2 }}</li>
            <li>{{ h920.tip2_2 }}</li>
          </div>
          <div
            class="flex justify-between overflow-x-scroll overflow-y-hidden"
            :class="isSmallSize ? 'flex-col' : ''"
          >
            <div
              class="card wow animate__animated animate__fadeInUp"
              v-for="(item, i) in h920.info2"
              :key="i"
            >
              <img class="tz-img" :src="item.img" alt="" />
              <div class="msg">
                <li class="txt">{{ item.info }}</li>
              </div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              {{ h920.b3 }}
            </li>
          </template>
          <div
            class="info-txt text-wrap wow animate__animated animate__fadeInUp"
          >
            <li>{{ h920.tip3 }}</li>
            <li>
              {{ h920.tip3_2 }}
            </li>
          </div>
          <div class="card wow animate__animated animate__fadeInUp">
            <img class="img" src="/h920/xl0.webp" alt="" />
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              {{ h920.b4 }}
            </li>
          </template>
          <div
            class="info-txt text-wrap wow animate__animated animate__fadeInUp"
          >
            <li>{{ h920.tip4 }}</li>
          </div>
          <div class="card wow animate__animated animate__fadeInUp">
            <img class="img" src="/h920/sj.webp" alt="" />
          </div>
        </el-collapse-item>
        <!-- <el-collapse-item name="4">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              专利算法
            </li>
          </template>
          <div class="card wow animate__animated animate__fadeInUp">
            <img class="img" src="/h920/zlsf.webp" alt="" />
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
        </el-collapse-item> -->
        <el-collapse-item name="6">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              {{ h920.b5 }}
            </li>
          </template>
          <div
            class="flex justify-between overflow-x-scroll overflow-y-hidden"
            :class="isSmallSize ? 'flex-col' : ''"
          >
            <div
              class="card wow animate__animated animate__fadeInUp"
              v-for="(item, i) in h920.info5"
              :key="i"
            >
              <img class="img" :src="item.img" alt="" />
              <div class="msg">
                <li class="title">{{ item.title }}</li>
              </div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </section>
  </div>
</template>

<script setup lang="ts">
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import { nextTick, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
const { t, locale } = useI18n();

const router = useRouter();
const route = useRoute();
const isSmallSize = ref(window.innerWidth < 576);
const actImg = ref(0);
const activeNames = ref([]);
const offset = ref(88);
const h920 = {
  name: t("h920.name"),
  type: t("h920.type"),
  tip: t("h920.tip"),
  b1: t("h920.b1"),
  tip1: t("h920.tip1"),
  tip1_2: t("h920.tip1_2"),
  info1: [
    [
      {
        img: `/h920/jm0.webp`,
        title: t("h920.info1[0][0].title"),
      },
      {
        img: `/h920/jm1.webp`,
        title: t("h920.info1[0][1].title"),
      },
      {
        img: `/h920/jm2.webp`,
        title: t("h920.info1[0][2].title"),
      },
    ],
    [
      {
        img: `/h920/jm3.webp`,
        title: t("h920.info1[1][0].title"),
      },
      {
        img: `/h920/jm4.webp`,
        title: t("h920.info1[1][1].title"),
      },
      {
        img: `/h920/jm5.webp`,
        title: t("h920.info1[1][2].title"),
      },
    ],
  ],
  b2: t("h920.b2"),
  tip2: t("h920.tip2"),
  tip2_2: t("h920.tip2_2"),
  info2: [
    {
      img: `/h920/mz0.webp`,
      title: t("h920.info2[0][0].title"),
    },
    {
      img: `/h920/mz1.webp`,
      title: t("h920.info2[0][1].title"),
    },
  ],
  b3: t("h920.b3"),
  tip3: t("h920.tip3"),
  tip3_2: t("h920.tip3_2"),
  b4: t("h920.b4"),
  tip4: t("h920.tip4"),
  b5: t("h920.b5"),
  info5: [
    {
      img: `/h920/yy0.webp`,
      title: t("h920.info5[0].title"),
    },
    {
      img: `/h920/yy1.webp`,
      title: t("h920.info5[1].title"),
    },
  ],
};
const slider1 = [
  [
    {
      img: `/h920/jm0.webp`,
      title: "自动检测读码类型",
    },
    {
      img: `/h920/jm1.webp`,
      title: "自动检测读码类型",
    },
    {
      img: `/h920/jm2.webp`,
      title: "自动检测读码类型",
    },
  ],
  [
    {
      img: `/h920/jm3.webp`,
      title: "自动检测读码类型",
    },
    {
      img: `/h920/jm4.webp`,
      title: "自动检测读码类型",
    },
    {
      img: `/h920/jm5.webp`,
      title: "自动检测读码类型",
    },
  ],
];
const slider2 = [
  {
    img: `/h920/mz0.webp`,
    info: "H920 指哪读哪，所见即所扫",
  },
  {
    img: `/h920/mz1.webp`,
    info: "传统读码器瞄准偏移，需重复扫描",
  },
];
const slider3 = [
  {
    img: `/h920/yy0.webp`,
    title: "汽车制造",
  },
  {
    img: `/h920/yy1.webp`,
    title: "汽车制造",
  },
];

const openDialog = () => {
  addDialog({
    title: "",
    width: isSmallSize.value ? "358px" : "480px",
    props: {},
    footer: false,
    component: popModules.SY,
    callBack: (config) => {
      //当弹窗任务结束后，调用父页面的回掉函数。（比如	我新增完成了需要刷新列表页面）
      if (config) {
      }
    },
  });
};

const goBack = () => {
  router.push({ path: "/goods", query: { type: "H" } });
};

const headerShow = () => {
  nextTick(() => {
    const temp = window.scrollY || document.documentElement.scrollTop;
    offset.value = temp < 88 ? 88 - temp : 0.5;
    console.log(`output->headRef`, temp, offset.value);
  });
};
onMounted(() => {
  window.addEventListener("scroll", headerShow);
});
</script>
<style lang="scss" scoped>
.good-container {
  width: 100vw;
  height: auto;

  .header {
    background-color: #f4f4f4;
    text-align: center;

    .head {
      width: 1384px;
      padding: 16px 0;
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
    max-width: 1384px;
    padding: 0;

    .content {
      margin-top: 88px;
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
        word-wrap: break-word;
        white-space: normal;
        padding: 32px 0;
        padding-top: 0;
        border-bottom: #dfe1e2 solid 1px;

        .more {
          width: 212px;
          padding: 10 32px;
        }
      }

      .banner-img {
        width: 650px;
        height: 440px;

        .act-img {
          width: 563px;
        }
        .img-box {
          .img-item {
            padding-top: 10px;
            border: #dfe1e200 solid 1px;

            img {
              border: #dfe1e200 solid 1px;
            }
          }

          :hover {
            border: #dfe1e2 solid 1px;

            img {
              transition: all 0.3s ease-in-out;
              border: #dfe1e200 solid 1px;
            }
          }
          .act-img-item {
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
      width: 687px;
      word-wrap: break-word;
      white-space: normal;
      transition: all 0.5s;
      overflow-y: hidden;

      .tz-img,
      .img {
        width: 687px;
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
        }

        .txt {
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
        }
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

:deep(.el-collapse-item__header) {
  height: 108px;
  padding: 32px 0;
  padding-right: 32px;
  background-color: inherit;
}
:deep(.el-collapse-item__content) {
  background-color: #fff;
}
:deep(.el-carousel__arrow) {
  top: 95%;
  background-color: #292929;
  color: #ffffff;
  border: 1px solid #868686;
  &:hover {
    background-color: #868686;
  }
}
:deep(.el-carousel__arrow--left) {
  position: absolute;
  right: 60px;
  left: auto;
  bottom: 20px;
}

:deep(.el-carousel__arrow--right) {
  position: absolute;
  right: 0;
  bottom: 20px;
}
@media (max-width: 576px) {
  .good-container {
    .header {
      font-size: 14px;
      .head {
        width: 358px;
      }
    }
    .good-wrapper {
      width: 358px;
      .content {
        padding: 0;
        padding-bottom: 32px;
        font-size: 14px;
        .back {
          display: flex;
          padding: 12px 0;
        }
        .title {
          font-size: 20px;
          margin-bottom: 12px;
        }
        .banner-info {
          width: 358px;
          height: auto;
          border-bottom: none;
        }
        .banner-img {
          width: 358px;
          height: 320px;
          .act-img {
            width: 358px;
            transform: scale(1);
          }
          .img-box {
            max-width: 358px;
          }
        }
      }
      .info-title {
        font-size: 18px;
        height: 32px;
        line-height: 32px;
      }

      .info-txt {
        font-size: 14px;
        margin-bottom: 12px;
      }
      .card {
        flex: 0 0 auto;
        width: 340px;
        .tz-img {
          width: 320px;
          margin-right: 8px;
        }
        .jm-img {
          width: 280px;
        }
        .img {
          width: 320px;
        }
        .msg {
          margin: 0 16px;
          .title {
            font-size: 16px;
            margin-bottom: 0;
          }
          .txt {
            font-size: 14px;
          }
        }
      }
    }
  }
  :deep(.el-collapse-item__header) {
    font-size: 24px;
    width: 358px;
    height: 64px;
    padding: 16px 0;
    background-color: inherit;
  }
  .btn-black {
    height: auto;
    font-size: 14px;
    line-height: 20px;
    border-radius: 99px;
    padding: 10px 20px;
    color: #fff;
    background-color: #000;
    border: 1px solid #fefefe;
    &:hover {
      background-color: #414344;
    }
  }
  :deep(.el-collapse-item__content) {
    background-color: #fff;
    padding-bottom: 12px;
  }
  :deep(.el-carousel__arrow) {
    transform: scale(0.8);
    top: 70%;
  }
  .el-carousel.el-carousel--horizontal.carousel-imgs {
    height: 120px;
  }
}
</style>
