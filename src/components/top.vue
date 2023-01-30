<template>
	<div class="top">
		<p> {{ text }} </p>
	</div>
</template>

<script>
export default {
	name: 'topPage',
	data() {
		return {
			text: 'GHOST TOWN XXXXX'
		}
	}
}
</script>

<style scoped>
.top {
	text-align: center;
	display: inline-block;
}
</style>
