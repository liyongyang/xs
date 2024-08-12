<template>
  <div class="msg-wapper relative">
    <div class="text-right mx-4 absolute z-99 top--15 right-0">
      <el-button class="btn-black2 my-2" @click="exportExcel()">
        <span class="mr-2">导出</span>
        <el-icon><Download /></el-icon>
      </el-button>
    </div>
  </div>
  <el-table
    id="tableRef"
    :data="msgList"
    style="width: 100%"
    height="660"
    class="shadow-xl min-w300 wow animate__animated animate__fadeIn"
  >
    <el-table-column prop="company" label="企业名称" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="phone" label="联系电话" />
    <el-table-column prop="email" label="邮箱" />
    <el-table-column prop="createTime" sortable label="申请时间" />
    <el-table-column fixed="right" label="操作" width="120" align="center">
      <template #default="scope">
        <el-button
          link
          type="danger"
          round
          size="small"
          @click.prevent="openDialog(scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    class="modal-comp"
    v-model="showDialog"
    title="Warning"
    width="490"
    align-center
  >
    <div class="text-center">
      <li class="title text-rose-5 mb-8">确认删除此条信息？</li>
      <li>申请ID：{{ actMsg && actMsg.id }}</li>
      <div class="flex justify-around m4">
        <el-button class="btn-white" @click="showDialog = false">
          取消
        </el-button>
        <el-button class="btn-black" @click="commit()"> 确认删除 </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { sys } from "@/api/sys";
import { ElMessage } from "element-plus";
import FileSaver from "file-saver";
import { onMounted, ref } from "vue";
import * as XLSX from "xlsx";

const msgList = ref([]);
const showDialog = ref(false);
const actMsg = ref();

const getMsgList = () => {
  sys.getMsgList({}).subscribe((res) => {
    msgList.value = res.list;
  });
};

const openDialog = (v: any) => {
  console.log(`output->v`, v);
  showDialog.value = true;
  actMsg.value = v;
  // sys.deleteMsg({}).subscribe((res) => {
  //   msgList.value = res.data.list;
  // });
};
const commit = () => {
  showDialog.value = false;
  let id = [actMsg.value.id];
  sys.deleteMsg(id).subscribe((res) => {
    actMsg.value = null;
    ElMessage({
      message: "该条信息已成功删除",
      center: true,
      offset: 80,
      type: "success",
    });
    getMsgList();
  });
};
const exportExcel = () => {
  if (!msgList.value.length) {
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
    for (let index = 0; index < 6; index++) {
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
        "客户申请信息表.xlsx"
      );
    } catch (e) {
      if (typeof console !== "undefined") console.log(e, wbout);
    }
  }
};
onMounted(() => {
  getMsgList();
});
</script>
<style lang="scss" scoped>
.ccc {
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
.btn-black2 {
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
