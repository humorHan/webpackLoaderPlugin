let loaderUtils = require('loader-utils');

/**
 * 自定义loader
 * @param {*} source 匹配到文件的内容
 * @return str 返回匹配到文件经过该loader处理后的内容
 */
/**
 * PS
 * 同步loader可return 处理后资源或者this.callback(null, someSyncOperation(content)); 注意第一个参数必须是null或者Error
 * 异步loader必须使用 this.async 来获取 callback 函数-- var callback = this.async();（处理函数内调用）
 * 鉴于nodejs单线程，建议loader异步化，但如果计算量很小，同步loader也是可以的
 * ps
 * 在loader处理函数中可以获取到很多内容--必须this.loaders  this.resource等等有用信息
 */
function cb(source) {
  const options = loaderUtils.getOptions(this);
  console.log(options);
  return `${source} var s = 1;`;
  // this.callback(null, `${source} var s = 1;`);
  // this.callback(new Error('asd'), `${source} var s = 1;`);
}

module.exports = cb;
