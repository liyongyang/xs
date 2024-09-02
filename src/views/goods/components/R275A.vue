<script setup>
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t, locale } = useI18n();
const router = useRouter();
const route = useRoute();
const isSmallSize = ref(window.innerWidth < 900);

const showGd = ref(true);
const showVedio = ref(false);
const chilMenu = ref(false);
const gdRef = ref();
const videoRef2 = ref();
const pg1Act = ref(0);
const currentVideo = ref(0);
let imgUrls = ref([]);
const isThrottled = ref(false);

const A275A_INFO = {
  detailInfo: {
    title: t("A275A_INFO.detailInfo.title"),
    slider: [
      [
        {
          img: "/R275A/detail/slider0.webp",
          tit: t("A275A_INFO.detailInfo.slider[0][0].tit"),
          txt: t("A275A_INFO.detailInfo.slider[0][0].txt"),
        },
        {
          img: "/R275A/detail/slider1.webp",
          tit: t("A275A_INFO.detailInfo.slider[0][1].tit"),
          txt: t("A275A_INFO.detailInfo.slider[0][1].txt"),
        },
        {
          img: "/R275A/detail/slider2.webp",
          tit: t("A275A_INFO.detailInfo.slider[0][2].tit"),
          txt: t("A275A_INFO.detailInfo.slider[0][2].txt"),
        },
      ],
      [
        {
          img: "/R275A/detail/slider3.webp",
          tit: t("A275A_INFO.detailInfo.slider[1][0].tit"),
          txt: t("A275A_INFO.detailInfo.slider[1][0].txt"),
        },
        {
          img: "/R275A/detail/slider4.webp",
          tit: t("A275A_INFO.detailInfo.slider[1][1].tit"),
          txt: t("A275A_INFO.detailInfo.slider[1][1].txt"),
        },
        {
          img: "/R275A/detail/slider5.webp",
          tit: t("A275A_INFO.detailInfo.slider[1][2].tit"),
          txt: t("A275A_INFO.detailInfo.slider[1][2].txt"),
        },
      ],
    ],
  },
  yyInfo: {
    title: t("A275A_INFO.yyInfo.title"),
    slider: [
      [
        {
          img: "/video/r275a-x1.mp4",
          type: "video",
          tit: t("A275A_INFO.yyInfo.slider[0][0].tit"),
          txt: t("A275A_INFO.yyInfo.slider[0][0].txt"),
        },
        {
          img: "/video/r275a-x2.mp4",
          type: "video",
          tit: t("A275A_INFO.yyInfo.slider[0][1].tit"),
          txt: t("A275A_INFO.yyInfo.slider[0][1].txt"),
        },
      ],
      [
        {
          img: "/R275A/yy/slider2.webp",
          type: "img",
          tit: t("A275A_INFO.yyInfo.slider[1][0].tit"),
          txt: t("A275A_INFO.yyInfo.slider[1][0].txt"),
        },
        {
          img: "/R275A/yy/slider3.webp",
          type: "img",
          tit: t("A275A_INFO.yyInfo.slider[1][1].tit"),
          txt: t("A275A_INFO.yyInfo.slider[1][1].txt"),
        },
      ],
      [
        {
          img: "/R275A/yy/slider4.webp",
          type: "img",
          tit: t("A275A_INFO.yyInfo.slider[2][0].tit"),
          txt: t("A275A_INFO.yyInfo.slider[2][0].txt"),
        },
        {
          img: "/R275A/yy/slider5.webp",
          type: "img",
          tit: t("A275A_INFO.yyInfo.slider[2][1].tit"),
          txt: t("A275A_INFO.yyInfo.slider[2][1].txt"),
        },
      ],
      [
        {
          img: "/R275A/yy/slider6.webp",
          tit: t("A275A_INFO.yyInfo.slider[3][0].tit"),
          txt: t("A275A_INFO.yyInfo.slider[3][0].txt"),
        },
        {
          img: "/R275A/yy/slider7.webp",
          tit: t("A275A_INFO.yyInfo.slider[3][1].tit"),
          txt: t("A275A_INFO.yyInfo.slider[3][1].txt"),
        },
      ],
    ],
  },
  dbInfo: {
    title: "产品对比",
    title: t("A275A_INFO.dbInfo.title"),
    more: t("A275A_INFO.dbInfo.more"),
  },
};

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

const goBack = () => {
  router.push({ path: "/goods", query: { type: "R" } });
};

