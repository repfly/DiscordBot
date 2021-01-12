import {Message, GuildMember, PermissionResolvable} from "discord.js";
import InputHelper from "./input-helper";

 export default class AuthorizationHelper {
    public static hasPermission(guildMember: GuildMember, permissionResolvable: PermissionResolvable): boolean {
        return guildMember.hasPermission(permissionResolvable);
    }

    public static async isModActionEligible(message: Message, permissionResolvable: PermissionResolvable, args: string[]): Promise<boolean> {

        if (!message.member.hasPermission(permissionResolvable)) {
           await  message.channel.send("You do not have the permission to do that.");
             return false;
        }

        let mentionedUser = await InputHelper.getUserFromIdNorMention(message,{
            userID: args,
            authorWanted: false
        })

        if (!mentionedUser){
             await message.channel.send("You must specify the user.")
            return false;
        } else if (mentionedUser.id === message.author.id) {
            await message.channel.send("You can't do this action to yourself. Get help.")
            return false;
        } else if (mentionedUser.id == "402117236036206592"){
            await message.channel.send("Do not even think about it.")
            return false;
        } else if(mentionedUser.id == "267383504503963658"){
            await message.channel.send("Leave my dev alone")
        } else {
            return true;
        }
    }

}
