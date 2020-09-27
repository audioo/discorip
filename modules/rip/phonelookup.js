const axios = require("axios");
const { RichEmbed } = require("discord.js");
const config = require("../../util/config.json");

exports.run = (client, message, args) => {
	message.delete();
    const embed = new RichEmbed();
    embed.setColor(`black`);
    embed.setTitle(`**PHONE LOOKUP**`);

	axios
      .get(
        "https://globalphone.melissadata.net/v4/WEB/GlobalPhone/doGlobalPhone",
        {
          params: {
            t: "TR_Phone",
            id: config.melissaKey,
            phone: args[0]
          }
        }
      )
      .then(function(response) {
        try {
          embed.addField(
            `Phone Number: `,
            `${response.data.Records[0].PhoneNumber}`,
            true
          );
        } catch (e) {
          embed.addField(`Phone Number: `, `null`, true);
        }
        try {
          embed.addField(
            `Administrative Area: `,
            `${response.data.Records[0].AdministrativeArea}`,
            true
          );
        } catch (e) {
          embed.addField(`Administrative Area: `, `null`, true);
        }
        try {
          embed.addField(
            `Country Abbreviation: `,
            `${response.data.Records[0].CountryAbbreviation}`,
            true
          );
        } catch (e) {
          embed.addField(`Country Abbreviation: `, `null`, true);
        }
        try {
          embed.addField(
            `Country Name: `,
            `${response.data.Records[0].CountryName}`,
            true
          );
        } catch (e) {
          embed.addField(`Country Name: `, `null`, true);
        }
        try {
          embed.addField(
            `Carrier: `,
            `${response.data.Records[0].Carrier}`,
            true
          );
        } catch (e) {
          embed.addField(`Carrier: `, `null`, true);
        }
        try {
          embed.addField(
            `CallerID: `,
            `${response.data.Records[0].CallerID}`,
            true
          );
        } catch (e) {
          embed.addField(`CallerID: `, `null`, true);
        }
        try {
          embed.addField(
            `Daylight Savings Time: `,
            `${response.data.Records[0].DST}`,
            true
          );
        } catch (e) {
          embed.addField(`Daylight Savings Time: `, `null`, true);
        }
        try {
          embed.addField(
            `International Phone Number: `,
            `${response.data.Records[0].InternationalPhoneNumber}`,
            true
          );
        } catch (e) {
          embed.addField(`International Phone Number: `, `null`, true);
        }
        try {
          embed.addField(
            `Language: `,
            `${response.data.Records[0].Language}`,
            true
          );
        } catch (e) {
          embed.addField(`Language: `, `null`, true);
        }
        try {
          embed.addField(
            `Latitude: `,
            `${response.data.Records[0].Latitude}`,
            true
          );
        } catch (e) {
          embed.addField(`Latitude: `, `null`, true);
        }
        try {
          embed.addField(
            `Longitude: `,
            `${response.data.Records[0].Longitude}`,
            true
          );
        } catch (e) {
          embed.addField(`Longitude: `, `null`, true);
        }
        try {
          embed.addField(
            `International Prefix: `,
            `${response.data.Records[0].PhoneInternationalPrefix}`,
            true
          );
        } catch (e) {
          embed.addField(`International Prefix: `, `null`, true);
        }
        try {
          embed.addField(
            `Country Dialing Code: `,
            `${response.data.Records[0].PhoneCountryDialingCode}`,
            true
          );
        } catch (e) {
          embed.addField(`Country Dialing Code: `, `null`, true);
        }
        try {
          embed.addField(
            `Nation Prefix: `,
            `${response.data.Records[0].PhoneNationPrefix}`,
            true
          );
        } catch (e) {
          embed.addField(`Nation Prefix: `, `null`, true);
        }
        try {
          embed.addField(
            `Area Code: `,
            `${response.data.Records[0].PhoneNationalDestinationCode}`,
            true
          );
        } catch (e) {
          embed.addField(`Area Code: `, `null`, true);
        }
        try {
          embed.addField(
            `Subscriber Number: `,
            `${response.data.Records[0].PhoneSubscriberNumber}`,
            true
          );
        } catch (e) {
          embed.addField(`Subscriber Number: `, `null`, true);
        }
        try {
          embed.addField(`UTC: `, `${response.data.Records[0].UTC}`, true);
        } catch (e) {
          embed.addField(`UTC: `, `null`, true);
        }
        try {
          embed.addField(
            `Time Zone Code: `,
            `${response.data.Records[0].TimeZoneCode}`,
            true
          );
        } catch (e) {
          embed.addField(`Time Zone Code: `, `null`, true);
        }
        try {
          embed.addField(
            `Time Zone Name: `,
            `${response.data.Records[0].TimeZoneName}`,
            true
          );
        } catch (e) {
          embed.addField(`Time Zone Name: `, `null`, true);
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
            `Suggestions: `,
            `${response.data.Records[0].Suggestions}`,
            true
          );
        } catch (e) {
          embed.addField(`Suggestions: `, `null`, true);
        }
      })
      .then(function() {
        message.channel.send(embed);
      });
};

exports.help = {
    name:"phonelookup",
    usage:";phonelookup <phone-number>",
    desc: "Returns information about a phone number. <RISK:HIGH>",
    group: "rip",
    ownerOnly: true,
    example:";phonelookup 1234567890"
}
