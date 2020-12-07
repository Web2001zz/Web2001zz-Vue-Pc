//提取v4重命名为uuid 模块化的解构赋值使用as 重新命名
//es6中的解构赋值重命名使用的是":"
import { v4 as uuidv4 } from 'uuid';
//流程: 先读取本地的localstorage数据，看用户是否已登录。已登录会自带usertempid
//      如果有直接使用，如果没有则用uuid创建usertempid并保存在localstorage                                                                                     
function getUserTempId() {
	let userTempId = localStorage.getItem('userTempId');
	//如果用户已登录（自带id）则直接返回该id 如果没有则使用uuid创建一个随机id

	if (userTempId) {
		return userTempId;
	}

	userTempId = uuidv4();
	//在localstorage中缓存
	localStorage.setItem('userTempId', userTempId);

	return userTempId;
}

export default getUserTempId;
