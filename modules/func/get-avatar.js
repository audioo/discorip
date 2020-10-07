const { RichEmbed } = require("discord.js");
const config = require("../../util/config.json");
module.exports.run = (client, message, args) => {
	msg.delete();
  const user = message.mentions.users.first() || message.author;
  const avatarEmbed = new RichEmbed()
    .setColor(config.color)
    .setAuthor(user.username)
	.setDescription(`Profile Picture`)
	.attachFiles(['././resources/ticon.png', '././resources/rightarrow.png'])
	.setThumbnail('attachment://ticon.png')
    .setImage(user.avatarURL)
	.setFooter("discorip version " + config.version, 'attachment://rightarrow.png')
	.setTimestamp()
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
