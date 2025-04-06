// MAIN BASE
let mainArrayBase = JSON.parse(localStorage.getItem("mainArrayBase")) || [];

// CONST
const showArray = document.getElementById("show-array");
const addToArray = document.getElementById("header-add");
const showText = document.getElementById("header-show");

// FUNCTIONS
function showArrayy() {
    showText.textContent = mainArrayBase.join(", ");
    console.log("Масив показано:", mainArrayBase);
}

function addToArrayy() {
    const whatToAdd = prompt("Write your data:");
    if (whatToAdd) {
        mainArrayBase.push(whatToAdd);
        localStorage.setItem("mainArrayBase", JSON.stringify(mainArrayBase));
    }
}
