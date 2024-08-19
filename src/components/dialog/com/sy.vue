<template>
  <div class="xsForm">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="left"
    >
      <el-icon
        class="absolute top-3 right-2 font-600 text-4 text-black cursor-pointer"
        @click="close()"
      >
        <CloseBold />
      </el-icon>
      <el-form-item prop="company">
        <template #label>
          <div class="">{{ t("common.form.t2") }}</div>
        </template>
        <el-input v-model="ruleForm.company" />
      </el-form-item>
      <el-form-item prop="name">
        <template #label>
          <div class="">{{ t("common.form.t1") }}</div>
        </template>
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item prop="zw">
        <template #label>
          <div class="">{{ t("common.form.t5") }}</div>
        </template>
        <el-input v-model="ruleForm.zw" />
      </el-form-item>
      <el-form-item prop="phone">
        <template #label>
          <div class="">{{ t("common.form.t3") }}</div>
        </template>
        <el-input v-model="ruleForm.phone" />
      </el-form-item>
      <!-- <el-form-item prop="email">
        <template #label>
          <div class="">{{ t("common.form.t4") }}</div>
        </template>
        <el-input v-model="ruleForm.email" />
      </el-form-item> -->
      <el-form-item prop="city">
        <template #label>
          <div class="">{{ t("common.form.t6") }}</div>
        </template>
        <el-input v-model="ruleForm.city" />
      </el-form-item>
      <div class="text-center mt-8">
        <el-button
          class="btn-black"
          type="primary"
          @click="submitForm(ruleFormRef)"
        >
          {{ t("common.form.t7") }}
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";

import type { FormInstance, FormRules } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const emit = defineEmits(["close"]);

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  company: "",
  phone: "",
  email: "",
  zw: "",
  city: "",
});
interface RuleForm {
  company: string;
  phone: number;
}

const rules = reactive<FormRules<RuleForm>>({
  company: [
    { required: true, message: "请填写公司信息后提交", trigger: "blur" },
    { min: 1, max: 32, message: "请填写正确公司信息后提交", trigger: "blur" },
  ],
  phone: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    { min: 8, max: 11, message: "请填写正确手机号后提交", trigger: "blur" },
  ],
});

const close = () => {
  emit("close", ruleForm);
};
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      sys.addMsg(ruleForm).subscribe((res) => {});
      emit("close", ruleForm);
    } else {
    }
  });
};

onMounted(() => {});
</script>
<style lang="scss" scoped>
.xsForm {
  position: relative;
  padding: 20px;

  :deep(.el-form-item) {
    margin: 0 auto;
    display: block;
    text-align: left;
    margin-bottom: 6px;

    .el-form-item__label {
      color: #1d1c23;
      font-size: 14px;
      line-height: 40px;
      margin-bottom: 8px;
    }

    .el-form-item__content {
      width: 100%;
    }
  }
}
:deep(.el-button) {
  &:hover {
    color: #fff;
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
    color: #fff;
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
@media (max-width: 576px) {
  .xsForm {
    padding: 0;
  }
  .btn-black {
    width: 228px;
  }
}
</style>
