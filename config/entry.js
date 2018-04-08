const glob = require('glob');
const config = require('./config');

let entriesMap = {};
function getEntries() {
  let entryJs = glob.sync(`${config.jsDir}/*.js`);
  entryJs.forEach((filePath) => {
    entriesMap[filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))] = filePath;
  });
  return entriesMap;
}

getEntries();

module.exports = entriesMap;
