import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

const Msg = r => require.ensure([], () => r(require('@/views/Msg.vue')), 'Msg')
const Getstart = r => require.ensure([], () => r(require('@/views/Getstart.vue')), 'Getstart')
const Api = r => require.ensure([], () => r(require('@/views/Api.vue')), 'Api')
const About = r => require.ensure([], () => r(require('@/views/About.vue')), 'About')
const Setting = r => require.ensure([], () => r(require('@/views/Setting.vue')), 'Setting')

import All from '@/views/home-pages/all.vue'
// const All = r => require.ensure([ ], ( ) => r(require('@/views/home-pages/all.vue')), 'Home')
const Ask = r => require.ensure([], () => r(require('@/views/home-pages/Ask.vue')), 'Home')
const Good = r => require.ensure([], () => r(require('@/views/home-pages/Good.vue')), 'Home')
const Job = r => require.ensure([], () => r(require('@/views/home-pages/Job.vue')), 'Home')
const Share = r => require.ensure([], () => r(require('@/views/home-pages/Share.vue')), 'Home')

// topic details
const Topic = r => require.ensure([], () => r(require('@/views/Topic-details.vue')), 'Topic')

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		redirect: '/home',
	},
	{
		path: '/home',
		component: Home,
		children: [
			{
				path: 'all',
				name: 'all',
				component: All,
				alias: '/home',
			},
			{
				path: 'good',
				name: 'good',
				component: Good,
			},
			{
				path: 'share',
				name: 'share',
				component: Share,
			},
			{
				path: 'ask',
				name: 'ask',
				component: Ask,
			},
			{
				path: 'job',
				name: 'job',
				component: Job,
			}
		]
	},
	{
		path: '/topic/:topicId',
		name: 'Topic',
		component: Topic
	},
	{
		path: '/msg',
		name: 'Msg',
		component: Msg
	},
	{
		path: '/getstart',
		name: 'Getstart',
		component: Getstart
	},
	{
		path: '/api',
		name: 'Api',
		component: Api
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/setting',
		name: 'Setting',
		component: Setting
	},
	{
		path: '*',
		component: Home
	}
]

export default new Router({
	routes
})
