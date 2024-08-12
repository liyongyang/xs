<template>
  <div class="pg-container">
    <section class="banner flex justify-center items-center">
      <div class="text-wrapper text-center flex flex-col items-center">
        <li class="banner-title wow animate__animated animate__fadeInUp">
          {{ bannerInfo1.title }}
        </li>
      </div>
    </section>
    <section class="section-wrapper cursor-pointer space-x-2">
      <div
        class="news-item hover:shadow-lg hvr-bob"
        v-for="(items, index) in newsList"
        :key="index"
        @click="goDetail(items.link)"
      >
        <img
          class="wow animate__animated animate__fadeInUp"
          v-if="items.img"
          :src="items.img"
          alt=""
        />
        <div>
          <li class="title wow animate__animated animate__fadeInUp">
            {{ items.title }}
          </li>
          <li
            class="tip wow animate__animated animate__fadeInUp"
            v-for="(item, index) in items.tip"
            :key="index"
          >
            {{ item }}
          </li>
          <li class="time wow animate__animated animate__fadeInUp">
            {{ items.time }}
          </li>
        </div>
        <li class="detail wow animate__animated animate__fadeInUp">查看详情</li>
      </div>
    </section>
    <el-button
      class="flex justify-center more btn-white wow animate__animated animate__fadeInUp"
      >查看更多</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t, locale } = useI18n();
const router = useRouter();
const bannerInfo1 = {
  title: t("news.tit"),
};
const newsList = [
  {
    img: "",
    title: t("news.list[0].title"),
    tip: [t("news.list[0].tip[0]")],
    time: t("news.list[0].time"),
    link: "/detail/3",
  },
  {
    img: "",
    title: t("news.list[1].title"),
    tip: [t("news.list[1].tip[0]")],
    time: t("news.list[1].time"),
    link: "/detail/1",
  },
  {
    img: ``,
    title: t("news.list[2].title"),
    tip: [t("news.list[2].tip[0]")],
    time: t("news.list[2].time"),
    link: "/detail/2",
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
    background-image: url("/aboutUs/news.webp");

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
    display: flex;
    width: 1384px;
    padding-top: 128px;
    margin: 0 auto;
    margin-bottom: 64px;
    color: #1d1c23;

    .news-item {
      display: flex;
      text-wrap: wrap;
      word-wrap: break-word;
      white-space: normal;
      width: 450px;
      height: 600px;
      padding: 24px 16px;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      background-color: #f4f4f4;
      transition: all 0.5s;

      .title {
        font-size: 28px;
        font-weight: 600;
      }

      .detail {
        &:hover {
          font-weight: 500;
        }
      }

      .time {
        color: #1d1c2399;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        margin-top: 24px;
      }
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
    .banner {
      height: 320px;
      background-attachment: local;
      &::before {
        display: none;
      }
      .text-wrapper {
        width: 358px;
        .banner-title {
          font-size: 28px;
          line-height: 32px;
          margin-bottom: 0;
        }
        .banner-msg {
        }
      }
    }
    .section-wrapper {
      display: block;
      width: 358px;
      padding-top: 32px;
      margin-bottom: 32px;
      .news-item {
        width: 358px;
        height: auto;
        padding: 24px 16px;
        margin: 0;
        margin-bottom: 12px;
        .title {
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 16px;
        }
        .time {
          font-size: 14px;
          margin: 24px 0;
        }
      }
    }
  }
}
</style>
