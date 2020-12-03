import request from '@utils/request';

//POST请求获取商品列表
export const reqGetProductList = (data) => {
	return request({
		method: 'POST',
		url: '/list',
		data
	});
};
