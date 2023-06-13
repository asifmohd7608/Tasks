const button = document.getElementById("btn");
const result = document.getElementById("result");
const input = document.querySelector("input[type=text");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fetchData = async (id) => {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/ability/${id}/`);
      const response = await data.json();
      result.innerHTML = `pokemon name : ${response.name}`;
    } catch (error) {
      result.innerHTML = "couldnt fetch details";
    }
  };

  fetchData(parseInt(input.value));
});
