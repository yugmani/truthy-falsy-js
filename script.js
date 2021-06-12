// *************************************
// Truthy and Falsy values in JavaScript
// *************************************

// 1. empty, undefined, null

function isFalsy(value) {
  if (value) {
    return 'Value: ' + value;
  } else {
    return 'It is falsy.';
  }
}

// const name = '';
// console.log(isFalsy(name));
// It is falsy.

// const city = null;
// console.log(isFalsy(city));
// // It is falsy.

// const age;
// console.log(isFalsy(age));
// Uncaught TypeError
