<template>
	<div>
		<component :is="Component" class="" />
	</div>
</template>

<script setup lang='ts'>
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import * as cps from './config';

const route = useRoute();
const Component = ref();

onMounted(() => {
	Component.value = cps[route.params.goodType];
});

</script>
<style lang='scss' scoped></style>