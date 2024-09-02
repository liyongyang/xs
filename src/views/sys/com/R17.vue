<template>
  <div class="pg-wapper relative">
    <el-divider content-position="center" border-style="dashed"
      >产品信息</el-divider
    >
    <el-form
      v-if="productPublicity"
      ref="ruleFormRef"
      label-position="right"
      label-width="auto"
      :model="productPublicity"
      class="mb-12"
      style="max-width: 1380px; text-align: center"
    >
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="产品名称(中文)：" label-position="top">
            <el-input v-model="productPublicity.name" />
          </el-form-item>
          <el-form-item label="产品名称(英文)：" label-position="top">
            <el-input v-model="productPublicity.engName" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="描述(中文):" label-position="top">
            <el-input v-model="productPublicity.description" />
          </el-form-item>
          <el-form-item label="描述(英文)：" label-position="top">
            <el-input v-model="productPublicity.engDescription" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="产品类型：" label-position="top">
            <div class="overflow-x-scroll">
              <div class="flex flex-wrap gap-2">
                <el-tag
                  v-for="tag in productPublicity.tags"
                  :key="tag"
                  closable
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
        <el-col :span="24">
          <el-form-item label="产品图片:" label-position="top">
            <el-upload
              v-model:file-list="productPicList"
              :action="upload.url"
              :data="upload.data"
              list-type="picture-card"
              :on-success="uploadSuccess"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-divider content-position="center" border-style="dashed"
      >产品卡片信息</el-divider
    >
    <div v-if="subProductList">
      <div
        class="cards relative"
        v-for="(items, index) in subProductList"
        :key="index"
      >
        <el-icon
          class="absolute right-4 top-4 z-99 text-8 cursor-pointer text-rose-5 hover:text-rose-6"
          @click="deleteCard(index)"
          ><DeleteFilled
        /></el-icon>
        <el-row :gutter="16">
          <el-col :span="10">
            <el-form-item label="title(中文):">
              <el-input v-model="items.tSubProduct.title" />
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="title(英文):">
              <el-input v-model="items.tSubProduct.engTitle" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="16">
          <el-col :span="10">
            <el-form-item label="tip(中文):">
              <el-input type="textarea" v-model="items.tSubProduct.subtitle" />
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="tip(英文):">
              <el-input
                type="textarea"
                v-model="items.tSubProduct.engSubtitle"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <div
          v-if="items.subLabelList"
          class="card flex space-x-2 overflow-x-scroll"
        >
          <div
            class="card-item-t"
            v-for="(t, i) in items.subLabelList"
            :key="i"
          >
            <el-form-item label="">
              <el-upload
                class="avatar-uploader"
                :headers="upload.headers"
                :action="upload.url"
                :data="upload.data"
                :show-file-list="false"
                :on-success="
                  (response, file, fileList) => {
                    return handleAvatarSuccess(response, file, fileList, [
                      index,
                      i,
                    ]);
                  }
                "
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="t.picUrl" :src="t.picUrl" class="avatar mx-auto" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </el-form-item>
            <el-form-item label="标题(中文):">
              <el-input type="textarea" :rows="4" v-model="t.label" />
            </el-form-item>
            <el-form-item label="标题(英文):">
              <el-input type="textarea" :rows="4" v-model="t.engLabel" />
            </el-form-item>
            <el-form-item label="描述(英文):">
              <el-input
                type="textarea"
                :rows="4"
                v-model="t.labelDescription"
              />
            </el-form-item>
            <el-form-item label="描述(英文):">
              <el-input
                type="textarea"
                :rows="4"
                v-model="t.engLabelDescription"
              />
            </el-form-item>
            <el-icon
              @click="deleteSubCard(index, i)"
              class="text-6 cursor-pointer text-rose-5 hover:text-rose-6"
              ><DeleteFilled
            /></el-icon>
          </div>
          <div
            class="add-btn flex justify-center items-center cursor-pointer"
            @click="addSubCard(index)"
          >
            <el-icon class="text-10"><Plus /></el-icon>
          </div>
        </div>
      </div>
      <div
        class="btn-black py-2 text-6 flex justify-center items-center cursor-pointer"
        @click="addCard"
      >
        <el-icon class="text-6"><Plus /></el-icon>
        新增产品卡片信息
      </div>
    </div>
    <div>
      <el-button class="btn-black2 mt-12" round @click="editgd">提交</el-button>
    </div>
  </div>
  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script setup lang="ts">
import { gd } from "@/api/gd";

import { getToken } from "@/utils/cache/cookies";
import { Plus } from "@element-plus/icons-vue";
import type { ElInput, UploadProps } from "element-plus";
import { nextTick, onMounted, ref } from "vue";
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const inputValue = ref("");
const dynamicTags = ref(["R17X-M6", "R17X-M12", "R17X-M16"]);
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof ElInput>>();

const upload = {
  headers: {
    Authorization: "Bearer " + getToken(),
  },
  data: {
    type: "R17X",
  },
  url: "https://xs-code.com/api/sys-user/upload",
};

const eg = {
  tSubProduct: {
    title: "",
    engTitle: "",
    subtitle: "",
    engSubtitle: "",
  },
  subLabelList: [
    {
      label: "",
      engLabel: "",
      labelDescription: "",
      engLabelDescription: "",
      picUrl: "",
    },
  ],
};

