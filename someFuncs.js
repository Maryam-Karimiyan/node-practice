const sayHi=(name=>{
    console.log(`hello this is ${name}`);
})

module.exports=sayHi

//if i just invoke it , it still works But the method shoud not have parameters
// sayHi();