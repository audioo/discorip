![discorip](./resources/banner.jpg)
# discorip
![s](https://img.shields.io/badge/release-v2-blue) ![s](https://img.shields.io/badge/last&nbsp;commit-september&nbsp;22,&nbsp;2020-blue)

## Utilitarian Selfbot made in NodeJS.

**DISCLAIMER:** Automating normal user accounts (generally called "self-bots") outside of the OAuth2/bot API is forbidden, and can result in an account termination if found. Read the article [here](https://support.discord.com/hc/en-us/articles/115002192352-Automated-user-accounts-self-bots-)

## Features
- No Nonsense
- Easy Setup
- Raid Tools
- Lookups (email, ipv4, phone, etc...)
- Custom Status
- Hidden Server Information
- User Information
- Bot Farming
- DM Tools
- More to come!

## Installation 

1. Visit https://nodejs.org/en/ and download version 10+.
2. Download and extract the contents of [this repository](https://github.com/audioo/discorip/).
3. Navigate to the extracted folder, then into the child folder 'util' and open **config.json** in your preferred text editor.
4. Fill in the token field with your discord token. Save your changes and then exit the file.
5. Run **install.bat**. If this doesn't work, open CMD and navigate to the project folder, then type **npm install** and press **Enter**.
6. Now, run **start.bat** from discorip's root directory. If this doesn't work, open CMD and navigate to the project folder, then type **node index.js** and press **Enter**.
7. **discorip** should now be up and running! Try testing it by going into discord and typing **;help**.

## Setting up lookups

1. Create an account on [Melissa](https://www.melissa.com/).
2. After you have created an account, navigate to the [User Account](https://www.melissa.com/user/user_account.aspx) page.
3. On the [User Account](https://www.melissa.com/user/user_account.aspx) page, look for **License Key Using Credits** and copy the corresponding value.
4. From the root directory of discorip, navigate to *util* -> and proceed to open **config.json** in your preferred text editor.
5. Replace the **melissaKey** value with the key you copied from the Melissa [User Account](https://www.melissa.com/user/user_account.aspx) page.
6. All done!

**NOTE**
It is likely that the lookups will return the code GE09 which is thrown when an account isnt being recognized or doesnt exist. In the case of not being recognized, that occurs sometimes when an is just made. It takes up to 3-4 hours for the account keys to be replicated arcross the array.


## Using discorip with multiple accounts

1. Navigate to the **config.json** file.
2. Add more values to the token table, separated by commas.

      **example: "tokens": ‎‎["token1, "token2", "token3"]‎‎**

## Commands
**PREFIX:** 
     
     (   ;   )

**RIP MODULE:**
     
     - check-host
     
     - companylookup
     
     - emaillookup
     
     - iplookup
     
     - phonelookup

**CLIENT MODULE:**
     
     - avatar
     
     - whois
     
     - token
     
     - dm-ids
     
     - dm-purge
     
     - all-server-emojis

**SERVER MODULE:**
     
     - server-channels
     
     - server-roles
     
     - server-info

**RAID MODULE:**
     
     - raid-server-inflate
     
     - raid-channel-delete
     
     - raid-user-ban
     
     - raid-emoji-delete

**INFO MODULE:**
     
     - about
     
     - help
     
     - uptime
     
**FARM MODULE:**
     
     - mee6
     
     - tatsumaki
     


# INQUIRIES --> [DISCORD SERVER](https://discord.gg/zcen45b). 
