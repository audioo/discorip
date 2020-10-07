const { RichEmbed } = require("discord.js");
const config = require("../../util/config.json");
module.exports.run = (client, msg, args, config) => {
	msg.delete();
  const embed = new RichEmbed();
    embed.setTitle(`**ABOUT DISCORIP**`);
	embed.attachFiles(['././resources/ticon.png', '././resources/rightarrow.png']);
	embed.setThumbnail('attachment://ticon.png');
    embed.setDescription(`Selfbot created using NodeJS, with a purely utilitarian take on selfbots.`);
	embed.addField(`Features`, `- No Nonsense\n- Easy Setup\n- Raid Tools\n- Lookups (email, ipv4, phone, etc...)\n- Custom Status\n- Hidden Server Information\n- User Information\n- Bot Farming\n- DM Tools\n- More to come!`, false);
	embed.addField(`Repository`, `https://github.com/audioo/discorip`, true);
	embed.addField(`Server`, `https://discord.gg/jnENWWp`, true);
	embed.addField(`Contact`, `audio#0001`, true);
    embed.setColor(config.color);
	embed.setFooter("discorip version " + config.version, 'attachment://rightarrow.png');
	embed.setTimestamp();

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
