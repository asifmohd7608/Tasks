// string  to number

let x = "5";
console.log(Number(x), typeof Number(x));
console.log(parseInt(x), typeof parseInt(x));
console.log(parseFloat(x), typeof parseFloat(x));

// number to string
let y = 10;
console.log(String(y), typeof String(y));
console.log(y.toString(), typeof y.toString());

// date to number
let date = new Date();
console.log(date.getTime(), typeof date.getTime());
console.log(Number(date), typeof Number(date));

//date to string
let date2 = new Date();
console.log(date.toString(), typeof date.toString());
console.log(String(date), typeof String(date));

// boolean to string
let z = true;
console.log(z.toString(), typeof z.toString());
console.log(String(z), typeof String(z));

// boolean to number
let a = false;
console.log(Number(a), typeof Number(a));
