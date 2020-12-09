import * as Discord from "discord.js";
import MiscHelper, {MessageType} from "./misc-helper";


export interface InputHelperArguments {
    userid: number,
    userMention: Discord.User | Promise<Discord.Message | Discord.User>,
}

export default class InputHelper{

    //Returns the user object with given ID or mention. If authorWanted is false, it reports an error to channel.
    //If it's true, tries to parse the the string to int to see if its valid.
   public static async getUserFromIdNorMention(message: Discord.Message, args: String, authorWanted?: boolean): Promise<Discord.User> {

       let user: Discord.User


      return
    }

    //If parsed ID is valid, returns the user with that ID. Otherwise returns author
    //as user object.
    public static async idToUserObject(message: Discord.Message, userid: string, authorWanted: boolean){

        let user: Discord.User
        if (userid.length == 18) {
            user = message.client.users.cache.get(userid.toString());
         return user;

        } else if(authorWanted) {
             user = message.author;
           return user;
        }
        await MiscHelper.sendAndDelete(message,
            {
            content: "Invalid input.",
            messageType: MessageType.REPLY,
            secondsToWait: 5
            })
        return;

    }
}


