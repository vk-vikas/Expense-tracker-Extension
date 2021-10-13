const inputEl = document.getElementById("amount");
const buttonEl = document.getElementById("button-el");
const display = document.getElementById("display-total");
const displayLimit = document.getElementById("display-limit");
let total = 0;

let dataFromLocalStorage = parseInt(
  JSON.parse(localStorage.getItem("expense"))
);

if (dataFromLocalStorage) {
  total = dataFromLocalStorage;
  display.innerHTML = total;
}

buttonEl.addEventListener("click", () => {
  total += parseInt(inputEl.value);
  display.innerHTML = total;
  inputEl.innerHTML = "";
  localStorage.setItem("expense", JSON.stringify(total));
});

let limitFromLocalStorage = parseInt(JSON.parse(localStorage.getItem("limit")));

if (limitFromLocalStorage) {
  displayLimit.innerHTML = limitFromLocalStorage;
}

//localStorage.clear();
