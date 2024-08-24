<template>
  <div class="pg-container">
    <section class="banner flex items-center justify-center">
      <li
        v-if="isSmallSize"
        class="title wow animate__animated animate__fadeInUp"
      >
        {{ technical.tit1 }}
      </li>
      <li
        v-else
        class="wow animate__animated animate__fadeInUp"
        :class="locale === 'en' ? 'title-en' : 'title'"
      >
        {{ technical.tit2 }}
      </li>
    </section>
    <section class="section-wrapper text-center">
      <div class="tit-bg1">
        <li class="title wow animate__animated animate__fadeInUp">
          {{ technical.p1.tit }}
        </li>
        <li class="text wow animate__animated animate__fadeInUp">
          {{ technical.p1.tip }}
        </li>
      </div>
      <div
        class="cont-box"
        @mouseenter="SEC1_ACT = true"
        @mouseleave="SEC1_ACT = false"
      >
        <div class="card">
          <div class="left text-wrap text-left">
            <li
              class="leading-10 font-500 mb-4 wow animate__animated animate__fadeInUp"
              :class="locale === 'en' ? 'title-en' : 'title'"
            >
              {{ technical.p1.card[0].tit }}
            </li>
            <li class="txt wow animate__animated animate__fadeInUp">
              {{ technical.p1.card[0].tip }}
            </li>
          </div>
          <div class="card1-img"></div>
        </div>
        <div class="card">
          <div v-if="isSmallSize" class="left text-wrap text-left">
            <li class="title leading-10 font-500 mb-4">
              {{ technical.p1.card[1].tit }}
            </li>
            <li class="txt">
              {{ technical.p1.card[1].tip }}
            </li>
          </div>
          <div class="card3-img"></div>
          <div v-if="!isSmallSize" class="left text-wrap text-left">
            <li
              class="leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
              :class="locale === 'en' ? 'title-en' : 'title'"
            >
              {{ technical.p1.card[1].tit }}
            </li>
            <li class="txt wow animate__animated animate__fadeInUp">
              {{ technical.p1.card[1].tip }}
            </li>
          </div>
        </div>
        <div class="card">
          <div class="left text-wrap text-left">
            <li
              class="leading-10 font-600 mb-4"
              :class="[
                !isSmallSize ? 'wow animate__animated animate__fadeInUp' : '',
                locale === 'en' ? 'title-en' : 'title',
              ]"
            >
              {{ technical.p1.card[2].tit }}
            </li>
            <li
              class="txt"
              :class="
                !isSmallSize ? 'wow animate__animated animate__fadeInUp' : ''
              "
            >
              {{ technical.p1.card[2].tip }}
            </li>
          </div>
          <div class="card4-img"></div>
        </div>
      </div>
    </section>
    <section class="section-wrapper text-center">
      <div class="tit-bg2">
        <li
          class="title"
          :class="isSmallSize ? '' : 'wow animate__animated animate__fadeInUp'"
        >
          {{ technical.p2.tit }}
        </li>
        <li
          class="text"
          :class="isSmallSize ? '' : 'wow animate__animated animate__fadeInUp'"
        >
          {{ technical.p2.tip }}
        </li>
      </div>
      <div class="flex justify-center flex-wrap">
        <div
          class="card2 flex flex-col justify-between m1 p8 text-left text-wrap"
          v-for="(item, index) in technical.p2.card1"
          :key="index"
        >
          <img
            class="wow animate__animated animate__fadeIn"
            :src="item.img"
            alt=""
          />
          <li class="txt-default wow animate__animated animate__fadeInUp">
            {{ item.txt }}
          </li>
          <li class="txt-hover wow animate__animated animate__fadeInUp">
            {{ item.txt2 }}
          </li>
        </div>
      </div>
      <li class="sec-txt text-left wow animate__animated animate__fadeInUp">
        {{ technical.p2.tip }}
      </li>
    </section>
    <section class="section-wrapper space-y-40">
      <div class="card">
        <div class="left text-wrap text-left">
          <li
            class="leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
            :class="locale === 'en' ? 'title-en' : 'title'"
          >
            {{ technical.p2.card2[0].tit }}
          </li>
          <li class="txt wow animate__animated animate__fadeInUp">
            {{ technical.p2.card2[0].tip }}
          </li>
        </div>
        <!-- <div
          class="se-bg"
          :style="{ backgroundImage: `url(${bannerImg1})` }"
        ></div> -->
        <el-carousel
          :interval="3000"
          class="se-bg"
          height="480px"
          indicator-position="none"
        >
          <el-carousel-item>
            <img class="se-bg" src="/technical/oneClick1.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img class="se-bg" src="/technical/oneClick2.png" alt="" />
          </el-carousel-item>
        </el-carousel>
        <!-- <img class="animate__animated animate__fadeIn" :src="bannerImg1" alt="" /> -->
      </div>
      <div class="card">
        <div v-if="isSmallSize" class="left text-wrap text-left">
          <li
            class="title leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
          >
            {{ technical.p2.card2[1].tit }}
          </li>
          <li class="txt wow animate__animated animate__fadeInUp">
            {{ technical.p2.card2[1].tip1 }}
          </li>
          <li class="txt wow animate__animated animate__fadeInUp">
            {{ technical.p2.card2[1].tip2 }}
          </li>
        </div>
        <el-carousel
          :interval="3000"
          class="se-bg"
          height="480px"
          indicator-position="none"
        >
          <el-carousel-item>
            <img class="se-bg" src="/technical/speed1.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img class="se-bg" src="/technical/speed2.png" alt="" />
          </el-carousel-item>
        </el-carousel>
        <div v-if="!isSmallSize" class="left text-wrap text-left">
          <li
            class="leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
            :class="locale === 'en' ? 'title-en' : 'title'"
          >
            {{ technical.p2.card2[1].tit }}
          </li>
          <li class="txt wow animate__animated animate__fadeInUp">
            {{ technical.p2.card2[1].tip1 }}
          </li>
          <li class="txt wow animate__animated animate__fadeInUp">
            {{ technical.p2.card2[1].tip2 }}
          </li>
        </div>
      </div>
    </section>
    <section class="section-wrapper text-center">
      <li class="title2 wow animate__animated animate__fadeInUp">
        {{ technical.p3.tit }}
      </li>
      <div class="table-box">
        <img
          class="table"
          :class="!isSmallSize ? 'wow animate__animated animate__fadeInUp' : ''"
          src="/technical/table.webp"
          alt=""
        />
      </div>
    </section>
    <section class="section-wrapper sec2 text-center">
      <div class="tit-bg3">
        <li class="title wow animate__animated animate__fadeInUp">
          {{ technical.p4.tit }} <span class="italic skew-x-6">X</span> -Tech™
        </li>
        <li class="text wow animate__animated animate__fadeInUp">
          {{ technical.p4.tip }}
        </li>
      </div>
    </section>
    <section class="section-wrapper">
      <div class="se3-bg relative">
        <img
          class="base-img wow animate__animated animate__fadeIn"
          src="/technical/camera/base.png"
          alt=""
        />
        <img
          v-if="XList[0].act"
          class="add-img wow animate__animated animate__fadeIn"
          :src="'/technical/camera/' + XList[0].act + '.png'"
          alt=""
        />
        <img
          v-if="light.length"
          class="add-img wow animate__animated animate__fadeIn"
          :src="'/technical/camera/' + light[0] + '.png'"
          alt=""
        />
        <img
          v-if="light.length > 1"
          class="add-img wow animate__animated animate__fadeIn"
          :src="'/technical/camera/' + light[1] + '.png'"
          alt=""
        />
        <div class="pz-info text-wrap text-left z-29">
          <li
            class="pz-tit font-600 mb-4 wow animate__animated animate__fadeInUp"
          >
            {{ technical.p4.card.tit }}
          </li>
          <li class="pz-txt wow animate__animated animate__fadeInUp">
            {{ technical.p4.card.tip }}
          </li>
        </div>
        <div class="pz-conf text-wrap text-left px-8 z-29">
          <li class="checked wow animate__animated animate__fadeIn">
            {{ technical.p4.card.tit_r }}
          </li>
          <div class="flex justify-between">
            <div class="flex flex-col text-center">
              <li class="opts-tit wow animate__animated animate__fadeInUp">
                {{ XList[0].tit }}
              </li>
              <li
                class="wow animate__animated animate__fadeInUp"
                :class="XList[0].act === t ? 'active-check' : 'default-check'"
                v-for="t in XList[0].opts"
                :key="t"
                @click="checkBox(0, t)"
              >
                {{ t }}
              </li>
            </div>
            <div class="flex flex-col text-center">
              <li class="opts-tit wow animate__animated animate__fadeInUp">
                {{ XList[1].tit }}
              </li>
              <li
                class="wow animate__animated animate__fadeInUp"
                :class="
                  XList[1].act === t.key ? 'active-check' : 'default-check'
                "
                v-for="t in XList[1].opts"
                :key="t.key"
                @click="checkBox(1, t.key)"
              >
                {{ t.name }}
              </li>
            </div>
            <div class="flex flex-col text-center">
              <li class="opts-tit wow animate__animated animate__fadeInUp">
                {{ XList[2].tit }}
              </li>
              <li
                class="wow animate__animated animate__fadeInUp"
                :class="
                  XList[2].opts[index].act ? 'active-check' : 'default-check'
                "
                v-for="(t, index) in XList[2].opts"
                :key="index"
                @click="checkBox2(index)"
              >
                {{ t.name }}
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-wrapper">
      <div
        class="se4-bg relative"
        :style="{ backgroundImage: `url(${lightInfo[actLightInfo].img})` }"
      >
        <div class="se4-info text-wrap text-left">
          <li class="se4-tit font-600 wow animate__animated animate__fadeInUp">
            {{ technical.p5.tit }}
          </li>
          <img class="se4-img" src="/technical/txt.png" alt="" />
          <li
            v-if="!isSmallSize"
            class="text-5 font-600 leading-7 mb-4 wow animate__animated animate__fadeInUp"
          >
            {{ technical.p5.tip1 }}
          </li>
          <li class="se4-txt wow animate__animated animate__fadeInUp">
            {{ technical.p5.tip2 }}
          </li>
        </div>
        <li class="light-txt font-600">
          {{ technical.p5.imgInfo[actLightInfo].txt }}
        </li>
      </div>
    </section>
    <section class="section-wrapper">
      <div class="se5-bg relative flex justify-between items-center">
        <div class="se5-info text-wrap text-left">
          <li class="se5-tit font-600 wow animate__animated animate__fadeInUp">
            {{ technical.p6.tit }}
          </li>
          <li class="se5-txt1 font-600 wow animate__animated animate__fadeInUp">
            {{ technical.p6.tip }}
          </li>
          <li class="se5-txt2 wow animate__animated animate__fadeInUp">
            {{ technical.p6.txt }}
          </li>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const isSmallSize = ref(window.innerWidth < 576);

