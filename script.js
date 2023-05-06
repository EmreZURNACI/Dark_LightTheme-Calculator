const result = document.querySelector(".result");
const container = document.querySelector(".container");
const switchContainer = document.querySelector(".switch_box");
const buttons = document.querySelectorAll(".btn");
var degiskenBir = "";
var degiskenIki = "";
var islem = "";
function getNumber(input) {
    result.innerHTML += input.value;
}
function clearTheResultArea() {
    result.innerHTML = "";
}
function getEval(input) {
    result.innerHTML += input.value;
}
function getResult() {
    if (islem == "pow") {
        degiskenIki = result.innerHTML;
        result.innerHTML = Math.pow(degiskenBir, degiskenIki);
    }
    else if (islem == "log") {
        degiskenIki = result.innerHTML;
        result.innerHTML = getBaseLog(degiskenBir, degiskenIki);
    }
    else {
        result.innerHTML = eval(`${result.innerHTML}`);
    }
}
function getTrigo(input) {
    derece = result.innerHTML;
    if (derece > 180) {
        derece %= 180;
    }
    else if (derece < 0) {
        if (input.value == "sin") {
            derece = Math.abs(derece);
        }
        else {
            derece *= -1;
        }
    }
    switch (input.value) {
        case "sin": result.innerHTML = Math.sin(derece * Math.PI / 180); break;
        case "cos": result.innerHTML = Math.cos(derece * Math.PI / 180); break;
        case "tan":
            if (derece == "90" || derece == "270" || derece == "-90") {
                result.innerHTML = "TANIMSIZ"; break;
            }
            result.innerHTML = ((Math.sin(derece * Math.PI / 180)) / (Math.cos(derece * Math.PI / 180)));
            break;


        case "cot":
            if (derece == "0" || derece == "180" || derece == "360") {
                result.innerHTML = "TANIMSIZ"; break;
            }
            result.innerHTML = ((Math.cos(derece * Math.PI / 180)) / (Math.sin(derece * Math.PI / 180))); break;
    }
}
var c = document.querySelector('.switch_3');
function isChecked() {
    if (c.checked) {

        container.style.backgroundColor = "#7286D3";
        switchContainer.style.backgroundColor = "#7286D3";
        result.style.backgroundColor = "#8EA7E9";
        result.style.color = "#DBDFEA";
        for (i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#DBDFEA";
            buttons[i].style.color = "#1C6DD0";
        }
    } else {

        container.style.backgroundColor = "#19232b";
        switchContainer.style.backgroundColor = "#19232b";
        result.style.backgroundColor = "#929AAB";
        result.style.color = "black";
        for (i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "hwb(206 18% 73%)";
            buttons[i].style.color = "white";
        }
    }
}
function clearTheLastOne() {
    temp = result.innerText;
    dizi = temp.split("");
    dizi.pop();
    temp = dizi.join("");
    result.innerText = temp;
}
function getOtherCalc(input) {
    degiskenBir = result.innerHTML;
    result.innerHTML = "";
    islem = input.value;
}
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}