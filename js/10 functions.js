function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

// arrow function
const multiply = (x, y) => x * y;
console.log(multiply(4, 3));

//anonymous function
const substract = function (a, b) {
  return a - b;
};
console.log(substract(10, 5));

// higher order functions

// - functions that accepts fn's as arguments or returns a fn

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterFunction(array, fn) {
  const filteredArr = [];
  array.forEach((el) => {
    fn(el) ? filteredArr.push(el) : null;
  });
  return filteredArr;
}

const findEven = (x) => x % 2 === 0;
const findOdd = (x) => x % 2 !== 0;

const evenNumbers = filterFunction(array, findEven);
const oddNumbers = filterFunction(array, findOdd);

console.log(evenNumbers, oddNumbers);

// inbuilt higher order fn's = map,filter,reduce

//map

const doubledArray = array.map((el) => el * 2);
console.log(` map doubled array ${doubledArray}`);

//filter

const oddArray = array.filter((el) => el % 2 !== 0);
console.log(` filtered odd array ${oddArray}`);

//reduce

const arraySum = array.reduce((accum, num) => {
  return accum + num;
});
console.log(`array sum using reducer: ${arraySum}`);
