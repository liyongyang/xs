<template>
  <div class="good-container mx-auto">
    <div class="header wow animate__animated animate__fadeInDown">
      <div class="head flex justify-between items-center mx-auto">
        <li v-if="!isSmallSize" class="good-name">{{ r17.name }}</li>
        <div class="flex justify-between items-center">
          <router-link
            :to="{ path: '/goods/R17/product-params' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >{{ t("common.headLink.t1") }}</router-link
          >
          <router-link
            :to="{ path: '/goods/R17/download' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >{{ t("common.headLink.t2") }}</router-link
          >
          <router-link
            :to="{ path: '/goods/R17/qa' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >{{ t("common.headLink.t3") }}</router-link
          >
          <li class="btn-black mr-4 cursor-pointer" @click="openDialog()">
            {{ t("common.headLink.t4") }}
          </li>
        </div>
      </div>
    </div>
    <section class="good-wrapper mx-auto">
      <div class="content">
        <li
          class="back items-center cursor-pointer wow animate__animated animate__fadeInUp"
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
                {{ r17.name }}
              </li>
              <div
                class="flex flex-wrap wow animate__animated animate__fadeInUp"
              >
                <li class="text-3.5 leading-5 m1 px-2 rounded-xl bg-gray-200">
                  R172-E/S
                </li>
                <li class="text-3.5 leading-5 m1 px-2 rounded-xl bg-gray-200">
                  R170-E/S
                </li>
              </div>
              <li class="leading-10 wow animate__animated animate__fadeInUp">
                {{ r17.tip }}
              </li>
              <!-- 产品介绍 -->
              <li class="mt-3 wow animate__animated animate__fadeInUp"></li>
            </div>
            <el-button
              class="btn-black more wow animate__animated animate__fadeInUp"
              @click="openDialog()"
              >{{ t("common.footer.info1.txt1") }}</el-button
            >
          </div>
          <div class="banner-img flex flex-col justify-between">
            <!-- <el-carousel
              :autoplay="false"
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
            </el-carousel> -->
            <img
              class="act-img w-auto mx-auto text-center wow animate__animated animate__fadeIn"
              :src="`/r17/slider/slider${actImg}.webp`"
              alt=""
            />
            <div
              class="overflow-x-scroll overflow-y-hidden wow animate__animated animate__fadeInUp"
            >
              <div class="img-box flex">
                <div
                  class="img-item w30 flex-initial text-center mx-1"
                  :class="actImg === index ? 'act-img-item bg-gray-200' : ''"
                  v-for="(item, index) in 5"
                  :key="item"
                  @click="actImg = index"
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
    <!-- <section class="good-wrapper mx-auto">
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
    </section> -->
    <section class="good-wrapper mx-auto">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              {{ r17.b1 }}
            </li>
          </template>
          <div class="flex justify-between overflow-x-scroll overflow-y-hidden">
            <div
              class="card wow animate__animated animate__fadeInUp"
              v-for="(item, i) in r17.info1"
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
              {{ r17.b2 }}
            </li>
          </template>
          <div class="card wow animate__animated animate__fadeInUp">
            <img class="img" src="/r17/dq0.webp" alt="" />
            <div class="msg">
              <li class="txt">{{ r17.info2 }}</li>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              {{ r17.b3 }}
            </li>
          </template>
          <div class="card wow animate__animated animate__fadeInUp">
            <img class="img" src="/r17/yy3.webp" alt="" />
            <div class="msg">
              <li class="txt">{{ r17.info3 }}</li>
            </div>
          </div>
        </el-collapse-item>
        <!-- <el-collapse-item name="4">
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
        </el-collapse-item> -->
        <!-- <el-collapse-item name="5">
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
              {{ r17.b4 }}
            </li>
          </template>
          <el-carousel
            :autoplay="false"
            class="carousel-imgs"
            :height="isSmallSize ? '220px' : '548px'"
            arrow="always"
          >
            <el-carousel-item v-for="(items, index) in r17.info4" :key="index">
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
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t, locale } = useI18n();
const router = useRouter();
const route = useRoute();
const isSmallSize = ref(window.innerWidth < 576);

const actImg = ref(0);
const activeNames = ref([]);
const r17 = {
  name: t("r17.name"),
  tip: t("r17.tip"),
  b1: t("r17.b1"),
  info1: [
    {
      img: `/r17/ts0.webp`,
      title: t("r17.info1[0].title"),
      info: t("r17.info1[0].info"),
    },
    {
      img: `/r17/ts1.webp`,
      title: t("r17.info1[1].title"),
      info: t("r17.info1[1].info"),
    },
  ],
  b2: t("r17.b2"),
  info2: t("r17.info2"),
  b3: t("r17.b3"),
  info3: t("r17.info3"),
  b4: t("r17.b4"),
  info4: [
    [
      {
        img: `/r17/yy0.webp`,
        title: t("r17.info4[0][0].title"),
      },
      {
        img: `/r17/yy1.webp`,
        title: t("r17.info4[0][1].title"),
      },
    ],
    [
      {
        img: `/r17/yy2.webp`,
        title: t("r17.info4[1][0].title"),
      },
      {
        img: `/r17/yy3.webp`,
        title: t("r17.info4[1][1].title"),
      },
    ],
  ],
};

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
      max-width: 1384px;
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
        width: 674px;
        height: 440px;

        .act-img {
          width: 600px;
        }
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
      white-space: normal;
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
    padding: 10px 24px;
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
        .back {
          display: flex;
          padding: 12px 0;
        }
        .title {
          font-size: 24px;
        }
        .banner-info {
          width: 358px;
          height: auto;
          border-bottom: none;
        }
        .banner-img {
          width: 358px;
          height: 300px;
          .act-img {
            width: 358px;
          }
          .img-box {
            max-width: 358px;
          }
        }
      }
      .info-title {
        font-size: 24px;
      }
      .card {
        flex: 0 0 auto;
        width: 342px;
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

    :deep(.el-collapse-item__header) {
      font-size: 24px;
      width: 358px;
      height: 64px;
      padding: 16px 0;
      background-color: inherit;
    }
  }
}
</style>
