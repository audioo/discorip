const { RichEmbed } = require('discord.js')
const fs = require('fs')
const fetch = require('node-fetch')
module.exports.run = async (client, msg, args, config) => {
	msg.delete();

    let emojis = client.emojis.array()

    console.log('Downloading ' + emojis.length + ' emojis, this may take some time.')
    for(let i = 0; i < emojis.length; i++) {

        let url = await fetch(`https://cdn.discordapp.com/emojis/${emojis[i].id}.png`)
        let buffer = await url.buffer()

         fs.writeFileSync(`././misc/emojis/${emojis[i].name}.png`, buffer)


    }

    console.log('Done downloading emojis.')
    
   
}


 
module.exports.help = {
    name:"get-emojis",
    usage:";get-emojis",
    example:";get-emojis",
    ownerOnly: true,
    guildOnly: true,
    group: "func",
    desc:"Downloads emojis from every server you are in to misc folder. <RISK:LOW>"
} 
