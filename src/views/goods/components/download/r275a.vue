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
        title: "多config使用介绍",
        link: "https://xs-code.com/file/R27X/%E4%BA%A7%E5%93%81%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/%E5%A4%9Aconfig%E4%BD%BF%E7%94%A8%E4%BB%8B%E7%BB%8D.pdf",
      },
      {
        title: "R27X系列读码器用户操作手册",
        link: "https://xs-code.com/file/R27X/%E4%BA%A7%E5%93%81%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/R27X%E7%B3%BB%E5%88%97%E8%AF%BB%E7%A0%81%E5%99%A8%E7%94%A8%E6%88%B7%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8CV1.0.0.pdf",
      },
      {
        title: "新算读码器工业协议用户手册",
        link: "https://xs-code.com/file/R27X/%E4%BA%A7%E5%93%81%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/%E6%96%B0%E7%AE%97%E8%AF%BB%E7%A0%81%E5%99%A8%E5%B7%A5%E4%B8%9A%E5%8D%8F%E8%AE%AE%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8CV0.2.pdf",
      },
    ],
  },
  {
    title: "产品手册",
    icon: icon2,
    subChildren: [
      {
        title: "R27读码器产品手册",
        link: "https://xs-code.com/file/R27X/%E4%BA%A7%E5%93%81%E6%89%8B%E5%86%8C/R27%E8%AF%BB%E7%A0%81%E5%99%A8%E4%BA%A7%E5%93%81%E6%89%8B%E5%86%8CA4%206.21C.pdf",
      },
    ],
  },
  {
    title: "调试软件",
    icon: icon3,
    subChildren: [
      {
        title: "XS_Reader_Tools",
        link: "https://xs-code.com/file/R27X/调试软件/XS_Reader_Tools_1.3.9_Beta_x86.exe",
      },
    ],
  },
  {
    title: "教学视频-功能类",
    icon: icon4,
    subChildren: [
      {
        title: "R27X-不同码制读取",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E5%A4%9Aconfig%E8%AE%BE%E7%BD%AE/R27X-%E4%B8%8D%E5%90%8C%E7%A0%81%E5%88%B6%E8%AF%BB%E5%8F%96.mp4",
      },
      {
        title: "R27X-多来料读取",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E5%A4%9Aconfig%E8%AE%BE%E7%BD%AE/R27X-%E5%A4%9A%E6%9D%A5%E6%96%99%E8%AF%BB%E5%8F%96.mp4",
      },
      {
        title: "R27X-多码读取",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E5%A4%9Aconfig%E8%AE%BE%E7%BD%AE/R27X-%E5%A4%9A%E7%A0%81%E8%AF%BB%E5%8F%96.mp4",
      },
      {
        title: "R27系列-读取失败设置",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%95%B0%E6%8D%AE/R27%E7%B3%BB%E5%88%97-%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5%E8%AE%BE%E7%BD%AE.mp4",
      },
      {
        title: "R27系列-局部设置",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%95%B0%E6%8D%AE/R27%E7%B3%BB%E5%88%97-%E5%B1%80%E9%83%A8%E8%AE%BE%E7%BD%AE.mp4",
      },
      {
        title: "R27系列-全局设置",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%95%B0%E6%8D%AE/R27%E7%B3%BB%E5%88%97-%E5%85%A8%E5%B1%80%E8%AE%BE%E7%BD%AE.mp4",
      },
      {
        title: "R27系列-数据过滤",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E6%A0%BC%E5%BC%8F%E5%8C%96%E6%95%B0%E6%8D%AE/R27%E7%B3%BB%E5%88%97-%E6%95%B0%E6%8D%AE%E8%BF%87%E6%BB%A4.mp4",
      },
      {
        title: "R27系列-串口通信设置",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E9%80%9A%E4%BF%A1%E8%AE%BE%E7%BD%AE/R27%E7%B3%BB%E5%88%97-%E4%B8%B2%E5%8F%A3%E9%80%9A%E4%BF%A1%E8%AE%BE%E7%BD%AE.mp4",
      },
      {
        title: "R27系列-FTP通信设置",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E9%80%9A%E4%BF%A1%E8%AE%BE%E7%BD%AE/R27%E7%B3%BB%E5%88%97-FTP%E9%80%9A%E4%BF%A1%E8%AE%BE%E7%BD%AE.mp4",
      },
      {
        title: "R27系列-TCP通信设置",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E5%8A%9F%E8%83%BD%E7%B1%BB/%E9%80%9A%E4%BF%A1%E8%AE%BE%E7%BD%AE/R27%E7%B3%BB%E5%88%97-TCP%E9%80%9A%E4%BF%A1%E8%AE%BE%E7%BD%AE.mp4",
      },
    ],
  },
  {
    title: "教学视频-样本类",
    icon: icon4,
    subChildren: [
      {
        title: "R27系列-高反光",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R27%E7%B3%BB%E5%88%97-%E9%AB%98%E5%8F%8D%E5%85%89.mp4",
      },
      {
        title: "R27系列-激光码",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R27%E7%B3%BB%E5%88%97-%E6%BF%80%E5%85%89%E7%A0%81.mp4",
      },
      {
        title: "R27系列-极小码",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R27%E7%B3%BB%E5%88%97-%E6%9E%81%E5%B0%8F%E7%A0%81.mp4",
      },
      {
        title: "R27系列-镭雕码",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R27%E7%B3%BB%E5%88%97-%E9%95%AD%E9%9B%95%E7%A0%81.mp4",
      },
      {
        title: "R27系列-喷墨白底黑码",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R27%E7%B3%BB%E5%88%97-%E5%96%B7%E5%A2%A8%E7%99%BD%E5%BA%95%E9%BB%91%E7%A0%81.mp4",
      },
      {
        title: "R27系列-喷墨黑底白码",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R27%E7%B3%BB%E5%88%97-%E5%96%B7%E5%A2%A8%E9%BB%91%E5%BA%95%E7%99%BD%E7%A0%81.mp4",
      },
      {
        title: "R27系列-圆柱面",
        link: "https://xs-code.com/file/R27X/%E6%95%99%E5%AD%A6%E8%A7%86%E9%A2%91/%E6%95%99%E5%AD%A6%E7%B1%BB%E8%A7%86%E9%A2%91-R27%E7%B3%BB%E5%88%97/%E6%A0%B7%E6%9C%AC%E7%B1%BB/R27%E7%B3%BB%E5%88%97-%E5%9C%86%E6%9F%B1%E9%9D%A2.mp4",
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
      <!-- <h2>{{ t("common.headLink.t2") }}</h2> -->

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
