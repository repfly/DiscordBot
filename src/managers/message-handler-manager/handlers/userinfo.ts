import MessageHandler from "../interfaces/message-handler";
import * as Discord from "discord.js";
import {Client, Guild, GuildMember} from "discord.js";
import MiscHelper from "../../../helpers/misc-helper";
import inputHelper from "../../../helpers/input-helper";
import StringHelper from "../../../helpers/string-helper";
const moment = require('moment');

export default class SayMessagesHandler implements MessageHandler {

    aliases: string[] = ["userinfo"];
    description: string = "Displays desired user's general account info.";

    async execute(message: Discord.Message, args: string[]) {

        let user: Discord.User
        if (!args[0]) {
            user = message.author
        } else if (StringHelper.isStringBuildWithNumbersOnly(args[0].toString())) {
           user =  message.client.users.cache.get(args[0].toString());
        } else user = message.mentions.users.first();

        let info = new Discord.MessageEmbed();


       info.setTitle(user.username + "#" + user.discriminator)
            .addField("User account date: ", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY')}`)
            .addField('Joined at:', `${moment.utc(message.guild.member(user).joinedTimestamp).format('dddd, MMMM Do YYYY')}`);


        info.setTitle("Test input");

        await message.channel.send(info);


    }


}