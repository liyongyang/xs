<template>
  <div class="pg-container">
    <section class="banner1 flex items-center">
      <li class="title-banner wow animate__animated animate__fadeInUp">
        助力企业实现数智化升级引擎不熄
      </li>
    </section>
    <section class="section-wrapper text-center">
      <li class="title wow animate__animated animate__fadeInUp">行业案例</li>
      <div class="flex justify-between flex-wrap space-y-1">
        <div
          @click="toCase(item.key)"
          class="card cursor-pointer flex justify-center items-center"
          v-for="(item, index) in cardConf"
          :key="index"
          :style="{ 'background-image': 'url(' + item.img + ')' }"
        >
          <li class="name">{{ item.name }}</li>
        </div>
      </div>
    </section>
    <section class="section-wrapper affix-container text-center">
      <li class="title wow animate__animated animate__fadeInUp">客户案例</li>
      <div class="menus flex justify-start flex-wrap">
        <span
          class="menu-tab cursor-pointer hvr-underline-from-center wow animate__animated animate__fadeInUp"
          v-for="(item, index) in cardConf"
          :key="index"
          @click="scrollTo(item.key)"
        >
          {{ item.name }}
        </span>
      </div>
      <div class="case-caontainer">
        <div
          class="case-box"
          :id="items.key"
          v-for="(items, index) in cardConf"
          :key="index"
        >
          <li class="name wow animate__animated animate__fadeInUp">
            {{ items.name }}
          </li>
          <el-carousel
            v-if="items.case[0].length"
            :interval="3000"
            :autoplay="false"
            class="carousel-imgs"
            height="302px"
          >
            <el-carousel-item v-for="(item, index) in items.case" :key="index">
              <div class="case-list flex">
                <div
                  class="case-item mx-2"
                  v-for="(t, index) in item"
                  :key="index"
                  @click="toCase(items.key)"
                >
                  <img class="case-img" :src="t.img" alt="" />
                  <li class="case-name">{{ t.name }}</li>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
          <div v-else class="case-list flex justify-start overflow-x-scroll">
            <div
              class="case-item flex flex-col hover:shadow-lg"
              v-for="(item, index) in items.case"
              :key="index"
              @click="toCase(items.key)"
            >
              <img class="case-img" :src="item.img" alt="" />
              <li class="case-name">{{ item.name }}</li>
            </div>
          </div>
        </div>
      </div>
      <li class="text-center wow animate__animated animate__fadeInUp">
        更多案例正在更新中…
      </li>
    </section>
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

// const { t, locale } = useI18n();
const router = useRouter();
const route = useRoute();

const cardConf = [
  {
    key: "car",
    name: "汽车制造",
    img: "/customerCase/card0.webp",
    case: [
      [
        { name: "汽车引擎撞针 DPM 缺陷码", img: "/customerCase/car-0.webp" },
        { name: "汽车玻璃低对比度 DM 码", img: "/customerCase/car-1.webp" },
        { name: "曲轴水滴遮挡 DPM 码", img: "/customerCase/car-2.webp" },
        { name: "轮胎条形码", img: "/customerCase/car-3.webp" },
      ],
      [
        {
          name: "手持式读码器读取汽车 1D/2D 码",
          img: "/customerCase/car-4.webp",
        },
      ],
    ],
  },
  {
    key: "gf",
    name: "光伏新能源",
    img: "/customerCase/card1.webp",
    case: [
      { name: "光伏板条形码", img: "/customerCase/gf-0.webp" },
      { name: "光伏板难读码", img: "/customerCase/gf-1.webp" },
    ],
  },
  {
    key: "ld",
    name: "锂电新能源",
    img: "/customerCase/card2.webp",
    case: [
      { name: "移动读取圆柱电池 DPM 码", img: "/customerCase/ld-0.webp" },
      { name: "软包电池 DPM 码", img: "/customerCase/ld-1.webp" },
      { name: "方形电池 DPM 码", img: "/customerCase/ld-2.webp" },
    ],
  },
  {
    key: "sm",
    name: "3C数码",
    img: "/customerCase/card3.webp",
    case: [
      { name: "电子元器件 0.5mm 超小码", img: "/customerCase/sm-0.webp" },
      { name: "移动读取多个 IC 上的 DM 码", img: "/customerCase/sm-1.webp" },
    ],
  },
  {
    key: "bdt",
    name: "半导体",
    img: "/customerCase/card4.webp",
    case: [
      { name: "在狭窄空间中读取 DPM 码", img: "/customerCase/bdt-0.webp" },
      { name: "同时读取多个 1D/2D 码", img: "/customerCase/bdt-1.webp" },
      { name: "隔着玻璃读取晶圆托盘条形码", img: "/customerCase/bdt-2.webp" },
      { name: "读取低对比度 DPM 码", img: "/customerCase/bdt-3.webp" },
    ],
  },
  {
    key: "wl",
    name: "物流运输",
    img: "/customerCase/card5.webp",
    case: [
      { name: "快递盒塑料膜遮挡条形码", img: "/customerCase/wl-0.webp" },
      { name: "组网功能", img: "/customerCase/wl-1.webp" },
      { name: "突发模式", img: "/customerCase/wl-2.webp" },
    ],
  },
];

