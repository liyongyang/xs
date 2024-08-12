<template>
  <div class="pg-container">
    <section class="banner flex justify-center items-center">
      <div class="text-wrapper text-center flex flex-col items-center">
        <li class="banner-title wow animate__animated animate__fadeInUp">
          {{ bannerInfo1.title }}
        </li>
      </div>
    </section>
    <section class="section-wrapper flex-wrap space-x-2">
      <div class="contact">
        <div
          class="space-y-2"
          v-for="(items, index) in info.contact"
          :key="index"
        >
          <div class="contact-item">
            <li class="name wow animate__animated animate__fadeInUp">
              {{ items.name }}
            </li>
            <li class="txt wow animate__animated animate__fadeInUp">
              {{ items.txt }}
            </li>
          </div>
        </div>
        <div class="wx-info flex">
          <div class="flex flex-col justify-between">
            <li class="wow animate__animated animate__fadeInUp">
              {{ info.wx.name }}
            </li>
            <img
              class="wow animate__animated animate__fadeInUp"
              :src="info.wx.img"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-between">
            <li class="wow animate__animated animate__fadeInUp">
              {{ info.gzh.name }}
            </li>
            <img
              class="wow animate__animated animate__fadeInUp"
              :src="info.gzh.img"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="xsForm">
        <el-form
          ref="ruleFormRef"
          :style="isSmallSize ? 'width: 358px' : 'width: 590px'"
          :model="ruleForm"
          :rules="rules"
          label-width="left"
          class="demo-ruleForm"
          status-icon
        >
          <el-form-item prop="name">
            <template #label>
              <div class="wow animate__animated animate__fadeInUp">姓名</div>
            </template>
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item prop="company">
            <template #label>
              <div class="wow animate__animated animate__fadeInUp">
                企业姓名
              </div>
            </template>
            <el-input v-model="ruleForm.company" />
          </el-form-item>
          <el-form-item prop="phone">
            <template #label>
              <div class="wow animate__animated animate__fadeInUp">电话</div>
            </template>
            <el-input v-model="ruleForm.phone" />
          </el-form-item>
          <el-form-item prop="email">
            <template #label>
              <div class="wow animate__animated animate__fadeInUp">邮箱</div>
            </template>
            <el-input v-model="ruleForm.email" />
          </el-form-item>
          <div class="text-center mt-8 wow animate__animated animate__fadeInUp">
            <el-button
              class="btn-black"
              type="primary"
              @click="submitForm(ruleFormRef)"
            >
              提交
            </el-button>
          </div>
        </el-form>
      </div>
    </section>
    <section class="loc-wrapper">
      <div class="loc-content">
        <li class="title">{{ loc.title }}</li>
        <div class="cards">
          <div
            class="card hvr-bob flex flex-col justify-end hover:shadow-2xl"
            v-for="(item, index) in loc.content"
            :key="index"
            :style="{ backgroundImage: `url(${item.bg}` }"
          >
            <li class="name">{{ item.name }}</li>
            <li class="loc">{{ item.loc }}</li>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const isSmallSize = ref(window.innerWidth < 576);
