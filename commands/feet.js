const randomPuppy = require('random-puppy'); 

module.exports.run = async (bot, message, args) => {

 let reddit = [
                      
                 //RELOAD
              //  Lol
                       
                       "male-feet",
                       "female-feet", 
                       "feet"
  ]

let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

 message.channel.startTyping(); 

randomPuppy(subreddit).then(async url => {
                    await message.channel.send({
                            files: [{ 
                                  attachment: url, 
                                  name: 'Some nice feets ;)' 
                          }]           
                   }).then(() => message.channel.stopTyping()); 
    }).catch(err => console.error(err)); 

};

 module.exports.help = {
           name: 'feet', 
           aliases: ['feets']
} 
