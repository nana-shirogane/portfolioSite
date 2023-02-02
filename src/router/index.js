import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/components/top'
import Profile from '@/components/profile'
import Skill from '@/components/skill'

const routes = [
	{
		path: '/',
		name: 'top',
		component: Top
	},
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
