const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 3000,
        overlay: true,
        quiet: true
    }
});
