const path = require('path');
let Plugin = require('./plugin/plugin');
let AddJsOrigin = require('./plugin/addJsOrigin');

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
    }]
  },
  plugins: [
    new Plugin({
      name: 'plugin param'
    }),
    new AddJsOrigin()
  ]
};
