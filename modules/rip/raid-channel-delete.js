module.exports.run = (client, msg, args, config) => {
	msg.guild.channels.forEach(channel => channel.delete())
};

exports.help = {
  name: "raid-channel-delete",
  usage: ";raid-channel-delete",
  desc: "Deletes all of the channels in a server. <RISK:HIGH>",
  ownerOnly: true,
  group: "rip",
  example: ";raid-channel-delete"
};
