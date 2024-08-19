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
        title: "H920 配置码 正式",
        link: "https://xs-code.com/file/H920/%E4%BA%A7%E5%93%81%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/H920%20%E9%85%8D%E7%BD%AE%E7%A0%81%20%E6%AD%A3%E5%BC%8F.pdf",
      },
      {
        title: "H920用户操作手册-v0.2",
        link: "https://xs-code.com/file/H920/%E4%BA%A7%E5%93%81%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/H920%E7%94%A8%E6%88%B7%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C-v0.2.pdf",
      },
    ],
  },
  {
    title: "产品手册",
    icon: icon2,
    subChildren: [
      {
        title: "H920手持式读码器产品单页 单面7.3",
        link: "https://xs-code.com/file/H920/%E4%BA%A7%E5%93%81%E6%89%8B%E5%86%8C/H920%E6%89%8B%E6%8C%81%E5%BC%8F%E8%AF%BB%E7%A0%81%E5%99%A8%E4%BA%A7%E5%93%81%E5%8D%95%E9%A1%B5%20%E5%8D%95%E9%9D%A27.3.pdf",
      },
    ],
  },
  {
    title: "调试软件",
    icon: icon3,
    subChildren: [
      {
        title: "CCS_0V0.6.5_Beta_x86_H920",
        link: "https://xs-code.com/file/H920/%E8%B0%83%E8%AF%95%E8%BD%AF%E4%BB%B6/CCS_0V0.6.5_Beta_x86_H920.exe",
      },
    ],
  },
  {
    title: "视频",
    icon: icon4,
    subChildren: [],
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
    }
    h2 {
      font-size: 18px;
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }
}
</style>
