//destructuring objects

const player1 = { name: "messi", age: "35", profession: "football player" };
const { name, profession } = player1;
console.log(name, profession, (salary = "100 mln")); //destructuring and passing a default value

//nested destructuring

let obj = { a: 1, b: 2, c: { d: 3 } };
console.table([obj]);
let {
  a,
  c: { d: e },
} = obj;
console.log(a, e);

let obj2 = { a: 1, b: 2, c: { d: { e: { f: 12 } } } };
console.table([obj2]);

let {
  c: {
    d: {
      e: { f: g },
    },
  },
} = obj2;
console.log(`g = f = ${g}`);

//destructuring alias

const obj3 = { name: "neymar", club: "psg" };
console.log(obj3);
const { name: firstName } = obj3; // giving an alias, useful in avoiding name conflict
console.log(`first name :${firstName}`);

//rest

let obj4 = { x: 1, y: 2, z: 3, a: 4, b: 5 };
const { x, y, ...remaining } = obj4;
console.log(x, y, remaining);

//applications

let array = [{ id: 1 }, { id: 6 }, { id: 3 }, { id: 7 }];

for (const { id } of array) {
  console.log(`id : ${id}`);
}
//----------------------------------------
let values = { name: "messi", bdors: 7 };

const statementCreator = ({ name, bdors }) =>
  `${name} has won ${bdors} ballon d'ors`;

console.log(statementCreator(values));

//----------------------------------------
