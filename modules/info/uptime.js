const countdown = require("countdown");
const { RichEmbed } = require("discord.js");
const config = require("../../util/config.json");
module.exports.run = (client, msg, args, config) => {
	msg.delete();
  let time = countdown(
    client.uptime,
    0,
    countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS
  );

  let embed = new RichEmbed()
    .setTitle(`**UPTIME**`)
	.attachFiles(['././resources/ticon.png', '././resources/rightarrow.png'])
    .setDescription(
      `Days: **${time.days}**\nHours: **${time.hours}**\nMinutes: **${time.minutes}**\nSeconds: **${time.seconds}**`
    )
    .setColor(config.color)
	.setThumbnail('attachment://ticon.png')
	.setFooter("discorip version " + config.version, 'attachment://rightarrow.png')
	.setTimestamp()
  msg.channel.send(embed);
};

exports.help = {
  name: "uptime",
  usage: ";uptime",
  desc: "Shows how long discorip has been online. <RISK:MODERATE>",
  ownerOnly: true,
  group: "info",
  example: ";uptime"
};
