<template>
  <div class="pg-wapper relative">
    <el-divider content-position="left" border-style="dashed"
      >首页产品banner信息</el-divider
    >
    <div class="cards shadow-xl" v-for="(item, index) in oldForm" :key="index">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="型号(中文):">
            <el-input v-model="item.title" />
          </el-form-item>
          <el-form-item label="型号(英文):">
            <el-input v-model="item.engTitle" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="名称(中文):">
            <el-input v-model="item.subtitle" />
          </el-form-item>
          <el-form-item label="名称(英文):">
            <el-input v-model="item.engSubtitle" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="产品图片:">
            <el-upload
              :headers="upload.headers"
              :action="upload.url"
              :data="upload.data"
              :show-file-list="false"
              list-type="picture-card"
              :on-success="uploadSuccess"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <img
                v-if="item.picUrl"
                :src="item.picUrl"
                class="banner"
                @click="updateImg(index)"
              />
              <el-icon v-else><Plus /></el-icon>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="特点(中文):">
            <el-input v-model="item.description" />
          </el-form-item>
          <el-form-item label="特点(英文):">
            <el-input v-model="item.engDescription" />
          </el-form-item>
          <!-- <el-form-item label="是否对外关闭：">
            <el-switch
              v-model="item.deleteFlag"
              size="large"
              inline-prompt
              active-value="1"
              inactive-value="0"
              active-text="是"
              inactive-text="否"
            />
          </el-form-item> -->
          <el-button class="btn-red mt-10" round @click="deleteFn(item)"
            >删除</el-button
          >
          <el-button class="btn-black2 mt-10" round @click="updateFn(item)"
            >更新</el-button
          >
        </el-col>
      </el-row>
    </div>
    <el-form
      ref="ruleFormRef"
      label-position="right"
      label-width="auto"
      :model="newForm"
      class="cards shadow-xl"
      style="text-align: center"
    >
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="型号(中文):">
            <el-input v-model="newForm.title" />
          </el-form-item>
          <el-form-item label="型号(英文):">
            <el-input v-model="newForm.engTitle" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="名称(中文):">
            <el-input v-model="newForm.subtitle" />
          </el-form-item>
          <el-form-item label="名称(英文):">
            <el-input v-model="newForm.engSubtitle" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="产品图片:">
            <el-upload
              :headers="upload.headers"
              :action="upload.url"
              :data="upload.data"
              :show-file-list="false"
              list-type="picture-card"
              :on-success="uploadNewSuccess"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <img
                v-if="newForm.picUrl"
                :src="newForm.picUrl"
                class="banner"
                @click="updateImg(-1)"
              />
              <el-icon v-else><Plus /></el-icon>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="特点(中文):">
            <el-input v-model="newForm.description" />
          </el-form-item>
          <el-form-item label="特点(英文):">
            <el-input v-model="newForm.engDescription" />
          </el-form-item>
          <el-button class="btn-black2 mt-10" round @click="addFn"
            >新发布</el-button
          >
        </el-col>
      </el-row>
    </el-form>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";
import { getToken } from "@/utils/cache/cookies";
import type { ElInput, UploadProps } from "element-plus";
import { onMounted, reactive, ref } from "vue";

const upload = {
  headers: {
    Authorization: "Bearer " + getToken(),
  },
  data: {
    type: "home",
  },
  url: "https://xs-code.com/api/sys-user/upload",
};
const actIndex = ref();
const oldForm = ref([]);
const newForm = reactive({
  title: "",
  engTitle: "",
  subtitle: "",
  engSubtitle: "",
  description: "",
  engDescription: "",
  picUrl: "",
});
const dialogImageUrl = ref("");
const dialogVisible = ref(false);

const getHomeFn = () => {
  sys.getHomeList().subscribe((res) => {
    oldForm.value = res;
  });
};

const deleteFn = (v: any) => {
  const id = [v.id];
  sys.deletHome(id).subscribe((res) => {
    getHomeFn();
  });
};

const updateFn = (v: any) => {
  sys.updateHome({ ...v }).subscribe((res) => {
    getHomeFn();
  });
};
const addFn = () => {
  sys.addHome(newForm).subscribe((res) => {
    newForm.title = "";
    newForm.engTitle = "";
    newForm.subtitle = "";
    newForm.engSubtitle = "";
    newForm.description = "";
    newForm.engDescription = "";
    newForm.picUrl = "";
    getHomeFn();
  });
};
const updateImg = (i) => {
  actIndex.value = i;
  console.log(`output->iiiiiii`, i);
};
const uploadSuccess = (res: any) => {
  console.log(`------->`, actIndex.value);
  if (actIndex.value !== -1) {
    oldForm.value[actIndex.value].picUrl = res.data;
  } else {
    newForm.picUrl = res.data;
  }
};
const uploadNewSuccess = (res: any) => {
  newForm.picUrl = res.data;
};
const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log(`output->`, uploadFile);
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

onMounted(() => {
  getHomeFn();
});
</script>
<style lang="scss" scoped>
.pg-wapper {
  min-width: 1280px;
  :deep(.el-upload--picture-card) {
    width: 400px;
    height: 225px;
  }
  .banner {
    width: 400px;
    height: 225px;
  }
  .cards {
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 24px;
    border: #c2c2c2 1px solid;
    .card {
      .card-item-t {
        position: relative;
        width: 380px;
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
      height: 20px;
      line-height: 20px;
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
.btn-red {
  width: 314px;
  height: auto;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 32px;
  border-radius: 99px;
  color: #fff;
  background-color: #e35a8c;
  border: 1px solid #e35a8c;
  &:hover {
    color: #fff;
    background-color: #f27ea8;
    border: 1px solid #f27ea8;
  }
}
</style>
