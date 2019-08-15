const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 3000,
        overlay: true,
        quiet: true,
        host: '192.168.21.236',
        disableHostCheck: true, //用于手机调试
        hot: true,
        historyApiFallback: true
    },
    devtool: 'source-map' //用于调试
});
