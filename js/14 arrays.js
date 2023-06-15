// declaration

const players = ["messi", "ronaldo", "neymar", "suarez"];
console.log(players[0]);

// changing values

players[2] = "iniesta";

console.log(players);

//adding values
console.log("------adding values------");
players.push("xavi");
console.log(players);

//join elements
// tostring() -joins using ,
console.log("-----toString()------");
console.log(players.toString());

//join()
//joins using the seperator provided
console.log("-----join()------");
console.log(players.join("-"));

// properties
console.log("-----length-----");
console.log(players.length);

const players2 = ["pedri", "vinicius", "gavi", "phoden"];
console.log("------players2 array-----");
console.log(players2);

console.log("-----concat-----");
const allPlayers = players.concat(players2);
console.log(allPlayers);

console.log("----pop()----");
console.log(allPlayers.pop());

//shifting
console.log("-----shift()----");
console.log(allPlayers.shift()); // removes first element

//unshift
console.log("-----unshift-----");
console.log(allPlayers.unshift("araujo")); //returns new length
console.log(allPlayers);

//flattening

const array_2d = [
  [1, 2],
  [3, 4],
  5,
  6,
  [
    [7, 8],
    [9, 10],
    [[[11, 12], 13], 14],
  ],
];
console.log(array_2d);

console.log("----flat()----");
console.log(array_2d.flat());
console.log("----flat(2)----");
console.log(array_2d.flat(2));
console.log("----flat(3)----");
console.log(array_2d.flat(3));
console.log("----flat(4)----");
console.log(array_2d.flat(4));

//splice and slice
//splice - adds new items to an array
//splice - slices items from an array

console.log("----players----");
console.log("current array >");
console.log(players);

console.log("-----splice(1, 2, ramos, de paul)-----");
console.log(players.splice(1, 2, "ramos", "de paul") + " - removed items");
console.log("modified array >");
console.log(players);

//slice
console.log('-----slice(2)-----')
const slicedArray = players.slice(2); // starts slicing from index 2 to the end
console.log('sliced array >')
console.log(slicedArray)
console.log('original array >')
console.log(players)//unchanged

console.log('-----slice(2,3)------')
console.log("sliced array >");
console.log(players.slice(2, 4));// slices from 2 upto 4th index, but not including.
