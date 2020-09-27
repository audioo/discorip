let interval;
const { randomString } = require('../../util/Functions')
module.exports.run = async (client, msg, args, config) => {
	msg.delete();
    if(!interval) {
        console.log('Now starting to farm xp.')
        interval = setInterval(function() { send(msg) }, 60000)
        return;
    }

    clearInterval(interval)
    interval = null
    console.log('Stopped farming xp.')
    
}

function send(msg) {
    msg.channel.send(randomString(Math.floor(Math.random() * 20) + 3))
}

 
module.exports.help = {
    name:"tatsumaki",
    usage:";tatsumaki",
    example:";tatsumaki",
    guildOnly: true,
    group: "farm",
    ownerOnly: true,
    desc: "Tatsumaki XP Farmer. Spams a message in a channel with a 60 seconds interval. <RISK:MODERATE>"
} 