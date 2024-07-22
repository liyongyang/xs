<template>
  <div class="pg-container">
    <section class="banner flex items-center justify-center">
      <li class="title wow animate__animated animate__fadeInUp">
        全栈软硬件自研，强大性能表现
      </li>
    </section>
    <section class="section-wrapper text-center">
      <div class="tit-bg1 h57">
        <li class="title pt-32 wow animate__animated animate__fadeInUp">
          视觉机器算法引擎™
        </li>
        <li class="text wow animate__animated animate__fadeInUp">
          完全自主研发解码算法 IP，性能强劲、解码稳定
        </li>
      </div>
      <div
        class="cont-box"
        @mouseenter="SEC1_ACT = true"
        @mouseleave="SEC1_ACT = false"
      >
        <div class="card flex items-center justify-between">
          <div class="left text-wrap text-left">
            <li
              class="title leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
            >
              超分辨率算法™️
            </li>
            <li class="txt wow animate__animated animate__fadeInUp">
              等效3MP镜头读码效果，支持读取最小尺寸单元 1mil 的一维码，1.5mil
              的二维码1MP镜头=3MP镜头成像效果，3倍成像质量提升
            </li>
          </div>
          <div class="card1-img"></div>
        </div>
        <div class="card flex items-center justify-between">
          <div class="card3-img"></div>
          <div class="left text-wrap text-left">
            <li
              class="title leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
            >
              专利 SPL 技术™️
            </li>
            <li class="txt wow animate__animated animate__fadeInUp">
              专利亚像素定位技术精度可达0.02Pixel，即使定位器（L角）缺陷达30%也能轻松读取
            </li>
          </div>
        </div>
        <div class="card flex items-center justify-between">
          <div class="left text-wrap text-left">
            <li
              class="title leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
            >
              自研增强算法
            </li>
            <li class="txt wow animate__animated animate__fadeInUp">
              ⾃研增加算法，即使对⽐度低⾄ 2%
              的条码也能够稳定读取，⼀个近乎看不尽的DM码（2%对⽐度），通过算法实现增强⾄明显看到，并成功解码
            </li>
          </div>
          <div class="card4-img"></div>
        </div>
      </div>
    </section>
    <section class="section-wrapper text-center">
      <div class="tit-bg2 py-32">
        <li class="title wow animate__animated animate__fadeInUp">
          一键调试 OneClick
        </li>
        <li class="text wow animate__animated animate__fadeInUp">
          不止是调光，更是自适应算法调参，达到最优解码
        </li>
      </div>
      <div class="flex justify-center flex-wrap">
        <div
          class="card2 flex flex-col justify-between m1 p8 text-left text-wrap"
          v-for="(item, index) in oneClickCards"
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
      <li class="pt8 pb-32 text-left wow animate__animated animate__fadeInUp">
        仅限具备一键调试+ OneClick Plus 功能的读码器产品
      </li>
    </section>
    <section class="section-wrapper space-y-40">
      <div class="card flex items-center justify-between">
        <div class="left text-wrap text-left">
          <li
            class="title leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
          >
            极致易用
          </li>
          <li class="txt wow animate__animated animate__fadeInUp">
            仅需通过机身按钮或软件按钮，OneClick 即可实现解码
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
      <div class="card flex items-center justify-between">
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
        <div class="left text-wrap text-left">
          <li
            class="title leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
          >
            极致性能
          </li>
          <li class="txt wow animate__animated animate__fadeInUp">
            对于C级以上条码，⼀键调试 Max 单码平均解码耗时为
            20ms，相⽐同级产品速度提升 2 倍
          </li>
          <li class="txt wow animate__animated animate__fadeInUp">
            对于条形码，⼀键调试 Max 单码平均解码耗时为
            10ms，相⽐同级产品速度提升 3 倍
          </li>
        </div>
      </div>
    </section>
    <section class="section-wrapper text-center">
      <li class="title pt-32 pb-16 wow animate__animated animate__fadeInUp">
        对比表格
      </li>
      <img
        class="table wow animate__animated animate__fadeInUp"
        src="/technical/table.webp"
        alt=""
      />
    </section>
    <section class="section-wrapper sec2 text-center">
      <div class="tit-bg3 py-32">
        <li class="title wow animate__animated animate__fadeInUp">
          全新光学系统 <span class="italic skew-x-6">X</span> -Tech™
        </li>
        <li class="text wow animate__animated animate__fadeInUp">
          多种镜头规格、光源颜色及光源类型，灵活组合以高可配置性应对不同场景需求
        </li>
      </div>
    </section>
    <section class="section-wrapper">
      <div class="se3-bg relative flex justify-between items-center">
        <img
          class="base-img wow animate__animated animate__fadeIn"
          src="/technical/camera/base.png"
          alt=""
        />
        <img
          class="add-img wow animate__animated animate__fadeIn"
          :src="'/technical/camera/' + XList[0].act + '.png'"
          alt=""
        />
        <img
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
        <div class="w80 text-wrap text-left z-29">
          <li
            class="text-7 leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
          >
            灵活配置
          </li>
          <li wow animate__animated animate__fadeInUp>
            多种镜头焦段、光源颜色、光源类型，满足多样化需求
          </li>
        </div>
        <div class="w80 text-wrap text-left px-8 z-29">
          <li class="checked wow animate__animated animate__fadeIn">
            3 × 3 × 3 灵活配置
          </li>
          <div class="flex justify-between">
            <div class="flex flex-col text-center">
              <li class="opts-tit wow animate__animated animate__fadeInUp">
                {{ XList[0].title }}
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
                {{ XList[1].title }}
              </li>
              <li
                class="wow animate__animated animate__fadeInUp"
                :class="
                  XList[1].act === t.name ? 'active-check' : 'default-check'
                "
                v-for="t in XList[1].opts"
                :key="t.key"
                @click="checkBox(1, t.name)"
              >
                {{ t.name }}
              </li>
            </div>
            <div class="flex flex-col text-center">
              <li class="opts-tit wow animate__animated animate__fadeInUp">
                {{ XList[2].title }}
              </li>
              <li
                class="wow animate__animated animate__fadeInUp"
                :class="
                  XList[2].opts[index].act ? 'active-check' : 'default-check'
                "
                v-for="(t, index) in XList[2].opts"
                :key="index.key"
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
        class="se4-bg relative flex justify-between items-center"
        :style="{ backgroundImage: `url(${lightInfo[actLightInfo].img})` }"
      >
        <div class="w88 text-wrap text-left">
          <li
            class="text-7 leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
          >
            无限组合光源技术
          </li>
          <img src="/technical/txt.png" alt="" />
          <li
            class="text-5 font-600 leading-7 mb-4 wow animate__animated animate__fadeInUp"
          >
            首创技术极大提升解码稳定性和性能
          </li>
          <li class="wow animate__animated animate__fadeInUp">
            首创技术极大提升解码稳定性和性能搭配一键调试
            Max，自动选择光源强度及光源类型，相比以往单一光源解码，组合光源解码可极大提升解码性能
          </li>
        </div>
        <li class="absolute bottom-50 right-32 text-7 leading-10 font-600">
          {{ lightInfo[actLightInfo].txt }}
        </li>
      </div>
    </section>
    <section class="section-wrapper">
      <div class="se5-bg relative flex justify-between items-center">
        <div class="w88 text-wrap text-left">
          <li
            class="text-7 leading-10 font-600 mb-4 wow animate__animated animate__fadeInUp"
          >
            同轴瞄准
          </li>
          <li
            class="text-5 font-600 leading-7 mb-3 wow animate__animated animate__fadeInUp"
          >
            指哪读哪，所见即所扫
          </li>
          <li class="wow animate__animated animate__fadeInUp">
            旗舰级瞄准技术，全面改善手持式读码器瞄准偏移现象，不再担心漏扫情况
          </li>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref, watch } from "vue";

