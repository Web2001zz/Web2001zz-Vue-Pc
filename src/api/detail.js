import request from '@utils/request';

//获取商品的详情数据
export const reqGetProductDetail = (id) => {
	return request({
		method: 'GET',
		url: `/item/${id}`
	});
};
