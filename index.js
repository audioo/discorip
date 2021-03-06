const { Client, Collection} = require('discord.js');
const fs = require('fs')
const { RichEmbed } = require('discord.js')
const config = require('./util/config.json')
for(let i = 0; i < config.tokens.length; i++) {

  const client = new Client();
  client.commands = new Collection()
  // Command Handler
  fs.readdirSync("./modules").forEach(folders => {
    fs.readdirSync(`./modules/${folders}`).forEach(i => {
      if (!i.endsWith(".js")) return;
      let commandFile = i.split(".")[0].trim()
      client.commands.set(commandFile, require(`./modules/${folders}/${commandFile}.js`))
    })

  })
  console.log(`[+][SERVER] -> Loaded ${client.commands.size} commands.`)

  const evtFiles = fs.readdirSync("./events/")
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  });

  console.log(`[+][SERVER] -> Loaded ${evtFiles.length} events.`)

  client.login(config.tokens[i])
}
