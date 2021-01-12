import MessageHandler from "../interfaces/message-handler";
import AuthorizationHelper from "../../../helpers/authorization-helper";
import * as Discord from "discord.js";

export default class BanMessageHandler implements MessageHandler {
    aliases: string[] = ["kick"]
    description: string = "Kicks specified user from the server.";

    async execute(message: Discord.Message, args: string[]) {

        if (await AuthorizationHelper.isModActionEligible(message, "KICK_MEMBERS", args)) {
            try {
                let flyingUser = message.mentions.members.first()
                await flyingUser.kick(`Kicked because ${message.author.username + "#" + message.author.discriminator} wants to.`)
                await message.channel.send(flyingUser.user.username + "#" + flyingUser.user.discriminator + " is kicked.")
            } catch (e) {
                await message.channel.send("There has been a issue. You might want to check bot's permissions again.")
                console.log(e)
            }
        }
    }

}