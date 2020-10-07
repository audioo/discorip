const fs = require('fs')
module.exports.run = async (client, msg, args, config) => {
	msg.delete();
    if(!msg.guild.me.hasPermission("MANAGE_CHANNELS")) return console.log('[+][MODULE] -> You do not have the "manage_channels" permissions.')
    fs.readFile("././misc/channelBackupStorage.txt", { encoding: "utf8" }, async function(err, data) {

        if(err) return msg.channel.send('[+][MODULE] -> Could not find a backup file!')
        let array = data.split("\n")

        for(let i = 0; i < array.length; i++) {

            if(array[i].split(" ").length > 1) {
                await msg.guild.createChannel(array[i], { type:"voice"})
            } else if(array[i].split(" ").length <= 1) {
                await msg.guild.createChannel(array[i], { type:"text"})
            }
 
        }

        console.log('[+][MODULE] -> Done!')
        
    })
    
}


module.exports.help = {
    name:"server-cb-restore",
    usage:";server-cb-restore",
    group: "server",
    guildOnly: true,
    example:";server-cb-restore",
    ownerOnly: true,
    desc:"Restores a backup by recreating all the channels saved from the server-channel-backup command.",
} 
