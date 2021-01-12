import MessageHandler from "../interfaces/message-handler";
import InputHelper from "../../../helpers/input-helper";
import * as Discord from "discord.js";



export default class AvatarMessageHandler implements MessageHandler {
    private static readonly AVATAR_URL_SIZE = 256;

    aliases: string[] = ["avatar"];
    description: string = "Displays the avatar of mentioned user";

    async execute(message: Discord.Message, args: string[]) {

        let mentionedUser = await InputHelper.getUserFromIdNorMention(message, {
            userID: args,
            authorWanted: true
        });


       let reply = new Discord.MessageEmbed()
           .setImage(mentionedUser.displayAvatarURL({dynamic: true, size: AvatarMessageHandler.AVATAR_URL_SIZE}))
           .setTitle(`${mentionedUser.username + '#' + mentionedUser.discriminator}'s avatar`)
           .setColor("RANDOM");

        await message.channel.send(reply);
    }
}
