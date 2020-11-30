// home组件的vuex状态
import { reqGetBaseCategoryList, reqGetBenners } from '@api/home';

export default {
	state: {
		categoryList: [], // 首页三级分类列表数据
		banners: []
	},
	getters: {},
	actions: {
		// 获取首页三级分类列表数据
		async getCategoryList({ commit }) {
			// 发送请求
			const categoryList = await reqGetBaseCategoryList();
			// 触发mutation函数
			commit('GET_CATEGORY_LIST', categoryList);
		},

		async getBenners({ commit }) {
			const banners = await reqGetBenners();
			commit('GET_BANNERS', banners);
		}
	},
	mutations: {
		GET_CATEGORY_LIST(state, categoryList) {
			state.categoryList = categoryList;
		},
		GET_BANNERS(state, banners) {
			state.banners = banners;
		}
	}
};
