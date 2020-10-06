const countdown = require("countdown");
const { RichEmbed } = require("discord.js");
const config = require("../../util/config.json");
module.exports.run = (client, msg, args, config) => {
  let time = countdown(
    client.uptime,
    0,
    countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS
  );

  let embed = new RichEmbed()
    .setTitle(`**UPTIME**`)
    .setDescription(
      `Days: **${time.days}**\nHours: **${time.hours}**\nMinutes: **${time.minutes}**\nSeconds: **${time.seconds}**`
    )
    .setColor(config.color);

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
