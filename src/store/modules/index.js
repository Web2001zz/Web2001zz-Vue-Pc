// 汇总所有vuex的模块
import home from './home';
import login from './login';
import search from './search';
import detail from './detail';

// 统一暴露出去
export default {
	home,
	login,
	search,
	detail
};
