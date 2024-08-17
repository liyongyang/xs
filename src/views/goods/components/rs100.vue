<template>
  <div class="good-container mx-auto">
    <div class="header wow animate__animated animate__fadeInDown">
      <div class="head flex justify-between items-center mx-auto">
        <li v-if="!isSmallSize" class="good-name">{{ rs100.name }}</li>
        <div class="flex justify-between items-center">
          <router-link
            :to="{ path: '/goods/RS100/product-params' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >{{ t("common.headLink.t1") }}</router-link
          >
          <router-link
            :to="{ path: '/goods/RS100/download' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >{{ t("common.headLink.t2") }}</router-link
          >
          <router-link
            :to="{ path: '/goods/RS100/qa' }"
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
                {{ rs100.name }}
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
                {{ rs100.tip }}
              </li>
              <!-- 产品介绍 -->
              <li class="mt-3 wow animate__animated animate__fadeInUp"></li>
            </div>
            <div v-if="!isSmallSize" class="flex">
              <el-button
                class="btn-black more wow animate__animated animate__fadeInUp"
                @click="openDialog()"
                >{{ t("common.footer.info1.txt1") }}</el-button
              >
              <el-button
                class="btn-black more wow animate__animated animate__fadeInUp"
                >观看视频</el-button
              >
            </div>
          </div>
          <div class="banner-img flex flex-col justify-between">
            <!-- <el-carousel
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
            </el-carousel> -->
            <img
              class="act-img w-auto mx-auto text-center wow animate__animated animate__fadeIn"
              :src="`/rs100/slider/slider${actImg}.webp`"
              alt=""
            />
            <div
              class="overflow-x-scroll overflow-y-hidden wow animate__animated animate__fadeInUp"
            >
              <div class="img-box flex flex">
                <div
                  class="img-item w30 flex-initial text-center mx-1"
                  :class="actImg === index ? 'act-img-item bg-gray-200' : ''"
                  v-for="(item, index) in 6"
                  :key="item"
                  @click="actImg = index"
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
          <div v-if="isSmallSize" class="flex mt-8">
            <el-button
              class="btn-black more wow animate__animated animate__fadeInUp"
              @click="openDialog()"
              >{{ t("common.footer.info1.txt1") }}</el-button
            >
            <el-button
              class="btn-black more wow animate__animated animate__fadeInUp"
              >观看视频</el-button
            >
          </div>
        </div>
      </div>
    </section>
    <section class="good-wrapper mx-auto">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              {{ rs100.b1 }}
              <span class="italic font-500 skew-x-6">X</span>-Tech™
            </li>
          </template>
          <div class="info-txt text-wrap">
            <li class="wow animate__animated animate__fadeInUp">
              {{ rs100.tip1 }}
            </li>
          </div>
          <img
            class="tz-img wow animate__animated animate__fadeInUp"
            src="/rs100/banner.png"
            alt=""
          />
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              {{ rs100.b2 }}
              <span class="italic font-500 font- skew-x-6">X</span>-Tech™
            </li>
          </template>
          <el-carousel
            :interval="3000"
            :autoplay="false"
            class="carousel-imgs"
            :height="isSmallSize ? '400px' : '580px'"
            arrow="always"
          >
            <el-carousel-item
              v-for="(items, index) in rs100.info2"
              :key="index"
            >
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
              {{ rs100.b3 }}
            </li>
          </template>
          <div class="info-txt text-wrap">
            <li class="wow animate__animated animate__fadeInUp">
              {{ rs100.tip3 }}
            </li>
          </div>
          <el-carousel
            :interval="3000"
            :autoplay="false"
            class="carousel-imgs"
            :height="isSmallSize ? '420px' : '580px'"
            arrow="always"
          >
            <el-carousel-item
              v-for="(items, index) in rs100.info3"
              :key="index"
            >
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
              {{ rs100.b4 }}
            </li>
          </template>
          <div class="info-txt text-wrap">
            <li class="wow animate__animated animate__fadeInUp">
              {{ rs100.tip4 }}
            </li>
          </div>
          <div class="flex justify-between overflow-x-scroll overflow-y-hidden">
            <div
              class="card wow animate__animated animate__fadeInUp"
              v-for="(item, i) in rs100.info4"
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
        <el-collapse-item name="5">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              {{ rs100.b5 }}
            </li>
          </template>
          <el-carousel
            :interval="3000"
            :autoplay="false"
            class="carousel-imgs"
            :height="isSmallSize ? '268px' : '548px'"
          >
            <el-carousel-item
              v-for="(items, index) in rs100.info5"
              :key="index"
            >
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
        <!-- <el-collapse-item name="6">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              型号对比
            </li>
          </template>
          <tableSvg></tableSvg>
        </el-collapse-item> -->
        <el-collapse-item name="7">
          <template #title>
            <li class="info-title wow animate__animated animate__fadeInUp">
              {{ rs100.b6 }}
            </li>
          </template>
          <el-carousel
            :interval="3000"
            :autoplay="false"
            class="carousel-imgs"
            :height="isSmallSize ? '340px' : '548px'"
            arrow="always"
          >
            <el-carousel-item
              v-for="(items, index) in rs100.info6"
              :key="index"
            >
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
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t, locale } = useI18n();
const router = useRouter();
const actImg = ref(0);
const isSmallSize = ref(window.innerWidth < 576);

