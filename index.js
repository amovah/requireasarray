const fs = require('fs');
const { resolve, extname } = require('path');

function getModuleNames(dir) {
  let result = [];
  let files = fs.readdirSync(dir);

  for (let file of files) {
    if (file !== 'index.js' && extname(file) === '.js') {
      fs.lstatSync(resolve(dir, file)).isFile() ?
      result.push(resolve(dir, file)) :
      result.push(...getModuleNames(resolve(dir, file)));
    }
  }

  return result;
}

module.exports =  (dir = __dirname) => getModuleNames(resolve(dir))
  .map(module => require(module));
