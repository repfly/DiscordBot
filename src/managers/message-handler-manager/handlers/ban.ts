import MessageHandler from "../interfaces/message-handler";
import * as Discord from "discord.js";
import {Client} from "discord.js";

export default class BanMessageHandler implements MessageHandler {
    aliases: string[] = ["ban"]
    description: string = "Bans specified user from the server.";

   async execute(message: Discord.Message, args: string[]) {


        if (!message.member.hasPermission("BAN_MEMBERS")) {
             return message.channel.send("You do not have the permission to do that.");
        }
        let client: Discord.Client
        let flyingUser = message.mentions.members.first()

        if (!flyingUser){
            return message.channel.send("You must specify the user.")
        }

        if (flyingUser.id === message.author.id) {
            return message.channel.send("You can't ban yourself. Get help.");
        }
        if (flyingUser.id == "784782143402409984"){
            return message.channel.send("Do not even think about it.")
        }

        try {
            //temporarily disabled because of insufficient testing.
           /* await flyingUser.ban({
              reason: `Banned because ${message.author.username+"#"+message.author.discriminator} wants to.`
            })*/
            await message.channel.send(
                flyingUser.user.username + "#" + flyingUser.user.discriminator + " is banned."
            )
        } catch (e) {
            await message.channel.send("There has been a issue. You might want to check bot's permissions again.")
            console.log(e)
        }



    }

}