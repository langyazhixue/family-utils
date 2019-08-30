const fs = require('fs')

/** 
 * 克隆文件
 */

function cloneFile(src,dst) {
  // 创建一个可读流
  var readerstream = fs.createReadStream(src)
  var writeStream = fs.createWriteStream(dst)
  readerstream.pipe(writeStream)
  console.log('程序执行完毕')
}

/** 
 * 清空目录（如果没有目录，则创建）
 */ 

function initFolder(path) {
  if(fs.existsSync(path)) {
    var files = fs.readdirSync(path) 
    files.forEach(function(file,index) {
      var curPath = path + '/' + file
      if(!fs.statSync(curPath).isDirectory()) {
        // delete file
        fs.unlinkSync(curPath)
      }
    })
  } else {
    fs.mkdirSync(path)
    console.log("create tmp dir success")
  }
}

module.exports  =  {
  cloneFile: cloneFile,
  initFolder: initFolder
} 