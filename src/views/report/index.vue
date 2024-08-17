<template>
  <div class="pg-container">
    <div class="content relative mx-auto text-center">
      <section v-if="showFrom">
        <el-badge
          class="my-bb item cursor-pointer btn-black"
          :value="list.length"
          color="green"
          @click="showFrom = false"
          >我的报备
        </el-badge>
        <el-form
          ref="ruleFormRef"
          label-position="right"
          label-width="auto"
          :model="reportForm"
          :rules="rules"
          class="mx-auto"
          style="max-width: 800px; text-align: center"
        >
          <el-row>
            <el-col :span="32">
              <el-form-item label="企业名称：" label-position="top">
                <div>
                  <div class="flex flex-wrap gap-2">
                    <el-tag
                      v-for="tag in dynamicTags"
                      :key="tag"
                      closable
                      size="large"
                      effect="light"
                      type="info"
                      round
                      class="btn-white"
                      :disable-transitions="false"
                      @close="handleClose(tag)"
                    >
                      {{ tag }}
                    </el-tag>
                    <el-input
                      v-if="inputVisible"
                      ref="InputRef"
                      v-model="inputValue"
                      class="w60"
                      @keyup.enter="handleInputConfirm"
                      @blur="handleInputConfirm"
                    />
                    <el-button class="btn-black" v-else round @click="showInput"
                      >点击添加 +
                    </el-button>
                  </div>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col span="12">
              <el-form-item label="公司地址：" label-position="top">
                <el-input v-model="reportForm.address" />
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="公司业务：" label-position="top">
                <el-input v-model="reportForm.business" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider content-position="left">公司对接人信息</el-divider>
          <el-row :gutter="20">
            <el-col span="12">
              <el-form-item label="姓名" label-position="top">
                <el-input v-model="reportForm.contactName" />
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="职位" label-position="top">
                <el-input v-model="reportForm.contactPost" />
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="电话" label-position="top">
                <el-input v-model="reportForm.contactPhone" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider content-position="left">报备项目具体信息</el-divider>
          <el-row :gutter="20">
            <el-col span="12">
              <el-form-item label="项目名称" label-position="top">
                <el-input v-model="reportForm.projectName" />
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="项目使用场景" label-position="top">
                <el-input v-model="reportForm.projectScene" />
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="项目阶段" label-position="top">
                <el-input v-model="reportForm.projectStage" />
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="推荐产品型号" label-position="top">
                <el-input v-model="reportForm.suggestProduct" />
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="项目需求数量" label-position="top">
                <el-input v-model="reportForm.projectNeedNum" />
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="公司全年整体需求数量" label-position="top">
                <el-input v-model="reportForm.needTotal" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider content-position="left"></el-divider>
          <el-row :gutter="20">
            <el-col span="12">
              <el-form-item
                label="报备人"
                label-position="top"
                prop="reportName"
              >
                <el-input v-model="reportForm.reportName" />
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item
                label="报备人联系方式"
                label-position="top"
                prop="reportPhone"
              >
                <el-input v-model="reportForm.reportPhone" />
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item
                label="所在公司"
                label-position="top"
                prop="reportCompany"
              >
                <el-input v-model="reportForm.reportCompany" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="备注" label-position="top">
            <el-input
              type="textarea"
              style="width: 760px"
              :autosize="{ minRows: 6, maxRows: 6 }"
              maxlength="150"
              show-word-limit
              placeholder="请输入不超过150个字"
              v-model="reportForm.remark"
            />
          </el-form-item>
          <el-button class="btn-black2" @click="submitForm(ruleFormRef)">
            提交</el-button
          >
        </el-form>
      </section>
      <section v-else>
        <div class="text-left p2 wow animate__animated animate__fadeInUp">
          <li
            class="flex items-center text-4 font-500 py-2 px-3 cursor-pointer"
          >
            <el-icon>
              <ArrowLeftBold />
            </el-icon>
            <span class="px-3" @click="showFrom = true">{{
              t("common.back")
            }}</span>
          </li>
        </div>

        <el-table
          :data="list"
          :style="isSmallSize ? 'width: 358px' : 'width: 100%'"
          height="660"
          class="shadow-xl min-w300 wow animate__animated animate__fadeInUp"
        >
          <el-table-column
            prop="company"
            fixed="left"
            label="公司名称"
            width="120"
            :show-overflow-tooltip="true"
          />
          <el-table-column prop="address" label="地址" width="160" />
          <el-table-column prop="business" label="主营业务" width="160" />
          <!-- 客户对接人信息 -->
          <el-table-column
            prop="contactName"
            label="客户对接人姓名"
            width="160"
          />
          <el-table-column
            prop="contactPost"
            label="客户对接人职位"
            width="160"
          />
          <el-table-column
            prop="contactPhone"
            label="客户对接人电话"
            width="160"
          />
          <el-table-column prop="projectName" label="项目名称" width="160" />
          <el-table-column prop="projectScene" label="使用场景" width="160" />
          <el-table-column prop="projectStage" label="项目阶段" width="160" />
          <el-table-column
            prop="projectNeedNum"
            label="项目需求量"
            width="160"
          />
          <el-table-column
            prop="suggestProduct"
            label="推荐产品型号"
            width="160"
          />
          <el-table-column
            prop="needTotal"
            label="全年整体需求数量"
            width="170"
            :show-overflow-tooltip="true"
          />
          <!-- 报备人信息 -->
          <el-table-column
            prop="createTime"
            sortable
            label="报备时间"
            width="130"
            :show-overflow-tooltip="true"
          />
          <el-table-column
            prop="reportName"
            fixed="right"
            label="姓名"
            width="120"
          />
          <el-table-column
            prop="reportCompany"
            fixed="right"
            label="所在公司"
            width="100"
            :show-overflow-tooltip="true"
          />
          <el-table-column
            prop="reportPhone"
            fixed="right"
            label="电话"
            width="140"
            :show-overflow-tooltip="true"
          />
          <el-table-column
            prop="status"
            fixed="right"
            label="报备进度"
            width="100"
          >
            <template #default="scope">
              <li :class="'status_' + scope.row.status" class="font-500">
                {{ fkOpt[scope.row.status] }}
              </li>
            </template>
          </el-table-column>

          <el-table-column
            prop="remark"
            label="备注"
            width="140"
            :show-overflow-tooltip="true"
          />
        </el-table>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";
