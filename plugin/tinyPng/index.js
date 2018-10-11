// const glob = require('glob');
// const fs = require('fs');
// const path = require('path');
// const stdout = process.stdout;
// const colors = require('colors');
const upload = require('./lib/upload');

class TinyPng {
  constructor(options) {
    this.options = {
      ext: ['png', 'jpg', 'jpeg'], // 类型
      sources: ['src/assets']      // 文件源
    };
    Object.assign(this.options, options);
    if (typeof this.options.key === 'string' && !this.options.key){
      throw new Error('TinyPNG key error');
    }
  }
  apply(compiler) {
    compiler.plugin('done', async (compilation, callback) => {
      await upload.init(this.options);
      callback && callback();
    });
  }
}

module.exports = TinyPng;