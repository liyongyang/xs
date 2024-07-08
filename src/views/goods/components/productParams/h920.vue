<script setup lang="ts">
import imgProductParams from '@/assets/productParams/h920_product_prams.svg';
import imgProductDetail from '@/assets/productParams/h920_product_details.png';

import SubHeader from '@/components/head/subHeader.vue';
</script>

<template>
	<div class="good-container mx-auto">
		<SubHeader></SubHeader>

		<div class="flex flex-col items-center">
			<h2>产品参数</h2>
			<imgProductParams></imgProductParams>

			<h2>尺寸规格 & 线缆</h2>
			<el-image :src="imgProductDetail" style="margin-bottom: 64px;width: 1384px" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.good-container {
	width: 100vw;
	margin-top: 89px;

	.header {
		background-color: #F4F4F4;
		text-align: center;

		.head {
			max-width: 1512px;
			padding: 16px 64px;
			align-items: center;

			.good-name {
				color: #1D1C23;
				font-size: 24px;
				font-style: normal;
				font-weight: 600;
				line-height: 32px;
			}
		}
	}
}

.btn-black {
	height: auto;
	font-size: 14px;
	line-height: 20px;
	border-radius: 99px;
	color: #fff;
	background-color: #000;
	border: 1px solid #fefefe;
}

h2, h4 {
	color: #1D1C23;
}

h2 {
	font-size: 48px;
	font-weight: 500;
	margin-top: 128px;
	text-align: center;
	margin-bottom: 64px;
}

h4 {
	font-size: 16px;
	font-weight: 600;
}

.text {
	color: rgba(29, 28, 35, 0.8);
}
</style>