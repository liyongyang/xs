<script setup lang="ts">
import { ref } from "vue";

import imgProductParams from "@/assets/productParams/rs100_product_params.svg";
// import imgProductParams from '@/assets/productParams/rs100_product_params.jpg';
import imgProductDetail from "@/assets/productParams/rs100_product_details.png";
import SubHeader from "@/components/head/subHeader.vue";

const isSmallSize = ref(window.innerWidth < 576);
</script>

<template>
  <div class="good-container mx-auto">
    <SubHeader></SubHeader>

    <div class="flex flex-col items-center">
      <h2>产品参数</h2>
      <div class="img-svg">
        <imgProductParams></imgProductParams>
      </div>

      <!-- <el-image :src="imgProductParams" style="margin-bottom: 64px;width: 1384px" /> -->

      <h2>尺寸规格 & 线缆</h2>
      <el-image class="gd-img" :src="imgProductDetail" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.good-container {
  width: 100vw;
  margin-top: 89px;
  .content {
    width: 1384px;
    padding: 64px 0;
    // padding-bottom: 16rem;
  }

  .btn-black {
    height: auto;
    font-size: 14px;
    line-height: 20px;
    border-radius: 99px;
    color: #fff;
    background-color: #000;
    border: 1px solid #fefefe;
    &:hover {
      background-color: #414344;
    }
  }

  h2,
  h4 {
    color: #1d1c23;
  }

  h2 {
    font-size: 48px;
    font-weight: 500;
    margin-top: 128px;
    text-align: center;
    margin-bottom: 64px;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
  }

  .text {
    color: rgba(29, 28, 35, 0.8);
  }
  .gd-img {
    margin-bottom: 64px;
    width: 1384px;
  }
}

@media (max-width: 576px) {
  .good-container {
    margin-top: 72px;
    .content {
      width: 358px;
      padding: 0;
    }
    h2 {
      font-size: 18px;
      margin-top: 32px;
      margin-bottom: 32px;
    }
    .img-svg {
      width: 358px;
      overflow-x: scroll;
    }
    .gd-img {
      margin-bottom: 32px;
      width: 358px;
    }
  }
}
</style>
