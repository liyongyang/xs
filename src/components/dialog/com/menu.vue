<template>
  <div class="pg-cnotainer"></div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";

const A = ref();

const B = computed(() => {
  A.value * 2;
});

watch(
  A,
  (Old, New) => {
    console.log("old,New", Old, New);
  },
  { immediate: true, deep: true }
);

onMounted(() => {});
</script>
<style lang="scss" scoped></style>
