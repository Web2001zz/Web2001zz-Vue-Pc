var Mock = require('mockjs');

Mock.Random.ctitle();
Mock.Random.image();
Mock.Random.color();
var data = Mock.mock({
	/* // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|5': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }] */
	//title:"@ctitle(4)",
	'subtitle|4': [ '@ctitle(4)' ],
	'image|4': [ "@image('721x455', '@color', '#FFF', 'png', '721x455')" ]
});
// 输出结果
console.log(data);
