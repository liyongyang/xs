<template>
  <button>HOVER ME</button>
  <div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
  </div>
  <div class="loader">
    <div class="container">
      <div class="carousel">
        <div class="love"></div>
        <div class="love"></div>
        <div class="love"></div>
        <div class="love"></div>
        <div class="love"></div>
        <div class="love"></div>
        <div class="love"></div>
      </div>
    </div>
    <div class="container">
      <div class="carousel">
        <div class="death"></div>
        <div class="death"></div>
        <div class="death"></div>
        <div class="death"></div>
        <div class="death"></div>
        <div class="death"></div>
        <div class="death"></div>
      </div>
    </div>
    <div class="container">
      <div class="carousel">
        <div class="robots"></div>
        <div class="robots"></div>
        <div class="robots"></div>
        <div class="robots"></div>
        <div class="robots"></div>
        <div class="robots"></div>
        <div class="robots"></div>
      </div>
    </div>
  </div>


  <div ref="containerRef" class="my-container" :style="{ backgroundColor: bgConf[active].color }">
    <section class="page">
      <div ref="box1" class="w-full h20 bg-sky-800 z-100">box1</div>
      <div ref="box2" class="w-1/2 h40 bg-sky-600">box2</div>
      <div v-for="(items, idx) in bgConf" :key="idx" :class="active === idx ? 'show' : 'hidden'">
        <img v-for="(item, index) in items.pList" :key="item" ref="imageRefs"
          class="absolute w64 z-10 opacity100 imageItem animate__animated"
          :class="[`p` + idx + `-` + index, bgConf[0].p_animate]" :src="item" alt="" srcset="" />
        <div class="absolute title font-normal color-white animate__animated">
          <li>{{ items.title[0] }}</li>
          <li>{{ items.title[1] }}</li>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import {
  nextTick,
  onMounted,
  reactive,
  ref
} from "vue";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const containerRef = ref(null);
const active = ref(0);
const imageRefs = ref([]);
const bgConf = reactive([
  {
    title: ["Snacking", "tomatoes"],
    t_animate: "animate__tada",
    color: "#e7514d",
    pList: [
      `/img/product/p1-1.png`,
      `/img/product/p1-2.png`,
      `/img/product/p1-3.png`,
    ],
    p_animate: "animate__tada",
  },
  {
    title: ["Citrus"],
    t_animate: "animate__tada",
    color: "#fe7128", // #fdd204 #e7514d #ff7028 #f97792 #8bd3b9
    p_animate: "animate__tada",
    pList: [
      `/img/product/p2-1.png`,
      `/img/product/p2-2.png`,
      `/img/product/p2-3.png`,
    ],
  },
  // {
  //   title: ["Grapes"],

  //   color: "#ff7028",
  // },
  // {
  //   title: ["Avocados"],

  //   color: "#f97792",
  // },
  // {
  //   title: ["Flowers"],

  //   color: "#fdd204",
  // },
]);

const box = ref(null);
const box1 = ref(null);
const box2 = ref(null);

const start = () => {
  gsap.fromTo(
    box.value,
    {
      y: (_, target) => {
        return document.documentElement.clientHeight / 2;
        // return document.documentElement.clientHeight - target.offsetHeight;
      },
      opacity: 0,
    },
    {
      y: (_, target) => {
        return (
          document.documentElement.clientHeight / 2 - target.offsetHeight / 2
        );
        // return document.documentElement.clientWidth - target.offsetWidth;
      },
      opacity: 1,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: box.value,
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    box1.value,
    {
      y: (_, target) => {
        return document.documentElement.clientHeight;
      },
      opacity: 0,
    },
    {
      y: (_, target) => {
        return document.documentElement.clientHeight - target.offsetHeight;
      },
      opacity: 1,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: box1.value,
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    box2.value,
    {
      y: (_, target) => {
        return document.documentElement.clientHeight;
      },
      opacity: 0.5,
    },
    {
      y: (_, target) => {
        return document.documentElement.clientHeight - target.offsetHeight;
      },
      opacity: 1,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: box2.value,
        scrub: true,
      },
    }
  );
};
const proShow = () => {
  console.log("imagesRefs", imageRefs.value); // 输出图片 DOM 元素的引用数组

  imageRefs.value.forEach((t) => {
    // gsap.fromTo(
    //   t,
    //   {
    //     y: (_, target) => {
    //       return document.documentElement.clientHeight;
    //     },
    //     opacity: 0,
    //   },
    //   {
    //     y: (_, target) => {
    //       return document.documentElement.clientHeight - target.offsetHeight;
    //     },
    //     opacity: 1,
    //     duration: 2,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: t,
    //       scrub: true,
    //     },
    //   }
    // );
  });
  console.log("imageRefs.value", imageRefs.value);
};
onMounted(() => {
  nextTick(() => {
    // start();
    imageRefs.value = Array.from(document.querySelectorAll(".imageItem"));
    // proShow();
  });
  // setInterval(() => {
  //   active.value < 2 ? active.value++ : (active.value = 0);
  //   // console.log("----", active.value);
  // }, 3000);
});
</script>
<style lang="scss" scoped>
.my-container {
  display: flex;
  width: 100%;
  height: 100%;
  transition: background-color 1.5s;
  // background-color: rgb(40 193 242);

  .page {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    // background-color: rgb(40 193 242);
    .title {
      top: 20%;

      position: absolute;
      // z-index: 20;
      animation: bounce;

      animation-duration: 1.5s;

      li {
        font-size: 9rem;
        line-height: 140px;
      }
    }

    .p0-0 {
      width: 13rem;
      left: 20%;
      top: 16%;
    }

    .p0-1 {
      width: 19rem;
      left: 6%;
      top: 42%;
    }

    .p0-2 {
      z-index: 30;
      right: 14%;
      top: 40%;
    }

    .box1,
    .boxx {
      background-color: rgb(40 193 242);
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: #ffcc00;
      opacity: 0;
    }
  }
}
</style>
<style lang="scss" scoped>
.wrapper {
  width: 200px;
  height: 60px;
  position: relative;
  z-index: 1;
}

.circle {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 .5s alternate infinite ease;
}

@keyframes circle7124 {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
}

.circle:nth-child(2) {
  left: 45%;
  animation-delay: .2s;
}

.circle:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}

.shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 .5s alternate infinite ease;
}

@keyframes shadow046 {
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: .7;
  }

  100% {
    transform: scaleX(.2);
    opacity: .4;
  }
}

.shadow:nth-child(4) {
  left: 45%;
  animation-delay: .2s
}

.shadow:nth-child(5) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}
</style>
<style>
.loader {
  display: flex;
  position: relative;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  height: 55px;
  width: 200px;
  overflow: hidden;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 200px;
  position: relative;
  align-items: center;
}

.carousel {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  position: absolute;
  width: 100%;
  transform-origin: center;
  animation-delay: 2s;
}

.loader .container:nth-child(3) {
  justify-content: flex-start;
  justify-items: flex-start;
  animation: scroll-up 4s infinite ease-in-out;
  animation-delay: 3s;
}

.loader .container:nth-child(2) {
  justify-content: flex-end;
  justify-items: flex-end;
  animation: scroll-down 4s infinite ease-in-out;
  animation-delay: 3s;
}

.loader .container:nth-child(1) {
  justify-content: flex-end;
  justify-items: flex-end;
  animation: scroll-down 3s infinite ease-in-out;
  animation-delay: 3s;
}

.love {
  background: red;
  display: flex;
  width: 30px;
  height: 30px;
  position: relative;
  align-items: center;
  justify-content: center;
  left: 8px;
  margin: 0.8rem 4px;
  transform: rotate(45deg);
  animation-delay: 2s;
}

.love::before,
.love::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: red;
}

.love::before {
  left: -16px;
}

.love::after {
  top: -16px;
}

.death {
  display: flex;
  width: 100%;
  height: 55px;
  position: relative;
  align-items: center;
  justify-content: center;
  animation: rotation 3s infinite ease-in-out;
  animation-delay: 1s;
}

.death:after {
  content: '';
  height: 63px;
  position: absolute;
  border-left: 12px solid red;
  transform: rotate(45deg);
  border-radius: 8px;
  top: -4px;
}

.death:before {
  content: '';
  height: 60px;
  position: absolute;
  border-left: 12px solid red;
  transform: rotate(-45deg);
}

.loader:hover {
  animation: none;
}

.robots {
  display: flex;
  width: 100%;
  height: 55px;
  justify-content: space-between;
  background-color: #ff0000;
  border-radius: 0 8px 8px;
  padding: 8px;
  animation-delay: 5s;
}

.robots::after {
  content: '';
  width: 12px;
  height: 12px;
  top: 0;
  left: 0;
  background-color: #ffffff;
  border-radius: 50%;
  animation-delay: 2s;
  animation: blink 0.5s 2 forwards;
}

.robots::before {
  content: '';
  width: 12px;
  height: 12px;
  top: 0;
  left: 0;
  background-color: #ffffff;
  border-radius: 50%;
  animation-delay: 2s;
  animation: blink 0.5s 2 forwards;
}

@keyframes scroll-up {
  0% {
    transform: translateY(0);
    filter: blur(0);
  }

  30% {
    transform: translateY(-150%);
    filter: blur(10px);
  }

  60% {
    transform: translateY(0);
    filter: blur(0px);
  }
}

@keyframes scroll-down {
  0% {
    transform: translateY(0);
    filter: blur(0);
  }

  30% {
    transform: translateY(150%);
    filter: blur(10px);
  }

  60% {
    transform: translateY(0);
    filter: blur(0px);
  }
}

@keyframes rotation {

  20%,
  100% {
    transform: rotate(180deg);
  }
}

@keyframes blink {
  0% {
    height: 0;
  }

  20% {
    height: 12px;
  }

  100% {
    height: 12px;
  }
}
</style>
<style>
button {
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  color: #fff;
  width: 9em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
}

button:hover {
  animation: ani 8s linear infinite;
  border: none;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

button:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

button:hover::before {
  filter: blur(20px);
}

button:active {
  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
}
</style>
