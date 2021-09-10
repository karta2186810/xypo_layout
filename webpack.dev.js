const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'bundle.js'),
    compress: false,
    progress: true,
    port: 8080,
    open: true
  }
})