let x = 4;

// for loop
console.log("for loop");
for (let i = 1; i <= x; i++) {
  console.log(`iteration count ${i}`);
}
let array = [1, 2, 3, 4];

//for of
console.log("for of");
for (const el of array) {
  console.log(`for of loop count ${el}`);
}
// for in
console.log("for in");
for (const y in array) {
  console.log(`for in loop count ${y}`);
}

// while loop
console.log("while loop");
while (x <= 8) {
  console.log(`while loop current value of x  ${x}`);
  x++;
}

// do while
console.log("do while loop");
do {
  console.log(`do while loop current value of x  ${x}`);
  x++;
} while (x <= 12);
