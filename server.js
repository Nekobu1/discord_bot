
const Discord = require("discord.js");

const client = new Discord.Client();
// Status:
client.on("ready", async () => {
  console.log(`Bot is Ready!`);
  client.user.setActivity(`with penguins | pe!commands`)
})
//Random Image (Idk how to do this haaaaaalp)
client.on('attachment', message => {
  if (message.content === 'pe!penguin') {
    message.channel.send ("Who Doesn't love penguins?")
    var images = [new Discord.MessageAttachment ('download.jpeg', 'download (1).jpeg', 'download (2).jpeg', 'yespengu.jpeg')];
    var image = Math.floor(Math.random() * images.length);
    message.channel.send(images[image]);
  }
});


//Commands and Ars
client.on("message", msg =>{

    if (msg.content === 'pe!pos'){

      var poss = ["You are an amazing person, and I hope you are having a great day!", "Everything you do has a reason! Don't worry about messing up, you learn from failiure!", "You matter! Think about how different the world would be if you didn't exist! The Cute-o-meter:tm: would go way down if you weren't here!", "You are loved, and if you disagree then you are loved even more, I mean I love you", "You expand in abundance, success and love every day, as you inspire those around you to do the same."];
  var pos = Math.floor(Math.random() * poss.length);
  msg.reply(poss[pos]);
  
  }
//   if (msg.content === ("pe!github")){
//       msg.channel.send ("Here is my Owner's code, enjoy! \ https://github.com/penguin-hacks/discord_bot/tree/master ")
//     }
        
    if (msg.content === "no you don't"){
      msg.channel.send ("yes he does")
    }
    if (msg.content === "penguins suck"){
        msg.reply ("well they suck less than you do")
    }
    if (msg.content === ("I hate you")){
      msg.channel.send ("*eats popcorn*")
    }
    if (msg.content === ("hey")){
      msg.channel.send ("wassup")
    }
     if (msg.content === ("lmfao")){
      msg.channel.send (":rofl:")
    }
  if (msg.content === ("I have a joke")){
      setTimeout(function(){ 
        msg.channel.send("LMFAOOOO"); 
    }, 2000);
    }
      
      if (msg.content === ("corona")){
        msg.channel.send ("good thing penguins can't get it!")
      }
      client.on('message', async message => {
        if (message.content ==='pe!poll') {
            try {
                await message.react('👍');
                await message.react('👎');
                await message.react('🤷‍♀️');
            } catch (error) {
                console.error("Oops Didn't work sryyy bro");
            }
        }
    });
    
    if (msg.content === 'pe!doismell'){

       var smells = ["You smell ew", "You're meh", "omg why are u so CLEEEAANN"];
     var smell = Math.floor(Math.random() * smells.length);
     msg.reply(smells[smell]);

 }
      
      if (msg.content === ("pe!commands")){
        msg.reply ("Message Commands:\
         pe!pos (gives positivity),\
          pe!penguin (sends a penguin pic),\
          pe!poll (creates a poll),\
          pe!doismell (do you smell?)\
          Beta: \
         pe!translate penguin {text} (working on it) \
         pe!github (shows bot's code)"          
        )}
});//==================================================


//My supa secret token u don't see
client.login(process.env.token);
