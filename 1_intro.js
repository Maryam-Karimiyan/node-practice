// console.log(__dirname);//address of this directory
// console.log(__filename);//address of this js file


//require
//module
const names=require('./someNames');
const sayHi=require('./someFuncs');
// console.log(names);
sayHi(names.john)
//process