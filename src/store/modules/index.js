// 汇总所有vuex的模块
import home from './home';
import login from './login';
import search from './search';
import detail from './detail';
import user from './user';
import shopcart from './shopcart';

// 统一暴露出去
export default {
	home,
	login,
	search,
	detail,
	user,
	shopcart
};
