const oneLinerJoke = require('one-liner-joke');
const yoMamma = require('yo-mamma').default;
const dogFacts = require('dog-facts');


module.exports = function(robot) {

  let good = ['Excellent!', 'Superb!', 'Wonderful!']
  let adorableDog = 'https://media.giphy.com/media/7Jkv02RLFYj6M/giphy.gif'

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
    msg.send(randomFact)
  })

  robot.hear(/dog picture/, function(msg) {
    msg.send(adorableDog)
  })

  robot.respond(/are you there?/i, function(msg){
    msg.reply('Yes, usually here, and listening.');
  });


  // And then hubot can respond if it hears a particular message

  robot.respond(/who is the best?/, function(msg) {
    msg.reply('Hubot is the best duh')
  })

}





//
//
//     robot.respond(/is it a (weekend|holiday)\s?\?/i, function(msg){
//         var today = new Date();
//
//         msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
//     });
//
//     robot.hear(/i did it/i, function(msg){
//         msg.send("Congratulations! Good job!");
//     });
//
//     robot.respond(/are you there?/i, function(msg){
//         msg.reply('Yes, usually here, and listening.');
//     });
//
//     robot.respond(/convert \$(.*) to btc/i, function(res){
//         var usd = res.match[1];
//         res.reply('That is about ' + usd * 0.0024 + ' in BTC');
//     });
//
// }
