const { RichEmbed } = require('discord.js')
const config = require("../../util/config.json");
module.exports.run = async (client, msg, args, config) => {

    if (args.join(" ").length > 2000) console.log('[+][MODULE] -> Message may not exceed 2000 characters.')
    msg.channel.send(new RichEmbed().setDescription(args.join(" ")).setColor(config.color))

}


module.exports.help = {
    name:"send-embed",
    usage:";send-embed <message>",
    example:";send-embed audio got da swag",
    ownerOnly: true,
    group: "func",
    desc:"Returns an embed with your message.."
}
