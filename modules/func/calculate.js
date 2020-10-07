const { RichEmbed } = require('discord.js')
let a = require("math-expression-evaluator");
const config = require("../../util/config.json");
module.exports.run = (client, msg, args, config) => {
	msg.delete();

    if (args.join(" ").length > 2000) return console.log('[+][MODULE] -> Arguments were too long. can not exceed 2000 characters.')
    try {
        let embed = new RichEmbed()
        .setColor(config.color)
		.attachFiles(['././resources/ticon.png', '././resources/rightarrow.png'])
        .setDescription(`Calculation of ${args.join(" ")}\n\n**` + a.lex(args.join(" ")).toPostfix().postfixEval() + '**')
		.setThumbnail('attachment://ticon.png')
		.setFooter("discorip version " + config.version, 'attachment://rightarrow.png')
		.setTimestamp()

        msg.channel.send(embed)
    } catch (err) {
       console.log('[+][MODULE] -> ' + err.message)
    }


}


module.exports.help = {
    name:"calculate",
    usage:";calculate <evaluation>",
    example:";calculate 2^64",
    group: "func",
    desc:"Calculates a math expression."
}
