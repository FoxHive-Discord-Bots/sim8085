const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("code")
        .setDescription("set code to addrress"),
    async execute(client, command, message) {
        if (command) { 
            await command.reply("slash command set code");
        } else if (message) {
            await message.reply("message command set code");
        }
    },
};