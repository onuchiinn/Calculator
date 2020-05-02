"use strict"

// const numberNine = document.querySelector('#numberNine');
// const numberEight = document.querySelector('#numberEight');
// const numberSeven = document.querySelector('#numberSeven');
// const numberSix = document.querySelector('#numberSix');
// const numberFive = document.querySelector('#numberFive');
// const numberFour = document.querySelector('#numberFour');
// const numberThree = document.querySelector('#numberThree');
// const numberTwo = document.querySelector('#numberTwo');
// const numberOne = document.querySelector('#numberOne');
// const numberZero = document.querySelector('#numberZero');
// const divideOp = document.querySelector('#divide');
// const multiplyOp = document.querySelector('#multiply');
// const minusOp = document.querySelector('#minus');
// const plusOp = document.querySelector('#plus');
const equallyOp = document.querySelector('#equally');
const resetOp = document.querySelector('#reset');
let buttons = document.querySelector('.shell__buttons_all');
let valueDisplay = document.querySelector('#valueDisplay');

// shell.addEventListener('clickdown', function (event) {
//     valueDisplay.value = null;
// });


buttons.addEventListener('click', function (event) {
    if (event.target.value === undefined) {
        valueDisplay.value += "";
    } else {
        valueDisplay.value += event.target.value;
    }
});

equallyOp.addEventListener('click', function (event) {
    valueDisplay.value = eval(valueDisplay.value);
});

resetOp.addEventListener('click', function (event) {
    valueDisplay.value = "";
});





