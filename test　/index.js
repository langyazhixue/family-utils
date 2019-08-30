var  path = require('path')
const {cloneFile, initFolder }  = require('../build/utils')
cloneFile('./test.js','./output.js')

initFolder('../dist')

console.log(path.resolve(__dirname,'text'))