const oneClickCards = [
  {
    img: "/technical/icons/card-icon0.png",
    txt: "自适应光源",
    txt2: "灵活组合光源以自适应性、高可配置性应对不同场景需求",
  },
  {
    img: "/technical/icons/card-icon1.png",
    txt: "自动调参",
    txt2: "最高达192万种参数配置1，自 动优化曝光、增益、滤波等 参数，应对挑战性读码情况",
  },
  {
    img: "/technical/icons/card-icon2.png",
    txt: "自适应算法",
    txt2: "自动匹配机器视觉算法引擎TM的CV算法、AI 算法",
  },
  {
    img: "/technical/icons/card-icon3.png",
    txt: "自动对焦",
    txt2: "自动适应各种条码尺寸和工作距离",
  },
  {
    img: "/technical/icons/card-icon4.png",
    txt: "自识别条码类型",
    txt2: "自动检测1D码/2D码，根据条码类型调取预定义条码模版库，提高读取速度",
  },
  {
    img: "/technical/icons/card-icon5.png",
    txt: "无限光源组合技术",
    txt2: "自主根据读码样本、工况， 智能选择最优光源强度及光源类型，极大提升解码性能",
  },
];

const SEC1_ACT = ref(false);
const timer = ref();
const actLightInfo = ref(0);
const lightInfo = [
  {
    txt: "50%直射光+50%偏振光",
    img: `/technical/light0.png`,
  },
  {
    txt: "80%直射光+20%偏振光",
    img: `/technical/light1.png`,
  },
  {
    txt: "100%均匀光",
    img: `/technical/light2.png`,
  },
];

