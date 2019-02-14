const Botconfig = require("../Botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("Help commands!")
   .setColor("GREEN")
   .setFooter("v-0.0.1-Alpha! Im back!")
   .setTimestamp()
   .setDescritpion("NSFW :smirk: \n```]feet, ]cfeet, ]anime-feet, \n ]gif, ]anal``` \nFUN :smile: \n```]8ball, ]coinflip, ]roll, \n ]mass-roll```");
   
   message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    aliases: ['h']
}
