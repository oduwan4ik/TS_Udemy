"use strict";
function addMe(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
const result = addMe(number1, number2, printResult, resultPhrase);
// console.log(result);
console.log('Time to get started...');
