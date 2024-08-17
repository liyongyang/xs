<template>
  <div class="pg-container-detail">
    <section :class="newDetail['banner'] ? 'header header-banner' : 'header'">
      <div class="back" v-if="!newDetail['banner']">
        <el-icon>
          <ArrowLeftBold />
        </el-icon>
        <span class="px-3" @click="goBack()">{{ t("common.back") }}</span>
      </div>
      <div class="back1" v-if="newDetail['banner']">
        <el-icon>
          <ArrowLeftBold />
        </el-icon>
        <span class="px-3" @click="goBack()">{{ t("common.back") }}</span>
      </div>
      <div
        v-if="newDetail['banner']"
        class="banner"
        :style="'background-image: url(' + newDetail['banner'] + ');'"
      ></div>
    </section>
    <section class="detail flex justify-center">
      <div class="leftbox">
        <div class="title">
          {{ newDetail["title"] }}
        </div>
        <ul>
          <li>{{ newDetail["author"] }}</li>
          <li>{{ newDetail["editor"] }}</li>
          <li>{{ newDetail["origin"] }}</li>
        </ul>
        <div class="date">{{ newDetail["date"] }}</div>
      </div>
      <div class="rightbox">
        <template v-for="(item, index) in newDetail['content']" :key="index">
          <p v-if="item.type === 'content'">{{ item.value }}</p>
          <img v-if="item.type === 'img'" :src="item.value" alt="" />
          <div v-if="item.type === 'title'" class="title">{{ item.value }}</div>
        </template>
      </div>
    </section>
    <!-- <section class="about-news">
      <div class="title">相关新闻</div>
      <div class="card-news flex justify-center flex-wrap">
        <div
          class="card-new-item wow animate__animated animate__fadeInUp"
          v-for="(item, index) in dt"
          :key="index"
        >
          <li class="txt">{{ item.time }}</li>
          <li class="title">
            {{ item.title }}
          </li>
          <li class="txt more" @click="goDetail(item.link)">{{t('common.btn.read_more')}}</li>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();
const isSmallSize = ref(window.innerWidth < 576);

