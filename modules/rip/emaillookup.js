const axios = require("axios");
const { RichEmbed } = require("discord.js");
const config = require("./ripConfig.json");

exports.run = (client, message, args) => {
  const embed = new RichEmbed();
  embed.setColor(`black`);
  embed.setTitle(`**EMAIL LOOKUP**`);

  axios
    .get("https://globalemail.melissadata.net/v4/WEB/GlobalEmail/doGlobalEmail", {
      params: {
        t: "TR_Email",
        id: config.melissaKey,
        email: args[0]
      }
    })
    .then(function(response) {
      try {
          embed.addField(
            `Deliverability Confidence Score: `,
            `${response.data.Records[0].DeliverabilityConfidenceScore}`,
            true
          );
        } catch (e) {
          embed.addField(`Deliverability Confidence Score: `, `null`, true);
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
            `Email Address: `,
            `${response.data.Records[0].EmailAddress}`,
            true
          );
        } catch (e) {
          embed.addField(`Email Address: `, `null`, true);
      }
	  try {
          embed.addField(
            `Mailbox Name: `,
            `${response.data.Records[0].MailboxName}`,
            true
          );
        } catch (e) {
          embed.addField(`Mailbox Name: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Name: `,
            `${response.data.Records[0].DomainName}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Name: `, `null`, true);
      }
	  try {
          embed.addField(
            `Top Level Domain: `,
            `${response.data.Records[0].TopLevelDomain}`,
            true
          );
        } catch (e) {
          embed.addField(`Top Level Domain: `, `null`, true);
      }
	  try {
          embed.addField(
            `Top Level Domain Name: `,
            `${response.data.Records[0].TopLevelDomainName}`,
            true
          );
        } catch (e) {
          embed.addField(`Top Level Domain Name: `, `null`, true);
      }
	  try {
          embed.addField(
            `Date Checked: `,
            `${response.data.Records[0].DateChecked}`,
            true
          );
        } catch (e) {
          embed.addField(`Date Checked: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Age Estimated: `,
            `${response.data.Records[0].DomainAgeEstimated}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Age Estimated: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Expiration Date: `,
            `${response.data.Records[0].DomainExpirationDate}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Expiration Date: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Created Date: `,
            `${response.data.Records[0].DomainCreatedDate}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Created Date: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Updated Date: `,
            `${response.data.Records[0].DomainUpdatedDate}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Updated Date: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Email: `,
            `${response.data.Records[0].DomainEmail}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Email: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Organization: `,
            `${response.data.Records[0].DomainOrganization}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Organization: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Address 1: `,
            `${response.data.Records[0].DomainAddress1}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Address 1: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Locality: `,
            `${response.data.Records[0].DomainLocality}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Locality: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Administrative Area: `,
            `${response.data.Records[0].DomainAdministrativeArea}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Administrative Area: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Postal Code: `,
            `${response.data.Records[0].DomainPostalCode}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Postal Code: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Country: `,
            `${response.data.Records[0].DomainCountry}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Country: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Country Code: `,
            `${response.data.Records[0].DomainCountryCode}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Country Code: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Availability: `,
            `${response.data.Records[0].DomainAvailability}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Availability: `, `null`, true);
      }
	  try {
          embed.addField(
            `Domain Private Proxy: `,
            `${response.data.Records[0].DomainPrivateProxy}`,
            true
          );
        } catch (e) {
          embed.addField(`Domain Private Proxy: `, `null`, true);
      }
	  try {
          embed.addField(
            `Privacy Flag: `,
            `${response.data.Records[0].PrivacyFlag}`,
            true
          );
        } catch (e) {
          embed.addField(`Privacy Flag: `, `null`, true);
      }
	  try {
          embed.addField(
            `MXServer: `,
            `${response.data.Records[0].MXServer}`,
            true
          );
        } catch (e) {
          embed.addField(`MXServer: `, `null`, true);
      }
    })
    .then(function() {
      message.channel.send(embed);
    });
};

exports.help = {
  name: "emaillookup",
  usage: ";emaillookup <email>",
  desc: "Returns information about an email.",
  group: "rip",
  ownerOnly: true,
  example: ";email press@tesla.com"
};
