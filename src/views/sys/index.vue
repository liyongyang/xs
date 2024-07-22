<template>
  <div class="sys-wapper text-center">
    <div
      class="fixed head z-999 flex justify-center py-4 wow animate__animated animate__fadeInDown"
    >
      <p class="text-white text-5 font-500">数据管理系统</p>
    </div>
    <section
      v-if="showSys"
      class="sys-container sys-p mx-auto bg-slate-1 wow animate__animated animate__fadeInDown"
    >
      <div class="tabs flex items-center">
        <li
          class="tab cursor-pointer wow animate__animated animate__fadeInDown"
          :class="item.key === actTab ? 'act-tab' : ''"
          v-for="item in tabs"
          :key="item.key"
          @click="actTab = item.key"
        >
          {{ item.name }}
        </li>
      </div>
      <Msg v-if="actTab === 'msg'"></Msg>
      <Report v-if="actTab === 'report'"></Report>
      <User v-if="actTab === 'user'"></User>
    </section>
    <section
      v-else
      class="login-container flex justify-center items-center wow animate__animated animate__fadeInUp"
    >
      <div
        class="login-content shadow-xl flex flex-col justify-center items-center space-y-10"
      >
        <logo1></logo1>
        <el-form
          ref="ruleFormRef"
          style="width: 400px"
          :model="ruleForm"
          label-width="left"
        >
          <el-form-item prop="name">
            <template #label>
              <div class="">账号</div>
            </template>
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item prop="company">
            <template #label>
              <div class="">密码</div>
            </template>
            <el-input v-model="ruleForm.pwd" type="password" show-password />
          </el-form-item>
          <div class="text-center mt-12">
            <el-button class="btn-black" type="primary" @click="submitForm()">
              登录
            </el-button>
          </div>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";
import logo1 from "@/assets/logo1.svg";
import { onMounted, reactive, ref } from "vue";
import Msg from "./com/msg.vue";
import Report from "./com/report.vue";
import User from "./com/user.vue";
const actTab = ref("msg");
const tabs = [
  { name: "试用申请", key: "msg" },
  { name: "客户报备", key: "report" },
  { name: "客户管理", key: "user" },
];
const showSys = ref(false);
const ruleForm = reactive({
  name: "",
  pwd: "",
});
const msgList = ref();

const userList = ref();
const reportList = ref();

const activeName = ref("first");
const submitForm = () => {
  showSys.value = true;
};
const tabClick = (tab, event) => {
  console.log(tab, event);
};

const getMsgList = () => {
  sys.getMsgList({}).subscribe((res) => {
    msgList.value = res.data.list;
  });
};

const deleteRow = (v: any) => {
  console.log(`output->v`, v);
};
onMounted(() => {
  getMsgList();
});
</script>
<style lang="scss" scoped>
.sys-wapper {
  width: 100vw;
  height: 100vh;
  .head {
    width: 100vw;
    background-color: #111212;
  }
  .login-container,
  .sys-container {
    height: 100vh;
    overflow: scroll;
  }
  .sys-p {
    padding: 64px;
    .tabs {
      margin-bottom: 14px;
      .tab {
        font-size: 14px;
        padding: 10px 4px;
        margin: 0 18px;
        color: #898e90;
        transition: all 0.3s ease-in-out;
        border-bottom: 2px solid #f1f5f9;

        &:hover {
          color: #111112;
        }
      }
      .act-tab {
        color: #111112;
        font-weight: 600;
        border-bottom: 2px solid #111112;
      }
    }
  }
  .login-content {
    width: 490px;
    height: 400px;
  }
  :deep(.el-form-item) {
    margin: 0 auto;
    display: block;
    text-align: left;
    margin-bottom: 24px;

    .el-form-item__label {
      color: #1d1c23;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }

    .el-form-item__content {
      width: 100%;
    }
    .el-input__wrapper {
      font-size: 14px;
      height: 44px;
      line-height: 44px;
      font-weight: 500;
    }
    .el-input__inner {
      text-align: center;
      padding: 0 16px;
    }
    .el-input .el-input__icon {
      font-size: 18px;
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
</style>
