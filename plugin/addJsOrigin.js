const glob = require('glob');
const fs = require('fs');
const path = require('path');

const outputJsDir = path.resolve('dist', 'js');

class JsOrigin {
  apply(compiler) {
    compiler.plugin('done', (compilation, callback) => {
      let distJs = glob.sync(`${outputJsDir}/*.js`);
      distJs.forEach((item) => {
        //
        console.log(fs);
      });
      callback && callback();
    });
  }
}

module.exports = JsOrigin;
