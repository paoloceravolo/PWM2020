const fs = require('fs');
let arg = process.argv;

fs.readFile(arg[2], 'utf-8', readfile);

function readfile(err, data){
console.log(data.length);
//console.log("pippo")
};