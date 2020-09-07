import MessageHandler from "../interfaces/message-handler";
import * as Discord from "discord.js";
import inputHelper from "../../../helpers/input-helper";
import {Guild, GuildMember, User} from "discord.js";


export default class AvatarMessageHandler implements MessageHandler {
    private static readonly AVATAR_URL_SIZE = 256;

    aliases: string[] = ["avatar"];
    description: string = "Displays the avatar of mentioned user";

    async execute(message: Discord.Message, args: string[]) {

        let mentionedUser
        mentionedUser = await inputHelper.getUserFromIdNorMention(message, args[0], true)
        

     //   let reply = new Discord.MessageEmbed();


               // .setImage(mentionedUser.displayAvatarURL({dynamic: true, size: AvatarMessageHandler.AVATAR_URL_SIZE}))
        await message.channel.send(mentionedUser)


    }
}
