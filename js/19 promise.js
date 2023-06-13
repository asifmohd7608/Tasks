const prompt = require("prompt-sync")({ sigint: true });

let x = prompt("enter the number");

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (x % 2 === 0) {
      resolve("function resolved, number is even");
    } else {
      reject("function rejected, number is odd");
    }
  }, 3000);
});

newPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
//--------------------promise.all------------
const fetchPokemon = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/ability/${id}/`)
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject("error"));
  });
};
Promise.all([fetchPokemon(12), fetchPokemon(14)])
  .then((data) => data.forEach((pokemon) => console.log(pokemon.name)))
  .catch((err) => console.log(err));

Promise.race([fetchPokemon(15), fetchPokemon(16)])
  .then((data) => console.log("inside promise.race ---" + data.name))
  .catch((err) => console.log(err));
