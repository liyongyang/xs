<template>
  <div wh-full px-8 space-y-4>
    <div class="w-full flex justify-end">
      <div class="w1/3 flex justify-around">
        <h3
          v-for="item in 5"
          :key="item"
          class="hvr-wobble-horizontal hvr-underline-from-center cursor-pointer p1"
        >
          menu{{ item }}
        </h3>
      </div>
    </div>

    <el-button
      @click="clickbtn1()"
      class="animate__animated animate__rotateInUpLeft"
    >
      click: isShow:{{ isShow }}
    </el-button>
    <div flex space-x-8>
      <li class="my-bounce">bounce</li>
      <div class="animate__animated animate__bounce animate__infinite">
        infinite
      </div>
      <li class="animate__animated animate__flipInX">flipInX</li>
      <li class="animate__animated animate__tada">tada</li>
      <li class="animate__animated animate__tada animate__delay-2s">
        tada delay-2s
      </li>
      <li :class="{ fadeOutDown: isShow }">animate__fadeOutDown</li>
      <p
        :class="{ boingInUp: isShow }"
        w40
        h10
        bg-pink-500
        rounded
        text-center
        ma-auto
      >
        bombRightOut
      </p>
    </div>

    <div class="flex">
      <div v-for="(item, index) in imgList" :key="index" class="item">
        <div class="envelope w20 h20">
          <img class="hvr-grow" :src="item" alt="example image" />
        </div>
      </div>
    </div>
    <div
      class="hvr-grow flex text-center relative w160 h40 cursor-pointer"
      :class="{ boingInUp: isShow }"
    >
      <div class="card__side" id="front-2">
        <div class="text-box">
          <h3 class="text-box-top">use</h3>
          <h1 class="text-box-middle">animate.css</h1>
          <h3 class="text-box-lower">--- hover.css ---</h3>
        </div>
      </div>
    </div>
    <div class="row flex w-full justify-center">
      <div class="block">
        <i class="hovicon effect-4 sub-b">IO</i>
      </div>
      <div class="block">
        <i class="hovicon effect-8 sub-b">IO</i>
      </div>
    </div>
    <div v-if="isShow">
      <p :class="{ arrow: isShow }" class="w8 h8 rounded">animation:arrow</p>
      <p :class="{ fade2: isShow }" class="w8 h8 rounded">animation:fade2</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { init } from "echarts";
import { onMounted, ref } from "vue";

const isShow = ref(false);
const imgList = [
  "https://images.unsplash.com/photo-1600156336721-0afd66a25271?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1600156336721-0afd66a25271?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1600156336721-0afd66a25271?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1600156336721-0afd66a25271?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400",
];
const clickBtn = () => {};
const clickbtn1 = () => {
  isShow.value = !isShow.value;
  setTimeout(() => {
    isShow.value = !isShow.value;
  }, 1800);
};
const isScrollTop = ref(false);
const scrollDistance = ref([]);
const currentPage = ref(1);
const page1 = ref(null);
const page2 = ref(null);
const page3 = ref(null);
const handleScroll = (e: any) => {
  // !scrollDistance.value.length && init()
  e.preventDefault();
  const pageHeight =
    document.body.scrollTop || document.documentElement.clientHeight;
  var scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  if (e.deltaY > 0) {
    isScrollTop.value = false;
    currentPage.value < 3 && currentPage.value++;
    // window.scrollTo({
    //   top: scrollTop + pageHeight,
    //   // top: scrollDistance.value[currentPage.value - 1],
    //   behavior: "smooth" // 可选，添加平滑滚动效果
    // });
  } else {
    isScrollTop.value = true;
    currentPage.value > 1 && currentPage.value--;
    // window.scrollTo({
    //   // top: scrollTop - pageHeight,
    //   top: scrollDistance.value[currentPage.value - 1],
    //   behavior: "smooth" // 可选，添加平滑滚动效果
    // });
  }
  console.log("currentPage", currentPage.value);
};

const init = () => {
  const page1H = page1.value.getBoundingClientRect().top;
  const page2H = page2.value.getBoundingClientRect().top;
  const page3H = page3.value.getBoundingClientRect().top;
  scrollDistance.value.push(page1H);
  scrollDistance.value.push(page2H);
  scrollDistance.value.push(page3H);
  console.log("first", scrollDistance.value);
};
onMounted(() => {
  window.addEventListener("mouseScroll", handleScroll, true);
  setTimeout(() => {
    clickBtn();
  }, 2000);
});
</script>

<style scoped>
:root {
  --animate-duration: 0.3s;
  --animate-delay: 0;
}

