var error1 = document.getElementById('1');
var error2 = document.getElementById('2');
var error3 = document.getElementById('3');
var error4 = document.getElementById('4');
var error5 = document.getElementById('5');
function errorIndication(obj) {
    obj.style.color = 'tomato';
}

function errorFixed(obj) {
    obj.style.color = 'green';
}

function fieldFixed(obj) {
    obj.style.border = '2px solid green';
    obj.style.borderRadius = '5px';
}
export { error1, error2, error3, error4, error5, errorIndication, errorFixed, fieldFixed };