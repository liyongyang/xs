<template>
  <div class="relative">
    <div class="text-right mx-4 absolute z-99 top--15 right-0">
      <el-button class="btn-black my-2" @click="exportExcel()">
        <span class="mr-2">导出</span>
        <el-icon><Download /></el-icon>
      </el-button>
    </div>
    <el-table
      id="tableRef"
      :data="list"
      style="width: 100%"
      height="660"
      class="shadow-xl min-w300 wow animate__animated animate__fadeIn"
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
      <el-table-column prop="projectScene" label="使用场景" width="160" />
      <el-table-column prop="projectStage" label="项目阶段" width="160" />
      <el-table-column prop="projectNeedNum" label="项目需求量" width="160" />
      <el-table-column prop="suggestProduct" label="推荐产品型号" width="160" />
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
      <el-table-column prop="status" fixed="right" label="报备进度" width="100">
        <template #default="scope">
          {{ fkOpt[scope.row.status] }}
        </template>
      </el-table-column>

      <el-table-column
        prop="remark"
        label="备注"
        width="140"
        :show-overflow-tooltip="true"
      />
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
  </div>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";
import { addDialog } from "@/components/Dialog/index";
import * as popModules from "@/components/Dialog/modulesIdex";
import { ElMessage } from "element-plus";
import FileSaver from "file-saver";
import { onMounted, ref } from "vue";
import * as XLSX from "xlsx";

const list = ref([]);

const fkOpt = {
  1: "审核中",
  2: "审核完成",
  3: "已通过",
  4: "未通过",
};

const getList = () => {
  const params = {
    current: 1,
    size: 10,
  };
  sys.getReportList(params).subscribe((res) => {
    list.value = res.list;
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
      if (config) {
        list.value = [];
        setTimeout(() => {
          getList();
        }, 500);
      }
    },
  });
};
const exportExcel = () => {
  if (!list.value.length) {
    ElMessage({
      message: "当前没有数据可导出",
      center: true,
      offset: 80,
      type: "error",
    });
  } else {
    /* generate workbook object from table */
    const wb = XLSX.utils.table_to_book(document.getElementById("tableRef"));
    /* get binary string as output */
    let columnWidths = [];
    for (let index = 0; index < 19; index++) {
      columnWidths.push({ wch: 20 });
    }
    wb.Sheets[wb.SheetNames[0]]["!cols"] = columnWidths;
    const wbout = XLSX.write(wb, {
      bookType: "xlsx",
      bookSST: true,
      type: "array",
    });
    try {
      FileSaver.saveAs(
        new Blob([wbout], { type: "application/octet-stream" }),
        "客户报备信息表.xlsx"
      );
    } catch (e) {
      if (typeof console !== "undefined") console.log(e, wbout);
    }
  }
};
onMounted(() => {
  getList();
});
</script>
<style lang="scss" scoped>
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
</style>
