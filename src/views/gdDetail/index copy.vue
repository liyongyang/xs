<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

const showGd = ref(true);
const main = ref();
const gdRef = ref();
const videoRef = ref();
const pg1Act = ref(0);
let bgImgArr1 = [`/goods/case1/1000`];

let ctx;

onMounted(() => {
  setBgImgPg1();
  ctx = gsap.context((self) => {
    const boxes = self.selector(".box");
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150,
        scrollTrigger: {
          trigger: box,
          start: "bottom center",
          end: "top center",
          scale: 1.5,
          scrub: true,
        },
      });
    });
  }, main.value); // <- Scope!
});

const setBgImgPg1 = () => {
  const url = `${bgImgArr1}${pg1Act.value}-imageonline.webp`;
  gdRef.value.style.backgroundImage = `url(${url})`;
  if (pg1Act.value === 52) {
    gdRef.value.style.opacity = 0;
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
      videoRef.value.play();
      videoRef.value.style.opacity = 1;
    }
  } else {
    // 向上滚动
    gdRef.value.style.opacity = 1;
    if (pg1Act.value > 1) {
      pg1Act.value--;
      videoRef.value.style.opacity = 0;
    } else {
      pg1Act.value = 0;
      showGd.value = true;
    }
  }
  console.log("url", pg1Act.value);
  setBgImgPg1();
};

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <div class="pg-container">
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
      </div>
    </section>
  </div>

  <div class="pg panel center column" ref="main">
    <div class="box gradient-green">box</div>
    <div class="box gradient-green">box</div>
    <div class="box gradient-green">box</div>
  </div>
  <div class="pg text-dark">
    <h1>The End!</h1>
    <h2 class="center">
      For more information visit:&nbsp;
      <a
        href="https://greensock.com/scrolltrigger/"
        target="_blank"
        rel="noreferrer"
      >
        greensock.com/scrolltrigger/
      </a>
    </h2>
  </div>
</template>
<style lang="scss" scoped>
.pg-container {
  color: #fff;
  position: relative;
  width: 100vw;
  height: 100%;
  background-color: #000;
  overflow-x: hidden;

  .section-banner {
    position: fixed;
    background-size: cover;
    background-position: center;

    .pg1_frame-wrapper {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 100vh;
      width: 100vw;
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 3;

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
}
</style>
