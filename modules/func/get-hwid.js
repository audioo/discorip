const { RichEmbed } = require("discord.js");
const { getHWID } = require('hwid')

module.exports.run = async (client, msg, args, config) => {
	msg.delete();
	getHWID().then(id => {
		console.log("[+][MODULE] -> Unique Hardware Identification: " + id)
	})
};


module.exports.help = {
  name: "get-hwid",
  usage: ";get-hwid",
  example: ";get-hwid",
  group: "func",
  ownerOnly: true,
  desc: "Returns your unique hardware identification. <RISK:MODERATE>"
};
