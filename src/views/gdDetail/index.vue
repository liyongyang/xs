<script setup>
import { nextTick, onMounted, onUnmounted, reactive, ref } from "vue";

const showGd = ref(true);
const showGd2 = ref(false);
const gdRef = ref();
const gdRef2 = ref();
const videoRef = ref();
const pg1Act = ref(0);
let bgArr = reactive([]);
let cachedImages = {};
let bgImgArr1 = [`/goods/case1/1000`];
const canvas = ref(null);

onMounted(() => {
  window.addEventListener("wheel", handleScroll);
  loadBgArr().then((list) => {
    bgArr = list;
    setBgImgPg1();
    // gdRef.value.style.backgroundImage = `/goods/case1/10001-imageonline.webp`;
  });
});

const loadImage = (src) => {
  let p = new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      //加载时执行resolve函数
      resolve(img);
    };
    img.onerror = function () {
      reject(src);
    };
    img.src = src;
  });
  return p;
};
const loadBgArr = async () => {
  let arr = [];
  for (let i = 0; i <= 50; i++) {
    await loadImage(`${bgImgArr1}${i}-imageonline.webp`).then((img) => {
      arr.push(img);
    });
  }
  return arr;
};

const setBgImgPg1 = () => {
  const url = `${bgImgArr1}${pg1Act.value}-imageonline.webp`;
  nextTick(() => {
    gdRef.value.classList.add("bg-transition");
    gdRef.value.style.backgroundImage = `url(${bgArr[pg1Act.value].src})`;
    // const ctx = canvas.value.getContext('2d');
    // ctx.canvas.width = window.innerWidth;
    // ctx.canvas.height = window.innerHeight;
    // const img = new Image();
    // img.src = bgArr[pg1Act.value].src;
    // img.onload = () => {
    // 	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // 	ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    // };
  });
  if (pg1Act.value === 52) {
    gdRef.value.style.opacity = 0;
  }
  // console.log(gdRef2.value.childNodes)
  if (pg1Act.value > 42) {
    showGd2.value = true;
    setTimeout(() => {}, 800);
  } else {
    showGd2.value = false;
  }
};

const handleScroll = (event) => {
  if (event.deltaY > 0) {
    // 向下滚动
    showGd.value = false;
    if (pg1Act.value < 52) {
      pg1Act.value++;
      // event.preventDefault();
    } else {
      videoRef.value.style.display = "block";
      videoRef.value.play();
    }
  } else {
    // 向上滚动
    gdRef.value.style.opacity = 1;
    if (pg1Act.value > 1) {
      pg1Act.value--;
      videoRef.value.style.display = "none";
    } else {
      pg1Act.value = 0;
      showGd.value = true;
    }
  }
  setBgImgPg1();
};

onUnmounted(() => {});
</script>

<template>
  <div class="pg-container">
    <!-- <canvas ref="canvas" class="sequence-frames"></canvas> -->
    <section class="section-banner">
      <div class="pg1_video-wrapper animate__animated animate__fadeIn">
        <video ref="videoRef" class="bgvideo" muted loop>
          <source
            type="video/webm"
            data-layzr-src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/f5d72cf7-7db6-4e9c-80b0-804d9f7bab62.webm"
            src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/f5d72cf7-7db6-4e9c-80b0-804d9f7bab62.webm"
          />
          <source
            type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'
            data-layzr-src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/16a1bf8d-49ee-4de3-ac9a-4dc399252d7e.mp4"
            src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/16a1bf8d-49ee-4de3-ac9a-4dc399252d7e.mp4"
          />
        </video>
      </div>
      <div
        ref="gdRef"
        class="pg1_frame-wrapper panel center column gradient-blue text-dark"
        @wheel="handleScroll"
      >
        <div
          class="pg1_frame-text-wrapper wow animate__animated animate__fadeInUp"
          v-show="showGd"
        >
          <li class="gd-type">RS300</li>
          <h2 class="gd-name">双航插RS系列读码器</h2>
          <li class="gd-ts">稳定接码力·一键调试·多样化硬件设计</li>
          <el-button>了解更多</el-button>
          <el-button>试用</el-button>
        </div>
        <div
          ref="gdRef2"
          class="pg1_frame-text-wrapper2 text-center"
          v-show="showGd2"
        >
          <li class="wow animate__fadeInUp">自研机器视觉算法引擎</li>
          <li class="wow animate__fadeInUp">更好的性能</li>
          <li class="wow animate__fadeInUp">造就更好的稳定性</li>
        </div>
      </div>
    </section>
    <section class="pg">section111111</section>
    <section class="pg">section2222222</section>
    <section class="pg">section3333333</section>
    <section class="pg">section444444444444</section>
  </div>
</template>
<style lang="scss" scoped>
.pg-container {
  color: #fff;
  position: relative;
  width: 100vw;
  height: 100%;
  // background-color: #000;
  overflow-x: hidden;

  .section-banner {
    position: fixed;
    background-size: cover;
    background-position: center;

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
      // transition: background-image 0.3s ease-in-out;

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

    .pg1_video-wrapper {
      opacity: 0;
      position: absolute;
      width: 100vw;
      height: 100vh;
      z-index: 1;

      .bgvideo {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
      }
    }
  }

  .pg {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
  }

  .pg1-text-wrapper {
    width: 100vw;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    color: #fff;
  }
}
</style>
