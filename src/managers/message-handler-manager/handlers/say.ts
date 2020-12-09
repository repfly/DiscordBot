import MessageHandler from "../interfaces/message-handler";
import * as Discord from "discord.js";
import MiscHelper from "../../../helpers/misc-helper";

export default class SayMessagesHandler implements MessageHandler {

    aliases: string[] = ["say"];
    description: string = "Bot types whatever you say.";

    async execute(message: Discord.Message, args: string[]) {

        if (args.toString().length == 0) {
            await message.channel.send("You need to say at least something so I can type it.")
            await MiscHelper.deleteCommand(message);
            return;
        }

        await message.channel.send(args.join(" "));
        return;
    }
}