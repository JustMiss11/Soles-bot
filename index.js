const botconfig = require("./Botconfig.json");
//const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
//const db = require("quick.db");
const ms = require("ms");
const bot = new Discord.Client();
const Enmap = require('enmap');
//lconst YouTube = require('simple-youtube-api');
//const ytdl = require('ytdl-core');

//const youtube = new YouTube(botconfig.GOOGLE_API_KEY);
const PREFIX = botconfig.prefix;

require("eventHandler")(bot)

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
//wrf
});

bot.on("message", async message => {
  
 if(message.author.bot) return;	//message.channel.reply("Bot users are not allowed to use commands!");
 if(!message.startsWith(PREFIX)) return undefined;
 if(message.channel.type === "dm") return message.author.send(":x: | Commands dont work in DM's. Try using it in a server.");
  
  let user = message.mentions.members.first() || message.author
 // let bal = await db.fetch(`money_${user.id}`)
  let messageArray = message.content.split(" ");
  let msg = messageArray[0];
//  let prefix = botconfig.prefix;
//  let modR = "Moderator"; //mod role
 // let adminR = "Administrator";	
  let args = messageArray.slice(1);	
  //const searchString = args.slice(1).join(' ');
 // const url = args[1];
  //const serverQueue = queue.get(message.guild.id);
	
});

bot.login(process.env.token)
