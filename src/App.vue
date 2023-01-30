<template>
	<div id="app">
		<img v-bind:src="output" width="1000" height="600">
		<tab-menu></tab-menu>
		<router-view />
	</div>
</template>

<script>

import TabMenu from '@/components/TabMenu'

export default {
	name: 'App',
	components: {
		TabMenu
	},
	date() {
		return {
			output: null
		}
	},
	created() {
		this.randomImg()
	},
	methods: {
		randomImg: function () {
			var imgList = [
				require('@/assets/blue_touka.png'),
				require('@/assets/blue_touka_silhouette.png'),
				require('@/assets/purple_touka.png'),
				require('@/assets/purple_touka_silhouette.png')
			];
			var selectnum = Math.floor(Math.random() * imgList.length);
			this.output = imgList[selectnum];
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
