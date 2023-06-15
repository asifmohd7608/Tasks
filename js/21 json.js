//to convert json to object - JSON.parse()
//to convert object to json - JSON.stringify()

let object = { name: "messi", age: 35 };
console.log("---object---->");
console.log('type'  +object);
console.log(typeof object);

//converting to json
const json1 = JSON.stringify(object);
console.log("----converted to json --->");
console.log(json1);
console.log(typeof json1);

//converted back to object
let object2 = JSON.parse(json1);
console.log("----converted back to object >");
console.log(object2);
console.log(typeof object);
