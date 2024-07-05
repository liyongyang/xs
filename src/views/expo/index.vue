<template>
	<div class="pg-container">
		<section class="banner flex justify-center items-center">
			<div class="text-wrapper text-center flex flex-col items-center">
				<li class="banner-title wow animate__animated animate__fadeInUp">{{ bannerInfo1.title }}</li>
			</div>
		</section>
		<section class="section-wrapper">
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item v-for="(items, index) in list" :key="index" :name="index">
					<template #title>
						<div class="head w-full wow animate__animated animate__fadeInUp">
							<li class="flex justify-between">
								<span class="title">{{ items.head.title }}</span>
								<span>{{ items.head.time }}</span>
							</li>
							<div class="flex justify-start space-x-40">
								<li>场馆:
									<span class="font-500">{{ items.head.adress }}</span>
								</li>
								<li>展位:
									<span class="font-600">{{ items.head.loc }}</span>
								</li>
								<span>展品:
									<span class="font-600">{{ items.head.tip }}</span>
								</span>
							</div>
						</div>
					</template>
					<div class="flex cursor-pointer space-x-2">
						<div class="news-item hover:shadow-lg hvr-bob" v-for=" (card, index) in items.cards" :key="index">
							<img class="wow animate__animated animate__fadeInUp" v-if="card.img" :src="card.img" alt="">
							<div>
								<li class="title wow animate__animated animate__fadeInUp">{{ card.title }}</li>
								<li class="tip wow animate__animated animate__fadeInUp" v-for="(t, index) in card.tip" :key="index">{{ t
									}}</li>
								<li class="time wow animate__animated animate__fadeInUp">{{ card.time }}</li>
							</div>
							<li class="detail wow animate__animated animate__fadeInUp">查看详情</li>
						</div>
					</div>
				</el-collapse-item>
			</el-collapse>
		</section>
		<el-button class="flex justify-center more btn-white wow animate__animated animate__fadeInUp">查看更多</el-button>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from "vue";

const activeNames = ref([0])

const bannerInfo1 = {
	title: "展会动态",
};
const list = [
	{
		head: {
			title: 'WAIC上海人工智能大会',
			time: '2024-04-025',
			adress: '上海国家展览中心',
			loc: 'C-BTE 078',
			tip: 'R275-A、R275-A、R170-A、R170-A、RS 300'
		},
		cards: [
			{
				img: `/aboutUs/news/news-0.png`,
				title: '专注先进工业传感器，「宁波新算」完成Pre-A轮融资｜早起看早期',
				tip: [
					'本轮融资资金将用于投入进一步提升工业读码器等核心产品的量产产能，并加大在先进工业视觉传感器领域的多品类研发。'
				],
				time: '2023-07-10 08:18'
			},
			{
				img: '',
				title: '专注先进工业传感器，「宁波新算」完成Pre-A轮融资｜早起看早期',
				tip: [
					'本轮融资资金将用于投入进一步提升工业读码器等核心产品的量产产能，并加大在先进工业视觉传感器领域的多品类研发。',
					'「新算科技」成立于2019年，主要专注于图像处理算法的研发与读码产品的设计，面向3C、新能源、汽车、仓储、高速高性能工业读码器和高性价比读码模组。'
				],
				time: '2023-07-10 08:18'
			}
		]
	}
]
onMounted(() => { });
</script>
<style lang='scss' scoped>
.pg-container {
	color: #fff;
	position: relative;
	width: 100vw;
	height: 100%;
	overflow-x: hidden;
	padding-top: 89px;
	line-height: normal;

	.banner {
		width: 100vw;
		height: 480px;
		background-size: cover;
		background-position: center center;
		background-attachment: fixed;
		background-image: url("/aboutUs/expo.webp");

		&::before {
			content: "";
			position: absolute;
			width: 100vw;
			height: 480px;
			background: #0000005a;
		}

		.text-wrapper {
			width: 1000px;
			text-wrap: wrap;
			z-index: 9;

			.banner-title {
				font-size: 56px;
				font-weight: 600;
				line-height: 78.4px;
				letter-spacing: 0.08em;
				margin-bottom: 24px;
			}

			.banner-msg {
				font-size: 20px;
				font-weight: 400;
				line-height: 28px;
			}
		}
	}

	.section-wrapper {
		width: 1384px;
		padding-top: 128px;
		margin: 0 auto;
		margin-bottom: 64px;

		.head {
			color: #1D1C23CC;

			.title {
				color: #1D1C23;
				font-size: 16px;
				font-weight: 600;
				line-height: 22px;

			}
		}

		.news-item {
			display: flex;
			text-wrap: wrap;
			width: 450px;
			height: 600px;
			padding: 24px 16px;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			background-color: #F4F4F4;
			transition: all 0.5s;

			.title {
				font-size: 28px;
				font-weight: 600;
			}

			.detail {
				&:hover {
					font-weight: 500;
				}
			}

			.time {
				color: #1D1C2399;
				font-size: 16px;
				font-weight: 400;
				line-height: 22px;
				margin-top: 24px;
			}
		}

		:deep(.el-collapse-item__header) {
			padding: 12px 0;
			height: auto;
		}
	}

	.more {
		margin: 0 auto;
		margin-bottom: 128px;
	}

	.btn-white {
		font-size: 14px;
		line-height: 20px;
		color: #1d1c23;
		padding: 10px 32px;
		border-radius: 99px;
		background-color: #fff;
	}
}
</style>