<template>
  <div class="sys-wapper text-center">
    <div
      class="fixed head z-999 flex justify-center py-4 wow animate__animated animate__fadeInDown"
    >
      <li class="text-white text-5 font-500">数据管理系统</li>
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
      <component :is="actTab" />
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
            <el-input v-model="ruleForm.userName" type="text" />
          </el-form-item>
          <el-form-item prop="company">
            <template #label>
              <div class="">密码</div>
            </template>
            <el-input
              v-model="ruleForm.password"
              type="password"
              show-password
            />
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

<script lang="ts">
import { sys } from "@/api/sys";
import { ElMessage } from "element-plus";
import { Options, Vue } from "vue-property-decorator";

import { useUserStoreHook } from "@/store/modules/user";
import H920 from "./com/H920.vue";
import home from "./com/home.vue";
import Msg from "./com/msg.vue";
import R17 from "./com/R17.vue";
import R275A from "./com/R275A.vue";
import Report from "./com/report.vue";
import RS100 from "./com/rs100.vue";
import User from "./com/user.vue";
@Options({
  components: {
    Msg,
    Report,
    User,
    home,
    R275A,
    R17,
    RS100,
    H920,
  },
})
export default class Sys extends Vue {
  userStore = useUserStoreHook();
  actTab = "Msg";
  tabs = [
    { name: "试用申请", key: "Msg" },
    { name: "客户报备", key: "Report" },
    { name: "客户管理", key: "User" },
    { name: "首页", key: "home" },
    { name: "R275A", key: "R275A" },
    { name: "R17", key: "R17" },
    { name: "RS100", key: "RS100" },
    { name: "H920", key: "H920" },
  ];
  showSys = false;
  ruleForm = {
    userName: "",
    password: "",
  };
  created() {}
  mounted() {
    this.loginCheck();
  }
  submitForm() {
    // showSys.value = true;
    useUserStoreHook()
      .getLogin(this.ruleForm)
      .then((res: any) => {
        console.log(`output->res`, res);
        if (res.code === 200) {
          if (res.data.username === "admin") {
            this.showSys = true;
          } else {
            ElMessage({
              message: "抱歉，您无权限进入,请联系管理员",
              center: true,
              offset: 80,
              type: "error",
            });
          }
        } else {
          ElMessage({
            message: "请输入正确的账号或密码",
            center: true,
            offset: 80,
            type: "error",
          });
        }
      });
  }
  loginCheck() {
    sys.loginCheck().subscribe((res) => {
      if (res && res.username === "admin") {
        this.showSys = true;
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.sys-wapper {
  width: 100vw;
  .head {
    width: 100vw;
    background-color: #111212;
  }
  .login-container,
  .sys-container {
    min-height: 100vh;
  }
  .sys-p {
    padding: 64px;
    padding-top: 88px;
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
