import requset from '@utils/request';

//请求订单信息列表
export const reqGetTrade = () => {
	return requset({
		method: 'GET',
		url: '/order/auth/trade'
	});
};
//提交订单所需的
export const reqSubmitOrder = ({
	tradeNo,
	consignee,
	consigneeTel,
	deliveryAddress,
	paymentWay,
	orderComment,
	orderDetailList
}) => {
	return requset({
		method: 'POST',
		url: 'order/auth/submitOrder',
		params: {
			tradeNo //订单编号 拼接在路径中
		},
		data: {
			consignee, //收件人姓名
			consigneeTel, // 收件人电话
			deliveryAddress, //收件地址
			paymentWay, //支付方式
			orderComment, //订单备注
			orderDetailList //存储多个商品对象的数组
		}
	});
};

//获取支付用二维码
export const reqQRcode = (orderId) => {
	return requset({
		method: 'GET',
		url: `/payment/weixin/createNative/${orderId}`
	});
};
