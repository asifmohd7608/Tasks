document.cookie = "name=asif; SameSite=lax";
document.cookie = "place=kollam; SameSite=Strict";

const btn = document.getElementById("delete_btn");

btn.addEventListener("click", () => {
  document.cookie =
    "name=hi; SameSite=Strict; expires=wednesday, 07 june 2023 00:00:00";
});
console.log(document.cookie);
