// search组件的vuex状态
import { reqGetProductDetail } from '@api/detail';
export default {
	state: {
		//提取所需数据
		productDetail: {
			categoryView: {}, // 分类数据
			skuInfo: {}, // 商品详情数据
			spuSaleAttrList: [] // 商品选择属性数据列表
		}
	},
	//将内部数据代理出来以便查看数据
	getters: {
		categoryView(state) {
			return state.productDetail.categoryView;
		},
		skuInfo(state) {
			return state.productDetail.skuInfo;
		},
		spuSaleAttrList(state) {
			return state.productDetail.spuSaleAttrList;
		}
	},
	actions: {
		//请求商品列表
		async getProductDetail({ commit }, id) {
			const productDetail = await reqGetProductDetail(id);
			commit('GET_PRODUCT_DETAIL', productDetail);
		}
	},
	mutations: {
		GET_PRODUCT_DETAIL(state, productDetail) {
			state.productDetail = productDetail;
		}
	}
};
