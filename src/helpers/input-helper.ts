import * as Discord from "discord.js";


export interface InputHelperArguments {
    userID: string,
    authorWanted: boolean
}

export default class InputHelper {

    public static async getUserFromIdNorMention(message: Discord.Message, options: InputHelperArguments): Promise<Discord.User> {
        let {
            userID,
            authorWanted
        } = options;

        let user: Promise<Discord.User>;
        if (!authorWanted) {
            if (userID.length == 0) {
                await message.channel.send("Please enter a user.");
                return;
            }
        }
        if (userID.length == 0) {
            return message.author;
        }
        if (!await this.isIdValid(message, userID[0])) {
            return;
        }

        user = message.client.users.fetch(userID[0]) || message.client.users.fetch(message.mentions.members.first().id);
        return user;
    }

    //Checks if the id is valid by fetching from the server list.
    public static async isIdValid(message: Discord.Message, userid: string): Promise<boolean> {

        if (userid.length == 18) {
            try {
                message.client.users.cache.get(userid)
                return true;
            } catch (e) {
                console.log(e);
                await message.channel.send(`Cannot find the user with id of ${userid}`);
                return false;
            }
        } else return false;

    }
}


