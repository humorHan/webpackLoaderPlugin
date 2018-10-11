const http = require("http");
const fs = require('fs');
const tinify = require('tinify');
const glob = require('glob');
// { 
//   key: 'ESUKcbJt9lRkplqmVQLZ9Ot5uAeY2f95',
//   ext: [ 'png', 'jpg', 'jpeg' ],
//   sources: [ 'src/img' ]
// }
module.exports = {
  init: function (options) {
    this.options = options;
    this.imgs = glob.sync(`${this.options.sources[0]}`);
    let a = fs.readFileSync(this.imgs[0] + '/1.jpg');
    console.log(this.imgs);
    console.log(a);
    let req = http.request({
      method: 'POST',
      host: 'api.tinify.com',
      path: '/shrink',
      rejectUnauthorized: true,
      auth: "api:" + this.options.key,
      headers: {
        'Content-Type': "application/json",
        'Content-Length': Buffer.byteLength(a)
      }
    }, (res)=>{
      console.log(res);
      res.on('data', (chunk) => {
        console.log(`响应主体: ${chunk}`);
      });
      res.on('end', () => {
        console.log('响应中已无数据。');
      });
    });
    req.on('error', (e) => {
      console.error(e);
    });
  }
};