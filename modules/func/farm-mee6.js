let interval;
const { randomString } = require('../../util/Functions')
module.exports.run = async (client, msg, args, config) => {
	msg.delete();
    if(!interval) {
        console.log('[+][MODULE] -> Now starting to farm xp.')
        interval = setInterval(function() { send(msg) }, 5000)
        return;
    }

    clearInterval(interval)
    interval = null
    console.log('[+][MODULE] -> Stopped farming xp.')

}

function send(msg) {
    msg.channel.send(randomString(Math.floor(Math.random() * 20) + 3))
}


module.exports.help = {
    name:"farm-mee6",
    usage:";farm-mee6",
    example:";farm-mee6",
    guildOnly: true,
    ownerOnly: true,
    group: "func",
    desc: "Farms MEE6 Bot for XP. <RISK:MODERATE>"
}
