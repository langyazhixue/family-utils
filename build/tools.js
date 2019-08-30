 const fs = require('fs')

 const { cloneFile } = require('./utils')

 /** 
  * 对 import 进行处理
  * 将 import strTemplate from '../string/strTemplate'
  * 转换成 import strTempalte from './strTemplate'
  * */ 

  function refactorImport(inPath, outPath) {
    var code = fs.readFileSync(inPath,"utf8")
    var regx = /from \'\.\.\/.+\'/g
    var result = regx.exec(code)
    var match = []
    while(result !=null) {
      match.push(result[0])
      result = regx.exec(code)
    }
    if (match.length < 1) {
      cloneFile(inPath, outPath)
      return
    }
    for (var i = 0; i < match.length; i++) {
      var ss = match[i]
      var p = ss.lastIndexOf('/')
      code = code.replace(new RegExp(ss), "from '." + ss.slice(p))
    }
    fs.writeFile(outPath, code, function (err) {
      if (err) {
        console.log(err);
      }
    })
  }
  