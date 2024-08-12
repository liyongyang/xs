<template>
  <canvas ref="canvasRef" class="sequence-frames"></canvas>
</template>

<script setup>
import { onMounted, ref } from "vue";

const canvasRef = ref(null);
let bgArr = [];
let currentIndex = 0;

onMounted(() => {
  loadBgArr().then((list) => {
    bgArr = list;
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
    await loadImage(`/goods/case1/1000${i}-imageonline.webp`).then((img) => {
      arr.push(img);
    });
  }
  return arr;
};
</script>

<style scoped>
.sequence-frames {
  width: 100vw;
  height: 100vh;
}
</style>
