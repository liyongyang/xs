<template>
  <div class="pg-container">
    <section class="banner flex justify-center items-center">
      <div class="text-wrapper text-center flex flex-col items-center">
        <li class="banner-title wow animate__animated animate__fadeInUp">
          {{ bannerInfo1.title }}
        </li>
        <li
          class="banner-msg wow animate__animated animate__fadeInUp"
          v-for="(item, idx) in bannerInfo1.msg"
          :key="idx"
        >
          {{ item }}
        </li>
      </div>
    </section>
    <section class="section-wrapper text-center">
      <li class="title wow animate__animated animate__fadeInUp">
        {{ section1.title }}
      </li>
      <div class="flex justify-between flex-wrap">
        <div
          class="card m1 text-left"
          v-for="(item, index) in section1.info"
          :key="index"
        >
          <li
            class="wow animate__animated animate__fadeInUp"
            :class="locale === 'en' ? 'card-name-en' : 'card-name'"
          >
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
    <section
      class="banner2 mx-auto flex justify-center items-center"
      :style="{ 'background-image': 'url(' + bannerInfo2.bgImg + ')' }"
    >
      <div class="text-wrapper text-center flex flex-col items-center">
        <li
          class="banner-msg wow animate__animated animate__fadeInUp"
          v-for="(item, idx) in bannerInfo2.msg"
          :key="idx"
        >
          {{ item }}
        </li>
      </div>
    </section>
    <section v-if="isSmallSize" class="his-wrapper bg-white text-center">
      <li class="title wow animate__animated animate__fadeInUp">
        {{ section2.title }}
      </li>
      <el-carousel
        :autoplay="false"
        class="his-wrapper"
        height="268px"
        arrow="always"
      >
        <el-carousel-item
          class="time-info-item2"
          v-for="(item, index) in section2.timeList"
          :key="index"
        >
          <div class="item-item">
            <li class="txt wow animate__animated animate__fadeInUp">
              {{ item.time }}
            </li>
            <li
              class="txt-t wow animate__animated animate__fadeInUp"
              v-for="(t, index) in item.child"
              :key="index"
            >
              {{ t }}
            </li>
          </div>
        </el-carousel-item>
      </el-carousel>
    </section>
    <section v-else class="his-wrapper bg-white text-center">
      <li class="title wow animate__animated animate__fadeInUp">
        {{ section2.title }}
      </li>
      <div class="time-info">
        <el-carousel
          :autoplay="false"
          height="440px"
          arrow="always"
          indicator-position="outside"
        >
          <el-carousel-item>
            <div class="time-info-item">
              <div class="info-item" v-for="(i, index) in 3" :key="index">
                <li class="txt wow animate__animated animate__fadeInUp">
                  {{ section2.timeList[index].time }}
                </li>
                <li
                  class="txt-t wow animate__animated animate__fadeInUp"
                  v-for="(t, i) in section2.timeList[index].child"
                  :key="i"
                >
                  {{ t }}
                </li>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="time-info-item">
              <div class="info-item" v-for="(i, index) in 3" :key="index">
                <li class="txt wow animate__animated animate__fadeInUp">
                  {{ section2.timeList[index + 3].time }}
                </li>
                <li
                  class="txt-t wow animate__animated animate__fadeInUp"
                  v-for="(t, i) in section2.timeList[index + 3].child"
                  :key="i"
                >
                  {{ t }}
                </li>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
    <!-- <section v-else class="his-wrapper bg-white text-center">
      <li class="title wow animate__animated animate__fadeInUp">
        {{ section2.title }}
      </li>
      <div class="time-info relative flex justify-start text-left">
        <div
          class="time-info-item"
          v-for="(item, index) in section2.timeList"
          :key="index"
        >
          <div class="item-item">
            <li class="txt wow animate__animated animate__fadeInUp">
              {{ item.time }}
            </li>
            <li
              class="txt-t wow animate__animated animate__fadeInUp"
              v-for="(t, index) in item.child"
              :key="index"
            >
              {{ t }}
            </li>
          </div>
        </div>
      </div>
    </section> -->
    <section class="section-wrapper bg2 bg-white text-center">
      <li class="title wow animate__animated animate__fadeInUp">
        {{ section3.title }}
      </li>
      <div class="flex justify-between flex-wrap">
        <img
          class="jx-item hover:shadow-lg"
          v-for="(i, index) in 5"
          :key="i"
          :src="'/aboutUs/jx' + index + '.png'"
          alt=""
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const isSmallSize = ref(window.innerWidth < 576);

