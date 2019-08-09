const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {//CSS处理
                test: /\.css$/,
                loader: "style-loader!css-loader?modules",
                exclude: /node_modules/,
            },

            {//antd样式处理
                test:/\.css$/,
                exclude:/src/,
                use:[
                    { loader: "style-loader",},
                    {
                        loader: "css-loader",
                        options:{
                            importLoaders:1
                        }
                    }
                ]
            },
            {
                test: /\.(jsx|tsx|js|ts)$/,
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  getCustomTransformers: () => ({
                    before: [ tsImportPluginFactory({
                        libraryName: 'antd-mobile',
                        style: 'css' 
                    }), 
                    tsImportPluginFactory({
                        libraryName: 'lodash',
                        style: false,
                        camel2DashComponentName: false,
                        libraryDirectory: null
                    })
                ]
                  }),
                  compilerOptions: {
                    module: 'es2015'
                  }
                },
                exclude: /node_modules/
              }
        ],

    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin({
            clearConsole: true
        })
    ]
}