const playNextVideo = () => {
  const videos = document.querySelectorAll("video");
  videos[currentVideo.value].style.display = "block"; // 显示当前视频
  videos[currentVideo.value].play(); // 播放当前视频
  currentVideo.value = (currentVideo.value + 1) % videos.length; // 更新当前视频索引
  setTimeout(playNextVideo, videos[currentVideo.value].duration * 1000); // 在当前视频播放完后切换到下一个视频
};

let intervalId = null; // 定义全局变量以保持定时器的引用

const player0 = (key) => {
  if (isThrottled.value || intervalId) return; // 如果正在节流，直接返回
  isThrottled.value = true; // 设置节流标志
  if (key === "next") {
    intervalId = setInterval(() => {
      if (pg1Act.value < 39) {
        pg1Act.value++;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 40);
  } else {
    intervalId = setInterval(() => {
      if (pg1Act.value > 0) {
        pg1Act.value--;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
        showGd.value = true;
      }
    }, 40);
  }
  // 设定节流时间为 800ms
  setTimeout(() => {
    isThrottled.value = false; // 在 800ms 后重置节流标志
  }, 1000);
};
const player1 = (key) => {
  if (isThrottled.value || intervalId) return; // 如果正在节流，直接返回
  isThrottled.value = true; // 设置节流标志
  if (key === "next") {
    intervalId = setInterval(() => {
      if (pg1Act.value < 100) {
        pg1Act.value++;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 40);
  } else {
    intervalId = setInterval(() => {
      if (pg1Act.value >= 39) {
        pg1Act.value--;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 40);
  }
  // 设定节流时间为 800ms
  setTimeout(() => {
    isThrottled.value = false; // 在 800ms 后重置节流标志
  }, 1000);
};
const player2 = (key) => {
  if (isThrottled.value || intervalId) return; // 如果正在节流，直接返回
  isThrottled.value = true; // 设置节流标志
  if (key === "next") {
    intervalId = setInterval(() => {
      if (pg1Act.value < 115) {
        pg1Act.value++;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 50);
  } else {
    intervalId = setInterval(() => {
      if (pg1Act.value >= 100) {
        pg1Act.value--;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 50);
  }
  // 设定节流时间为 800ms
  setTimeout(() => {
    isThrottled.value = false; // 在 800ms 后重置节流标志
  }, 1000);
};
const player3 = (key) => {
  if (isThrottled.value || intervalId) return; // 如果正在节流，直接返回
  isThrottled.value = true; // 设置节流标志
  if (key === "next") {
    intervalId = setInterval(() => {
      if (pg1Act.value < 130) {
        pg1Act.value++;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 50);
  } else {
    intervalId = setInterval(() => {
      if (pg1Act.value >= 115) {
        pg1Act.value--;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 50);
  }
  // 设定节流时间为 800ms
  setTimeout(() => {
    isThrottled.value = false; // 在 800ms 后重置节流标志
  }, 1000);
};
const player4 = (key) => {
  if (isThrottled.value || intervalId) return; // 如果正在节流，直接返回
  isThrottled.value = true; // 设置节流标志
  if (key === "next") {
    intervalId = setInterval(() => {
      if (pg1Act.value < 150) {
        pg1Act.value++;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 50);
  } else {
    intervalId = setInterval(() => {
      if (pg1Act.value >= 130) {
        pg1Act.value--;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 50);
  }
  // 设定节流时间为 800ms
  setTimeout(() => {
    isThrottled.value = false; // 在 800ms 后重置节流标志
  }, 1000);
};
const player5 = (key) => {
  if (isThrottled.value || intervalId) return; // 如果正在节流，直接返回
  isThrottled.value = true; // 设置节流标志
  if (key === "next") {
    intervalId = setInterval(() => {
      if (pg1Act.value < 170) {
        pg1Act.value++;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 50);
  } else {
    intervalId = setInterval(() => {
      if (pg1Act.value >= 150) {
        pg1Act.value--;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 50);
  }
  // 设定节流时间为 800ms
  setTimeout(() => {
    isThrottled.value = false; // 在 800ms 后重置节流标志
  }, 1000);
};
const player6 = (key) => {
  if (isThrottled.value || intervalId) return; // 如果正在节流，直接返回
  isThrottled.value = true; // 设置节流标志
  if (key === "next") {
    intervalId = setInterval(() => {
      if (pg1Act.value < 190) {
        pg1Act.value++;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
        if (videoRef2.value.style.display === "none") {
          videoRef2.value.style.display = "block";
          videoRef2.value.play();
        }
      }
    }, 50);
  } else {
    intervalId = setInterval(() => {
      if (pg1Act.value >= 170) {
        pg1Act.value--;
      } else {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置定时器引用
        isThrottled.value = false; // 重置节流标志
      }
    }, 50);
  }
  // 设定节流时间为 800ms
  setTimeout(() => {
    isThrottled.value = false; // 在 800ms 后重置节流标志
  }, 1000);
};

const handleScroll = (event) => {
  // if (showVedio) {
  //   event.preventDefault();
  //   return;
  // }
  console.log(`===`, pg1Act.value);
  if (event.deltaY > 0) {
    // 向下滚动
    chilMenu.value = true;
    showGd.value = false;
    if (pg1Act.value < 190) {
      if (pg1Act.value < 39) {
        player0("next");
      } else if (pg1Act.value < 100) {
        player1("next");
      } else if (pg1Act.value < 110) {
        player2("next");
      } else if (pg1Act.value < 130) {
        player3("next");
      } else if (pg1Act.value < 150) {
        player4("next");
      } else if (pg1Act.value < 170) {
        player5("next");
      } else {
        player6("next");
      }
      event.preventDefault();
    } else {
      if (videoRef2.value.style.display === "none") {
        videoRef2.value.style.display = "block";
        videoRef2.value.play();
      }
    }
  } else {
    chilMenu.value = false;
    if (pg1Act.value < 190) {
      videoRef2.value.style.display = "none";
    }
    if (window.scrollY > 0 && window.scrollY < 20) {
      videoRef2.value.play();
    }
    if (window.scrollY === 0) {
      // 向上滚动
      if (pg1Act.value > 1) {
        if (pg1Act.value < 39) {
          player0("pre");
        } else if (pg1Act.value < 100) {
          player1("pre");
        } else if (pg1Act.value < 115) {
          player2("pre");
        } else if (pg1Act.value < 130) {
          player3("pre");
        } else if (pg1Act.value < 150) {
          player4("pre");
        } else if (pg1Act.value < 170) {
          player5("pre");
        } else {
          player6("pre");
        }
      } else {
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
  if (!isSmallSize.value) {
    preloadImages();
    videoRef2.value.style.display = "none";
  }
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
            {{ t("common.headLink.t1") }}
          </router-link>
          <router-link
            :to="{ path: '/goods/R275A/download' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >{{ t("common.headLink.t2") }}
          </router-link>
          <!-- <router-link
            :to="{ path: '/goods/R275A/qa' }"
            class="py-2 px-3 mr-4 cursor-pointer"
            >{{ t("common.headLink.t3") }}
          </router-link> -->
          <li class="btn-black mr-4 cursor-pointer" @click="openDialog()">
            {{ t("common.headLink.t4") }}
          </li>
        </div>
      </div>
    </div>
    <section class="section-banner relative">
      <div
        v-if="isSmallSize"
        class="banner-wapper banner-wapper1 panel center column gradient-blue text-dark"
      >
        <!-- <img class="banner-item" src="/home/r275a.webp" alt="" /> -->
        <li
          class="go-back flex items-center wow animate__animated animate__fadeInUp"
          v-show="showGd"
          @click="goBack"
        >
          <el-icon>
            <ArrowLeftBold />
          </el-icon>
          <span class="text-3.5 px-3">{{ t("common.back") }}</span>
        </li>
        <div class="text-wrapper animate__animated animate__fadeInUp z-10">
          <li class="gd-type">{{ t("home.sec1[0].name") }}</li>
          <h2 class="gd-name">{{ t("home.sec1[0].type") }}</h2>
          <li class="gd-ts">{{ t("home.sec1[0].feat") }}</li>
          <el-button class="btn-white" @click="openDialog()">{{
            t("common.btn.try")
          }}</el-button>
          <el-button class="btn-black" @click="showVedio = !showVedio">{{
            t("common.btn.video")
          }}</el-button>
        </div>
      </div>
      <div
        v-else
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
          <span class="text-3.5 px-3">{{ t("common.back") }}</span>
        </li>
        <div
          class="pg1_frame-text-wrapper animate__animated animate__fadeInUp z-10"
          v-show="showGd"
        >
          <li class="gd-type">{{ t("home.sec1[0].name") }}</li>
          <h2 class="gd-name">{{ t("home.sec1[0].type") }}</h2>
          <li class="gd-ts">{{ t("home.sec1[0].feat") }}</li>
          <el-button class="btn-white" @click="openDialog()">{{
            t("common.btn.try")
          }}</el-button>
          <el-button class="btn-black" @click="showVedio = !showVedio">{{
            t("common.btn.video")
          }}</el-button>
        </div>
      </div>
    </section>
    <section v-if="!isSmallSize" class="video-wrapper relative">
      <div class="pg1_video-wrapper absolute top-0 left-0">
        <video ref="videoRef2" class="bgvideo" muted>
          <source src="/R275A/video2.mp4" />
        </video>
      </div>
    </section>
    <section v-if="isSmallSize" class="banner-wapper">
      <!-- <div class="banner-item1"></div> -->
      <video class="video-item" muted loop autoplay>
        <source src="/R275A/m-v1.mp4" />
      </video>
      <video class="video-item" muted loop autoplay>
        <source src="/R275A/m-v2.mp4" />
      </video>
      <video class="video-item" muted loop autoplay>
        <source src="/R275A/m-v3.mp4" />
      </video>
      <!-- <img class="banner-item1" src="/R275A/webp2/80.webp" alt="" /> -->
      <!-- <img class="banner-item" src="/R275A/webp2/33.webp" alt="" /> -->
      <!-- <img class="banner-item" src="/R275A/webp2/55.webp" alt="" />
      <img class="banner-item" src="/R275A/webp2/108.webp" alt="" />
      <img class="banner-item" src="/R275A/webp2/124.webp" alt="" />
      <img class="banner-item" src="/R275A/webp2/130.webp" alt="" />
      <img class="banner-item" src="/R275A/webp2/148.webp" alt="" />
      <img class="banner-item" src="/R275A/webp2/175.webp" alt="" /> -->
      <!-- <video class="video-item" muted loop autoplay>
        <source src="/R275A/video2.mp4" />
      </video> -->
    </section>
    <section class="pg bg-black">
      <div class="content">
        <!-- <li
          class="title text-center text-white wow animate__animated animate__fadeInUp"
        >
          {{ A275A_INFO.detailInfo.title }}
        </li> -->
        <el-carousel
          :interval="3000"
          :height="isSmallSize ? '240px' : '420px'"
          class="detail-slider"
          indicator-position="none"
          arrow="always"
        >
          <el-carousel-item
            v-for="(items, index) in A275A_INFO.detailInfo.slider"
            :key="index"
          >
            <div class="slider-item" v-for="(item, i) in items" :key="i">
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
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
    <section class="pg bg-white">
      <div class="content text-slate-900">
        <!-- <li class="title text-center wow animate__animated animate__fadeInUp">
          {{ A275A_INFO.yyInfo.title }}
        </li> -->
        <el-carousel
          :interval="3000"
          :autoplay="false"
          arrow="always"
          :height="isSmallSize ? '240px' : '500px'"
          class="yy-slider"
        >
          <el-carousel-item
            v-for="(items, index) in A275A_INFO.yyInfo.slider"
            :key="index"
          >
            <div class="slider-item" v-for="(item, i) in items" :key="i">
              <img
                v-if="item.type === 'img'"
                class="wow animate__animated animate__fadeIn"
                :src="item.img"
                alt=""
              />
              <video
                v-if="item.type === 'video'"
                class="yy-video"
                autoplay
                loop
                muted
              >
                <source :src="item.img" />
              </video>
              <li class="tit wow animate__animated animate__fadeInUp">
                {{ item.tit }}
              </li>
              <li class="txt wow animate__animated animate__fadeInUp">
                {{ item.txt }}
              </li>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
  </div>
  <div class="vedio-comp" v-show="showVedio">
    <div class="gd-vedio animate__animated animate__fadeIn">
      <el-icon
        class="close-video font-600 text-12 text-gray cursor-pointer hover:text-white"
        @click="showVedio = !showVedio"
      >
        <CircleCloseFilled />
      </el-icon>
      <video class="my-video" controls muted>
        <source
          :src="locale === 'zh' ? '/video/r275a-zh.mp4' : '/video/r275a-en.mp4'"
        />
      </video>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pg-container {
  position: relative;
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
        padding-top: 160px;
        text-align: center;
        .gd-type {
          font-size: 48px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: 3.84px;
        }

        .gd-name {
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 32px;
        }

        .gd-ts {
          color: #9eaab0;
          font-size: 18px;
          line-height: 24px;
          margin: 16px auto;
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
        padding-bottom: 40px;
        width: 100%;

        .slider-item {
          flex: 0 0 auto;
          width: 450px;
          margin-right: 6px;
          text-wrap: wrap;
          word-wrap: break-word;
          white-space: normal;
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
          width: 686px;
          margin-right: 6px;
          text-wrap: wrap;
          word-wrap: break-word;
          white-space: normal;
          img,
          .yy-video {
            width: 686px;
          }
        }
      }
      :deep(.el-carousel__item) {
        display: flex;
        justify-content: space-between;
        overflow-x: scroll;
      }
      .more {
        margin-top: 64px;
        .more-btn {
          border: 1px solid #1d1c23;
        }
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
    height: auto;
    font-size: 14px;
    line-height: 20px;
    color: #1d1c23;
    padding: 10px 32px;
    border-radius: 99px;
    background-color: #fff;
    border: 1px solid #fefefe;
    &:hover {
      background-color: #f4f4f4;
    }
  }

  .btn-black {
    height: auto;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 32px;
    border-radius: 99px;
    color: #fff;
    background-color: #111112;
    border: 1px solid #414344;
    &:hover {
      background-color: #414344;
    }
  }
  .bgvideo {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
}
.vedio-comp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000e4;
  z-index: 999;
  .gd-vedio {
    position: relative;
    width: 1200px;
    .my-video {
      width: 1200px;
    }
    .close-video {
      position: absolute;
      top: -120px;
      right: -128px;
    }
  }
}
:deep(.el-dialog__body) {
  padding: 0 !important;
}
:deep(.el-carousel__arrow) {
  top: 95%;
  background-color: #292929;
  color: #ffffff;
  border: 1px solid #868686;
  &:hover {
    background-color: #868686;
  }
}
:deep(.el-carousel__arrow--left) {
  position: absolute;
  right: 60px;
  left: auto;
  bottom: 20px;
}

:deep(.el-carousel__arrow--right) {
  position: absolute;
  right: 0;
  bottom: 20px;
}
@media (max-width: 576px) {
  .pg-container {
    .section-banner {
      padding-top: 80px;
      position: relative;
    }

    .banner-wapper {
      position: relative;
      width: 100vw;
      height: auto;
      background-image: url("/R275A/webp2/1.webp");
      background-size: cover;
      background-position: center bottom;
      background-repeat: no-repeat;
      .text-wrapper {
        width: 100vw;
        padding: 0 12px;
        padding-top: 32px;
        text-align: center;
        text-wrap: wrap;
        word-wrap: break-word;
        white-space: normal;
        .gd-type {
          color: #ffffff;
          font-size: 18px;
          line-height: 32px;
          letter-spacing: normal;
        }
        .gd-name {
          color: #ffffff;
          font-size: 16px;
          line-height: 32px;
        }
        .gd-ts {
          color: #a3a8ab;
          margin: 0 0 16px 0;
        }
      }
      .banner-item1 {
        height: 640px;
        width: 100vw;
        display: block;
        // background-image: url("/R275A/webp2/68.webp");
        background-size: cover;
        background-position: center bottom;
        background-repeat: no-repeat;
      }
      .video-item {
        width: 100vw;
        height: auto;
        display: block;
      }
      .img-item {
        width: 100vw;
        height: 320px;
        background-size: cover;
        background-position: center;
        background-attachment: local;
      }
      .go-back {
        width: 358px;
        margin: 12px auto;
        color: #fff;
        z-index: 999;
      }
      .pg1_frame-text-wrapper {
        .gd-type {
          font-size: 24px;
          line-height: 32px;
          letter-spacing: normal;
        }
        .gd-name {
          font-size: 18px;
          line-height: 32px;
        }
        .gd-ts {
          margin: 0 0 16px 0;
        }
      }
    }
    .banner-wapper1 {
      // height: 640px;
      height: calc(100vh - 40px);
      &::before {
        content: "";
        position: absolute;
        height: calc(100vh - 40px);
        width: 100vw;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 90%,
          #000000e8 98%
        );
      }
    }
    .pg {
      .content {
        width: 358px;
        padding: 32px 0;
        .detail-slider {
          padding-bottom: 8px;
          .slider-item {
            width: 175px;
          }
        }
        .yy-slider {
          margin-top: 0;
          padding-bottom: 0;
          .slider-item {
            width: 175px;
            img {
              width: 175px;
            }
          }
        }
      }

      .tit {
        font-size: 14px;
        line-height: 16px;
      }
      .txt {
        font-size: 12px;
        line-height: 14px;
        margin-top: 10px;
        text-wrap: wrap;
        word-wrap: break-word;
        white-space: normal;
      }
    }
  }
  .vedio-comp {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000e4;
    z-index: 999;
    .gd-vedio {
      position: relative;
      width: 358px;
      .my-video {
        width: 358px;
      }
      .close-video {
        position: absolute;
        top: 280px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  :deep(.el-carousel__arrow) {
    top: 85%;
    transform: scale(0.8);
  }
}
</style>
