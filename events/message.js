const config = require('../util/config.json')
const axios = require('axios');
const fs = require('fs')

module.exports = (client, message) => {

	if(message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) {

        var Nitro = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/

        var NitroUrl = Nitro.exec(message.content);
        var NitroCode = NitroUrl[0].split('/')[1];

        console.log(`[+][EVENT] -> Nitro found in ${message.guild.name}`);

		let writeStream = fs.createWriteStream('././misc/nitroCode.txt');
        writeStream.write(`https://discord.gift/${NitroCode}` + `\n`);
		writeStream.end();
        console.log(`[+][EVENT] -> Nitro Code written to nitroCode.txt in MISC.`);
    }

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (message.content.indexOf(config.prefix) !== 0) return;
    if (!client.commands.get(cmd)) return;
    if (!config.allowOtherPeople && message.author.id !== client.user.id) return;
    if(client.commands.get(cmd).help.guildOnly && !message.guild) return message.reply('This command may only be used in a guild!')
    if (client.commands.get(cmd).help.ownerOnly && message.author.id !== client.user.id) return;
    client.commands.get(cmd).run(client, message, args, config);

}
