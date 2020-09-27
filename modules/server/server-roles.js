const { RichEmbed } = require("discord.js");
module.exports.run = async (client, msg, args, config) => {
  msg.delete();
  if (msg.guild.roles.map(r => r.toString()).join("").length > 2000)
    return msg.reply(
      "This server has too many roles to display! (" +
        msg.guild.roles.size +
        " roles)"
    );

  let embed = new RichEmbed()
    .setDescription(msg.guild.roles.map(r => r.toString()).join(""))
    .setColor("black");
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
