<template>
  <div class="page-wrapper">
    <section
      v-if="actInfo"
      class="banner relative"
      :style="{ 'background-image': 'url(' + actInfo.banner + ')' }"
    >
      <div
        class="absolute left-28 top-10 wow animate__animated animate__fadeInUp"
      >
        <li class="flex items-center text-4 font-500 py-2 px-3 cursor-pointer">
          <el-icon>
            <ArrowLeftBold />
          </el-icon>
          <span class="px-3" @click="goBack()">返回</span>
        </li>
      </div>
      <div class="text-wrapper">
        <li class="banner-title">{{ actInfo.title }}</li>
        <li class="banner-txt">{{ actInfo.txt }}</li>
      </div>
    </section>
    <section class="box-container" v-if="actInfo">
      <li class="title">{{ caseList.ysTit }}</li>
      <div class="flex justify-between">
        <div class="card" v-for="(item, index) in actInfo.ysList" :key="index">
          <li class="tit">0{{ index + 1 }}</li>
          <li class="info">{{ item }}</li>
        </div>
      </div>
    </section>
    <section class="box-container" v-if="actInfo">
      <li class="title">{{ caseList.alTit }}</li>
      <div
        class="al-list flex justify-between"
        v-for="(item, index) in actInfo.case"
        :key="index"
      >
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
              :name="t.tit"
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

