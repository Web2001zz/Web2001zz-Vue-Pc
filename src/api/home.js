import request from '@utils/request';
import mockRequest from '@utils/mockrequest';

//获取首页三级分类数据
export const reqGetBaseCategoryList = () => {
	return request({
		method: 'GET',
		url: '/product/getBaseCategoryList'
	});
};

//获取首页轮播图
export const reqGetBanners = () => {
	return mockRequest({
		method: 'GET',
		url: '/banners'
	});
};

//获取楼层组件数据
export const reqGetFloors = () => {
	return mockRequest({
		method: 'GET',
		url: '/floors'
	});
};
