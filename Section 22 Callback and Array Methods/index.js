// -------------------------------------- FOR EACH METHODS

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function (el) {
//     console.log(el);
// });

// for (let el of numbers) {
//     console.log(el);
// }


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Parasite',
//         score: 97
//     }
// ];

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}`);
// });

// for (let movie of movies) {
//     console.log(`${movie.title} - ${movie.score}`);
// }

// ------------------------------------------------------ MAP METHODS

// Similar to forEach (they accept a callback), but map methods
// generate a new array using the return value

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubles = numbers.map(function (num) {
//     return num * 2;
// });

// console.log(doubles);

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Parasite',
//         score: 97
//     }
// ];

// const title = movies.map(function (movie) {
//     return movie.title;
// });

// console.log(title);


// ------------------------------------------------------ ARROW FUNCTION

// const add = function (x, y) {
//     return x + y;
// };

// const add2 = (x, y) => {
//     return x + y;
// };

// const square = (x) => {
//     return x ** 2;
// };

// const square2 = x => x ** 2;

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// };

// const rollDie2 = () => (
//     Math.floor(Math.random() * 6) + 1
// );

// const add3 = (a, b) => a + b;

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Parasite',
//         score: 97
//     }
// ];

// // const title = movies.map(function (movie) {
// //     return movie.title;
// // });

// const new_movies = movies.map((movie) => {
//     return movie.title;
// });

// const new_movies2 = movies.map((movie) => movie.title);


// ------------------------------------------------------ setTimeout and setInterval

console.log("Hello");

setTimeout(() => {
    console.log("Are you still there?");
}, 3000);

setInterval(() => {
    console.log(Math.random());
}, 3000);

// ------------------------------------------------------ FILTER METHOD

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let odd = numbers.filter(n => {
//     return n % 2 === 1;
// });

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Parasite',
//         score: 100
//     }
// ];

// let perfectMovie = movies.filter(movie => {
//     return movie.score === 100;
// });

// let perfectTitle = movies.filter(movie => movie.score === 100).map(movie => movie.title);

// ------------------------------------------------------ SOME AND EVERY
// return true or false

// const words = ['dog', 'cat', 'bird'];

// let isAllLong = words.every(word => {
//     return word.length > 3;
// });

// let isSomeLong = words.some(word => {
//     return word.length > 3;
// });


// ------------------------------------------------------ REDUCE METHOD

// const numbers = [1, 2, 3, 0, 5, 6, 7, -8, 9, 10];

// const theTotal = numbers.reduce((total, num) => {
//     return total + num;
// });

// const theMin = numbers.reduce((min, num) => {
//     if (num < min) {
//         return num;
//     } return min;

// });

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Parasite',
//         score: 100
//     },
//     {
//         title: 'Hoho',
//         score: 60
//     }
// ];

// const lowestRate = movies.reduce((min, movie) => {
//     if (movie.score < min.score) {
//         return movie;
//     } return min;
// }).title;


// const evens = [2, 4, 6, 8];
// const theSum = evens.reduce((sum, num) => sum + num, 100);  //100 is initial value

// ------------------------------------------------------ ARROW FUNCTION AND THIS

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};



const person2 = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;   //IF USING ARROW, WILL PRODUCE UNDEFINED
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName()); //IF USING NORMAL FUNCTION, WILL PRODUCE ERROR
        }, 3000);
    }
};

// An arrow function doesn't have its own this. So, it will inherit.
