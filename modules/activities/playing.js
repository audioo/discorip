const { RichEmbed } = require("discord.js");
module.exports.run = (client, msg, args, config) => {

    if (!args[0]) return msg.reply('I need a message to set as playing.')

    if (args.join(" ").length > 100) return msg.reply('That is too long of a message to set.')
    client.user.setActivity(args.join(" "), { type: "PLAYING"})
    const embed = new RichEmbed()
		.setTitle(`**STATUS**`)
		.setColor(`black`)
		.setDescription(`Set to *playing*`);
	msg.channel.send(embed);
}


module.exports.help = {
    name:"playing",
    group: "activities",
    usage:";playing <message>",
    example:";playing audio is swag",
    desc: "Sets your playing status to your message."
}