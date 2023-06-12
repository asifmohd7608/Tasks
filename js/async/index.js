const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
  async function fetchData() {
    let data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("fetched data");
      }, 3000);
    });
    result.innerHTML = await data;
  }

  fetchData();
});
