import MessageHandler from "../interfaces/message-handler";
import * as Discord from "discord.js";
import inputHelper from "../../../helpers/input-helper";
const moment = require('moment');

export default class SayMessagesHandler implements MessageHandler {

    aliases: string[] = ["userinfo"];
    description: string = "Displays desired user's general account info.";

    async execute(message: Discord.Message, args: string[]) {

        let user = inputHelper.getUserFromIdNorMention(message, {
            userID: args[0],
            authorWanted: true
        })

        let info = new Discord.MessageEmbed();

       info.setTitle((await user).username + "#" + (await user).discriminator)
            .addField("User account date: ", `${moment.utc((await user).createdAt).format('dddd, MMMM Do YYYY')}`)
            .addField('Joined at:', `${moment.utc(message.guild.member(await user).joinedTimestamp).format('dddd, MMMM Do YYYY')}`);

        info.setTitle("Test input");
        await message.channel.send(info);
    }
}