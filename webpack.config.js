/**
 * Created by chihyaohsu on 2016/1/12.
 */
var path = require('path');
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
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }]
    }
};

module.exports = config;