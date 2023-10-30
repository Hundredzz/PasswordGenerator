const sliderValue = document.getElementById("slider-value");
const sliderInput = document.getElementById("slider");
const passwordBox = document.getElementById("Password");
const upperCheck = document.getElementById("Uppercase");
const lowerCheck = document.getElementById("Lowercase");
const numberCheck = document.getElementById("Number");
const symbolCheck = document.getElementById("Symbol");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~{[}]|<>/-=";

function createPassword(){
    let password = "";
    let allChar = "";
    if(upperCheck.checked === true){
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        allChar += upperCase;
    }
    if(lowerCheck.checked === true){
        password += lowerCase[Math.floor(Math.random() *lowerCase.length)];
        allChar += lowerCase;
    }
    if(numberCheck.checked === true){
        password += number[Math.floor(Math.random() * number.length)];
        allChar += number;
    }
    if(symbolCheck.checked === true){
        password += symbol[Math.floor(Math.random() * symbol.length)];
        allChar += symbol;
    }

    while(sliderInput.value > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    
    if (!upperCheck.checked && !lowerCheck.checked && !numberCheck.checked && !symbolCheck.checked) {
        passwordBox.value = "";
    } else {
        passwordBox.value = password;
    }

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

sliderInput.oninput = (() => {
    let value = sliderInput.value;
    sliderValue.textContent = value;
});

const container = document.querySelectorAll(".slider-bar");

for (let i = 0; i < container.length; i++) {
    const slider = container[i].querySelector(".slider");
    const thumb = container[i].querySelector(".slider-thumb");
    const progress = container[i].querySelector(".progress");

    function customSlider() {
        const maxVal = parseFloat(slider.getAttribute("max"));
        const sliderValue = parseFloat(slider.value); 

        let val = 0; 

        if (sliderValue < 13) {
            val = ((sliderValue - 5.85) / (maxVal - 6)) * 100 + "%"; 
        } else {
            val = ((sliderValue - 6) / (maxVal - 5.7)) * 100 + "%"; 
        }

        progress.style.width = val;
        thumb.style.left = val;
    }

    customSlider();

    slider.addEventListener("input", customSlider); 
}