const timer1_num = ref(true);
const bannerImg1 = ref(`/technical/oneClick1.png`);
const bannerImg2 = ref(`/technical/speed1.png`);

const XList = reactive([
  {
    title: "镜头焦段",
    opts: ["6mm", "12mm", "16mm"],
    act: "6mm",
  },
  {
    title: "光源颜色",
    opts: [
      {
        name: "红色",
        key: "red",
      },
      {
        name: "蓝色",
        key: "blue",
      },
    ],
    act: "红色",
  },
  {
    title: "光源类型",
    opts: [
      {
        name: "直射光",
        key: "zs",
        act: true,
      },
      {
        name: "偏振光",
        key: "pz",
        act: false,
      },
      {
        name: "均匀光",
        key: "jy",
        act: false,
      },
    ],
  },
]);
const A = ref();

const B = computed(() => {
  A.value * 2;
});

watch(
  A,
  (Old, New) => {
    console.log("old,New", Old, New);
  },
  { immediate: true, deep: true }
);
let light = reactive(["zs-red"]);
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
    if (XList[1].act === "红色") {
      XList[2].opts[i].act
        ? light.push(XList[2].opts[i].key + "-red")
        : light.pop();
    }
    if (XList[1].act === "蓝色") {
      XList[2].opts[i].act
        ? light.push(XList[2].opts[i].key + "-blue")
        : light.pop();
    }
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

    .title {
      font-size: 56px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 4.48px;
      position: relative;
      z-index: 9;
    }
  }

  .section-wrapper {
    width: 1384px;
    margin: 0 auto;
    background-color: #000;

    .tit-bg1 {
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
      position: relative;
      height: 910px;

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
      transition: all 0.8s ease-in-out;
      background-size: cover;
      background-position: center center;

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

    .text {
      position: relative;
      font-size: 24px;
      line-height: 32px;
      z-index: 9;
    }

    .cont-box {
      margin-top: 153px;
      height: auto;
    }

    .card {
      height: 475px;
      .left {
        flex: 0 0 auto;
        width: 368px;
        .title {
          font-size: 40px;
          font-weight: 600;
        }
        .txt {
          color: #a3a8ab;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
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
</style>
