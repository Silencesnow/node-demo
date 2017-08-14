var fs=require('fs');
var stream=fs.createReadStream('index.js');

var files=fs.readdirSync(process.cwd());
files.forEach(function(file){
  if(/\.css/.test(file)){
    fs.watchFile(process.cwd()+'/'+file,function(){
      console.log('-'+file+' changed!');
    })
  }
})
