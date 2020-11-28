const path = require('path');

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				// 配置路径别名(可以简写路径)
				'@views': path.resolve(__dirname, 'src/view'),
				'@assets': path.resolve(__dirname, 'src/assets'),
				'@comps': path.resolve(__dirname, 'src/components'),
				'@store': path.resolve(__dirname, 'src/store'),
				'@utils': path.resolve(__dirname, 'src/utils'),
				'@api': path.resolve(__dirname, 'src/api')
			}
		}
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://182.92.128.115',
				changeOrigin: true // 允许跨域
				// pathRewrite: { // 重写路径
				//   "^/api": "",
				// },
			}
		}
	}
};
