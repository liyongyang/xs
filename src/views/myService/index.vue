<template>
  <canvas ref="canvasRef" class="sequence-frames"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const canvasRef = ref(null);
let frames = [];
let currentIndex = 0;
let animationFrameId = null;
let lastTimestamp = performance.now();
const targetFrameTime = 1000 / 60; // Target 60 FPS

onMounted(() => {
  loadBgArr().then((list) => {
    frames = list;
  });
  initCanvas();
  startAnimation();
  window.addEventListener("wheel", handleScroll);
});
const loadImage = (src) => {
  let p = new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
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
    await loadImage(`/goods/case1/1000${i}-imageonline.webp`).then((img) => {
      arr.push(img);
    });
  }
  return arr;
};
onUnmounted(() => {
  window.removeEventListener("wheel", handleScroll);
  cancelAnimationFrame(animationFrameId);
});

function initCanvas() {
  const ctx = canvasRef.value.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function startAnimation() {
  animationFrameId = requestAnimationFrame(animationLoop);
}

function animationLoop(timestamp) {
  const elapsed = timestamp - lastTimestamp;
  const progress = Math.min(elapsed / targetFrameTime, 1);
  lastTimestamp = timestamp;

  const ctx = canvasRef.value.getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const currentFrame = frames[currentIndex];
  const img = new Image();
  img.src = currentFrame;

  img.onload = () => {
    ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    if (progress === 1) {
      currentIndex = (currentIndex + 1) % frames.length;
      animationFrameId = requestAnimationFrame(animationLoop);
    } else {
      animationFrameId = requestAnimationFrame(animationLoop);
    }
  };
}

function handleScroll(event) {
  if (event.deltaY > 0) {
    currentIndex = (currentIndex + 1) % frames.length;
  } else {
    currentIndex = (currentIndex - 1 + frames.length) % frames.length;
  }
}
</script>

<style scoped>
.sequence-frames {
  width: 100vw;
  height: 100vh;
}
</style>
