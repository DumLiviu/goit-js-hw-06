const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", writeName);
function writeName() {
  if (inputName.value === "") {
    outputName.textContent = "Anonymous";
  }
  outputName.textContent = inputName.value;
}
