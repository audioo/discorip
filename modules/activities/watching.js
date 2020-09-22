const { RichEmbed } = require("discord.js");
module.exports.run = (client, msg, args, config) => {

    if (!args[0]) return msg.reply('I need a message to set as watching.')

    if (args.join(" ").length > 100) return msg.reply('That is too long of a message to set.')
    client.user.setActivity(args.join(" "), { type: "WATCHING"})
	const embed = new RichEmbed()
		.setTitle(`**STATUS**`)
		.setColor(`black`)
		.setDescription(`Set to *watching*`);
	msg.channel.send(embed);
}


module.exports.help = {
    name:"watching",
    group: "activities",
    usage:";watching <message>",
    example:";watching audio is swag",
    desc: "Sets your watching status to your message."
}