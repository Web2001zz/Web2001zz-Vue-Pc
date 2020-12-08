import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import Search from '../views/Search';
import Detail from '../views/Detail';
import AddCartSuccess from '../views/AddCartSuccess';
import ShopCart from '../views/ShopCart';
import Center from '../views/Center';
import Trade from '../views/Trade';
import PaySuccess from '../views/PaySuccess';
import Pay from '../views/Pay';
// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplete, onAbort) {
	// 如果用户想处理失败，就处理
	if (onComplete && onAbort) {
		return push.call(this, location, onComplete, onAbort);
	}
	// 如果用户不处理失败，给默认值：空函数
	return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
	// 如果用户想处理失败，就处理
	if (onComplete && onAbort) {
		return replace.call(this, location, onComplete, onAbort);
	}
	// 如果用户不处理失败，给默认值：空函数
	return replace.call(this, location, onComplete, () => {});
};

// 安装插件
Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/login',
			component: Login,

			meta: {
				isFooterHide: true
			}
		},
		{
			path: '/register',
			component: Register,
			meta: {
				isFooterHide: true
			}
		},
		{
			// ?: 代表 params 参数是可选的
			name: 'search',
			path: '/search/:searchText?',
			component: Search
		},
		{
			name: 'detail',
			path: '/detail/:id',
			component: Detail
		},
		{
			// 命名路由
			name: 'addcartsuccess',
			path: '/addcartsuccess',
			component: AddCartSuccess
		},
		{
			// 命名路由
			name: 'shopcart',
			path: '/shopcart',
			component: ShopCart
		},
		{
			// 命名路由
			name: 'center',
			path: '/center',
			component: Center
		},
		{
			// 命名路由
			name: 'trade',
			path: '/trade',
			component: Trade
		},
		{
			// 命名路由
			name: 'paySuccess',
			path: '/paySuccess',
			component: PaySuccess
		},
		{
			// 命名路由
			name: 'pay',
			path: '/pay',
			component: Pay
		}
	],
	// 每次切换路由页面滚动条位置
	scrollBehavior() {
		return { x: 0, y: 0 };
	}
});

//要求:在跳转到trade、pay、center页面之前 需要验证token
// 需要权限才能访问的组件，声明一个数组以便未来的扩展性
const permissionsList = [ '/trade', '/pay', '/center' ];

//	因此需要使用到路由的导航守卫
router.beforeEach((to, from, next) => {
	console.log(to, from);
	//to\from与$route类似，to是要跳转的组件，from是当前的页面
	//都可以获取到params\query\meta\path等参数
	//判断要跳转的页面是否需要权限访问（需要登录），如果不需要权限则直接跳转
	if (permissionsList.indexOf(to.path) > -1) {
		//如果有登录用的token则直接跳转,如果没有则跳转到login登录
		if (store.state.user.token) {
			return next();
		} else {
			next('/login');
		}
	} else {
		next();
	}
});

export default router;
