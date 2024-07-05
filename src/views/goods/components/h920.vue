<template>
	<div class="good-container mx-auto">
		<div class="header wow animate__animated animate__fadeInDown">
			<div class="head flex justify-between items-center mx-auto">
				<li class="good-name">H920 有线款高性能读码器</li>
				<div class="flex justify-between items-center">
					<li class="py-2 px-3 mr-4 cursor-pointer">产品参数</li>
					<li class="py-2 px-3 mr-4 cursor-pointer">下载</li>
					<li class="py-2 px-3 mr-4 cursor-pointer">常见问题</li>
					<li class="btn-black py-2.5 px-4 cursor-pointer">联系我们</li>
				</div>
			</div>
		</div>
		<section class="good-wrapper mx-auto">
			<div class="content">
				<li class="flex items-center py-2 px-3 cursor-pointer wow animate__animated animate__fadeInUp">
					<el-icon>
						<ArrowLeftBold />
					</el-icon>
					<span class="text-3.5 px-3" @click="goBack()">返回</span>
				</li>
				<div class="flex flex-wrap justify-between">
					<div class="banner-info flex flex-col justify-between">
						<div>
							<li class="title wow animate__animated animate__fadeInUp">H920 有线款高性能读码器</li>
							<div class="flex flex-wrap wow animate__animated animate__fadeInUp">
								<li class=" text-3.5 leading-5 m1 px-2 rounded-xl bg-gray-200" v-for="i in 3" :key="i">H930
								</li>
							</div>
							<li class="leading-10 wow animate__animated animate__fadeInUp">强大稳定解码力气 · 同轴瞄准 · 训练功能</li>
							<li class="mt-3 wow animate__animated animate__fadeInUp">
								产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产品介绍-待补充产
							</li>
						</div>
						<el-button class="btn-black more wow animate__animated animate__fadeInUp">样机试用/演示</el-button>
					</div>
					<div class="banner-img flex flex-col justify-between">
						<el-carousel class="text-center wow animate__animated animate__fadeInUp" height="360px">
							<el-carousel-item v-for="(item, index) in 4" :key="index">
								<img class="h80 w-auto mx-auto text-center" :src="`/h920/slider/slider${index}.webp`" alt="">
							</el-carousel-item>
						</el-carousel>
						<div class="overflow-x-scroll overflow-y-hidden wow animate__animated animate__fadeInUp">
							<div class="img-box flex flex">
								<div class="img-item  w30 flex-initial text-center" v-for="(item, index) in 4" :key="item">
									<img class="h18" :src="`/h920/slider/slider${index}.webp`" alt="" srcset="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="good-wrapper mx-auto">
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item name="1">
					<template #title>
						<li class="info-title wow animate__animated animate__fadeInUp">
							强大稳定的解码力
						</li>
					</template>
					<div class="info-txt w172 text-wrap wow animate__animated animate__fadeInUp">
						<li>专为手持读码场景设计的算法引擎 Mobi × 均匀光技术</li>
						<li>
							轻松应对各种难读码
						</li>
					</div>
					<el-carousel :interval="3000" :autoplay="false" class="carousel-imgs" height="448px">
						<el-carousel-item v-for="(items, index) in slider1" :key="index">
							<div class="card jm-card wow animate__animated animate__fadeInUp" v-for="(item, i) in items" :key="i">
								<img class="jm-img" :src="item.img" alt="" />
								<div class="msg">
									<li class="title">{{ item.title }}</li>
								</div>
							</div>
						</el-carousel-item>
					</el-carousel>
				</el-collapse-item>
				<el-collapse-item name="2">
					<template #title>
						<li class="info-title wow animate__animated animate__fadeInUp">
							同轴瞄准
						</li>
					</template>
					<div class="info-txt w172 text-wrap wow animate__animated animate__fadeInUp">
						<li>旗舰级瞄准性能</li>
						<li>
							全面改善传统手持式读码器瞄准偏移现象，不用再担心漏扫情况
						</li>
					</div>
					<div class="flex justify-between">
						<div class="card wow animate__animated animate__fadeInUp" v-for="(item, i) in slider2" :key="i">
							<img class="img" :src="item.img" alt="" />
							<div class="msg">
								<li class="txt">{{ item.info }}</li>
							</div>
						</div>
					</div>
				</el-collapse-item>
				<el-collapse-item name="3">
					<template #title>
						<li class="info-title wow animate__animated animate__fadeInUp">训练功能</li>
					</template>
					<div class="info-txt w172 text-wrap wow animate__animated animate__fadeInUp">
						<li>新算专有训练功能，极大提升效率，带来极致流畅度</li>
						<li>
							训练需要待读取的 1D/2D 码，提升解码景深、解码速度和解码率，待训练完成后，同类码的读取 即可达到瞬时读取
						</li>
					</div>
					<div class="card wow animate__animated animate__fadeInUp">
						<img class="img" src="/h920/xl0.webp" alt="" />
						<div class="msg">
							<li class="txt">紧凑型一体化设计</li>
						</div>
					</div>
				</el-collapse-item>
				<el-collapse-item name="4">
					<template #title>
						<li class="info-title wow animate__animated animate__fadeInUp">专利算法</li>
					</template>
					<div class="card wow animate__animated animate__fadeInUp">
						<img class="img" src="/h920/zlsf.webp" alt="" />
						<div class="msg">
							<li class="txt">超高性价比集成专利算法，具备通用解码性能</li>
						</div>
					</div>
				</el-collapse-item>
				<el-collapse-item name="5">
					<template #title>
						<li class="info-title wow animate__animated animate__fadeInUp">型号对比</li>
					</template>
					<tableSvg></tableSvg>
				</el-collapse-item>
				<el-collapse-item name="6">
					<template #title>
						<li class="info-title wow animate__animated animate__fadeInUp">典型应用</li>
					</template>
					<div class="flex justify-between">
						<div class="card wow animate__animated animate__fadeInUp" v-for="(item, i) in slider3" :key="i">
							<img class="img" :src="item.img" alt="" />
							<div class="msg">
								<li class="title">{{ item.title }}</li>
							</div>
						</div>
					</div>
				</el-collapse-item>
			</el-collapse>

		</section>
	</div>
