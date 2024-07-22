<script setup lang="ts">
import { ref } from "vue";

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
    title: "产品资料",
    icon: icon1,
    subChildren: [
      { title: "产品资料 1", link: "" },
      { title: "产品资料 2", link: "" },
      { title: "产品资料 3", link: "" },
    ],
  },
  {
    title: "用户手册",
    icon: icon2,
    subChildren: [
      { title: "用户手册 1", link: "" },
      { title: "用户手册 2", link: "" },
    ],
  },
  {
    title: "软件",
    icon: icon3,
    subChildren: [
      { title: "软件 1", link: "" },
      { title: "软件 2", link: "" },
      { title: "软件 3", link: "" },
      { title: "软件 4", link: "" },
      { title: "软件 5", link: "" },
    ],
  },
  {
    title: "视频",
    icon: icon4,
    subChildren: [{ title: "视频 1", link: "" }],
  },
];

const activeNames = ref([]);

import SubHeader from "@/components/head/subHeader.vue";
</script>

<template>
  <div class="good-container mx-auto">
    <SubHeader></SubHeader>

    <div class="px-16 pb-16">
      <h2>下载</h2>

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
                    下载
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
  white-space: pre-wrap;
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
</style>
