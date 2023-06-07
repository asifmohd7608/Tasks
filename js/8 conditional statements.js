let x = 5;
let y = 6;

//if ,else if, else
if (x > y) {
  console.log("x is greater than y");
} else if (x < y) {
  console.log("x is less than y");
} else {
  console.log("x and y are same");
}

let z = Math.floor(Math.random() * 10);
console.log('switch :')
console.log(`z : ${z}`);
switch (z) {
  case 0:
    console.log(`your lucky number is 0`);
    break;
  case 1:
    console.log(`your lucky number is 1`);
    break;
  case 2:
    console.log(`your lucky number is 2`);
    break;
  case 3:
    console.log(`your lucky number is 3`);
    break;
  case 4:
    console.log(`your lucky number is 4`);
    break;
  case 5:
    console.log(`your lucky number is 5`);
    break;
  case 6:
    console.log(`your lucky number is 6`);
    break;
  case 7:
    console.log(`your lucky number is 7`);
    break;
  case 8:
    console.log(`your lucky number is 8`);
    break;
  default:
    console.log(`your lucky number is 9`);
}
console.log('terinary :')
x % 2 === 0
  ? console.log("x is completely divisible by 2")
  : console.log("x is not completely divisible b 2");
