let x = 4;
let y = 2;

//arithmetic operator

console.log("arithmetic operators");

console.log(x + y); //addition
console.log(x - y); //substraction
console.log(x * y); //multiplication
console.log(x / y); //division
console.log(x % y); //modulus - division reminder
console.log(x ** y); //exponential
x++; //increment
console.log(x);
y--; //decrement
console.log(y);

//assignment operator

console.log("assignment operators");

console.log((x += y));
console.log((x -= y));
console.log((x *= y));
console.log((x /= y));
console.log((x %= y));
console.log((x **= y));

//comparison operators

console.log("comparison operators");

let a = 2;
let b = "2";
let c = 3;

console.log(a == b); //equal to
console.log(a === b); //equal value and type
console.log(a != b); //not equal
console.log(a !== b); //not equal value and type
console.log(a < c); //less than
console.log(a > c); //greater than
console.log(a <= 2); //less than or equal to
console.log(a >= 2); //greater than or equal to

// terinary  operator
let p = 1;
let q = 2;
let r = 4;

p == q
  ? p == r
    ? console.log("p is same as both q and r")
    : p < r
    ? console.log("p is same as q but less than r")
    : console.log("p is same as q but grater than r")
  : p < q
  ? p == r
    ? console.log("p is less than q and is same as r")
    : p < r
    ? console.log("p is less than both q and r")
    : console.log("p is less than q and greater than r")
  : p == r
  ? console.log("p is greater  than q and is same as r")
  : p < r
  ? console.log("p is greater than q but less than r")
  : console.log("p is greater than both q and r");