const bannerInfo1 = {
  title: t("contactUs.title"),
};
const info = {
  contact: [
    {
      name: t("contactUs.contact[0].name"),
      txt: t("contactUs.contact[0].txt"),
    },
    {
      name: t("contactUs.contact[1].name"),
      txt: t("contactUs.contact[1].txt"),
    },
    {
      name: t("contactUs.contact[2].name"),
      txt: t("contactUs.contact[2].txt"),
    },
  ],
  wx: {
    name: t("contactUs.wx.name"),
    img: "/aboutUs/wx.png",
  },
  gzh: {
    name: t("contactUs.gzh.name"),
    img: "/aboutUs/gzh.png",
  },
};
const loc = {
  title: t("contactUs.loc.title"),
  content: [
    {
      name: t("contactUs.content[0].name"),
      loc: t("contactUs.content[0].loc"),
      bg: `/aboutUs/loc0.png`,
    },
    {
      name: t("contactUs.content[1].name"),
      loc: t("contactUs.content[1].loc"),
      bg: `/aboutUs/loc1.png`,
    },
    {
      name: t("contactUs.content[2].name"),
      loc: t("contactUs.content[2].loc"),
      bg: `/aboutUs/loc2.png`,
    },
    {
      name: t("contactUs.content[3].name"),
      loc: t("contactUs.content[3].loc"),
      bg: `/aboutUs/loc3.png`,
    },
    {
      name: t("contactUs.content[4].name"),
      loc: t("contactUs.content[4].loc"),
      bg: `/aboutUs/loc4.png`,
    },
  ],
};
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  company: "",
  phone: "",
  email: "",
});
interface RuleForm {
  name: string;
  phone: number;
}

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: "请填写姓名后提交", trigger: "blur" },
    { min: 1, max: 12, message: "请填写正确姓名后提交", trigger: "blur" },
  ],
  phone: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    { min: 8, max: 11, message: "请填写正确手机号后提交", trigger: "blur" },
  ],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      sys.addMsg(ruleForm).subscribe((res) => {
        ElMessage({
          message: "已成功提交信息",
          center: true,
          offset: 80,
          type: "success",
        });
        ruleForm.name = "";
        ruleForm.company = "";
        ruleForm.phone = "";
        ruleForm.email = "";
      });
    } else {
    }
  });
};
onMounted(() => {});
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
    background-image: url("/aboutUs/contact.webp");

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
    display: flex;
    justify-content: space-between;
    width: 1384px;
    padding-top: 128px;
    margin: 0 auto;
    margin-bottom: 64px;
    color: #1d1c23;

    .contact {
      width: 660px;
      height: 575px;

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
        gap: 120px;
        img {
          width: 107px;
        }
      }
    }

    .xsForm {
      width: 660px;
      padding: 32px;

      :deep(.el-form-item) {
        display: block;
        text-align: left;

        .el-form-item__label {
          color: #1d1c23;
          font-size: 14px;
          line-height: 40px;
          margin-bottom: 12px;
        }
      }
    }
  }
  .loc-wrapper {
    width: 100vw;
    height: auto;
    background-color: #f4f4f4;
    .loc-content {
      width: 1384px;
      margin: 0 auto;
      padding: 128px 0;
      text-align: center;
      .title {
        color: #1d1c23;
        font-size: 48px;
        font-weight: 500;
        letter-spacing: 3.84px;
        margin-bottom: 32px;
      }
      .cards {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .card {
          position: relative;
          color: #fff;
          width: 270px;
          height: 354px;
          padding: 32px;
          text-wrap: wrap;
          word-wrap: break-word;
          white-space: normal;
          text-align: left;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 270px;
            height: 354px;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.3) 51%,
              #000 100%
            );
          }
          .name {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            z-index: 2;
          }
          .loc {
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;
            z-index: 2;
          }
        }
      }
    }
  }
  .btn-black {
    width: 314px;
    height: auto;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 32px;
    border-radius: 99px;
    color: #fff;
    background-color: #111112;
    border: 1px solid #111112;
    &:hover {
      background-color: #414344;
      border: 1px solid #414344;
    }
  }

  .btn-white {
    font-size: 14px;
    line-height: 20px;
    color: #1d1c23;
    padding: 10px 32px;
    border-radius: 99px;
    background-color: #fff;
    &:hover {
      background-color: #f4f4f4;
    }
  }
}
@media (max-width: 576px) {
  .pg-container {
    .title {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 0;
    }
    .banner {
      height: 320px;
      background-attachment: local;
      &::before {
        display: none;
      }
      .text-wrapper {
        width: 320px;
        .banner-title {
          font-size: 24px;
          line-height: 32px;
          margin-bottom: 8px;
        }
        .banner-msg {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
    .section-wrapper {
      display: block;
      width: 358px;
      padding-top: 32px;
      margin-bottom: 32px;
      .contact {
        width: 358px;
        height: 460px;
        .contact-item {
          padding: 12px 0;
          .name {
            font-size: 16px;
          }
          .txt {
            font-size: 16px;
            line-height: 20px;
          }
        }
        .wx-info {
          padding-top: 24px;
          gap: 100px;
        }
      }
      .xsForm {
        width: 358px;
        margin: 0 auto;
        padding: 0;
      }
    }
    .loc-wrapper {
      .loc-content {
        width: 358px;
        padding: 40px 0;
        .title {
          font-size: 18px;
          margin-bottom: 12px;
        }
        .cards {
          .card {
            width: 175px;
            height: 230px;
            margin-bottom: 12px;
            padding: 12px;
            &::after {
              width: 175px;
              height: 230px;
            }
            .name {
              font-size: 12px;
              line-height: 16px;
            }
            .loc {
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
