//封装axios拦截器

import axios from 'axios';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const instance = axios.create({
	baseURL: '/api'
});
//请求拦截器
instance.interceptors.request.use((config) => {
	Nprogress.start();
	return config;
});

instance.interceptors.response.use(
	(response) => {
		Nprogress.done();
		if (response.data.code === 200) {
			return response.data.data;
		}
		return Promise.reject(response.data.message);
	},
	(error) => {
		Nprogress.done();
		const message = error.message || '网络错误';
		return Promise.reject(message);
	}
);

export default instance;
