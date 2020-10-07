const { RichEmbed } = require("discord.js");
const moment = require("moment");
const config = require("../../util/config.json");

module.exports.run = async (bot, message, args) => {
	message.delete();
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
    user = message.mentions.users.first() || message.author;
  }

  const member = message.guild.member(user);

  const embed = new RichEmbed()
    .setTitle(`**WHOIS**`)
    .setColor(config.color)
	.attachFiles(['././resources/rightarrow.png'])
    .setThumbnail(user.avatarURL)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField(
      "Nickname:",
      `${member.nickname !== null ? `${member.nickname}` : "None"}`,
      true
    )
    .addField("Status:", `${user.presence.status}`, true)
    .addField("In Server", message.guild.name, true)
    .addField(
      "Game:",
      `${user.presence.game ? user.presence.game.name : "None"}`,
      true
    )
    .addField("Bot:", `${user.bot}`, true)
    .addField(
      "Joined The Server On:",
      `${moment(member.joinedAt).format("dddd, MMMM Do YYYY")}`,
      true
    )
    .addField(
      "Account Created On:",
      `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`,
      true
    )
    .addField("Roles:", member.roles.map(roles => `${roles}`).join(", "), true)
    .setFooter("discorip version " + config.version, 'attachment://rightarrow.png')
	.setTimestamp();
  message.channel.send(embed);
};


module.exports.help = {
  name: "whois",
  guildOnly: true,
  usage: ";whois @user",
  example: ";whois @audio",
  group: "func",
  desc: "Gives you the information of mentioned user. <RISK:MODERATE>"
};
