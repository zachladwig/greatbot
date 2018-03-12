// const knockknock = require('knock-knock-jokes')
const oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();

var jokeText = getRandomJoke.body;

console.log(getRandomJoke);

//
// console.log(knockknock())
//
//
// //browserify app.js -o bundle.js
