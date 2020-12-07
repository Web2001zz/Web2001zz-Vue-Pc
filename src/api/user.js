import request from '@utils/request';

//登陆操作
export const reqLogin = (phone, password) => {
	// 将request的返回值返回出去
	// 外面可以接受到request返回值（promise对象），通过这个promise对象可以判断请求成功。失败
	return request({
		method: 'POST',
		url: '/user/passport/login',
		data: {
			// 放置请求体参数，通常post请求
			phone,
			password
		}
	});
};

//注册操作
export const reqRegister = ({ phone, password, code }) => {
	return request({
		method: 'POST',
		url: "/user/passport/register",
		data: {
			phone,
			password,
			code,
		}
	});
};
