<template>
	<div class="pg-container">
		<section class="banner flex justify-center items-center">
			<div class="text-wrapper text-center flex flex-col items-center">
				<li class="banner-title wow animate__animated animate__fadeInUp">{{ bannerInfo1.title }}</li>
			</div>
		</section>
		<section class="section-wrapper cursor-pointer space-x-2">
			<div class="news-item hover:shadow-lg hvr-bob" v-for=" (items, index) in newsList" :key="index">
				<img class="wow animate__animated animate__fadeInUp" v-if="items.img" :src="items.img" alt="">
				<div>
					<li class="title wow animate__animated animate__fadeInUp">{{ items.title }}</li>
					<li class="tip wow animate__animated animate__fadeInUp" v-for="(item, index) in items.tip" :key="index">{{
						item }}</li>
					<li class="time wow animate__animated animate__fadeInUp">{{ items.time }}</li>
				</div>
				<li class="detail wow animate__animated animate__fadeInUp" @click="goDetail(items.link)">查看详情</li>
			</div>
		</section>
		<el-button class="flex justify-center more btn-white wow animate__animated animate__fadeInUp">查看更多</el-button>
	</div>
</template>

<script setup lang='ts'>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const bannerInfo1 = {
	title: "新闻资讯",
};
const newsList = [
	{
		img: ``,
		title: '「新算科技」获数千万元天使轮融资，由红杉中国种子基金独家投资 | 早起看早期',
		tip: [
			'工业读码与传感器生产商「新算科技」于近日获数千万元天使轮融资，本轮融资投资方为红杉中国种子基金，融资资金将用于工厂建设、产品品控管理及供应链体系建设。「新算科技」成立于2019年，主要专注于图像处理算法的研发与读码产品的设计，面向3C、新能源、汽车、仓储、智能物流、机器人、商超、支付与数字ID等行业，提供通用型DPM工业读码器、高速高性能工业读码器和高性价比读码模组。'
		],
		time: '2022-07-22 08:15',
		link: '/detail/2'
	},
	{
		img: `/aboutUs/news/news-1.png`,
		title: '专注先进工业传感器，「宁波新算」完成Pre-A轮融资｜早起看早期',
		tip: [
			'本轮融资资金将用于投入进一步提升工业读码器等核心产品的量产产能，并加大在先进工业视觉传感器领域的多品类研发。'
		],
		time: '2023-07-10 08:18',
		link: '/detail/2'
	},
	{
		img: '',
		title: 'VSDC Innovators Awards 2024 创新奖揭晓！新算技术获行业权威认可',
		tip: [
			'2024 年 6 月 19 日，深圳——全球知名工业视觉领域权威奖项《视觉系统设计》创新奖 2024 (VSDC Innovators Awards 2024) 隆重揭晓，新算凭借旗舰款 R275-A 紧凑型工业读码器一举获奖。这一荣誉不仅是对新算产品卓越性能的肯定，更是对新算在工业机器视觉领域不断创新、追求卓越的高度认可。'
		],
		time: '2023-07-10 08:18',
		link: '/detail/3'
	}
]
const goDetail = (value) => {
	if (!value) return
	router.push({ path: value });
}
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
		background-image: url("/aboutUs/news.webp");

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
		display: flex;
		width: 1384px;
		padding-top: 128px;
		margin: 0 auto;
		margin-bottom: 64px;
		color: #1d1c23;

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
