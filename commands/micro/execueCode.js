const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("e")
        .setDescription("execute code of from given addrress"),
    async execute(client, command, message) {
        if(command){
            await command.reply("slash command G");
        } else if (message) {
            await message.reply("message command G");
        } 
    },
};