<script setup lang="ts">
import imgProductSimilar from '@/assets/rs275_product_similar.svg';
import imgProductSimilar2 from '@/assets/rs275_product_similar-2.png';

import SubHeader from '@/components/head/subHeader.vue';
</script>

<template>
	<div class="good-container mx-auto">
		<SubHeader></SubHeader>

		<div class="flex flex-col items-center">
			<h2>相似产品比较</h2>
			<imgProductSimilar></imgProductSimilar>

			<el-image :src="imgProductSimilar2" style="margin-top: 64px;margin-bottom: 64px;width: 1384px" />
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