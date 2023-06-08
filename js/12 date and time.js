const prompt = require("prompt-sync")({ sigint: true });
console.log("------date-----");
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getTime());
console.log(new Date().getHours());
console.log(
  "+ " +
    Math.floor(Math.abs(new Date().getTimezoneOffset()) / 60).toString() +
    " hours " +
    Math.floor(Math.abs(new Date().getTimezoneOffset()) % 60).toString() +
    " minutes"
);

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
const date = new Date("june 08, 2023 11:36:00");
date.setDate(06);
console.log(date);
console.log(date.toString());
console.log(Date.now() / (1000 * 60 * 60 * 24 * 365) + " years from 1970");

console.log("-------find day-------");
const month = prompt("enter month in full : ");
const day = prompt("enter day in dd : ");
const year = prompt("enter year in yyyy : ");

const date2 = new Date(`${month} ${day} ${year}`);
console.log(`day : ${days[date2.getDay() - 1]}`);
