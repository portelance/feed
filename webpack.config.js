var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.join(__dirname, 'client'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react']}},
			{test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader')}	
		],
	},
	plugins: [
 		new ExtractTextPlugin('style.css'),
	]
}