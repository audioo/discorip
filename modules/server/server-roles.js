const { RichEmbed } = require("discord.js");
const config = require("../../util/config.json");
module.exports.run = async (client, msg, args, config) => {
	msg.delete();
  if (msg.guild.roles.map(r => r.toString()).join("").length > 2000)
    return console.log(
      "[+][MODULE] -> This server has too many roles to display! (" +
        msg.guild.roles.size +
        " roles)"
    );

  let embed = new RichEmbed()
    .setDescription(msg.guild.roles.map(r => r.toString()).join(""))
    .setColor(config.color)
	.setTitle(`**SERVER ROLES**`)
	.attachFiles(['././resources/ticon.png', '././resources/rightarrow.png'])
	.setThumbnail('attachment://ticon.png')
	.setFooter("discorip version " + config.version, 'attachment://rightarrow.png')
	.setTimestamp()
  msg.channel.send(embed);
};

module.exports.help = {
  name: "server-roles",
  usage: ";server-roles",
  example: ";server-roles",
  group: "server",
  guildOnly: true,
  desc: "List all of the roles in a server. <RISK:MODERATE>"
};
