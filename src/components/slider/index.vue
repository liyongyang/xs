<template>
  <div class="slider-container">
    <img
      class="hvr-wobble-horizontal cursor-pointer"
      src="/common/affix-icon1.png"
      alt=""
      srcset=""
      @click="toContactUs()"
    />
    <img
      class="hvr-wobble-horizontal cursor-pointer"
      src="/common/affix-icon2.png"
      alt=""
      srcset=""
      @click="toContactUs()"
    />
    <img
      @click="toTop()"
      class="hvr-wobble-horizontal cursor-pointer"
      src="/common/affix-icon3.png"
      alt=""
      srcset=""
    />
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const toContactUs = () => {
  router.push({
    path: "/contactUs",
  });
};
onMounted(() => {});
</script>
<style lang='scss' scoped>
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
</style>