import type { ElInput, FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";

import { nextTick, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const showFrom = ref(true);
const isSmallSize = ref(window.innerWidth < 576);

const fkOpt = {
  1: "审核中",
  2: "审核完成",
  3: "已通过",
  4: "未通过",
};
const ruleFormRef = ref<FormInstance>();
const reportForm = reactive({
  company: "", //公司名称
  address: "", //地址
  business: "", //主营业务
  contactName: "", //客户对接人姓名
  contactPost: "", //客户对接人职位
  contactPhone: "", //客户对接人电话
  projectName: "", //项目名称
  projectScene: "", //项目使用场景
  projectStage: "", //项目阶段
  suggestProduct: "", //推荐产品型号
  projectNeedNum: "", //项目需求数量
  needTotal: "", //公司全年需求数量
  reportName: "", //报备人姓名
  reportPhone: "", //报备人联系方式
  reportCompany: "", //所在公司
  reportTime: "", //报备日期
  remark: "", //备注
  userId: "", //用户ID
});
interface RuleForm {
  reportName: string;
  reportCompany: number;
  reportPhone: number;
}
const rules = reactive<FormRules<RuleForm>>({
  reportName: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    { min: 1, max: 12, message: "请填写正确姓名后提交", trigger: "blur" },
  ],
  reportCompany: [
    { required: true, message: "请输入所在公司", trigger: "blur" },
    { min: 1, max: 11, message: "请填写正确所在公司后提交", trigger: "blur" },
  ],
  reportPhone: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    { min: 8, max: 11, message: "请填写正确手机号后提交", trigger: "blur" },
  ],
});
const inputValue = ref("");
const dynamicTags = ref([]);
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof ElInput>>();
const list = ref([]);
const userInfo = ref();
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

const getList = () => {
  userInfo.value = JSON.parse(localStorage.getItem("userInfo"));
  const params = {
    current: 1,
    size: 10,
    userId: userInfo.value.userid,
  };
  sys.getReportList(params).subscribe((res) => {
    list.value = res.list;
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = "";
};

const submitForm = async (formEl: FormInstance | undefined) => {
  reportForm.userId = userInfo.value.userid;
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      dynamicTags.value.forEach((l, index) => {
        reportForm.company = l;
        sys.addReport(reportForm).subscribe(() => {
          router.push({
            path: "/",
          });
        });
        if (dynamicTags.value.length - 1 === index) {
          ElMessage({
            message: "报备信息已提交",
            center: true,
            offset: 80,
            type: "success",
          });
        }
      });
    } else {
    }
  });
};
const loginCheck = () => {
  sys.loginCheck().subscribe((res) => {
    if (res) {
      localStorage.setItem("userInfo", JSON.stringify(res));
      getList();
    } else {
      router.push("/");
    }
  });
};
onMounted(() => {
  loginCheck();
});
</script>
<style lang="scss" scoped>
.pg-container {
  position: relative;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  text-align: center;
  overflow-x: hidden;
  padding-top: 120px;
  line-height: normal;
  .content {
    max-width: 1384px;
    padding: 0 12px;
    min-height: 680px;

    margin: 0 auto;
    .my-bb {
      position: absolute;
      right: 10rem;
      top: 0;
    }
    :deep(.el-form-item) {
      min-width: 368px;
      display: block;
      text-align: left;
      margin-bottom: 24px;

      .el-form-item__label {
        color: #1d1c23;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 12px;
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
        padding: 0 12px;
      }
      .el-input .el-input__icon {
        font-size: 18px;
      }
    }
    .btn-black {
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

    .btn-white {
      height: auto;
      font-size: 14px;
      line-height: 20px;
      padding: 10px 32px;
      border-radius: 99px;
      color: #111112;
      background-color: #fff;
      &:hover {
        color: #111112;
        background-color: #f4f4f4;
      }
    }
    .btn-black2 {
      margin-top: 24px;
      margin-bottom: 128px;
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
    .status_1 {
      color: rgb(245, 149, 70);
    }
    .status_2 {
      color: rgb(69, 154, 244);
    }
    .status_3 {
      color: rgb(94, 238, 164);
    }
    .status_4 {
      color: rgb(233, 65, 65);
    }
  }
}
@media (max-width: 576px) {
  .pg-container {
    padding-top: 72px;
    .content {
      max-width: 358px;
      padding: 0;
      padding-top: 12px;
      .my-bb {
        right: 24px;
        top: 0;
        z-index: 999;
      }
      :deep(.el-form-item) {
        min-width: 358px;
        margin-bottom: 10px;
        .el-form-item__label {
          font-size: 12px;
          line-height: 16px;
          margin-bottom: 8px;
        }
        .el-form-item__content {
          width: 358px;
          flex-wrap: wrap;
        }
      }
      .btn-black {
        font-size: 12px;
        padding: 4px 14px;
      }
      .btn-white {
        font-size: 12px;
        padding: 4px 14px;
      }
    }
  }
}
</style>
