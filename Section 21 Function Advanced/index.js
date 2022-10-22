//--------------- Function Scope

// let totalEggs = 0;
// function collectEggs() {
//   totalEggs = 6;
//   console.log(totalEggs);
// }

// console.log(totalEggs);
// collectEggs();

//--------------- Block Scope (LET AND CONST IS BLOCKED SCOPE)

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14;
//   let msg = "HI!";
// }

// console.log(radius);
// console.log(PI); //it will produce error because let and const is block scope

//--------------- Lexical Scope (INNER FUNC CAN ACCES VARIABLE IN OUTER FUNC)

// function bankRobbery() {
//   const heroes = ["Spiderman", "Wolverine"];
//   function cryForHelp() {
//     for (let hero of heroes) {
//       console.log(`please help me, ${hero}`);
//     }
//   }
//   cryForHelp();
// }

// bankRobbery();

//--------------- Function Expression

// const add = function (x, y) {
//   return x + y;
// };

// add(3, 4);
// console.log(add(3, 4));

//--------------- Higher Order Function

// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);

//--------------- Returning Function

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("Congrats!");
//         };
//     } else {
//         return function () {
//             console.log("huh :(!");
//         };
//     }
// }


// function makeBetweeenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     };
// }

// const isChild = makeBetweeenFunc(0, 18);

//--------------------------------------- Defining Methods
// methods is a function that has been placed as property of an object

// const myMath = {
//     PI: 3.14,
//     square: function (num) {
//         return num ** 2;
//     },
//     add(x, y) {
//         return x + y;
//     }
// };

//--------------------------------------- THIS KEYWORD

// const cat = {
//     name: "Blue Steele",
//     color: "grey",
//     breed: "scottish",
//     meow() {
//         console.log(this);
//         console.log(`I am ${this.color}`);
//     }
// };

// const meow2 = cat.meow; //this.color will be undefined because of invocation context


//--------------------------------------- TRY and CATCH

// try {
//     hello.toUpperCase();
// } catch {
//     console.log("error");
// }

// console.log("after");

// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         console.log(e);
//         console.log("please input string");
//     }
// }