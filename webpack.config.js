var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = process.env.NODE_ENV === 'production' ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'build');

var config = {
    entry: {
        app: process.env.NODE_ENV === 'production' ? [APP_DIR + '/app.js'] : ['webpack/hot/dev-server', APP_DIR + '/app.js']
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(otf|eot|svg|ttf|woff)\??/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.tpl',
            inject:true
        }),
        new ExtractTextPlugin('bundle.css')
    ]
};

module.exports = config;