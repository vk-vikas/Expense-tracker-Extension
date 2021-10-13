const saveLimit = document.getElementById("save-limit");
const resetTotal = document.getElementById("reset-total");
const limitInput = document.getElementById("limit-input");

let limit = 0;

let dataFromLocalStorage = parseInt(localStorage.getItem("limit"));

saveLimit.addEventListener("click" , () => {
    dataFromLocalStorage = limitInput.value;
    localStorage.setItem("limit" , JSON.stringify(dataFromLocalStorage));
    close();
})

resetTotal.addEventListener("click" , () => {
    localStorage.setItem("expense" , JSON.stringify(0));
})