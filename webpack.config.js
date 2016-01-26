/**
 * Created by chihyaohsu on 2016/1/12.
 */
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

config = {
    entry: ['webpack/hot/dev-server', APP_DIR + '/app.js'],
    resolve: {
        alias: {
            'react': pathToReact
        }
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
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        }],
        noParse: [pathToReact]
    }
};

module.exports = config;