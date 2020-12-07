import { reqGetCartList, reqUpdateCartCheck, reqUpdateCartCount } from '@api/shopcart';

export default {
	state: {
		//所有购物车的数据
		cartList: []
	},
	getters: {},
	actions: {
		//获取购物车列表
		async getCartList({ commit }) {
			const cartList = await reqGetCartList();
			commit('GET_CART_LIST', cartList);
		},
		//获取更新购物车列表
		async updateCartCheck({ commit }, { shuId, skuNum }) {
			await reqUpdateCartCheck(shuId, skuNum);
			//手动更新vuex的数据页面就会重新渲染并重新请求所有购物车的数据
			commit('UPDATE_CART_COUNT', { shuId, skuNum });
		},
		async updateCartCount({ commit }, { skuId, isChecked }) {
			await reqUpdateCartCount(skuId, isChecked);
			console.log(commit);
		}
	},
	mutations: {
		GET_CART_LIST(state, cartList) {
			state.cartList = cartList;
		},
		UPDATE_CART_COUNT(state, { skuId, skuNum }) {
			state.cartList = state.cartList.map((cart) => {
				if (cart.skuId === skuId) {
					cart.skuNum += skuNum;
				}
				return cart;
			});
		}
	}
};
