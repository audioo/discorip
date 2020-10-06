const fs = require("fs");
const { RichEmbed } = require("discord.js");
module.exports.run = (client, msg, args, config) => {
  let array = ["info", "rip", "server", "func", "config", "mod"];
  let query = args[0];

  if (!client.commands.get(query) && !array.includes(query)) {
    let groupEmbed = new RichEmbed();

    for (let i = 0; i < array.length; i++) {
      groupEmbed.addField(array[i], `${config.prefix}help ${array[i]}`, true);
    }

    groupEmbed.setColor(config.color);
    groupEmbed.setTitle(`**DISCORIP HELP**`)
    msg.channel.send(groupEmbed);
    return;
  }

  query = query.toLowerCase();
  if (client.commands.get(query)) {
    let i = client.commands.get(query);
    let commandEmbed = new RichEmbed()
      .setTitle(`**DISCORIP HELP**`)
      .setDescription(
        `Name: **${i.help.name}**\nDesc: ${i.help.desc}\nExample: ${
          i.help.example
        }\nownerOnly: ${i.help.ownerOnly ? "true" : "false"}`
      )
      .setColor(config.color);
    msg.channel.send(commandEmbed);
  } else if (array.includes(query)) {
    const commands = client.commands.filter(obj => obj.help.group === query);

    let commandsEmbed = new RichEmbed()
      .setTitle(`**DISCORIP HELP**`)
      .setDescription(commands.map(i => "`" + i.help.name + "`").join(" "))
      .setColor(config.color);

    msg.channel.send(commandsEmbed);
  }
};

exports.help = {
  name: "help",
  usage: ";help <group> | help <command>",
  desc: "Shows a list of commands. <RISK:MODERATE>",
  group: "info",
  ownerOnly: true,
  example: ";help afk-mode"
};