const SEC1_ACT = ref(false);
const timer = ref();
const actLightInfo = ref(0);
const lightInfo = [
  {
    img: `/technical/light0.png`,
  },
  {
    img: `/technical/light1.png`,
  },
  {
    img: `/technical/light2.png`,
  },
];

const timer1_num = ref(true);
const bannerImg1 = ref(`/technical/oneClick1.png`);
const bannerImg2 = ref(`/technical/speed1.png`);

const XList = reactive([
  {
    tit: t("technical.p4.card.list[0].tit"),
    opts: ["6mm", "12mm", "16mm"],
    act: "6mm",
  },
  {
    tit: t("technical.p4.card.list[1].tit"),
    opts: [
      {
        name: t("technical.p4.card.list[1].opts[0].name"),
        key: "red",
      },
      {
        name: t("technical.p4.card.list[1].opts[1].name"),
        key: "blue",
      },
    ],
    act: "red",
  },
  {
    tit: t("technical.p4.card.list[2].tit"),
    opts: [
      {
        name: t("technical.p4.card.list[2].opts[0]"),
        key: "zs",
        act: true,
      },
      {
        name: t("technical.p4.card.list[2].opts[1]"),
        key: "pz",
        act: false,
      },
      {
        name: t("technical.p4.card.list[2].opts[2]"),
        key: "jy",
        act: false,
      },
    ],
  },
]);

