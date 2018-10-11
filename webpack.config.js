const path = require('path');
let Plugin = require('./plugin/plugin');
let AddJsOrigin = require('./plugin/addJsOrigin');
let TinyPng = require('./plugin/tinyPng/index');

let entry = require('./config/entry');
let config = require('./config/config');

module.exports = {
  entry,
  output: {
    path: config.distDir,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]-chunk-[chunkhash].js',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [config.srcDir],
    extensions: ['.js'],
    alias: {}
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: path.resolve('loader', 'loader.js'),
        options: {
          name: 'loader param'
        }
      }]
    }, {
      test: /\.(png|jpeg|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new Plugin({
      name: 'plugin param'
    }),
    new AddJsOrigin(),
    new TinyPng({
      key: 'ESUKcbJt9lRkplqmVQLZ9Ot5uAeY2f95',
      ext: ['png', 'jpg'], //类型
      sources: ['src/img', 'src/img2'] //文件源
    })
  ]
};