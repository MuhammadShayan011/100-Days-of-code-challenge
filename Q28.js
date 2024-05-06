"use strict";
let favFruits = ["Mango", "Orange", "Apple", "Banana", "Guava"];
if (favFruits.includes("Mango")) {
    console.log(`You Really like Mango`);
}
else if (favFruits.includes("Orange")) {
    console.log(`You Really like Orange`);
}
else if (favFruits.includes("Apple")) {
    console.log(`You Really like Apple`);
}
else if (favFruits.includes("Banana")) {
    console.log(`You Really like Banana`);
}
else if (favFruits.includes("Guava")) {
    console.log(`You Really like Guava`);
}
else
    (console.log(`Favorite fruit not found in the list`));
