const isReachable = require('is-reachable');
const { RichEmbed } = require('discord.js');
const config = require("../../util/config.json");
module.exports.run = async (client, msg, args, config) => {
	msg.delete();
    if(!args[0]) return console.log('[+][MODULE] -> You forgot a website to check!')
    let reachable = await isReachable(args[0])

    if(reachable) {
        return msg.channel.send(new RichEmbed().setTitle(`**CHECK-HOST**`).setDescription(`${args[0]} is online.`).setColor(config.color).attachFiles(['././resources/ticon.png', '././resources/rightarrow.png']).setThumbnail('attachment://ticon.png').setFooter("discorip version " + config.version, 'attachment://rightarrow.png').setTimestamp())
    }
    return msg.channel.send(new RichEmbed().setDescription(`${args[0]} is offline.`).setColor(config.color))


}


module.exports.help = {
    name:"check-host",
    usage:";check-host <url>",
    group: "rip",
    desc: "Checks if the website is online or offline and returns the answer in an embed. <RISK:MODERATE>",
    example:";check-host https://google.com",
}
