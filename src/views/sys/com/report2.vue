<template>
  <el-form
    :label-position="labelPosition"
    label-width="auto"
    :model="formLabelAlign"
    style="max-width: 600px"
  >
    <el-form-item label="公司名称" label-position="top">
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
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            v-if="inputVisible"
            ref="InputRef"
            v-model="inputValue"
            class="w-60"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
          />
          <el-button type="info" plain v-else round @click="showInput"
            >点击添加+
          </el-button>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="Name" label-position="top">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="Activity zone" label-position="top">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
    <el-form-item label="Activity form" label-position="top">
      <el-input v-model="formLabelAlign.type" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import type { FormItemProps, FormProps } from "element-plus";
import { ElInput } from "element-plus";
import { reactive, ref } from "vue";
const labelPosition = ref<FormProps["labelPosition"]>("right");
const itemLabelPosition = ref<FormItemProps["labelPosition"]>("");
const formLabelAlign = reactive({
  name: "",
  region: "",
  type: "",
});
const inputValue = ref("");
const dynamicTags = ref(["A1", "A2", "A3"]);
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
};
</script>
