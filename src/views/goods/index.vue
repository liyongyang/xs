<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();


const gdList = {
  R: [
    {
      img: `/goods/g-r275.png`,
      title: 'R275-A',
      path: 'R275A',
      info: [
        {
          img: '/goods/r275-0.webp',
          title: '强大稳定解码力',
          txt: '自主知识产权解码引擎，性能强劲、解码稳定'
        },
        {
          img: '/goods/r275-1.webp',
          title: '一键调试 OneClick',
          txt: '一键触发、解码又快又准'
        },
        {
          img: '/goods/r275-2.webp',
          title: '毫秒级自动对焦',
          txt: '自动适应各种条码尺寸和工作距离'
        },
        {
          img: '/goods/r275-3.webp',
          title: '超小尺寸',
          txt: '极致尺寸便于部署于狭窄产线或机台'
        },
      ]
    },
    {
      img: `/goods/g-r170.png`,
      title: 'R270-A',
      path: 'R270',
      info: [
        {
          img: '/goods/r275-0.webp',
          title: '强大稳定解码力',
          txt: '自主知识产权解码引擎，性能强劲、解码稳定'
        },
        {
          img: '/goods/r275-1.webp',
          title: '一键调试 OneClick',
          txt: '一键触发、解码又快又准'
        },
        {
          img: '/goods/r275-2.webp',
          title: '毫秒级自动对焦',
          txt: '自动适应各种条码尺寸和工作距离'
        },
        {
          img: '/goods/r275-3.webp',
          title: '超小尺寸',
          txt: '极致尺寸便于部署于狭窄产线或机台'
        },
      ]
    },
    {
      img: `/goods/g-r172.png`,
      title: 'R172 E/S',
      path: 'R17',
      info: [
        {
          img: '/goods/r172-0.webp',
          title: '一键调试 OneClick',
          txt: '自适应算法、自动调参、自识别码制'
        },
        {
          img: '/goods/r172-1.webp',
          title: '读取稳定',
          txt: '10颗LED照明确保各种工况下清晰读码'
        },
        {
          img: '/goods/r172-2.webp',
          title: '部署灵活',
          txt: '紧凑型一体化设计'
        },
        {
          img: '/goods/r172-3.webp',
          title: '专利算法',
          txt: '集成专利算法，具备通用解码性能'
        },
      ]
    },
    {
      img: `/r17/slider/slider0.webp`,
      title: 'R170 E/S',
      path: 'R17',
      info: [
        {
          img: '/goods/r172-0.webp',
          title: '一键调试 OneClick',
          txt: '自适应算法、自动调参、自识别码制'
        },
        {
          img: '/goods/r172-1.webp',
          title: '读取稳定',
          txt: '10颗LED照明确保各种工况下清晰读码'
        },
        {
          img: '/goods/r172-2.webp',
          title: '部署灵活',
          txt: '紧凑型一体化设计'
        },
        {
          img: '/goods/r172-3.webp',
          title: '性价比高',
          txt: '适合各种读码场景'
        },
      ]
    }
  ],
  RS: [
    {
      img: `/goods/g-rs100.png`,
      title: 'RS 100',
      path: 'RS100',
      info: [
        {
          img: '/goods/rs100-0.webp',
          title: '全新光学系统 X-Tech™',
          txt: '3×3×3 灵活组合以高可配置性应对不同场景需求'
        },
        {
          img: '/goods/rs100-1.webp',
          title: '一键调试+ OneClick Plus',
          txt: '新升级一键调试，新增 Quick & Max 模式，读码更快更稳定'
        },
        {
          img: '/goods/rs100-2.webp',
          title: '精准无极调焦',
          txt: '精确调焦，对焦距离可由 30mm 至 ∞ 无穷远处'
        },
        {
          img: '/goods/rs100-3.webp',
          title: '双航插支持丰富通信协议',
          txt: '高标准双航插，稳定可靠，不用再担心脱落停机问题'
        },
      ]
    },
    {
      img: `/goods/g-rs300.png`,
      title: 'RS 300',
      path: 'RS300',
      info: [
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
      ]
    },
    {
      img: ``,
      title: 'RS 20000',
      path: 'RS20000',
      info: [
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
      ]
    }
  ],
  H: [
    {
      img: `/goods/g-h920.png`,
      title: 'H920',
      path: 'H920',
      info: [
        {
          img: '/goods/h920-0.webp',
          title: '强大稳定解码力',
          txt: '专为手持读码场景设计的算法引擎 Mobi × 均匀光技术'
        },
        {
          img: '/goods/h920-1.webp',
          title: '旗舰级同轴瞄准',
          txt: '全面改善传统手持式读码器瞄准偏移现象，不再担心漏扫情况'
        },
        {
          img: '/goods/h920-2.webp',
          title: '训练功能',
          txt: '新算专有训练功能，极大提升效率，带来极致流畅度'
        },
        {
          img: '/goods/h920-3.webp',
          title: '人性化设计',
          txt: '专业的工业设计，更懂工厂实地使用情况'
        },
      ]
    },
    {
      img: ``,
      title: 'H930',
      path: 'H930',
      info: [
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
      ]
    },
    {
      img: ``,
      title: 'H620',
      path: 'H620',
      info: [
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
        {
          img: '',
          title: '-',
          txt: '-'
        },
      ]
    }
  ]
}

const actGd = ref()

const act = ref('R')
const actSlider = ref()



