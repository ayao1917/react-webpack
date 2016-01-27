/**
 * Created by chihyaohsu on 2016/1/12.
 */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

config = {
    entry: ['webpack/hot/dev-server', APP_DIR + '/app.js'],
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
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(otf|eot|svg|ttf|woff)\??/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};

module.exports = config;