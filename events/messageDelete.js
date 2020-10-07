const { RichEmbed } = require('discord.js')
const fs = require('fs')
module.exports = (client, msg) => {
	if (msg.member.id != "501982335076532224" && msg.member.id != client.user.id) { // So it doesn't log Better Anti-Spam
		let writeStream = fs.createWriteStream('././misc/snipeLog.txt');
		writeStream.write(`Sent by ${msg.member.user} in ${msg.guild.name}, ${msg.channel.name} <-><snipe><-> ${msg}`);
		writeStream.end();
		console.log(`[+][EVENT] -> Message deleted from ${msg.member.user} in ${msg.guild.name}, ${msg.channel.name}. Use ;snipe`);
	}
}
