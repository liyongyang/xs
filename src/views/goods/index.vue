<script setup>
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();

const card = [
  t("gdList.card[0]"),
  t("gdList.card[1]"),
  t("gdList.card[2]"),
  t("gdList.card[3]"),
];
const gdList = {
  R: [
    {
      img: `/goods/g-r275.png`,
      title: "R275-A",
      path: "R275A",
      info: [
        {
          img: "/goods/r275-0.webp",
          title: t("gdList.r27x[0].title"),
          txt: t("gdList.r27x[0].txt"),
        },
        {
          img: "/goods/r275-1.webp",
          title: t("gdList.r27x[1].title"),
          txt: t("gdList.r27x[1].txt"),
        },
        {
          img: "/goods/r275-2.webp",
          title: t("gdList.r27x[2].title"),
          txt: t("gdList.r27x[2].txt"),
        },
        {
          img: "/goods/r275-3.webp",
          title: t("gdList.r27x[3].title"),
          txt: t("gdList.r27x[3].txt"),
        },
      ],
    },
    {
      img: `/goods/g-r170.png`,
      title: "R270-A",
      path: "R275A",
      info: [
        {
          img: "/goods/r275-0.webp",
          title: t("gdList.r27x[0].title"),
          txt: t("gdList.r27x[0].txt"),
        },
        {
          img: "/goods/r275-1.webp",
          title: t("gdList.r27x[1].title"),
          txt: t("gdList.r27x[1].txt"),
        },
        {
          img: "/goods/r275-2.webp",
          title: t("gdList.r27x[2].title"),
          txt: t("gdList.r27x[2].txt"),
        },
        {
          img: "/goods/r275-3.webp",
          title: t("gdList.r27x[3].title"),
          txt: t("gdList.r27x[3].txt"),
        },
      ],
    },
    {
      img: `/goods/g-r172.png`,
      title: "R172-E/S",
      path: "R17",
      info: [
        {
          img: "/goods/r172-0.webp",
          title: t("gdList.r17x[0].title"),
          txt: t("gdList.r17x[0].txt"),
        },
        {
          img: "/goods/r172-1.webp",
          title: t("gdList.r17x[1].title"),
          txt: t("gdList.r17x[1].txt"),
        },
        {
          img: "/goods/r172-2.webp",
          title: t("gdList.r17x[2].title"),
          txt: t("gdList.r17x[2].txt"),
        },
        {
          img: "/goods/r172-3.webp",
          title: t("gdList.r17x[3].title"),
          txt: t("gdList.r17x[3].txt"),
        },
      ],
    },
    {
      img: `/goods/g-r172.png`,
      title: "R170-E/S",
      path: "R17",
      info: [
        {
          img: "/goods/r172-0.webp",
          title: t("gdList.r17x[0].title"),
          txt: t("gdList.r17x[0].txt"),
        },
        {
          img: "/goods/r172-1.webp",
          title: t("gdList.r17x[1].title"),
          txt: t("gdList.r17x[1].txt"),
        },
        {
          img: "/goods/r172-2.webp",
          title: t("gdList.r17x[2].title"),
          txt: t("gdList.r17x[2].txt"),
        },
        {
          img: "/goods/r172-3.webp",
          title: t("gdList.r17x[3].title"),
          txt: t("gdList.r17x[3].txt"),
        },
      ],
    },
  ],
  RS: [
    {
      img: `/goods/g-rs100.png`,
      title: "RS100",
      path: "RS100",
      info: [
        {
          img: "/goods/rs100-0.webp",
          title: t("gdList.RS100[0].title"),
          txt: t("gdList.RS100[0].txt"),
        },
        {
          img: "/goods/rs100-1.webp",
          title: t("gdList.RS100[1].title"),
          txt: t("gdList.RS100[1].txt"),
        },
        {
          img: "/goods/rs100-2.webp",
          title: t("gdList.RS100[2].title"),
          txt: t("gdList.RS100[2].txt"),
        },
        {
          img: "/goods/rs100-3.webp",
          title: t("gdList.RS100[3].title"),
          txt: t("gdList.RS100[3].txt"),
        },
      ],
    },
    {
      img: `/goods/g-rs300.png`,
      title: "RS300",
      path: "RS300",
      info: [
        {
          img: "",
          title: "-",
          txt: "-",
        },
        {
          img: "",
          title: "-",
          txt: "-",
        },
        {
          img: "",
          title: "-",
          txt: "-",
        },
        {
          img: "",
          title: "-",
          txt: "-",
        },
      ],
    },
  ],
  H: [
    {
      img: `/goods/g-h920.png`,
      title: t("gdList.Hlist[0]"),
      path: "H920",
      info: [
        {
          img: "/goods/h920-0.webp",
          title: t("gdList.H[0].title"),
          txt: t("gdList.H[0].txt"),
        },
        {
          img: "/goods/h920-1.webp",
          title: t("gdList.H[1].title"),
          txt: t("gdList.H[1].txt"),
        },
        {
          img: "/goods/h920-2.webp",
          title: t("gdList.H[2].title"),
          txt: t("gdList.H[2].txt"),
        },
        {
          img: "/goods/h920-3.webp",
          title: t("gdList.H[3].title"),
          txt: t("gdList.H[3].txt"),
        },
      ],
    },
    {
      img: `/goods/g-h920-2.png`,
      title: t("gdList.Hlist[1]"),
      path: "H920",
      info: [
        {
          img: "/goods/h920-0.webp",
          title: t("gdList.H[0].title"),
          txt: t("gdList.H[0].txt"),
        },
        {
          img: "/goods/h920-1.webp",
          title: t("gdList.H[1].title"),
          txt: t("gdList.H[1].txt"),
        },
        {
          img: "/goods/h920-2.webp",
          title: t("gdList.H[2].title"),
          txt: t("gdList.H[2].txt"),
        },
        {
          img: "/goods/h920-3.webp",
          title: t("gdList.H[3].title"),
          txt: t("gdList.H[3].txt"),
        },
      ],
    },
  ],
};

