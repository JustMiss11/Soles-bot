const randomPuppy = require('random-puppy'); 
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 let reddit = ["female-toes",
               "toes",
               "male-toes",
               "girl-toes"
  ]

let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
 if(err) => {
  message.channel.send("I cant find this image. Im still in Alpha.")
  console.log(err)
 }


randomPuppy(subreddit).then(async url => {
                    await message.channel.send({
                            files: [{ 
                                  attachment: url, 
                                  name: 'toes.png' 
                          }]           
                   }).then((
    }).catch(err => console.error(err)); 

};

 module.exports.help = {
           name: 'toes', 
           aliases: ['memes']
} 