.image {
  width: 100%;
}

.grid {
  width: 100%;
  max-width: 60rem;
  display: grid;
  grid-gap: var(--gutter);
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  /* background: #e8e8e8; */
  color: #000c18bc;
}

.item {
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5));
  will-change: filter;
}

.envelope {
  clip-path: polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%);
  will-change: clip-path;
  pointer-events: none;
}

.item:hover {
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.6));
}

.item:hover .envelope {
  animation: 0.25s ease-out forwards grow;
}

.item.go-back .envelope {
  animation: 0.3s ease-in shrink;
}

@keyframes grow {
  0% {
    clip-path: polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%);
  }

  50% {
    clip-path: polygon(0% 0%, 95% 5%, 100% 100%, 5% 95%);
  }

  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}

@keyframes shrink {
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  50% {
    clip-path: polygon(0% 0%, 95% 5%, 100% 100%, 5% 95%);
  }

  100% {
    clip-path: polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%);
  }
}
</style>
<style scoped>
.card__side {
  transition: all 0.8s ease;
  color: white;
  width: 100%;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
}

#front-2 {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      rgba(84, 86, 175, 0.9),
      rgba(27, 27, 85, 0.9)
    ),
    url("https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80");
}
</style>
<style scoped>
.my-bounce {
  display: inline-block;
  margin: 0 0.5rem;
  animation: bounce;
  /* referring directly to the animation's @keyframe declaration */
  animation-duration: 5s;
  animation-delay: 1s;
  /* don't forget to set a duration! */
}

.my-tada {
  display: inline-block;
  margin: 0 0.5rem;
  animation: flipInX;
  /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
  /* don't forget to set a duration! */
}

.fadeOutDown {
  transition: all ease-in-out 500ms;
  animation: flipInX;
  animation-duration: 2s;
}

.my-fadeOutDown1:hover {
  /* transform: scale(1.03); */

  /* display: inline-block;
  margin: 0 0.5rem; */
  /* transform: translate(-10px, -20px) scale(2) rotate(45deg); */
  animation: 1s ease-out forwards fadeOutDown1;
}

@keyframes fadeOutDown1 {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
    transform: scale(0.5);
  }

  100% {
    display: none;
    opacity: 0;
    transform: scale(2);
  }
}

.boingInUp {
  animation: 800ms ease-out forwards boingInUp;
}

@-webkit-keyframes boingInUp {
  0% {
    opacity: 0;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: perspective(800px) rotateX(-90deg);
    transform: perspective(800px) rotateX(-90deg);
  }

  50% {
    opacity: 1;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: perspective(800px) rotateX(50deg);
    transform: perspective(800px) rotateX(50deg);
  }

  100% {
    opacity: 1;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: perspective(800px) rotateX(0deg);
    transform: perspective(800px) rotateX(0deg);
  }
}

@keyframes boingInUp {
  0% {
    opacity: 0;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: perspective(800px) rotateX(-90deg);
    transform: perspective(800px) rotateX(-90deg);
  }

  50% {
    opacity: 1;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: perspective(800px) rotateX(50deg);
    transform: perspective(800px) rotateX(50deg);
  }

  100% {
    opacity: 1;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: perspective(800px) rotateX(0deg);
    transform: perspective(800px) rotateX(0deg);
  }
}

.arrow {
  animation: arrow 0.8s;
}

@keyframes arrow {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.8);
  }

  70% {
    opacity: 0.5;
  }

  80% {
    opacity: 0.8;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade2 {
  animation: fade2 1.8s infinite linear both;
}

@keyframes fade2 {
  from {
    opacity: 0;
    transform: translate3d(50px, 0, 0);
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-50px, 0, 0);
  }
}
</style>
<style scoped>
.btn {
  display: inline-block;
  line-height: 35px;
  margin: 8px;
  padding: 0 15px;
  font-size: 15px;
  position: relative;
  opacity: 0.999;
  border-radius: 3px;
}

.btn-border-o {
  background-color: transparent;
  border: 1px solid #d0d0d0;
  color: #b8b8b8;
}

.btn-border-o:before,
.btn-border-o:after {
  content: "";
  border-style: solid;
  position: absolute;
  z-index: 5;
  border-radius: 3px;
  box-sizing: content-box;
}

