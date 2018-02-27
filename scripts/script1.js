module.exports = function(robot) {

  robot.hear(/niche/, function(msg) {
    msg.send('niche!!!!')
  })

  robot.respond(/who is the best?/, function(msg) {
    msg.send('Hubot is the best duh')
  })

  robot.respond(/Luiz?/, function(msg) {
    msg.send('Luiz stinks, Zach is better')
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
