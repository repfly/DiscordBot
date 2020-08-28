import MessageHandler from "../interfaces/message-handler";
import * as Discord from "discord.js";
import idHelper from "../../../helpers/id-helper";
import MiscHelper from "../../../helpers/misc-helper";

export default class AvatarMessageHandler implements MessageHandler {
    private static readonly AVATAR_URL_SIZE = 256;

    aliases: string[] = ["avatar"];
    description: string = "Displays the avatar of mentioned user";

    async execute(message: Discord.Message, args: string[]) {
        let mentionedUser
        try {
            if (message.mentions.users.first() || message.author )
                mentionedUser = message.mentions.users.first() || message.author;
            else if (idHelper.isIdInputValid(args[0]))
                mentionedUser = `<@${args[0]}>`
        } catch (e) {
            await message.channel.send("Invalid input.")
            return;
        }



        let reply = new Discord.MessageEmbed();

        if (!args[0]) {
            reply.setDescription("<@" + message.author.id + ">'s avatar")
                .setColor("RANDOM")
                .setImage(message.author.avatarURL())
            await message.channel.send(reply)
        }


        if (idHelper.isIdInputValid(args[0])){
            try {
                reply.setDescription("<@" +mentionedUser.id + ">'s avatar")
                    .setImage(mentionedUser.avatarURL())
                    .setColor("RANDOM")
                await message.channel.send(reply);
            } catch (e) {
                await message.reply("invalid user.")
            }
        }

    }
}
