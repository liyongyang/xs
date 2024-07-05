<template>
	<div class="my-container">
		<li class="com-name animate__animated animate__fadeInDown">{{ conf.name }}</li>
		<div class="info wow animate__fadeInUp" v-for="(item, index) in conf.msg" :key="index">
			<li class="msg" v-for="(t, idx) in item" :key="idx">{{ t }}</li>
		</div>
		<div class="cards wow animate__fadeInUp">
			<img src="/img/icon-wx1.png" alt="">
			<img src="/img/icon-wx2.png" alt="">
		</div>
	</div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
const conf = {
	name: '璞偌芳德商务咨询有限公司',
	msg: [
		[
			'吴婷婷 | 执行合伙人',
			'座机: +86 21 5470 0562',
			'手机: +86 186 2196 6191',
			'邮箱: tingting.wu@csuite.com.cn',
			'公司网址: www.cs-executive.com',
			'营业执照: 3101120101054'
		],
		[
			'新加坡及亚太区联系方式:',
			'Shane McGowan | 高级总监',
			'座机: +65 6871 4088 | +65 8611 2243',
			'劳务执照: 20S0282',
		]
	]
}

onMounted(() => { });

</script>
<style lang='scss' scoped>
.my-container {
	width: 1312px;
	margin: 0 auto;
	text-align: center;

	.com-name {
		margin-top: 24px;
		font-size: 48px;
		font-weight: 500;
		line-height: 60px;
	}

	.info {
		margin-top: 16px;
		margin-bottom: 32px;

		.msg {
			font-size: 20px;
			line-height: 30px;
		}
	}

	.cards {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 1312px;
		height: 339px;
		background-color: #F9F9F9;

		>* {
			width: 240px;
			height: 240px;
		}
	}
}

@media (max-width: 576px) {
	.my-container {
		width: 358px;
		margin: 0 auto;
		text-align: center;
		transition: all 0.5s;

		.com-name {
			font-size: 20px;
			font-weight: 500;
			line-height: 28px;
		}

		.info {
			margin: 24px 0;

			.msg {
				font-size: 16px;
				line-height: 22px;
			}
		}

		.cards {
			display: block;
			align-items: center;
			justify-content: space-around;
			width: 358px;
			height: auto;
			background-color: #ffffff;

			>* {
				width: 140px;
				height: 140px;
			}
		}
	}
}
</style>
