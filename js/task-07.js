const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function modifiedSize() {
  const fontSizeChange = `${fontSizeControl.value}px`;
  text.style.fontSize = fontSizeChange;
}
modifiedSize();

fontSizeControl.addEventListener("input", modifiedSize);
