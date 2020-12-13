import * as Discord from "discord.js"
import {decode} from "base65536"
import MessageHandler from "../interfaces/message-handler";

export default class decodeMessageHandler implements MessageHandler {
    aliases: string[] = ["decode"];
    description: string = "Decodes the given string with base65536."

   async execute(message: Discord.Message, args: string[]) {
        if (!args[0]){
           await message.channel.send("Please give an input first.");
           return
        }
        let unit8array = decode(args.join(" "))
        let response = new TextDecoder().decode(unit8array)
        await message.channel.send(response)
    }

}