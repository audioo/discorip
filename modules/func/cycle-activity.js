let interval;
let i = 0;
module.exports.run = async (client, msg, args, config) => {
	msg.delete();

    if(!interval) {
        console.log('[+][MODULE] -> Cycling custom activities.')
        interval = setInterval(async function() { cycle(client, args) }, 10000)
        return;
    }

    clearInterval(interval)
    interval = null;
    console.log('[+][MODULE] -> Stopped cycling custom activities.')
    

}

async function cycle(client, arguments) {

    if(i >= 3) i = 0;
    await client.user.setActivity(arguments[i])
    i++
}

module.exports.help = {
    name:"cycle-activity",
    usage:";cycle-activity <text1> <text2> <text3> <text4>",
    group: "func",
    example:";cycle-activity maraudery swag bruh gutenberg",
    ownerOnly: true,
    desc:"Cycles custom activity around every 10 seconds.",
} 
