// *************************************
// Truthy and Falsy values in JavaScript
// *************************************

// *************************************
// 1. empty, undefined, null
// *************************************

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

// *************************************
// checking if a value is truthy or falsy by passing it to the Boolean constructor function
// *************************************

function isTruthy(value) {
  return Boolean(value);
}

// console.log('NaN: ', isTruthy(NaN)); //false
// console.log('[]: ', isTruthy([])); //true
// console.log('{}: ', isTruthy({})); //true
// console.log("'': ", isTruthy('')); //false
// console.log('0: ', isTruthy(0)); //false
// console.log('-0: ', isTruthy(-0)); //false

// console.log('null: ', isTruthy(null));  //false
// console.log('undefined: ', isTruthy(undefined));  //false
// console.log('true: ', isTruthy(true)); //true
// console.log('false:', isTruthy(false)); //false


