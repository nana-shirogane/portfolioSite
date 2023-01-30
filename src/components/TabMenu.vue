<template>
	<div class="tab">
		<ol>
			<li class="button" v-for="(item, index) in items" :key=index>
				<router-link v-bind:to=item.path>
					{{ item.title }}
				</router-link>
			</li>
		</ol>
	</div>
</template>

<script>
export default {
	name: 'tabMenu',
	data() {
		return {
			items: [
				{ title: 'top', path: '/' },
				{ title: 'profile', path: '/profile' },
				{ title: 'skills', path: '/skills' },
				// { title: 'outputs', path: '/outputs' }
			]
		}
	}
}
</script>

<style scoped>
ol {
	display: flex;
	justify-content: center;
	padding: 0;
	list-style: none;
}

.tab {
	--color_1: rgba(84, 248, 255, .8);
	--color_2: rgba(84, 248, 255, .6);
	--color_3: rgba(84, 248, 255, .3);
	--color_4: rgba(84, 248, 255, 0);
	--color_5: rgba(0, 0, 255, .5);
	--color_6: rgba(0, 0, 255, 0);
}

.button {
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	text-decoration: none;
	width: 240px;
	height: 64px;
	font-size: 24px;
	color: #555;
	letter-spacing: 8px;
	font-family: 'Kite One', sans-serif;
	text-shadow: 1px 1px 2px transparent,
		-1px -1px 2px transparent,
		-1px 1px 2px transparent,
		1px -1px 2px transparent,
		1px 1px 30px var(--color_4),
		-1px -1px 30px var(--color_4),
		-1px 1px 30px var(--color_4),
		1px -1px 30px var(--color_4),
		1px 1px 50px var(--color_6),
		-1px -1px 50px var(--color_6),
		-1px 1px 50px var(--color_6),
		1px -1px 50px var(--color_6);
	box-sizing: border-box;
	border-radius: 12px;
	border: solid 2px #555;
	box-shadow: 0 0 4px transparent,
		0 0 4px transparent inset,
		0 0 20px var(--color_4),
		0 0 20px var(--color_4) inset,
		0 0 48px var(--color_6),
		0 0 64px var(--color_6) inset;
}

.button:hover {
	animation: lights 1.4s linear;
	animation-fill-mode: forwards;
}

