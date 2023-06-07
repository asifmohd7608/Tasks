/** @format */

let text = `hello`;
console.log(text);

let para = `hi, how are "you"`;
console.log(para);

let multiline = `Lorem ipsum
 dolor sit amet consectetur adipisicing elit.
  Sunt dignissimos omnis voluptatum sed eum itaque saepe nihil provident?
   Voluptatem neque nemo beatae quibusdam debitis fuga,
    repudiandae laborum aut sint nostrum.`;

console.log(
  "lorem m sed eum itaque saepe nihil provident Voluptatem neque nemo beatae quibusdam debitis fugarepudiandae laborum aut sint nostrum."
);

//interpolation

let names = ["messi", "ronaldo", "neymar", "salah", "ramos"];
let para2 = ` some famous football players are`;
names.forEach((name, index) => {
  para2 += ` ${name}`;
  index != names.length - 1 ? (para2 += `,`) : (para2 += ".");
});
console.log(para2);
