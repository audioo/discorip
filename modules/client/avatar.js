const { RichEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
  message.delete();
  const user = message.mentions.users.first() || message.author;
  const avatarEmbed = new RichEmbed()
    .setColor(`black`)
    .setAuthor(user.username)
    .setImage(user.avatarURL);
  message.channel.send(avatarEmbed);
};

module.exports.help = {
  name: "avatar",
  guildOnly: true,
  usage: ";avatar @user",
  example: ";avatar @audio",
  group: "client",
  desc: "Gives you the avatar of mentioned user. <RISK:MODERATE>"
};
