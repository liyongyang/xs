<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

const route = useRoute();

const goodType: string = route.params.goodType as string;

import usePageStore from "@/store/modules/page";
const { pageStore } = usePageStore();

// todo 后续可能得考虑规划下产品系列的大小写问题，如 r275a 和 R275A
const routePathProductName = goodType.toLowerCase();
const page = pageStore[routePathProductName];

function getRouterPath(key: string) {
  return { path: `/goods/${goodType}/${key}` };
}
const goback = () => {
  router.push({ path: `/goods/${goodType}` });
};
</script>

<template>
  <div class="header wow animate__animated animate__fadeInDown">
    <div class="head flex justify-between items-center mx-auto">
      <section class="good-name cursor-pointer" @click="goback()">
        {{ page.name }}
      </section>
      <div class="flex justify-between items-center">
        <router-link
          v-for="(nav, index) in page.navs"
          :key="index"
          :to="getRouterPath(nav.key)"
          class="py-2 px-3 mr-4 cursor-pointer"
        >
          {{ nav.value }}
        </router-link>
        <router-link
          :to="{ path: '/contactUs' }"
          class="btn-black py-2 px-3 mr-4 cursor-pointer"
          >联系我们
        </router-link>
        <!-- <li class="btn-black py-2.5 px-4 cursor-pointer">联系我们</li> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  }
}
</style>