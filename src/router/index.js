import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/components/top'
// import Output from '@/components/Output' //①import
import Profile from '@/components/profile'
import Skill from '@/components/skill'

const routes = [
	{
		path: '/',
		name: 'top',
		component: Top
	},
	// {
	// 	path: '/outputs',
	// 	name: 'output',
	// 	component: Output
	// },
	{
		path: '/profile',
		name: 'profile',
		component: Profile
	},
	{
		path: '/skills',
		name: 'skill',
		component: Skill
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router


// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Output from '@/components/Output' //①import


// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },

//     //②profile
//     {
//       path: '/outputs',
//       name: 'Output',
//       component: Output
//     }
//   ]
// })
