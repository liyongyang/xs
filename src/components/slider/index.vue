<template>
  <div class="slider-container slider">
    <img
      class="hvr-wobble-horizontal cursor-pointer"
      src="/common/affix-icon1.svg"
      alt=""
      srcset=""
      @click="openSy()"
    />
    <img
      class="hvr-wobble-horizontal cursor-pointer"
      src="/common/affix-icon2.svg"
      alt=""
      srcset=""
      @click="openCall()"
    />
    <img
      @click="toTop()"
      class="hvr-wobble-horizontal cursor-pointer"
      src="/common/affix-icon3.svg"
      alt=""
      srcset=""
    />
  </div>
</template>

<script setup lang="ts">
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const isSmallSize = ref(window.innerWidth < 576);

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  if (route.path === "/goods/R275A") {
    window.location.reload();
  }
};
const openContact = () => {
  router.push({
    path: "/contactUs",
  });
};

const openSy = () => {
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

const openCall = () => {
  addDialog({
    title: "",
    width: "480px",
    props: {},
    footer: false,
    component: popModules.CONTACT,
    callBack: (config) => {
      //当弹窗任务结束后，调用父页面的回掉函数。（比如	我新增完成了需要刷新列表页面）
      if (config) {
      }
    },
  });
};
onMounted(() => {});
</script>
<style lang="scss" scoped>
.slider-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 153px;

  > *:hover {
    border-radius: 100%;
    background-color: #fff;
    transition: background-color 0.5s;
  }
}
.slider {
  position: fixed;
  bottom: 70px;
  right: 48px;
  z-index: 999;
}
@media (max-width: 576px) {
  .slider {
    position: fixed;
    bottom: 64px;
    right: 28px;
    z-index: 999;
  }
}
</style>
