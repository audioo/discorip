const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {


    let amount = args[0]
    let message = args.join(" ")

    if(!amount || message) return console.log('[+][MODULE] -> Invalid arguments.')
    for(let i = 0; i < parseInt(amount); i++) {
        await msg.channel.send(message.slice(amount.length))
    }

    console.log('[+][MODULE] -> Done.')

}


   module.exports.help = {
       name:"raid-spam",
       usage:";raid-spam <amount> <message>",
       desc:"Sends a message x amount of times.",
       example:";raid-spam <message> <amount>",
       group: "rip",
       ownerOnly: true,
   }
