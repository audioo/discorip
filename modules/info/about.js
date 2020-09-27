const { RichEmbed } = require("discord.js");
module.exports.run = (client, msg, args, config) => {
  msg.delete();
  const embed = new RichEmbed()
    .setTitle(`**ABOUT DISCORIP**`)
    .setDescription(
		`- Selfbot made in NodeJS, with the sole intention of gathering information through discord.\n- Message **audio#8391** with any inquiries.\n- Discord Server -> **zcen45b**`
    )
    .setColor("black");

  msg.channel.send(embed);
};

exports.help = {
  name: "about",
  usage: ";about",
  desc: "Information about discorip. <RISK:MODERATE>",
  ownerOnly: true,
  group: "info",
  example: ";about"
};
