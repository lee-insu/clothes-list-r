
const testFolder = './public/static/img/22';
const fs = require('fs');
 
fs.readdir(testFolder, function(err, filelist){
  console.log(filelist);
})