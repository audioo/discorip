const { RichEmbed } = require("discord.js");
module.exports.run = async (client, msg, args, config) => {
	msg.delete();

  let user = msg.mentions.users.first() || client.users.get(args[0]);
  if (!user) return console.log("[+][MODULE] -> You forgot to mention a user!");
  console.log("[+][MODULE] -> " + user + "'s Token Beginning: " + Buffer.from(user.id).toString("base64"));
};

module.exports.help = {
  name: "get-token",
  usage: ";get-token",
  example: ";get-token",
  group: "func",
  ownerOnly: true,
  desc: "Sends the first part of the mentioned users token. <RISK:MODERATE>"
};
