const { RichEmbed } = require('discord.js')
const config = require("../../util/config.json");
module.exports.run = async (client, msg, args, config) => {
	msg.delete();

    if (args.join(" ").length > 2000) console.log('[+][MODULE] -> Message may not exceed 2000 characters.')
    msg.channel.send(new RichEmbed().setTitle(`**EMBED**`).setDescription(args.join(" ")).setColor(config.color).attachFiles(['././resources/ticon.png', '././resources/rightarrow.png']).setThumbnail('attachment://ticon.png').setFooter("discorip version " + config.version, 'attachment://rightarrow.png').setTimestamp())

}


module.exports.help = {
    name:"send-embed",
    usage:";send-embed <message>",
    example:";send-embed maraudery got da swag",
    ownerOnly: true,
    group: "func",
    desc:"Returns an embed with your message.."
}
