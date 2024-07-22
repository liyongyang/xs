<template>
  <el-table
    :data="msgList"
    style="width: 100%"
    height="660"
    class="shadow-xl min-w300 wow animate__animated animate__fadeIn"
    :header-row-style="headerRowStyle"
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
    <el-table-column prop="contactName" label="客户对接人姓名" width="160" />
    <el-table-column prop="contactPost" label="客户对接人职位" width="160" />
    <el-table-column prop="contactPhone" label="客户对接人电话" width="160" />
    <el-table-column prop="projectName" label="项目名称" width="160" />
    <el-table-column prop="projectScene" label="项目使用场景" width="160" />
    <el-table-column prop="projectStage" label="项目阶段" width="160" />
    <el-table-column prop="projectNeedNum" label="项目需求量" width="160" />
    <el-table-column
      prop="suggestProduct"
      label="推荐使用产品型号"
      width="160"
    />
    <el-table-column
      prop="needTotal"
      label="公司全年整体需求数量"
      width="170"
    />
    <!-- 报备人信息 -->
    <el-table-column
      prop="createTime"
      sortable
      label="报备时间"
      width="130"
      :show-overflow-tooltip="true"
    />
    <el-table-column prop="reportName" fixed="right" label="姓名" width="120" />
    <el-table-column
      prop="reportCompany"
      fixed="right"
      label="所在公司"
      width="120"
    />
    <el-table-column
      prop="reportPhone"
      fixed="right"
      label="电话"
      width="120"
    />
    <el-table-column prop="status" fixed="right" label="报备进度" width="100">
      <template #default="scope">
        {{ fkOpt[scope.row.status] }}
      </template>
    </el-table-column>

    <el-table-column prop="remark" label="备注" width="100" />
    <el-table-column fixed="right" label="操作" width="140" align="center">
      <template #default="scope">
        <el-button
          link
          type="danger"
          round
          size="small"
          @click.prevent="opendialog('delete', scope.row)"
        >
          删除
        </el-button>
        <el-button
          link
          type="success"
          round
          size="small"
          @click.prevent="opendialog('edit', scope.row)"
        >
          处理
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import { onMounted, ref } from "vue";

const msgList = ref();

const fkOpt = {
  1: "审核中",
  2: "审核完成",
  3: "客户报备已通过",
  4: "客户报备未通过",
};
const headerRowStyle = {
  backgroundColor: "#111113",
  color: "#909399",
  fontWeight: "bold",
};
const getList = () => {
  const params = {
    current: 1,
    size: 10,
  };
  sys.getReportList(params).subscribe((res) => {
    msgList.value = res.data.list;
  });
};

const opendialog = (key: string, config: any) => {
  config.czkey = key;
  addDialog({
    title: "",
    width: key === "edit" ? "680px" : "420px",
    props: { config },
    footer: false,
    component: popModules.FK,
    callBack: (config: any) => {
      //当弹窗任务结束后，调用父页面的回掉函数。（比如	我新增完成了需要刷新列表页面）
      console.log("回调函数", config);
      if (config) {
        getList();
        console.log(`output->config------`, config);
      }
    },
  });
};

onMounted(() => {
  getList();
});
</script>
<style lang="scss" scoped></style>
