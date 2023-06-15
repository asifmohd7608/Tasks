//destructuring arrays
console.log("-----destructuring arrays-----");

let barcaPlayers = ["messi", "suarez", "neymar"];
console.log('array >')
console.log(barcaPlayers);

const [player1, player2, player3] = barcaPlayers;
console.log("---destructured values---");
console.log(player1);
console.log(player2);
console.log(player3);

// to skip a value  add empty space
const realPlayers = ["bale", "benzema", "ronaldo"];

const [player4, , player6] = realPlayers;

console.log("---destructured values 2---");
console.log(player4);
console.log(player6);

//destructuring objects
console.log("-------destructuring objects-------");