<script setup lang='ts'>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const actInfo = ref();
const activeCollapse = ref([]);
const caseList = {
  alTit: "典型案例",
  ysTit: "应用优势",
  car: {
    banner: "/customerCase/banner/car.webp",
    title: "汽车制造行业解决方案",
    txt: "在汽车制造行业，从原材料的入库、生产线上的零部件追踪，到成品的出厂检验和物流管理，读码器的应用贯穿于汽车制造的各个环节。通过自动化的 1D/2D 码信息读取，汽车制造商能够实时监控生产进度、精准管理库存、优化供应链，并有效防止质量问题的发生。",
    ysList: [
      "提高生产效率，减少人工错误、提高设备稼动率",
      "全流程可追溯，确保每个零部件符合质量标准",
      "实现准时、高质量交付，提升客户满意度",
    ],
    case: [
      { name: "汽车引擎撞针 DPM 缺陷码", img: `/customerCase/car-0.webp` },
      { name: "汽车玻璃低对比度 DM 码", img: `/customerCase/car-1.webp` },
      { name: "曲轴水滴遮挡 DPM 码", img: `/customerCase/car-2.webp` },
      { name: "轮胎条形码", img: `/customerCase/car-3.webp` },
      {
        name: "手持式读码器读取汽车 1D/2D 码",
        img: `/customerCase/car-4.webp`,
      },
    ],
  },
  gf: {
    banner: "/customerCase/banner/gf.webp",
    title: "光伏新能源行业解决方案",
    txt: "光伏新能源行业正处于行业发展的关键时期，而读码器作为一种高效、准确的机器视觉设备，正日益成为光伏发电系统中不可或缺的一部分。通过读取光伏板上的 1D/2D 码，读码器能够实现对光伏板生产、运输、安装等各个环节的快速识别和数据采集，为光伏新能源行业的智能化、自动化数字管理提供有力支持。",
    ysTit: "应用优势",
    ysList: [
      "提高生产效率，确保产能最大化",
      "实现高速生产节拍下的全流程追溯管理",
      "实时追踪生产数据，保障产品质量和安全性",
    ],
    case: [
      { name: "光伏板条形码", img: `/customerCase/case/gf-0.png` },
      { name: "光伏板难读码", img: `/customerCase/case/gf-1.png` },
    ],
  },
  ld: {
    banner: "/customerCase/banner/ld.webp",
    title: "锂电新能源行业解决方案",
    txt: "锂电新能源行业以其高能量密度、环保和可持续发展等特点，正日益成为全球能源转型的重要引领者。在生产、装配和物流等各个环节，数据的准确采集和处理对于保障锂电产品质量、提高生产效率以及实现供应链的可追溯性至关重要。而读码器作为一种高效精准的自动识别技术，正成为锂电新能源行业实现智能化、自动化管理的核心机器视觉设备之一。",
    ysList: [
      "提高生产效率，缩短生产周期",
      "确保产品质量的一致性和稳定性",
      "实现全流程数据追溯和管理",
    ],
    case: [
      { name: "移动读取圆柱电池 DPM 码", img: `/customerCase/case//ld-0.png` },
      { name: "软包电池 DPM 码", img: `/customerCase/case/ld-1.png` },
      { name: "方形电池 DPM 码", img: `/customerCase/case/ld-2.png` },
    ],
  },
  sm: {
    banner: "/customerCase/banner/sm.webp",
    title: "3C数码行业解决方案",
    txt: "随着科技的不断发展，3C电子行业已成为最为活跃和竞争力的行业之一。3C电子行业的特点之一是其高速的生产节奏和严格的品质要求。生产环境通常需要处理大量的零部件和成品，而这些零部件往往具有小型化、多样化和复杂化的特点。因此，高效的识别和追踪系统成为了提高生产效率和确保产品质量的关键。",
    ysList: [
      "提升产线效率，减少停线时间和生产成本",
      "实现高速生产节拍下的全流程追溯管理",
      "保障产品质量，提升客户满意度",
    ],
    case: [
      {
        name: "电子元器件 0.5mm 超小码",
        txt: "TWS 耳机作为消费电子行业的热门产品之一，对零部件的可追溯性提出了严格要求",
        img: `/customerCase/case/sm-0.png`,
        rInfo: [
          {
            tit: "案例需求",
            content: [
              {
                name: "读取微小零部件",
                txt: "TWS 耳机的零部件采用 Data Matrix 码(DM 码)进行追溯，如耳机天线部分的微小 DM 码、芯片上对比度低的码等，这些高难度码对读码器的解码性能提出了极高要求",
              },
              {
                name: "在复杂工况下读取",
                txt: "生产过程中，零部件材料和光照等因素的变化会增加解码难度，需要专业工程师调试，才能确保在复杂场景下实现稳定解码",
              },
            ],
          },
          {
            tit: "解决方案",
            content: [
              {
                name: "高性能算法引擎",
                txt: "R275-A 读码器具有自主知识产权的机器视觉算法引擎™，能够应对各种难读 DM 码，解码高效稳定。即使是 0.5mm 的超小码，也能快速读取且实现 99.99%+ 读取率",
              },
              {
                name: "一键调试 OneClick",
                txt: "R275-A 搭载强大的一键调试功能，无需专业工程师，也能通过毫秒级自动对焦、自适应算法、自动调参等能力，轻松读取复杂场景下的各种条码",
              },
            ],
          },
          {
            tit: "推荐产品",
            imgList: [
              {
                img: `/customerCase/case/sm-gd0.png`,
                name: "紧凑型 R 系列 R275-A 固定式读码器",
              },
              {
                img: `/customerCase/case/sm-gd1.png`,
                name: "双航插 RS 系列 RS100-M16 固定式读码器",
              },
              {
                img: `/customerCase/case/sm-gd2.png`,
                name: "手持式 H 系列 H920 高性能手持式读码器",
              },
            ],
          },
        ],
      },
      {
        name: "移动读取多个 IC 上的 DM 码",
        img: `/customerCase/case/sm-1.png`,
      },
    ],
  },
  bdt: {
    banner: "/customerCase/banner/bdt.webp",
    title: "半导体行业解决方案",
    txt: "随着 IoT、5G、AI 等技术的快速发展，半导体市场呈现出前所未有的增长态势，对生产工艺的精准度和效率也提出了更高的要求。。在半导体制造过程中，每一片晶圆、每一个芯片都需要被精确追踪，以确保生产的高效性和产品的高质量。为了确保产品的质量和生产流程的顺畅，通过读码器追踪和管理半导体元件和成品在整个生产链中的流动显得尤为重要。",
    ysList: [
      "易于集成到空间紧凑的生产线或机台中",
      "提升半导体供应链追溯性",
      "实时追踪生产数据，保障产品质量和安全性",
    ],
    case: [
      {
        name: "光伏板条形码",
        img: `/customerCase/case/bdt-0.png`,
        rInfo: [
          {
            tit: "案例需求",
            content: [
              {
                name: "高性能稳定读码",
                txt: "芯片表面的二维码，超小、高密度且低对比度，使难以被精准识读，常出现漏拍情况",
              },
              {
                name: "高速移动读取",
                txt: "芯片分拣会高速运行，因此需要读码器能够在高速机台上稳定、快速地识读二维码",
              },
              {
                name: "紧凑机台适配",
                txt: "分拣机设备对空间要求极为严苛，需极致尺寸的紧凑型设计来适应各种分拣机台的安装",
              },
            ],
          },
          {
            tit: "解决方案",
            content: [
              {
                name: "紧凑型整机结构设计",
                txt: "R275-A 以极限尺寸 45*30*25 mm ，适配各种分拣机台的安装，提高部署灵活性 ( ≈ 1/3 名片大小)",
              },
              {
                name: "高性能识读效果",
                txt: "R275-A 内置自研机器视觉算法引擎™，稳定识读半导体芯片表面的超小、高密度、低对比度等二维码，并在高速生产线上实现稳定的识别，不漏拍",
              },
            ],
          },
          {
            tit: "推荐产品",
            imgList: [
              {
                img: `/customerCase/case/sm-gd0.png`,
                name: "紧凑型 R 系列 R275-A 固定式读码器",
              },
              {
                img: `/customerCase/case/sm-gd3.png`,
                name: "紧凑型 R 系列 R172 E/S 固定式读码器",
              },
            ],
          },
        ],
      },
      { name: "同时读取多个 1D/2D 码", img: `/customerCase/case/bdt-1.png` },
      {
        name: "隔着玻璃读取晶圆托盘条形码",
        img: `/customerCase/case/bdt-2.png`,
      },
      { name: "读取低对比度 DPM 码", img: `/customerCase/case/bdt-3.png` },
    ],
  },
  wl: {
    banner: "/customerCase/banner/wl.webp",
    title: "物流运输行业",
    txt: "随着全球经济的快速发展和电子商务的普及，物流运输行业正经历前所未有的变革和扩张。现代物流运输不仅要求高效的货物配送和管理，还需要极高的准确性和可追溯性，以满足不断增长的市场需求和客户期望。传统的手动扫描和数据录入方式已经难以满足这一复杂且高速运转的行业要求。因此，自动化、智能化的解决方案应运而生，固定式读码器作为其中的重要技术手段，正在为物流运输行业带来革命性的变化。",
    ysList: [
      "自动化数据采集，提高包裹追踪和管理能力",
      "减少人工干预，降低人力成本",
      "适应出入库、盘点、分拣等多种物流需求",
    ],
    case: [
      { name: "快递盒塑料膜遮挡条形码", img: `/customerCase/case/wl-0.png` },
      { name: "组网功能", img: `/customerCase/case/wl-1.png` },
      { name: "突发模式", img: `/customerCase/case/wl-1.png` },
    ],
  },
};
const goBack = () => {
  router.push({ path: "/CustomerCase" });
};

onMounted(() => {
  actInfo.value = caseList[route.params.case];
  console.log(`output->actInfo.value`, actInfo.value, route.params.case);
});
</script>
<style lang='scss' scoped>
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

    &::before {
      content: "";
      position: absolute;
      width: 100vw;
      height: 480px;
      // background: linear-gradient(180deg, #00000000, #000000),
    }

    .text-wrapper {
      position: absolute;
      left: 112px;
      bottom: 48px;
      width: 800px;
      text-wrap: wrap;
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
      }
    }

    .al-list {
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
      }
      .right-info {
        width: 805px;
        text-wrap: wrap;
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
</style>