<template>
	<div class="slider-container">
		<img class="hvr-wobble-horizontal cursor-pointer" src="/common/affix-icon1.png" alt="" srcset="">
		<img class="hvr-wobble-horizontal cursor-pointer" src="/common/affix-icon2.png" alt="" srcset="">
		<img @click="toTop()" class="hvr-wobble-horizontal cursor-pointer" src="/common/affix-icon3.png" alt="" srcset="">
	</div>
</template>

<script setup lang='ts'>
import { computed, onMounted, ref, watch } from 'vue';

const A = ref()

const B = computed(() => { A.value * 2; });

watch(A, (Old, New) => { }, { immediate: true, deep: true });

const toTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}
onMounted(() => {
});

</script>
<style lang='scss' scoped>
.slider-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 153px;


	>*:hover {
		border-radius: 100%;
		background-color: #fff;
		transition: background-color 0.5s;
	}
}
</style>