const activeNames = ref([]);
const gdList = ["RS100-M6", "RS100-M12", "RS100-M16"];
const rs100 = {
  name: t("rs100.name"),
  tip: t("rs100.tip"),
  b1: t("rs100.b1"),
  tip1: t("rs100.tip1"),
  b2: t("rs100.b2"),
  info2: [
    [
      {
        img: `/rs100/xt0.png`,
        title: t("rs100.info2[0][0].title"),
        info: t("rs100.info2[0][0].info"),
      },
      {
        img: `/rs100/xt1.png`,
        title: t("rs100.info2[0][1].title"),
        info: t("rs100.info2[0][1].info"),
      },
    ],
    [
      {
        img: `/rs100/xt2.png`,
        title: t("rs100.info2[1][0].title"),
        info: t("rs100.info2[1][0].info"),
      },
    ],
  ],
  b3: t("rs100.b3"),
  tip3: t("rs100.tip3"),
  info3: [
    [
      {
        img: `/rs100/ts0.png`,
        title: t("rs100.info3[0][0].title"),
        info: t("rs100.info3[0][0].info"),
      },
      {
        img: `/rs100/ts1.png`,
        title: t("rs100.info3[0][1].title"),
        info: t("rs100.info3[0][1].info"),
      },
    ],
    [
      {
        img: `/rs100/ts2.png`,
        title: t("rs100.info3[1][0].title"),
        info: t("rs100.info3[1][0].info"),
      },
      {
        img: `/rs100/ts3.png`,
        title: t("rs100.info3[1][1].title"),
        info: t("rs100.info3[1][1].info"),
      },
    ],
    [
      {
        img: `/rs100/ts4.png`,
        title: t("rs100.info3[2][0].title"),
        info: t("rs100.info3[2][0].info"),
      },
    ],
  ],
  b4: t("rs100.b4"),
  tip4: t("rs100.tip4"),
  info4: [
    {
      img: `/rs100/tj0.png`,
      title: t("rs100.info4[0][0].title"),
      info: t("rs100.info4[0][0].info"),
    },
    {
      img: `/rs100/tj1.png`,
      title: t("rs100.info4[0][1].title"),
      info: t("rs100.info4[0][1].info"),
    },
  ],
  b5: t("rs100.b5"),
  info5: [
    [
      {
        img: `/rs100/gn0.png`,
        title: t("rs100.info5[0][0].title"),
        info: t("rs100.info5[0][0].info"),
      },
      {
        img: `/rs100/gn1.png`,
        title: t("rs100.info5[0][1].title"),
        info: t("rs100.info5[0][1].info"),
      },
    ],
    [
      {
        img: `/rs100/gn2.png`,
        title: t("rs100.info5[1][0].title"),
        info: t("rs100.info5[1][0].info"),
      },
    ],
  ],
  b6: t("rs100.b6"),
  info6: [
    [
      {
        img: `/rs100/yy0.png`,
        title: t("rs100.info6[0][0].title"),
        info: t("rs100.info6[0][0].info"),
      },
      {
        img: `/rs100/yy1.png`,
        title: t("rs100.info6[0][1].title"),
        info: t("rs100.info6[0][1].info"),
      },
    ],
    [
      {
        img: `/rs100/yy2.png`,
        title: t("rs100.info6[1][0].title"),
        info: t("rs100.info6[1][0].info"),
      },
      {
        img: `/rs100/yy3.png`,
        title: t("rs100.info6[1][1].title"),
        info: t("rs100.info6[1][1].info"),
      },
    ],
    [
      {
        img: `/rs100/yy4.png`,
        title: t("rs100.info6[2][0].title"),
        info: t("rs100.info6[2][0].info"),
      },
      {
        img: `/rs100/yy5.png`,
        title: t("rs100.info6[2][1].title"),
        info: t("rs100.info6[2][1].info"),
      },
    ],
    [
      {
        img: `/rs100/yy6.png`,
        title: t("rs100.info6[3][0].title"),
        info: t("rs100.info6[3][0].info"),
      },
      {
        img: `/rs100/yy7.png`,
        title: t("rs100.info6[3][1].title"),
        info: t("rs100.info6[3][1].info"),
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
      max-width: 1384px;
      padding: 16px;
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
    // padding: 0 64px;

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

      .img {
        width: 687px;
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
          text-align: justify;
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
        padding: 16px 0;
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
          .more {
            width: 128px;
            padding: 10px;
          }
        }
        .banner-img {
          width: 358px;
          height: 280px;

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
      .tz-img {
        width: 358px;
      }
      .card {
        flex: 0 0 auto;
        width: 320px;
        margin-right: 8px;

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
    top: 90%;
  }
}
</style>
