const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("function is resolved");
  }, 3000);
  console.log("after");
});

newPromise.then((res) => {
  console.log(res);
});
