const name = "neymar jr";
console.log(name.charAt(3));
console.log(name.indexOf("r"));
console.log(name.length);
console.log(name.replace("jr", ""));
console.log(name.slice(3, 5));
console.log(name.split([,], [3])); //[seperator],[limit]
console.log(name.toUpperCase());

// date
console.log("------date-----");
console.log(new Date().getDate());
console.log(new Date().getTime());
console.log(new Date().getHours());
console.log(
  "+ " +
    Math.floor(Math.abs(new Date().getTimezoneOffset()) / 60).toString() +
    " hours " +
    Math.floor(Math.abs(new Date().getTimezoneOffset()) % 60).toString() +
    " minutes"
);

//reduce
const array = [1,2,3,4];

const arraySum = array.reduce((accum, num) => {
  return accum + num;
});
console.log(`array sum using reducer: ${arraySum}`);
