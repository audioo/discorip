const { RichEmbed } = require("discord.js");
module.exports.run = (client, msg, args, config) => {

    if (!args[0]) return msg.reply('I need a message to set as streaming.')

    if (args.join(" ").length > 100) return msg.reply('That is too long of a message to set.')
    client.user.setActivity(args.join(" "), { type: "STREAMING"})
	const embed = new RichEmbed()
		.setTitle(`**STATUS**`)
		.setColor(`black`)
		.setDescription(`Set to *streaming*`);
	msg.channel.send(embed);
}


module.exports.help = {
    name:"streaming",
    group: "activities",
    usage:";streaming <message>",
    example:";streaming audio is swag",
    desc: "Sets your streaming status to your message."
}