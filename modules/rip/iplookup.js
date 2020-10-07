const { RichEmbed } = require("discord.js");
const axios = require("axios");
const config = require("../../util/config.json");

module.exports.run = (client, message, args) => {
  message.delete();
  const embed = new RichEmbed();
  embed.setColor(config.color);
  embed.setTitle(`**IP LOOKUP**`);
  embed.attachFiles(['././resources/ticon.png', '././resources/rightarrow.png']);
  embed.setThumbnail('attachment://ticon.png');
  embed.setFooter("discorip version " + config.version, 'attachment://rightarrow.png');
  embed.setTimestamp();
  axios
    .get(`http://ip-api.com/json/${args[0]}?fields=66846719`)
    .then(function(response) {
      if (response.status == 200) {
        try {
          embed.addField(`Query: `, `${response.data.query}`, true);
        } catch (e) {
          embed.addField(`Query: `, `null`, true);
        }
        try {
          embed.addField(`Status: `, `${response.data.status}`, true);
        } catch (e) {
          embed.addField(`Status: `, `null`, true);
        }
        try {
          embed.addField(`Continent: `, `${response.data.continent}`, true);
        } catch (e) {
          embed.addField(`Continent: `, `null`, true);
        }
        try {
          embed.addField(
            `Continent Code: `,
            `${response.data.continentCode}`,
            true
          );
        } catch (e) {
          embed.addField(`Continent Code: `, `null`, true);
        }
        try {
          embed.addField(`Country: `, `${response.data.country}`, true);
        } catch (e) {
          embed.addField(`Country:: `, `null`, true);
        }
        try {
          embed.addField(
            `Country Code: `,
            `${response.data.countryCode}`,
            true
          );
        } catch (e) {
          embed.addField(`Country Code: `, `null`, true);
        }
        try {
          embed.addField(`Region: `, `${response.data.region}`, true);
        } catch (e) {
          embed.addField(`Region: `, `null`, true);
        }
        try {
          embed.addField(`Region Name: `, `${response.data.regionName}`, true);
        } catch (e) {
          embed.addField(`Region Name: `, `null`, true);
        }
        try {
          embed.addField(`City: `, `${response.data.city}`, true);
        } catch (e) {
          embed.addField(`City: `, `null`, true);
        }
        try {
          embed.addField(`District: `, `${response.data.district}`, true);
        } catch (e) {
          embed.addField(`District: `, `null`, true);
        }
        try {
          embed.addField(`Postal Code: `, `${response.data.zip}`, true);
        } catch (e) {
          embed.addField(`Postal Code: `, `null`, true);
        }
        try {
          embed.addField(`Latitude: `, `${response.data.lat}`, true);
        } catch (e) {
          embed.addField(`Latitude: `, `null`, true);
        }
        try {
          embed.addField(`Longitude: `, `${response.data.lon}`, true);
        } catch (e) {
          embed.addField(`Longitude: `, `null`, true);
        }
        try {
          embed.addField(`Time Zone: `, `${response.data.timezone}`, true);
        } catch (e) {
          embed.addField(`Time Zone: `, `null`, true);
        }
        try {
          embed.addField(`Organization: `, `${response.data.status}`, true);
        } catch (e) {
          embed.addField(`Organization: `, `null`, true);
        }
        try {
          embed.addField(`Offset: `, `${response.data.offset}`, true);
        } catch (e) {
          embed.addField(`Offset: `, `null`, true);
        }
        try {
          embed.addField(`Currency: `, `${response.data.currency}`, true);
        } catch (e) {
          embed.addField(`Currency: `, `null`, true);
        }
        try {
          embed.addField(`Org: `, `${response.data.org}`, true);
        } catch (e) {
          embed.addField(`Org: `, `null`, true);
        }
        try {
          embed.addField(`As: `, `${response.data.as}`, true);
        } catch (e) {
          embed.addField(`As: `, `null`, true);
        }
        try {
          embed.addField(`As Name: `, `${response.data.asname}`, true);
        } catch (e) {
          embed.addField(`As Name: `, `null`, true);
        }
        try {
          embed.addField(`Reverse DNS: `, `${response.data.reverse}`, true);
        } catch (e) {
          embed.addField(`Reverse DNS: `, `null`, true);
        }
        try {
          embed.addField(`Mobile: `, `${response.data.mobile}`, true);
        } catch (e) {
          embed.addField(`Mobile: `, `null`, true);
        }
        try {
          embed.addField(`Proxy: `, `${response.data.proxy}`, true);
        } catch (e) {
          embed.addField(`Proxy: `, `null`, true);
        }
        try {
          embed.addField(`Hosting: `, `${response.data.hosting}`, true);
        } catch (e) {
          embed.addField(`Hosting: `, `null`, true);
        }
      } else {
        embed.addField(`STATUS: `, `ERROR`, true);
      }
    })
    .catch(function(error) {
      embed.addField(`STATUS: `, `ERROR`, true);
    })
    .then(function() {
      message.channel.send(embed);
    });
};


module.exports.help = {
    name:"iplookup",
    usage:":iplookup <ip>",
    group: "rip",
    desc: "Returns information in regards to the IP that was passed. <RISK:HIGH>",
    example:";iplookup 127.0.0.1",
}
