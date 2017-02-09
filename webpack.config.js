var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name]-[hash:6].js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
