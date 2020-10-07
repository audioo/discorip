const { RichEmbed } = require("discord.js");
const moment = require("moment");
const config = require("../../util/config.json");
module.exports.run = async (client, msg, args, config) => {
	msg.delete();
  let embed = new RichEmbed()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
	.attachFiles(['././resources/ticon.png', '././resources/rightarrow.png'])
	.setThumbnail('attachment://ticon.png')
	.setFooter("discorip version " + config.version, 'attachment://rightarrow.png')
	.setTimestamp()
	.addField("Owner", `<@${msg.guild.ownerID}>`, true)
    .addField("Region", msg.guild.region, true)
	.addField("ID", `${msg.guild.id}`, true)
	.addField("Created", `${msg.guild.createdAt}`, true)
    .addField(
      "Channel Categories",
      msg.guild.channels.filter(c => c.type === "category").size,
      true
    )
    .addField(
      "Text Channels",
      msg.guild.channels.filter(c => c.type === "text").size,
      true
    )
    .addField(
      "Voice Channels",
      msg.guild.channels.filter(c => c.type === "voice").size,
      true
    )
    .addField("Members", msg.guild.members.size, true)
    .addField(
      "Humans",
      msg.guild.members.filter(mem => !mem.user.bot).size,
      true
    )
    .addField("Bots", msg.guild.members.filter(mem => mem.user.bot).size, true)
    .addField("Roles", msg.guild.roles.size, true)
    .addField(
      "Custom Emojis",
      msg.guild.emojis.size > 100
        ? msg.guild.emojis.size
        : msg.guild.emojis.map(e => e.toString()).join(" ") + " .",
      true
    )
    .setColor(config.color);

  msg.channel.send(embed);
};

module.exports.help = {
  name: "server-info",
  guildOnly: true,
  usage: ";server-info",
  example: ";server-info",
  group: "server",
  desc: "Shows the server information in an embed. <RISK:MODERATE>"
};
