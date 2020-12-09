import Vue from 'vue';

import VueLazyload from 'vue-lazyload';

import loading from '../assets/loading.jpg'
Vue.use(VueLazyload, {
	loading: loading
});
