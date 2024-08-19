<template>
  <div>
    <component :is="Component" class="" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import * as goods from "./case.ts";

const route = useRoute();
const Component = ref();

onMounted(() => {
  Component.value = goods[route.params.case];
});
</script>
<style lang="scss" scoped></style>
