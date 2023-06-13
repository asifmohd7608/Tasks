const prompt = require("prompt-sync")({ sigint: true });

//function
const sum = (x, y, callbackFn) => {
  const result = x + y;
  callbackFn(result);
};

//callback funcrion
const print = (data) => {
  console.log(`sum : ${data}`);
};

sum(2, 6, print); //passing in the callback function

const pokemon = (id, cb) => {
  fetch(`https://pokeapi.co/api/v2/ability/${id}/`) //requires node 18
    .then((res) => res.json())
    .then((data) => {
      cb(data);
    })
    .catch((err) => console.log("error"));
};

let id = prompt("enter a valid poke id number");

pokemon(id, (data) => {
  console.log(data.name);
});
