function plugin(name) {
  this.name = name;
  console.log(this.name);
}

plugin.prototype.apply = function apply(compiler) {
  compiler.plugin('emit', (compilation, callback) => {
    let filelist = 'In this build:\n\n';
    // 遍历所有编译过的资源文件，
    // 对于每个文件名称，都添加一行内容。
    for (let filename in compilation.assets) {
      filelist += (`- ${filename}\n`);
    }

    // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
    compilation.assets['./filelist.md'] = {
      source: () => filelist,
      size: () => filelist.length
    };
    callback();
  });
};

module.exports = plugin;
