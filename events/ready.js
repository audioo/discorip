const Discord = require('discord.js')
module.exports = (client) => {
    console.log(`[+][SERVER] -> Selfbot for ${client.user.tag} has been started.`)
	client.user.setActivity("discorip -> jnENWWp", {type: 'PLAYING'});
}
