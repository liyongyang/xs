<template>
  <div class="page-wrapper">
    <section
      v-if="actInfo"
      class="banner relative"
      :style="{ 'background-image': 'url(' + actInfo.banner + ')' }"
    >
      <div class="back wow animate__animated animate__fadeInUp">
        <li class="flex items-center text-4 font-500 py-2 px-3 cursor-pointer">
          <el-icon>
            <ArrowLeftBold />
          </el-icon>
          <span class="px-3" @click="goBack()">{{ t("common.back") }}</span>
        </li>
      </div>
      <div class="text-wrapper">
        <div :class="locale === 'en' ? 'content-en' : 'content'">
          <li class="banner-title wow animate__animated animate__fadeInUp">
            {{ actInfo.title }}
          </li>
          <li class="banner-txt wow animate__animated animate__fadeInUp">
            {{ actInfo.txt }}
          </li>
        </div>
      </div>
    </section>
    <section class="box-container" v-if="actInfo">
      <li class="title">{{ caseList.ysTit }}</li>
      <div class="cards">
        <div class="card" v-for="(item, index) in actInfo.ysList" :key="index">
          <li class="tit">0{{ index + 1 }}</li>
          <li class="info">{{ item }}</li>
        </div>
      </div>
    </section>
    <section class="box-container" v-if="actInfo">
      <li class="title">{{ caseList.alTit }}</li>
      <div class="al-list" v-for="(item, index) in actInfo.case" :key="index">
        <div class="left-info text-left">
          <li class="tit">{{ item.name }}</li>
          <li v-if="item.txt" class="txt mt-2">{{ item.txt }}</li>
        </div>
        <div class="right-info">
          <img class="img" :src="item.img" alt="" />
          <el-collapse v-model="activeCollapse" v-if="item.rInfo">
            <el-collapse-item
              v-for="(t, index) in item.rInfo"
              :key="index"
              :name="index"
              class="p4 mb-2"
            >
              <template #title>
                <li
                  class="cont-info-tit font-500 wow animate__animated animate__fadeInUp"
                >
                  {{ t.tit }}
                </li>
              </template>
              <div v-if="t.content" class="text-left">
                <div
                  v-for="(info, index) in t.content"
                  :key="index"
                  class="pr-2"
                >
                  <li class="cont-info-name mt-2 font-500">{{ info.name }}</li>
                  <li>{{ info.txt }}</li>
                </div>
              </div>
              <div v-if="t.imgList" class="flex flex-wrap">
                <div
                  v-for="(info, index) in t.imgList"
                  :key="index"
                  class="cont-img-item pr-8 flex items-center"
                >
                  <img :src="info.img" alt="" />
                  <li class="img-name text-left">{{ info.name }}</li>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t, locale } = useI18n();
