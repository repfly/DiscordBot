import MessageHandler from "../interfaces/message-handler";
import * as Discord from "discord.js";



export default class AvatarMessageHandler implements MessageHandler {
    private static readonly AVATAR_URL_SIZE = 256;

    aliases: string[] = ["avatar"];
    description: string = "Displays the avatar of mentioned user";

    async execute(message: Discord.Message, args: string[]) {

        let mentionedUser: Discord.User
        mentionedUser = message.mentions.users.first() || message.author || message.client.users.cache.get(args[0])


       let reply = new Discord.MessageEmbed()
           .setImage(mentionedUser.displayAvatarURL({dynamic: true, size: AvatarMessageHandler.AVATAR_URL_SIZE}))
           .setTitle(`${mentionedUser.username + '#' + mentionedUser.discriminator}'s avatar`)
           .setColor("RANDOM")

        await message.channel.send(reply)

    }
}
