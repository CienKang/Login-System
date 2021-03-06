import * as checkPass from "./check-pass.js";
import * as ErrorsPara from "./all-Errors-ID.js"
var password = document.getElementById('password_field');
var currentPass = "";
var currentCond = ""

function lengthAlert() {
    currentPass = checkPass.checkLength(password.value);
    if (currentPass === "Short") {
        ErrorsPara.errorIndication(ErrorsPara.error1);
        password.style.border = '2px solid red';
    }

    if (currentPass === "Big") {
        ErrorsPara.errorIndication(ErrorsPara.error2);
        password.style.border = '2px solid red';
    }

    if (currentPass === 'Correct') {
        ErrorsPara.errorFixed(ErrorsPara.error1);
        ErrorsPara.errorFixed(ErrorsPara.error2);
        ErrorsPara.fieldFixed(password)
    }
}

function charAlert() {
    currentCond = checkPass.checkConditions(password.value);
    if (currentCond.match('Lowercase')) {
        ErrorsPara.errorIndication(ErrorsPara.error3);
        password.style.border = '2px solid red';
    }
    else {
        ErrorsPara.errorFixed(ErrorsPara.error3);
    }
    if (currentCond.match('Uppercase')) {
        ErrorsPara.errorIndication(ErrorsPara.error3);
        password.style.border = '2px solid red';
    }
    else {
        ErrorsPara.errorFixed(ErrorsPara.error3);
    }
    if (currentCond.match("Special")) {
        ErrorsPara.errorIndication(ErrorsPara.error4);
        password.style.border = '2px solid red';
    }
    else{
        ErrorsPara.errorFixed(ErrorsPara.error4);
    }
    if (currentCond.match("Numbers")) {
        ErrorsPara.errorIndication(ErrorsPara.error5);
        password.style.border = '2px solid red';
    }
    else{
        ErrorsPara.errorFixed(ErrorsPara.error5);
    }
    if(currentCond.match("Checked"))
    {
        ErrorsPara.fieldFixed(password);
    }
}

password.addEventListener('change', () => {
        charAlert();
        lengthAlert();
    })

