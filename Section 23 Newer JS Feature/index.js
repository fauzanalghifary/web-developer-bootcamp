// --------------------------------------------- DEFAULT PARAMS
function rollDie(numsides = 6) {
    return Math.floor(Math.random() * numsides) + 1;
}

// function greet(msg = "Hey There", person) {         // WRONG
function greet(person, msg = "Hey There") {             // Correct
    console.log(`${msg}, ${person}`);
}

// --------------------------------------------- SPREAD

const num = [1, 2, 3, 4, 5, 6, 7];

const theMax = Math.max(...num); //spread into separated argument
const theMax2 = Math.max(1, 2, 3, 4, 5, 6, 7); //same as above

// ---

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];
const AllPets = [...cats, ...dogs, 'Speedy'];

const theArray = [..."hello"];

// ---

const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    isFurry: true,
    family: 'Caninae'
};

const catDog = { ...feline, ...canine }; //Canine win if there is conflict

const theObject = { ..."Hello" };

const DataFromForm = {
    email: 'hehe@gmail.com',
    pass: '1234',
    username: 'heh'
};

const newUser = { ...DataFromForm, id: 12 };


// ----------------------------------------------------  REST PARAMS

// function sum() {
//     return arguments.reduce((total, el) => {
//         return total + el;
//     });
// }
//THE ABOVE DIDN'T WORK

function sum(...nums) {
    return nums.reduce((total, el) => {
        return total + el;
    });
}

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`gold medal goes to: ${gold}`);
//     console.log(`silver medal goes to: ${silver}`);
//     console.log(`Thanks to: ${everyoneElse}`);
// }

function add(...args) {
    let result = 0;
    for (let arg of args) {
        result += arg;
    }
    return result;
}

// ----------------------------------------------------  DESCTRUCTURING ARRAY

// const scores = [1, 124, 245, 245, 676, 987];

// const [gold, silver, bronze, ...loser] = scores;

// ----------------------------------------------------  DESCTRUCTURING OBJECT

// const user = {
//     email: "hehe@gmail.com",
//     username: "heh",
//     born: 1202,
//     died: 1350
// };

// const { email, username } = user;

// const { born: birthYear, died } = user;

// ----------------------------------------------------  DESCTRUCTURING PARAMS

const user = {
    email: "hehe@gmail.com",
    username: "heh",
    born: 1202,
    died: 1350
};


function fullName(user) {
    const { email, username } = user;
    return `${email} - ${username}`;
}