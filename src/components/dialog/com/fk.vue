<template>
  <div class="fk-wrapper">
    <el-icon
      class="absolute top-0 right-0 font-600 text-4 text-black cursor-pointer"
      @click="close()"
    >
      <CloseBold />
    </el-icon>
    <div v-if="props.config.czkey === 'edit'" class="text-center">
      <div class="title wow animate__animated animate__fadeInUp text-emerald-5">
        请选择该报备单的反馈情况
      </div>
      <div class="flex justify-around">
        <li
          class="cursor-pointer p4 rounded hvr-bob text-neutral"
          :class="
            actFk === item.key ? ['bg-emerald-5', 'text-white'] : 'bg-neutral-1'
          "
          v-for="item in fkOpt"
          :key="item.key"
          @click="actFk = item.key"
        >
          {{ item.label }}
        </li>
      </div>
      <el-button type="primary" class="commit btn-black" @click="commit()"
        >确定</el-button
      >
    </div>
    <div v-else class="text-center">
      <li class="title text-rose-5 mb-8">确认删除此条报备信息？</li>
      <li>报备ID：{{ props.config.id }}</li>
      <div class="flex justify-around m4">
        <el-button class="btn-white" type="primary" @click="commit()">
          取消
        </el-button>
        <el-button class="btn-black" type="danger" @click="commit()">
          确认删除
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";
import { ElMessage } from "element-plus";
import { onMounted, ref } from "vue";

const props = defineProps({
  config: {
    default: null,
    type: Object,
  },
});

const emit = defineEmits(["close"]);

const fk = ref();
const actFk = ref();
const fkOpt = [
  {
    key: 1,
    label: "审核中",
  },
  {
    key: 2,
    label: "审核完成",
  },
  {
    key: 3,
    label: "客户报备已通过",
  },
  {
    key: 4,
    label: "客户报备未通过",
  },
];
const close = () => {
  emit("close", null);
};

const commit = async () => {
  console.log(`output->----------`);
  switch (props.config.czkey) {
    case "edit":
      const params = {
        id: props.config.id,
        status: actFk.value,
      };
      sys.editReport(params).subscribe((res) => {
        ElMessage({
          message: "该条报备已成功反馈",
          center: true,
          offset: 80,
          type: "success",
        });
      });
      break;
    case "delete":
      let id = [props.config.id];
      sys.deletReport(id).subscribe((res) => {
        ElMessage({
          message: "该条报备已成功删除",
          center: true,
          offset: 80,
          type: "success",
        });
        emit("close", props.config);
      });

      break;

    default:
      break;
  }
  emit("close", props.config);
};

onMounted(() => {
  fk.value = props.config || null;
});
</script>
<style lang="scss" scoped>
.fk-wrapper {
  position: relative;
  height: 100%;
  padding: 32px 0;
  .title {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 24px;
  }
  .commit {
    margin-top: 32px;
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
</style>
