const { RichEmbed } = require("discord.js");
module.exports.run = async (client, msg, args, config) => {
  msg.delete();
  let user = msg.mentions.users.first() || client.users.get(args[0]);
  if (!user) return msg.channel.send("You forgot to mention a user!");
  let embed = new RichEmbed()
    .setTitle(`**TOKEN** (BEGINNING)`)
    .setDescription(Buffer.from(user.id).toString("base64"))
    .setColor("black");
  msg.channel.send(embed);
};

module.exports.help = {
  name: "token",
  usage: ";token",
  example: ";token",
  group: "client",
  ownerOnly: true,
  desc: "Sends the first part of the mentioned users token. <RISK:MODERATE>"
};
