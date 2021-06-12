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

// *************************************
// turn any value into its truthy or falsy boolean value by flipping it twice:
// *************************************

let num1;
// console.log(!!num1); //false

let num2 = 10;
// console.log(!!num2);    //true

const name1 = 'Tram';
// console.log(!!name1);   //true

const name2 = '';
// console.log(!!name2);   //false

const nullValue = null;
// console.log(!!nullValue);   //false

// *************************************
// Applying Truthy and Falsy Values
// *************************************

function parseValid(str) {
  const newString = str
    .split(',')
    .map(item => item.trim())
    .filter(item => !!item)
    .join(' ');

  return newString;
}

let string1 = 'David,Mike,,Tim,,John, 10,, Jonathan';

// console.log(parseValid(string1));
// David Mike Tim John 10 Jonathan

// // Which can be further simplified as
// function parseValid(str) {
//   const newString = str.split(",")
//   .map(item =>item.trim())
//   .filter(Boolean)
//   .join(" ")

//   return newString;
// }

// *************************************
// Applying Truthy and Falsy Values on Array of different values
// *************************************

const array1 = [10, 20, 'raj', 0, [], '', NaN, 3, undefined, 50, null, 89];

const validArray = array1.filter(Boolean);

// console.log(validArray);
// (7) [10, 20, "raj", Array(0), 3, 50, 89]
