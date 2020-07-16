const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: path.resolve('./src/index.js'),
 	output: {
 	    path: path.resolve('/dist'),
	    filename: 'main.js'
  	},
	mode: 'development',
	devServer: {
      contentBase: './dist',
    },
    devtool: "source-map",
	module: {
	   rules: [
	     {
	       test: /\.css$/i,
	       use: [
	           // MiniCssExtractPlugin.loader,
	           'style-loader',
	           'css-loader'
	         ]
	     }
	   ]
	 },
	 plugins: [
	 	// new CleanWebpackPlugin(),
	 	// new MiniCssExtractPlugin(),
	 	new HtmlWebpackPlugin({
	 		template: __dirname + "/src/index.html",
          inject: 'body'
	 	})	 	 	
	 	]
};