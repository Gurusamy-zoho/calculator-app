

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
        Swal.fire({
            title: 'Invalid Expression',
            html: `Given correct value`,
            icon: 'error',
            confirmButtonText: `Ok`,
            position: 'center',
            width: '500px',
            heightAuto: false,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
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
