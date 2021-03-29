const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',  // 出错的话, 显示是哪儿错的
    resolve: {
        modules:[path.resolve(__dirname, ''), path.resolve(__dirname,'node_modules')]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}