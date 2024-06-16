let counterValue = 0;
const value = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');

decrement.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});

const increment = document.querySelector('button[data-action="increment"]');
increment.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});

function updateCounter() {
  value.textContent = counterValue;
}
