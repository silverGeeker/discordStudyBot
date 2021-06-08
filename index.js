const Discord = require("discord.js")
const client  = new Discord.Client()
require('dotenv').config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity("Silver's PA Here", {
    type: "WATCHING"
    //url: "https://www.instagram.com/rajatborde/"
  });
  //client.user.setPresence({
    //status: 'idle',
  //});
});

client.login(process.env.TOKEN);

client.on('message', msg => {
  if (msg.content === '+h') {
    msg.reply(" ```Here are some commands that can help you:" + "\n" +"+setreminder <time_in_minutes>" +  "\n" +  "+setstudytime <time_in_minutes>```");
  }
});

client.on('message', msg => {
  if (msg.content === '+setreminder') {
    msg.reply("\nReminder set, till then take a nap!");
  }
  if (msg.content === '+setstudytime') {
    msg.reply("\nYour timer will start in 2 minutes, till then prepare yourself \n||keep a water bottle filled on you desk||");
  }
});