const router = useRouter();
const route = useRoute();
const actInfo = ref();
const activeCollapse = ref([0, 1, 2]);
const caseList = {
  alTit: t("caseList.alTit"),
  ysTit: t("caseList.ysTit"),
  car: {
    banner: "/customerCase/banner/car.webp",
    title: t("caseList.car.title"),
    txt: t("caseList.car.txt"),
    ysList: [
      t("caseList.car.ysList[0]"),
      t("caseList.car.ysList[1]"),
      t("caseList.car.ysList[2]"),
    ],
    case: [
      { name: t("caseList.car.case[0].name"), img: `/customerCase/car-0.webp` },
      { name: t("caseList.car.case[1].name"), img: `/customerCase/car-1.webp` },
      { name: t("caseList.car.case[2].name"), img: `/customerCase/car-2.webp` },
      { name: t("caseList.car.case[3].name"), img: `/customerCase/car-3.webp` },
      { name: t("caseList.car.case[4].name"), img: `/customerCase/car-4.webp` },
    ],
  },
  gf: {
    banner: "/customerCase/banner/gf.webp",
    title: t("caseList.gf.title"),
    txt: t("caseList.gf.txt"),
    ysList: [
      t("caseList.gf.ysList[0]"),
      t("caseList.gf.ysList[1]"),
      t("caseList.gf.ysList[2]"),
    ],
    case: [
      {
        name: t("caseList.gf.case[0].name"),
        img: `/customerCase/case/gf-0.png`,
      },
      {
        name: t("caseList.gf.case[1].name"),
        img: `/customerCase/case/gf-1.png`,
      },
    ],
  },
  ld: {
    banner: "/customerCase/banner/ld.webp",
    title: t("caseList.ld.title"),
    txt: t("caseList.ld.txt"),
    ysList: [
      t("caseList.ld.ysList[0]"),
      t("caseList.ld.ysList[1]"),
      t("caseList.ld.ysList[2]"),
    ],
    case: [
      {
        name: t("caseList.ld.case[0].name"),
        img: `/customerCase/case//ld-0.png`,
      },
      {
        name: t("caseList.ld.case[1].name"),
        img: `/customerCase/case/ld-1.png`,
      },
      {
        name: t("caseList.ld.case[2].name"),
        img: `/customerCase/case/ld-2.png`,
      },
    ],
  },
  sm: {
    banner: "/customerCase/banner/sm.webp",
    title: t("caseList.sm.title"),
    txt: t("caseList.sm.txt"),
    ysList: [
      t("caseList.sm.ysList[0]"),
      t("caseList.sm.ysList[1]"),
      t("caseList.sm.ysList[2]"),
    ],
    case: [
      {
        name: t("caseList.sm.case[0].name"),
        txt: t("caseList.sm.case[0].txt"),
        img: `/customerCase/case/sm-0.png`,
        rInfo: [
          {
            tit: t("caseList.sm.case[0].rInfo[0].tit"),
            content: [
              {
                name: t("caseList.sm.case[0].rInfo[0].content[0].name"),
                txt: t("caseList.sm.case[0].rInfo[0].content[0].txt"),
              },
              {
                name: t("caseList.sm.case[0].rInfo[0].content[1].name"),
                txt: t("caseList.sm.case[0].rInfo[0].content[1].txt"),
              },
            ],
          },
          {
            tit: t("caseList.sm.case[0].rInfo[1].tit"),
            content: [
              {
                name: t("caseList.sm.case[0].rInfo[1].content[0].name"),
                txt: t("caseList.sm.case[0].rInfo[1].content[0].txt"),
              },
              {
                name: t("caseList.sm.case[0].rInfo[1].content[1].name"),
                txt: t("caseList.sm.case[0].rInfo[1].content[1].txt"),
              },
            ],
          },
          {
            tit: t("caseList.sm.case[0].rInfo[2].tit"),
            imgList: [
              {
                img: `/customerCase/case/sm-gd0.png`,
                name: t("caseList.sm.case[0].rInfo[2].imgList[0].name"),
              },
              {
                img: `/customerCase/case/sm-gd1.png`,
                name: t("caseList.sm.case[0].rInfo[2].imgList[1].name"),
              },
              {
                img: `/customerCase/case/sm-gd2.png`,
                name: t("caseList.sm.case[0].rInfo[2].imgList[2].name"),
              },
            ],
          },
        ],
      },
      {
        name: t("caseList.sm.case[1].name"),
        img: `/customerCase/case/sm-1.png`,
      },
    ],
  },
  bdt: {
    banner: "/customerCase/banner/bdt.webp",
    title: t("caseList.bdt.title"),
    txt: t("caseList.bdt.txt"),
    ysList: [
      t("caseList.bdt.ysList[0]"),
      t("caseList.bdt.ysList[1]"),
      t("caseList.bdt.ysList[2]"),
    ],
    case: [
      {
        name: t("caseList.bdt.case[0].name"),
        img: `/customerCase/case/bdt-0.png`,
        rInfo: [
          {
            tit: t("caseList.bdt.case[0].rInfo[0].tit"),
            content: [
              {
                name: t("caseList.bdt.case[0].rInfo[0].content[0].name"),
                txt: t("caseList.bdt.case[0].rInfo[0].content[0].txt"),
              },
              {
                name: t("caseList.bdt.case[0].rInfo[0].content[1].name"),
                txt: t("caseList.bdt.case[0].rInfo[0].content[1].txt"),
              },
            ],
          },
          {
            tit: t("caseList.bdt.case[0].rInfo[1].tit"),
            content: [
              {
                name: t("caseList.bdt.case[0].rInfo[1].content[0].name"),
                txt: t("caseList.bdt.case[0].rInfo[1].content[0].txt"),
              },
              {
                name: t("caseList.bdt.case[0].rInfo[1].content[1].name"),
                txt: t("caseList.bdt.case[0].rInfo[1].content[1].txt"),
              },
            ],
          },
          {
            tit: t("caseList.bdt.case[0].rInfo[2].tit"),
            imgList: [
              {
                img: `/customerCase/case/sm-gd0.png`,
                name: t("caseList.bdt.case[0].rInfo[2].imgList[0].name"),
              },
              {
                img: `/customerCase/case/sm-gd3.png`,
                name: t("caseList.bdt.case[0].rInfo[2].imgList[1].name"),
              },
            ],
          },
        ],
      },
      {
        name: t("caseList.bdt.case[1].name"),
        img: `/customerCase/case/bdt-1.png`,
      },
      {
        name: t("caseList.bdt.case[2].name"),
        img: `/customerCase/case/bdt-2.png`,
      },
      {
        name: t("caseList.bdt.case[3].name"),
        img: `/customerCase/case/bdt-3.png`,
      },
    ],
  },
  wl: {
    banner: "/customerCase/banner/wl.webp",
    title: t("caseList.wl.title"),
    txt: t("caseList.wl.txt"),
    ysList: [
      t("caseList.wl.ysList[0]"),
      t("caseList.wl.ysList[1]"),
      t("caseList.wl.ysList[2]"),
    ],
    case: [
      {
        name: t("caseList.wl.case[0].name"),
        img: `/customerCase/case/wl-0.png`,
      },
      {
        name: t("caseList.wl.case[1].name"),
        img: `/customerCase/case/wl-1.png`,
      },
      {
        name: t("caseList.wl.case[2].name"),
        img: `/customerCase/case/wl-1.png`,
      },
    ],
  },
};
const goBack = () => {
  router.push({ path: "/CustomerCase" });
};

