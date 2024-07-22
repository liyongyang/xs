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
        <div class="wx-info flex space-x-40">
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
          style="width: 590px"
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
        <div class="flex justify-between">
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
import type { FormInstance, FormRules } from "element-plus";
import { onMounted, reactive, ref } from "vue";

const bannerInfo1 = {
  title: "联系我们",
};
const info = {
  contact: [
    {
      name: "商务咨询",
      txt: "lvml@xs-trinity.com",
    },
    {
      name: "加入我们",
      txt: "hrfxy@xs-trinity.com",
    },
    {
      name: "联系电话",
      txt: "15381991195",
    },
  ],
  wx: {
    name: "官方微信二维码",
    img: "/aboutUs/wx.png",
  },
  gzh: {
    name: "微信公众号二维码",
    img: "/aboutUs/gzh.png",
  },
};
const loc = {
  title: "办公地点",
  content: [
    {
      name: "宁波总部",
      loc: "宁波鄞州区星空国际写字楼大厦",
      bg: `/aboutUs/loc0.png`,
    },
    {
      name: "南京分公司",
      loc: "南京栖霞区紫东国际创意园",
      bg: `/aboutUs/loc1.png`,
    },
    {
      name: "杭州分公司",
      loc: "杭州萧山区杭州湾智慧谷",
      bg: `/aboutUs/loc2.png`,
    },
    {
      name: "苏州办公室",
      loc: "苏州苏州工业园区传奇大厦",
      bg: `/aboutUs/loc3.png`,
    },
    {
      name: "深圳办公室",
      loc: "深圳南山区南海德大厦",
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
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
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
      .card {
        position: relative;
        color: #fff;
        width: 270px;
        height: 354px;
        padding: 32px;
        text-wrap: wrap;
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
</style>
