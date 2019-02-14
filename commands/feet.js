const randomPuppy = require('random-puppy'); 

module.exports.run = async (bot, message, args) => {

 let reddit = [
                      
                 
             
                       
                       "male-feet",
                       "female-feet", 
                       "feet"
  ]

let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

  

randomPuppy(subreddit).then(async url => {
                    await message.channel.send({
                            files: [{ 
                                  attachment: url, 
                                  name: 'Some nice feets.png' 
                          }]           
                   })
    }).catch(err => console.error(err)); 

};

 module.exports.help = {
           name: 'feet', 
           aliases: ['feets']
} 
