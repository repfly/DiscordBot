import MessageHandler from "../interfaces/message-handler";
import * as Discord from "discord.js";
import idHelper from "../../../helpers/id-helper";
import {GuildMember, User} from "discord.js";

export default class AvatarMessageHandler implements MessageHandler {
    private static readonly AVATAR_URL_SIZE = 256;

    aliases: string[] = ["avatar"];
    description: string = "Displays the avatar of mentioned user";

    async execute(message: Discord.Message, args: string[]) {


       let mentionedUser = message.mentions.users.first() || message.author;

       //Temp fix to make it work again. If input gets received as id,
        // it will ignore and just display the authors avatar.

        /* if (message.mentions) {
            mentionedUser = message.mentions.users.first()
        } else if (idHelper.isIdInputValid(args[0])){
            mentionedUser = message.client.users.cache.get(args[0])
        } else {
            mentionedUser = message.author

        }
        */


        let reply = new Discord.MessageEmbed();

        reply.setDescription("<@" +mentionedUser.id+ ">'s avatar")
                .setColor("RANDOM")
                .setImage(mentionedUser.displayAvatarURL({dynamic: true}))
        await message.channel.send(reply)


    }
}
