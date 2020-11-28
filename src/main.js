import Vue from 'vue';
import App from './App.vue';

//引入全局样式
import './styles/reset.css';

import router from './router';
import './plugins/element.js'

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router
}).$mount('#app');
