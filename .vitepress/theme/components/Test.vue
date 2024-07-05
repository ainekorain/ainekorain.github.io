<script setup lang="ts">
const welcome = ref('Hello World')
import obj from '@/components/test'
console.log(obj.name)
</script>

<template>
	<main>
		<h1>{{ welcome }}</h1>
	</main>
</template>

<style scoped>
h1 {
	color: red;
}
</style>
