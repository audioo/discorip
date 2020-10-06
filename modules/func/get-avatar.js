const { RichEmbed } = require("discord.js");
const config = require("../../util/config.json");
module.exports.run = (client, message, args) => {
  const user = message.mentions.users.first() || message.author;
  const avatarEmbed = new RichEmbed()
    .setColor(config.color)
    .setAuthor(user.username)
    .setImage(user.avatarURL);
  message.channel.send(avatarEmbed);
};

module.exports.help = {
  name: "get-avatar",
  guildOnly: true,
  usage: ";get-avatar @user",
  example: ";get-avatar @audio",
  group: "func",
  desc: "Gives you the avatar of mentioned user. <RISK:MODERATE>"
};
