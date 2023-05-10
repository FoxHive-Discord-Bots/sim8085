const { Events } = require("discord.js");
require('dotenv').config();// to use evnironment variables in locan system
const { testingCh, testingPhase, clientID, adminID, prefix } = process.env;

// --------------------------------------------------
module.exports = {
    name: Events.MessageCreate,
    async execute(client, msg) {
      console.colorLog({ fun : "\nEvent : ", text: "channel MessageCreate"});
        if (msg.author.id === clientID) return; // Check if message was sent by the bot
        if (msg.author.id !== adminID) return; // Check if message was sent by an authorized admin user
        if (!msg.content.startsWith(prefix)) return; // Check if message starts with prefix
        msg.reply({ content: "valid message in channel !" });

        // try {
        //     if (!msg.author.id === adminID) msg.reply({ content: "commands are not avaliable for U , because u don't have adin rights !" });
        //     if (testingPhase) {
        //         if (msg.channel.id === testingCh) {
        //             checkReply(msg);
        //         } else {
        //             msg.reply({ content: "type commands in channel : 'bot-testing channel' if u do not have that channel then asked for it from .." });
        //         }
        //     } else {
        //         checkReply(msg);
        //     }
        // } catch (error) {
        //     console.showError(error); 
        //     msg.reply({ content: `Error: App crashed in event 'MessageCreate'` });
        // }
    }
}

