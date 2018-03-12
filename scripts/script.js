const oneLinerJoke = require('one-liner-joke');
const yoMamma = require('yo-mamma').default;
const dogFacts = require('dog-facts');


module.exports = function(robot) {

  let adorableDog = 'https://media.giphy.com/media/7Jkv02RLFYj6M/giphy.gif'
  let partyTime = 'https://www.wcr.org/media/83d19a17-c3d9-43fe-9e8d-47b7175b25bcParty-Time1.png'

// here are a few lil functions to give us some random funny things

  robot.hear(/joke/, function(msg) {
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    var jokeText = getRandomJoke.body;
    msg.send(jokeText)
  })

  robot.hear(/mom/, function(msg) {
    var insult = yoMamma();
    msg.send(insult);
  })

  robot.hear(/dog/, function(msg) {
    let randomFact = dogFacts.random();
    msg.send(randomFact);
    msg.send(adorableDog);
  })

  robot.respond(/is it party time?/i, function(msg){
    let random = Math.random()
    let text;

    if(random > 0.9) {
      text = "https://gph.is/1IH3RW6"
    }
    else {
      text = "https://media.giphy.com/media/GhnctUOrT8HBe/giphy.gif"
    }
    msg.reply(text);
  });


  // And then hubot can respond if it hears a particular message

  robot.respond(/who is the best?/, function(msg) {
    msg.reply('Hubot is the best duh')
  })

}
