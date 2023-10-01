const path = require('path');
const prod = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.tsx',
	mode: prod ? 'production' : 'development',
	optimization: {
		minimize: false,
	},
	devServer: {
		hot: false,
		port: 3000,
		historyApiFallback: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public'),
		publicPath: 'auto',
	},
	module: {
		rules: [
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
					loader: 'url-loader',
				},
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules|\.d\.ts$/,
				resolve: {
					extensions: ['.ts', '.tsx', '.js', '.json'],
				},
				use: {
					loader: 'ts-loader',
					options: {
						compilerOptions: {
							noEmit: false,
						},
					},
				},
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							query: {
								name: 'assets/[name].[ext]',
							},
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							query: {
								mozjpeg: {
									progressive: true,
								},
								gifsicle: {
									interlaced: true,
								},
								optipng: {
									optimizationLevel: 7,
								},
							},
						},
					},
				],
			},
		],
	},
	devtool: prod ? undefined : 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.ejs',
			filename: 'index.html',
			inject: 'head',
		}),
		new MiniCssExtractPlugin(),
	],
};
