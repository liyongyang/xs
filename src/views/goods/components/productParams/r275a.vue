<script setup lang="ts">
import imgProductDetail from "@/assets/productParams/rs275_product_details.png";
import imgProductParams from "@/assets/productParams/rs275_product_prams.svg";
import imgProductSize from "@/assets/productParams/rs275_product_size.png";

import SubHeader from "@/components/head/subHeader.vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
</script>

<template>
  <div class="good-container mx-auto">
    <SubHeader></SubHeader>

    <div class="content flex flex-col items-center">
      <div class="img-svg">
        <imgProductParams></imgProductParams>
      </div>
      <h2>读取范围</h2>
      <el-image class="gd-img" :src="imgProductSize" />

      <h2>尺寸规格 & 安装</h2>
      <el-image class="gd-img" :src="imgProductDetail" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.good-container {
  width: 100vw;
  margin-top: 89px;
  .content {
    margin-top: 128px;
    text-align: center;
    margin-bottom: 64px;
  }

  .header {
    background-color: #f4f4f4;
    text-align: center;

    .head {
      max-width: 1512px;
      padding: 16px 64px;
      align-items: center;

      .good-name {
        color: #1d1c23;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
      }
    }
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
      margin: 0 auto;
      margin-top: 32px;
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
}
</style>
