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
