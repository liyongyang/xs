<script setup>
import tableSvg from "@/assets/r275a_table.svg";
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const showGd = ref(true);
const chilMenu = ref(false);
const gdRef = ref();
const videoRef = ref();
const videoRef2 = ref();
const pg1Act = ref(0);
const currentVideo = ref(0);
let imgUrls = ref([]);

const A275A_INFO = {
  detailInfo: {
    title: "设计细节",
    slider: [
      {
        img: "/R275A/detail/slider0.webp",
        tit: "全透型钢化视窗",
        txt: "光学镀膜 + 钢化视窗 = 清晰读取，坚固耐用",
      },
      {
        img: "/R275A/detail/slider1.webp",
        tit: "全新几何光学设计",
        txt: "专业设计的镀银抛物面反射器，读码更加稳定",
      },
      {
        img: "/R275A/detail/slider2.webp",
        tit: "专研偏光滤镜照明",
        txt: "减少光干扰，稳定读码",
      },
      {
        img: "/R275A/detail/slider3.webp",
        tit: "多ROI配置功能",
        txt: "多码环境下也能稳定读取",
      },
      {
        img: "/R275A/detail/slider4.webp",
        tit: "先进异构处理系统",
        txt: "提高解码性能、降低功耗",
      },
      {
        img: "/R275A/detail/slider5.webp",
        tit: "先进异构处理系统",
        txt: "光专为解决难读码而优化的 DSP",
      },
    ],
  },
  yyInfo: {
    title: "丰富的应用场景",
    slider: [
      {
        img: "/R275A/yy/slider0.webp",
        tit: "0.5mm超小码",
        txt: "电子零部件的条码越来越小。采用超分辨率算法™的 R275-A，能够稳定读取超小码",
      },
      {
        img: "/R275A/yy/slider1.webp",
        tit: "L角破损30%",
        txt: "即使关键定位器（L角）破损达30%，SPL技术TM都能够轻松解决",
      },
      {
        img: "/R275A/yy/slider2.webp",
        tit: "撞针深浅不一",
        txt: "金属铸件的撞针打标工艺会影响条码质量，利用新算强 大的图像处理能力可以实现稳定读取",
      },
      {
        img: "/R275A/yy/slider3.webp",
        tit: "弧面反光",
        txt: "金属弧面的DPM码容易造成反光干扰解码，通过偏光滤 镜降低反射可稳定解码",
      },
      {
        img: "/R275A/yy/slider4.webp",
        tit: "金属拉丝",
        txt: "条码会因为黑色金属拉丝基底而难以读取，R275-A增强 算法能够实现稳定读取",
      },
      {
        img: "/R275A/yy/slider5.webp",
        tit: "塑料膜遮挡",
        txt: "物流包裹覆膜会造成读码无法读取，强大的算法引擎能 够解决该问题",
      },
      {
        img: "/R275A/yy/slider6.webp",
        tit: "透过玻璃读取",
        txt: "精密设备有时要求读码器透过玻璃窗读取，通过偏光滤 镜能够减少玻璃反光，从而读取条码",
      },
      {
        img: "/R275A/yy/slider7.webp",
        tit: "多码同时读取",
        txt: "SMT料盘往往有多个类型的条码，R275-A支持多种码制， 能够实现同时读取多个不同的条码",
      },
    ],
  },
  dbInfo: {
    title: "产品对比",
    more: "详细参数",
  },
};

const openDialog = () => {
  addDialog({
    title: "",
    width: "480px",
    props: {},
    footer: false,
    component: popModules.SY,
    callBack: (config) => {
      //当弹窗任务结束后，调用父页面的回掉函数。（比如	我新增完成了需要刷新列表页面）
      console.log("回调函数", config);
      if (config) {
      }
    },
  });
};

const goBack = () => {
  router.push({ path: "/goods", query: { type: "R" } });
};

const playNextVideo = () => {
  const videos = document.querySelectorAll("video");
  console.log(`output->videos`, videos);
  videos[currentVideo.value].style.display = "block"; // 显示当前视频
  videos[currentVideo.value].play(); // 播放当前视频
  currentVideo.value = (currentVideo.value + 1) % videos.length; // 更新当前视频索引
  setTimeout(playNextVideo, videos[currentVideo.value].duration * 1000); // 在当前视频播放完后切换到下一个视频
};