const dtList = [
  [
    {
      time: "2022-07-22",
      title:
        "「新算科技」获数千万元天使轮融资，由红杉中国种子基金独家投资 | 早起看早期",
      link: "/detail/2",
    },
    {
      time: "2024-06-19",
      title: "VSDC Innovators Awards 2024 创新奖揭晓！新算技术获行业权威认可",
      link: "/detail/3",
    },
    {
      time: "2024-04-15",
      title: "待补充",
    },
    {
      time: "2024-04-15",
      title: "待补充",
    },
  ],
  [
    {
      time: "2023-07-10 08:18",
      title: "专注先进工业传感器，「宁波新算」完成Pre-A轮融资｜早起看早期",
      link: "/detail/1",
    },
    {
      time: "2024-06-19",
      title: "VSDC Innovators Awards 2024 创新奖揭晓！新算技术获行业权威认可",
      link: "/detail/3",
    },
    {
      time: "2024-04-15",
      title: "待补充",
    },
    {
      time: "2024-04-15",
      title: "待补充",
    },
  ],
  [
    {
      time: "2022-07-22 ",
      title:
        "「新算科技」获数千万元天使轮融资，由红杉中国种子基金独家投资 | 早起看早期",
      link: "/detail/2",
    },
    {
      time: "2023-07-10 08:18",
      title: "专注先进工业传感器，「宁波新算」完成Pre-A轮融资｜早起看早期",
      link: "/detail/1",
    },
    {
      time: "2024-04-15",
      title: "待补充",
    },
    {
      time: "2024-04-15",
      title: "待补充",
    },
  ],
];
const newsList = [
  {
    title: t("newsList[0].title"),
    author: t("newsList[0].author"),
    editor: t("newsList[0].editor"),
    origin: t("newsList[0].origin"),
    date: t("newsList[0].date"),
    content: [
      {
        type: "content",
        value: t("newsList[0].content[0].value"),
      },
      {
        type: "content",
        value: t("newsList[0].content[1].value"),
      },
      {
        type: "content",
        value: t("newsList[0].content[2].value"),
      },
      {
        type: "content",
        value: t("newsList[0].content[3].value"),
      },
      {
        type: "content",
        value: t("newsList[0].content[4].value"),
      },
      {
        type: "img",
        value: `/detail/1.png`,
      },
      {
        type: "content",
        value: t("newsList[0].content[5].value"),
      },
      {
        type: "content",
        value: t("newsList[0].content[6].value"),
      },
      {
        type: "content",
        value: t("newsList[0].content[7].value"),
      },
    ],
  },
  {
    title: t("newsList[1].title"),
    author: t("newsList[1].author"),
    editor: t("newsList[1].editor"),
    origin: t("newsList[1].origin"),
    date: t("newsList[1].date"),
    content: [
      {
        type: "content",
        value: t("newsList[1].content[0].value"),
      },
      {
        type: "img",
        value: `/detail/2.png`,
      },
      {
        type: "content",
        value: t("newsList[1].content[2].value"),
      },
      {
        type: "title",
        value: t("newsList[1].content[3].value"),
      },
      {
        type: "content",
        value: t("newsList[1].content[4].value"),
      },
    ],
  },
  {
    title: t("newsList[2].title"),
    date: t("newsList[2].date"),
    banner: "/detail/vsdc.png",
    content: [
      {
        type: "content",
        value: t("newsList[2].content[0].value"),
      },
      {
        type: "img",
        value: `/detail/1.jpeg`,
      },
      {
        type: "content",
        value: t("newsList[2].content[2].value"),
      },
      {
        type: "img",
        value: `/detail/3.png`,
      },
      {
        type: "content",
        value: t("newsList[2].content[4].value"),
      },
      {
        type: "img",
        value: `/detail/4.png`,
      },

      {
        type: "content",
        value: t("newsList[2].content[6].value"),
      },
      {
        type: "title",
        value: t("newsList[2].content[7].value"),
      },
      {
        type: "content",
        value: t("newsList[2].content[8].value"),
      },
    ],
  },
];
let newDetail = ref({});
let dt = ref([]);
const goBack = () => {
  router.go(-1);
};
const goDetail = (value) => {
  if (!value) return;
  router.push({ path: value });
};
watch(
  () => route.params.id,
  (newParams, oldParams) => {
    newDetail.value = newsList[newParams - 1];
    dt.value = dtList[newParams - 1];
  },
  {
    immediate: false,
  }
);
onMounted(() => {
  newDetail.value = newsList[route.params.id - 1];
  dt.value = dtList[route.params.id - 1];
});
</script>
<style lang="scss" scoped>
.pg-container-detail {
  position: relative;
  width: 100vw;
  padding-top: 89px;

  .header-banner {
    padding-bottom: 80px;
  }

  .header {
    position: relative;
    width: 100%;

    .back {
      position: relative;
      width: 1384px;
      padding: 40px 0 0 0;
      font-size: 14px;
      margin: 0 auto;

      span {
        position: relative;
        top: -2px;
        cursor: pointer;
      }
    }

    .back1 {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      width: 1384px;
      font-size: 14px;
      margin: 0 auto;

      span {
        position: relative;
        top: -2px;
      }
    }

    .banner {
      height: 680px;
      width: 100%;
      background-size: 100%;
      background-repeat: no-repeat;

      // background: 0px -512.771px / 100% 254.917% no-repeat;
    }
  }

  .detail {
    width: 100%;
    padding: 48px 0 32px 0;
    border-bottom: 1px solid #dfe1e2;

    .leftbox {
      flex-basis: 579px;
      padding-right: 64px;

      .title {
        color: #1d1c23;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        white-space: break-spaces;
      }

      ul {
        padding: 32px 0;
        color: rgba(29, 28, 35, 0.8);
        font-size: 28px;
        font-weight: 400;
        line-height: 40px;
      }

      .date {
        color: rgba(29, 28, 35, 0.8);
        font-size: 28px;
        font-weight: 400;
        line-height: 40px;
        padding-bottom: 64px;
        border-bottom: 1px solid #dfe1e2;
      }
    }

    .rightbox {
      flex-basis: 805px;
      text-align: justify;

      p {
        white-space: break-spaces;
        color: rgba(29, 28, 35, 0.8);
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        margin-bottom: 32px;
      }

      img {
        width: 100%;
        height: auto;
        margin-bottom: 32px;
      }

      .title {
        color: #1d1c23;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
        margin-bottom: 32px;
      }
    }
  }

  .about-news {
    padding: 64px;

    .title {
      color: #1d1c23;
      font-size: 28px;
      font-weight: 400;
      line-height: 40px;
    }
  }

  .card-news {
    padding-top: 32px;

    .card-new-item {
      text-align: left;
      flex: 1;
      // width: 424px;
      margin: 0 4px;
      height: 244px;
      padding: 24px 16px;
      border-top: 1px solid #3d4448;
      background: #f4f4f4;
      text-wrap: wrap;
      word-wrap: break-word;
      white-space: normal;

      .txt {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 12px;
      }

      .title {
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: 0;
        min-height: 132px;
        // padding: 24px 0;
      }

      .more {
        // padding-top: 24px;
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 576px) {
  .pg-container-detail {
    padding-top: 72px;
    .header-banner {
      padding-bottom: 0;
      padding-top: 32px;
    }
    .header {
      .banner {
        height: 166px;
      }
      .back {
        width: 358px;
        padding: 8px 0 0 0;
      }
      .back1 {
        top: 0;
        left: 18px;
        transform: translatex(0);
        width: 358px;
      }
    }
    .detail {
      display: block;
      width: 358px;
      padding: 24px 0;
      margin: 0 auto;
      .leftbox {
        padding-left: 24px;
        margin-bottom: 12px;
        .title {
          font-size: 18px;
        }
        ul {
          font-size: 14px;
          line-height: 20px;
          padding: 12px 0;
        }
        .date {
          font-size: 14px;
          line-height: 18px;
          padding-bottom: 16px;
        }
      }
      .rightbox {
        p {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
