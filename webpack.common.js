const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: () => [autoprefixer],
							},
						},
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				mimetype: 'image/svg+xml',
				scheme: 'data',
				type: 'asset/resource',
				generator: {
					filename: 'icons/[hash].svg',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			template: './src/list.html',
			filename: 'list.html',
		}),
		new HtmlWebpackPlugin({
			template: './src/create.html',
			filename: 'create.html',
		}),
		new HtmlWebpackPlugin({
			template: './src/edit.html',
			filename: 'edit.html',
		}),
		new MiniCssExtractPlugin(),
	],
};
