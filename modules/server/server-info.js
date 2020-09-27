const { RichEmbed } = require("discord.js");
const moment = require("moment");
module.exports.run = async (client, msg, args, config) => {
  msg.delete();
  let embed = new RichEmbed()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
	.addField("Owner", `<@${msg.guild.ownerID}>`, true)
    .addField("Region", msg.guild.region, true)
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
    .setFooter(`ID: ${msg.guild.id} | Server Created: ${msg.guild.createdAt}`)
    .addField(
      "Custom Emojis",
      msg.guild.emojis.size > 100
        ? msg.guild.emojis.size
        : msg.guild.emojis.map(e => e.toString()).join(" ") + " .",
      true
    )
    .setColor("black");

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