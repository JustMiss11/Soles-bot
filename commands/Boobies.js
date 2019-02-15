const randomPuppy = require('random-puppy'); 

module.exports.run = async (bot, message, args) => {

 let reddit = ["feet",
               "male-feet",
               "female-feet"
  ]

let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

// message.channel.startTyping(); 

randomPuppy(subreddit).then(async url => {
                    await message.channel.send({
                            files: [{ 
                                  attachment: url, 
                                  name: 'FEETS!.png' 
                          }]           
                   })//.then(() => message.channel.stopTyping()); 
    }).catch(err => console.error(err)) && message.chsnnel.send("Something went wrong.. Try using it again. (Mind that this bot is in alpha.)"); 

};

 module.exports.help = {
           name: 'feet', 
           aliases: ['memes']
} 
