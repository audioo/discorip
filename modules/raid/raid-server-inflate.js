const presets = require("./presets.json");
module.exports.run = async (client, msg, args, config) => {
	msg.delete();
	var server = msg.guild;
	var count = 0;
	var countstop = 0;
	while (countstop < args[0]) {
		if (count == 0) {
			await server.createChannel(presets.preset0, "text");
			count = count + 1;
			countstop = countstop + 1;
		} 
		if (count == 1) {
			await server.createChannel(presets.preset1, "text");
			count = count + 1;
			countstop = countstop + 1;
		} 
		if (count == 2) {
			await server.createChannel(presets.preset2, "text");
			count = count + 1;
			countstop = countstop + 1;
		} 
		if (count == 3) {
			await server.createChannel(presets.preset3, "text");
			count = count + 1;
			countstop = countstop + 1;
		} 
		if (count == 4) {
			await server.createChannel(presets.preset4, "text");
			count = count + 1;
			countstop = countstop + 1;
		} 
		if (count == 5) {
			await server.createChannel(presets.preset5, "text");
			count = 0;
			countstop = countstop + 1;
		} 
	}
	
};

exports.help = {
  name: "raid-server-inflate",
  usage: ";raid-server-inflate <count>",
  desc: `Generates a select quantity of channels in a server. Channel names can be set in *discorip -> modules -> raid -> presets.json*`,
  ownerOnly: true,
  group: "raid",
  example: ";raid-server-inflate 35"
};