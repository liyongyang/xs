<template>
  <div class="pg-container">
    <div class="content mx-auto text-center">
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
                <div class="flex gap-2">
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
            <el-form-item label="报备人" label-position="top" prop="reportName">
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
        <el-button class="btn-black2" @click="submitForm(ruleFormRef)"
          >提交</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";
import type {
  ElInput,
  FormInstance,
  FormItemProps,
  FormProps,
  FormRules,
} from "element-plus";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();

import { nextTick, onMounted, reactive, ref } from "vue";
const labelPosition = ref<FormProps["labelPosition"]>("right");
const itemLabelPosition = ref<FormItemProps["labelPosition"]>("");
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
  userId: "1", //用户ID
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
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = "";
  console.log(`output->dynamicTags.value`, dynamicTags.value);
};

const submitForm = async (formEl: FormInstance | undefined) => {
  console.log(`output->reportForm`, reportForm, dynamicTags.value);
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      reportForm.company = dynamicTags.value[0];
      dynamicTags;
      sys.addReport(reportForm).subscribe(() => {
        router.push({
          path: "/",
        });
        ElMessage({
          message: "报备信息已提交",
          center: true,
          offset: 80,
          type: "success",
        });
      });
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

    margin: 0 auto;
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
  }
}
</style>
