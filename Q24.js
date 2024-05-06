"use strict";
let fruits = ["Apple", "Banana", "Grapes"];
console.log(`Equality in string`);
console.log("banana" == "banana"); //true
console.log("banana" == "Banana"); // false
console.log("BANANA".toLowerCase() == "banana"); //true
console.log(`Numerical Test`);
console.log(5 < 10); //True
console.log(10 == 100); //false
console.log(`Test with using && and || operators`);
console.log(true && false);
console.log(true || false);
console.log(`Array Test`);
console.log(fruits.includes("Mango")); //false
console.log(fruits.includes("Banana")); //true
