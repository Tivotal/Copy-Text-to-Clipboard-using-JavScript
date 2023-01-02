/* ---- created by Tivotal ---- */

const inputfield = document.querySelector(".input");
const copybtn = document.querySelector(".copybtn");

copybtn.addEventListener("click", function () {
  inputfield.select();

  navigator.clipboard.writeText(inputfield.value);
  alert("Text Copied");
});
