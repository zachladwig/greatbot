module.exports = function(robot) {

  let good = ['Excellent!', 'Superb!', 'Wonderful!']

  let adorableDog = 'https://www.google.com/search?q=cute+dog+gif&safe=off&tbm=isch&source=iu&ictx=1&fir=IqszrIEKjJ4dkM%253A%252CZKKsn_Qyi5y2kM%252C_&usg=__21j8Sle96yvi0ZrX_zr_78zcs44%3D&sa=X&ved=0ahUKEwi3gu3WpMXZAhVRPsAKHb-vBO8Q9QEILzAC#imgrc=IqszrIEKjJ4dkM'

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

  robot.hear(/good/, function(msg) {
    if(Math.random() > 0.8) {
        msg.send(msg.random(good))
    }
    else {
        msg.send(adorableDog)
    }
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
