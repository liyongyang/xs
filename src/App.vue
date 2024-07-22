<template>
  <el-config-provider>
    <Head
      v-if="showMenus && fronted"
      class="animate__animated animate__fadeInDown"
    ></Head>
    <Slider v-if="fronted"></Slider>
    <router-view v-slot="{ Component }">
      <component :is="Component" class="" />
    </router-view>
    <Footer></Footer>
    <Mydialog />
  </el-config-provider>
</template>

<script lang="ts" setup>
import Mydialog from "@/components/Dialog/index.vue";
import Footer from "@/components/footer/index.vue";
import Head from "@/components/head/index.vue";
import Slider from "@/components/slider/index.vue";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import WOW from "wow.js";
const route = useRoute();
const fronted = ref(true);
const showMenus = ref(true);

watch(route, (v) => {
  window.scrollTo(0, 0);
  showMenus.value = true;
  fronted.value = v.meta.title != "sys";
});

const onMouseWheel = (event: any) => {
  if (event.deltaY > 0) {
    showMenus.value = false;
  } else if (event.deltaY < 0) {
    showMenus.value = true;
  }
};

onMounted(() => {
  new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
  }).init();
  document.body.addEventListener("wheel", onMouseWheel);
});
onBeforeUnmount(() => {
  document.body.removeEventListener("wheel", onMouseWheel);
});
</script>
<style lang="scss" scoped>
.main {
  padding-top: 88px;
}
</style>
@/components/Dialog/index.vue
