<template>
  <div class="page-wrapper">
    <section v-if="actInfo" class="banner" :style="{ 'background-image': 'url(' + actInfo.banner + ')' }">
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
      <div class="al-list flex justify-between" v-for="(item, index) in actInfo.case" :key="index">
        <li class="tit">{{ item.name }}</li>
        <img class="img" :src="item.img" alt="">
      </div>
    </section>
  </div>
</template>

<script setup lang='ts'>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const actInfo = ref()
const caseList = {
  alTit: '典型案例',
  ysTit: '应用优势',
  car: {
    banner: '/customerCase/banner/car.webp',
    title: '汽车制造行业解决方案',
    txt: '在汽车制造行业，从原材料的入库、生产线上的零部件追踪，到成品的出厂检验和物流管理，读码器的应用贯穿于汽车制造的各个环节。通过自动化的 1D/2D 码信息读取，汽车制造商能够实时监控生产进度、精准管理库存、优化供应链，并有效防止质量问题的发生。',
    ysList: [
      '提高生产效率，减少人工错误、提高设备稼动率',
      '全流程可追溯，确保每个零部件符合质量标准',
      '实现准时、高质量交付，提升客户满意度'
    ],
    case: [
      { name: "汽车引擎撞针 DPM 缺陷码", img: `/customerCase/car-0.webp` },
      { name: "汽车玻璃低对比度 DM 码", img: `/customerCase/car-1.webp` },
      { name: "曲轴水滴遮挡 DPM 码", img: `/customerCase/car-2.webp` },
      { name: "轮胎条形码", img: `/customerCase/car-3.webp` },
      { name: "手持式读码器读取汽车 1D/2D 码", img: `/customerCase/car-4.webp` },
    ]
  },
  gf: {
    banner: '/customerCase/banner/gf.webp',
    title: '光伏新能源行业解决方案',
    txt: '光伏新能源行业正处于行业发展的关键时期，而读码器作为一种高效、准确的机器视觉设备，正日益成为光伏发电系统中不可或缺的一部分。通过读取光伏板上的 1D/2D 码，读码器能够实现对光伏板生产、运输、安装等各个环节的快速识别和数据采集，为光伏新能源行业的智能化、自动化数字管理提供有力支持。',
    ysTit: '应用优势',
    ysList: [
      '提高生产效率，确保产能最大化',
      '实现高速生产节拍下的全流程追溯管理',
      '实时追踪生产数据，保障产品质量和安全性'
    ],
    case: [
      { name: "光伏板条形码", img: `/customerCase/gf-0.webp` },
      { name: "光伏板难读码", img: `/customerCase/gf-1.webp` },
    ],
  },
  ld: {
    banner: '/customerCase/banner/ld.webp',
    title: '锂电新能源行业解决方案',
    txt: '锂电新能源行业以其高能量密度、环保和可持续发展等特点，正日益成为全球能源转型的重要引领者。在生产、装配和物流等各个环节，数据的准确采集和处理对于保障锂电产品质量、提高生产效率以及实现供应链的可追溯性至关重要。而读码器作为一种高效精准的自动识别技术，正成为锂电新能源行业实现智能化、自动化管理的核心机器视觉设备之一。',
    ysList: [
      '提高生产效率，缩短生产周期',
      '确保产品质量的一致性和稳定性',
      '实现全流程数据追溯和管理'
    ],
    case: [
      { name: "移动读取圆柱电池 DPM 码", img: `/customerCase/ld-0.webp` },
      { name: "软包电池 DPM 码", img: `/customerCase/ld-1.webp` },
      { name: "方形电池 DPM 码", img: `/customerCase/ld-2.webp` },
    ],
  },
  sm: {
    banner: '/customerCase/banner/sm.webp',
    title: '3C数码行业解决方案',
    txt: '随着科技的不断发展，3C电子行业已成为最为活跃和竞争力的行业之一。3C电子行业的特点之一是其高速的生产节奏和严格的品质要求。生产环境通常需要处理大量的零部件和成品，而这些零部件往往具有小型化、多样化和复杂化的特点。因此，高效的识别和追踪系统成为了提高生产效率和确保产品质量的关键。',
    ysList: [
      '提升产线效率，减少停线时间和生产成本',
      '实现高速生产节拍下的全流程追溯管理',
      '保障产品质量，提升客户满意度'
    ],
    case: [
      { name: "电子元器件 0.5mm 超小码", img: `/customerCase/3c-0.webp` },
      { name: "移动读取多个 IC 上的 DM 码", img: `/customerCase/3c-1.webp` },
    ],
  },
  bdt: {
    banner: '/customerCase/banner/bdt.webp',
    title: '半导体行业解决方案',
    txt: '随着 IoT、5G、AI 等技术的快速发展，半导体市场呈现出前所未有的增长态势，对生产工艺的精准度和效率也提出了更高的要求。。在半导体制造过程中，每一片晶圆、每一个芯片都需要被精确追踪，以确保生产的高效性和产品的高质量。为了确保产品的质量和生产流程的顺畅，通过读码器追踪和管理半导体元件和成品在整个生产链中的流动显得尤为重要。',
    ysList: [
      '易于集成到空间紧凑的生产线或机台中',
      '提升半导体供应链追溯性',
      '实时追踪生产数据，保障产品质量和安全性'
    ],
    case: [
      { name: "光伏板条形码", img: `/customerCase/bdt-0.webp` },
      { name: "光伏板难读码", img: `/customerCase/bdt-1.webp` },
    ],
  },
  wl: {
    banner: '/customerCase/banner/wl.webp',
    title: '物流运输行业',
    txt: '随着全球经济的快速发展和电子商务的普及，物流运输行业正经历前所未有的变革和扩张。现代物流运输不仅要求高效的货物配送和管理，还需要极高的准确性和可追溯性，以满足不断增长的市场需求和客户期望。传统的手动扫描和数据录入方式已经难以满足这一复杂且高速运转的行业要求。因此，自动化、智能化的解决方案应运而生，固定式读码器作为其中的重要技术手段，正在为物流运输行业带来革命性的变化。',
    ysList: [
      '自动化数据采集，提高包裹追踪和管理能力',
      '减少人工干预，降低人力成本',
      '适应出入库、盘点、分拣等多种物流需求'
    ],
    case: [
      { name: "光伏板条形码", img: `/customerCase/gf-0.webp` },
      { name: "光伏板难读码", img: `/customerCase/gf-1.webp` },
    ],
  }
}
const A = ref();

const B = computed(() => {
  A.value * 2;
});

watch(
  A,
  (Old, New) => {
  },
  { immediate: true, deep: true }
);

onMounted(() => {
  actInfo.value = caseList[route.params.case]
  console.log(`output->actInfo.value`, actInfo.value, route.params.case)
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
    color: #1D1C23;
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
        color: #1D1C23CC;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
      }
    }

    .al-list {
      margin-top: 64px;
      border-bottom: 1px solid #DFE1E2;
      padding-bottom: 64px;

      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }

      .tit {
        font-size: 28px;
        font-weight: 600;
        line-height: 40px;
      }

      .img {
        height: 420px;
      }
    }

  }
}
</style>