onMounted(() => {
  actInfo.value = caseList[route.params.case];
});
</script>
<style lang="scss" scoped>
.page-wrapper {
  width: 100vw;
  height: 100%;
  color: #fff;
  padding-top: 89px;
  margin: 0 auto;

  .banner {
    position: relative;
    width: 100vw;
    height: 560px;
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &::before {
      content: "";
      position: absolute;
      width: 100vw;
      height: 480px;
      // background: linear-gradient(180deg, #00000000, #000000),
    }
    .back {
      width: 1384px;
      margin: 64px auto;
    }
    .text-wrapper {
      width: 1384px;
      margin: 0 auto;
      word-wrap: break-word;
      white-space: normal;
      .content-en {
        width: 1100px;
        text-wrap: wrap;
        word-wrap: break-word;
        white-space: normal;
        padding-bottom: 64px;
      }
      .content {
        width: 800px;
        text-wrap: wrap;
        word-wrap: break-word;
        white-space: normal;
        padding-bottom: 64px;
      }
      .banner-title {
        width: 1384px;
        font-size: 56px;
        font-weight: 600;
        line-height: 60px;
        letter-spacing: 0.08em;
        margin-bottom: 24px;
      }

      .banner-txt {
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        text-align: justify;
      }
    }
  }

  .box-container {
    color: #1d1c23;
    width: 1384px;
    padding: 64px 0;
    text-align: center;
    margin: 0 auto;

    .title {
      font-size: 48px;
      font-weight: 500;
      line-height: 67.2px;
      letter-spacing: 0.08em;
      margin-bottom: 64px;
    }

    .cards {
      display: flex;
      justify-content: space-between;
      .card {
        width: 456px;
        height: 180px;
        padding: 24px 16px;
        gap: 8px;
        text-align: left;
        border-top: 1px solid #414344;

        .tit {
          font-size: 32px;
          font-weight: 600;
          line-height: 44px;
        }

        .info {
          color: #1d1c23cc;
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          text-wrap: wrap;
          word-wrap: break-word;
          white-space: normal;
        }
      }
    }

    .al-list {
      display: flex;
      justify-content: space-between;
      margin-top: 64px;
      border-bottom: 1px solid #dfe1e2;
      padding-bottom: 64px;

      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
      .left-info {
        width: 515px;
        text-wrap: wrap;
        word-wrap: break-word;
        white-space: normal;
      }
      .right-info {
        width: 805px;
        text-wrap: wrap;
        word-wrap: break-word;
        white-space: normal;
      }

      .tit {
        font-size: 28px;
        font-weight: 600;
        line-height: 40px;
      }
      .txt,
      .cont-info-tit {
        color: #1d1c23cc;
        font-size: 18px;
        line-height: 24px;
      }
      .cont-info-name {
        font-size: 16px;
        line-height: 22px;
      }
      .img {
        height: 420px;
      }
      .cont-img-item {
        width: 330px;
        .img-name {
          font-size: 20px;
          line-height: 28px;
          width: 155px;
        }
      }
    }
    :deep(.el-collapse-item) {
      background-color: #f4f4f4;
      .el-collapse-item__header {
        background-color: inherit;
      }
      .el-collapse-item__wrap {
        background-color: inherit;
      }
    }
  }
}
@media (max-width: 576px) {
  .page-wrapper {
    .banner {
      height: 320px;
      &::before {
        height: 320px;
      }
      .back {
        width: 358px;
        margin: 24px;
      }
      .text-wrapper {
        width: 358px;
        .content {
          width: 358px;
          padding-bottom: 24px;
          .banner-title {
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 12px;
          }
          .banner-txt {
            font-size: 12px;
            line-height: 16px;
            text-align: justify;
          }
        }
      }
    }
    .box-container {
      width: 358px;
      padding: 24px 0;
      .title {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 24px;
      }
      .cards {
        display: block;
        .card {
          width: 358px;
          text-wrap: wrap;
          word-wrap: break-word;
          white-space: normal;
        }
      }
      .al-list {
        display: block;
        margin-top: 24px;
        padding-bottom: 24px;
        .left-info {
          width: 358px;
        }
        .right-info {
          width: 358px;
        }
        .tit {
          font-size: 16px;
        }
        .img {
          width: 358px;
          height: auto;
        }
        .cont-img-item {
          width: 330px;
          .img-name {
            font-size: 14px;
            line-height: 28px;
          }
        }
      }
    }
  }
}
</style>
