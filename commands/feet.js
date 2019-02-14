const Discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'feet'})
    .end((err, response) => {
    //  var embed = new Discord.RichEmbed()
     // .setAuthor("Some nice feets here ;)")
     // .setColor("RED")
     // .setImage(response.body.message);
    // msg.channel.send(embed)
     msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("This isn't NSFW channel!")
  }
};
module.exports.help = {
           name: 'pgif', 
           aliases: ['tits']
} 
