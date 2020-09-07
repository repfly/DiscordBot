
export default class idHelper {
    //Experimental method.
    public static isIdInputValid(input: string): boolean {

        try {

            return parseInt(input) == 18;

        } catch (e) {

            console.log("Tried to parse wrong input to id. Check id-helper.ts")
            return false

        }

    }
}
