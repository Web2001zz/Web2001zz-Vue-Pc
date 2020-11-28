import Vue from 'vue';
import VueRouter from 'vue-router';

//重写push和replce方法以解决冗余报错
const push = VueRouter.prototype.push; 
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(locations, onComplete) {
	return push.call(this, locations, onComplete, () => {});
};

VueRouter.prototype.replace = function(locations, onComplete) {
	return replace.call(this, locations, onComplete, () => {});
};

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
			name: 'search',
			path: '/Search/:SearchName?',
			component: Search
		}
	]
});
