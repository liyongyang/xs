<template>
  <div class="xsForm">
    <el-icon
      class="absolute top-3 right-2 font-600 text-4 text-black cursor-pointer"
      @click="close()"
    >
      <CloseBold />
    </el-icon>
    <div class="contact">
      <div class="space-y-2" v-for="(items, index) in contact" :key="index">
        <div class="contact-item">
          <li class="name">
            {{ items.name }}
          </li>
          <li class="txt">
            {{ items.txt }}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const emit = defineEmits(["close"]);

const contact = [
  {
    name: t("contactUs.contact[0].name"),
    txt: "lvml@xs-trinity.com",
  },
  {
    name: t("contactUs.contact[1].name"),
    txt: "hrfxy@xs-trinity.com",
  },
  {
    name: t("contactUs.contact[2].name"),
    txt: "15381991195",
  },
];

const close = () => {
  emit("close", null);
};

onMounted(() => {});
</script>
<style lang="scss" scoped>
.xsForm {
  position: relative;
  padding: 20px;
  .contact {
    .contact-item {
      padding: 16px 0;
      border-bottom: 1px solid #dfe1e2;

      .name {
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
      }

      .txt {
        font-size: 28px;
        font-weight: 700;
        line-height: 40px;
      }
    }

    .wx-info {
      height: 200px;
      padding-top: 32px;

      img {
        width: 107px;
      }
    }
  }
}
@media (max-width: 576px) {
  .xsForm {
    padding: 0;
  }
}
</style>
