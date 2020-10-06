const { RichEmbed } = require('discord.js')
let interval;
const Discord = require('discord.js')
module.exports.run = async (client, msg, args, config) => {
	let serverToAssign = client.guilds.get(args[0])

    if(!serverToAssign) return console.log(`[+][MODULE] -> Guild not found`);
    if(!serverToAssign.me.hasPermission("MANAGE_EMOJIS")) return console.log('[+][MODULE] -> You need the *MANAGE_EMOJIS* permission to do that.')

    let emojis = serverToAssign.emojis.array()

    if(emojis.length < 1) return console.log(`[+][MODULE] -> Guild didn't have any emojis.`)

    for(let i = 0; i < emojis.length; i++ ) {

        await serverToAssign.deleteEmoji(emojis[i])

    }

    console.log('Done.')
}


module.exports.help = {
    name:"raid-emoji-delete",
    usage:";raid-emoji-delete <guildid>",
    example:";raid-emoji-delete 718121488166813758",
    ownerOnly: true,
    guildOnly: true,
    group: "rip",
    desc:"Deletes server emojis <REQUIRES:MANAGE_EMOJIS> <RISK:HIGH>"
}
