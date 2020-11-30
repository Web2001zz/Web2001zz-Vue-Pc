/* 
  封装axios拦截器
    1. 设置公共的请求地址前缀
    2. 请求拦截器：添加公共参数
    3. 响应拦截器: 
      成功：返回成功的Promise，值为成功的数据
      失败：返回失败的Promise，值为失败的原因
*/
import axios from 'axios';
import { Message } from 'element-ui';
// 引入进度条插件
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const instance = axios.create({
	baseURL: '/api' // 公共的基础路径
});

// 设置请求拦截器
instance.interceptors.request.use((config) => {
	// 开始进度条
	NProgress.start();
	return config;
});
// 设置响应拦截器
instance.interceptors.response.use(
	(response) => {
		//进度条结束
		NProgress.done();
		if (response.data.code === 200) {
			return response.data.data;
		}

		const { message } = response.data;
		Message.error(message);
		return Promise.reject(message);
	},
	(error) => {
		NProgress.done();
		const message = error.message || '网络错误';
		Message.error(message);
		return Promise.reject(message);
	}
);

export default instance;
