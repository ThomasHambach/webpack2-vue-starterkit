/**
 * Development config for webpack
 *
 * Use this to add loaders / modules for the development build
 */
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base.js');

const config = require('./config.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
	return webpackMerge(webpackBase, {
		devtool: 'source-map',
		devServer: {
			contentBase: config.dist,
			historyApiFallback: true,
			port: 3000
		},
		plugins: [
			new HtmlWebpackPlugin({
				filetype: 'pug',
				filename: 'index.html',
				template: path.resolve(config.src, 'index.pug'),
			})
		]
	});
}
