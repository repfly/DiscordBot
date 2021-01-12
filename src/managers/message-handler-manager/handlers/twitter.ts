import * as Discord from "discord.js"
import MessageHandler from "../interfaces/message-handler";
import ConfigManager from "../../../config/config-manager";
const Twitter = require("twitter");
const client = new Twitter({
    consumer_key: ConfigManager.config.consumer_key,
    consumer_secret: ConfigManager.config.consumer_secret,
    access_token_key: ConfigManager.config.access_token_key,
    access_token_secret: ConfigManager.config.access_token_secret
});

export default class twitter implements MessageHandler{

    aliases: string[] = ["twitter", "tw"];
    description: string = "Gets the last tweet from given user. Default is dev's account.";

   async execute(message: Discord.Message, args: string[]) {
       client.get('statuses/user_timeline/', function(error, tweets) {
           if(error) throw error;
           console.log(JSON.stringify(tweets));
       })
    }
}