// webpack.dev.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');


module.exports = merge(common, {
  mode: 'development',

  entry: {
    'test': './test/index.js',
  },

  optimization: {
    usedExports: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tests',
      template: 'test/index.html',
    }),
  ],

  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
  },
});
