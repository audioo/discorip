module.exports.run = async (client, msg, args, config) => {
	console.log("[+][SERVER] -> Shutting down.");
	client.destroy();
};

module.exports.help = {
  name: "shutdown",
  guildOnly: false,
  usage: ";shutdown",
  example: ";shutdown",
  group: "config",
  desc: "Terminates the bot process. <RISK:LOW>"
};
