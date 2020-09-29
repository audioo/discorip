const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    msg.delete();
    if (args.join(" ").length > 2000) msg.reply('Message may not exceed 2000 characters.')
    msg.channel.send(new RichEmbed().setDescription(args.join(" ")).setColor("BLACK"))
   
}


module.exports.help = {
    name:"embed",
    usage:";embed <message>",
    example:";embed audio got da swag",
    ownerOnly: true,
    group: "client",
    desc:"Returns an embed with your message.."
} 