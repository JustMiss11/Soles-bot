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
//const PREFIX = botconfig.prefix;

//require("./eventHandler")(bot)


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

  fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
        let props = require(`./commands/${ f }`);
        props.fileName = f;
        bot.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        });
    });
});

bot.on("ready", async () => {
	console.log(`${bot.user.username} is online`)
    // bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/Strandable"});

    let statuses = [
       //shows in how many servers I am!
        "my prefix is ]", //my Prefix!
        "start with !=help 1", //simple help!
        "Version: 0.0.1-alpha!", //Bots version!
        `over ${bot.users.size} users!` //shows how many users im managing!
    ]
//reload ;)
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "LISTENING"});
        bot.user.setStatus("dnd"); //online, idle, dnd
    }, 5000)

});

bot.on("message", async message => {
  
 if(message.author.bot) return;	//message.channel.reply("Bot users are not allowed to use commands!");
// if(!message.content.startsWith(PREFIX)) return undefined;
 if(message.channel.type === "dm") return message.author.send(":x: | Commands dont work in DM's. Try using it in a server.");
  
  let user = message.mentions.members.first() || message.author
 // let bal = await db.fetch(`money_${user.id}`)
  let messageArray = message.content.split(" ");
  let msg = messageArray[0];
  let prefix = "]";
  //if(!msg.content.startsWith(prefix)) return;
//  let modR = "Moderator"; //mod role
 // let adminR = "Administrator";	
  let args = messageArray.slice(1);	
  //const searchString = args.slice(1).join(' ');
 // const url = args[1];
  //const serverQueue = queue.get(message.guild.id);
  
  let command = args.shift();
  let commandFile = require(`./commands/${command}.js`);
  commandFile.run(bot, message, args);

});

bot.login(process.env.token)
