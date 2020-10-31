const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const prefix = "!";
client.on("message", function (message) {
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.reply("pong!")
    } else if (command === "kick") {
        const user = message.mentions.users.first();
        if (message.author.username === "WotsitGamerYT") {
            if (user) {
                const member = message.guild.member(user)

                if (member) {
                    member.kick("Dont be naughty").then(() => {
                        message.reply(`Succesfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply("Cant kick bots or the owner of the server, sorry!");
                        console.log(err)
                    });
                } else {
                    message.reply("The member doesn't exist!!! Idiot.")
                }






            }

        }
    }
})


client.login(config.BOT_TOKEN)