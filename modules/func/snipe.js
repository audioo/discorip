const { RichEmbed } = require("discord.js");
const fs = require(`fs`);
const config = require("../../util/config.json");
module.exports.run = async (client, msg, args, config) => {
	var data;
	try {  
		data = fs.readFileSync('././misc/snipeLog.txt', 'utf8');
		data = data.toString();
	} catch(e) {
	console.log('[+][MODULE] -> ', e.stack);
	}
	var desc = data.substring(0, data.indexOf(`<-><snipe><->`));
	var mess = data.substring(data.indexOf(`<-><snipe><->`) + 13, data.length)
  let embed = new RichEmbed()
    .setTitle(`**SNIPED MESSAGE:**`)
    .setDescription(mess + "\n\n" + desc)
    .setColor(config.color);

  msg.channel.send(embed);
};


module.exports.help = {
  name: "snipe",
  usage: ";snipe",
  example: ";snipe",
  group: "func",
  ownerOnly: true,
  desc: "Sends the last deleted message. <RISK:MODERATE>"
};
