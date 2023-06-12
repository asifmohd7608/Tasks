const input = document.querySelector("input[type=text]");
const button = document.querySelector(".submit_btn");
const form = document.querySelector(".form");
const result = document.querySelector(".result");

const add = (values) => {
  let sum = 0;
  try {
    values.forEach((value) => {
      if (isNaN(parseInt(value))) {
        throw "enter only number";
      }
      sum += parseInt(value);
    });
    return `result : ${sum}`;
  } catch (e) {
    return `${e}`;
  } finally {
    console.log("this will run every time");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let values = input.value.split(" ");
  result.innerHTML = add(values);
});
