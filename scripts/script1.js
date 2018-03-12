const oneLinerJoke = require('one-liner-joke');

module.exports = function(robot) {

  let good = ['Excellent!', 'Superb!', 'Wonderful!']

  let adorableDog = 'https://media.giphy.com/media/7Jkv02RLFYj6M/giphy.gif'

  robot.hear(/joke/, function(msg) {
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    var jokeText = getRandomJoke.body;
    msg.send(jokeText)
  })

  robot.hear(/niche/, function(msg) {
    msg.send('niche!!!!')
  })

  robot.respond(/who is the best?/, function(msg) {
    msg.send('Hubot is the best duh')
  })

  robot.hear(/Luiz/, function(msg) {
    msg.send('Luiz stinks, Zach is better')
  })

  robot.respond(/attack/, function(msg) {
    msg.send('@bluebot javascript')
  })

  robot.hear(/(good)+/, function(msg) {
    if(Math.random() > 0.8) {
        msg.send(msg.random(good))
    }
    else {
        msg.send(adorableDog)
    }
  })

  robot.hear(/\d+/, function(msg) {
    msg.send('i love numbers too!')
  })


  robot.hear(/\bcat\b/, function(msg) {
    msg.send('i love numbers too!')
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
