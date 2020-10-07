const { RichEmbed } = require('discord.js');
const config = require("../../util/config.json");
module.exports.run = async (client, msg, args, config) => {
	msg.delete();
    if(msg.guild.channels.map(r => r.name).join("").length > 2000) return console.log('[+][MODULE] -> This server has too many channels to display! (' + msg.guild.channels.size + ' roles)')

    let embed = new RichEmbed()
    .setDescription(msg.guild.channels.map(r => r.name).join(", "))
    .setColor(config.color)
	.setTitle(`**SERVER CHANNELS**`)
	.attachFiles(['././resources/ticon.png', '././resources/rightarrow.png'])
	.setThumbnail('attachment://ticon.png')
	.setFooter("discorip version " + config.version, 'attachment://rightarrow.png')
	.setTimestamp()
    msg.channel.send(embed)
}



module.exports.help = {
    name:"server-channels",
    usage:";server-channels",
    example:";server-channels",
    guildOnly: true,
    group: "server",
    desc:"List of all channels in the server (including hidden channels). <RISK:MODERATE>"
}