const actGd = ref();

const act = ref("R");
const actSlider = ref();
const isSmallSize = ref(window.innerWidth < 576);

watch(
  route,
  () => {
    const key = route.query.type;
    act.value = key;
    if (act.value) {
      actGd.value = gdList[act.value];
      actSlider.value = actGd.value[0];
    }
  },
  { immediate: true, deep: true }
);

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

const getAct = (key) => {
  act.value = key;
  router.push({ query: { type: key } });
};
const carouselChange = (v) => {
  actSlider.value = actGd.value[v];
};

const toDetail = (v) => {
  router.push(`/goods/${v.path}`);
};
onMounted(() => {});

onUnmounted(() => {});
</script>

<template>
  <div class="pg-container">
    <section v-if="!act" class="section-wrapper flex flex-wrap space-x-4">
      <div
        class="card bg0 flex flex-col justify-between wow animate__animated animate__fadeIn"
      >
        <li class="title p4 text-center">{{ card[0] }}</li>
        <div class="h16 bg-black text-left p4 pt-8">
          <el-button class="btn-white" @click="openDialog()">{{
            t("common.footer.info1.txt1")
          }}</el-button>
        </div>
      </div>
      <div class="card2 space-x-2">
        <div
          class="cl cursor-pointer bg1 flex flex-col justify-end wow animate__animated animate__fadeIn"
          @click="getAct('R')"
        >
          <li :class="locale === 'en' ? 'title-en' : 'title'">
            {{ card[1] }}
          </li>
          <li class="more h16 bg-black p4 pt-8">{{ t("common.btn.more") }}</li>
        </div>
        <div
          class="cl cursor-pointer bg2 flex flex-col justify-end wow animate__animated animate__fadeIn"
          @click="getAct('RS')"
        >
          <li :class="locale === 'en' ? 'title-en' : 'title'">
            {{ card[2] }}
          </li>
          <li class="more h16 cursor-pointer bg-black p4 pt-8">
            {{ t("common.btn.more") }}
          </li>
        </div>
        <div
          class="cl cursor-pointer bg3 flex flex-col justify-end wow animate__animated animate__fadeIn"
          @click="getAct('H')"
        >
          <li :class="locale === 'en' ? 'title-en' : 'title'">
            {{ card[3] }}
          </li>
          <li class="more h16 cursor-pointer bg-black p4 pt-8">
            {{ t("common.btn.more") }}
          </li>
        </div>
      </div>
    </section>
    <section v-else class="section-wrapper">
      <div class="back wow animate__animated animate__fadeInUp">
        <li class="flex items-center py-2 px-3 cursor-pointer">
          <el-icon>
            <ArrowLeftBold />
          </el-icon>
          <span class="text-3.5 px-3" @click="act = ''">{{
            t("common.back")
          }}</span>
        </li>
      </div>
      <div v-if="actGd" class="gd-wrapper flex flex-wrap justify-between">
        <div class="banner-slider text-center">
          <el-carousel
            :autoplay="false"
            :height="isSmallSize ? '424px' : '550px'"
            indicator-position="none"
            @change="carouselChange"
            arrow="always"
          >
            <el-carousel-item v-for="(item, index) in actGd" :key="index">
              <div class="sliders">
                <div class="mx-auto flex justify-center item-center">
                  <img class="slider-img" :src="item.img" alt="" />
                </div>
                <li class="title wow animate__animated animate__fadeInUp">
                  {{ item.title }}
                </li>
                <el-button
                  class="btn-black wow animate__animated animate__fadeInUp"
                  @click="toDetail(item)"
                  >{{ t("common.btn.more") }}</el-button
                >
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div
          v-if="actSlider"
          class="banner-info flex flex-wrap justify-between"
        >
          <div v-for="(item, index) in actSlider.info" :key="index">
            <div
              class="feat-img wow animate__animated animate__fadeIn"
              :style="{ 'background-image': 'url(' + item.img + ')' }"
            ></div>
            <div class="feat-info space-y-2">
              <li class="tit wow animate__animated animate__fadeInUp">
                {{ item.title }}
              </li>
              <li class="txt wow animate__animated animate__fadeInUp">
                {{ item.txt }}
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.pg-container {
  color: #fff;
  position: relative;
  width: 100vw;
  height: 100%;
  padding-top: 88px;
  background-color: #000;

  .section-wrapper {
    width: 1384px;
    padding: 128px 0;
    margin: 0 auto;
    .back {
      // position: absolute;
      // padding-top: 140px;
    }
    .card {
      width: 382px;
      height: 552px;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #111112;
    }
    .card2 {
      display: flex;
    }

    .cl {
      color: #f4f4f4;
      width: 306px;
      height: 552px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-color: #111112;

      .title {
        font-size: 28px;
        font-weight: 600;
        line-height: 40px;
        padding: 16px;
      }
      .title-en {
        font-size: 19px;
        font-weight: 600;
        line-height: 24px;
        padding: 16px;
      }

      .more {
        color: #a3a8ab;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }

    .bg0 {
      background-image: url("/public/goods/home/home.webp");
    }

    .bg1 {
      background-image: url("/public/goods/home/r.webp");
    }

    .bg2 {
      background-image: url("/public/goods/home/rs.webp");
    }

    .bg3 {
      background-image: url("/public/goods/home/h.webp");
    }

    .card-t2 {
      width: 306px;
    }
  }

  .gd-wrapper {
    color: #fff;
    position: relative;
    background-color: #000;

    .banner-slider {
      width: 515px;
      height: 552px;
      .sliders {
        line-height: 48px;
        .slider-img {
          width: 253px;
        }
      }
      .slider {
        width: 253px;
        height: 404px;
        border-radius: 999px;
        overflow: hidden;
        border: 1px solid #000;
        background-color: #111212;
        background-size: cover;
        background-position: center center;
      }
    }

    .banner-info {
      width: 805px;
      height: 552px;

      .feat-img {
        width: 398px;
        height: 190px;
        background-size: cover;
        background-position: top center;
      }

      .feat-info {
        width: 398px;
        text-wrap: wrap;
        word-wrap: break-word;
        white-space: normal;
        padding: 16px;
        padding-right: 0;
        background-color: #111212;

        .tit {
          color: #f4f4f4;
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
        }

        .txt {
          color: #a3a8ab;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
      }
    }
  }

  .title {
    color: #f4f4f4;
    font-size: 32px;
    font-weight: 600;
    line-height: 44px;
    padding: 16px;
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
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    padding: 10px 32px;
    border-radius: 99px;
    background-color: #1d1c23;
    &:hover {
      background-color: #414344;
    }
  }
}
@media (max-width: 576px) {
  .pg-container {
    padding-top: 0px;
    .section-wrapper {
      width: 358px;
      padding: 0;
      // padding-top: 88px;
      padding-bottom: 32px;
      .back {
        // position: absolute;
        padding-top: 88px;
        z-index: 99;
      }
      .card {
        width: 358px;
        height: 487px;
        margin: 0 auto;
      }
      .card2 {
        display: flex;
        width: 358px;
        margin: 0 auto;
        overflow: scroll;
      }
      .cl {
        flex: 0 0 auto;
        width: 228px;
        height: 400px;
        margin-top: 32px;
      }
    }
    .gd-wrapper {
      .banner-slider {
        width: 358px;
        height: 424px;
        margin-top: 88px;
        .sliders {
          line-height: 48px;
        }
        .slider {
        }
        .slider-img {
          width: 185px;
          height: 280px;
        }
      }
    }
  }
}
</style>
