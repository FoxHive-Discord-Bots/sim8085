const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("a")
        .setDescription("set address to store code"),
    async execute(client, command, message) {
        if (command) {
            await command.reply("slash command set address to store code");
        } else if (message) {
            await message.reply("message command set address to store code");
        }
    },
};