let light = reactive(["zs-red"]);
const technical = {
  tit1: t("technical.tit1"),
  tit2: t("technical.tit2"),
  p1: {
    tit: t("technical.p1.tit"),
    tip: t("technical.p1.tip"),
    card: [
      {
        tit: t("technical.p1.card[0].tit"),
        tip: t("technical.p1.card[0].tip"),
      },
      {
        tit: t("technical.p1.card[1].tit"),
        tip: t("technical.p1.card[1].tip"),
      },
      {
        tit: t("technical.p1.card[2].tit"),
        tip: t("technical.p1.card[2].tip"),
      },
    ],
  },
  p2: {
    tit: t("technical.p2.tit"),
    tip: t("technical.p2.tip"),
    card1: [
      {
        img: "/technical/icons/card-icon0.png",
        txt: t("technical.p2.card1[0].txt"),
        txt2: t("technical.p2.card1[0].txt2"),
      },
      {
        img: "/technical/icons/card-icon1.png",
        txt: t("technical.p2.card1[1].txt"),
        txt2: t("technical.p2.card1[1].txt2"),
      },
      {
        img: "/technical/icons/card-icon2.png",

        txt: t("technical.p2.card1[2].txt"),
        txt2: t("technical.p2.card1[2].txt2"),
      },
      {
        img: "/technical/icons/card-icon3.png",
        txt: t("technical.p2.card1[3].txt"),
        txt2: t("technical.p2.card1[3].txt2"),
      },
      {
        img: "/technical/icons/card-icon4.png",
        txt: t("technical.p2.card1[4].txt"),
        txt2: t("technical.p2.card1[4].txt2"),
      },
      {
        img: "/technical/icons/card-icon5.png",
        txt: t("technical.p2.card1[5].txt"),
        txt2: t("technical.p2.card1[5].txt2"),
      },
    ],
    txt: t("technical.p2.txt"),
    card2: [
      {
        tit: t("technical.p2.card2[0].tit"),
        tip: t("technical.p2.card2[0].tip"),
      },
      {
        tit: t("technical.p2.card2[1].tit"),
        tip1: t("technical.p2.card2[1].tip1"),
        tip2: t("technical.p2.card2[1].tip2"),
      },
    ],
  },
  p3: {
    tit: t("technical.p3.tit"),
  },
  p4: {
    tit: t("technical.p4.tit"),
    tip: t("technical.p4.tip"),
    card: {
      tit: t("technical.p4.card.tit"),
      tip: t("technical.p4.card.tip"),
      tit_r: t("technical.p4.card.tit_r"),
      list: [
        {
          tit: t("technical.p4.card.list[0].tit"),
          opts: [
            t("technical.p4.card.list[0].opts[0]"),
            t("technical.p4.card.list[0].opts[1]"),
            t("technical.p4.card.list[0].opts[2]"),
          ],
        },
        {
          tit: t("technical.p4.card.list[1].tit"),
          opts: [
            {
              name: t("technical.p4.card.list[1].opts[0].name"),
              key: t("technical.p4.card.list[1].opts[0].key"),
            },
            {
              name: t("technical.p4.card.list[1].opts[1].name"),
              key: t("technical.p4.card.list[1].opts[1].key"),
            },
          ],
        },
        {
          tit: t("technical.p4.card.list[2].tit"),
          opts: [
            {
              name: t("technical.p4.card.list[2].opts[0]"),
              key: "zs",
            },
            {
              name: t("technical.p4.card.list[2].opts[1]"),
              key: "pz",
            },
            {
              name: t("technical.p4.card.list[2].opts[2]"),
              key: "jy",
            },
          ],
        },
      ],
    },
  },
  p5: {
    tit: t("technical.p5.tit"),
    tip1: t("technical.p5.tip1"),
    tip2: t("technical.p5.tip2"),
    imgInfo: [
      {
        txt: t("technical.p5.imgInfo[0].txt"),
        img: `/technical/light0.png`,
      },
      {
        txt: t("technical.p5.imgInfo[1].txt"),
        img: `/technical/light1.png`,
      },
      {
        txt: t("technical.p5.imgInfo[2].txt"),
        img: `/technical/light2.png`,
      },
    ],
  },
  p6: {
    tit: t("technical.p6.tit"),
    tip: t("technical.p6.tip"),
    txt: t("technical.p6.txt"),
  },
};

