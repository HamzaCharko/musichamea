const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`$bc | By Yasmine.`,'https://www.twitch.tv/ninja614');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '$bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● المرسل  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● سيرفر  :***', `*** → ${message.guild.name}***`)               
    .setColor('#00DDE5')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})
client.login(process.env.BOT_TOKEN);
