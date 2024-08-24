<template>
  <div class="pg-container">
    <section class="banner flex justify-center items-center">
      <div class="text-wrapper text-center flex flex-col items-center">
        <li class="banner-title wow animate__animated animate__fadeInUp">
          {{ t("common.footer.info2.txt2") }}
        </li>
      </div>
    </section>
    <section class="section-wrapper">
      <div v-if="locale === 'en'" v-html="info_en"></div>
      <div v-else v-html="info_zh"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { policyInfo } from "./info";

const { t, locale } = useI18n();
const { info_zh, info_en } = policyInfo();
const A = ref();

onMounted(() => {
  console.log(`output->info_zh, info_en`, info_en);
});
</script>
<style lang="scss" scoped>
.pg-container {
  color: #fff;
  position: relative;
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  padding-top: 89px;
  line-height: normal;

  .banner {
    width: 100vw;
    height: 480px;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-image: url("/aboutUs/news.webp");

    &::before {
      content: "";
      position: absolute;
      width: 100vw;
      height: 480px;
      background: #0000005a;
    }

    .text-wrapper {
      width: 1000px;
      text-wrap: wrap;
      word-wrap: break-word;
      white-space: normal;
      z-index: 9;

      .banner-title {
        font-size: 56px;
        font-weight: 600;
        line-height: 78.4px;
        letter-spacing: 0.08em;
        margin-bottom: 24px;
      }

      .banner-msg {
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
      }
    }
  }
  .section-wrapper {
    width: 1384px;
    padding: 64px 0;
    margin: 0 auto;
    font-size: 20px;
    line-height: 30px;
    color: #1d1c23;
    text-wrap: wrap;
    word-wrap: break-word;
    white-space: normal;
    text-align: justify;
  }
}
@media (max-width: 576px) {
  .pg-container {
    .banner {
      height: 320px;
      background-attachment: local;
      &::before {
        display: none;
      }
      .text-wrapper {
        width: 358px;
        .banner-title {
          font-size: 28px;
          line-height: 32px;
          margin-bottom: 0;
        }
        .banner-msg {
        }
      }
    }
    .section-wrapper {
      display: block;
      font-size: 14px;
      line-height: 20px;
      width: 358px;
      padding-top: 32px;
      margin-bottom: 32px;
      text-wrap: wrap;
      word-wrap: break-word;
      white-space: normal;
      text-align: justify;
    }
  }
}
</style>
