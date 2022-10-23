const jokes = require("give-me-a-joke");
const colors = require("colors");
// console.dir(jokes);

jokes.getRandomDadJoke((joke) => {
  console.log(joke.rainbow);
});