const bannerInfo1 = {
  title: t("aboutUs.bn_tit"),
  msg: [t("aboutUs.bn_msg[0]")],
};
const section1 = {
  title: t("aboutUs.p1.title"),
  info: [
    {
      key: t("aboutUs.p1.info[0].key"),
      name: t("aboutUs.p1.info[0].name"),
      icon: "/aboutUs/icon-svg0.svg",
    },
    {
      key: t("aboutUs.p1.info[1].key"),
      name: t("aboutUs.p1.info[1].name"),
      icon: "/aboutUs/icon-svg1.svg",
    },
    {
      key: t("aboutUs.p1.info[2].key"),
      name: t("aboutUs.p1.info[2].name"),
      icon: "/aboutUs/icon-svg2.svg",
    },
    {
      key: t("aboutUs.p1.info[3].key"),
      name: t("aboutUs.p1.info[3].name"),
      icon: "/aboutUs/icon-svg3.svg",
    },
  ],
};
const bannerInfo2 = {
  title: "",
  msg: [t("aboutUs.p2.msg[0]")],
  bgImg: "/aboutUs/banner2.webp",
};
const section2 = {
  title: t("aboutUs.p3.title"),
  timeList: [
    {
      time: t("aboutUs.p3.timeList[0].time"),
      child: [
        t("aboutUs.p3.timeList[0].child[0]"),
        t("aboutUs.p3.timeList[0].child[1]"),
      ],
    },
    {
      time: t("aboutUs.p3.timeList[1].time"),
      child: [
        t("aboutUs.p3.timeList[1].child[0]"),
        t("aboutUs.p3.timeList[1].child[1]"),
        t("aboutUs.p3.timeList[1].child[2]"),
        t("aboutUs.p3.timeList[1].child[3]"),
        t("aboutUs.p3.timeList[1].child[4]"),
        t("aboutUs.p3.timeList[1].child[5]"),
      ],
    },
    {
      time: t("aboutUs.p3.timeList[2].time"),
      child: [
        t("aboutUs.p3.timeList[2].child[0]"),
        t("aboutUs.p3.timeList[2].child[1]"),
        t("aboutUs.p3.timeList[2].child[2]"),
        t("aboutUs.p3.timeList[2].child[3]"),
        t("aboutUs.p3.timeList[2].child[4]"),
      ],
    },
    {
      time: t("aboutUs.p3.timeList[3].time"),
      child: [
        t("aboutUs.p3.timeList[3].child[0]"),
        t("aboutUs.p3.timeList[3].child[1]"),
      ],
    },
    {
      time: t("aboutUs.p3.timeList[4].time"),
      child: [t("aboutUs.p3.timeList[4].child[0]")],
    },
    {
      time: t("aboutUs.p3.timeList[5].time"),
      child: [t("aboutUs.p3.timeList[5].child[0]")],
    },
  ],
};
const section3 = {
  title: t("aboutUs.p4.title"),
};
onMounted(() => {
  console.log(`output->locale.value`, locale.value);
});
</script>
<style lang="scss" scoped>
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

  .banner2 {
    position: relative;
    width: 1384px;
    height: 480px;
    margin: 0 auto;
    margin-bottom: 128px;
    background-size: cover;
    background-position: center center;

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
      word-wrap: break-word;
      white-space: normal;
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
    height: 800px;
    padding: 128px 0;
    margin: 0 auto;
    color: #1d1c23;
    background-color: #fff;

    .time-info {
      width: 1380px;
      overflow-x: scroll;
      margin: 0 auto;
      .carousel-time {
        width: 100%;
      }
    }

    .time-info-item {
      position: relative;
      display: flex;
      width: auto;
      text-align: left;
      padding: 0 48px;
      color: #1d1c23;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      &::before {
        content: "";
        position: absolute;
        top: 61px;
        left: 50px;
        display: block;
        height: 2px;
        background-color: #000;
        width: 220%;
      }
      .info-item {
        position: relative;
        flex: 1 1 auto;
        &::before {
          position: absolute;
          top: 56px;
          display: block;
          content: "";
          width: 12px;
          height: 12px;
          border-radius: 100%;
          background-color: #000;
        }
      }
      .txt {
        font-size: 32px;
        line-height: 48px;
        font-weight: 600;
        padding: 0 24px 24px 10px;
      }
      .txt-t {
        margin-top: 12px;
        line-height: 32px;
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
      width: 270px;
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
      .card-name-en {
        font-size: 56px;
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
    top: 80%;
    background-color: #292929;
    color: #ffffff;
    border: 1px solid #868686;
    &:hover {
      background-color: #868686;
    }
  }
  :deep(.el-carousel__arrow--left) {
    position: absolute;
    right: 80px;
    left: auto;
    bottom: 20px;
  }

  :deep(.el-carousel__arrow--right) {
    position: absolute;
    right: 12px;
    bottom: 20px;
  }
}
@media (max-width: 576px) {
  .pg-container {
    text-wrap: wrap;
    word-wrap: break-word;
    white-space: normal;
    .title {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 32px;
    }
    .banner {
      height: 320px;
      background-attachment: local;
      &::before {
        display: none;
      }
      .text-wrapper {
        width: 320px;
        text-align: justify;
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
    .banner2 {
      width: 100%;
      height: 320px;
      margin-bottom: 0;
      &::before {
        width: 100%;
        height: 320px;
      }
      .text-wrapper {
        width: 358px;
        .banner-title {
          font-size: 24px;
          margin-bottom: 0;
        }
        .banner-msg {
          font-size: 24px;
          line-height: 32px;
        }
      }
    }
    .his-wrapper {
      padding-top: 24px;
      padding-bottom: 0;
      height: auto;
      background-color: #fff;
      .title {
        margin-bottom: 0;
      }
      .time-info-item2 {
        text-align: left;
        padding-left: 40px;
        &::before {
          content: "";
          position: absolute;
          top: 32px;
          left: 32px;
          display: block;
          height: 1px;
          width: 100%;
          background-color: #000;
        }
        .item-item {
          position: relative;
          line-height: 28px;
          &::before {
            content: "";
            position: absolute;
            top: 30px;
            left: -8px;
            display: block;
            height: 6px;
            width: 6px;
            border-radius: 6px;
            background-color: #000;
          }
        }
        .txt {
          line-height: 24px;
          font-size: 14px;
          padding: 0 0 12px 0;
        }
        .txt-t {
          font-size: 14px;
          margin-top: 12px;
          line-height: 18px;
        }
      }
    }
    .section-wrapper {
      width: 358px;
      padding-top: 32px;
      padding-bottom: 32px;
      transform: scale(1);
      .jx-item {
        width: 175px;
        margin-bottom: 10px;
        &:hover {
          transform: scale(1);
        }
      }
      .card {
        width: 168px;
        margin-bottom: 4px;
        border: none;
        padding: 12px;
        .card-name {
          font-size: 20px;
        }
        .card-name-en {
          font-size: 20px;
        }
        .card-key {
          font-size: 14px;
          margin-bottom: 8px;
        }
        .card-icon {
          img {
            width: 32px;
          }
        }
      }
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
    top: 80%;
    transform: scale(0.8);
    background-color: #292929;
    color: #ffffff;
    border: 1px solid #868686;
    &:hover {
      background-color: #868686;
    }
  }
  :deep(.el-carousel__arrow--left) {
    position: absolute;
    right: 66px;
    left: auto;
    bottom: 20px;
  }

  :deep(.el-carousel__arrow--right) {
    position: absolute;
    right: 12px;
    bottom: 20px;
  }
}
</style>
