let interval;
const { randomString } = require('../../util/Functions')
module.exports.run = async (client, msg, args, config) => {
	msg.delete();
    if(!interval) {
        console.log('Now starting to farm xp.')
        interval = setInterval(function() { send(msg) }, 5000)
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
    name:"mee6",
    usage:";mee6",
    example:";mee6",
    guildOnly: true,
    ownerOnly: true,
    group: "farm",
    desc: "Farms MEE6 Bot for XP. <RISK:MODERATE>"
} 