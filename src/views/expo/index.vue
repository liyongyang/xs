<template>
  <div class="pg-container">
    <section class="banner flex justify-center items-center">
      <div class="text-wrapper text-center flex flex-col items-center">
        <li class="banner-title wow animate__animated animate__fadeInUp">
          {{ bannerInfo1.title }}
        </li>
      </div>
    </section>
    <section class="section-wrapper">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item
          v-for="(items, index) in list"
          :key="index"
          :name="index"
        >
          <template #title>
            <div class="head w-full wow animate__animated animate__fadeInUp">
              <li class="head-tit">
                <span class="title">{{ items.head.title }}</span>
                <span>{{ items.head.time }}</span>
              </li>
              <div class="head-info">
                <li>
                  场馆:
                  <span class="font-500">{{ items.head.adress }}</span>
                </li>
                <li>
                  展位:
                  <span class="font-600">{{ items.head.loc }}</span>
                </li>
                <span
                  >展品:
                  <span class="font-600">{{ items.head.tip }}</span>
                </span>
              </div>
            </div>
          </template>
          <el-carousel
            :autoplay="false"
            class="carousel-imgs"
            :height="isSmallSize ? '300px' : '790px'"
            arrow="always"
          >
            <el-carousel-item>
              <div class="flex cursor-pointer space-x-2 overflow-x-scroll">
                <img
                  v-for="(i, index) in 4"
                  :key="index"
                  class="news-item hover:shadow-lg hvr-bob wow animate__animated animate__fadeInUp"
                  :src="`/expo/VCSH2024/` + index + `.png`"
                  alt=""
                />
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="flex cursor-pointer space-x-2 overflow-x-scroll">
                <img
                  v-for="(i, index) in 4"
                  :key="index"
                  class="news-item hover:shadow-lg hvr-bob wow animate__animated animate__fadeInUp"
                  :src="'/expo/VCSH2024/' + (index + 4) + '.png'"
                  alt=""
                />
              </div>
            </el-carousel-item>
          </el-carousel>
          <!-- <div>
								<li class="title wow animate__animated animate__fadeInUp">{{ card.title }}</li>
								<li class="tip wow animate__animated animate__fadeInUp" v-for="(t, index) in card.tip" :key="index">{{ t
									}}</li>
								<li class="time wow animate__animated animate__fadeInUp">{{ card.time }}</li>
							</div>
							<li class="detail wow animate__animated animate__fadeInUp" @click="goDetail(card.link)">查看详情</li> -->
        </el-collapse-item>
      </el-collapse>
    </section>
    <el-button
      class="flex justify-center more btn-white wow animate__animated animate__fadeInUp"
      >{{ t("common.btn.more2") }}</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t, locale } = useI18n();
const router = useRouter();
const activeNames = ref([0]);
const isSmallSize = ref(window.innerWidth < 576);

const bannerInfo1 = {
  title: "展会动态",
};
const list = [
  {
    head: {
      title: "WAIC上海人工智能大会",
      time: "2024-04-025",
      adress: "上海国家展览中心",
      loc: "C-BTE 078",
      tip: "R275-A、R275-A、R170-A、R170-A、RS 300",
    },
    cards: [
      {
        img: `/aboutUs/news/news-0.png`,
        title: "VSDC Innovators Awards 2024 创新奖揭晓！新算技术获行业权威认可",
        tip: [
          "2024 年 6 月 19 日，深圳——全球知名工业视觉领域权威奖项《视觉系统设计》创新奖 2024 (VSDC Innovators Awards 2024) 隆重揭晓，新算凭借旗舰款 R275-A 紧凑型工业读码器一举获奖。这一荣誉不仅是对新算产品卓越性能的肯定，更是对新算在工业机器视觉领域不断创新、追求卓越的高度认可。",
        ],
        time: "2023-07-10 08:18",
        link: "/detail/3",
      },
      {
        img: "",
        title: "专注先进工业传感器，「宁波新算」完成Pre-A轮融资｜早起看早期",
        tip: [
          "2024 年 6 月 19 日，深圳——全球知名工业视觉领域权威奖项《视觉系统设计》创新奖 2024 (VSDC Innovators Awards 2024) 隆重揭晓，新算凭借旗舰款 R275-A 紧凑型工业读码器一举获奖。这一荣誉不仅是对新算产品卓越性能的肯定，更是对新算在工业机器视觉领域不断创新、追求卓越的高度认可。",
        ],
        time: "2023-07-10 08:18",
        link: "/detail/3",
      },
    ],
  },
];
const goDetail = (value) => {
  if (!value) return;
  router.push({ path: value });
};
onMounted(() => {});
</script>
<style lang="scss" scoped>
.pg-container {
  color: #fff;
  position: relative;
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  padding-top: 89px;
  line-height: normal;

  .banner {
    width: 100vw;
    height: 480px;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-image: url("/aboutUs/expo.webp");

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
      word-wrap: break-word;
      white-space: normal;
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

  .section-wrapper {
    width: 1384px;
    padding-top: 128px;
    margin: 0 auto;
    margin-bottom: 64px;

    .head {
      width: 1384px;
      padding: 12px 20px;
      color: #1d1c23cc;
      .head-tit {
        height: 32px;
        line-height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
          color: #1d1c23;
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
        }
      }
      .head-info {
        display: flex;
        justify-content: start;
        height: 32px;
        line-height: 32px;
        gap: 64px;
      }
    }

    .news-item {
      flex: 0 0 auto;
      width: 340px;
      height: 100%;
    }

    :deep(.el-collapse-item__header) {
      padding: 12px 0;
      height: auto;
    }
    //   :deep(.el-collapse-item__header) {
    //   height: 108px;
    //   padding: 32px 0;
    //   padding-right: 32px;
    //   background-color: inherit;
    // }
    :deep(.el-collapse-item__content) {
      background-color: #fff;
      padding-bottom: 0;
    }
    :deep(.el-carousel__arrow) {
      top: 96%;
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
  }

  .more {
    margin: 0 auto;
    margin-bottom: 128px;
  }

  .btn-white {
    font-size: 14px;
    line-height: 20px;
    color: #1d1c23;
    padding: 10px 32px;
    border-radius: 99px;
    background-color: #fff;
  }
}
@media (max-width: 576px) {
  .pg-container {
    .title {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 0;
    }
    .banner {
      height: 320px;
      background-attachment: local;
      &::before {
        display: none;
      }
      .text-wrapper {
        width: 320px;
        .banner-title {
          font-size: 24px;
          line-height: 32px;
          margin-bottom: 8px;
        }
        .banner-msg {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
    .section-wrapper {
      display: block;
      width: 358px;
      padding-top: 32px;
      margin-bottom: 32px;
      .head {
        text-align: left;
        width: 320px;
        padding: 12px;
        line-height: 24px;
        .head-tit {
          height: 48px;
          display: flex;
          flex-direction: column;
        }
        .head-info {
          flex-direction: column;
          gap: 0;
        }
      }
      .news-item {
        width: 175px;
        height: 300px;
      }
    }
  }
}
</style>