const checkBox = (index: number, t: string) => {
  XList[index].act = t;
  if (index === 1) {
    light = [];
    XList[2].opts[0].act = XList[2].opts[1].act = false;
  }
};

const checkBox2 = (i: number) => {
  if (i === 2) {
    XList[2].opts[2].act = !XList[2].opts[2].act;
    XList[2].opts[0].act = XList[2].opts[1].act = false;
    light = XList[2].opts[2].act ? ["jy"] : [];
  } else {
    light = XList[2].opts[2].act ? [] : light;
    XList[2].opts[2].act = false;
    XList[2].opts[i].act = !XList[2].opts[i].act;
    XList[2].opts[i].act
      ? light.push(XList[2].opts[i].key + "-" + XList[1].act)
      : light.pop();
  }
};
onMounted(() => {
  timer.value = setInterval(() => {
    bannerImg1.value = timer1_num.value
      ? `/technical/oneClick1.png`
      : `/technical/oneClick2.png`;
    bannerImg2.value = timer1_num.value
      ? `/technical/speed1.png`
      : `/technical/speed2.png`;
    nextTick(() => {
      timer1_num.value = !timer1_num.value;
    });

    if (actLightInfo.value < 2) {
      actLightInfo.value++;
    } else {
      actLightInfo.value = 0;
    }
  }, 3000);
});
</script>
<style lang="scss" scoped>
.pg-container {
  width: 100vw;
  height: 100%;
  color: #fff;
  margin-top: 88px;
  background-color: #000;

  .banner {
    width: 100vw;
    height: 100vh;
    max-height: 1020px;
    background-image: url("/technical/banner.webp");
    background-size: cover;
    background-position: center center;

    .title-en {
      width: 1200px;
      text-align: center;
      font-size: 64px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 4.48px;
      position: relative;
      z-index: 9;
      text-wrap: wrap;
      word-wrap: break-word;
      white-space: normal;
    }
    .title {
      font-size: 56px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 4.48px;
      position: relative;
      z-index: 9;
      text-wrap: wrap;
      word-wrap: break-word;
      white-space: normal;
    }
  }

  .section-wrapper {
    width: 1384px;
    margin: 0 auto;
    background-color: #000;

    .tit-bg1 {
      padding-top: 128px;
      position: relative;
      background-size: cover;
      background-position: top center;
      background-image: url("/technical/tit-bg1.webp");

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 228px;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.8)
        );
        pointer-events: none;
      }
    }

    .tit-bg2 {
      padding: 128px 0;
      position: relative;
      background-size: cover;
      background-position: center center;
      background-image: url("/technical/tit-bg2.webp");

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 355px;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 1)
        );
        pointer-events: none;
      }
    }

    .tit-bg3 {
      padding: 128px 0;
      position: relative;
      background-size: cover;
      background-position: center center;
      background-image: url("/technical/tit-bg3.webp");

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 355px;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 1)
        );
        pointer-events: none;
      }
    }

    .se3-bg {
      height: 910px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .pz-info {
        width: 320px;
        .pz-tit {
          font-size: 28px;
          line-height: 40px;
        }
        .pz-txt {
          color: #a3a8ab;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;
          text-align: justify;
        }
      }
      .pz-conf {
        width: 320px;
        .checked {
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          text-align: justify;
        }
        .opts-tit {
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;
          text-align: justify;
        }
      }
      .base-img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        z-index: 5;
      }

      .add-img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        z-index: 9;
      }

      .opts-tit {
        color: #a3a8ab;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
      }

      .checked {
        color: #f4f4f4;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        margin-bottom: 32px;
      }

      .default-check {
        min-width: 64px;
        cursor: pointer;
        margin-top: 16px;
        padding: 10px;
        border-radius: 99px;
        border: 1px solid #a3a8ab;
      }

      .active-check {
        color: #1d1c23;
        cursor: pointer;
        margin-top: 16px;
        padding: 10px;
        border-radius: 99px;
        background-color: #a3a8ab;
        border: 1px solid #a3a8ab;
        transition: all 0.3s ease-in-out;
      }
    }

    .se4-bg {
      height: 850px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.8s ease-in-out;
      background-size: cover;
      background-position: center center;

      .se4-info {
        width: 352px;
        .se4-tit {
          font-size: 28px;
          line-height: 40px;
          margin-bottom: 16px;
        }
        // .se4-img {
        //   height: 18px;
        //   margin-bottom: 12px;
        // }
        .se4-txt {
          color: #a3a8ab;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;
          text-align: justify;
        }
      }

      .light-txt {
        width: 300px;
        text-wrap: wrap;
        position: absolute;
        font-size: 1.75rem;
        line-height: 40px;
        bottom: 12.5rem;
        right: 8rem;
      }
      .light-img {
        position: absolute;
        right: 0;
        height: 80vh;
      }
    }

    .se5-bg {
      height: 910px;
      background-image: url("/public/technical/sec5-bg.webp");
      background-repeat: no-repeat;
      background-size: 80%;
      background-position: center right;
      .se5-info {
        width: 320px;
        .se5-tit {
          font-size: 28px;
          line-height: 40px;
          margin-bottom: 16px;
        }
        .se5-txt1 {
          font-size: 20px;
          margin-bottom: 12px;
        }
        .se5-txt2 {
          font-size: 16px;
          color: #a3a8ab;
        }
      }
    }

    .table {
      width: 1384px;
    }

    .title {
      position: relative;
      font-size: 48px;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 3.84px;
      z-index: 9;
    }
    .title2 {
      position: relative;
      font-size: 48px;
      font-weight: 500;
      padding: 64px 0;
      line-height: normal;
      letter-spacing: 3.84px;
      z-index: 9;
    }
    .sec-txt {
      padding-top: 32px;
      padding-bottom: 128px;
    }
    .text {
      position: relative;
      font-size: 24px;
      line-height: 32px;
      z-index: 9;
      text-wrap: wrap;
      word-wrap: break-word;
      white-space: normal;
    }

    .cont-box {
      margin-top: 153px;
      height: auto;
    }

    .card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 475px;
      .left {
        flex: 0 0 auto;
        width: 368px;
        .title {
          font-size: 40px;
          font-weight: 600;
        }
        .title-en {
          font-size: 24px;
          font-weight: 600;
        }
        .txt {
          color: #a3a8ab;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          text-align: justify;
        }
      }

      .card1-img {
        width: 922px;
        height: 475px;
        background-image: url("/technical/se1-card1.webp");
        background-size: cover;
        background-position: center center;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-image: url("/technical/se1-card1-hover.webp");
        }
      }

      .card3-img {
        width: 922px;
        height: 475px;
        background-image: url("/technical/se1-card3.webp");
        background-size: cover;
        background-position: center center;
        transition: all 0.5s ease-in-out;

        &:hover {
          background-image: url("/technical/se1-card3-hover.webp");
        }
      }

      .card4-img {
        width: 922px;
        height: 475px;
        background-image: url("/technical/se1-card4.webp");
        background-size: cover;
        background-position: center center;
        transition: all 0.5s ease-in-out;

        &:hover {
          background-image: url("/technical/se1-card4-hover.webp");
        }
      }
    }

    .se-bg {
      width: 922px;
      height: 475px;
      background-size: cover;
      background-position: center center;
      transition: all 1s ease-in-out;
    }

    .card2 {
      width: 450px;
      height: 280px;
      background-color: #111212;

      img {
        width: 64px;
      }

      .txt-default {
        display: block;
      }

      .txt-hover {
        display: none;
      }

      &:hover {
        transition: all 0.5s ease-in-out;
        background-color: #414344;

        .txt-default {
          display: none;
        }

        .txt-hover {
          display: block;
        }
      }
    }

    .btn-white {
      font-size: 14px;
      line-height: 20px;
      padding: 10px 32px;
      border-radius: 99px;
      color: #1d1c23;
      background-color: #fff;
      border: 1px solid #1d1c23;
    }

    .btn-black {
      height: auto;
      width: 212px;
      font-size: 14px;
      line-height: 20px;
      padding: 10px 32px;
      border-radius: 99px;
      color: #fff;
      background-color: #1d1c23;
      border: 1px solid #fefefe;
      &:hover {
        background-color: #414344;
      }
    }
  }
}
@media (max-width: 576px) {
  .pg-container {
    .banner {
      max-height: 400px;
      .title {
        width: 195px;
        text-align: center;
        text-wrap: wrap;
        word-wrap: break-word;
        white-space: normal;
        font-size: 24px;
        letter-spacing: normal;
      }
    }
    .section-wrapper {
      width: 358px;
      .tit-bg1 {
        padding: 64px 0;
        &::before {
          height: 194px;
        }
      }
      .tit-bg2 {
        padding: 64px 0;
        &::before {
          height: 200px;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.6)
          );
        }
      }
      .tit-bg3 {
        padding: 64px 0;
        &::before {
          height: 226px;
        }
      }
      .sec-txt {
        font-size: 12px;
        color: #a3a8ab;
        padding-top: 12px;
        padding-bottom: 64px;
      }
      .cont-box {
        margin-top: 0;
      }
      .card {
        height: auto;
        display: block;
        margin-top: 12px;
        .left {
          width: 340px;
          text-wrap: wrap;
          word-wrap: break-word;
          white-space: normal;
          .title {
            font-size: 16px;
          }
          .txt {
            font-size: 14px;
          }
        }
        .card1-img {
          width: 358px;
          height: 168px;
        }
        .card3-img {
          width: 358px;
          height: 168px;
        }
        .card4-img {
          width: 358px;
          height: 168px;
        }
      }
      .se-bg {
        width: 358px;
        height: 189px;
      }
      .se3-bg {
        height: 760px;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .pz-info {
          width: 320px;
          margin: 0 auto;
          text-wrap: wrap;
          word-wrap: break-word;
          white-space: normal;
          .pz-tit {
            font-size: 14px;
            line-height: 20px;
          }
        }
        .base-img {
          top: 160px;
          transform: translateY(0);
          transform: scale(2);
        }
        .add-img {
          top: 160px;
          transform: translateY(0);
          transform: scale(2);
        }
        .pz-conf {
          width: 320px;
          margin: 0 auto;
          margin-bottom: 40px;
          z-index: 999;
        }
        .checked {
          margin-bottom: 24px;
        }
      }
      .se4-bg {
        width: 358px;
        height: 420px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-size: 150%;
        background-repeat: no-repeat;
        background-position: bottom;
        .se4-info {
          width: 320px;
          text-wrap: wrap;
          word-wrap: break-word;
          white-space: normal;
          .se4-tit {
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 8px;
          }
          .se4-img {
            height: 18px;
            margin-bottom: 12px;
          }
          .se4-txt {
            font-size: 14px;
            color: #a3a8ab;
          }
        }
        .light-txt {
          width: 320px;
          position: absolute;
          font-size: 18px;
          line-height: 40px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .se5-bg {
        width: 358px;
        height: 380px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 0 120px;
        .se5-info {
          width: 320px;
          text-wrap: wrap;
          word-wrap: break-word;
          white-space: normal;
          .se5-tit {
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 8px;
          }
          .se5-txt1 {
            font-size: 14px;
          }
          .se5-txt2 {
            font-size: 14px;
            color: #a3a8ab;
          }
        }
      }
      .table-box {
        width: auto;
        overflow-x: scroll;
        .table {
          width: 589px;
        }
      }

      .card2 {
        width: 358px;
        height: 180px;
        text-wrap: wrap;
        word-wrap: break-word;
        white-space: normal;
      }
      .title {
        font-size: 24px;
        letter-spacing: normal;
      }
      .title2 {
        font-size: 24px;
        letter-spacing: normal;
        padding-top: 64px;
        padding-bottom: 32px;
      }
      .text {
        text-wrap: wrap;
        word-wrap: break-word;
        white-space: normal;
        font-size: 16px;
      }
    }
  }
}
</style>
