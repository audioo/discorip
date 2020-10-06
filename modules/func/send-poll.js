const { RichEmbed } = require('discord.js')
const config = require("../../util/config.json");
module.exports.run = async (client, msg, args, config) => {
    let question = args.join(" ")
    if(!question) return console.log('[+][MODULE] -> You forgot a question!')
    if(question.length > 2048) return console.log('[+][MODULE] -> Question may not exceed 2048 characters')

    let embed = new RichEmbed()
	.setTitle(`POLL`)
    .setDescription(question)
    .setColor(config.color)

    msg.channel.send(embed).then(async m => {
       await m.react("✅")
       await m.react("❌")
    })
}




module.exports.help = {
    name:"send-poll",
    usage:";send-poll <question>",
    example:";send-poll discorip best selfbot?",
    group: "func",
    desc: "Creates a poll and lets people react yes/no. <RISK:MODERATE>",
}
