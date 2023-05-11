const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Replies with olleh !"),
    async execute(client, command, message) {
        if (command) {
            await command.reply("slash command olleh !");
        } else if (message) {
            await commessagemand.reply("message command olleh ! ");
        }
    },
};