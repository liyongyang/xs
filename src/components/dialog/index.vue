<template>
  <el-dialog :align-center="true" v-for="(item, index) in dialogList" :key="index" :title="item.title"
    :width="item.width" v-model="item.visible" @close="() => closeDialog(item, index, '', true)" class="modal-comp ">
    <template #header>
      <span>{{ item.title }} </span>
    </template>
    <component :is="item.component" v-bind="item.props" @close="(...args: any) => closeDialog(item, index, args)" />
    <template v-if="item.footer" #footer>
      <span class="dialog-footer"></span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { closeDialog, dialogList } from "./index";
</script>import { closeDialog, dialogList } from "./index";
