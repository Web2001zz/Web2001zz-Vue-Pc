// search组件的vuex状态
import { reqGetProductList } from '@api/search';
export default {
	state: {
		productList: {
			//品牌数据
			trademarkList: [],
			//品牌属性数据
			attrsList: [],
			//商品数据
			goodsList: []
		}
	},
	//将内部数据代理出来以便查看数据
	getters: {
		trademarkList(state) {
			return state.productList.trademarkList;
		},
		attrsList(state) {
			return state.productList.attrsList;
		},
		goodsList(state) {
			return state.productList.goodsList;
		},
		//将total提取出来
		total(state) {
			return state.productList.total;			
		}
	},
	actions: {
		//请求商品列表
		async getProductList({ commit }, data = {}) {
			const productList = await reqGetProductList(data);
			commit('GET_PRODUCT_LIST', productList);
		}
	},
	mutations: {
		GET_PRODUCT_LIST(state, productList) {
			state.productList = productList;
		}
	}
};
