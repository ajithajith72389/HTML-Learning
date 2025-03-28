"use strict"

//console.log("Aj");

// Variables
/*
let message;
message = "RCB";
let team;
team = message
console.log(message);
console.log(team);

// value change

let name;
name = "Aj";
name = "Ajith";
console.log(name);

let $ = 3;
let _ = 15;
console.log($ + _);

//Case matters
let a = "apple";
let A = "Apple";
console.log(a +" "+ A);

// An assignment without use strict

num = 5;
console.log(num);

// const - unchanging variable;;

const myteam = "RCB";
// const myteam = "CSK";
console.log(myteam)

*/

/*

// Data Types - 8


number - pow(2, 53) -1
bigint 
string
boolean
null
undefined
symbol

object


// Bigint

const bigint = 1234567890123456789012345678901234567890n
console.log(bigint);

// String

let str = "Aj"
let str2 = "str2"
console.log(`My name is ${str}`);

// Boolean

let nameFieldChecked = true; 
let ageFieldChecked = false;

// null

let age = null;
console.log(age)
// undefined

let ag;
console.log(ag);


*/


// Type Conversion

// string conversion

// let value = true;
// console.log(typeof value);

// value = String(value);
// console.log(value);

// // Numeric Conversion

// let str = "123";
// console.log(str);
// str = Number(str);
// console.log(str);

// Operators
// let - keyword
// let x= 1
// x = -x
// console.log(x)

// String Concatenation

// let s = "Ajith" + " " + "Kumar";
// console.log(s);

// Note:: that if any of the operands is a string, then the other one is converted to a string too.

// console.log("1" + 2);
// console.log(1 + "3");
// //  1+4 = 5 + str 5 = 55 str
// console.log(1 + 4 + "5");
// // str 1 + 5 = str 15 + 6 = 156 str
// console.log("1" + 5 + 6);

// console.log(6 - '2');
// console.log('6' / '2');
// console.log(6 / 2);
// console.log("6" - 2);

// Numeric conversion 
// unary +
// let apples = "2";
// let oranges = "3";
// console.log(apples+oranges);
// console.log(+apples + +oranges);
// console.log(Number(apples) + Number(oranges));


// let n = 2;
// n *= 3 + 5; // right part evaluated first, same as n *= 8
// alert(n); // 16

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// conditional branching: if, ?

// closure

// function outer() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();
// counter(); // 1
// counter(); // 2
// counter(); // 3

// let text1 = "551";
// let text2 = "55";
// let result = text1 < text2;
// console.log(result);

// use strict ;;
// num = 5;
// console.log(num);


// num = 21; // Error: num is not defined
// age;      // Error: age is not defined
// age = 22; // Error: age is not defined
// console.log(age);


console.log(typeof undefined) // "undefined"

console.log(typeof 0) // "number"

console.log(typeof 10n) // "bigint"

console.log(typeof true) // "boolean"

console.log(typeof "foo") // "string"

console.log(typeof Symbol("id")) // "symbol"

console.log(typeof Math) // "object"  (1)

console.log(typeof null) // "object"  (2)
