const header = document.querySelector(".main_header");
const container = document.querySelector(".container");

header.addEventListener("mouseover", () => {
  header.classList.add("change_color_on_hover");
});

header.addEventListener("mouseout", () => {
  header.classList.remove("change_color_on_hover");
});

window.addEventListener("scroll", () => {
  document.body.style.backgroundColor = "#000000";
  document.body.style.color = "#999999";
});
window.addEventListener("keydown", () => {
  document.body.style.backgroundColor = "rgb(255,255,255)";
  document.body.style.color = "#000000";
});
