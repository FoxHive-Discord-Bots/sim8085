const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("m")
        .setDescription("show values of memory or set values to memory"),
    async execute(client, command, message) {
        if (command) {
            await command.reply("slash command values of memory");
        } else if (message) { 
            await message.reply("message command values of memory");
        }
    },
};