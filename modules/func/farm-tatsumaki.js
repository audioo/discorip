let interval;
const { randomString } = require('../../util/Functions')
module.exports.run = async (client, msg, args, config) => {
	msg.delete();
    if(!interval) {
        console.log('[+][MODULE] -> Now starting to farm xp.')
        interval = setInterval(function() { send(msg) }, 60000)
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
    name:"farm-tatsumaki",
    usage:";farm-tatsumaki",
    example:";farm-tatsumaki",
    guildOnly: true,
    group: "func",
    ownerOnly: true,
    desc: "Tatsumaki XP Farmer. Spams a message in a channel with a 60 seconds interval. <RISK:MODERATE>"
}