@keyframes lights {
	0% {
		box-shadow: 0 0 4px transparent,
			0 0 4px transparent inset,
			0 0 20px var(--color_4),
			0 0 20px var(--color_4) inset,
			0 0 48px var(--color_6),
			0 0 64px var(--color_6) inset;
		text-shadow: 1px 1px 2px transparent,
			-1px -1px 2px transparent,
			-1px 1px 2px transparent,
			1px -1px 2px transparent,
			1px 1px 30px var(--color_4),
			-1px -1px 30px var(--color_4),
			-1px 1px 30px var(--color_4),
			1px -1px 30px var(--color_4),
			1px 1px 50px var(--color_6),
			-1px -1px 50px var(--color_6),
			-1px 1px 50px var(--color_6),
			1px -1px 50px var(--color_6);
		color: #555;
		border-color: #555;
	}

	2% {
		box-shadow: 0 0 4px transparent,
			0 0 4px transparent inset,
			0 0 20px var(--color_4),
			0 0 20px var(--color_4) inset,
			0 0 48px var(--color_6),
			0 0 64px var(--color_6) inset;
		text-shadow: 1px 1px 2px transparent,
			-1px -1px 2px transparent,
			-1px 1px 2px transparent,
			1px -1px 2px transparent,
			1px 1px 30px var(--color_4),
			-1px -1px 30px var(--color_4),
			-1px 1px 30px var(--color_4),
			1px -1px 30px var(--color_4),
			1px 1px 50px var(--color_6),
			-1px -1px 50px var(--color_6),
			-1px 1px 50px var(--color_6),
			1px -1px 50px var(--color_6);
		color: #555;
		border-color: #555;
	}

	3% {
		box-shadow: 0 0 4px var(--color_1),
			0 0 4px var(--color_1) inset,
			0 0 20px var(--color_2),
			0 0 20px var(--color_2) inset,
			0 0 48px var(--color_5),
			0 0 64px var(--color_5) inset;
		text-shadow: 1px 1px 2px var(--color_1),
			-1px -1px 2px var(--color_1),
			-1px 1px 2px var(--color_1),
			1px -1px 2px var(--color_1),
			1px 1px 30px var(--color_3),
			-1px -1px 30px var(--color_3),
			-1px 1px 30px var(--color_3),
			1px -1px 30px var(--color_3),
			1px 1px 50px var(--color_5),
			-1px -1px 50px var(--color_5),
			-1px 1px 50px var(--color_5),
			1px -1px 50px var(--color_5);
		color: #fff;
		border-color: #fff;
	}

	5% {
		box-shadow: 0 0 4px var(--color_1),
			0 0 4px var(--color_1) inset,
			0 0 20px var(--color_2),
			0 0 20px var(--color_2) inset,
			0 0 48px var(--color_5),
			0 0 64px var(--color_5) inset;
		text-shadow: 1px 1px 2px var(--color_1),
			-1px -1px 2px var(--color_1),
			-1px 1px 2px var(--color_1),
			1px -1px 2px var(--color_1),
			1px 1px 30px var(--color_3),
			-1px -1px 30px var(--color_3),
			-1px 1px 30px var(--color_3),
			1px -1px 30px var(--color_3),
			1px 1px 50px var(--color_5),
			-1px -1px 50px var(--color_5),
			-1px 1px 50px var(--color_5),
			1px -1px 50px var(--color_5);
		color: #fff;
		border-color: #fff;
	}

	6% {
		box-shadow: 0 0 4px transparent,
			0 0 4px transparent inset,
			0 0 20px var(--color_4),
			0 0 20px var(--color_4) inset,
			0 0 48px var(--color_6),
			0 0 64px var(--color_6) inset;
		text-shadow: 1px 1px 2px transparent,
			-1px -1px 2px transparent,
			-1px 1px 2px transparent,
			1px -1px 2px transparent,
			1px 1px 30px var(--color_4),
			-1px -1px 30px var(--color_4),
			-1px 1px 30px var(--color_4),
			1px -1px 30px var(--color_4),
			1px 1px 50px var(--color_6),
			-1px -1px 50px var(--color_6),
			-1px 1px 50px var(--color_6),
			1px -1px 50px var(--color_6);
		color: #555;
		border-color: #555;
	}

	12% {
		box-shadow: 0 0 4px transparent,
			0 0 4px transparent inset,
			0 0 20px var(--color_4),
			0 0 20px var(--color_4) inset,
			0 0 48px var(--color_6),
			0 0 64px var(--color_6) inset;
		text-shadow: 1px 1px 2px transparent,
			-1px -1px 2px transparent,
			-1px 1px 2px transparent,
			1px -1px 2px transparent,
			1px 1px 30px var(--color_4),
			-1px -1px 30px var(--color_4),
			-1px 1px 30px var(--color_4),
			1px -1px 30px var(--color_4),
			1px 1px 50px var(--color_6),
			-1px -1px 50px var(--color_6),
			-1px 1px 50px var(--color_6),
			1px -1px 50px var(--color_6);
		color: #555;
		border-color: #555;
	}

	13% {
		box-shadow: 0 0 4px var(--color_1),
			0 0 4px var(--color_1) inset,
			0 0 20px var(--color_2),
			0 0 20px var(--color_2) inset,
			0 0 48px var(--color_5),
			0 0 64px var(--color_5) inset;
		text-shadow: 1px 1px 2px var(--color_1),
			-1px -1px 2px var(--color_1),
			-1px 1px 2px var(--color_1),
			1px -1px 2px var(--color_1),
			1px 1px 30px var(--color_3),
			-1px -1px 30px var(--color_3),
			-1px 1px 30px var(--color_3),
			1px -1px 30px var(--color_3),
			1px 1px 50px var(--color_5),
			-1px -1px 50px var(--color_5),
			-1px 1px 50px var(--color_5),
			1px -1px 50px var(--color_5);
		color: #fff;
		border-color: #fff;
	}

	14% {
		box-shadow: 0 0 4px var(--color_1),
			0 0 4px var(--color_1) inset,
			0 0 20px var(--color_2),
			0 0 20px var(--color_2) inset,
			0 0 48px var(--color_5),
			0 0 64px var(--color_5) inset;
		text-shadow: 1px 1px 2px var(--color_1),
			-1px -1px 2px var(--color_1),
			-1px 1px 2px var(--color_1),
			1px -1px 2px var(--color_1),
			1px 1px 30px var(--color_3),
			-1px -1px 30px var(--color_3),
			-1px 1px 30px var(--color_3),
			1px -1px 30px var(--color_3),
			1px 1px 50px var(--color_5),
			-1px -1px 50px var(--color_5),
			-1px 1px 50px var(--color_5),
			1px -1px 50px var(--color_5);
		color: #fff;
		border-color: #fff;
	}

	17% {
		box-shadow: 0 0 4px transparent,
			0 0 4px transparent inset,
			0 0 20px var(--color_4),
			0 0 20px var(--color_4) inset,
			0 0 48px var(--color_6),
			0 0 64px var(--color_6) inset;
		text-shadow: 1px 1px 2px transparent,
			-1px -1px 2px transparent,
			-1px 1px 2px transparent,
			1px -1px 2px transparent,
			1px 1px 30px var(--color_4),
			-1px -1px 30px var(--color_4),
			-1px 1px 30px var(--color_4),
			1px -1px 30px var(--color_4),
			1px 1px 50px var(--color_6),
			-1px -1px 50px var(--color_6),
			-1px 1px 50px var(--color_6),
			1px -1px 50px var(--color_6);
		color: #555;
		border-color: #555;
	}

	40% {
		box-shadow: 0 0 4px transparent,
			0 0 4px transparent inset,
			0 0 20px var(--color_4),
			0 0 20px var(--color_4) inset,
			0 0 48px var(--color_6),
			0 0 64px var(--color_6) inset;
		text-shadow: 1px 1px 2px transparent,
			-1px -1px 2px transparent,
			-1px 1px 2px transparent,
			1px -1px 2px transparent,
			1px 1px 30px var(--color_4),
			-1px -1px 30px var(--color_4),
			-1px 1px 30px var(--color_4),
			1px -1px 30px var(--color_4),
			1px 1px 50px var(--color_6),
			-1px -1px 50px var(--color_6),
			-1px 1px 50px var(--color_6),
			1px -1px 50px var(--color_6);
		color: #555;
		border-color: #555;
	}

	41% {
		box-shadow: 0 0 4px var(--color_1),
			0 0 4px var(--color_1) inset,
			0 0 20px var(--color_2),
			0 0 20px var(--color_2) inset,
			0 0 48px var(--color_5),
			0 0 64px var(--color_5) inset;
		text-shadow: 1px 1px 2px var(--color_1),
			-1px -1px 2px var(--color_1),
			-1px 1px 2px var(--color_1),
			1px -1px 2px var(--color_1),
			1px 1px 30px var(--color_3),
			-1px -1px 30px var(--color_3),
			-1px 1px 30px var(--color_3),
			1px -1px 30px var(--color_3),
			1px 1px 50px var(--color_5),
			-1px -1px 50px var(--color_5),
			-1px 1px 50px var(--color_5),
			1px -1px 50px var(--color_5);
		color: #fff;
		border-color: #fff;
	}

	100% {
		box-shadow: 0 0 4px var(--color_1),
			0 0 4px var(--color_1) inset,
			0 0 20px var(--color_2),
			0 0 20px var(--color_2) inset,
			0 0 48px var(--color_5),
			0 0 64px var(--color_5) inset;
		text-shadow: 1px 1px 2px var(--color_1),
			-1px -1px 2px var(--color_1),
			-1px 1px 2px var(--color_1),
			1px -1px 2px var(--color_1),
			1px 1px 30px var(--color_3),
			-1px -1px 30px var(--color_3),
			-1px 1px 30px var(--color_3),
			1px -1px 30px var(--color_3),
			1px 1px 50px var(--color_5),
			-1px -1px 50px var(--color_5),
			-1px 1px 50px var(--color_5),
			1px -1px 50px var(--color_5);
		color: #fff;
		border-color: #fff;
	}
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	color: #858585;
	text-decoration: none;
	line-height: 60px;
}
</style>

