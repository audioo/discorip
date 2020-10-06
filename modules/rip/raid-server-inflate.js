const config = require("../../util/config.json");
module.exports.run = async (client, msg, args, config) => {
	var server = msg.guild;
	var count = 0;
	var countstop = 0;
	while (countstop < args[0]) {
		if (count == 0) {
			await server.createChannel(config.preset0, "text");
			count = count + 1;
			countstop = countstop + 1;
		} 
		if (count == 1) {
			await server.createChannel(config.preset1, "text");
			count = count + 1;
			countstop = countstop + 1;
		} 
		if (count == 2) {
			await server.createChannel(config.preset2, "text");
			count = count + 1;
			countstop = countstop + 1;
		} 
		if (count == 3) {
			await server.createChannel(config.preset3, "text");
			count = count + 1;
			countstop = countstop + 1;
		} 
		if (count == 4) {
			await server.createChannel(config.preset4, "text");
			count = count + 1;
			countstop = countstop + 1;
		} 
		if (count == 5) {
			await server.createChannel(config.preset5, "text");
			count = 0;
			countstop = countstop + 1;
		} 
	}
	
};

exports.help = {
  name: "raid-server-inflate",
  usage: ";raid-server-inflate <count>",
  desc: `Generates a select quantity of channels in a server. Channel names can be set in *discorip -> util -> config.json* <RISK:HIGH>`,
  ownerOnly: true,
  group: "rip",
  example: ";raid-server-inflate 35"
};
