import MessageHandler from "../interfaces/message-handler";
import * as Discord from "discord.js";
import {Guild, GuildMember} from "discord.js";
import MiscHelper from "../../../helpers/misc-helper";
import inputHelper from "../../../helpers/input-helper";

export default class SayMessagesHandler implements MessageHandler {

    aliases: string[] = ["userinfo"];
    description: string = "Displays desired user's general account info.";

    async execute(message: Discord.Message, args: String[]) {

        let user
        if (!args[0]) {
            user = message.author
        } else if (args[0].length == 18) {
           user =  message.client.users.cache.get(args[0].toString())
        } else user = message.mentions.users.first()

        let info = new Discord.MessageEmbed();

        let accountCreated = user.id
        let test = new Date(user.joinedTimestamp)

       info.setTitle(user.username + "#" + user.discriminator)
            .addField("User join date: ", test.toString())
            .addField("User account date: ", accountCreated)


        info.setTitle("Test input")

        await message.channel.send(info)


    }


}