const step = ref(0);
const handleScroll = (event) => {
  console.log(`scrollY`, pg1Act.value, window.scrollY);
  if (event.deltaY > 0) {
    // 向下滚动
    chilMenu.value = true;
    showGd.value = false;
    if (pg1Act.value < 190) {
      pg1Act.value = pg1Act.value + 1;
      event.preventDefault();
      console.log("stop");
    } else {
      videoRef2.value.style.display = "block";
      videoRef2.value.play();
    }
  } else {
    chilMenu.value = false;
    if (window.scrollY > 0 && window.scrollY < 60) {
      videoRef2.value.style.display = "block";
      videoRef2.value.play();
    }
    if (window.scrollY === 0) {
      videoRef2.value.style.display = "none";
      step.value = 0;
      // 向上滚动
      if (pg1Act.value > 1) {
        pg1Act.value--;
      } else {
        pg1Act.value = 0;
        showGd.value = true;
      }
    }
  }
};
const preloadImages = async () => {
  await Promise.all(
    imgUrls.value.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    })
  );
};

onMounted(() => {
  for (let index = 0; index < 190; index++) {
    imgUrls.value.push(`/R275A/webp2/${index}.webp`);
  }
  preloadImages();
});

onBeforeUnmount(() => {
  document.body.removeEventListener("wheel", handleScroll);
});
</script>

