import request from '@utils/request';

export const reqLogin = (phone, password) => {
	//此处返回的应该是一个promise对象，请求完成后处理成功或失败状况
	return request({
		method: 'POST',
		url: '/user/passport/login',
		data: {
			phone,
			password
		}
	});
};
