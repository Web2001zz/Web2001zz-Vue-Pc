import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

Vue.use(Vuex);

const state = {};

const getters = {};

const actions = {};

const mutations = {};
export default new Vuex.Store({
	state, // 总state
	getters, // 总getters
	actions, // 总actions
	mutations, // 总mutations
	modules // 其他vuex模块的数据
});
