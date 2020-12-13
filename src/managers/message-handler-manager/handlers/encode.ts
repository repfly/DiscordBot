import MessageHandler from "../interfaces/message-handler";
import {encode} from 'base65536'
import * as Discord from "discord.js"

export default class encodeMessageHandler implements MessageHandler {
    aliases: string[] = ["encode"];
    description: string = "Encodes the given input with Base65536. Don't ask why.";

  async execute(message: Discord.Message, args: string[]) {

        if (!args[0]) {
            await message.channel.send("You need to give me something.");
            return;
        }

        const unit8Array = new TextEncoder().encode(args.join(" "));
        const response = encode(unit8Array);
        await message.channel.send(response);

    }

}