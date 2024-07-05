<template>
	<div class="xsForm">
		<el-form ref="ruleFormRef" style="width: 400px" :model="ruleForm" :rules="rules" label-width="left">
			<el-icon class="absolute top-3 right-2 font-600 text-4 text-black cursor-pointer" @click="close()">
				<CloseBold />
			</el-icon>
			<el-form-item prop="name">
				<template #label>
					<div class="">姓名</div>
				</template>
				<el-input v-model="ruleForm.name" />
			</el-form-item>
			<el-form-item prop="company">
				<template #label>
					<div class="">企业姓名</div>
				</template>
				<el-input v-model="ruleForm.company" />
			</el-form-item>
			<el-form-item prop="phone">
				<template #label>
					<div class="">电话</div>
				</template>
				<el-input v-model="ruleForm.phone" />
			</el-form-item>
			<el-form-item prop="email">
				<template #label>
					<div class="">邮箱</div>
				</template>
				<el-input v-model="ruleForm.email" />
			</el-form-item>
			<div class="text-center mt-8 ">
				<el-button class="btn-black" type="primary" @click="submitForm(ruleFormRef)">
					提交
				</el-button>
			</div>
		</el-form>
	</div>
</template>

<script setup lang='ts'>
import type { FormInstance, FormRules } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';

const emit = defineEmits(["close"])

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
	name: '',
	company: '',
	phone: '',
	email: '',
})
interface RuleForm {
	name: string
	phone: number
}

const rules = reactive<FormRules<RuleForm>>({
	name: [
		{ required: true, message: '请填写姓名后提交', trigger: 'blur' },
		{ min: 1, max: 12, message: '请填写正确姓名后提交', trigger: 'blur' },
	],
	phone: [
		{ required: true, message: '请输入手机号', trigger: 'blur' },
		{ min: 8, max: 11, message: '请填写正确手机号后提交', trigger: 'blur' },
	],
})

const close = () => {
	emit("close", ruleForm)
}
const submitForm = async (formEl: FormInstance | undefined) => {
	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			console.log('submit!')
			emit("close", ruleForm)
		} else {
			console.log('error submit!', fields)
		}
	})
}

onMounted(() => { });

</script>
<style lang='scss' scoped>
.xsForm {
	position: relative;
	padding: 20px;

	:deep(.el-form-item) {
		margin: 0 auto;
		display: block;
		text-align: left;
		margin-bottom: 6px;

		.el-form-item__label {
			color: #1d1c23;
			font-size: 14px;
			line-height: 40px;
			margin-bottom: 8px;
		}

		.el-form-item__content {
			width: 100%;
		}
	}
}

.btn-black {
	width: 314px;
	height: auto;
	font-size: 14px;
	line-height: 20px;
	padding: 10px 32px;
	border-radius: 99px;
	color: #fff;
	background-color: #111112;
	border: 1px solid #111112;
}

.btn-white {
	font-size: 14px;
	line-height: 20px;
	color: #1d1c23;
	padding: 10px 32px;
	border-radius: 99px;
	background-color: #fff;
}
</style>