const productPublicity = ref();
const productPicList = ref([]);
const subProductList = ref();
const getList = () => {
  const params = {
    bigType: "R17X",
    productType: "R170-E/S",
  };
  gd.getgd(params).subscribe((res) => {
    let tags = res.productPublicity.typeLable
      ? res.productPublicity.typeLable.split(",")
      : [];
    productPublicity.value = { ...res.productPublicity, tags };
    productPicList.value = res.productPicList.map((l) => {
      return {
        name: "image-" + l.id,
        url: l.picUrl,
      };
    });
    subProductList.value = res.subProductList;
    console.log(`output->config.value`, subProductList.value[0].subLabelList);
  });
};
const editgd = () => {
  productPublicity.value.typeLable = productPublicity.value.tags.join(",");
  const params = {
    productPublicity: productPublicity.value,
    productPicList: productPicList.value.map((l) => {
      return {
        picUrl: l.url,
      };
    }),
    subProductList: subProductList.value,
  };
  gd.editgd(params).subscribe((res) => {
    getList();
  });
};
const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};
const handleClose = (tag: string) => {
  productPublicity.value.tags.splice(dynamicTags.value.indexOf(tag), 1);
};
const handleInputConfirm = () => {
  if (inputValue.value) {
    productPublicity.value.tags.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = "";
};

/**
 *add img
 **/
const uploadSuccess = (res: any) => {
  productPicList.value[productPicList.value.length - 1] = {
    name: "xx",
    url: res.data,
  };
  console.log(`output->`, res, productPicList.value);
};
const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log("uploadFile=====", uploadFile);
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};
/**
 *add card
 **/
const addCard = () => {
  subProductList.value.push(eg);
  console.log(`output->subProductList.value`, subProductList.value);
};
const addSubCard = (index) => {
  subProductList.value[index].subLabelList.push(eg.subLabelList[0]);
};
const deleteCard = (i: number) => {
  subProductList.value = subProductList.value.filter((l, index) => index !== i);
};
const deleteSubCard = (index: number, i: number) => {
  subProductList.value[index].subLabelList = subProductList.value[
    index
  ].subLabelList.filter((l, k) => k !== i);
  console.log(`output->temp`, subProductList.value);
};
const handleAvatarSuccess = (res, file, fileList, k) => {
  subProductList.value[k[0]].subLabelList[k[1]].picUrl = res.data;
  console.log(`output->res`, res, k);
};

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  // if (rawFile.type !== "image/jpeg") {
  //   ElMessage.error("Avatar picture must be JPG format!");
  //   return false;
  // } else if (rawFile.size / 1024 / 1024 > 2) {
  //   ElMessage.error("Avatar picture size can not exceed 2MB!");
  //   return false;
  // }
  return true;
};
onMounted(() => {
  getList();
});
</script>
<style lang="scss" scoped>
.pg-wapper {
  min-width: 1280px;
  .cards {
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 24px;
    border: #1d1c23 1px solid;
    .card {
      .card-item-t {
        position: relative;
        width: 400px;
        padding: 8px;
        border-radius: 8px;
        border: #8c939d 1px solid;
        .avatar {
          width: auto;
          height: 180px;
        }
      }
      .add-btn {
        width: 380px;
        height: 416px;
        padding: 8px;
        border-radius: 8px;
        border: #8c939d 1px dashed;
      }
    }
  }
  :deep(.avatar-uploader) {
    height: 180px;
    .el-upload {
      border: 1px dashed #8c939d;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }

    .avatar-uploader .el-upload:hover {
      border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 360px;
      height: 180px;
      text-align: center;
    }
  }
  :deep(.el-form-item) {
    min-width: 360px;
    display: flex !important;
    align-items: center !important;
    text-align: left;
    margin-bottom: 12px !important;

    .el-form-item__label {
      color: #1d1c23;
      font-size: 14px;
      // line-height: 20px;
      margin-bottom: 12px;
    }

    .el-form-item__content {
      width: 100%;
    }
    .el-input__wrapper {
      font-size: 14px !important;
      height: 32px !important;
      line-height: 32px !important;
      font-weight: 400;
    }
    .el-input__inner {
      text-align: left !important;
      padding: 0 4px !important;
    }
    .el-input .el-input__icon {
      font-size: 18px;
    }
  }
  /* 自定义整个滚动条 */
  ::-webkit-scrollbar {
    display: block !important;
    height: 12px;
    background-color: #ffffff00;
  }

  /* 自定义滚动条轨道 */
  ::-webkit-scrollbar-track {
    background: rgb(241, 245, 249); /* 设置轨道的背景颜色 */
  }

  /* 自定义滚动条的滑块（thumb） */
  ::-webkit-scrollbar-thumb {
    background: #000000; /* 设置滑块的背景颜色 */
  }

  /* 当滑块悬停或活动时，可以添加更多样式 */
  ::-webkit-scrollbar-thumb:hover {
    background: #000000; /* 设置滑块在悬停状态下的背景颜色 */
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
.btn-black {
  height: auto;
  font-size: 14px;
  line-height: 20px;
  padding: 12px 24px;
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
  padding: 12px 32px;
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
</style>
