const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {

    if(msg.guild.channels.map(r => r.name).join("").length > 2000) return msg.reply('This server has too many channels to display! (' + msg.guild.channels.size + ' roles)')

    let embed = new RichEmbed()
    .setDescription(msg.guild.channels.map(r => r.name).join(", "))  
    .setColor("black")
    msg.channel.send(embed)
}



module.exports.help = {
    name:"server-channels",
    usage:";server-channels",
    example:";server-channels",
    guildOnly: true,
    group: "server",
    desc:"List of all channels in the server (including hidden channels)."
} 