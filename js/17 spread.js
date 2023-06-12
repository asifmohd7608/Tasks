//spread in arrays

const array = [1, 2, 3, 4, 5, 6];
console.log("-------array------");
const array2 = [...array];
console.log(array);
console.log("-------array2------");
console.log(array2);
//---------------------------------
let array3 = [1, 2, 3];
console.log("array 3 >");
console.log(array3);
const sum = (x, y, z) => x + y + z;
console.log("sum >");
console.log(sum(...array3));

//concatenating arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArray = [...arr1, ...arr2];
console.log("-------new array-----");
console.log(newArray);

//spread in object
console.log("------spread in object ------");
const obj1 = { name: "messi", age: 30 };
const obj2 = { club: "Barca", year: 2018 };
console.log("obj1 ------->");
console.log(obj1);
console.log("obj2 ------->");
console.log(obj2);
const result = { ...obj1, ...obj2 };
console.log("result ------>");
console.log(result);

