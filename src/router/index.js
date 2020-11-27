import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../view/Home';
import Login from '../view/Login';
import Register from '../view/Register';
import Search from '../view/Search';

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/Login',
			component: Login
		},
		{
			path: '/Register',
			component: Register
		},
		{
			path: '/Search',
			component: Search
		}
	]
});
