const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});

module.exports = {
	entry: './server/index.js',
	target: 'node',
	output: {
		path: path.join(__dirname, 'server'),
		filename: 'server-bundle.js',
	},
	resolve: {
		alias: {
			'react-native': 'react-native-web',
		},
	},
	module: {
		rules: [{
			test: /\.js?$/,
			loaders: ['babel-loader'],
		}]
	},
	externals: nodeModules,
};