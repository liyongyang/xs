<template>
  <div class="user-wrapper">
    <div class="text-right mx-4 absolute z-99 top--15 right-0">
      <el-button class="btn-black my-2" @click="showDialog('add', null)">
        <span class="mr-2">新增</span>
        <el-icon><Plus /></el-icon>
      </el-button>
    </div>
    <el-table
      :data="list"
      style="width: 100%"
      height="660"
      class="shadow-xl min-w300 wow animate__animated animate__fadeIn"
    >
      <el-table-column prop="userName" label="账号" />
      <el-table-column prop="password" label="密码" />
      <el-table-column prop="company" label="备注" />
      <el-table-column fixed="right" label="操作" width="140" align="center">
        <template #default="scope">
          <el-button
            link
            type="success"
            round
            size="small"
            @click.prevent="showDialog('edit', scope.row)"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            round
            size="small"
            @click.prevent="showDialog('delete', scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      class="modal-comp"
      v-model="showKey"
      title="Warning"
      width="490"
      align-center
    >
      <div class="text-center">
        <el-icon
          class="absolute top-4 right-4 font-600 text-4 text-black cursor-pointer"
          @click="showKey = null"
        >
          <CloseBold />
        </el-icon>
        <li
          class="title"
          :class="showKey === 'delete' ? 'text-rose-5' : 'text-emerald-5'"
        >
          {{ showTitle }}
        </li>
        <el-form ref="ruleFormRef" :model="userForm" label-width="left">
          <el-form-item prop="userName">
            <template #label>
              <div class="">账号</div>
            </template>
            <el-input
              :disabled="showKey === 'delete'"
              v-model="userForm.userName"
            />
          </el-form-item>
          <el-form-item prop="password">
            <template #label>
              <div class="">密码</div>
            </template>
            <el-input
              :disabled="showKey === 'delete'"
              v-model="userForm.password"
            />
          </el-form-item>
          <el-form-item prop="company">
            <template #label>
              <div class="">备注</div>
            </template>
            <el-input
              :disabled="showKey === 'delete'"
              v-model="userForm.company"
            />
          </el-form-item>
          <div class="text-center mt-12">
            <el-button class="btn-black2" type="primary" @click="commit()">
              提交
            </el-button>
          </div>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";
import { ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";
const list = ref();
const actUser = ref();
const showKey = ref();
const showTitle = ref("");
const userForm = reactive({
  userName: "",
  password: "",
  company: "",
});
const params = reactive({
  current: 1,
  size: 10,
});
const getMsgList = () => {
  sys.userList(params).subscribe((res) => {
    list.value = res.list;
  });
};

const showDialog = (key: string, v: any) => {
  actUser.value = v;
  switch (key) {
    case "add":
      showTitle.value = "新增账号";
      userForm.userName = "";
      userForm.password = "";
      userForm.company = "";

      break;
    case "edit":
      showTitle.value = "编辑账号";
      userForm.userName = v.userName;
      userForm.password = v.password;
      userForm.company = v.company;
      break;
    case "delete":
      showTitle.value = "删除账号";
      userForm.userName = v.userName;
      userForm.password = v.password;
      userForm.company = v.company;
      break;
    default:
      break;
  }
  showKey.value = key;
};
const commit = () => {
  switch (showKey.value) {
    case "add":
      sys.addUser(userForm).subscribe((res) => {
        ElMessage({
          message: "已成功" + showTitle.value,
          center: true,
          offset: 80,
          type: "success",
        });
        getMsgList();
      });

      break;
    case "edit":
      const params = {
        userId: actUser.value.userId,
        userName: userForm.userName,
        password: userForm.password,
        company: userForm.company,
      };

      sys.editUser(params).subscribe((res) => {
        ElMessage({
          message: "已成功" + showTitle.value,
          center: true,
          offset: 80,
          type: "success",
        });
        getMsgList();
      });
      break;
    case "delete":
      const id = [actUser.value.userId];
      sys.deletUser(id).subscribe((res) => {
        ElMessage({
          message: "已成功" + showTitle.value,
          center: true,
          offset: 80,
          type: "success",
        });
        getMsgList();
      });
      break;

    default:
      break;
  }
  showKey.value = null;
  userForm.userName = "";
  userForm.password = "";
  getMsgList();
};

onMounted(() => {
  getMsgList();
});
</script>
<style lang="scss" scoped>
.user-wrapper {
  position: relative;
  .ccc {
    position: absolute;
    background-color: #111213;
  }
  .title {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 24px;
  }
  .btn-black {
    height: auto;
    font-size: 14px;
    line-height: 20px;
    padding: 4px 24px;
    border-radius: 99px;
    color: #fff;
    background-color: #111112;
    border: 1px solid #111112;
    &:hover {
      color: #fff;
      background-color: #414344;
      border: 1px solid #414344;
    }
  }
  .btn-black2 {
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
      color: #fff;
      background-color: #414344;
      border: 1px solid #414344;
    }
  }
}
</style>
