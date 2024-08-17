<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const icon1 = ref();
import("@/assets/icon/product_word_icon.png").then((module) => {
  icon1.value = module.default;
});
const icon2 = ref();
import("@/assets/icon/product_user_book_icon.png").then((module) => {
  icon2.value = module.default;
});
const icon3 = ref();
import("@/assets/icon/product_software_icon.png").then((module) => {
  icon3.value = module.default;
});
const icon4 = ref();
import("@/assets/icon/product_video_icon.png").then((module) => {
  icon4.value = module.default;
});

import downloadIcon from "@/assets/icon/download_icon.png";

const list = [
  {
    title: "产品操作手册",
    icon: icon1,
    subChildren: [
      {
        title: "新算读码器工业协议用户手册",
        link: "https://xs-code.com/file/R17X/%E4%BA%A7%E5%93%81%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/%E6%96%B0%E7%AE%97%E8%AF%BB%E7%A0%81%E5%99%A8%E5%B7%A5%E4%B8%9A%E5%8D%8F%E8%AE%AE%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8CV0.2.pdf",
      },
      {
        title: "r17x手册",
        link: "https://xs-code.com/file/R17X/%E4%BA%A7%E5%93%81%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/r17x%E6%89%8B%E5%86%8C-v1.0.pdf",
      },
    ],
  },
  {
    title: "产品手册",
    icon: icon2,
    subChildren: [
      {
        title: "紧凑型R17系列读码器折页",
        link: "https://xs-code.com/file/R17X/%E4%BA%A7%E5%93%81%E6%89%8B%E5%86%8C/%E7%B4%A7%E5%87%91%E5%9E%8BR17%E7%B3%BB%E5%88%97%E8%AF%BB%E7%A0%81%E5%99%A8%E6%8A%98%E9%A1%B5%20A4%206.21.pdf",
      },
    ],
  },
  {
    title: "调试软件",
    icon: icon3,
    subChildren: [
      {
        title: "CCS_0V2.5_Beta_x86",
        link: "https://xs-code.com/file/R17X/%E8%B0%83%E8%AF%95%E8%BD%AF%E4%BB%B6/CCS_0V2.5_Beta_x86.exe",
      },
    ],
  },
  {
    title: "教学视频-功能类",
    icon: icon4,
    subChildren: [
      {
        title: "R17系列-设置方式1",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E8%AE%BE%E7%BD%AE%E6%96%B9%E5%BC%8F/R17%E7%B3%BB%E5%88%97-%E8%AE%BE%E7%BD%AE%E6%96%B9%E5%BC%8F1.mp4",
      },
      {
        title: "R17系列-设置方式2",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E8%AE%BE%E7%BD%AE%E6%96%B9%E5%BC%8F/R17%E7%B3%BB%E5%88%97-%E8%AE%BE%E7%BD%AE%E6%96%B9%E5%BC%8F2.mp4",
      },
      {
        title: "R17系列-数据过滤",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E6%95%B0%E6%8D%AE%E8%BF%87%E6%BB%A4/R17%E7%B3%BB%E5%88%97-%E6%95%B0%E6%8D%AE%E8%BF%87%E6%BB%A4.mp4",
      },
      {
        title: "R17系列-E -FTP通信设置",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E9%80%9A%E4%BF%A1%E8%AE%BE%E7%BD%AE/R17%E7%B3%BB%E5%88%97-E%20-FTP%E9%80%9A%E4%BF%A1%E8%AE%BE%E7%BD%AE.mp4",
      },
      {
        title: "R17系列-E -TCP通信设置",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E9%80%9A%E4%BF%A1%E8%AE%BE%E7%BD%AE/R17%E7%B3%BB%E5%88%97-E%20-TCP%E9%80%9A%E4%BF%A1%E8%AE%BE%E7%BD%AE.mp4",
      },
      {
        title: "R17系列-S -串口设置",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E9%80%9A%E4%BF%A1%E8%AE%BE%E7%BD%AE/R17%E7%B3%BB%E5%88%97-S%20-%E4%B8%B2%E5%8F%A3%E8%AE%BE%E7%BD%AE.mp4",
      },
    ],
  },
  {
    title: "教学视频-样本类",
    icon: icon4,
    subChildren: [
      {
        title: "R17系列-高反光",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R17%E7%B3%BB%E5%88%97-%E9%AB%98%E5%8F%8D%E5%85%89.mp4",
      },
      {
        title: "R17系列-激光码",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R17%E7%B3%BB%E5%88%97-%E6%BF%80%E5%85%89%E7%A0%81.mp4",
      },
      {
        title: "R17系列-镭雕码",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R17%E7%B3%BB%E5%88%97-%E9%95%AD%E9%9B%95%E7%A0%81.mp4",
      },
      {
        title: "R17系列-喷墨白底黑码",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R17%E7%B3%BB%E5%88%97-%E5%96%B7%E5%A2%A8%E7%99%BD%E5%BA%95%E9%BB%91%E7%A0%81.mp4",
      },
      {
        title: "R17系列-喷墨黑底白码",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R17%E7%B3%BB%E5%88%97-%E5%96%B7%E5%A2%A8%E9%BB%91%E5%BA%95%E7%99%BD%E7%A0%81.mp4",
      },
      {
        title: "R17系列-圆柱面",
        link: "https://xs-code.com/file/R17X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R17%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R17%E7%B3%BB%E5%88%97-%E5%9C%86%E6%9F%B1%E9%9D%A2.mp4",
      },
    ],
  },
];

const activeNames = ref([]);

import SubHeader from "@/components/head/subHeader.vue";
</script>

<template>
  <div class="good-container mx-auto">
    <SubHeader></SubHeader>

    <div class="content">
      <h2>{{ t("common.headLink.t2") }}</h2>

      <div>
        <el-collapse v-model="activeNames">
          <el-collapse-item
            v-for="(item, index) in list"
            :key="index"
            :name="index"
          >
            <template #title>
              <img
                class="download-icon"
                :src="item.icon?.value"
                :alt="item.title"
              />
              <h4>
                {{ item.title }}
              </h4>
            </template>

            <div class="a-text">
              <div v-for="(sub, index) in item.subChildren" :key="index">
                <div class="flex items-center justify-between">
                  <p>{{ sub.title }}</p>

                  <div class="flex items-center">
                    <img class="download-icon" :src="downloadIcon" alt="" />
                    <a :href="sub.link">{{ t("common.headLink.t2") }}</a>
                  </div>
                </div>
                <span class="divider" />
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.good-container {
  width: 100vw;
  margin-top: 89px;
  .content {
    width: 1384px;
    margin: 0 auto;
    padding: 64px 0;
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
    text-align: center;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
  }

  .a-text {
    color: rgba(29, 28, 35, 0.8);
    background-color: #f4f4f4;
    padding: 16px 56px;
    white-space: normal;
    font-size: 14px;

    p {
      line-height: 40px;

      &:last-of-type .divider {
        display: none;
      }
    }

    .divider {
      height: 1px;
      display: block;
      margin: 8px 0;
      background-color: #dfe1e2;
    }
  }

  .download-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
}
@media (max-width: 576px) {
  .good-container {
    margin-top: 72px;
    .content {
      width: 358px;
      margin: 0 auto;
      padding: 0;
    }
    h2 {
      font-size: 18px;
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }
}
</style>
