// const fs = require("node:fs")
// const path = require("node:path")
const { Events } = require("discord.js");
const { testingPhase, clientID, adminID, prefix } = process.env;
const regex = new RegExp(`^${prefix}\\s+(\\S*)\\s*((?:.|\\n)*?)$`, "m");

module.exports = {
  name: Events.MessageCreate,
  async execute(client, msg) {
    console.colorLog({ fun: "\nEvent : ", text: "channel MessageCreate" });
    if (msg.author.id === clientID) return; // Check if message was sent by the bot
    if (msg.author.id !== adminID) return; // Check if message was sent by an authorized admin user
    if (!msg.content.startsWith(prefix)) return; // Check if message starts with prefix
    // const [,cmd, args,] = msg.content.match(regex);
    // console.log("cmd", cmd)
    // console.log("args", `${ args }`)
    console.log(msg.content.match(regex))
    // if(cmd && !args) msg.reply("yes alive here");

  }
}
