<script setup lang="ts">
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t, locale } = useI18n();
const router = useRouter();
const route = useRoute();
const isSmallSize = ref(window.innerWidth < 576);
const goodType: string = route.params.goodType as string;
const pageStore = {
  rs100: {
    name: t("rs100.name"),
    navs: [
      { key: "product-params", value: t("common.headLink.t1") },
      { key: "download", value: t("common.headLink.t2") },
      // { key: "qa", value: t("common.headLink.t3") },
    ],
  },
  r17: {
    name: t("r17.name"),
    navs: [
      { key: "product-params", value: t("common.headLink.t1") },
      { key: "download", value: t("common.headLink.t2") },
      // { key: "qa", value: t("common.headLink.t3") },
    ],
  },
  r275a: {
    name: t("A275A_INFO.name"),
    navs: [
      { key: "product-params", value: t("common.headLink.t1") },
      { key: "download", value: t("common.headLink.t2") },
      // { key: "qa", value: t("common.headLink.t3") },
    ],
  },
  h920: {
    name: t("h920.name"),
    navs: [
      { key: "product-params", value: t("common.headLink.t1") },
      { key: "download", value: t("common.headLink.t2") },
      // { key: "qa", value: t("common.headLink.t3") },
    ],
  },
};
// todo 后续可能得考虑规划下产品系列的大小写问题，如 r275a 和 R275A
const routePathProductName = goodType.toLowerCase();
const page = pageStore[routePathProductName];

function getRouterPath(key: string) {
  return { path: `/goods/${goodType}/${key}` };
}

const goback = () => {
  router.push({ path: `/goods/${goodType}` });
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
</script>

<template>
  <div class="header wow animate__animated animate__fadeInDown">
    <div class="head flex justify-between items-center mx-auto">
      <section
        v-if="!isSmallSize"
        class="good-name cursor-pointer font-500"
        @click="goback()"
      >
        {{ page.name }}
      </section>
      <div class="flex justify-between items-center">
        <router-link
          v-for="(nav, index) in page.navs"
          :key="index"
          :to="getRouterPath(nav.key)"
          class="nv-item cursor-pointer"
        >
          {{ nav.value }}
          <!-- {{ t("common.headLink.t1") }} -->
        </router-link>
        <li class="btn-black mr-4 cursor-pointer" @click="openDialog()">
          {{ t("common.headLink.t4") }}
        </li>
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
    .nv-item {
      padding: 12px 8px;
      margin-right: 16px;
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
      &:hover {
        background-color: #414344;
      }
    }
  }
}
@media (max-width: 576px) {
  .header {
    .head {
      max-width: 358px;
      padding: 12px 0;
      .nv-item {
        padding: 4px 16px;
        margin-right: 4px;
      }
      .btn-black {
        padding: 8px 10px;
      }
    }
  }
}
</style>
