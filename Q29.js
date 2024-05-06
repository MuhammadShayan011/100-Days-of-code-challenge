"use strict";
let user_names = ["admin", "user1", "user2", "user3", "user4"];
user_names.forEach(user_name => {
    if (user_name == "admin") {
        console.log(`Hello admin, would you like to see status report`);
    }
    else {
        console.log(`Hello ${user_name}, thank you for logging again `);
    }
});
// user_names.length = 0;
// if (user_names.length == 0){
//     console.log(`We need to find some users`)
// } else {}
let newuser = ["admin", "User1", "user5", "user6", "user7"];
newuser.forEach(newUser => {
    if (user_names.some(user_name => user_name.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} This username is already exists`);
    }
    else {
        console.log(`${newUser} is available`);
    }
});
