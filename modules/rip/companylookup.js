const axios = require("axios");
const { RichEmbed } = require("discord.js");
const config = require("../../util/config.json");

exports.run = (client, message, args) => {
  message.delete();
  const embed = new RichEmbed();
  embed.setColor(config.color);
  embed.setTitle(`**COMPANY LOOKUP**`);
  embed.attachFiles(['././resources/ticon.png', '././resources/rightarrow.png']);
  embed.setThumbnail('attachment://ticon.png');
  embed.setFooter("discorip version " + config.version, 'attachment://rightarrow.png');
  embed.setTimestamp();

  axios
    .get("https://businesscoder.melissadata.net/WEB/BusinessCoder/doBusinessCoderUS", {
      params: {
        t: "TR_Business",
        id: config.melissaKey,
        comp: args[0]
      }
    })
    .then(function(response) {
      try {
          embed.addField(
            `Address Line 1: `,
            `${response.data.Records[0].AddressLine1}`,
            true
          );
        } catch (e) {
          embed.addField(`Address Line 1: `, `null`, true);
      }
	  try {
          embed.addField(
            `City: `,
            `${response.data.Records[0].City}`,
            true
          );
        } catch (e) {
          embed.addField(`City: `, `null`, true);
      }
	  try {
          embed.addField(
            `Company Name: `,
            `${response.data.Records[0].CompanyName}`,
            true
          );
        } catch (e) {
          embed.addField(`Company Name: `, `null`, true);
      }
	  try {
          embed.addField(
            `Postal Code: `,
            `${response.data.Records[0].PostalCode}`,
            true
          );
        } catch (e) {
          embed.addField(`Postal Code: `, `null`, true);
      }
	  try {
          embed.addField(
            `Record ID: `,
            `${response.data.Records[0].RecordID}`,
            true
          );
        } catch (e) {
          embed.addField(`Record ID: `, `null`, true);
      }
	  try {
          embed.addField(
            `Results: `,
            `${response.data.Records[0].Results}`,
            true
          );
        } catch (e) {
          embed.addField(`Results: `, `null`, true);
      }
	  try {
          embed.addField(
            `State: `,
            `${response.data.Records[0].State}`,
            true
          );
        } catch (e) {
          embed.addField(`State: `, `null`, true);
      }
	  try {
          embed.addField(
            `Suite: `,
            `${response.data.Records[0].Suite}`,
            true
          );
        } catch (e) {
          embed.addField(`Suite: `, `null`, true);
      }
	  try {
          embed.addField(
            `Total Contacts: `,
            `${response.data.Records[0].TotalContacts}`,
            true
          );
        } catch (e) {
          embed.addField(`Total Contacts: `, `null`, true);
      }
    })
    .then(function() {
      message.channel.send(embed);
    });
};

exports.help = {
  name: "companylookup",
  usage: ";companylookup <company>",
  desc: "Returns information about a company. <RISK:MODERATE>",
  group: "rip",
  ownerOnly: true,
  example: ";companylookup tesla"
};
