const express = require('express')
const app = express();
const port = 3000
const Discord = require('discord.js');
const config = require('./boodyhsn/config.json')
const client = new Discord.Client();


app.listen(port, () =>
console.log(`by: boodyhsn`)//حاله البوت عند الجابه
);
const { MessageButton, MessageActionRow } = require('discord-buttons'); 
require('discord-buttons')(client);

client.on("message", (message) => {
if (message.content !== `${config.command}`) return;
  const embed = new Discord.MessageEmbed()
  .setTitle("التحقق منك")
  .setDescription("**اهلا بيك • :heart:\n • فكره البوت هو ان يتاكد منك انك لست بوت\n • كل ما عليك الضغط علي الزر\n • وسوف تحصل علي رتبة التحقق**")
  .setColor('#2f3136')
  
  let verify = new MessageButton()
   .setLabel("التحقق منك")//امر التحقق
   .setStyle("blurple")
   .setEmoji("<a:emoji_1:1199715715326943304>")//اموجي البوت
   .setID("Verify")


  message.channel.send({
    button: verify,
    embed: embed
  });
})

client.on("ready", () => {
    client.user.setActivity("ARABS WORLD")//حاله البوت
})

client.on('clickButton', async (button) => {
    if (button.id !== "Verify") return;
    button.reply.send('تم التحقق منك بنجاح ❤️', true)
    const role = button.guild.roles.cache.get(`${config.roleID}`)
    const member = button.clicker.member
    await member.roles.add(role)
})

client.login("التكون_هنا")//حط التوكن هنا