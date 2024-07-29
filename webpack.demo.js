// webpack.dev.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');


module.exports = merge(common, {
  mode: 'development',

  entry: {
    'demo': './src/demo.js',
  },

  optimization: {
    usedExports: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo',
    }),
  ],

  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
  },
});
