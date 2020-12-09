// @ts-nocheck
import Vue from 'vue';
import App from './App';

import router from './router';
import store from './store';

import './mock/mockServer';
import './styles/reset.css';
import './styles/iconfont.css';
import './plugins/element.js';
import './plugins/lazyload';

Vue.config.productionTip = false;

new Vue({
	beforeCreate() {
		//定义全局事件总线对象
		Vue.prototype.$bus = this;
	},
	render: (h) => h(App),
	router,
	store
}).$mount('#app');
