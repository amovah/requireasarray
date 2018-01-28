const fs = require('fs');
const { resolve, extname } = require('path');

function getModuleNames(dir) {
  let result = [];
  let files = fs.readdirSync(dir);

  for (let file of files) {
    if (file !== 'index.js') {
      if (
        fs.lstatSync(resolve(dir, file)).isFile() &&
        extname(file) === '.js'
      ) {
        result.push(resolve(dir, file))
      } else {
        result.push(...getModuleNames(resolve(dir, file)));
      }
    }
  }

  return result;
}

module.exports =  (dir = __dirname) => getModuleNames(resolve(dir))
  .map(module => require(module));
