const fs = require('fs')
module.exports.run = async (client, msg, args, config) => {

    console.log('[+][MODULE] -> Please wait, writing ' + msg.guild.channels.size + ' channels to misc/channelBackupStorage.txt')
    let array = []
    await msg.guild.channels.forEach(c => array.push(c.name))
    
    fs.writeFileSync(`././misc/channelBackupStorage.txt`, array.join("\n"))

    console.log('[+][MODULE] -> Done.')
}


module.exports.help = {
    name:"server-channel-backup",
    usage:";server-channel-backup",
    guildOnly: true,
    group: "server",
    example:";server-channel-backup",
    ownerOnly: true,
    desc:"Backs up the channels in the server and saves them in misc/channelBackupStorage.txt. <RISK:LOW>",
} 