const scrollTo = (key: string) => {
  const element = document.getElementById(key);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};
const toCase = (i: string) => {
  router
    .push({
      path: `CustomerCase/${i}`,
    })
    .then(() => {
      window.scrollTo(0, 0);
    });
};
onMounted(() => {});
</script>
<style lang='scss' scoped>
.pg-container {
  color: #fff;
  position: relative;
  width: 100vw;
  height: 100%;
  background-color: #fafafa;
  overflow-x: hidden;
  padding-top: 89px;

  .banner1 {
    height: 480px;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-image: url("/customerCase/banner.webp");

    .title-banner {
      padding: 64px;
      font-size: 56px;
      font-weight: 600;
      letter-spacing: 4.48px;
    }
  }

  .section-wrapper {
    width: 1384px;
    padding-top: 128px;
    padding-bottom: 64px;
    color: #1d1c23;
    margin: 0 auto;

    .title {
      font-size: 48px;
      font-weight: 600;
      letter-spacing: 3.84px;
      margin-bottom: 64px;
    }

    .card {
      overflow: hidden;
      position: relative;
      transition: transform 0.4s ease;
      width: 456px;
      height: 155px;
      background-size: cover;
      background-position: center center;

      // &::before {
      //   content: "";
      //   position: absolute;
      //   width: 456px;
      //   height: 155px;
      //   background: #00000076;
      // }

      &:hover {
        transform: scale(0.97);

        .name {
          transform: scale(1.15);
        }
      }

      .name {
        color: #fafafa;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 44px;
        z-index: 9;
        transition: transform 0.4s ease;
      }
    }

    .menus {
      margin: 0;
      text-align: left;
      border-bottom: 1px solid #dde2e4;

      .menu-tab {
        font-size: 32px;
        font-weight: 600;
        line-height: 44px;
        margin-right: 32px;
        padding: 16px 0;
        opacity: 0.8;
        transition: all 0.5s ease-in-out;

        &:hover {
          opacity: 1;
        }
      }

      .hvr-underline-from-center:before {
        height: 2px;
        background-color: #20262e;
      }
    }

    .case-caontainer {
      // height: calc(100vh + 128px);
      // overflow-y: scroll;
      text-align: left;
      padding: 64px 0;
      padding-bottom: 0;

      .case-box {
        padding-bottom: 64px;

        .name {
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
          padding-bottom: 16px;
        }

        .case-list {
          &::-webkit-scrollbar {
            display: none;
          }

          .case-item {
            flex: 0 0 auto;
            width: 340px;
            margin-right: 8px;
            transition: transform 0.4s ease;

            &:hover {
              transform: scale(0.97);

              .case-name {
                font-weight: 600;
              }
            }

            .case-img {
              width: 340px;
              height: auto;
            }

            .case-name {
              padding: 32px;
              background-color: #f4f4f4;
            }
          }
        }
      }
    }
  }
}
</style>