watch(route, () => {
  const key = route.query.type
  act.value = key
  if (act.value) {
    actGd.value = gdList[act.value]
    actSlider.value = actGd.value[0]
    console.log(`output->v`, route.query.type, actGd.value)

  }
}, { immediate: true, deep: true });


const getAct = (key) => {
  act.value = key
  router.push({ query: { type: key } })
}
const carouselChange = (v) => {
  actSlider.value = actGd.value[v]
  console.log(`output->actSlider`, actSlider.value);
};

const toDetail = (v) => {
  router.push(`/goods/${v.path}`)
}
onMounted(() => { });

onUnmounted(() => { });
</script>

<template>
  <div class="pg-container">
    <section v-if="!act" class="section-wrapper flex flex-wrap space-x-4">
      <div class="card flex flex-col justify-between ">
        <li class="title p4 text-center wow animate__animated animate__fadeInUp">工业读码器全系列</li>
        <div class="h16 bg-black text-left p4 pt-8">
          <el-button class="btn-white wow animate__animated animate__fadeInUp">样机使试用/演示</el-button>
        </div>
      </div>
      <div class="flex flex-wrap space-x-2">
        <div class="cl bg1 flex flex-col justify-end">
          <li class="title p4 wow animate__animated animate__fadeInUp">紧凑型R系列</li>
          <li class="more h16 cursor-pointer bg-black p4 pt-8 wow animate__animated animate__fadeInUp"
            @click="getAct('R')">了解更多</li>
        </div>
        <div class="cl bg2 flex flex-col justify-end">
          <li class="title p4 wow animate__animated animate__fadeInUp">双航插RS系列</li>
          <li class="more h16 cursor-pointer  bg-black p4 pt-8 wow animate__animated animate__fadeInUp"
            @click="getAct('RS')">了解更多</li>
        </div>
        <div class="cl bg3 flex flex-col justify-end">
          <li class="title p4 wow animate__animated animate__fadeInUp">手持式H系列</li>
          <li class="more h16 cursor-pointer  bg-black p4 pt-8 wow animate__animated animate__fadeInUp"
            @click="getAct('H')">了解更多</li>
        </div>
      </div>
    </section>
    <section v-else class="section-wrapper">
      <div class="absolute top-36 wow animate__animated animate__fadeInUp">
        <li class="flex items-center py-2 px-3 cursor-pointer">
          <el-icon>
            <ArrowLeftBold />
          </el-icon>
          <span class="text-3.5 px-3 " @click="act = ''">返回</span>
        </li>
      </div>
      <div v-if="actGd" class="gd-wrapper flex flex-wrap justify-between">
        <div class="banner-slider text-center">
          <el-carousel :interval="3000" :autoplay="false" class="carousel-imgs wow animate__animated animate__fadeIn"
            motion-blur height="550px" indicator-position="none" @change="carouselChange">
            <el-carousel-item v-for="(item, index) in actGd" :key="index">
              <div class="space-y-8">
                <div class="slider mx-auto flex justify-center item-center">
                  <img class="slider-img" :src="item.img" alt="">
                </div>
                <li class="title wow animate__animated animate__fadeInUp">{{ item.title }}</li>
                <el-button class="btn-black wow animate__animated animate__fadeInUp"
                  @click="toDetail(item)">了解更多</el-button>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div v-if="actSlider" class="banner-info flex flex-wrap justify-between">
          <div v-for="(item, index) in actSlider.info" :key="index">
            <div class="feat-img wow animate__animated animate__fadeIn"
              :style="{ 'background-image': 'url(' + item.img + ')' }"></div>
            <div class="feat-info space-y-2">
              <li class="tit wow animate__animated animate__fadeInUp">{{ item.title }}</li>
              <li class="txt wow animate__animated animate__fadeInUp">{{ item.txt }}</li>
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
  overflow-x: hidden;

  .section-wrapper {
    width: 1384px;
    padding: 128px 0;
    margin: 0 auto;

    .card {
      width: 382px;
      height: 552px;
      background-color: #3d4448;
    }

    .cl {
      color: #F4F4F4;
      width: 306px;
      height: 552px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-color: #3d4448;

      .title {
        font-size: 28px;
        font-weight: 600;
        line-height: 40px;
      }

      .more {
        color: #A3A8AB;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }

    .bg1 {
      background-image: url('/public/goods/home/r.webp');
    }

    .bg2 {
      background-image: url('/public/goods/home/rs.webp');
    }

    .bg3 {
      background-image: url('/public/goods/home/h.webp');
    }

    .card-t2 {
      width: 306px;
    }
  }

  .gd-wrapper {
    color: #fff;
    position: relative;
    background-color: #000;
    overflow-x: hidden;

    .banner-slider {
      width: 515px;
      height: 552px;

      .slider {
        width: 253px;
        height: 404px;
        border-radius: 999px;
        overflow: hidden;
        border: 1px solid #000;
        background-color: #111212;
        background-size: cover;
        background-position: center center;

        .slider-img {}
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
        padding: 16px;
        padding-right: 0;
        background-color: #111212;

        .tit {
          color: #F4F4F4;
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
        }

        .txt {
          color: #A3A8AB;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
      }
    }
  }

  .title {
    color: #F4F4F4;
    font-size: 32px;
    font-weight: 600;
    line-height: 44px;
  }

  .btn-white {
    font-size: 14px;
    line-height: 20px;
    color: #1d1c23;
    padding: 10px 32px;
    border-radius: 99px;
    background-color: #fff;
  }

  .btn-black {
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    padding: 10px 32px;
    border-radius: 99px;
    background-color: #1d1c23;
  }
}
</style>
