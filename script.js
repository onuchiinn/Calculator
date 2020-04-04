
'use strict';



let buttonPlus = document.querySelector('.plus');
let buttonMinus = document.querySelector('.minus');
let buttonMultiply = document.querySelector('.multiply');
let buttonDivision = document.querySelector('.division');


let numberOne = prompt('Введите первое число', 1);
let numberTwo = prompt('Введите второе число', 2);

let result;



buttonPlus.addEventListener('click', function (evt) {
    alert( result = +numberOne + +numberTwo);
});

buttonMinus.addEventListener('click', function (evt) {
    alert( result = +numberOne - +numberTwo);
});

buttonMultiply.addEventListener('click', function (evt) {
    alert( result = +numberOne * +numberTwo);
});

buttonDivision.addEventListener('click', function (evt) {
    alert( result = +numberOne / +numberTwo);
});