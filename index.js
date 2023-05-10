const path = require("node:path");
const fs = require("node:fs");

const { TOKEN, clientID, adminID, guildID, databaseURL, commandsDeployment, eventsPath, commandsPath } =  require("./init.js");
const {
    Client,
    Collection,
    GatewayIntentBits
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages
    ]
});

client.commands = new Collection(); // store commands as Maped with name
// client: discord.js client object,
// TOKEN: bot token,
// clientID: bot discord-ID,
// adminID: bot owner's or developer's discord-ID,
// guildID: Discord-Server-ID,
// databaseURI: uri to connect to database (here for ongo db),
// readlineSync: to take input from prompt or terminal,
// eventsPath: to handle event's specified in events folder, 
// commandsPath: to handle command's from commands folder

console.clear();
console.log("commandsDeployment: "+commandsDeployment);
console.colorLog({ border: "---------------------" });
console.colorLog({ imp: '\nTOKEN : ' + TOKEN + '\nguildID : ' + guildID + '\nclientID : ' + clientID + '\nadminID : ' + adminID + '\nmongodbURI : ' + databaseURL });
// -----------------------------------------------------------------------------
//Command Handling
const HandleCommands = async () => {
    fs.readdirSync(commandsPath)
        .forEach((folder) => {
            const folderPath = path.join(commandsPath, folder);//specific command folder path
            fs.readdirSync(folderPath).filter((file) => file.endsWith(".js"))//select only .js files to prevent errors
                .forEach((file) => {
                    const command = require(path.join(folderPath, file));//command from that command folder leving folder's if there is any
                    client.commands.set(command.data.name, command);// create map-array for commands with name and function
                })
        })
}
//Event  Handling
const handleEvents = async () => {
    //NOTE : put events only in event folder to prevent error's
    console.colorLog({ fun:"Initialising Events ...(/)" });
    fs.readdirSync(eventsPath)
        .forEach( (folder) => {
            const folderPath = path.join(eventsPath, folder);//specific event folder path
            fs.readdirSync(folderPath).filter((file) => file.endsWith(".js"))
                .forEach((file) => {
                    const event = require(path.join(folderPath, file));//specific event from specific event folder
                    if (event.once) {
                        client.once(event.name, (...args) => event.execute(client, ...args)); //event with trigered once only
                    } else {
                        client.on(event.name, (...args) => event.execute(client, ...args)); //event which got trigred many times
                    }
                })
        })
};


if (commandsDeployment) { 
    console.colorLog({ fun:'Deploying now...' });
    require("./deploy-commands.js")(TOKEN, guildID, clientID, adminID);
} else {
    console.colorLog({ fun:'no command deployment, old command will be used or none at all if no commands ever deployed...' });
}
// -----------------------------------------------------------------------------
HandleCommands();//initialize function for command's
handleEvents();//initialize function for event's
client.login(TOKEN);
console.colorLog({ border: "---------------------" });