</template>

<script setup lang='ts'>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

import tableSvg from '@/assets/h920_table.svg';
const activeNames = ref([])
const slider1 = [
	[{
		img: `/h920/jm0.webp`,
		title: '自动检测读码类型',
	},
	{
		img: `/h920/jm1.webp`,
		title: '自动检测读码类型',
	},
	{
		img: `/h920/jm2.webp`,
		title: '自动检测读码类型',
	}],
	[
		{
			img: `/h920/jm3.webp`,
			title: '自动检测读码类型',
		},
		{
			img: `/h920/jm4.webp`,
			title: '自动检测读码类型',
		},
		{
			img: `/h920/jm5.webp`,
			title: '自动检测读码类型',
		},
	]
]
const slider2 = [
	{
		img: `/h920/mz0.webp`,
		info: 'H920 指哪读哪，所见即所扫'
	},
	{
		img: `/h920/mz1.webp`,
		info: '传统读码器瞄准偏移，需重复扫描'
	},
]
const slider3 = [
	{
		img: `/h920/yy0.webp`,
		title: '汽车制造1'
	},
	{
		img: `/h920/yy1.webp`,
		title: '汽车制造2'
	}
]
const A = ref()

const B = computed(() => { A.value * 2; });

watch(A, (Old, New) => { console.log('old,New', Old, New) }, { immediate: true, deep: true });

const goBack = () => {
	router.push({ path: '/goods', query: { type: 'H' } })
}

const handleChange = (val: string[]) => {
	console.log(val)
}

onMounted(() => { });

</script>
<style lang='scss' scoped>
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
		}

		.good-name {
			color: #1D1C23;
			font-size: 24px;
			font-style: normal;
			font-weight: 600;
			line-height: 32px;
		}
	}

	.good-wrapper {
		max-width: 1512px;
		padding: 0 64px;

		.content {
			padding: 32px 0;

			.title {
				color: #1D1C23;
				font-size: 48px;
				font-weight: 500;
				line-height: normal;
			}

			.banner-info {
				width: 650px;
				height: 440px;
				text-wrap: wrap;
				padding: 32px 0;
				padding-top: 0;
				border-bottom: #DFE1E2 solid 1px;

				.more {
					width: 212px;
					padding: 10 32px;
				}
			}

			.banner-img {
				width: 674px;
				height: 440px;

				.img-box {

					.img-item {
						border: #dfe1e200 solid 1px;

						img {
							border: #dfe1e200 solid 1px;
						}
					}

					:hover {
						border: #DFE1E2 solid 1px;

						img {
							transform: scale(1.2);
							transition: all 0.3s ease-in-out;
							border: #dfe1e200 solid 1px;
						}
					}
				}
			}
		}

		.info-title {
			height: 44px;
			font-size: 32px;
			font-weight: 500;
			line-height: 44px;
		}

		.info-txt {
			font-size: 20px;
			font-weight: 400;
			line-height: 28px;
			margin-bottom: 32px;
		}

		:deep(.el-carousel) {
			width: 100%;
		}

		:deep(.el-carousel__item) {
			display: flex;
			justify-content: space-between;
			overflow-x: scroll;
		}

		.card {
			flex: 0 0 auto;
			width: 660px;
			cursor: pointer;
			word-wrap: break-word;
			white-space: pre-wrap;
			transition: all 0.5s;
			overflow-y: hidden;

			.img {
				width: 660px;
			}

			.jm-img {
				width: 360px;
			}

			.msg {
				margin: 32px 16px;

				.title {
					font-size: 24px;
					font-style: normal;
					font-weight: 600;
					line-height: 32px;
				}

				.txt {
					font-size: 20px;
					font-style: normal;
					font-weight: 400;
					line-height: 28px;
				}
			}
		}


		.jm-card {
			width: 360px;
		}
	}
}

.btn-white {
	font-size: 14px;
	line-height: 20px;
	color: #1d1c23;
	padding: 10px 32px;
	border-radius: 99px;
	background-color: #fff;
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

:deep(.el-collapse-item) {}

:deep(.el-collapse-item__header) {
	height: 108px;
	padding: 32px 0;
}
</style>