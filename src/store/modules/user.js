import { reqRegister, reqLogin } from '@api/user';

export default {
	state: {
		//请求回来的数据分别是name和token
		//登录后 就要更新登陆后返回的token与name数据
		name: localStorage.getItem('name') || '',
		token: localStorage.getItem('token') || ''
	},
	getters: {},
	actions: {
		//当所需函数比较多时，传入一个对象以便处理
		async register({ commit }, { phone, password, code }) {
			await reqRegister({ phone, password, code });
			//不需要用到commit 应付报错
			console.log({ commit });
		},
		async login({ commit }, { phone, password }) {
			const user = await reqLogin({ phone, password });
			commit('REQ_LOGIN', user);
		}
	},
	mutations: {
		REQ_LOGIN(state, user) {
			state.name = user.name;
			state.token = user.token;
		}
	}
};
