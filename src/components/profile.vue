<template>
	<div class="profile">
		<div class="main-title">{{ mainTitle }}</div>
		<div class="content" v-for="pContent in mainInfo.primaryContentList" :key="pContent.primaryContentTitle">
			<div class="primary-title">{{ pContent.primaryContentTitle }}</div>
			<div class="qa">{{ pContent.showContent }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'profilePage',
	data() {
		return {
			mainTitle: 'my date',
			mainInfo: {
				primaryContentList: [
					{
						primaryContentTitle: 'base',
						secondaryContentList: [
							'nana shirogane',
							'from osaka',
							'live in fukuoka'
						],
						showContent: null
					},
					{
						primaryContentTitle: 'like',
						secondaryContentList: [
							'disney',
							'youtube',
							'nijisanji',
							'haikyu!!',
							'music',
							'game'
						],
						showContent: null
					},
					{
						primaryContentTitle: 'hobbies',
						secondaryContentList: [
							'travel',
							'game(pokemon, splatoon)',
							'eating',
							'painting',
							'karaoke'
						],
						showContent: null
					},
				]
			}
		}
	},
	beforeMount() {
		this.combinationStr()
	},
	methods: {
		combinationStr: function () {
			var mainInfo = this.mainInfo;
			var pList = mainInfo.primaryContentList;

			pList.forEach(function(p) {
				var sList = p.secondaryContentList;
				p.showContent = sList.join(' // ');
			})
		}
	}
}
</script>

<style scoped>
.profile {
	text-align: center;
}

.main-title {
	font-size: 40px;
	text-align: center;
	letter-spacing: 8px;
	font-family: 'Kite One', sans-serif;
	margin-left: 10px;
	margin-top: 10px;
	text-shadow: 1px 1px 2px rgba(84, 248, 255, .8),
		-1px -1px 2px rgba(84, 248, 255, .8),
		-1px 1px 2px rgba(84, 248, 255, .8),
		1px -1px 2px rgba(84, 248, 255, .8),
		1px 1px 30px rgba(84, 248, 255, .3),
		-1px -1px 30px rgba(84, 248, 255, .3),
		-1px 1px 30px rgba(84, 248, 255, .3),
		1px -1px 30px rgba(84, 248, 255, .3),
		1px 1px 50px rgba(0, 0, 255, .5),
		-1px -1px 50px rgba(0, 0, 255, .5),
		-1px 1px 50px rgba(0, 0, 255, .5),
		1px -1px 50px rgba(0, 0, 255, .5);
}

.content {
	border: solid 2px #fff;
	border-radius: 12px;
	box-shadow: 0 0 4px rgba(84, 248, 255, .8),
		0 0 4px rgba(84, 248, 255, .8),
		0 0 20px rgba(84, 248, 255, .6),
		0 0 20px rgba(84, 248, 255, .6) inset,
		0 0 48px rgba(0, 0, 255, .5),
		0 0 64px rgba(0, 0, 255, .5) inset;
	color: #c7d2e4;
	display: inline-block;
	margin: 10px;
	width: 50%;
}

.primary-title {
	color: #2c3e50;
	font-size: 24px;
	text-align: left;
	letter-spacing: 8px;
	font-family: 'Kite One', sans-serif;
	margin-left: 30px;
	margin-top: 20px;
	text-shadow: 1px 1px 2px rgba(84, 248, 255, .8),
		-1px -1px 2px rgba(84, 248, 255, .8),
		-1px 1px 2px rgba(84, 248, 255, .8),
		1px -1px 2px rgba(84, 248, 255, .8),
		1px 1px 30px rgba(84, 248, 255, .3),
		-1px -1px 30px rgba(84, 248, 255, .3),
		-1px 1px 30px rgba(84, 248, 255, .3),
		1px -1px 30px rgba(84, 248, 255, .3),
		1px 1px 50px rgba(0, 0, 255, .5),
		-1px -1px 50px rgba(0, 0, 255, .5),
		-1px 1px 50px rgba(0, 0, 255, .5),
		1px -1px 50px rgba(0, 0, 255, .5);
}

.qa {
	font-size: 25px;
	margin-bottom: 10px;
	font-family: 'Kite One', sans-serif;

}
</style>
