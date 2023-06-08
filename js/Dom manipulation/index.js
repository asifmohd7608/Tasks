const container = document.querySelector(".container");
const color_gen_btn = document.getElementById("color_gen_btn");
const coloured_div = document.querySelector(".coloured_div");

color_gen_btn.addEventListener("click", () => {
  if (container.hasChildNodes()) {
    container.removeChild(container.children[0]);
  }

  const random = (min, max) => {
    let random = Math.random();
    let randomNumber = random * (max - min) + min;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
  };
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);

  const color = `rgb(${r},${g},${b})`;
  const newChild = document.createElement("div");
  newChild.style.backgroundColor = color;
  newChild.setAttribute("class", "coloured_div");
  newChild.innerHTML = `<p>${color}</p>`;
  container.appendChild(newChild);
});

container.addEventListener("click", () => {
  const style = container.children[0].getAttribute("style");
  style !== undefined
    ? navigator.clipboard.writeText(style?.slice(18, 35))
    : navigator.clipboard.writeText("rgb(255,255,255)");
  alert("copied to clipboard");
});
