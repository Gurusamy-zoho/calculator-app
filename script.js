

let inputBox = document.getElementById("inputBox");

function display(value) {
    inputBox.value += value; 
}

function clearInput() {
    inputBox.value = ""; 
}

function calculate() {
    try {
        inputBox.value = eval(inputBox.value.replace('x', '*'));  
    } catch (error) {
        alert("Invalid Expression"); 
    }
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("button").forEach(button => {
        if (button.innerText === "=") {
            button.addEventListener("click", calculate);
        } else if (button.innerText === "C" || button.innerText === "AC") {
            button.addEventListener("click", clearInput);
        }
    });
});