<template>
  <div class="pg-container">
    <div class="header">
      <div
        class="head z-9 animate__animated animate__fadeInDown flex justify-between items-center mx-auto"
        v-show="chilMenu"
      >
        <li class="good-name">R275-A</li>
        <div class="flex justify-between items-center text-slate-900">
          <router-link
            :to="{ path: '/goods/R275A/product-params' }"
            class="py-2 px-3 mr-4 cursor-pointer"
          >
            产品参数
          </router-link>
          <router-link
            :to="{ path: '/goods/R275A/download' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >下载
          </router-link>
          <router-link
            :to="{ path: '/goods/R275A/qa' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >常见问题
          </router-link>
          <router-link
            :to="{ path: '/contactUs' }"
            class="btn-black py-2 px-3 mr-4 cursor-pointer"
            >联系我们
          </router-link>
        </div>
      </div>
    </div>
    <section class="section-banner relative">
      <div
        ref="gdRef"
        class="pg1_frame-wrapper panel center column gradient-blue text-dark"
        @wheel="handleScroll"
      >
        <div
          class="img-item absolute top-0 left-0"
          v-for="(item, index) in imgUrls"
          :key="index"
          :style="{
            backgroundImage: `url(${item})`,
            opacity: `${pg1Act === index ? 1 : 0}`,
          }"
        ></div>
        <li
          class="go-back flex items-center py-2 px-3 cursor-pointer wow animate__animated animate__fadeInUp"
          v-show="showGd"
          @click="goBack"
        >
          <el-icon>
            <ArrowLeftBold />
          </el-icon>
          <span class="text-3.5 px-3">返回</span>
        </li>
        <div
          class="pg1_frame-text-wrapper animate__animated animate__fadeInUp z-10"
          v-show="showGd"
        >
          <li class="gd-type">R275-A</li>
          <h2 class="gd-name">紧凑型R系列读码器</h2>
          <li class="gd-ts">强大稳定解码力 · 一键调试 · 超小尺寸</li>
          <el-button class="btn-white" @click="openDialog()">试用</el-button>
          <el-button class="btn-black">观看视频</el-button>
        </div>
      </div>
    </section>
    <section class="video-wrapper relative">
      <div class="pg1_video-wrapper absolute top-0 left-0">
        <video ref="videoRef2" class="bgvideo" muted>
          <source src="/R275A/video2.mp4" />
        </video>
      </div>
    </section>
    <section class="pg bg-black">
      <div class="content">
        <li
          class="title text-center text-white wow animate__animated animate__fadeInUp"
        >
          {{ A275A_INFO.detailInfo.title }}
        </li>
        <div class="detail-slider flex overflow-x-scroll">
          <div
            class="slider-item"
            v-for="(item, index) in A275A_INFO.detailInfo.slider"
            :key="index"
          >
            <img
              class="wow animate__animated animate__fadeIn"
              :src="item.img"
              alt=""
            />
            <li class="tit wow animate__animated animate__fadeInUp">
              {{ item.tit }}
            </li>
            <li class="txt wow animate__animated animate__fadeInUp">
              {{ item.txt }}
            </li>
          </div>
        </div>
      </div>
    </section>
    <section class="pg bg-white">
      <div class="content text-slate-900">
        <li class="title text-center wow animate__animated animate__fadeInUp">
          {{ A275A_INFO.yyInfo.title }}
        </li>
        <div class="yy-slider flex overflow-x-scroll">
          <div
            class="slider-item"
            v-for="(item, index) in A275A_INFO.yyInfo.slider"
            :key="index"
          >
            <img
              class="wow animate__animated animate__fadeIn"
              :src="item.img"
              alt=""
            />
            <li class="tit wow animate__animated animate__fadeInUp">
              {{ item.tit }}
            </li>
            <li class="txt wow animate__animated animate__fadeInUp">
              {{ item.txt }}
            </li>
          </div>
        </div>
      </div>
    </section>
    <section class="pg bg-white">
      <div class="content text-slate-900">
        <li class="title text-center wow animate__animated animate__fadeInUp">
          {{ A275A_INFO.dbInfo.title }}
        </li>
        <div class="yy-slider wow animate__animated animate__fadeInUp">
          <tableSvg></tableSvg>
        </div>
        <div class="text-center more wow animate__animated animate__fadeInUp">
          <el-button class="btn-white mx-auto">{{
            A275A_INFO.dbInfo.more
          }}</el-button>
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
  min-height: 100vh;
  background-color: #000;
  overflow-x: hidden;

  .header {
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: #f4f4f4;
    text-align: center;
    z-index: 29;

    .head {
      max-width: 1512px;
      padding: 16px 64px;
      align-items: center;
    }

    .good-name {
      color: #1d1c23;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
    }
  }

  .section-banner {
    position: absolute;
    background-size: cover;
    background-position: center;
    z-index: 19;

    .bg-transition {
      transition: background-image 0.5s ease-in-out;
    }

    .pg1_frame-wrapper {
      position: relative;
      height: 100vh;
      width: 100vw;
      background-size: cover;
      background-position: center;
      z-index: 3;
      color: #fff;
      .img-item {
        height: 100vh;
        width: 100vw;
        background-size: cover;
        background-position: center;
        background-color: #000;
      }

      .go-back {
        position: absolute;
        top: 128px;
        left: 64px;
        z-index: 29;
      }

      .pg1_frame-text-wrapper {
        color: #fff;
        margin: 0 auto;
        padding-top: 120px;
        text-align: center;

        .gd-type {
          font-size: 48px;
          font-weight: 600;
          line-height: normal;
          letter-spacing: 3.84px;
        }

        .gd-name {
          font-size: 24px;
          line-height: 32px;
        }

        .gd-ts {
          color: #9eaab0;
          font-size: 18px;
          line-height: 24px;
        }
      }

      .pg1_frame-text-wrapper2 {
        font-size: 56px;
        line-height: 64px;
        padding-top: 25%;
        opacity: 1;
      }
    }

    .pg1_text-wrapper {
      position: absolute;
      top: 0;
      height: 100vw;
      width: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }

    // .pg1_video-wrapper {
    // 	opacity: 0;
    // 	position: absolute;
    // 	width: 100vw;
    // 	height: 100vh;
    // 	z-index: 1;
    // }
  }

  .video-wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
  }

  .pg {
    position: relative;
    width: 100vw;

    .content {
      width: 1384px;
      height: 100%;
      margin: 0 auto;
      padding: 128px 0;

      .detail-slider {
        margin-top: 128px;
        padding-bottom: 20px;
        width: 100%;

        .slider-item {
          flex: 0 0 auto;
          width: 400px;
          margin-right: 6px;

          img {
            width: 100%;
          }
        }
      }

      .yy-slider {
        margin-top: 128px;
        padding-bottom: 20px;
        width: 100%;

        .slider-item {
          flex: 0 0 auto;
          width: 688px;
          margin-right: 6px;

          img {
            width: 100%;
          }
        }
      }

      .more {
        margin-top: 64px;
      }
    }

    .title {
      font-size: 48px;
      font-weight: 500;
      letter-spacing: 3.84px;
    }

    .tit {
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      margin-top: 16px;
    }

    .txt {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin-top: 16px;
    }

    .color1 {
      color: #231c1f;
    }

    .color2 {
      color: #231c1f;
    }
  }

  .pg1-text-wrapper {
    width: 100vw;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    color: #fff;
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
    height: auto;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 32px;
    border-radius: 99px;
    color: #fff;
    background-color: #1d1c23;
    border: 1px solid #fefefe;
  }

  .bgvideo {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
}
</style>