.btn-border-o:before {
  width: 0;
  height: 100%;
  border-width: 1px 0 1px 0;
  top: -1px;
  left: 0;
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

.btn-border-o:after {
  width: 100%;
  height: 0;
  border-width: 0 1px 0 1px;
  top: 0;
  left: -1px;
}

.btn-border-o:hover:before {
  width: 100%;
}

.btn-border-o:hover:after {
  height: 100%;
}

.btn-border-o.btn-green:before,
.btn-border-o.btn-green:after {
  border-color: #2ecc71;
}

.btn-border-o.btn-green:hover {
  color: #2ecc71;
}
</style>
<style scoped>
.row {
  background-color: #424242;
}

.row .block {
  float: left;
  width: 25%;
  height: 150px;
}

.hovicon {
  display: inline-block;
  font-size: 45px;
  line-height: 90px;
  cursor: pointer;
  margin: 20px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  text-align: center;
  position: relative;
  text-decoration: none;
  z-index: 1;
  color: #fff;
}

.hovicon.small {
  font-size: 20px;
  line-height: 45px;
  width: 45px;
  height: 45px;
  margin: 7px;
}

.hovicon.mini {
  font-size: 15px;
  line-height: 32px;
  width: 30px;
  height: 30px;
  margin: 7px;
}

.hovicon.auto-width {
  width: auto;
  height: auto;
  padding: 15px;
}

.hovicon:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  content: "";
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.hovicon:before {
  speak: none;
  font-size: 48px;
  line-height: 90px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  display: block;
  -webkit-font-smoothing: antialiased;
}

/* Effect 4 */
.hovicon.effect-4 {
  width: 92px;
  height: 92px;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 1);
}

.hovicon.effect-4.small {
  width: 45px;
  height: 45px;
}

.hovicon.effect-4.mini {
  width: 30px;
  height: 30px;
}

.hovicon.effect-4.sub-a {
  -webkit-transition: box-shadow 0.2s;
  -moz-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
}

.hovicon.effect-4:before {
  line-height: 92px;
}

.hovicon.effect-4:after {
  top: -4px;
  left: -4px;
  padding: 0;
  z-index: 10;
  border: 4px dashed #fff;
}

.hovicon.effect-4:hover {
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  color: #fff;
}

.hovicon.effect-4:hover i {
  color: #fff;
}

/* Effect 4b */
.hovicon.effect-4.sub-b:hover {
  -webkit-transition: box-shadow 0.2s;
  -moz-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
}

.hovicon.effect-4.sub-b:hover:after {
  -webkit-animation: spinAround 9s linear infinite;
  -moz-animation: spinAround 9s linear infinite;
  animation: spinAround 9s linear infinite;
}

@-webkit-keyframes spinAround {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes spinAround {
  from {
    -moz-transform: rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg);
  }
}

@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Effect 8 */
.hovicon.effect-8 {
  background: rgba(255, 255, 255, 0.1);
  -webkit-transition: -webkit-transform ease-out 0.1s, background 0.2s;
  -moz-transition: -moz-transform ease-out 0.1s, background 0.2s;
  transition: transform ease-out 0.1s, background 0.2s;
}

.hovicon.effect-8:after {
  top: 0;
  left: 0;
  padding: 0;
  z-index: -1;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  opacity: 0;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}

.hovicon.effect-8:hover {
  background: rgba(255, 255, 255, 0.05);
  -webkit-transform: scale(0.93);
  -moz-transform: scale(0.93);
  -ms-transform: scale(0.93);
  transform: scale(0.93);
  color: #fff;
}

.hovicon.effect-8:hover i {
  color: #fff;
}

.hovicon.effect-8:hover:after {
  -webkit-animation: sonarEffect 1.3s ease-out 75ms;
  -moz-animation: sonarEffect 1.3s ease-out 75ms;
  animation: sonarEffect 1.3s ease-out 75ms;
}

@-webkit-keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }

  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc,
      0 0 0 10px rgba(255, 255, 255, 0.5);
  }

  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc,
      0 0 0 10px rgba(255, 255, 255, 0.5);
    -webkit-transform: scale(1.5);
    opacity: 0;
  }
}

@-moz-keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }

  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc,
      0 0 0 10px rgba(255, 255, 255, 0.5);
  }

  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc,
      0 0 0 10px rgba(255, 255, 255, 0.5);
    -moz-transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes sonarEffect {
  0% {
    opacity: 0.3;
  }

  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc,
      0 0 0 10px rgba(255, 255, 255, 0.5);
  }

  100% {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc,
      0 0 0 10px rgba(255, 255, 255, 0.5);
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
<style lang="scss" scoped>
.scroll-box {
  text-align: center;
  font-size: 2rem;
  align-items: center;

  .item {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top center;
  }
}
</style>
