const { RichEmbed } = require('discord.js')
const fs = require('fs')
module.exports.run = async (client, msg, args, config) => {
	msg.delete();
    let array = [];
		const path = `././misc/ids.txt`;
        const list = msg.guild
		fs.unlink(path, (err) => {
			if (err) {
				return
			}
			//file removed
		})
		fs.writeFile(path, '', function (err) {
			if (err) {
				console.log("bruh no");
			}
		});  
		
		let writeStream = fs.createWriteStream('././misc/ids.txt');
        list.members.forEach(member => writeStream.write(member.user.username + ` --- ` + member.user.id + `\n`));
		writeStream.end();
        console.log(`Done.`);    

}



module.exports.help = {
    name:"dm-ids",
    usage:";dm-ids",
    example:";dm-ids",
    ownerOnly: true,
    guildOnly: true,
    group: "client",
    desc:"Saves a list of every UserID from open DMs to ids.txt in misc. <RISK:LOW> "
} 